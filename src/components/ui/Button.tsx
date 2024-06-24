import "./Button.scss";

type TButtonComponentProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  btnRef?: React.RefObject<HTMLButtonElement>;
};

export default function Button({
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
