import { Instagram, Linkedin, Github, ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Portfolio = () => {
  const textLines = [
    "Hello. I am Izhar — a SWE jumping between Del/Hyd with a knack for fashion deconstruction, product obsession, and interests lingering around art, literature, and history.",
    "",
    "Computer Science student with a minor in AI and an unbounded love for operating systems.",
    "Currently working as a SWE intern @Inncircles in their AI team, building for the construction space in India.",
    "",
    "A typical day after 11 to 7 includes reading Rumi, venting about life to people I love being around,",
    "while learning some SwiftUI on weekends with some random gigs in Hyderabad.",
    "",
    "I do write — in free time, do check for sure: MEDIUM.",
    "",
    "More active on Instagram :)"
  ];
  

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 dark:bg-black bg-white p-8 md:p-16">
      <ThemeToggle />

      <main className="flex-grow mt-16">
        {textLines.map((line, index) => (
          <p
            key={index}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 dark:text-darkText text-lightText"
            style={{
              animation: `fade-in 0.5s ease-out forwards`,
              animationDelay: `${index * 0.2}s`,
              opacity: "0"
            }}
          >
            {line.includes("MEDIUM") ? (
              <>
                {line.split("MEDIUM")[0]}
                <a
                  href="https://medium.com/@izharhamdan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline dark:text-linkDark text-linkLight flex items-center gap-1"
                >
                  MEDIUM
                  <ExternalLink className="w-4 h-4" />
                </a>
              </>
            ) : (
              line || "\u00A0"
            )}
          </p>
        ))}
      </main>

      <footer className="w-full mt-8 py-4 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
        <a
          href="https://linkedin.com/in/i-izhar03"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 dark:text-linkDark text-linkLight underline transition-all duration-300 hover:no-underline px-3 py-2"
        >
          <Linkedin className="w-6 h-6" />
          <span className="text-xl">LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/i_izhar03/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 dark:text-linkDark text-linkLight underline transition-all duration-300 hover:no-underline px-3 py-2"
        >
          <Instagram className="w-6 h-6" />
          <span className="text-xl">Instagram</span>
        </a>
        <a
          href="https://github.com/Izhar03"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 dark:text-linkDark text-linkLight underline transition-all duration-300 hover:no-underline px-3 py-2"
        >
          <Github className="w-6 h-6" />
          <span className="text-xl">GitHub</span>
        </a>
      </footer>
    </div>
  );
};

export default Portfolio;
