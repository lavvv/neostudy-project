import "./Button.scss";

type TButtonComponentProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  btnRef?: React.RefObject<HTMLButtonElement>;
};

export function Button({
  children,
  className,
  onClick,
  btnRef,
}: TButtonComponentProps) {
  return (
    <button className={className} onClick={onClick} ref={btnRef}>
      {children}
    </button>
  );
}
