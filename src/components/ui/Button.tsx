import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  btnRef?: React.RefObject<HTMLButtonElement>;
};

export function Button({ children, className, onClick, btnRef }: ButtonProps) {
  return (
    <button className={className} onClick={onClick} ref={btnRef}>
      {children}
    </button>
  );
}
