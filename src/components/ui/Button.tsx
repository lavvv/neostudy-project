import "./Button.scss";

type TButtonComponentProps = {
  children: React.ReactNode;
  classes?: string;
  onPress?: () => unknown;
};

export default function Button({
  children,
  classes,
  onPress,
}: TButtonComponentProps) {
  return (
    <button className={classes} onClick={onPress}>
      {children}
    </button>
  );
}
