import { Container, Box } from './styles';

export const Box2: React.FC = () => {
  return (
    <Container className="box-container">
      <Box
        className="box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          right: 10,
          left: -10,
          top: 10,
          bottom: 10,
        }}
      />
    </Container>
  );
};
