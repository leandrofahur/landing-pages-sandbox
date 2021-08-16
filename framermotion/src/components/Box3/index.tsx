import { motion } from 'framer-motion';
import { Container, Box } from './styles';

export const Box3: React.FC = () => {
  const boxVariant = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      // transition: {
      //   staggerChildren: 0.07,
      //   delayChildren: 0.2,
      // },
    },
  };

  return (
    <Container className="box-container">
      <Box
        className="box"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map(box => {
          return (
            <motion.li
              className="boxItem"
              key={box}
              variants={listVariant}
            ></motion.li>
          );
        })}
      </Box>
    </Container>
  );
};
