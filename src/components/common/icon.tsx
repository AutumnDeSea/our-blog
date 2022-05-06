import React from 'react';
type SvgIconProps = {
  iconName: string
  className?: string
};
const SvgIcon = ({ iconName, className = '' }: SvgIconProps) => {
  return (
    <svg className={`icon ${className}`} aria-hidden="true">
      <use xlinkHref={`#${iconName}`}></use>
    </svg>
  );
};
export default SvgIcon;