import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded-lg font-semibold";
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary/90"
      : "border border-primary text-primary hover:bg-primary/10";
  return <button className={cn(base, styles, className)} {...props} />;
}
