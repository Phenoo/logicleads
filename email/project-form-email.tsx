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

type ProjectFormEmailProps = {
  name: string;
  projectDescription: string;
  budget: string;
  email: string;
  phoneNumber: string;
  timeline: string;
};

export default function ProjectFormEmail({
  name,
  projectDescription,
  budget,
  email,
  phoneNumber,
  timeline,
}: ProjectFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New project submission from your site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received a new project submission
              </Heading>
              <Hr />
              <Text className="font-semibold">Name:</Text>
              <Text>{name}</Text>
              
              <Text className="font-semibold">Project Description:</Text>
              <Text>{projectDescription}</Text>
              
              <Text className="font-semibold">Budget:</Text>
              <Text>{budget}</Text>
              
              <Text className="font-semibold">Email:</Text>
              <Text>{email}</Text>
              
              <Text className="font-semibold">Phone Number:</Text>
              <Text>{phoneNumber}</Text>
              
              <Text className="font-semibold">Timeline:</Text>
              <Text>{timeline}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

