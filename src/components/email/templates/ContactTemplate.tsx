import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import React from "react";

interface ContactTemplateProps {
  name: string;
  email: string;
  phone_number: string;
  service: string;
  message: string;
}

export function ContactTemplate({
  name,
  email,
  phone_number,
  service,
  message,
}: ContactTemplateProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://buon18.com/buon18.png`}
                width="40"
                height="37"
                alt="Buon18"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-secondary">
              We go a new email from <strong>{name}</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-secondary">
              Hello <strong>Buon18</strong>{" "}
              <Link
                href={`tel:${phone_number}`}
                className="text-green-600 no-underline"
              >
                {phone_number}
              </Link>
              ,
            </Text>
            <Text className="text-[14px] leading-[24px] text-secondary">
              <strong>{name}</strong> (
              <Link
                href={`mailto:${email}`}
                className="text-green-600 no-underline"
              >
                {email}
              </Link>
              ) want to talk about <strong>{service}</strong>.
            </Text>
            <Section>
              <Text>{message}</Text>
            </Section>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              This email was generated from <strong>Buon18 Portfolio</strong>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
