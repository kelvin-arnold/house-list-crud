import React from 'react';
import styles from './_icon.module.css';
import { IconProps } from './_icon.types';

const Icon: React.FC<IconProps> = ({ icon, dark = true }) => {
  return (
    <span
      className={`
        material-symbols-outlined text-base
        ${styles[dark ? 'icon-light' : 'icon-dark']}
      `}
    >
      {icon}
    </span>
  );
};

export default Icon;
