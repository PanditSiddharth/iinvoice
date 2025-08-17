import * as React from "react";
import { JSX } from "react";

const IcDashboard = ({ size = 18 }: { size?: number }): React.JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 13h8V3H3v10z" />
    <path d="M13 21h8V11h-8v10z" />
    <path d="M3 21h8v-6H3v6z" />
    <path d="M13 9h8V3h-8v6z" />
  </svg>
)

const IcChevron = ({ open, className }: { open: boolean, className?: string }): React.JSX.Element => (
  <svg
    className={`transition-transform duration-300 ${open ? 'rotate-90' : ''} ${className}`}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const IcPackage = ({ size = 18 }: { size?: number }): React.JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73L12 2 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 22l8-4.27A2 2 0 0 0 21 16z" />
    <path d="M12 2v10" />
    <path d="M7 7.5l10 5" />
  </svg>
)

const IcShopping = ({ size = 18 }: { size?: number }): React.JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2l1 4h10l1-4" />
    <path d="M3 6h18l-1.2 7.2A2 2 0 0 1 17.9 15H7.1a2 2 0 0 1-1.9-1.8L3 6z" />
    <circle cx="10" cy="20" r="1" />
    <circle cx="17" cy="20" r="1" />
  </svg>
)

const IcFile = ({ size = 18 }: { size?: number }): React.JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8" />
    <path d="M8 17h5" />
  </svg>
)

const IcReceipt = ({ size = 18 }: { size?: number }): React.JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 6H3v13a1 1 0 0 0 1 1l3-1 3 1 3-1 3 1 3-1a1 1 0 0 0 1-1V6z" />
    <path d="M8 10h8" />
    <path d="M8 14h4" />
  </svg>
)

const IcWallet = ({ size = 18 }: { size?: number }): React.JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14" />
    <path d="M16 8h2a2 2 0 0 1 2 2v1" />
    <path d="M16 12h0" />
  </svg>
)

const IcBar = ({ size = 18 }: { size?: number }): React.JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20v-8" />
    <path d="M18 20v-12" />
    <path d="M6 20v-4" />
  </svg>
)

const IcSettings = ({ size = 18 }: { size?: number }): React.JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82L4.3 3.7A2 2 0 0 1 7.13.86l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09c.05.6.46 1.09 1.05 1.36.61.28 1.28.18 1.82-.33l.06-.06A2 2 0 0 1 19.4 4.6l-.06.06a1.65 1.65 0 0 0-.33 1.82V7c.3.52.9.9 1.52 1.02.62.12 1.24-.01 1.74-.34l.06-.06A2 2 0 0 1 23 9.86l-.06.06a1.65 1.65 0 0 0-.33 1.82V12c.3.52.9.9 1.52 1.02.62.12 1.24-.01 1.74-.34l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82z" />
  </svg>
)

/* ---- Submenu Icons ---- */

const IcItem = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

const IcParty = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
  </svg>
)

const IcUnit = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M4 6h16M4 12h8m-8 6h16" />
  </svg>
)

const IcTax = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M9 14l6-6M15 14l-6-6" />
  </svg>
)

const IcInvoice = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M4 4h16v16H4z" />
    <path d="M8 10h8M8 14h6" />
  </svg>
)

const IcEstimate = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
)

const IcDelivery = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
  </svg>
)

const IcCredit = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
)

const IcPurchaseBill = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M6 2h12v4H6z" />
    <path d="M4 6h16v16H4z" />
  </svg>
)

const IcPurchaseOrder = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="16" r="3" />
    <path d="M13 6l3 3M6 13l3 3" />
  </svg>
)

const IcDebit = (): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M2 12h20M12 2v20" />
  </svg>
)

const IcSearch = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IcPlus = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IcFileText = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 6h8M8 10h8M8 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IcPrinter = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="6" y="9" width="12" height="7" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 17v2a2 2 0 002 2h8a2 2 0 002-2v-2M6 9V5a2 2 0 012-2h8a2 2 0 012 2v4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const IcBarChart3 = (props: React.SVGProps<SVGSVGElement>): React.JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="12" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="9" y="8" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
    <rect x="15" y="4" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const FilterIcon = (): React.JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18l-7 8v6l-4-2v-4z" />
  </svg>
);

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;          // px
  strokeWidth?: number;   // px
  label?: string;         // for accessibility; falls back to name
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function PrintIcon({
  size = 24,
  strokeWidth = 1.8,
  label = "Print",
  ...props
}: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={label}
      {...base}
      strokeWidth={strokeWidth}
      {...props}
    >
      <title>{label}</title>
      {/* Printer body */}
      <path d="M6 9V4h12v5" />
      {/* Paper */}
      <rect x="7" y="14" width="10" height="6" rx="1" />
      {/* Tray / Outline */}
      <rect x="3" y="9" width="18" height="8" rx="2" />
      {/* Status dot */}
      <circle cx="17" cy="13" r="1" />
    </svg>
  );
}

