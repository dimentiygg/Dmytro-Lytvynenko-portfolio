export const Icon = ({ name, size = 24, className = "" }) => (
  <svg width={size} height={size} className={className}>
    <use href={`/sprite.svg#${name}`} />
  </svg>
);
