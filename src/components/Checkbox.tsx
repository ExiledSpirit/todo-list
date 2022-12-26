import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function Checkbox(props: CheckboxProps) {
  return (
    <input
      type='checkbox'
      readOnly
      className={styles.checkbox}
      {...props}
    />
  );
}