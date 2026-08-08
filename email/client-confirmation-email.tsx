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

type ClientConfirmationEmailProps = {
  name: string;
  projectType?: string;
  budgetBand?: string;
};

export default function ClientConfirmationEmail({
  name,
  projectType,
  budgetBand,
}: ClientConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>We received your project enquiry - Logic Leads</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans text-black">
          <Container className="mx-auto my-10 max-w-xl rounded-2xl bg-white p-8 shadow-sm">
            <Section>
              <Heading className="text-2xl font-bold text-[#10121d] leading-tight">
                Thanks for reaching out, {name}!
              </Heading>
              <Text className="mt-4 text-base text-gray-700 leading-relaxed">
                We’ve received your project details for a{" "}
                <span className="font-semibold text-black">{projectType || "new project"}</span>.
              </Text>
              <Text className="text-base text-gray-700 leading-relaxed">
                Our team is reviewing your requirements and will follow up shortly with a recommended scope and estimated quote.
              </Text>

              <Hr className="my-6 border-gray-200" />

              <Text className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Enquiry Summary
              </Text>
              <Text className="mt-2 text-sm text-gray-800">
                <span className="font-semibold">Project Type:</span> {projectType || "General"}
              </Text>
              <Text className="text-sm text-gray-800">
                <span className="font-semibold">Budget Range:</span> {budgetBand || "Not sure yet"}
              </Text>

              <Hr className="my-6 border-gray-200" />

              <Text className="text-sm font-semibold text-black">
                Want to speak with a lead developer right away?
              </Text>
              <Text className="mt-1 text-sm text-gray-600">
                Reply to this email or message us directly on WhatsApp for an immediate response.
              </Text>

              <Text className="mt-8 text-xs text-gray-400">
                © {new Date().getFullYear()} Logic Leads. UK Digital Agency.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
