import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight, Sparkles, ShieldCheck, Layers, Users, Target } from "lucide-react";

/**
 * Single-file portfolio site.
 * - Tailwind for styling (no import needed)
 * - Framer Motion for subtle animations
 * - Replace the PROFILE object with your details.
 */

const PROFILE = {
  name: "Roland Porczio",
  title: "Director of Engineering",
  location: "Budapest, Hungary",
  summary:
    "Director of Engineering leading managers and cross-domain teams to deliver scalable, high-impact outcomes.\n\nFocused on organizational design, technical direction, and execution clarity. I use AI to enhance decision-making and leverage, and I’m passionate about building strong leaders and high-performing teams that scale.",
  links: {
    email: "rporcio@gmail.com",
    linkedin: "https://www.linkedin.com/in/rolandporczio/",
  },
  highlights: [
    {
      icon: Target,
      title: "Strategy → Execution",
      description:
        "Translate business goals into clear engineering direction, delivery governance, and predictable outcomes.",
    },
    {
      icon: Users,
      title: "Manager & Org Development",
      description:
        "Build strong managers, healthy teams, and scalable org structures (clarity, accountability, psychological safety).",
    },
    {
      icon: Sparkles,
      title: "AI-enabled leadership",
      description:
        "Use AI to synthesize complexity, improve decision quality, and increase leverage across teams.",
    },
    {
      icon: ShieldCheck,
      title: "Sustainable delivery",
      description:
        "Balance velocity with platform health: reliability, quality trends, and long-term technical strategy.",
    },
  ],
  experience: [
    {
      company: "Genesys",
      role: "Director of Engineering",
      period: "2026 – Present",
      bullets: [
        "Lead engineering managers and cross-domain teams; align technical direction with product strategy.",
        "Drive organizational design, delivery governance, and execution clarity at scale.",
        "Integrate AI into leadership workflows to improve decision-making and leverage.",
      ],
    },
    {
      company: "Genesys",
      role: "Senior Engineering Manager",
      period: "2021 – 2026",
      bullets: [
        "Led multiple teams; coached emerging leads; strengthened delivery predictability and alignment.",
        "Partnered with Product and stakeholders; balanced roadmap priorities with platform health.",
      ],
    },
    {
      company: "LogMeIn",
      role: "Engineering Manager",
      period: "2019 – 2021",
      bullets: [
        "Led a team; established execution discipline, ownership, and stakeholder transparency.",
      ],
    },
  ],
  projects: [
    {
      name: "Leadership systems toolkit",
      description:
        "A set of lightweight templates and workflows for delivery health, stakeholder updates, and decision logs.",
      tags: ["Operating model", "Execution"],
      link: "#",
    },
    {
      name: "AI-assisted decision brief generator",
      description:
        "Prototype that turns raw context into a structured decision brief (options, risks, recommendation).",
      tags: ["AI", "Leverage"],
      link: "#",
    },
  ],
  values: [
    {
      icon: Layers,
      title: "Clarity over noise",
      text: "Simple operating models, explicit trade-offs, and decision-making that scales.",
    },
    {
      icon: ShieldCheck,
      title: "High standards, low drama",
      text: "Sustainable engineering: quality, reliability, and psychological safety.",
    },
    {
      icon: Users,
      title: "Leaders build leaders",
      text: "Coach managers, grow future leaders, and create environments where teams thrive.",
    },
  ],
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/60 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-6">
          <div className="text-xs font-semibold tracking-widest text-neutral-500">
            {eyebrow}
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-full px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
    >
      {children}
    </a>
  );
}

function PrimaryButton({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
      <ArrowRight className="h-4 w-4 opacity-80" />
    </a>
  );
}

function GhostButton({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-white"
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </a>
  );
}

function useSections() {
  return useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "focus", label: "Focus" },
      { id: "experience", label: "Experience" },
      
      { id: "values", label: "Principles" },
      { id: "contact", label: "Contact" },
    ],
    []
  );
}

