import NavBar from '../components/NavBar';

const contactDetails = [
  {
    label: 'Full Name',
    value: 'Asvin Thakur',
  },
  {
    label: 'Mobile Number',
    value: '7888566545',
    href: 'tel:7888566545',
  },
  {
    label: 'Age',
    value: '20',
  },
  {
    label: 'Date of Birth',
    value: '5 April 2006',
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn',
    href: 'https://www.linkedin.com/in/asvin-thakur-ta128?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'GitHub',
    href: 'https://github.com/asvin887',
    icon: 'github',
  },
];

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'linkedin') {
    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V8.98h3.41v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
      </svg>
    );
  }

  if (icon === 'github') {
    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.37 0 0 5.5 0 12.29c0 5.43 3.44 10.04 8.2 11.67.6.11.82-.27.82-.59 0-.29-.01-1.06-.02-2.08-3.34.74-4.04-1.65-4.04-1.65-.55-1.42-1.34-1.8-1.34-1.8-1.09-.76.08-.75.08-.75 1.21.09 1.85 1.27 1.85 1.27 1.07 1.89 2.82 1.34 3.51 1.03.11-.8.42-1.34.76-1.65-2.66-.31-5.46-1.36-5.46-6.07 0-1.34.47-2.43 1.24-3.29-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.26A11.24 11.24 0 0 1 12 5.97c1.02.01 2.04.14 3 .42 2.29-1.59 3.3-1.26 3.3-1.26.66 1.69.24 2.94.12 3.25.77.86 1.24 1.95 1.24 3.29 0 4.72-2.8 5.75-5.47 6.06.43.38.81 1.12.81 2.26 0 1.63-.02 2.95-.02 3.35 0 .33.22.71.83.59A12.2 12.2 0 0 0 24 12.29C24 5.5 18.63 0 12 0Z" />
      </svg>
    );
  }

  return null;
}

export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-amber-50 px-6 pb-20 pt-6 text-slate-950">
      <div className="absolute inset-0 opacity-90 [background-image:linear-gradient(rgba(146,64,14,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(146,64,14,0.09)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(254,243,199,0.96),rgba(255,255,255,0.72)_42%,rgba(253,186,116,0.48)_70%,rgba(221,214,254,0.34))]" />
      <div className="relative mx-auto max-w-5xl">
        <nav className="mb-14 flex justify-center">
          <NavBar active="contact" />
        </nav>

        <p className="text-xs font-medium tracking-[0.35em] text-amber-700 uppercase">
          Contact
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950 md:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 md:text-lg">
          Following are my contanct details. Feel free to reach out to me for any queries, collabortions or just say " Hi 👋 " to me on LinkedIn.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {contactDetails.map((detail) => (
            <div
              key={detail.label}
              className="border border-amber-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
            >
              <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                {detail.label}
              </p>

              {detail.href ? (
                <a
                  href={detail.href}
                  target={detail.href.startsWith('tel:') ? undefined : '_blank'}
                  rel={detail.href.startsWith('tel:') ? undefined : 'noreferrer'}
                  className="mt-4 flex items-center gap-3 break-words text-xl font-semibold text-slate-950 transition-colors hover:text-amber-700"
                >
                  {detail.icon ? <SocialIcon icon={detail.icon} /> : null}
                  {detail.value}
                </a>
              ) : (
                <p className="mt-4 text-xl font-semibold text-slate-950">
                  {detail.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
