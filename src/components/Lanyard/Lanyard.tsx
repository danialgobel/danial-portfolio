/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RapierRigidBody
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import * as THREE from 'three';

export interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  frontImage?: string;
  className?: string;
}

// =========================================================================
// HELPER: 4-PIECE GEOMETRIC MONOGRAM (DANIALGOBEL LOGO)
// =========================================================================
function drawDGLogo(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
  color: string = '#FFFFFF'
) {
  ctx.save();
  ctx.translate(cx, cy);
  // Elegant modern italic shear (-14 deg) exactly matching the DanialGobel brandmark
  ctx.transform(1, 0, -0.25, 1, 0, 0);

  const half = size / 2;
  const gap = size * 0.09;
  const r = size * 0.44;
  const blkW = (size - gap) / 2;
  const blkH = (size - gap) / 2;

  ctx.fillStyle = color;

  // Top-Left block: rounded on top-left
  ctx.beginPath();
  ctx.roundRect(-half, -half, blkW, blkH, [r, 0, 0, 0]);
  ctx.fill();

  // Top-Right block: rounded on top-right and bottom-right (curved 'D' shape)
  ctx.beginPath();
  ctx.roundRect(gap / 2, -half, blkW, blkH, [0, r, r, 0]);
  ctx.fill();

  // Bottom-Left block: rounded on top-left and bottom-left
  ctx.beginPath();
  ctx.roundRect(-half, gap / 2, blkW, blkH, [r, 0, 0, r]);
  ctx.fill();

  // Bottom-Right block: rounded on bottom-right
  ctx.beginPath();
  ctx.roundRect(gap / 2, gap / 2, blkW, blkH, [0, 0, r, 0]);
  ctx.fill();

  ctx.restore();
}

// =========================================================================
// STRAP TEXTURE GENERATOR: WOVEN BLACK RIBBON WITH "DanialGobel" BRANDING
// =========================================================================
function createStrapCanvas(): HTMLCanvasElement {
  const W = 1024;
  const H = 128;
  const cvs = document.createElement('canvas');
  cvs.width = W;
  cvs.height = H;
  const ctx = cvs.getContext('2d');
  if (ctx) {
    // Deep matte black fabric base
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(0, 0, W, H);

    // Subtle fabric woven texture lines
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let x = 0; x < W; x += 4) {
      ctx.fillRect(x, 0, 2, H);
    }

    // Draw repeating DanialGobel emblem and text
    const unitWidth = 512;
    for (let u = 0; u < 2; u++) {
      const offsetX = u * unitWidth;
      // Monogram logo with authentic slant
      drawDGLogo(ctx, offsetX + 75, 64, 60, '#FFFFFF');

      // Bold Typography with clean tracking
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 52px system-ui, -apple-system, sans-serif';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      ctx.fillText('DanialGobel', offsetX + 140, 64);
    }
  }
  return cvs;
}

