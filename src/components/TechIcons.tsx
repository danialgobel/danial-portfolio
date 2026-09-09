import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5", size = 20 }) => {
  const key = name.toLowerCase().replace(/\s+/g, '');

  switch (key) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} className={className} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#58C4DC" />
          <g stroke="#58C4DC" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path d="M42 45h44v14H69v44H53V59H42V45zm49 41.5c4 2.8 9.3 4.5 14.8 4.5 5.5 0 8.5-2.3 8.5-5.9 0-4-4.6-5.8-12-8.5-11-4-16.5-9.3-16.5-18.4 0-10.7 8.7-18.7 23.5-18.7 6.8 0 13.2 2 17.5 4.8l-4.5 12.8c-3.6-2.1-8.5-3.6-13.2-3.6-5.4 0-8.2 2.3-8.2 5.5 0 3.7 4.5 5.4 12.5 8.4 11.2 4.1 16 9.8 16 18.7 0 11.4-9.3 19.3-24.8 19.3-8.1 0-15.6-2.6-20.5-6l4.7-12.8z" fill="#FFFFFF" />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect width="128" height="128" rx="16" fill="#F7DF1E" />
          <path d="M68.5 87.5c2.4 4.3 6 7 11.8 7 5.7 0 9.4-2.8 9.4-6.8 0-4.7-3.9-6.4-10.5-9.3l-3.6-1.5c-10.6-4.5-17.6-10.2-17.6-22.3 0-11.1 8.5-19.5 22.1-19.5 9.6 0 16.5 3.3 20.8 11.1l-10.8 6.9c-2.3-4.1-5-5.7-10-5.7-4.4 0-7.3 2.7-7.3 6.1 0 4.2 3 5.9 9.3 8.6l3.6 1.5c12.5 5.4 19.1 11 19.1 23.7 0 13.6-10.7 20.7-24.8 20.7-13.8 0-22.9-6.9-26.7-16.1l15.6-8.2zm-44.2 1.3c2.4 4.2 5.5 7.7 11.9 7.7 6.1 0 10.1-2.5 10.1-12.2V35.6h15.8v48.6c0 18.2-10.7 26-25.7 26-11.9 0-18.7-5.9-22.7-14.7l10.6-6.7z" fill="#000000" />
        </svg>
      );

    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38BDF8" />
        </svg>
      );

    case 'vite':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <path d="M29.914 5.922L16.797 29.21c-.34.606-1.254.606-1.594 0L2.086 5.922c-.37-.66.16-1.464.912-1.374l13.064 1.558 12.94-1.558c.752-.09 1.282.714.912 1.374z" fill="url(#vite-gradient-a)" />
          <path d="M21.996 2.222l-9.352 1.838a.936.936 0 00-.736.756l-2.73 13.43c-.114.56.402 1.034.938.862l4.896-1.566-2.454 7.64c-.218.68.684 1.18 1.176.652l12.44-13.376c.49-.526.114-1.398-.598-1.398h-5.46l4.032-7.594c.334-.63-.198-1.37-.894-1.244h-.258z" fill="url(#vite-gradient-b)" />
          <defs>
            <linearGradient id="vite-gradient-a" x1="2.086" y1="4.548" x2="27.42" y2="29.21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient id="vite-gradient-b" x1="9.096" y1="2.148" x2="21.996" y2="24.472" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFEA83" />
              <stop offset=".083" stopColor="#FFDD35" />
              <stop offset="1" stopColor="#FFA800" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'firebase':
    case 'firestore':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <path d="M4.664 14.887L6.85 2.158a.55.55 0 011.026-.145l2.67 5.066-5.882 7.808z" fill="#FFA000" />
          <path d="M12.44 9.176l1.79-3.415a.55.55 0 01.991.033l4.116 9.093-6.897-5.71z" fill="#F57C00" />
          <path d="M4.664 14.887L11.5 22.36a.75.75 0 001.077 0l6.76-7.473L4.664 14.887z" fill="#FFCA28" />
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" stroke="#5FA04E" strokeWidth="1.5" fill="#5FA04E" fillOpacity="0.15" />
          <path d="M12 6.5l5.5 3.17v6.33L12 19.17l-5.5-3.17V9.67L12 6.5z" fill="#5FA04E" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <path d="M22.046 10.963L13.037 1.954a1.47 1.47 0 00-2.078 0L8.9 3.91l2.63 2.63c.62-.21 1.34-.06 1.83.43.5.5.64 1.23.42 1.85l2.53 2.53c.62-.22 1.35-.08 1.85.42.7.7.7 1.85 0 2.55s-1.85.7-2.55 0a1.815 1.815 0 01-.42-1.87l-2.36-2.36v5.27c.43.25.75.69.84 1.21.18.99-.49 1.93-1.48 2.11-.99.18-1.93-.49-2.11-1.48a1.81 1.81 0 011.08-1.96V9.08a1.82 1.82 0 01-1.08-1.97c.18-.99 1.12-1.66 2.11-1.48.33.06.63.2.88.4l-2.6-2.6-6.04 6.04a1.47 1.47 0 000 2.08l9.01 9.01c.57.57 1.5.57 2.08 0l8.97-8.97a1.47 1.47 0 000-2.08z" fill="#F05032" />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case 'figma':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
          <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
          <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
          <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" />
          <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
        </svg>
      );

    case 'capcut':
      return (
        <svg viewBox="0 0 25 24" width={size} height={size} className={className} fill="currentColor">
          <path d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z" />
        </svg>
      );

    case 'android':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#3DDC84">
          <path d="M16.61 5.09l1.6-2.77c.14-.24.06-.55-.18-.69-.24-.14-.55-.06-.69.18l-1.63 2.82C14.33 4.22 13.19 4 12 4s-2.33.22-3.71.63L6.66 1.81c-.14-.24-.45-.32-.69-.18-.24.14-.32.45-.18.69l1.6 2.77C4.69 6.64 3 9.49 3 13h18c0-3.51-1.69-6.36-4.39-7.91zM8 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM3 14.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6H3zm15 0v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6h-3z" />
        </svg>
      );

    case 'ios':
    case 'apple':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.62-.76 1.04-1.81.92-2.89-.96.04-2.13.64-2.77 1.39-.56.64-1.05 1.7-1 2.76 1.08.08 2.23-.51 2.85-1.26z" />
        </svg>
      );

    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#0A66C2">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.64-1.64A1.64 1.64 0 0 0 6.46 5.5a1.64 1.64 0 0 0-1.64 1.63c0 .9.73 1.63 1.64 1.63m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
      );

    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );

    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
};
