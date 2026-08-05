import React from 'react';

// ==========================================
// CONSTANTS & CONFIG
// ==========================================

// Map 't' and 'o' to strong outline colors
const OUTLINE_COLORS = {
  dt: "#2DD4BF", // Teal 400
  do: "#FB923C", // Orange 400
  t: "#ddedec", // Teal 50
  o: "#FFF7ED", // Peach (Orange 50)


};

// Map 't' and 'o' to light fill colors
const FILL_COLORS = {
  t: "#ddedec", // Teal 50
  o: "#FFF7ED", // Peach (Orange 50)
  do: "#f27b22", // Orange 400
  dt: "#0d6266", // Teal 400



};

// Common SVG props to ensure full size and centering
const svgCommon = "w-full h-full overflow-visible pointer-events-none";

// ==========================================
// GROUP 1: GEOMETRIC SHAPES
// ==========================================

// 1. Rounded Square (Outline)
export const ShapeSquareOutline = ({
  color = "t", thickness = 4, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <rect
        x="5" y="5" width="90" height="90" rx="20"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness}
      />
    </svg>
  );
};

// 2. Rounded Square (Filled)
export const ShapeSquareFilled = ({
  color = "t", className = "" ,round = "20"
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <rect x="5" y="5" width="90" height="90" rx={round} />
    </svg>
  );
};

// 3. Circle/Blob (Filled)
export const ShapeCircleFilled = ({
  color = "o", className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <circle cx="50" cy="50" r="45" />
    </svg>
  );
};

