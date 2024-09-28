import styles from '../sections/Skills/SkillsStyles.module.css';

function SkillList({src, skill}) {
  return (
    <span className={styles.badge}>
      <img src={src} alt="Checkmark icon"/>
      <p className="badge-text">{skill}</p>
    </span>
  );
}

export default SkillList;
