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
  subject: string;
  message: string;
}

export function ContactTemplate({
  name,
  email,
  subject,
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
                src={`https://buon18.com/assets/buon18-logo.png`}
                width="40"
                height="37"
                alt="Buon18"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              We go a new email from <strong>{name}</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello <strong>Buon18</strong>,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong>{name}</strong> (
              <Link
                href={`mailto:${email}`}
                className="text-blue-600 no-underline"
              >
                {email}
              </Link>
              ) want to talk about <strong>{subject}</strong>.
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
