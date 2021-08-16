import React from 'react';

import { motion, useTransform, useViewportScroll } from 'framer-motion';

import { Sticky } from '../../pages/styles';

export const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);
  const frameScale = useTransform(
    scrollYProgress,
    [0.558, 0.627],
    [0.551, 0.8],
  );
  console.log(frameOpacity);
  return (
    <Sticky className="second">
      <First />
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          borderRadius: '4px',
          border: '4px solid var(--white)',
          opacity: frameOpacity,
          scale: frameScale,
        }}
      />
    </Sticky>
  );
};

const First: React.FC = () => {
  return <Sticky className="first"></Sticky>;
};
