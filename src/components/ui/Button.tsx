import "./Button.scss";

type TButtonComponentProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: TButtonComponentProps) {
  return <button className={className}>{children}</button>;
}
