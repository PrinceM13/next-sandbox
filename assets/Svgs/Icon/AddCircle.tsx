import { Svg } from "@/interfaces";
import Frame from "../Frame";

export default function AddCircle({
  color = "#000000",
  size = 24,
  className = "",
  ...props
}: Svg.ISvgProps): JSX.Element {
  return (
    <Frame size={size} className={className} {...props}>
      <svg
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
        <path
          d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Frame>
  );
}
