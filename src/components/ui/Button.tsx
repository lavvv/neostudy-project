import "./Button.scss";

type Button = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  btnRef?: React.RefObject<HTMLButtonElement>;
};

export function Button({ children, className, onClick, btnRef }: Button) {
  return (
    <button className={className} onClick={onClick} ref={btnRef}>
      {children}
    </button>
  );
}
