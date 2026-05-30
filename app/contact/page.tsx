import PageShell from "../components/PageShell";
import { contactDetails } from "../data";

export default function Contact() {
  return (
    <PageShell
      active="contact"
      eyebrow="Contact"
      title="Open a direct line"
      intro="Reach out for collaborations, college connections, project conversations, or a simple hello through clean contact cards built for quick action."
    >
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {contactDetails.map((detail, index) => (
          <article key={detail.label} className="group border border-primary bg-background p-7 transition duration-300 hover:-translate-y-1 hover:bg-secondary">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-muted-foreground">0{index + 1} / {detail.label}</p>
            {detail.href ? (
              <a href={detail.href} target={detail.href.startsWith("tel:") ? undefined : "_blank"} rel={detail.href.startsWith("tel:") ? undefined : "noreferrer"} className="mt-5 block break-words text-3xl font-black uppercase tracking-[-0.05em] transition group-hover:translate-x-1 md:text-4xl">
                {detail.value}
              </a>
            ) : (
              <p className="mt-5 text-3xl font-black uppercase tracking-[-0.05em] md:text-4xl">{detail.value}</p>
            )}
          </article>
        ))}
      </section>

      <section className="mt-6 border border-primary bg-primary p-7 text-primary-foreground md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.42em] text-primary-foreground/70">Response Mode</p>
        <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl">Professional, curious, and ready to connect</h2>
        <p className="mt-4 max-w-3xl font-mono text-sm font-medium uppercase leading-7 tracking-wide">Best for project discussions, college connections, management conversations, technology learning, and networking opportunities.</p>
      </section>
    </PageShell>
  );
}
