import React from 'react';
import styles from './_range.module.css';
import { RangeProps } from './_range.types';
import { toPriceFormat } from '../../utils';

const Range: React.FC<
  React.ButtonHTMLAttributes<HTMLInputElement> & RangeProps
> = ({ label, min, max, onChangeValue, ...args }) => {
  const [rangeValue, setRangeValue] = React.useState<number>(min);

  const onRangeValueChange = (val: number) => {
    setRangeValue(val);
    onChangeValue(val);
  };

  return (
    <div className={styles['range-wrapper']} {...args}>
      <span className={styles['range-label']}>{label}:</span>
      <input
        type='range'
        min={min}
        max={max}
        onChange={val => onRangeValueChange(parseInt(val.target.value))}
      />
      <span className={styles['range-label']}>
        {toPriceFormat(rangeValue || min)}
      </span>
    </div>
  );
};

export default Range;
