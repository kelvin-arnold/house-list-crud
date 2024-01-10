import React from 'react';
import styles from './_detail.module.css';

type HouseDetailFooterInfoProps = {
  name: string;
  label: string;
  value: string;
};

const DetailFooter: React.FC<HouseDetailFooterInfoProps> = ({
  name,
  label,
  value,
}) => {
  return (
    <div
      id={`house-detail-content-footer-${name}`}
      className={styles['detail-footer-wrapper']}
    >
      <span className='text-xl'>{value || '-'}</span>
      <span className='text-xs text-slate-500'>{label}</span>
    </div>
  );
};

export default DetailFooter;
