import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { profile } from "@/data/profile";

const iconByType: Record<string, LucideIcon> = {
  location: MapPin,
  email: Mail,
  github: Github,
  linkedin: Linkedin,
};

const accentColorByName: Record<string, string> = {
  green: "text-accent-green",
  cyan: "text-accent-cyan",
  amber: "text-accent-amber",
  purple: "text-accent-purple",
};

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="px-20 py-20">
      <div className="mx-auto w-full max-w-[960px]">
        <SectionHeader title={t("title")} />

        <p className="mt-8 max-w-[600px] font-body text-sm leading-[1.7] text-foreground-secondary">
          {t("description")}
        </p>

        <div className="mt-8 grid grid-cols-4 gap-6">
          {profile.contacts.map((contact) => {
            const Icon = iconByType[contact.type];
            const label = t(contact.type);
            const valueClassName = accentColorByName[contact.accentColor];

            return (
              <Card key={contact.type} className="p-5">
                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${valueClassName}`} />
                  <p className="font-mono text-xs text-foreground-secondary">{label}</p>
                </div>

                {contact.href ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-3 block font-mono text-sm ${valueClassName} transition-opacity hover:opacity-80`}
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className={`mt-3 font-mono text-sm ${valueClassName}`}>
                    {contact.value}
                  </p>
                )}
              </Card>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-2 font-body text-sm text-accent-green">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-green" aria-hidden />
          <span>{t("availableForWork")}</span>
        </div>
      </div>
    </section>
  );
}
