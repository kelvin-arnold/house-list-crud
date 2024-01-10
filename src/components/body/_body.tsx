import React from 'react';
import styles from './_body.module.css';

const ComponentBody: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div id='body' className={styles['body-wrapper']}>
      {children}
    </div>
  );
};

export default ComponentBody;
