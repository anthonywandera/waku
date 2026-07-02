import { FaStar } from "react-icons/fa6";

export function getStars(value: number) {
  return Array.from({ length: value }, (_, i) => <FaStar key={i} />);
}
