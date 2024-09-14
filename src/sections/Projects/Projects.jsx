import styles from './ProjectsStyles.module.css';
import gear from '../../assets/gear-removebg.png';
import maze from '../../assets/maze.png';
import scanner from '../../assets/scanner.png';
import colorpicker from '../../assets/colorpicker.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={gear}
          link="https://github.com/Aftaab25/ARM7-Assembler"
          h3="ARM7 Assembler"
          p="ARM7 Assembly Simulator"
        />
        <ProjectCard
          src={maze}
          link="https://github.com/Aftaab25/AStarPathfinder"
          h3="A-Star Pathfinder"
          p="Path Visualizer"
        />
        <ProjectCard
          src={scanner}
          link="https://github.com/Aftaab25/DocumentScanner"
          h3="Document Scanner"
          p="Document Scanner"
        />
        <ProjectCard
          src={colorpicker}
          link="https://github.com/Aftaab25/ColorSnap"
          h3="ColorSnap"
          p="Color Picker"
        />
      </div>
    </section>
  );
}

export default Projects;
