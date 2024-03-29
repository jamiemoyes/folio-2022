import { MouseEvent, PropsWithChildren, useRef } from 'react';
import classes from './Badge.module.css';
import { Arrow } from '../../assets/icons';

interface BadgeProps extends PropsWithChildren {
  componentId?: string;
  direction?: 'up' | 'down' | 'none';
  href?: string;
  target?: string;
}

function Badge({
  direction = 'none',
  componentId,
  children,
  href,
  target,
}: BadgeProps) {
  return (
    <a
      href={href}
      target={target}
      id={componentId}
      className={`badge ${classes.badge}`}
    >
      {children}
      {direction !== 'none' && (
        <Arrow transform={direction === 'up' ? 'rotate(-90)' : ''} />
      )}
    </a>
  );
}

export { Badge };
