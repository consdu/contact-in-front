import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  isLoading?: boolean;
  isButtonDisabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
}

const Button = ({
  isLoading,
  isButtonDisabled,
  text,
  type,
}: ButtonProps): React.ReactElement => {
  let classes = "button ";

  if (isLoading) {
    classes += "button--loading button--hide-text";
  }

  return (
    <ButtonStyled
      className={classes}
      disabled={isButtonDisabled || isLoading}
      type={type}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
