import styles from '../sections/Skills/SkillsStyles.module.css';

function SkillList({skill}) {
  return (
    <span className={styles.badge}>
      {/*<img src={src} alt="Checkmark icon"/>*/}
      <p className={styles.badgetext}>{skill}</p>
    </span>
  );
}

export default SkillList;
