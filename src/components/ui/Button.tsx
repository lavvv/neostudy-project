import "./Button.scss";

type TButtonProps = {
  children: React.ReactNode;
  classes?: string;
  btnType?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  classes,
  btnType = "button",
}: TButtonProps) {
  return (
    <button className={classes} type={btnType}>
      {children}
    </button>
  );
}
