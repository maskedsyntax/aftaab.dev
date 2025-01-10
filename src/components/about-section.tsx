import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"

interface Milestone {
  date: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    date: "2018",
    title: "Started Coding Journey",
    description: "Wrote my first line of code and fell in love with programming."
  },
  {
    date: "2021",
    title: "First Hackathon Win",
    description: "Won my first hackathon, boosting my confidence in problem-solving."
  },
  {
    date: "2022",
    title: "Internship at Tech Startup",
    description: "Gained real-world experience working on cutting-edge projects."
  },
  {
    date: "2022",
    title: "Open Source Contribution",
    description: "Made my first significant contribution to a major open-source project."
  },
  {
    date: "2023",
    title: "Started Leetcode",
    description: "Made my first significant contribution to a major open-source project."
  },
  {
    date: "2024",
    title: "Exploring Machine Learning and Low-Level Programming",
    description: "Focused on combining low-level programming with ML, while creating open-source tools and diving deeper into core CS concepts."
  }
];

export function AboutSection() {
  return (
    <section className="mb-12 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>My Journey in Technology</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground leading-relaxed space-y-4">
          <p>
          My journey in technology has been a mix of curiosity, exploration, and wanting to build cool stuff. I’ve always been the curious type—the kind of kid who’d take apart gadgets just to see what’s inside. That curiosity eventually turned into a love for programming, and honestly, it’s been a fun ride ever since.
          </p>
          <p>
          I got into data structures and algorithms, solving over 500 problems on LeetCode, and spent a couple of years building backend systems with Spring Boot and MySQL. At some point, I got hooked on low-level programming—things like operating systems and compilers—because I wanted to really understand how things work under the hood.
          </p>
          <p>
          Machine Learning caught my eye, and I dove right in. I’ve worked on image processing projects during an ML internship, dabbled in blockchain tech at a startup, and even explored machine learning research back in college. Now, I’ve stepped away from the typical job or college path to focus entirely on applied machine learning and math.
          </p>
          <p>
          Over the years, I’ve worked with so many technologies that I’ve gotten pretty comfortable picking up anything that compiles. These days, I’m blending low-level programming with machine learning, building open-source tools, and diving deep into areas like Edge ML, Multimodal ML, and Graph ML. It’s all about learning, experimenting, and creating stuff that’s actually useful—and I’m loving every bit of it.
          </p>
          {/*<p>*/}
          {/*  In my free time, I contribute to open-source projects, believing in the power of community-driven*/}
          {/*  development. This has exposed me to diverse coding styles and collaborative workflows, making me*/}
          {/*  a more versatile and adaptable developer.*/}
          {/*</p>*/}
        </CardContent>
      </Card>

      {/*Key Milestones section*/}
      {/*<Card>*/}
      {/*  <CardHeader>*/}
      {/*    <CardTitle>Key Milestones</CardTitle>*/}
      {/*  </CardHeader>*/}
      {/*  <CardContent>*/}
      {/*    <div className="relative">*/}
      {/*      {milestones.map((milestone, index) => (*/}
      {/*        <div key={index} className="mb-8 flex">*/}
      {/*          <div className="flex flex-col items-center mr-4">*/}
      {/*            <div className="w-px h-full bg-gray-300 pointer-events-none"></div>*/}
      {/*            <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></div>*/}
      {/*          </div>*/}
      {/*          <div className="flex-grow">*/}
      {/*            <Badge variant="secondary" className="mb-1">{milestone.date}</Badge>*/}
      {/*            <h3 className="text-lg font-semibold mb-1">{milestone.title}</h3>*/}
      {/*            <p className="text-muted-foreground">{milestone.description}</p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </CardContent>*/}
      {/*</Card>*/}
    </section>
  )
}

