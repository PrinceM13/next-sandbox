import styles from '@/styles/Svg.module.css';

import { useRouter } from 'next/navigation';

import { Svg } from '@/interfaces';

export default function Frame({
  children,
  size = 24,
  linkTo = '#',
  padding = 0,
  className = '',
  divRef = null,
  isActive = false,
  onClick,
}: Svg.ISvgProps): JSX.Element {
  const router = useRouter();
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick ? onClick() : router.push(linkTo);
  };

  return (
    <div
      ref={divRef}
      style={{
        width: `${size + 2 * padding}px`,
        padding: `${padding}px`,
        display: 'flex',
        cursor: isActive ? 'pointer' : 'default',
      }}
      className={`${isActive ? styles.active : ''} ${className}`}
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
}
