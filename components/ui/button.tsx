"use client";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

/**
 * Minimal shadcn/ui-style Button — no extra runtime deps.
 * Supports a primary / secondary / ghost variant and renders either
 * a <button> or an <a> depending on whether `href` is provided.
 */

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: ReactNode;
}

const baseClasses =
  "inline-flex items-center justify-center font-medium transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-accent bg-accent text-background hover:bg-accent-hover rounded-none",
  secondary:
    "border border-text text-text hover:bg-text/10 rounded-none",
  ghost: "border-transparent text-text hover:bg-text/10 rounded-none",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
