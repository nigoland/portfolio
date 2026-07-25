import React from "react";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="cs-eyebrow">{children}</span>;
}

export function Lede({ children }: { children: React.ReactNode }) {
  return <p className="cs-lede">{children}</p>;
}

export function SpecList({ children }: { children: React.ReactNode }) {
  return <div className="cs-spec-list">{children}</div>;
}

export function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="cs-spec-item">
      <span className="cs-spec-label">{label}</span>
      <span className="cs-spec-value">{value}</span>
    </div>
  );
}

export function Chain({ children }: { children: React.ReactNode }) {
  return <div className="cs-chain">{children}</div>;
}

type ChainVariant = "danger" | "brand" | "neutral";

export function ChainItem({
  label,
  variant = "neutral",
  children,
}: {
  label: string;
  variant?: ChainVariant;
  children: React.ReactNode;
}) {
  const variantClass = variant === "neutral" ? "" : ` cs-chain-item--${variant}`;
  return (
    <div className={`cs-chain-item${variantClass}`}>
      <span className="cs-chain-label">{label}</span>
      <p className="cs-chain-text">{children}</p>
    </div>
  );
}

export function StatRow({ children }: { children: React.ReactNode }) {
  return <div className="cs-stat-row">{children}</div>;
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="cs-stat">
      <div className="cs-stat-number">{value}</div>
      <div className="cs-stat-label">{label}</div>
    </div>
  );
}
