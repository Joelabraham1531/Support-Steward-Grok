import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LangToggle({ light }: { light?: boolean }) {
  const lang = useI18n((s) => s.lang);
  const setLang = useI18n((s) => s.setLang);

  return (
    <div
      className={cn(
        "inline-flex overflow-hidden border text-xs font-semibold",
        light ? "border-accent-fg/40" : "border-navy",
      )}
      role="group"
      aria-label="Language"
    >
      {(["de", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={cn(
            "h-8 min-w-8 px-2 uppercase sm:min-w-10 sm:px-2.5",
            lang === l
              ? light
                ? "bg-teal text-ink"
                : "bg-navy text-accent-fg"
              : light
                ? "text-accent-fg/80 hover:text-accent-fg"
                : "text-navy hover:bg-sage",
          )}
          aria-pressed={lang === l}
        >
          {l === "de" ? "DE" : "EN"}
        </button>
      ))}
    </div>
  );
}
