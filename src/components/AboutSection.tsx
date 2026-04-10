import { asSeenIn } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <SectionHeading
            label="ABOUT"
            title="Trusted by leaders when it matters most."
          />

          <div className="mt-8 space-y-6 font-body text-lg leading-8 text-charcoal">
            <p>
              Lyall Mercer is one of Australia&apos;s most respected corporate
              communications and crisis strategists. After starting his media
              career as a journalist writing for some of Australia&apos;s leading
              newspapers, he transitioned into public relations and has spent 25
              years guiding organisations through the complex world of stakeholder
              communications, media relations, and reputation management.
            </p>
            <p>
              His clients include national and international companies,
              governments, senior executives, politicians, and high-profile public
              figures. He has coordinated international media conferences and
              walked clients through issues that have generated intense national
              and global media exposure, from serious allegations and political
              controversies to industrial relations disputes and high-profile legal
              cases.
            </p>
            <p>
              Lyall has trained corporate and non-profit leaders across Australia,
              the USA, and Canada, and as an expert commentator in crisis
              communications, has been quoted or interviewed by news organisations
              around the world.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-b border-line py-5">
            {asSeenIn.map((item, index) => (
              <div key={item} className="flex items-center gap-5">
                <span className="font-body text-sm font-medium uppercase tracking-[0.1em] text-[#999999]">
                  {item}
                </span>
                {index < asSeenIn.length - 1 ? (
                  <span className="h-4 w-px bg-line" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="order-first lg:order-none">
          <div className="relative ml-4 border-l-4 border-teal pl-6">
            <div className="flex aspect-[4/5] items-center justify-center border border-line bg-cream px-8 text-center shadow-editorial">
              <div>
                <p className="font-display text-4xl font-bold text-navy">LM</p>
                <p className="mt-4 font-body text-sm uppercase tracking-[0.12em] text-charcoal/60">
                  Portrait placeholder
                </p>
                <p className="mt-3 font-body text-sm leading-6 text-charcoal/70">
                  Replace with `/public/images/lyall-portrait.jpg` when the final
                  portrait is supplied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
