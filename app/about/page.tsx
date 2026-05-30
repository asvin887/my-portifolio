import NavBar from '../components/NavBar';

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-amber-50 px-6 pb-20 pt-6 text-slate-950">
      <div className="absolute inset-0 opacity-90 [background-image:linear-gradient(rgba(146,64,14,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(146,64,14,0.09)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(254,243,199,0.96),rgba(255,255,255,0.72)_42%,rgba(253,186,116,0.48)_70%,rgba(187,247,208,0.34))]" />
      <div className="relative mx-auto max-w-4xl">
        <nav className="mb-14 flex justify-center">
          <NavBar active="about" />
        </nav>

        <p className="text-xs font-medium tracking-[0.35em] text-amber-700 uppercase">
          About
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950 md:text-5xl">
          Hi, I&apos;m Asvin Thakur.
        </h1>
        <p className="mt-6 w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl text-base leading-8 text-slate-700 md:text-lg mx-auto">
          I&apos;m a passionate web developer and this page has been developed by me.
          I&apos;m currently enrolled in the <b><i>Bachelor of Business Administration (BBA)</i></b> programme at <b><i>Bharati Vidypeeth College Management of Studies(off-campus)</i></b> in Kharghar, Navi Mumbai.
          I have a strong interest in <b><i>communication skills</i></b> along with my technical knowledge for the <b><i>Computer field and Artificial Intelligence (AI)</i></b>.
          I also have a great passion for the field of <b><i>management skills</i></b> and I am currently learning about it. 
          From the batch of <b><i>2026 - 2029</i></b>.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="border border-amber-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <h2 className="text-sm font-semibold tracking-widest text-amber-700 uppercase">
              Skills
            </h2>
            <div className="mt-6 w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
  <p className="text-sm leading-7 text-slate-600 mb-4">
    The following are my technical skills that I have learned and fully completed:
  </p>
  
  {/* Flex row container that wraps nicely onto new lines on smaller screens */}
  <div className="flex flex-wrap gap-3 justify-center">
    {['Python', 'C++', 'Node.js', 'SwiftUI'].map((skill) => (
      <span 
        key={skill} 
        className="px-4 py-2 text-xs md:text-sm font-semibold text-amber-800 bg-amber-50 backdrop-blur-md border border-amber-200 rounded-full shadow-sm transition-all duration-300 hover:border-amber-400 hover:bg-amber-100 hover:-translate-y-0.5 cursor-default select-none"
      >
        {skill}
      </span>
    ))}
  </div>
</div>
          </div>

          <div className="border border-amber-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <h2 className="text-sm font-semibold tracking-widest text-amber-700 uppercase">
              Projects
            </h2>
            <div className="mt-6 w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
              <p className="text-sm leading-7 text-slate-600 mb-4">
                The following are my projects:
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                {['My Portifolio'].map((project) => (
                  <span
                    key={project}
                    className="px-4 py-2 text-xs md:text-sm font-semibold text-amber-800 bg-amber-50 backdrop-blur-md border border-amber-200 rounded-full shadow-sm transition-all duration-300 hover:border-amber-400 hover:bg-amber-100 hover:-translate-y-0.5 cursor-default select-none"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-amber-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <h2 className="text-sm font-semibold tracking-widest text-amber-700 uppercase">
              Goals
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              My goal is to become a successful as <b>Human resource manager</b> in the future. After completing my <b>Bachelor of Business Administration (BBA)</b> programme. After that I want to pursue <b>Master of Business Administration (MBA)</b> programme with <b>Human Resource Management </b> as my specialisation. I am passionate about working with people and helping them to grow and develop in their daily live and career and maintain their work-life balance while still being fully productive and enthausiastic about their work.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
