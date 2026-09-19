import { useEffect, useState } from "react";

function TypingText({
  words = [
    "Full-Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Web Application Developer",
  ],
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const nextText = currentWord.slice(0, displayText.length - 1);
        setDisplayText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <span
      className="inline-block min-w-[280px] bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400"
      aria-live="polite"
    >
      {displayText}
      <span className="ml-1 inline-block h-7 w-[2px] translate-y-1 animate-pulse bg-blue-600 dark:bg-blue-400" />
    </span>
  );
}

export default TypingText;