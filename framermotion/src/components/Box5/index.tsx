import { motion, useAnimation } from 'framer-motion';
import { Container, Box } from './styles';

export const Box5: React.FC = () => {
  const control = useAnimation();

  return (
    <Container className="box-container">
      <button
        onClick={() => {
          control.start({
            x: '450px',
            transition: { duration: 2 },
          });
        }}
      >
        Move to Right
      </button>

      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          });
        }}
      >
        Move to Left
      </button>

      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: { duration: 1 },
          });
        }}
      >
        Square
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: '50%',
            transition: { duration: 1 },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </button>
      <Box className="box" animate={control} />
    </Container>
  );
};
