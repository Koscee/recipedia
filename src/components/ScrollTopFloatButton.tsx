import { ArrowUp } from '../assets/icons';

export default function ScrollTopFloatButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-top" onClick={handleClick}>
      <ArrowUp width={30} />
    </div>
  );
}
