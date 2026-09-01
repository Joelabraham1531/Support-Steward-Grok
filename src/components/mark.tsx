export function LotseLockup({ inverted }: { inverted?: boolean }) {
  return (
    <img
      src={inverted ? "/steward-logo-light.png" : "/steward-logo.png"}
      alt="Support Steward"
      className="h-10 w-auto max-w-48 object-contain sm:h-12"
    />
  );
}
