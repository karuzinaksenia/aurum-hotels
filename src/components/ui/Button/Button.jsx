import { StyledButton } from "./Button.styles";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}) {
  return (
    <StyledButton $variant={variant} $size={size} type={type} {...props}>
      {children}
    </StyledButton>
  );
}