// =========================================================================
// ID CARD CANVASES GENERATOR:
// FRONT: PHOTO + "Danial Habib Abdillah" + ROLES + "ID 00110" + PUNCH HOLE
// BACK: LARGE DANIALGOBEL LOGO + OFFICIAL VERIFICATION + BARCODE IDENTITAS
// =========================================================================
function createCardCanvases(img: HTMLImageElement | null): {
  frontCanvas: HTMLCanvasElement;
  backCanvas: HTMLCanvasElement;
} {
  const W = 1024;
  const H = 1400;

  // -----------------------------------------------------------------------
  // 1. FRONT CARD CANVAS
  // -----------------------------------------------------------------------
  const frontCanvas = document.createElement('canvas');
  frontCanvas.width = W;
  frontCanvas.height = H;
  const fCtx = frontCanvas.getContext('2d');
  if (fCtx) {
    fCtx.save();
    // Rotate 180 degrees to align with Three.js RoundedBoxGeometry UV mapping
    fCtx.translate(W / 2, H / 2);
    fCtx.rotate(Math.PI);
    fCtx.translate(-W / 2, -H / 2);

    // Light neutral card base
    fCtx.fillStyle = '#F8FAFC';
    fCtx.beginPath();
    fCtx.roundRect(0, 0, W, H, 54);
    fCtx.fill();

    fCtx.save();
    fCtx.beginPath();
    fCtx.roundRect(0, 0, W, H, 54);
    fCtx.clip();

    // Upper Section: Profile Photo Container
    const photoY = 0;
    const photoH = 860;

    fCtx.fillStyle = '#E2E8F0';
    fCtx.fillRect(0, photoY, W, photoH);

    if (img && img.naturalWidth > 0) {
      const scale = Math.max(W / img.naturalWidth, photoH / img.naturalHeight);
      const sw = img.naturalWidth * scale;
      const sh = img.naturalHeight * scale;
      const sx = (W - sw) / 2;
      const sy = (photoY + photoH - sh) / 2 + 25;
      fCtx.drawImage(img, sx, sy, sw, sh);
    }

    // Top punch hole cutout at center: [x: 512, y: 80, radius: 26]
    fCtx.fillStyle = '#0F172A';
    fCtx.beginPath();
    fCtx.arc(512, 80, 26, 0, Math.PI * 2);
    fCtx.fill();
    fCtx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    fCtx.lineWidth = 4;
    fCtx.stroke();

    // Lower Section: Clean White Plate
    const plateY = 860;
    fCtx.fillStyle = '#FFFFFF';
    fCtx.fillRect(0, plateY, W, H - plateY);

    // Subtle plate hairline
    fCtx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
    fCtx.lineWidth = 2;
    fCtx.beginPath();
    fCtx.moveTo(0, plateY);
    fCtx.lineTo(W, plateY);
    fCtx.stroke();

    // Name (Bold Modern Sans-Serif)
    fCtx.fillStyle = '#0F172A';
    fCtx.font = 'bold 70px system-ui, -apple-system, sans-serif';
    fCtx.textAlign = 'left';
    fCtx.textBaseline = 'alphabetic';
    fCtx.fillText('Danial Habib', 80, plateY + 105);
    fCtx.fillText('Abdillah', 80, plateY + 185);

    // Right ID code: "ID 00110"
    fCtx.fillStyle = '#475569';
    fCtx.font = 'bold 34px monospace';
    fCtx.textAlign = 'right';
    fCtx.fillText('ID 00110', W - 80, plateY + 140);

    // Member Position Label
    fCtx.fillStyle = '#94A3B8';
    fCtx.font = '700 20px system-ui, -apple-system, sans-serif';
    fCtx.textAlign = 'left';
    fCtx.fillText('MEMBER POSITION', 80, plateY + 250);

    // Roles (3 Lines)
    fCtx.fillStyle = '#334155';
    fCtx.font = '600 28px system-ui, -apple-system, sans-serif';
    fCtx.fillText('Developer', 80, plateY + 295);
    fCtx.fillText('Creative Technologist', 80, plateY + 340);
    fCtx.fillText('CapCut Video Specialist', 80, plateY + 385);

    // Subtle edge rim border
    fCtx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    fCtx.lineWidth = 6;
    fCtx.beginPath();
    fCtx.roundRect(3, 3, W - 6, H - 6, 52);
    fCtx.stroke();

    fCtx.restore();
    fCtx.restore();
  }

  // -----------------------------------------------------------------------
  // 2. BACK CARD CANVAS: LOGO BESAR DANIALGOBEL + BARCODE
  // -----------------------------------------------------------------------
  const backCanvas = document.createElement('canvas');
  backCanvas.width = W;
  backCanvas.height = H;
  const bCtx = backCanvas.getContext('2d');
  if (bCtx) {
    bCtx.save();
    // Rotate 180 degrees so back face texture is right side up in Three.js RoundedBoxGeometry
    bCtx.translate(W / 2, H / 2);
    bCtx.rotate(Math.PI);
    bCtx.translate(-W / 2, -H / 2);

    // Crisp white luxury background
    bCtx.fillStyle = '#FFFFFF';
    bCtx.beginPath();
    bCtx.roundRect(0, 0, W, H, 54);
    bCtx.fill();

    bCtx.save();
    bCtx.beginPath();
    bCtx.roundRect(0, 0, W, H, 54);
    bCtx.clip();

    // Subtle luxury background gradient
    const bgGrad = bCtx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, '#FFFFFF');
    bgGrad.addColorStop(0.6, '#F8FAFC');
    bgGrad.addColorStop(1, '#F1F5F9');
    bCtx.fillStyle = bgGrad;
    bCtx.fillRect(0, 0, W, H);

    // Punch hole cutout at top center: [x: 512, y: 80, radius: 26]
    bCtx.fillStyle = '#0F172A';
    bCtx.beginPath();
    bCtx.arc(512, 80, 26, 0, Math.PI * 2);
    bCtx.fill();
    bCtx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
    bCtx.lineWidth = 4;
    bCtx.stroke();

    // Top Header Badge
    bCtx.fillStyle = '#64748B';
    bCtx.font = 'bold 24px monospace';
    bCtx.textAlign = 'center';
    bCtx.letterSpacing = '4px';
    bCtx.fillText('OFFICIAL DIGITAL PASS // 2026', W / 2, 210);

    // Large DanialGobel Monogram Logo
    const logoCenterY = 470;
    const logoSize = 230;
    drawDGLogo(bCtx, W / 2, logoCenterY, logoSize, '#0F172A');

    // Big Bold "DanialGobel"
    bCtx.fillStyle = '#0F172A';
    bCtx.font = 'bold 72px system-ui, -apple-system, sans-serif';
    bCtx.textAlign = 'center';
    bCtx.fillText('DanialGobel', W / 2, logoCenterY + 195);

    // Tagline & Institution
    bCtx.fillStyle = '#64748B';
    bCtx.font = '600 26px system-ui, -apple-system, sans-serif';
    bCtx.fillText('DEVELOPER • CREATIVE TECHNOLOGIST', W / 2, logoCenterY + 250);
    bCtx.fillText('UNIVERSITAS AHMAD DAHLAN (UAD)', W / 2, logoCenterY + 290);

    // Divider Line
    bCtx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
    bCtx.lineWidth = 2;
    bCtx.beginPath();
    bCtx.moveTo(120, logoCenterY + 345);
    bCtx.lineTo(W - 120, logoCenterY + 345);
    bCtx.stroke();

    // Barcode Identitas
    const barY = logoCenterY + 380;
    const barH = 115;
    const barStart = 130;
    const barTotalW = W - 260;
    bCtx.fillStyle = '#0F172A';
    for (let i = 0; i < 54; i++) {
      const barW = (i % 5 === 0 || i % 7 === 0) ? 9 : (i % 2 === 0 ? 3 : 5);
      const curX = barStart + (i / 54) * barTotalW;
      bCtx.fillRect(curX, barY, barW, barH);
    }

    // Barcode ID text below
    bCtx.fillStyle = '#334155';
    bCtx.font = 'bold 30px monospace';
    bCtx.textAlign = 'center';
    bCtx.fillText('* ID: 00110-DH-GOBEL-2026 *', W / 2, barY + barH + 50);

    // Outer subtle card border
    bCtx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    bCtx.lineWidth = 6;
    bCtx.beginPath();
    bCtx.roundRect(3, 3, W - 6, H - 6, 52);
    bCtx.stroke();

    bCtx.restore();
    bCtx.restore();
  }

  return { frontCanvas, backCanvas };
}

