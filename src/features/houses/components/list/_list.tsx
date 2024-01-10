import React from 'react';
import styles from './_list.module.css';

const HouseCardList: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles['list-wrapper']}>{children}</div>;
};

export default HouseCardList;
