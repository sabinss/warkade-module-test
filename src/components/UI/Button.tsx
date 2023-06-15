import React from 'react';

import './ui.scss';

interface IButton {
  name: string;
  styles?: any;
  textStyle?: any;
  className?: string[];
  onClick: () => void;
}

export const Button = ({
  className = [''],
  name,
  styles = null,
  textStyle = null,
  onClick,
}: IButton) => {
  const btnClassName = className.join(' ');
  return (
    <button
      onClick={onClick}
      className={`default-btn ${btnClassName}`}
      style={styles}
    >
      <span style={textStyle}> {name}</span>
      {/* <span className='card__line card__line_left'></span>
      <span className='card__line card__line_top'></span>
      <span className='card__line card__line_right'></span>
      <span className='card__line card__line_bottom'></span> */}
    </button>
  );
};
