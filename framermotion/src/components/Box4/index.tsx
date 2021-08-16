import { motion } from 'framer-motion';
import { Container, Box } from './styles';

export const Box4: React.FC = () => {
  return (
    <Container className="box-container">
      <Box
        className="box"
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{ duration: 2 }}
      />
    </Container>
  );
};
