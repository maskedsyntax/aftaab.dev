interface BlogPost {
  id: string
  title: string
  date: string
  description: string
  content: string
}

const blogs: BlogPost[] = [
  {
    id: "1",
    title: "Why I Use Linux for Everything (Yes, Even Gaming)\n",
    date: "01-12-2024",
    description: "From work to gaming, here’s why Linux is my go-to for, well, literally everything.",
    content: "Let me just say this upfront: I love Linux. It’s not just an operating system for me—it’s a philosophy, a way of thinking, and, yes, my daily driver for everything from work to gaming. And if you’re wondering why anyone would game on Linux when “just install Windows” is the mainstream advice, let me explain.\n" +
      "\n" +
      "First, let’s talk about control. Linux is like a blank canvas for your digital life. You can customize it to the nth degree, whether it’s tweaking your window manager (shoutout to awesomewm and i3wm!) or setting up a kernel optimized for low-latency gaming. I’ve used distros like Pop!_OS and Arch Linux, and they make my workflow mine. No bloat, no unnecessary updates restarting my system mid-game—it’s pure freedom.\n" +
      "\n" +
      "Now, let’s address the elephant in the room: gaming on Linux. A few years ago, this might’ve sounded absurd, but thanks to tools like Proton, Wine, and Lutris, most games work surprisingly well. I’ve played everything from indie gems to AAA titles, and the experience is often smoother than you’d expect. Plus, with the Steam Deck running Linux under the hood, the gaming industry is starting to take Linux seriously.\n" +
      "\n" +
      "But it’s not just about gaming. I develop, tinker, and experiment on Linux. Whether it’s writing C++ code, training machine learning models, or managing a database, Linux gives me the stability and performance I need. And honestly, it just feels good knowing that I’m using open-source software—a community-driven alternative to the corporate giants.\n" +
      "\n" +
      "Sure, there are occasional hiccups. Some games still don’t run perfectly, and setting things up can require a bit of patience. But for me, the trade-off is worth it. I get an operating system that respects my choices, lets me do everything I need, and keeps my digital life in sync with my values.\n" +
      "\n" +
      "So, why do I use Linux for everything? Because it’s more than just an OS—it’s a lifestyle. If that sounds dramatic, you haven’t experienced the joy of customizing every detail of your system to fit exactly what you need. Give it a try; you might just fall in love too."
  },
  {
    id: "2",
    title: "The Role of Machine Learning in Medical Science: A Hopeful Future",
    date: "06-11-2024",
    description: "How machine learning is making waves in healthcare—and why I’m so hyped about it.",
    content: "If you’ve ever been fascinated by how far science has come in saving lives, you’ll find machine learning’s role in medical science absolutely mind-blowing. As someone who’s actively exploring the potential of machine learning, I find its application in healthcare both humbling and exhilarating. Imagine a world where diseases are diagnosed faster than your food delivery app predicts your cravings—that's the kind of impact we're talking about here.\n" +
      "\n" +
      "One of the coolest areas where ML shines is in Disease Progression Modeling. Picture this: instead of waiting for diseases like cancer to become symptomatic, models trained on patient data can predict their onset early. This isn't just a \"nice-to-have\" innovation—it's the difference between life and death in many cases.\n" +
      "\n" +
      "Another fascinating use case is DNA and Protein Sequence Classification. With ML, we can now comb through massive genetic datasets and identify patterns that might have taken human researchers decades to spot. This means targeted treatments for patients and more effective drug discovery, which hits home for me since I’ve dabbled in these datasets during my own projects.\n" +
      "\n" +
      "But it’s not all rainbows and sunshine. Machine learning in medical science is only as good as the data it’s fed, and ethical considerations—like ensuring patient privacy—can’t be overlooked. It’s a field that demands precision, creativity, and responsibility.\n" +
      "\n" +
      "For me, projects in this domain aren’t just academic exercises—they’re a way to contribute to something bigger than myself. It’s like coding with a purpose, and honestly, that’s what keeps me going on the tough days."
  },
  {
    id: "3",
    title: "Music + Coffee While Coding: The Perfect Combo",
    date: "11-07-2024",
    description: "Good tunes, hot coffee, and code—why this trio is my ultimate productivity hack.",
    content: "If there’s one thing that makes coding magical for me, it’s the combination of music and coffee. Seriously, these two are the unsung heroes of my workflow. I can write complex algorithms or debug the trickiest bugs, and all it takes is a killer playlist and a good cup of coffee to get into the zone.\n" +
      "\n" +
      "Let’s start with the coffee. There’s something about that first sip—like a gentle nudge that says, “Alright, let’s crush this task.” For me, coffee isn’t just a beverage; it’s a ritual. The smell, the warmth, the energy boost—it’s like I’m powering up my internal CPU. Bonus points if it’s black coffee with no sugar. (Yes, I’m one of those people.)\n" +
      "\n" +
      "And then there’s the music. I’m not talking about just any music, though. Coding music has to hit that sweet spot: enough rhythm to keep you focused, but not so distracting that you start singing along. For me, it’s either lo-fi beats or instrumental soundtracks—something chill and non-intrusive. If I’m in a particularly intense coding session, I might switch to electronic tracks with a steady beat to keep the momentum going.\n" +
      "\n" +
      "What’s amazing is how music and coffee together create this bubble of productivity. It’s like the outside world fades away, and all that exists is the code in front of me. Bugs don’t seem as intimidating, and time just flies by. Honestly, I’ve written some of my best code in this state.\n" +
      "\n" +
      "But here’s the kicker: it’s not just about being productive. It’s about enjoying the process. Coding can be stressful, but when you’ve got your favorite playlist and a hot cup of coffee, it feels less like work and more like art.\n" +
      "\n" +
      "So, if you’re ever feeling stuck or uninspired while coding, try this combo. You might just find your groove—and who knows, maybe even fall in love with coding all over again."
  },
  {
    id: "4",
    title: "Too Many DSA Rounds: A Developer’s Perspective",
    date: "15-09-2024",
    description: "Why do interviews feel like a LeetCode marathon? My thoughts on the DSA craze.",
    content: "ALet’s talk about something that’s been on my mind (and probably yours too if you’re job-hunting): the sheer number of DSA (Data Structures and Algorithms) rounds in tech interviews. As someone who’s solved hundreds of LeetCode problems and spends way too much time analyzing the nuances of graphs and DP (dynamic programming), I’ve got a love-hate relationship with these rounds.\n" +
      "\n" +
      "First off, I get it. DSA is foundational—it teaches problem-solving, efficiency, and how to think like a programmer. But let’s be honest: how often does optimizing a Fibonacci sequence really come up in your day-to-day work? Unless you’re building compilers or working at the bleeding edge of tech, it’s not exactly representative of most roles.\n" +
      "\n" +
      "What bothers me is when companies overdo it. Three or four DSA rounds for a backend role? Really? If I’m being hired to write clean APIs or design scalable systems, wouldn’t it make more sense to test my understanding of microservices, database optimization, or debugging production issues?\n" +
      "\n" +
      "The irony is that companies are looking for “real-world problem solvers” but often filter candidates based on their ability to crack contrived puzzles. Don’t get me wrong—I’ll happily ace those rounds because it’s part of the game. But I can’t help but feel that this emphasis sometimes overlooks developers with practical experience but less time to grind LeetCode.\n" +
      "\n" +
      "I’m all for a balanced approach. One or two DSA rounds? Sure, let’s test the fundamentals. But let’s also talk about system design, the projects I’ve worked on, and how I approach solving real-world challenges. After all, the best developers aren’t just great at algorithms—they’re great at delivering value.\n" +
      "\n"
  },
  {
    id: "5",
    title: "Why Neovim is Surprisingly Awesome for Frontend Development",
    date: "15-09-2024",
    description: "Not a frontend fan? Same here. But Neovim somehow makes it... fun?",
    content: "I’ll be honest—frontend development isn’t my favorite thing to do. I’m a backend and systems kind of person, but every now and then, I find myself dabbling in UI work. And when I do, Neovim is my trusty sidekick. If you think Neovim is just for terminal wizards or die-hard Vim fans, you’re in for a surprise. It’s incredibly versatile, even for frontend development.\n" +
      "\n" +
      "Here’s the thing: modern frontend development means wrangling JavaScript frameworks, tweaking CSS, and dealing with HTML templates. Neovim’s ecosystem, especially with plugins like nvim-treesitter, makes all of this surprisingly enjoyable. Treesitter turns your code into a visually pleasing masterpiece with proper syntax highlighting, which, let’s face it, can make even CSS debugging feel a bit less painful.\n" +
      "\n" +
      "Another lifesaver is LSP (Language Server Protocol). If you set up something like typescript-language-server, you get autocomplete, error checking, and other fancy IDE features—all within Neovim. Oh, and let’s not forget about nvim-web-devicons. A good icon goes a long way in keeping your sanity intact when juggling a React project.\n" +
      "\n" +
      "For me, the real charm lies in how Neovim lets me stay in flow. No distractions, no clicking around with the mouse—just me and my code. Plus, customizing Neovim for your specific workflow is like a little side quest that makes it uniquely yours. Want to toggle between your Sass and its compiled CSS file? You can map it. Need to quickly run a npm start command? Bind it to a shortcut.\n" +
      "\n" +
      "Don’t get me wrong, there’s a learning curve, and you’ll spend a weekend or two wondering why you even started. But once it clicks, Neovim becomes this seamless extension of your workflow. It’s like having a Formula 1 car for coding—sure, it’s not for everyone, but if you love the control and speed, you won’t want to use anything else.\n" +
      "\n" +
      "If you’re like me—reluctant about frontend but still want to make the experience enjoyable—Neovim might just be the tool you didn’t know you needed."
  },
  {
    id: "6",
    title: "Should You Use AI Tools to Code? (Spoiler: Yes, But With Limits)",
    date: "12-05-2024",
    description: "AI coding tools: life-savers or cheats? Let’s chat about how much is too much.",
    content: "Let’s talk about AI tools for coding—things like GitHub Copilot, ChatGPT, and other fancy helpers that make you feel like you’ve hired an invisible coding buddy. If you’ve ever wondered whether you should use them, let me save you some time: absolutely, yes. But (and this is a big but), it’s all about how much and how wisely you use them.\n" +
      "\n" +
      "Here’s the thing: AI tools are fantastic for the repetitive, boilerplate-y parts of coding. Need to write a CRUD API? Done in seconds. Want to refactor some messy code? AI’s got your back. It’s like having a pair programmer who never takes breaks or judges your typos. For me, tools like these are lifesavers when I’m knee-deep in a project and need to churn out code quickly.\n" +
      "\n" +
      "But, there’s a catch. Relying too much on AI can make you a bit, well… lazy. If you let it do all the thinking, you risk losing your problem-solving edge—the very skill that makes a developer irreplaceable. So, I think of AI tools as assistants, not substitutes. I still analyze problems, write logic, and debug like it’s my job (because it kind of is). The AI just speeds up the process.\n" +
      "\n" +
      "Another key is knowing when to use AI. For example, if you’re learning something new, resist the urge to let AI write all the code for you. Trust me, struggling through those lines yourself is how you grow. But if you’re on a tight deadline or tackling something mundane, let the AI handle it while you focus on the interesting bits.\n" +
      "\n" +
      "In short, AI tools are like power-ups in a video game. Use them to level up, but don’t let them play the game for you. Balance is everything."
  },
]

export const blogPosts = blogs.sort((a, b) => {
  const dateA: any = new Date(a.date.split("-").reverse().join("-"));
  const dateB: any = new Date(b.date.split("-").reverse().join("-"));
  return dateB - dateA; // For descending order (latest first)
});