import React from 'react';
import styles from './ModelWindow.module.css';
import { ReactNode } from 'react';

interface ModelWindowProps {
  children: ReactNode;
  editMode: boolean;
  toggleEditMore: () => void;
}

function ModelWindow({ children, editMode }: ModelWindowProps) {
  let stylesOfModal = [];
  stylesOfModal.push(styles.model_window);
  if (editMode) stylesOfModal.push(styles.active);
  return (
    <div className={stylesOfModal.join(' ')} onClick={() => {}}>
      <div className={styles.model_content}>{children}</div>
    </div>
  );
}

export default ModelWindow;
