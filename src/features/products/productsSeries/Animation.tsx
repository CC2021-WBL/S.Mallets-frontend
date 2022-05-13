// import { CSSProperties } from 'react';

import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Animation() {
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
      className="absolute -top-[185px] right-[152px] flex w-80 rotate-[25deg] flex-wrap place-content-center place-items-center   "
      onMouseMove={handleMouse}
    >
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        className="h-[4.4rem] w-[4.4rem]"
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          width: '4.4rem',
          height: '4.4rem',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          width: '4.4rem',
          height: '4.4rem',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          width: '4.4rem',
          height: '4.4rem',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          width: '4.4rem',
          height: '4.4rem',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          width: '4.4rem',
          height: '4.4rem',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          width: '4.4rem',
          height: '4.4rem',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          width: '4.4rem',
          height: '4.4rem',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          width: '4.4rem',
          height: '4.4rem',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          width: '4.4rem',
          height: '4.4rem',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          width: '4.4rem',
          height: '4.4rem',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          width: '4.4rem',
          height: '4.4rem',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
    </div>
  );
}
