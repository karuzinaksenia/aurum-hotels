import { SpinnerWrap, Ring } from "./Spinner.styles";

export default function Spinner({ label = "Loading…" }) {
  return (
    <SpinnerWrap role="status" aria-live="polite">
      <Ring aria-hidden="true" />
      <span>{label}</span>
    </SpinnerWrap>
  );
}
