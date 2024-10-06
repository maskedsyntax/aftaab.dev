import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import {useTheme} from '../../common/ThemeContext';

function Skills() {
  const {theme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="HTML"/>
        <SkillList skill="CSS"/>
        <SkillList skill="JavaScript"/>
        <SkillList skill="Nodejs"/>
        <SkillList skill="React"/>
      </div>
      {/*<hr/>*/}
      <div className={styles.skillList}>
        <SkillList skill="Spring Boot"/>
        <SkillList skill="Redis"/>
        <SkillList skill="MySQL"/>
        <SkillList skill="PostgreSQL"/>
      </div>
      <hr/>
      <div className={styles.skillList}>
        <SkillList skill="Flask"/>
        <SkillList skill="FastAPI"/>
        <SkillList skill="Git"/>
        <SkillList skill="Numpy"/>
        <SkillList skill="Pandas"/>
        <SkillList skill="Tkinter"/>
      </div>
      <div className={styles.skillList}>
        <SkillList skill="Scikit-Learn"/>
        <SkillList skill="OpenCV"/>
        <SkillList skill="TensorFlow"/>
        <SkillList skill="Pytorch"/>
      </div>
    </section>
  );
}

export default Skills;
