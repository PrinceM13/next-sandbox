import { Svg } from "@/interfaces";
import Frame from "../Frame";

export default function ArrowRight({
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
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>arrow-right-circle</title>
        <desc>Created with Sketch Beta.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Icon-Set" transform="translate(-308.000000, -1087.000000)" fill={color}>
            <path
              d="M324,1117 C316.268,1117 310,1110.73 310,1103 C310,1095.27 316.268,1089 324,1089 C331.732,1089 338,1095.27 338,1103 C338,1110.73 331.732,1117 324,1117 L324,1117 Z M324,1087 C315.163,1087 308,1094.16 308,1103 C308,1111.84 315.163,1119 324,1119 C332.837,1119 340,1111.84 340,1103 C340,1094.16 332.837,1087 324,1087 L324,1087 Z M330.535,1102.12 L324.879,1096.46 C324.488,1096.07 323.855,1096.07 323.465,1096.46 C323.074,1096.86 323.074,1097.49 323.465,1097.88 L327.586,1102 L317,1102 C316.447,1102 316,1102.45 316,1103 C316,1103.55 316.447,1104 317,1104 L327.586,1104 L323.465,1108.12 C323.074,1108.51 323.074,1109.15 323.465,1109.54 C323.855,1109.93 324.488,1109.93 324.879,1109.54 L330.535,1103.88 C330.775,1103.64 330.85,1103.31 330.795,1103 C330.85,1102.69 330.775,1102.36 330.535,1102.12 L330.535,1102.12 Z"
              id="arrow-right-circle"
            ></path>
          </g>
        </g>
      </svg>
    </Frame>
  );
}
