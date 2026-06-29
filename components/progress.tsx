export default function Progress({
  value,
  max,
}: {
  value: number;
  max: number;
}) {
  return (
    <progress
      max={max}
      value={value}
      className="w-full h-2 appearance-none overflow-hidden rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-background [&::-webkit-progress-value]:bg-linear-to-r [&::-webkit-progress-value]:from-secondary [&::-webkit-progress-value]:to-accent [&::-moz-progress-bar]:bg-linear-to-r"
    />
  );
}
