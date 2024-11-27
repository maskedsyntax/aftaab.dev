import Image from 'next/image'
import Link from 'next/link'
import {Badge} from "@/components/ui/badge"
import {PageTransition} from '@/components/page-transition'
import {ProjectGrid} from "@/components/project-grid"
import {Heart} from "lucide-react"
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

import type {Metadata} from "next"

// import {JetBrains_Mono} from 'next/font/google'
//
// const jetBrainsMono = JetBrains_Mono({
//   subsets: ['latin'],
//   weight: ['400', '500', '700', '800'],
//   variable: '--font-montserrat',
// });

export const metadata: Metadata = {
  title: 'Aftaab Siddiqui',
  description: 'Personal portfolio of Aftaab Siddiqui, a software developer passionate about technology',
  icons: {
    icon: "/favicons/favicon.ico", // Default favicon
    shortcut: "/favicons/favicon-16x16.png", // Shortcut icon
    apple: "/favicons/apple-touch-icon.png", // Apple Touch Icon
  },
}

export default function Home() {
  const languages = [
    "C++", "Python", "Java", "Go", "JavaScript", "TypeScript"
  ]
  const frameworks = [
    "Springboot", "Flask", "Pandas", "Numpy", "Matplotlib", "Opencv", "Scikit-Learn", "TensorFlow", "Keras", "PyQt5", "Next.js", "Node.js", "MySQL"
  ]

  const exploring = ["Rust", "GTK", "Qt", "Compilers"]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/MaskedSyntax",
      icon: <FaGithub className="w-6 h-6"/>,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aftaabsiddiqui",
      icon: <FaLinkedin className="w-6 h-6"/>,
    },
    {
      name: "Twitter",
      url: "https://x.com/MaskedSyntax",
      icon: <FaTwitter className="w-6 h-6"/>,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/maskedsyntax/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="currentColor"
        >
          <title>LeetCode</title>
          <path
            d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path>
        </svg>
      ),
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-8 py-8 sm:py-16 pt-8 sm:pt-24 max-w-4xl">

          <div className="flex flex-col sm:flex-row items-center justify-between sm:items-start gap-4 mb-12">
            <div className="max-w-lg text-center sm:text-left">
              <h1 className={`text-4xl sm:text-5xl font-bold mb-4`}>
                Hi, I'm Aftaab <span className="wave">👋</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Software engineer exploring low-level programming and AI, merging compilers, OS, and ML to build
                innovative tools and master the craft.
              </p>
            </div>
            <div className="relative w-36 h-36 rounded-full overflow-hidden bg-muted">
              <Image
                src="/images/Avatar/avatar.jpg"
                alt="Aftaab's avatar"
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>
          </div>

          <section className="mb-12">
            <h2 className={`text-2xl font-bold mb-4 relative inline-block`}>
              About
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 -mb-1"></div>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I’ve always been fascinated by technology, and a Linux course in college kick-started my love for {' '}
              <Link href="https://github.com/MaskedSyntax"
                    className="font-medium text-blue-600 underline">
                open source development
              </Link>
              . I enjoy solving problems, building tools,
              and diving into areas like {' '}
              <Link href="https://leetcode.com/u/maskedsyntax/"
                    className="font-medium text-blue-600 underline">
                DSA
              </Link>
              , Blockchain, Machine Learning, and Backend Development.
              <br/>

              Right now, I’m focusing on exploring ML algorithms, low-level programming, and working on impactful
              projects. With my experience across various tech domains, I thrive on learning and building with anything
              that compiles.

            </p>

          </section>

          <section className="mb-12">
            <h2 className={`text-2xl font-bold mb-4 relative inline-block`}>
              Skills
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 -mb-1"></div>
            </h2>
            {/* Programming Languages */}
            <div className="flex flex-wrap gap-2 mb-2">
              {languages.map((skill) => (
                <Badge key={skill} variant="default"
                       className="text-xs px-2 py-1 rounded-full bg-black dark:bg-white">
                  {skill}
                </Badge>
              ))}
            </div>

            {/*Separator*/}
            <div className="my-4 w-full h-px bg-gray-300 dark:bg-gray-600"></div>

            {/* Frameworks */}
            <div className="flex flex-wrap gap-2 mb-8">
              {frameworks.map((skill) => (
                <Badge key={skill} variant="default"
                       className="text-xs px-2 py-1 rounded-full bg-black dark:bg-white">
                  {skill}
                </Badge>
              ))}
            </div>
            <p className={`underline text-lg font-medium mb-4`}>Currently exploring:</p>
            <div className="flex flex-wrap gap-2">
              {exploring.map((tech) => (
                <Badge key={tech} variant="default"
                       className="text-xs px-2 py-1 rounded-full bg-black dark:bg-white">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/*<section className="text-center">*/}
          {/*  <p className="text-xl font-bold">*/}
          {/*    Check out my{' '}*/}
          {/*    <Link href="#" className="text-blue-500 hover:underline">*/}
          {/*      resume*/}
          {/*    </Link>*/}
          {/*    .*/}
          {/*  </p>*/}
          {/*</section>*/}

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 relative inline-block">
              Resume
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 -mb-1"></div>
            </h2>
            <p className="text-lg text-muted-foreground">
              Interested in my professional journey?{' '}
              <Link href="/resume.pdf" target="_blank" className="font-medium text-blue-600 underline">
                View my resume
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 relative inline-block">
              Social Handles
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 -mb-1"></div>
            </h2>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
            </div>
          </section>

          <section className="container mx-auto py-8 pt-24 max-w-4xl">
            <h1 className={`text-3xl font-bold mb-8 text-center`}>My Latest Work</h1>
            <ProjectGrid/>
          </section>

          <section className="text-center pt-24 mb-24">
            <h2 className="text-4xl font-bold mb-3">
              Check out my <Link href="/blog" className="text-blue-500 hover:underline">blog</Link>.
            </h2>
            <p className="text-lg text-muted-foreground">
              I occasionally enjoy writing blogs, primarily about tech topics, but I also explore other
              subjects.
            </p>
          </section>

          <section className="text-center pt-12 mb-12">
            {/*<div className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm mb-4">*/}
            {/*  Contact*/}
            {/*</div>*/}
            <h2 className="text-4xl font-bold mb-3">Get in touch</h2>
            <p className="text-lg text-muted-foreground mb-2">Want to chat?</p>
            <p className="text-lg">
              Just{' '}
              <Link href="mailto:aftaab@aftaab.xyz" className="text-blue-500 hover:underline">
                email me
              </Link>
              {' '}or{' '}
              <Link href="https://x.com/MaskedSyntax" className="text-blue-500 hover:underline">
                dm me on twitter
              </Link>
              .
            </p>
          </section>

        </main>

        <footer className="mt-20 pb-24 text-center">
          <div className="flex items-center justify-center mb-2">
            <span className="mr-1">Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1"/>
            <span>by Aftaab Siddiqui</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aftaab Siddiqui. All rights reserved.
          </div>
        </footer>

      </div>
    </PageTransition>
  )
}

//bg-gray-200