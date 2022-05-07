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
      className="hidden xl:flex flex-wrap w-80 place-items-center place-content-center rotate-[25deg] fixed top-[235.2px] right-[-89.6px] "
      onMouseMove={handleMouse}
    >
      <motion.img
        src={require('../../../assets/ellipse.png')}
        alt=""
        style={{
          // width: '4.4rem',
          // height: '4.4rem',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        className="w-[4.4rem] h-[4.4rem]"
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
          background: 'black',
          borderRadius: '50%',
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