// =========================================================================
// GLOBAL PRELOADER & TEXTURE CACHE: INSTANT LOAD WITHOUT DELAYS
// =========================================================================
export interface LanyardTextures {
  front: THREE.CanvasTexture;
  back: THREE.CanvasTexture;
  strap: THREE.CanvasTexture;
}

let prewarmedTextures: LanyardTextures | null = null;
let assetLoadPromise: Promise<LanyardTextures> | null = null;

export function preloadLanyardAssets(src: string = '/images/profile.jpg'): Promise<LanyardTextures> {
  if (typeof window === 'undefined') return Promise.resolve(null as any);
  if (prewarmedTextures) return Promise.resolve(prewarmedTextures);
  if (assetLoadPromise) return assetLoadPromise;

  assetLoadPromise = new Promise((resolve) => {
    // 1. Create strap texture
    const strapCvs = createStrapCanvas();
    const strapTex = new THREE.CanvasTexture(strapCvs);
    strapTex.wrapS = THREE.RepeatWrapping;
    strapTex.wrapT = THREE.RepeatWrapping;
    strapTex.repeat.set(4, 1);
    strapTex.colorSpace = THREE.SRGBColorSpace;
    strapTex.minFilter = THREE.LinearFilter;
    strapTex.generateMipmaps = false;

    // 2. Load profile image and create card textures
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const { frontCanvas, backCanvas } = createCardCanvases(img);
      const frontTex = new THREE.CanvasTexture(frontCanvas);
      frontTex.colorSpace = THREE.SRGBColorSpace;
      frontTex.minFilter = THREE.LinearFilter;
      frontTex.generateMipmaps = false;

      const backTex = new THREE.CanvasTexture(backCanvas);
      backTex.colorSpace = THREE.SRGBColorSpace;
      backTex.minFilter = THREE.LinearFilter;
      backTex.generateMipmaps = false;

      prewarmedTextures = { front: frontTex, back: backTex, strap: strapTex };
      resolve(prewarmedTextures);
    };
    img.onerror = () => {
      const { frontCanvas, backCanvas } = createCardCanvases(null);
      const frontTex = new THREE.CanvasTexture(frontCanvas);
      const backTex = new THREE.CanvasTexture(backCanvas);
      prewarmedTextures = { front: frontTex, back: backTex, strap: strapTex };
      resolve(prewarmedTextures);
    };
    img.src = src;
  });

  return assetLoadPromise;
}

