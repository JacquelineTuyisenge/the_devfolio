import foodImage from "../assets/Food.jpg";
import carImage from "../assets/car.jpg";
import portpicImage from "../assets/Portpic.jpg";
import notesImage from "../assets/notes.jpg";
import type { Blog } from "../data/types";

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Breaking Into Tech: My Journey from Beginner to Full-Stack Developer",
    subtitle: "Lessons learned, mistakes made, and tips for aspiring devs.",
    date: "2024-10-01",
    tags: ["Career", "Motivation", "Software Engineering"],
    coverImage: carImage,
    author: "Jacqueline Tuyisenge",
    sections: [
      {
        heading: "How It All Started",
        content: `
I didn’t grow up coding. In fact, I thought it was just for “nerds.” But everything changed when I joined an online coding bootcamp.

**My first ever line of code:**

\`\`\`js
console.log("Hello, world!");
\`\`\`

That line gave me goosebumps. It worked! From that point, I was hooked.

I started exploring JavaScript, HTML, and CSS, building tiny projects that made me feel powerful.
        `
      },
      {
        heading: "Learning to Code (and Fail)",
        content: `
Learning to code was frustrating at times. I remember spending hours debugging a simple loop.

Here’s a classic example of a bug I faced:

\`\`\`js
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
\`\`\`

I accidentally wrote \`i <= 5\` instead of \`i < 5\`, which caused off-by-one errors. These small mistakes taught me patience.

**Tip:** Use \`console.log\` generously and break problems down into smaller pieces.

I also learned the importance of asking for help and using resources like Stack Overflow and MDN.
        `
      },
      {
        heading: "Projects That Made Me Stand Out",
        content: `
Building real projects is the best way to learn and showcase your skills.

Here are two projects I’m proud of:

1. **Eatsome - Food Delivery App**
   - Built with React, Node.js, and MongoDB
   - Features include user authentication, order tracking, and admin dashboard
   - I implemented the cart feature using React Context API

2. **Car Rental Dashboard**
   - Created with Next.js and Tailwind CSS
   - Responsive UI with dynamic booking forms
   - Integrated Stripe for payment processing

Each project taught me new tools and improved my problem-solving skills.
        `
      },
      {
        heading: "Advice for Beginners",
        content: `
- **Start Small:** Build tiny projects that interest you.
- **Be Consistent:** Code a little bit every day.
- **Don’t Compare:** Everyone learns at their own pace.
- **Use Tools:** Learn Git early to track your progress.
- **Join Communities:** Engage with others for motivation and help.

Remember, the journey is long but rewarding. Celebrate your wins, no matter how small!
        `
      }
    ]
  },

  {
    id: "2",
    title: "Why Every Developer Should Learn Git (Even Solo Coders)",
    subtitle: "Version control is more than collaboration—it’s protection.",
    date: "2024-11-15",
    tags: ["Git", "Tools", "Beginner Tips"],
    coverImage: foodImage,
    author: "Jacqueline Tuyisenge",
    sections: [
      {
        heading: "The Power of Git",
        content: `
Git is a version control system that helps you keep track of changes in your code.

Even if you work alone, Git lets you:

- Revert to previous versions
- Experiment without fear
- Collaborate easily later

Here’s a simple Git command to start a repo:

\`\`\`bash
git init
\`\`\`
        `
      },
      {
        heading: "Basic Git Workflow",
        content: `
The most common commands you'll use are:

\`\`\`bash
git add .          # Stage changes
git commit -m "Message"  # Commit changes
git push           # Push to remote repository
\`\`\`

Try practicing these in a sample project to get comfortable.
        `
      },
      {
        heading: "Why Git Matters for You",
        content: `
Beyond version control, Git also:

- Helps with backup and recovery
- Makes collaboration smooth
- Is a must-have skill in most dev jobs

Start using Git today to build good habits early.
        `
      }
    ]
  },

  {
    id: "3",
    title: "How I Built My Developer Portfolio (And Got Interviews!)",
    subtitle: "A clean design, real projects, and personal branding that works.",
    date: "2025-01-10",
    tags: ["Portfolio", "React", "Design"],
    coverImage: portpicImage,
    author: "Jacqueline Tuyisenge",
    sections: [
      {
        heading: "Why a Portfolio Matters",
        content: `
Your portfolio is your digital handshake. It shows your skills and personality.

Focus on:

- Clarity
- Responsiveness
- Showcasing projects with descriptions and links

Make it easy for recruiters to contact you.
        `
      },
      {
        heading: "Building with React",
        content: `
React is perfect for building fast, interactive portfolios.

Here’s a simple component I built for project cards:


\`\`\`tsx
function ProjectCard({ name, description, image, live, github }) {
  return (
    <a href={live || github} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </a>
  );
}
\`\`\`
        `
      },
      {
        heading: "Tips for Success",
        content: `
- Keep it updated
- Highlight your best work
- Use meaningful commit messages
- Add a blog to share your learning journey

Your portfolio grows with you — make it reflect your passion!
        `
      }
    ]
  }
];
