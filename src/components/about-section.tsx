import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira-sans",
});

export function AboutSection() {
  return (
    <section className="mb-12 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className={`${firaSans.className} underline`}>
            My Journey in Technology
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground leading-relaxed space-y-4">
          <p>
            My journey in technology has been a mix of curiosity, exploration,
            and wanting to build cool stuff. I’ve always been the curious
            type—the kind of kid who’d take apart gadgets just to see what’s
            inside. That curiosity eventually turned into a love for
            programming, and honestly, it’s been a fun ride ever since.
          </p>
          <p>
            I got into data structures and algorithms, solving over 500 problems
            on LeetCode, and spent a couple of years building backend systems
            with Spring Boot and MySQL. At some point, I got hooked on low-level
            programming—things like operating systems and compilers—because I
            wanted to really understand how things work under the hood.
          </p>
          <p>
            Machine Learning caught my eye, and I dove right in. I’ve worked on
            image processing projects during an ML internship, dabbled in
            blockchain tech at a startup, and even explored machine learning
            research back in college. Now, I’ve stepped away from the typical
            job or college path to focus entirely on applied machine learning
            and math.
          </p>
          <p>
            Over the years, I’ve worked with so many technologies that I’ve
            gotten pretty comfortable picking up anything that compiles. These
            days, I’m blending low-level programming with machine learning,
            building open-source tools, and diving deep into areas like Edge ML,
            Multimodal ML, and Graph ML. It’s all about learning, experimenting,
            and creating stuff that’s actually useful—and I’m loving every bit
            of it.
          </p>
          {/*<p>*/}
          {/*  In my free time, I contribute to open-source projects, believing in the power of community-driven*/}
          {/*  development. This has exposed me to diverse coding styles and collaborative workflows, making me*/}
          {/*  a more versatile and adaptable developer.*/}
          {/*</p>*/}
        </CardContent>
      </Card>

    </section>
  );
}
