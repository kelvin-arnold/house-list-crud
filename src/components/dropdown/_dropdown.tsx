import React from 'react';
import styles from './_dropdown.module.css';
import { DropdownOption, DropdownProps } from './_dropdown.types';
import { Icon } from '../icon';

const Dropdown: React.FC<
  React.HTMLAttributes<HTMLDivElement> & DropdownProps
> = ({ option, options, label, onOptionSelect, ...args }) => {
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [currentOption, setCurrentOption] = React.useState<DropdownOption>(
    option ?? options[0]
  );

  const [visibleOptions, setVisibleOptions] = React.useState<boolean>(false);

  const _toggleVisibleOptions = () => setVisibleOptions(!visibleOptions);

  const _onSelect = (value: DropdownOption) => {
    setCurrentOption(value);
    onOptionSelect(value);
    _toggleVisibleOptions();
  };

  React.useEffect(() => {
    if (option) {
      setCurrentOption(option);
    }
  }, [option]);

  React.useEffect(() => {
    const handleDocumentClick = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setVisibleOptions(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className={styles['dropdown-wrapper']} ref={dropdownRef} {...args}>
      <div className={styles['dropdown-container']}>
        <span className={styles['dropdown-container-label']}>{label}:</span>
        <div
          className={styles['dropdown-container-input']}
          onClick={_toggleVisibleOptions}
        >
          <span className={styles['dropdown-container-input-label']}>
            {currentOption.label}
          </span>
          <Icon icon='expand_more' dark={false} />
        </div>
      </div>
      {visibleOptions && options.length && (
        <div className={styles['dropdown-options']}>
          {options.map((opt, key) => (
            <div
              key={key}
              className={styles['dropdown-options-item']}
              onClick={() => _onSelect(opt)}
            >
              <span className={styles['dropdown-options-item-label']}>
                {opt.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
