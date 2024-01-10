import React from 'react';
import styles from './_message.module.css';
import { MessageProps } from './_message.type';

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className={styles['message-wrapper']}>
      <span className={styles['message-label']}>{message}</span>
    </div>
  );
};

export default Message;
