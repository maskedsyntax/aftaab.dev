import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { JetBrains_Mono, Pacifico, Kalam } from "next/font/google";

interface Experience {
  company: string;
  logo: string;
  positions: {
    title: string;
    type: string;
    duration: string;
    location: string;
    skills: string[];
  }[];
  totalDuration: string;
}

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const experiences: Experience[] = [
  {
    company: "Tata Consultancy Services",
    logo: "/images/icons/tcs.png",
    totalDuration: "2 yrs",
    positions: [
      {
        title: "Systems Engineer",
        type: "Full-time",
        duration: "Jul 2022 - June 2024 · 2 yrs",
        location: "Gandhinagar, Gujarat, India · Hybrid",
        skills: [
          "Core Java",
          "Spring Boot",
          "MySQL",
          "PostgreSQL",
          "DBMS",
          "TypeScript",
          "Angular",
          "Git",
          "Debugging",
          "Shell Scripting",
        ],
      },
      {
        title: "Project Intern",
        type: "Internship",
        duration: "Jan 2022 - May 2022 · 5 mos",
        location: "Gandhinagar, Gujarat, India",
        skills: [
          "Core Java",
          "Spring Boot",
          "ZK Framework",
          "MySQL",
          "PostgreSQL",
          "DBMS",
          "SVN",
        ],
      },
    ],
  },
  {
    company: "Inficube Technolabs",
    logo: "/images/icons/inficube.png",
    totalDuration: "1 mo",
    positions: [
      {
        title: "Blockchain Developer Intern",
        type: "Internship",
        duration: "May 2021 - Jun 2021 · 2 mo",
        location: "Remote",
        skills: [
          "Blockchain Architecture",
          "SHA-256",
          "Flask",
          "Python",
          "Linux",
          "Shell Scripting",
        ],
      },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="mb-12">
      <h2
        className={`${pacifico.className} text-2xl font-bold mb-6 relative inline-block`}
      >
        Experience
        <div className="absolute bottom-0 left-0 w-full h-1 way bg-blue-500 -mb-1"></div>
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="relative">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 rounded overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.totalDuration}
                  </p>
                  <div className="mt-4 relative">
                    {exp.positions.map((position, posIndex) => (
                      <div key={posIndex} className="relative pl-4 pb-4">
                        {/* Thread line for multiple positions */}
                        {exp.positions.length > 1 &&
                          posIndex !== exp.positions.length - 1 && (
                            <div className="absolute left-[-1px] top-2 h-full w-0.5 bg-muted-foreground/20"></div>
                          )}
                        {/* Position dot */}
                        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary"></div>
                        <div className="mb-2">
                          <h4 className="font-medium">{position.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {position.type}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {position.duration}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {position.location}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {position.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
