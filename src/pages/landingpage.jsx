import React, { useEffect } from 'react';
import style from '../styles/landing.module.scss';
import Typewriter from 'typewriter-effect';
import { Button } from 'antd';
import Typography from 'antd/es/typography/Typography';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Hello', 'World'],
      autoStart: true,
    });
  }, []);

  return (
    <div className={style.landingpage}>
    <Typography className={style.landingpagetext}>
      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Stock Genius')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .start();
  }}
/>
</Typography>
      <img src='/stocks.gif' alt='stocks' />
      <Link to='/login'><Button className={style.landingpagebtn}>Let's get Started</Button></Link>
    </div>
  );
};

export default LandingPage;
