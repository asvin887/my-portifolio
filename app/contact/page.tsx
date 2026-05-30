import { ExternalLink, Mail, Phone, UserRound } from "lucide-react";
import PageShell from "../components/PageShell";
import { contactDetails } from "../data";

function DetailIcon({ label }: { label: string }) {
  if (label === "LinkedIn" || label === "GitHub") return <ExternalLink className="h-6 w-6" />;
  if (label === "Mobile Number") return <Phone className="h-6 w-6" />;
  if (label === "Full Name") return <UserRound className="h-6 w-6" />;
  return <Mail className="h-6 w-6" />;
}

export default function Contact() {
  return (
    <PageShell
      active="contact"
      eyebrow="Contact"
      title="Open a direct signal"
      intro="Reach out for collaborations, questions, or a simple hello. The contact cards are structured for quick action and clean mobile viewing."
    >
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {contactDetails.map((detail) => (
          <article key={detail.label} className="group rounded-[2rem] border border-cyan-200/15 bg-white/[0.06] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.09]">
            <div className="flex items-center gap-4 text-cyan-200">
              <DetailIcon label={detail.label} />
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100/70">{detail.label}</p>
            </div>
            {detail.href ? (
              <a href={detail.href} target={detail.href.startsWith("tel:") ? undefined : "_blank"} rel={detail.href.startsWith("tel:") ? undefined : "noreferrer"} className="mt-5 block break-words text-2xl font-black text-white transition group-hover:text-cyan-100">
                {detail.value}
              </a>
            ) : (
              <p className="mt-5 text-2xl font-black text-white">{detail.value}</p>
            )}
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-[2rem] border border-violet-200/15 bg-violet-300/[0.07] p-7 backdrop-blur-xl md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.42em] text-violet-100/80">Response Mode</p>
        <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.04em] text-white">Professional, curious, and ready to connect</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">Best for project discussions, college connections, management conversations, technology learning, and networking opportunities.</p>
      </section>
    </PageShell>
  );
}
