import { ReactNode } from 'react';
import './blue-button.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

const BlueButton = ({ children, className }: Props) => (
  <button type="button" className={`Blue-button ${className}`}>
    {children}
  </button>
);

export default BlueButton;