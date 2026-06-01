import { Badge, Score, Label } from "./RatingBadge.styles";

export default function RatingBadge({ rating, showLabel = true }) {
  const score = Number(rating).toFixed(1);

  return (
    <Badge $score={Number(rating)} aria-label={`Рейтинг ${score} из 5`}>
      <Score>{score}</Score>
      {showLabel && <Label>★</Label>}
    </Badge>
  );
}
