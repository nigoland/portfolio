"use client";

import { usePathname } from "next/navigation";
import { Flex } from "@once-ui-system/core";
import { RouteGuard } from "./RouteGuard";

interface PageShellProps {
  children: React.ReactNode;
}

// The Nigoland homepage is a full-bleed, edge-to-edge design, so it skips the
// padded/centered content wrapper every other route uses.
export function PageShell({ children }: PageShellProps) {
  const pathname = usePathname() ?? "";
  const isHome = pathname === "/";

  if (isHome) {
    return <RouteGuard>{children}</RouteGuard>;
  }

  return (
    <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
      <Flex horizontal="center" fillWidth minHeight="0">
        <RouteGuard>{children}</RouteGuard>
      </Flex>
    </Flex>
  );
}

// Skipped on the home page: the full-bleed Nigoland header sits flush at the
// top, so it doesn't need the clearance this spacer gives the floating pill
// header used on every other route.
export function TopSpacer() {
  const pathname = usePathname() ?? "";
  if (pathname === "/") return null;
  return <Flex fillWidth minHeight="16" s={{ hide: true }} />;
}
