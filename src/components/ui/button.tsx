import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "ghost";
export type ButtonSize = "default" | "sm";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-green text-surface border-transparent hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
  ghost:
    "bg-transparent border-border text-foreground hover:bg-surface-active focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-[13px]",
  sm: "px-4 py-2 text-[12px]",
};

interface ButtonCommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Button label in terminal format, e.g. "$ label" */
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButtonProps = ButtonCommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchorProps = ButtonCommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded border font-mono font-medium transition-opacity disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as ButtonAsButtonProps)}
    >
      {children}
    </button>
  );
}
