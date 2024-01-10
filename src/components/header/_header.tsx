import React from 'react';
import styles from './_header.module.css';
import * as Uuid from 'uuid';
import { Link } from 'react-router-dom';
import { HeaderLink } from '../../types';

const ComponentHeader: React.FC<{ links: HeaderLink[] }> = ({ links }) => {
  return (
    <div id='header' className={styles['header-wrapper ']}>
      <nav className={styles['header-nav-wrapper']}>
        <ul className={styles['header-nav-wrapper-list']}>
          {links.map(link => (
            <li
              className={styles['header-nav-wrapper-list-item']}
              key={`header-link-${Uuid.v4()}`}
            >
              <Link className='link' aria-current='page' to={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ComponentHeader;
