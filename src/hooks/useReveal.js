import { useEffect, useRef } from "react";

export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px", // 🔥 smooth early trigger
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}
