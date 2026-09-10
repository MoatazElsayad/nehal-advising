import useScrollReveal from '../hooks/useScrollReveal';

export default function ScrollReveal({ children, className = '', as: Tag = 'div', ...props }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}