export default function PortfolioSite() {
  const sections = useSections();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-neutral-900 text-white shadow-sm">
              <span className="text-sm font-bold">{PROFILE.name?.[0] || "Y"}</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{PROFILE.name}</div>
              <div className="text-xs text-neutral-500">{PROFILE.title}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 sm:flex">
            {sections.map((s) => (
              <NavLink key={s.id} href={`#${s.id}`}>
                {s.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="hidden rounded-full px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100 sm:inline"
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <button
              className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-white sm:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-neutral-200 bg-white/90 sm:hidden">
            <div className="mx-auto max-w-5xl px-4 py-3">
              <div className="flex flex-wrap gap-2">
                {sections.map((s) => (
                  <NavLink key={s.id} href={`#${s.id}`} onClick={closeMenu}>
                    {s.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <main>
        <section className="py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-wrap gap-2">
                  <Badge>{PROFILE.title}</Badge>
                  <Badge>{PROFILE.location}</Badge>
                </div>

                <h1 className="mt-5 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                  Building teams and systems that scale.
                </h1>

                <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-neutral-700">
                  {PROFILE.summary}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <PrimaryButton href="#contact" icon={Mail}>
                    Contact
                  </PrimaryButton>
                  <GhostButton href={PROFILE.links.linkedin} icon={Linkedin}>
                    LinkedIn
                  </GhostButton>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge>Org design</Badge>
                  <Badge>Technical direction</Badge>
                  <Badge>Execution clarity</Badge>
                  <Badge>AI leverage</Badge>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
              >
                <Card className="p-6">
                  <div className="text-sm font-semibold text-neutral-900">Current focus</div>
                  <div className="mt-3 grid gap-3">
                    {PROFILE.highlights.map((h, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-neutral-900 text-white">
                          <h.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{h.title}</div>
                          <div className="text-sm text-neutral-600">{h.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Card>
                    <div className="text-xs font-semibold tracking-widest text-neutral-500">
                      WORKING STYLE
                    </div>
                    <div className="mt-2 text-sm text-neutral-700">
                      Calm, structured, and outcome-driven. I optimize for leverage and clarity.
                    </div>
                  </Card>
                  <Card>
                    <div className="text-xs font-semibold tracking-widest text-neutral-500">
                      PARTNERSHIP
                    </div>
                    <div className="mt-2 text-sm text-neutral-700">
                      Close collaboration with Product, design, and stakeholders to align strategy and execution.
                    </div>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="ABOUT" title="What I optimize for">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <div className="text-sm font-semibold">Clarity in complex environments</div>
              <p className="mt-2 text-sm text-neutral-700">
                I bring structure to ambiguous problems: crisp goals, explicit trade-offs, and decision-making that scales.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold">Leverage</div>
              <p className="mt-2 text-sm text-neutral-700">
                Systems, leaders, and AI workflows that reduce noise and increase the organization’s capacity.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold">Sustainable delivery</div>
              <p className="mt-2 text-sm text-neutral-700">
                Predictable execution while protecting platform health—quality, reliability, and technical strategy.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold">Leaders building leaders</div>
              <p className="mt-2 text-sm text-neutral-700">
                Coaching managers and creating environments where strong teams can thrive and grow.
              </p>
            </Card>
          </div>
        </Section>

        {/* Focus */}
        <Section id="focus" eyebrow="FOCUS" title="How I work">
          <div className="grid gap-4 lg:grid-cols-3">
            <Card>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Target className="h-4 w-4" /> Strategy to execution
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Align outcomes, define constraints, and create a path that teams can execute with confidence.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Users className="h-4 w-4" /> Org & leadership design
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Team structure, roles, and manager development to scale delivery and maintain healthy culture.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="h-4 w-4" /> AI for leverage
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Practical AI workflows: synthesizing context, decision briefs, stakeholder updates, and risk sensing.
              </p>
            </Card>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="EXPERIENCE" title="Roles">
          <div className="grid gap-4">
            {PROFILE.experience.map((e, idx) => (
              <Card key={idx}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold">{e.role}</div>
                    <div className="text-sm text-neutral-600">{e.company}</div>
                  </div>
                  <div className="text-sm text-neutral-500">{e.period}</div>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        

        {/* Values */}
        <Section id="values" eyebrow="PRINCIPLES" title="What I believe in">
          <div className="grid gap-4 md:grid-cols-3">
            {PROFILE.values.map((v, idx) => (
              <Card key={idx}>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <v.icon className="h-4 w-4" /> {v.title}
                </div>
                <p className="mt-2 text-sm text-neutral-700">{v.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="CONTACT" title="Let’s connect">
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <div className="text-sm font-semibold">Message</div>
              <p className="mt-2 text-sm text-neutral-700">
                The quickest way to reach me is email. If you include context + what you’re optimizing for, I’ll respond faster.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <PrimaryButton href={`mailto:${PROFILE.links.email}`} icon={Mail}>
                  Email me
                </PrimaryButton>
                <GhostButton href={PROFILE.links.linkedin} icon={Linkedin}>
                  Connect on LinkedIn
                </GhostButton>
              </div>
            </Card>
            <Card>
              <div className="text-xs font-semibold tracking-widest text-neutral-500">DETAILS</div>
              <div className="mt-2 text-sm">
                <div className="text-neutral-900 font-semibold">{PROFILE.name}</div>
                <div className="text-neutral-600">{PROFILE.title}</div>
                <div className="mt-2 text-neutral-700">{PROFILE.location}</div>
                <div className="mt-4 text-sm text-neutral-700">
                  <div className="font-semibold">Email</div>
                  <a className="text-neutral-900 underline" href={`mailto:${PROFILE.links.email}`}>
                    {PROFILE.links.email}
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        <footer className="border-t border-neutral-200 py-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-neutral-600">
                © {new Date().getFullYear()} {PROFILE.name}
              </div>
              <div className="flex flex-wrap gap-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
