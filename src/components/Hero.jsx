import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";

const ROLES = ["Frontend Developer", "React Developer", "UI Engineer"];

function useTypewriter(
  words,
  { typeSpeed = 90, deleteSpeed = 45, pause = 1400 } = {},
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    // When a word is fully typed, hold, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    // When fully deleted, advance to the next word.
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      },
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Floating gradient blobs (CSS only) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-emerald/25 blur-3xl animate-blob" />
        <div className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-gold/15 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-[8%] left-[35%] h-72 w-72 rounded-full bg-emerald-soft/15 blur-3xl animate-blob [animation-delay:-12s]" />
      </div>

      {/* Giant faint watermark word */}
      <span className="watermark absolute -right-4 top-1/2 -z-10 -translate-y-1/2 text-[26vw] leading-none md:right-8">
        CREATE
      </span>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 font-mono text-sm text-emerald-soft"
          >
            {"<"}hello world{" />"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl"
          >
            Rishi
            <br />
            <span className="bg-gradient-to-r from-emerald-soft to-gold bg-clip-text text-transparent">
              Rana
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 flex items-center gap-1 font-mono text-xl text-slate-200 sm:text-2xl"
          >
            <span aria-live="polite">{typed}</span>
            <span className="inline-block w-[2px] animate-blink bg-gold">
              &nbsp;
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-slate-400"
          >
            I build fast, clean interfaces people actually enjoy using.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a
              href="/Rishi_Rana_Resume.pdf?v=6"
              download="Rishi_Rana_Resume.pdf"
              className="btn-outline"
            >
              <FiDownload /> Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-emerald-soft"
        aria-label="Scroll to about"
      >
        <FiArrowDown className="animate-bounce text-2xl" />
      </a>
    </section>
  );
}
