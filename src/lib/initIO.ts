export default function(container: Element, ratio: number) {
    const elements = container.querySelectorAll('[class*="reveal-"]');
  
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio,
    };
  
    try {
      const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > ratio) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      };
  
      const observer = new IntersectionObserver(handleIntersect, options);
  
      elements.forEach((r) => {
        observer.observe(r);
      });
  
      return observer;
    } catch (e) {
      console.error("A problem occured while applying intersection observer on the elements.");
      for (const element of Array.from(elements)) {
        element.classList.add("patch-reveal");
      }
    }
  }