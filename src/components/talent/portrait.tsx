import { useState } from "react";
import type { Candidate } from "@/lib/talent";
import { cn } from "@/lib/utils";

const TONES = ["bg-sage", "bg-line", "bg-accent/15", "bg-clay/30"] as const;

function tone(id: string) {
  let n = 0;
  for (let i = 0; i < id.length; i++) n += id.charCodeAt(i);
  return TONES[n % TONES.length];
}

export function Portrait({
  candidate,
  className,
}: {
  candidate: Candidate;
  className?: string;
}) {
  const [broken, setBroken] = useState(false);
  const initials = `${candidate.firstName[0]}${candidate.lastName[0]}`;

  if (!candidate.photo || broken) {
    return (
      <div
        className={cn(
          "flex items-center justify-center text-accent",
          tone(candidate.id),
          className,
        )}
      >
        <span className="font-heading text-4xl font-medium tracking-tight">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={candidate.photo}
      alt=""
      className={cn("object-cover object-top", className)}
      onError={() => setBroken(true)}
    />
  );
}