// 4. Pentagon (Outline)
export const ShapePentagonOutline = ({
  color = "o", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path
        d="M50 5 L95 38 L78 90 L22 90 L5 38 Z"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// ==========================================
// GROUP 2: POLYGONS & CHEVRONS
// ==========================================

// 5. Hexagon (Filled)
export const ShapeHexagonFilled = ({
  color = "t", className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <polygon points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25" />
    </svg>
  );
};

// 6. Hexagon (Outline)
export const ShapeHexagonOutline = ({
  color = "o", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <polygon
        points="50 2, 93 25, 93 75, 50 98, 7 75, 7 25"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 7. Chevron / V-Shape (Filled)
export const ShapeChevronFilled = ({
  color = "t", className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M0 0 L30 0 L100 50 L30 100 L0 100 L70 50 Z" />
    </svg>
  );
};

// 8. Triangle (Outline)
export const ShapeTriangleOutline = ({
  color = "o", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <polygon
        points="50 5, 95 90, 5 90"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// ==========================================
// GROUP 3: IRREGULAR SHARDS
// ==========================================

// 9. Shard A (Filled) - 4-Sided
export const ShapeShardAFilled = ({
  color = "o", className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M10 10 L90 20 L80 90 L20 70 Z" />
    </svg>
  );
};

// 10. Shard A (Outline)
export const ShapeShardAOutline = ({
  color = "o", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path
        d="M10 10 L90 20 L80 90 L20 70 Z"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 11. Shard B (Filled) - Pointy Triangle
export const ShapeShardBFilled = ({
  color = "t", className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M0 0 L100 30 L40 100 Z" />
    </svg>
  );
};

// 12. Shard B (Outline)
export const ShapeShardBOutline = ({
  color = "t", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path
        d="M0 0 L100 30 L40 100 Z"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 13. Shard C (Filled) - Complex 5-Sided
export const ShapeShardCFilled = ({
  color = "o", className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M10 0 L90 10 L100 60 L50 100 L0 80 Z" />
    </svg>
  );
};

// 14. Shard C (Outline)
export const ShapeShardCOutline = ({
  color = "o", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path
        d="M10 0 L90 10 L100 60 L50 100 L0 80 Z"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// ==========================================
// GROUP 4: ORGANIC & ABSTRACT
// ==========================================

// 15. Organic Bean (Filled)
export const ShapeBeanFilled = ({
  color = "t", className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M30 50 Q 10 20 50 10 Q 90 0 90 50 Q 90 100 50 90 Q 10 80 30 50 Z" />
    </svg>
  );
};

// 16. Organic Bean (Outline)
export const ShapeBeanOutline = ({
  color = "t", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path
        d="M30 50 Q 10 20 50 10 Q 90 0 90 50 Q 90 100 50 90 Q 10 80 30 50 Z"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 17. Irregular Quad (Filled)
export const ShapeQuadFilled = ({
  color = "o", className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <polygon points="10,10 90,5 95,90 5,80" />
    </svg>
  );
};

// 18. Irregular Quad (Outline)
export const ShapeQuadOutline = ({
  color = "o", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <polygon
        points="10,10 90,5 95,90 5,80"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 19. Zigzag (Stroke Only)
export const ShapeZigzag = ({
  color = "o", thickness = 3, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path
        d="M5 50 L20 20 L35 50 L50 20 L65 50 L80 20 L95 50"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// ==========================================
// GROUP 5: LIQUID BLOBS
// ==========================================

// 20. Liquid Blob A (The "Potato") - Filled
export const ShapeBlobAFilled = ({
  color = "o", className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M40 10 C 70 0, 95 25, 90 55 C 85 85, 60 95, 35 90 C 10 85, 0 60, 10 30 C 15 10, 25 15, 40 10 Z" />
    </svg>
  );
};

// 21. Liquid Blob A - Outline
export const ShapeBlobAOutline = ({
  color = "o", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path
        d="M40 10 C 70 0, 95 25, 90 55 C 85 85, 60 95, 35 90 C 10 85, 0 60, 10 30 C 15 10, 25 15, 40 10 Z"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 22. Liquid Blob B (The "Peanut") - Filled
export const ShapeBlobBFilled = ({
  color = "t", className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M30 20 Q 50 5, 70 20 Q 95 40, 80 70 Q 60 95, 40 85 Q 5 70, 20 40 Q 25 30, 30 20 Z" />
    </svg>
  );
};

// 23. Liquid Blob B - Outline
export const ShapeBlobBOutline = ({
  color = "t", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path
        d="M30 20 Q 50 5, 70 20 Q 95 40, 80 70 Q 60 95, 40 85 Q 5 70, 20 40 Q 25 30, 30 20 Z"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 24. The "Splat" (Explosion/Star-like) - Filled
export const ShapeSplatFilled = ({
  color = "o", className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill={FILL_COLORS[color]}>
      <path d="M50 20 Q 60 5, 70 25 Q 90 20, 80 40 Q 95 60, 75 70 Q 70 95, 50 80 Q 30 95, 25 70 Q 5 60, 20 40 Q 10 20, 30 25 Q 40 5, 50 20 Z" />
    </svg>
  );
};

// 25. The "Splat" - Outline
export const ShapeSplatOutline = ({
  color = "o", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path
        d="M50 20 Q 60 5, 70 25 Q 90 20, 80 40 Q 95 60, 75 70 Q 70 95, 50 80 Q 30 95, 25 70 Q 5 60, 20 40 Q 10 20, 30 25 Q 40 5, 50 20 Z"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 26. Hand-Drawn Loop (Stroke Only)
export const ShapeScribbleLoop = ({
  color = "t", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path
        d="M20 40 C 20 10, 80 10, 80 40 C 80 80, 20 80, 20 50 C 20 30, 70 20, 90 60"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};

// 27. Hand-Drawn Squiggle (Stroke Only)
export const ShapeSquiggle = ({
  color = "o", thickness = 2, className = ""
}) => {
  return (
    <svg className={`${svgCommon} ${className}`} viewBox="0 0 100 100" fill="none">
      <path
        d="M10 50 Q 25 20, 40 50 T 70 50 T 95 30"
        stroke={OUTLINE_COLORS[color]} strokeWidth={thickness} strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
};


export const ShapeTirahutLogo = ({
  color = "o", thickness = 2,  opacity="0.25",className = ""
}) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1920 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" opacity={opacity} >
      <path d="M960,120 L740.6,500 L820.6,500 L960,258.5 L1099.4,500 L1179.4,500 Z" stroke="white" stroke-width="5" fill="none" />

      <path d="M717.5,540 L797.5,540 L624.3,840 L940,840 L940,920 L498.1,920 Z" stroke="white" stroke-width="5" fill="none" />

      <path d="M1202.5,540 L1122.5,540 L1295.7,840 L980,840 L980,920 L1421.9,920 Z" stroke="white" stroke-width="5" fill="none" />
    </svg>
  );
};

export const ShapeShieldwithCheckmark = ({
  color = "o", thickness = 2, className = ""
}) => {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield Background */}
      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="#0f6f73" />

      {/* Shadow effect on right side (Optional, adds depth) */}
      <path d="M12 22C12 22 20 18 20 12V5L12 2V22Z" fill="black" fillOpacity="0.1" />

      {/* Checkmark */}
      <path d="M9 12L11 14L15 10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const ShapeGearwithMagnifyingGlass = ({
  color = "o", thickness = 2, className = ""
}) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >

      <defs>
        <clipPath id="gear-split-mask">
          <rect x="50" y="0" width="50" height="100" />
        </clipPath>
      </defs>

      {/* 1. GEAR LAYER */}
      <g>
        {/* Teal Base (Full Gear) */}
        <path fill="#1E6B7B" d="M90.5,43.2l-9-1.5c-0.6-2.3-1.6-4.4-2.8-6.4l6.1-6.8c0.9-1,0.9-2.6-0.1-3.6l-5.7-5.7c-1-1-2.6-1-3.6-0.1l-6.8,6.1c-2-1.3-4.1-2.2-6.4-2.8l-1.5-9C50.5,12,49.4,11,48,11h-8c-1.4,0-2.5,1-2.7,2.4l-1.5,9c-2.3,0.6-4.4,1.6-6.4,2.8l-6.8-6.1c-1-0.9-2.6-0.9-3.6,0.1l-5.7,5.7c-1,1-1,2.6,0.1,3.6l6.1,6.8c-1.3,2-2.2,4.1-2.8,6.4l-9,1.5C6,43.4,5,44.5,5,45.9v8.1c0,1.4,1,2.5,2.4,2.7l9,1.5c0.6,2.3,1.6,4.4,2.8,6.4l-6.1,6.8c-0.9,1-0.9,2.6,0.1,3.6l5.7,5.7c1,1,2.6,1,3.6,0.1l6.8-6.1c2,1.3,4.1,2.2,6.4,2.8l1.5,9c0.2,1.4,1.3,2.4,2.7,2.4h8c1.4,0,2.5-1,2.7-2.4l1.5-9c2.3-0.6,4.4-1.6,6.4-2.8l6.8,6.1c1,0.9,2.6,0.9,3.6-0.1l5.7-5.7c1-1,1-2.6-0.1-3.6l-6.1-6.8c1.3-2,2.2-4.1,2.8-6.4l9-1.5c1.4-0.2,2.4-1.3,2.4-2.7v-8.1C93,44.5,91.9,43.4,90.5,43.2z M50,68c-9.9,0-18-8.1-18-18s8.1-18,18-18s18,8.1,18,18S59.9,68,50,68z" />

        {/* Orange Overlay (Right Half Only) */}
        <path fill="#F49339" clip-path="url(#gear-split-mask)" d="M90.5,43.2l-9-1.5c-0.6-2.3-1.6-4.4-2.8-6.4l6.1-6.8c0.9-1,0.9-2.6-0.1-3.6l-5.7-5.7c-1-1-2.6-1-3.6-0.1l-6.8,6.1c-2-1.3-4.1-2.2-6.4-2.8l-1.5-9C50.5,12,49.4,11,48,11h-8c-1.4,0-2.5,1-2.7,2.4l-1.5,9c-2.3,0.6-4.4,1.6-6.4,2.8l-6.8-6.1c-1-0.9-2.6-0.9-3.6,0.1l-5.7,5.7c-1,1-1,2.6,0.1,3.6l6.1,6.8c-1.3,2-2.2,4.1-2.8,6.4l-9,1.5C6,43.4,5,44.5,5,45.9v8.1c0,1.4,1,2.5,2.4,2.7l9,1.5c0.6,2.3,1.6,4.4,2.8,6.4l-6.1,6.8c-0.9,1-0.9,2.6,0.1,3.6l5.7,5.7c1,1,2.6,1,3.6,0.1l6.8-6.1c2,1.3,4.1,2.2,6.4,2.8l1.5,9c0.2,1.4,1.3,2.4,2.7,2.4h8c1.4,0,2.5-1,2.7-2.4l1.5-9c2.3-0.6,4.4-1.6,6.4-2.8l6.8,6.1c1,0.9,2.6,0.9,3.6-0.1l5.7-5.7c1-1,1-2.6-0.1-3.6l-6.1-6.8c1.3-2,2.2-4.1,2.8-6.4l9-1.5c1.4-0.2,2.4-1.3,2.4-2.7v-8.1C93,44.5,91.9,43.4,90.5,43.2z M50,68c-9.9,0-18-8.1-18-18s8.1-18,18-18s18,8.1,18,18S59.9,68,50,68z" />
      </g>

      {/* 2. "ERASER" LAYER (White Gap) */}
      <g stroke="white" strokeWidth="15" strokeLinecap="round" fill="none">
        <circle cx="50" cy="50" r="18" />
        <line x1="64" y1="64" x2="82" y2="82" />
      </g>

      {/* 3. MAGNIFIER ICON LAYER */}
      <g>
        <line x1="66" y1="66" x2="80" y2="80" stroke="#1E6B7B" strokeWidth="9" strokeLinecap="round" />
        <circle cx="50" cy="50" r="18" stroke="#F49339" strokeWidth="7" fill="white" />
      </g>

    </svg>
  );
};

export const ShapeTrendingUpArrow = ({
  color = "o", thickness = 2, className = ""
}) => {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="growthGradient" x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f6f73" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>

      {/* The Arrow Path */}
      <path
        d="M4 17L10 11L14 15L21 6M21 6H16M21 6V11"
        stroke="url(#growthGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};



export const ShapeCircuit = ({
  color = "#5a6e7f",
  thickness = 1.5,
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      className={className}
      width="100%"
      height="100%"
    >
      <g
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* CENTRAL CHIP (Rotated 45 degrees) */}
        <rect
          x="385"
          y="385"
          width="30"
          height="30"
          transform="rotate(45 400 400)"
          strokeWidth={thickness * 2.5}
        />

        {/* --- TOP RIGHT ARM (Dense, Long) --- */}
        <g>
          <path d="M425 385 L445 385 L580 250 L630 200" /> <circle cx="630" cy="200" r="2.5" fill="none" />
          <path d="M430 395 L460 395 L600 255 L650 205" /> <circle cx="650" cy="205" r="2.5" fill="none" />
          <path d="M425 375 L455 345 L550 250 L600 200" /> <circle cx="600" cy="200" r="2.5" fill="none" />
          <path d="M415 370 L435 350 L500 285 L540 245" /> <circle cx="540" cy="245" r="2.5" fill="none" />
          <path d="M420 405 L450 405 L520 335 L560 335 L610 285" /> <circle cx="610" cy="285" r="2.5" fill="none" />
          <path d="M425 415 L455 415 L500 370 L550 370 L640 280" /> <circle cx="640" cy="280" r="2.5" fill="none" />
          <path d="M435 425 L475 425 L550 350 L680 220" /> <circle cx="680" cy="220" r="2.5" fill="none" />
        </g>

        {/* --- TOP LEFT ARM (Splayed out) --- */}
        <g>
          <path d="M375 385 L355 385 L250 280 L200 280 L160 240" /> <circle cx="160" cy="240" r="2.5" fill="none" />
          <path d="M380 375 L360 355 L280 275 L220 275 L180 235" /> <circle cx="180" cy="235" r="2.5" fill="none" />
          <path d="M370 395 L340 395 L270 325 L210 325 L150 265" /> <circle cx="150" cy="265" r="2.5" fill="none" />
          <path d="M385 370 L365 350 L300 350 L260 310 L190 310" /> <circle cx="190" cy="310" r="2.5" fill="none" />
          <path d="M390 360 L370 340 L310 340 L240 270" /> <circle cx="240" cy="270" r="2.5" fill="none" />
        </g>

        {/* --- BOTTOM LEFT ARM (Long, trailing down) --- */}
        <g>
          <path d="M375 415 L355 415 L250 520 L200 570" /> <circle cx="200" cy="570" r="2.5" fill="none" />
          <path d="M380 425 L360 445 L280 525 L240 565" /> <circle cx="240" cy="565" r="2.5" fill="none" />
          <path d="M370 405 L340 405 L270 475 L220 525" /> <circle cx="220" cy="525" r="2.5" fill="none" />
          <path d="M385 430 L365 450 L300 515 L260 555" /> <circle cx="260" cy="555" r="2.5" fill="none" />
          <path d="M395 435 L395 465 L350 510 L300 610" /> <circle cx="300" cy="610" r="2.5" fill="none" />
          <path d="M405 440 L405 480 L370 515 L330 630" /> <circle cx="330" cy="630" r="2.5" fill="none" />
        </g>

        {/* --- BOTTOM RIGHT ARM (Wide spread) --- */}
        <g>
          <path d="M415 430 L435 450 L550 450 L650 550" /> <circle cx="650" cy="550" r="2.5" fill="none" />
          <path d="M425 425 L455 425 L560 530 L610 530" /> <circle cx="610" cy="530" r="2.5" fill="none" />
          <path d="M430 415 L460 415 L500 455 L600 455 L680 535" /> <circle cx="680" cy="535" r="2.5" fill="none" />
          <path d="M440 405 L470 405 L520 455 L620 455 L700 535" /> <circle cx="700" cy="535" r="2.5" fill="none" />
          <path d="M435 395 L485 395 L550 460 L650 460 L750 510" /> <circle cx="750" cy="510" r="2.5" fill="none" />
        </g>
      </g>
    </svg>
  );
};



