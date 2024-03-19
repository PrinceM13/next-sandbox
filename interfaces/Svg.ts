export interface ISvgProps {
  children?: React.ReactNode;
  color?: string;
  size?: number;
  linkTo?: string;
  padding?: number;
  className?: string;
  isActive?: boolean;
  divRef?: React.RefObject<HTMLDivElement> | null;
  onClick?: () => void;
}
