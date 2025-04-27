
import { Instagram, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Portfolio = () => {
  const textLines = [
    "Hello. I am Moosa. A Quantitative Finance and Risk",
    "Management Science student, photographer,",
    "content creator, and calisthenics athlete.",
    "",
    "My professional life includes business",
    "development consultancy, content production, and",
    "modeling.",
    "",
    "I also work with sound. I create music with a",
    "friend. We are called slouch.",
    "",
    "Here's my instagram, and email."
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-black bg-white p-8 md:p-16 flex flex-col justify-center">
      <ThemeToggle />
      <div className="max-w-4xl">
        {textLines.map((line, index) => (
          <p
            key={index}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 dark:text-darkText text-lightText"
            style={{
              animation: `fade-in 0.5s ease-out forwards`,
              animationDelay: `${index * 0.1}s`,
              opacity: "0"
            }}
          >
            {line || "\u00A0"}
          </p>
        ))}
        
        <div 
          className="flex gap-6 mt-8"
          style={{
            animation: `fade-in 0.5s ease-out forwards`,
            animationDelay: `${textLines.length * 0.1}s`,
            opacity: "0"
          }}
        >
          <a 
            href="https://instagram.com" 
            className="flex items-center gap-2 dark:text-linkDark text-linkLight underline transition-all duration-300 hover:no-underline"
          >
            <Instagram className="w-6 h-6" />
            <span className="text-xl">Instagram</span>
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="flex items-center gap-2 dark:text-linkDark text-linkLight underline transition-all duration-300 hover:no-underline"
          >
            <Mail className="w-6 h-6" />
            <span className="text-xl">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
