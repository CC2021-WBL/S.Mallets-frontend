import { CSSProperties } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Animation(props: { style: CSSProperties | undefined }) {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event: { pageX: number; pageY: number }) {
    x.set(event.pageX);
    y.set(event.pageY);
  }

  return (
    <div
      style={{
        width: '310px',
        // height: 400,
        ...props.style,
        display: 'flex',
        flexWrap: 'wrap',
        placeItems: 'center',
        placeContent: 'center',
        perspective: 400,
        transform: 'rotate(-75deg)',
        position: 'fixed',
        right: '-50px',
      }}
      onMouseMove={handleMouse}
    >
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          // width: '70px',
          // height: '70px',
          //   borderRadius: 30,
          //   backgroundColor: '#bb2424',

          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          //   width: 150,
          //   height: 150,
          //   borderRadius: 30,
          //   backgroundColor: '#bb2424',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          //   width: 150,
          //   height: 150,
          //   borderRadius: 30,
          //   backgroundColor: '#bb2424',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          //   width: 150,
          //   height: 150,
          //   borderRadius: 30,
          //   backgroundColor: '#bb2424',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          //   width: 150,
          //   height: 150,
          //   borderRadius: 30,
          //   backgroundColor: '#bb2424',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          //   width: 150,
          //   height: 150,
          //   borderRadius: 30,
          //   backgroundColor: '#bb2424',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          // width: '45px',
          // height: '45px',
          //   borderRadius: 30,
          //   backgroundColor: '#bb2424',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          //   width: 150,
          //   height: 150,
          //   borderRadius: 30,
          //   backgroundColor: '#bb2424',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          //   width: 150,
          //   height: 150,
          //   borderRadius: 30,
          //   backgroundColor: '#bb2424',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          //   width: 150,
          //   height: 150,
          //   borderRadius: 30,
          //   backgroundColor: '#bb2424',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          //   width: 150,
          //   height: 150,
          //   borderRadius: 30,
          //   backgroundColor: '#bb2424',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          //   width: 150,
          //   height: 150,
          //   borderRadius: 30,
          //   backgroundColor: '#bb2424',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
    </div>
  );
}
