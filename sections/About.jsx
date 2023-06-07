'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About SKATEZY " textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">SKATEZY</span> Electric skateboards are the new cool way to ride around town without "Breaking a Sweat". With motors inside the wheels and a removable battery in the deck, these e-skates give you the same thrill as a regular skateboard   {' '}
        <span className="font-extrabold text-white">
        minus the hassle.
        </span>{' '}
        Plus, they come in two basic types: {' '}
        <span className="font-extrabold text-white">Longboards </span> for travelers AND {' '}
        <span className="font-extrabold text-white">Cruisers </span> for cruising short distances.{' '}
        <span className="font-extrabold text-white"></span> We have special ultrasonic sensors attached to aware you of any obstacle and ensure safety by all means.{' '}
        <span className="font-extrabold text-white">"Let's Skate smarter"!!</span>
         </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
