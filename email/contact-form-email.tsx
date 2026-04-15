import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import type { MarketingAttribution } from "../lib/marketing";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  firstName: string;
  phoneNumber: string;
  subject: string;
  attribution?: MarketingAttribution;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  firstName,
  phoneNumber,
  subject,
  attribution,
}: ContactFormEmailProps) {
  const attributionEntries = Object.entries(attribution || {}).filter(
    ([, value]) => Boolean(value)
  );

  return (
    <Html>
      <Head />
      <Preview>New message from your site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s name is: {firstName}</Text>
              <Text>The sender&apos;s email is: {senderEmail}</Text>
              <Text>The sender&apos;s subject is: {subject}</Text>

              <Text>The sender&apos;s phone number is: {phoneNumber}</Text>
              {attributionEntries.length > 0 ? (
                <>
                  <Hr />
                  <Text className="font-semibold">Attribution:</Text>
                  {attributionEntries.map(([key, value]) => (
                    <Text key={key}>
                      {key}: {value}
                    </Text>
                  ))}
                </>
              ) : null}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
