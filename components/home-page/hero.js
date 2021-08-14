import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/abie.jpg'
          alt='An image showing Abie'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Abie</h1>
      <p>
        I blog about web development - I specialize in MERNG stack, and
        currently am learning Python as my third language after Javascript and
        Typescript.
      </p>
    </section>
  );
}

export default Hero;