function ShareIcon({
  size = 24,
  strokeWidth = 1.8,
  label = "Share",
  ...props
}: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={label}
      {...base}
      strokeWidth={strokeWidth}
      {...props}
    >
      <title>{label}</title>
      {/* Nodes */}
      <circle cx="18" cy="5" r="2" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="19" r="2" />
      {/* Links */}
      <path d="M8 12l8-5M8 12l8 5" />
    </svg>
  );
}

function MoreVerticalIcon({
  size = 24,
  strokeWidth = 1.8,
  label = "More options",
  ...props
}: IconProps): React.JSX.Element {
  // Note: strokeWidth doesn't affect filled circles; kept for API parity
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={label}
      {...base}
      strokeWidth={strokeWidth}
      {...props}
    >
      <title>{label}</title>
      <circle cx="12" cy="5" r="1.8" fill="currentColor" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <circle cx="12" cy="19" r="1.8" fill="currentColor" />
    </svg>
  );
}

function FullScreenIcon({
  size = 24,
  strokeWidth = 1.8,
  label = "Full screen",
  ...props
}: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={label}
      {...base}
      strokeWidth={strokeWidth}
      {...props}
    >
      <title>{label}</title>
      {/* Top-left */}
      <polyline points="3 9 3 3 9 3" />
      {/* Top-right */}
      <polyline points="15 3 21 3 21 9" />
      {/* Bottom-right */}
      <polyline points="21 15 21 21 15 21" />
      {/* Bottom-left */}
      <polyline points="9 21 3 21 3 15" />
    </svg>
  );
}

function ExitFullScreenIcon({
  size = 24,
  strokeWidth = 1.8,
  label = "Exit full screen",
  ...props
}: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={label}
      {...base}
      strokeWidth={strokeWidth}
      {...props}
    >
      <title>{label}</title>
      {/* Top-left */}
      <polyline points="9 3 3 3 3 9" />
      {/* Top-right */}
      <polyline points="15 3 15 9 21 9" />
      {/* Bottom-right */}
      <polyline points="21 15 15 15 15 21" />
      {/* Bottom-left */}
      <polyline points="9 21 9 15 3 15" />
    </svg>
  );
}

// ===================== Inline SVG fallbacks (no extra libraries) =====================
const IconEdit: React.FC<{ className?: string }> = ({ className = '' }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
  </svg>
)
const IconTrash: React.FC<{ className?: string }> = ({ className = '' }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
  </svg>
)
const IconDownload: React.FC<{ className?: string }> = ({ className = '' }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)
const IconUpload: React.FC<{ className?: string }> = ({ className = '' }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
)
const IconPackage: React.FC<{ className?: string }> = ({ className = '' }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M16.5 9.4L7.5 4.9M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
)
const IconHash: React.FC<{ className?: string }> = ({ className = '' }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>
)
const IconScale: React.FC<{ className?: string }> = ({ className = '' }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 7h18" />
    <path d="M6 7l3-3h6l3 3" />
    <path d="M12 7v13" />
    <path d="M5 21h14" />
  </svg>
)
const IconTag: React.FC<{ className?: string }> = ({ className = '' }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20.59 13.41L11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82z" />
    <circle cx="7.5" cy="7.5" r="1.5" />
  </svg>
)
const IconRupee: React.FC<{ className?: string }> = ({ className = '' }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M6 4h12" />
    <path d="M6 8h12" />
    <path d="M9 12c4 0 6 2 6 6H6" />
  </svg>
)
const IconBoxes: React.FC<{ className?: string }> = ({ className = '' }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
)
const IconPercent: React.FC<{ className?: string }> = ({ className = '' }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
)



export {
  IcDashboard,
  IcShopping,
  IcFile,
  IcReceipt,
  IcWallet,
  IcBar,
  IcSettings,
  IcPackage,
  IcChevron,
  IcItem,
  IcParty,
  IcUnit,
  IcTax,
  IcInvoice,
  IcEstimate,
  IcDelivery,
  IcCredit,
  IcPurchaseBill,
  IcPurchaseOrder,
  IcDebit,
  IcSearch,
  IcPlus,
  IcFileText,
  IcPrinter,
  IcBarChart3,
  FilterIcon,
  PrintIcon,
  ShareIcon,
  MoreVerticalIcon,
  FullScreenIcon,
  ExitFullScreenIcon,
  IconEdit,
  IconTrash,
  IconDownload,
  IconUpload,
  IconPackage,
  IconHash,
  IconScale,
  IconTag,
  IconRupee,
  IconBoxes,
  IconPercent,
  // Exporting icons for use in other components
}