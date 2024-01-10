import React from 'react';
import styles from './_text.module.css';

type InputProps = {
  placeholder?: string;
  error?: string;
};

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, error, ...args }, ref) => {
    return (
      <div className={styles['textinput-wrapper']}>
        <input
          className={styles['textinput-input']}
          ref={ref}
          placeholder={placeholder}
          {...args}
        />
        {error && <span className={styles['textinput-error']}>{error}</span>}
      </div>
    );
  }
);

export default TextInput;
