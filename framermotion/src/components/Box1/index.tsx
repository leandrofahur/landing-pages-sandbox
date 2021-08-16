import { useState } from 'react';

import { Container, Box } from './styles';

export const Box1: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Container className="box-container">
      <Box
        className="box"
        initial={{ opacity: 0.3 }}
        animate={{
          x: isAnimating ? '450px' : 0,
          opacity: isAnimating ? 1 : 0.3,
          rotate: isAnimating ? 360 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      />
    </Container>
  );
};
