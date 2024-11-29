import {ProjectCard} from './project-card'

const projects = [
  {
    name: "GeneRx Mapper",
    dateRange: "Sept 2024 - Oct 2024",
    description: "An AI-driven tool that analyzes gene expression data to predict drug responses for different gene profiles. GeneRx Mapper leverages machine learning algorithms to uncover relationships between genetic data and pharmaceutical outcomes, providing insights into personalized treatment.",
    technologies: [
      {name: "Python"},
      {name: "Scikit-learn"},
      {name: "Pandas"},
      {name: "Random Forest"},
      {name: "Matplotlib"},
      {name: "Feature Extraction"},
    ],
    websiteUrl: "#",
    repoUrl: "https://github.com/MaskedSyntax/genes-drug-response-prediction"
  },
  {
    name: "IntelliPath",
    dateRange: "July 2024 - Aug 2024",
    description: "A visualization tool for the A* pathfinding algorithm that allows users to explore the shortest route between two points. IntelliPath offers an interactive interface for selecting start and end locations, as well as obstacles, providing an intuitive demonstration of pathfinding in action.",
    technologies: [
      {name: "Python"},
      {name: "Pygame"},
      {name: "PriorityQueue"},
      {name: "Math Functions"},
      // {name: "FastAPI"},
      // {name: "Tailwind CSS"},
      // {name: "Node.js"},
      // {name: "Vercel"},
    ],
    websiteUrl: "#",
    repoUrl: "https://github.com/MaskedSyntax/IntelliPath"
  },
  {
    name: "ColorSnap",
    dateRange: "March 2024 - April 2024",
    description: "An interactive color detection tool that allows users to click on an image and instantly identify the closest matching color, along with the RGB and Hex values. ColorSnap uses OpenCV to read images and detect clicked points, and leverages a color dataset to determine the closest match with a high degree of accuracy.",
    technologies: [
      {name: "Python"},
      {name: "OpenCV"},
      {name: "Pandas"},
      {name: "Numpy"},
      {name: "Scikit-learn"},
      {name: "Matplotlib"},
    ],
    websiteUrl: "#",
    repoUrl: "https://github.com/MaskedSyntax/ColorSnap"
  },
  {
    name: "DocuLens",
    dateRange: "Nov 2023 - Dec 2023",
    description: "A document scanning application that detects and captures documents in real time using computer vision techniques. DocuLens enhances document quality through advanced image processing, including edge detection, blurring, and correction, making the scanned documents clear and easy to read.",
    technologies: [
      {name: "Python"},
      {name: "OpenCV"},
      {name: "Numpy"},
      {name: "Contour Detection"},
      {name: "Canny Edge Detection"},
      {name: "Gaussian Blur"},
      // {name: "Vercel"},
    ],
    websiteUrl: "#",
    repoUrl: "https://github.com/MaskedSyntax/DocuLens"
  },
]

export function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  )
}

