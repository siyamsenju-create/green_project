import { useInView as useIntersectionObserver } from 'react-intersection-observer';

export const useInView = (options = { threshold: 0.2, triggerOnce: true }) => {
  const { ref, inView } = useIntersectionObserver(options);
  return [ref, inView];
};
