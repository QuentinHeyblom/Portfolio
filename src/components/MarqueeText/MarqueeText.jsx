import React from 'react';
import Marquee from 'react-fast-marquee';
import './MarqueeText.css';

const MarqueeText = ({ text }) => {
  return (
    <div className="marquee-container">
      <Marquee autoFill={true} speed={50} gradient={false}>
        <span className="marquee-item">{text}</span>
        <span className="marquee-separator">✦</span>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
