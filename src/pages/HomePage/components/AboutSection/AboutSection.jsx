import { ru } from "../../../../constants/ru";
import {
  Section,
  Eyebrow,
  Headline,
  Mission,
  BlockTitle,
  Benefits,
  Benefit,
  BenefitMark,
  BenefitBody,
  BenefitTitle,
  BenefitText,
  CtaRow,
  Cta,
  Contacts,
  ContactLine,
  Closing,
} from "./AboutSection.styles";

const about = ru.home.about;

export default function AboutSection() {
  return (
    <Section aria-labelledby="about-headline">
      <Eyebrow>{ru.home.aboutTitle}</Eyebrow>
      <Headline id="about-headline">{about.headline}</Headline>

      <Mission>
        <p>{about.mission}</p>
      </Mission>

      <BlockTitle>Наши преимущества</BlockTitle>
      <Benefits>
        {about.benefits.map((item) => (
          <Benefit key={item.title}>
            <BenefitMark aria-hidden="true" />
            <BenefitBody>
              <BenefitTitle>{item.title}</BenefitTitle>
              <BenefitText>{item.text}</BenefitText>
            </BenefitBody>
          </Benefit>
        ))}
      </Benefits>

      <CtaRow>
        <Cta to="/hotels">{about.cta}</Cta>
      </CtaRow>

      <Contacts>
        <BlockTitle as="h3">{about.contactsTitle}</BlockTitle>
        <ContactLine>
          <strong>Телефон:</strong>{" "}
          <a href={`tel:${about.phone.replace(/\s/g, "")}`}>{about.phone}</a>
        </ContactLine>
        <ContactLine>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${about.email}`}>{about.email}</a>
        </ContactLine>
      </Contacts>

      <Closing>{about.closing}</Closing>
    </Section>
  );
}
