export function inview(node, params = {}) {
  const { threshold = 0.15, delay = 0, once = true } = params;

  node.style.opacity = '0';
  node.style.transform = 'translateY(30px)';
  node.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
        if (once) observer.unobserve(node);
      }
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}
