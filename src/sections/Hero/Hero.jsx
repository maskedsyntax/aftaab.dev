import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume_Aftaab_Siddiqui.pdf';
import {useTheme} from '../../common/ThemeContext';

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Aftaab Siddiqui"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Aftaab
          <br/>
          Siddiqui
        </h1>
        <h2>ML & Software Engineer</h2>
        <span>
          <a href="https://twitter.com/maiaftaabhoon" target="_blank">
            <img src={twitterIcon} alt="Twitter icon"/>
          </a>
          <a href="https://github.com/aftaab25" target="_blank">
            <img src={githubIcon} alt="Github icon"/>
          </a>
          <a href="https://linkedin.com/in/aftaabsiddiqui" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon"/>
          </a>
        </span>
        <p className={styles.description}>
          I am a Master's student in Computer Science, focused on machine learning and data science. With 2+
          years of experience as a backend developer and 6 months as a machine learning engineer, I also have
          brief experience as a blockchain engineer. <br/>
          My passion lies in machine learning research, aiming to
          build applications that leverage ML models to solve real-world problems.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
