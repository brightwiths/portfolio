import React from 'react';
import s from './Footer.module.scss'

export function Footer() {
  return (
    <div className={s.footerBlock}>
      <div className={s.footerContainer}>
        <p>Site created by Briws. 2021.</p>
      </div>
    </div>
  );
}

