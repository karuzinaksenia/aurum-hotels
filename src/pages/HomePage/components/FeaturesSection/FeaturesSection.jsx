import { ru } from "../../../../constants/ru";
import { Section, Title, Grid, Card, CardTitle, CardText } from "./FeaturesSection.styles";

const items = [
  { title: ru.home.feature1Title, text: ru.home.feature1Text },
  { title: ru.home.feature2Title, text: ru.home.feature2Text },
  { title: ru.home.feature3Title, text: ru.home.feature3Text },
];

export default function FeaturesSection() {
  return (
    <Section aria-labelledby="features-title">
      <Title id="features-title">{ru.home.featuresTitle}</Title>
      <Grid>
        {items.map((item) => (
          <Card key={item.title}>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.text}</CardText>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
