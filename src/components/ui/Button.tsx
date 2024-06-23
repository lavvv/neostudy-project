import "./Button.scss";

type TButtonComponentProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  className,
  onClick,
}: TButtonComponentProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
