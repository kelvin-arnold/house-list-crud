import React from 'react';
import styles from './_button.module.css';
import { ButtonProps } from './_button.types';
import { Icon } from '../icon';

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({ label, icon, ...args }) => {
  return (
    <button
      role='button'
      type='button'
      {...args}
      className={styles['btn-wrapper']}
    >
      {icon && <Icon icon={icon} />}
      <span className='text-sm text-white'>{label}</span>
    </button>
  );
};

export default Button;
