import { Field, Label, StyledInput, ErrorText } from "./Input.styles";

export default function Input({
  label,
  id,
  error,
  required,
  ...props
}) {
  const inputId = id || props.name;

  return (
    <Field>
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && (
            <span aria-hidden="true"> *</span>
          )}
        </Label>
      )}
      <StyledInput id={inputId} required={required} aria-invalid={!!error} {...props} />
      {error && <ErrorText role="alert">{error}</ErrorText>}
    </Field>
  );
}
