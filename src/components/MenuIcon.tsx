import React from 'react';
import './MenuIcon.css';

interface MenuIconProps {
  className?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({ className }) => {
  return <img className={`menu-root ${className || ""}`} src="/elements/images/menu-rot.svg" alt="Menu root" />;
};

export default MenuIcon;
