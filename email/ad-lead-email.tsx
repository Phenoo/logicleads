import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import type { MarketingAttribution } from "../lib/marketing";

type AdLeadEmailProps = {
  name: string;
  businessType: string;
  budgetBand: string;
  timeline: string;
  phoneNumber: string;
  attribution?: MarketingAttribution;
};

export default function AdLeadEmail({
  name,
  businessType,
  budgetBand,
  timeline,
  phoneNumber,
  attribution,
}: AdLeadEmailProps) {
  const attributionEntries = Object.entries(attribution || {}).filter(
    ([, value]) => Boolean(value)
  );

  return (
    <Html>
      <Head />
      <Preview>New website quote lead from the landing page</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received a new website quote lead
              </Heading>
              <Hr />
              <Text className="font-semibold">Name:</Text>
              <Text>{name}</Text>

              <Text className="font-semibold">Business Type:</Text>
              <Text>{businessType}</Text>

              <Text className="font-semibold">Budget Band:</Text>
              <Text>{budgetBand}</Text>

              <Text className="font-semibold">Timeline:</Text>
              <Text>{timeline}</Text>

              <Text className="font-semibold">Phone / WhatsApp:</Text>
              <Text>{phoneNumber}</Text>

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
