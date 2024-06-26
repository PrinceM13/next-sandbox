import { Svg } from "@/interfaces";
import Frame from "../Frame";

export default function ColorPicker({
  color = "#1C1B1F",
  size = 24,
  className = "",
  ...props
}: Svg.ISvgProps): JSX.Element {
  return (
    <Frame size={size} className={className} {...props}>
      <svg
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 14 14"
        role="img"
        focusable="false"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="matrix(.3 0 0 .3 -.23126488 -.2)">
          <path
            fill="#ffc107"
            d="M24.639 4c-8.6 0-18.43 4.954-18.43 18.947C6.209 33.108 13.842 44 25.519 44h.175c4.385-.079 9.105-2.918 9.105-8.959 0-1.157-.431-2.159-.809-3.042-.102-.233-.199-.462-.288-.694-.864-2.175.089-2.971 2.329-4.565 2.537-1.806 6.013-4.278 5.968-10.819C41.999 12.032 37.756 4 24.639 4zm.56 35.2c-2.241 0-4.001-1.76-4.001-3.999 0-2.241 1.76-4.001 4.001-4.001 2.238 0 3.998 1.76 3.998 4.001 0 2.239-1.759 3.999-3.998 3.999z"
          />

          <circle cx="34.5" cy="16.5" r="3.5" fill="#9c27b0" />

          <circle cx="25.5" cy="10.5" r="3.5" fill="#2196f3" />

          <circle cx="15.5" cy="15.5" r="3.5" fill="#4caf50" />

          <circle cx="14.5" cy="26.5" r="3.5" fill="#ff3d00" />
        </g>
      </svg>
    </Frame>
  );
}
