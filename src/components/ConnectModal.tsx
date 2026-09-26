"use client";

import { Column, Dialog, Icon, Row, SmartLink, Text } from "@once-ui-system/core";
import type { IconName } from "@/resources/icons";
import { connect } from "@/resources";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ConnectRowProps {
  icon: IconName;
  label: string;
  value: string;
  href: string;
}

function ConnectRow({ icon, label, value, href }: ConnectRowProps) {
  return (
    <SmartLink href={href} unstyled fillWidth style={{ width: "100%" }}>
      <Row
        fillWidth
        vertical="center"
        gap="16"
        padding="16"
        radius="l"
        border="neutral-alpha-medium"
        background="neutral-alpha-weak"
      >
        <Row
          width="40"
          height="40"
          radius="full"
          background="brand-alpha-weak"
          horizontal="center"
          vertical="center"
        >
          <Icon name={icon} onBackground="brand-medium" size="s" />
        </Row>
        <Column flex={1} gap="2">
          <Text
            variant="label-default-s"
            onBackground="neutral-weak"
            style={{ letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            {label}
          </Text>
          <Text variant="heading-strong-s">{value}</Text>
        </Column>
        <Icon name="arrowRight" onBackground="neutral-weak" size="s" />
      </Row>
    </SmartLink>
  );
}

export function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={
        <Column id="dialog-title" gap="4">
          <Text
            variant="label-strong-s"
            onBackground="brand-medium"
            style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            {connect.eyebrow}
          </Text>
          <Text as="h2" variant="display-strong-xs">
            {connect.title}
          </Text>
        </Column>
      }
    >
      <Column fillWidth gap="12" paddingTop="8">
        <ConnectRow icon="email" label="Email" value={connect.email} href={`mailto:${connect.email}`} />
        <ConnectRow
          icon="linkedin"
          label="LinkedIn"
          value={connect.linkedin.label}
          href={connect.linkedin.link}
        />
        <Text
          variant="body-default-s"
          onBackground="neutral-weak"
          align="center"
          wrap="balance"
          paddingTop="12"
        >
          {connect.description}
        </Text>
      </Column>
    </Dialog>
  );
}