// Eager execution when module is parsed by Vite
if (typeof window !== 'undefined') {
  preloadLanyardAssets('/images/profile.jpg');
}

export const Lanyard: React.FC<LanyardProps> = ({
  position = [0, 0, 11],
  gravity = [0, -28, 0],
  fov = 28,
  transparent = true,
  frontImage = '/images/profile.jpg',
  className = ''
}) => {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const [textures, setTextures] = useState<LanyardTextures | null>(() => prewarmedTextures);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!textures) {
      preloadLanyardAssets(frontImage).then(texs => {
        setTextures(texs);
      });
    }
  }, [frontImage, textures]);

  return (
    <div className={`relative w-full h-full min-h-[420px] flex items-center justify-center select-none ${className}`}>
      <Canvas
        style={{ touchAction: 'none' }}
        camera={{ position: isMobile ? [0, 0, 12.5] : position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{
          alpha: transparent,
          antialias: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.15;
        }}
      >
        <ambientLight intensity={1.3} />
        <directionalLight position={[5, 10, 8]} intensity={2.2} />
        <directionalLight position={[-6, -4, 4]} intensity={0.9} color="#E2E8F0" />
        <directionalLight position={[0, 4, -6]} intensity={0.8} color="#FFFFFF" />

        <Suspense fallback={null}>
          {textures && (
            <Physics gravity={gravity} interpolate={false} timeStep={1 / 60}>
              <Band isMobile={isMobile} textures={textures} />
            </Physics>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

interface BandProps {
  isMobile: boolean;
  textures: LanyardTextures;
}

function Band({ isMobile, textures }: BandProps) {
  const fixed = useRef<RapierRigidBody>(null);
  const j1 = useRef<RapierRigidBody>(null);
  const j2 = useRef<RapierRigidBody>(null);
  const j3 = useRef<RapierRigidBody>(null);
  const card = useRef<RapierRigidBody>(null);

  const vec = useMemo(() => new THREE.Vector3(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);

  // Tracking for smooth 360-degree rotation when dragging
  const prevPointerX = useRef(0);
  const dragVelocityX = useRef(0);
  const currentAngleY = useRef(0);

  // Segment physics properties
  const segmentProps = useMemo(
    () => ({
      type: 'dynamic' as const,
      canSleep: false,
      colliders: false as const,
      angularDamping: 1.0,
      linearDamping: 1.6
    }),
    []
  );

  // 3D Rounded Geometry: Every corner is smoothly rounded!
  const cardGeometry = useMemo(() => {
    return new RoundedBoxGeometry(2.2, 3.0, 0.04, 12, 0.22);
  }, []);

  // Card Box Materials: [Right, Left, Top, Bottom, Front (+Z: ID Card), Back (-Z: Logo & Barcode)]
  const materials = useMemo(() => {
    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: '#0F172A',
      roughness: 0.25,
      metalness: 0.5
    });

    const frontMat = new THREE.MeshPhysicalMaterial({
      map: textures.front,
      color: '#FFFFFF',
      roughness: 0.15,
      metalness: 0.05,
      clearcoat: 0.95,
      clearcoatRoughness: 0.1
    });

    const backMat = new THREE.MeshPhysicalMaterial({
      map: textures.back,
      color: '#FFFFFF',
      roughness: 0.15,
      metalness: 0.05,
      clearcoat: 0.95,
      clearcoatRoughness: 0.1
    });

    return [edgeMaterial, edgeMaterial, edgeMaterial, edgeMaterial, frontMat, backMat];
  }, [textures]);

  // Initial curve spline: Starts high up matching the off-screen ceiling drop!
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(0.675, 3.954, 0),
          new THREE.Vector3(0.450, 3.686, 0),
          new THREE.Vector3(0.225, 3.418, 0),
          new THREE.Vector3(0, 3.150, 0)
        ],
        false,
        'chordal'
      )
  );

  const [dragged, setDragged] = useState<THREE.Vector3 | false>(false);
  const [hovered, setHovered] = useState(false);

  // Rope joints: 3 segments connecting fixed anchor (y=3.15) down to j3
  // Length 0.35 balances the card slightly lower, perfectly centered in the frame!
  useRopeJoint(fixed as any, j1 as any, [[0, 0, 0], [0, 0, 0], 0.35]);
  useRopeJoint(j1 as any, j2 as any, [[0, 0, 0], [0, 0, 0], 0.35]);
  useRopeJoint(j2 as any, j3 as any, [[0, 0, 0], [0, 0, 0], 0.35]);

  // Spherical joint connects j3 to the top clip of the card at [0, 1.5, 0]
  useSphericalJoint(j3 as any, card as any, [
    [0, 0, 0],
    [0, 1.5, 0]
  ]);

  // Cursor feedback
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged]);

  // On mount: Initial drop spin that gracefully reveals both sides!
  useEffect(() => {
    const timer = setTimeout(() => {
      if (card.current) {
        card.current.wakeUp();
        card.current.setAngvel({ x: 0.05, y: -0.6, z: 0.05 }, true);
      }
    }, 40);
    return () => clearTimeout(timer);
  }, []);

  // Woven Ribbon Strap with "DanialGobel" Monogram Branding
  const lineGeometry = useMemo(() => new MeshLineGeometry(), []);
  const lineMaterial = useMemo(() => {
    const mat = new MeshLineMaterial({
      color: new THREE.Color('#FFFFFF'),
      map: textures.strap,
      useMap: 1,
      repeat: new THREE.Vector2(4, 1),
      resolution: isMobile ? new THREE.Vector2(1000, 2000) : new THREE.Vector2(1600, 1600),
      lineWidth: 0.36
    });
    mat.depthTest = false;
    return mat;
  }, [isMobile, textures]);

  useFrame((state, delta) => {
    // 1. Mouse / Touch Dragging Raycasting + 360 Rotation during Drag
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      const dist = -state.camera.position.z / dir.z;
      const targetX = state.camera.position.x + dir.x * dist - dragged.x;
      const targetY = state.camera.position.y + dir.y * dist - dragged.y;

      const deltaX = state.pointer.x - prevPointerX.current;
      prevPointerX.current = state.pointer.x;
      dragVelocityX.current = THREE.MathUtils.lerp(dragVelocityX.current, deltaX, 0.4);
      currentAngleY.current += deltaX * 6.0;

      const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), currentAngleY.current);
      card.current.setNextKinematicRotation(q);

      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current.setNextKinematicTranslation({
        x: Math.max(-4.5, Math.min(4.5, targetX)),
        y: Math.max(-3.5, Math.min(3.4, targetY)),
        z: 0
      });
    }

    if (fixed.current && j1.current && j2.current && j3.current && card.current) {
      // 2. Velocity clamping for stability
      const linvel = card.current.linvel();
      const speed = Math.hypot(linvel.x, linvel.y, linvel.z);
      if (speed > 16) {
        const factor = 16 / speed;
        card.current.setLinvel({ x: linvel.x * factor, y: linvel.y * factor, z: linvel.z * factor }, true);
      }

      const angvel = card.current.angvel();
      const angSpeed = Math.hypot(angvel.x, angvel.y, angvel.z);
      if (angSpeed > 15) {
        const factor = 15 / angSpeed;
        card.current.setAngvel({ x: angvel.x * factor, y: angvel.y * factor, z: angvel.z * factor }, true);
      }

      // 3. Ribbon Spline Points Update
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.translation());
      curve.points[2].copy(j1.current.translation());
      curve.points[3].copy(fixed.current.translation());
      lineGeometry.setPoints(curve.getPoints(28));

      // 4. Aerodynamic flat-face stabilization:
      // When the card slows down (angSpeed < 2.5), gently align it to face the closest flat side (Photo or Logo)
      // so it never settles stuck sideways edge-on!
      if (!dragged && angSpeed < 2.5) {
        const q = card.current.rotation();
        const quat = new THREE.Quaternion(q.x, q.y, q.z, q.w);
        const euler = new THREE.Euler().setFromQuaternion(quat, 'YXZ');
        const nearestFace = Math.round(euler.y / Math.PI) * Math.PI;
        const diffY = euler.y - nearestFace;
        const targetTorqueY = -diffY * 1.5;

        card.current.setAngvel(
          {
            x: angvel.x * 0.97,
            y: (angvel.y + targetTorqueY * Math.min(delta, 0.05)) * 0.95,
            z: angvel.z * 0.97
          },
          true
        );
      }
    }
  });

  return (
    <>
      {/* 1. Fixed Top Anchor at top edge of container */}
      <RigidBody ref={fixed} type="fixed" position={[0, 3.15, 0]} />

      {/*
        2. Flexible Joints & Card:
        SPAWNS HIGH UP IN THE CEILING (OUTSIDE SCREEN) FOR A REALISTIC HIGH GRAVITY DROP!
        fixed: [0, 3.15, 0]
        j1: [0.225, 3.418, 0] (dist = 0.35 == segLen)
        j2: [0.450, 3.686, 0] (dist = 0.35 == segLen)
        j3: [0.675, 3.954, 0] (dist = 0.35 == segLen)
        card: [0.675, 2.454, 0] (card top is at 2.454 + 1.5 = 3.954, way above screen top 2.74!)
      */}
      <RigidBody position={[0.225, 3.418, 0]} ref={j1} {...segmentProps}>
        <BallCollider args={[0.07]} />
      </RigidBody>

      <RigidBody position={[0.450, 3.686, 0]} ref={j2} {...segmentProps}>
        <BallCollider args={[0.07]} />
      </RigidBody>

      <RigidBody position={[0.675, 3.954, 0]} ref={j3} {...segmentProps}>
        <BallCollider args={[0.07]} />
      </RigidBody>

      <RigidBody
        position={[0.675, 2.454, 0]}
        ref={card}
        {...segmentProps}
        type={dragged ? 'kinematicPosition' : 'dynamic'}
      >
        <CuboidCollider args={[1.1, 1.5, 0.04]} />

        {/* Card Assembly: 3D Rounded ID Card with Chrome Swivel Clasp */}
        <group
          position={[0, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerUp={e => {
            (e.target as any).releasePointerCapture?.(e.pointerId);
            setDragged(false);
            if (card.current) {
              const spinY = dragVelocityX.current * 45;
              card.current.setAngvel(
                {
                  x: (Math.random() - 0.5) * 1.5,
                  y: Math.max(-14, Math.min(14, Math.abs(spinY) > 0.8 ? spinY : (Math.random() > 0.5 ? 4 : -4))),
                  z: (Math.random() - 0.5) * 1.5
                },
                true
              );
            }
          }}
          onPointerDown={e => {
            (e.target as any).setPointerCapture?.(e.pointerId);
            prevPointerX.current = (e as any).pointer?.x || 0;
            dragVelocityX.current = 0;
            if (card.current) {
              const pos = card.current.translation();
              setDragged(new THREE.Vector3().copy(e.point).sub(vec.set(pos.x, pos.y, pos.z)));
              const q = card.current.rotation();
              const quat = new THREE.Quaternion(q.x, q.y, q.z, q.w);
              const euler = new THREE.Euler().setFromQuaternion(quat, 'YXZ');
              currentAngleY.current = euler.y;
            }
          }}
        >
          {/* 3D Rounded ID Card Body with RoundedBoxGeometry */}
          <mesh geometry={cardGeometry} material={materials} />

          {/* Chrome Swivel Lobster Clasp & Ring passing through the Card Punch Hole */}
          <group position={[0, 1.35, 0]}>
            {/* Metallic Ring through Hole */}
            <mesh rotation={[0, Math.PI / 2, 0]}>
              <torusGeometry args={[0.08, 0.02, 16, 32]} />
              <meshStandardMaterial color="#E2E8F0" metalness={0.96} roughness={0.12} />
            </mesh>

            {/* Swivel Cylinder Joint */}
            <mesh position={[0, 0.12, 0]}>
              <cylinderGeometry args={[0.04, 0.05, 0.10, 16]} />
              <meshStandardMaterial color="#CBD5E1" metalness={0.96} roughness={0.12} />
            </mesh>

            {/* Lobster Clasp Body */}
            <mesh position={[0, 0.22, 0]}>
              <boxGeometry args={[0.10, 0.12, 0.05]} />
              <meshStandardMaterial color="#E2E8F0" metalness={0.96} roughness={0.12} />
            </mesh>

            {/* Folded Black Ribbon Attachment Loop connecting to strap */}
            <mesh position={[0, 0.32, 0]}>
              <boxGeometry args={[0.32, 0.08, 0.05]} />
              <meshStandardMaterial color="#1E293B" metalness={0.3} roughness={0.7} />
            </mesh>
          </group>
        </group>
      </RigidBody>

      {/* Woven Lanyard Ribbon Band with "DanialGobel" Monogram Texture */}
      <mesh>
        <primitive object={lineGeometry} attach="geometry" />
        <primitive object={lineMaterial} attach="material" />
      </mesh>
    </>
  );
}
