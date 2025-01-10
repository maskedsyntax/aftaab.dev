import {ProjectCard} from './project-card'

const projects = [
  {
    name: "Splashy",
    dateRange: "May 2024",
    description: "An interactive drawing tool where users can write and draw freely on a blank canvas with different color options, similar to a basic notebook or simplified Paint app.",
    technologies: [
      {name: "Python"},
      {name: "Tkinter"},
      {name: "GUI"},
    ],
    websiteUrl: "#",
    repoUrl: "https://github.com/MaskedSyntax/Splashy"
  },
  {
    name: "ARM7 Assembler",
    dateRange: "Nov 2024",
    description: "A GUI-based assembler for ARM7 architecture, enabling users to write, simulate, and visualize ARM7 assembly instructions, covering arithmetic, logical, and data movement operations.",
    technologies: [
      {name: "Python"},
      {name: "Tkinter"},
      {name: "RegEx"},
      {name: "GUI"},
    ],
    websiteUrl: "#",
    repoUrl: "https://github.com/MaskedSyntax/ARM7-Assembler"
  },
  {
    name: "Minesweeper",
    dateRange: "Aug 2024",
    description: "A classic Minesweeper game with multiple difficulty levels, featuring dynamic gameplay and an intuitive interface that challenges your logical skills to uncover all non-mined cells.",
    technologies: [
      {name: "C++"},
      {name: "STL"},
      {name: "CLI"},
      {name: "Recursion"},
    ],
    websiteUrl: "#",
    repoUrl: "https://github.com/MaskedSyntax/Minesweeper"
  },
  {
    name: "Youtube Audio Downloader",
    dateRange: "Oct 2024",
    description: "A command-line tool to download audio directly from YouTube videos, allowing users to easily convert, customize, and save YouTube content as high-quality audio files.",
    technologies: [
      {name: "Python"},
      {name: "Pytube"},
      {name: "ffmpeg"},
      {name: "argparse"},
      {name: "CLI"},
    ],
    websiteUrl: "#",
    repoUrl: "https://github.com/MaskedSyntax/youtube-audio-downloader"
  },
  {
    name: "Crop Wars",
    dateRange: "Jan 2023",
    description: "An action-packed game where players protect crops from acid rain and enemy clouds using lasers. Move, shoot, and strategize to keep your crops safe!",
    technologies: [
      {name: "Python"},
      {name: "Pygame"},
      {name: "Game Development"},
    ],
    websiteUrl: "#",
    repoUrl: "https://github.com/MaskedSyntax/CropWars"
  },
  {
    name: "2 Stage OpAmp Analysis",
    dateRange: "Jan 2022 - Mar 2022",
    description: "A web app for analyzing two-stage operational amplifier aspect ratios using machine learning models. Users input parameters to predict amplifier properties, optimizing circuit design.",
    technologies: [
      {name: "Python"},
      {name: "Streamlit"},
      {name: "Neural Networks"},
      {name: "ML"},
    ],
    websiteUrl: "https://opamp-analysis.streamlit.app/",
    repoUrl: "https://github.com/MaskedSyntax/2-Stage-OpAmp-Analysis"
  },
  {
    name: "Sudoku",
    dateRange: "Aug 2022",
    description: "A C program to solve Sudoku puzzles using backtracking. The program fills in the missing numbers in a given Sudoku grid and prints the completed solution.",
    technologies: [
      {name: "C"},
      {name: "Backtracking"},
      {name: "CLI"},
    ],
    websiteUrl: "#",
    repoUrl: "https://github.com/MaskedSyntax/Sudoku"
  },
  {
    name: "Crypto Coin",
    dateRange: "May 2021 - June 2021",
    description: "A blockchain simulation implementing a basic cryptocurrency with proof-of-work and block validation. Users can mine blocks and make transactions within the blockchain.",
    technologies: [
      {name: "Python"},
      {name: "Blockchain"},
      {name: "SHA-256"},
      {name: "POW"},
    ],
    websiteUrl: "#",
    repoUrl: "https://github.com/MaskedSyntax/Crypto-Coin"
  },
]

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  )
}

