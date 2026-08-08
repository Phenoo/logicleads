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
  businessName?: string;
  email?: string;
  phoneNumber: string;
  projectType?: string;
  businessType?: string;
  businessDescription?: string;
  goal?: string;
  budgetBand: string;
  timeline: string;
  attribution?: MarketingAttribution;
};

export default function AdLeadEmail({
  name,
  businessName,
  email,
  phoneNumber,
  projectType,
  businessType,
  businessDescription,
  goal,
  budgetBand,
  timeline,
  attribution,
}: AdLeadEmailProps) {
  const attributionEntries = Object.entries(attribution || {}).filter(
    ([, value]) => Boolean(value)
  );

  return (
    <Html>
      <Head />
      <Preview>New Meta Ads Project Enquiry Lead</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md bg-white px-10 py-6">
              <Heading className="leading-tight text-xl font-bold">
                New Project Enquiry Lead Received
              </Heading>
              <Hr />
              <Text className="font-semibold">Full Name:</Text>
              <Text>{name}</Text>

              {businessName ? (
                <>
                  <Text className="font-semibold">Business Name:</Text>
                  <Text>{businessName}</Text>
                </>
              ) : null}

              {email ? (
                <>
                  <Text className="font-semibold">Email:</Text>
                  <Text>{email}</Text>
                </>
              ) : null}

              <Text className="font-semibold">Phone / WhatsApp:</Text>
              <Text>{phoneNumber}</Text>

              {projectType || businessType ? (
                <>
                  <Text className="font-semibold">Project Type / Category:</Text>
                  <Text>{projectType || businessType}</Text>
                </>
              ) : null}

              {businessDescription ? (
                <>
                  <Text className="font-semibold">Business Description:</Text>
                  <Text>{businessDescription}</Text>
                </>
              ) : null}

              {goal ? (
                <>
                  <Text className="font-semibold">Project Goal:</Text>
                  <Text>{goal}</Text>
                </>
              ) : null}

              <Text className="font-semibold">Budget Band:</Text>
              <Text>{budgetBand}</Text>

              <Text className="font-semibold">Timeline:</Text>
              <Text>{timeline}</Text>

              {attributionEntries.length > 0 ? (
                <>
                  <Hr />
                  <Text className="font-semibold">Attribution & Source:</Text>
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
