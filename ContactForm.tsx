import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Send, Github, Linkedin } from "lucide-react";

export default function ContactSection(): JSX.Element {
  const [state, handleSubmit] = useForm("mnngznjk");

  return (
    <section id="contact" className="py-16 lg:py-32 scroll-mt-header">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto bg-white dark:bg-surface border border-black/10 dark:border-white/10 rounded-[32px] lg:rounded-[48px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">

          {/* LEFT PANEL */}
          <div className="flex-1 p-6 md:p-10 lg:p-16 bg-accent text-black space-y-8 lg:space-y-12 shadow-inner">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-outfit font-black leading-[0.85] tracking-tighter text-center lg:text-left">
              Let's build <br className="hidden lg:block" /> something <br className="hidden lg:block" /> great.
            </h2>

            <p className="text-black/70 text-sm lg:text-base font-medium leading-relaxed text-center lg:text-left">
              I'm currently available for freelance projects or full-time roles. If you have a project that needs a technical touch, let's talk.
            </p>

            <div className="space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-4 lg:gap-5 group cursor-pointer w-fit">
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-black rounded-[18px] lg:rounded-[24px] flex items-center justify-center group-hover:rotate-12 transition-transform shadow-xl">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-black/50">Email Me</div>
                  <div className="text-base lg:text-xl font-bold font-outfit text-black">praveenannadurai201@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL (FORM) */}
          <div className="flex-[1.4] p-6 md:p-10 lg:p-16 bg-white dark:bg-surface relative">
            {/* Success state */}
            {state.succeeded ? (
              <div className="space-y-6 lg:space-y-8 text-center">
                <div className="inline-block rounded-2xl bg-emerald-50/60 p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-emerald-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
                  </svg>
                </div>

                <h3 className="text-2xl font-black">Thanks — message sent!</h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  I received your message and will get back to you shortly. If you need an immediate response, email me directly at{" "}
                  <a href="mailto:praveenannadurai201@gmail.com" className="font-semibold text-accent">
                    praveenannadurai201@gmail.com
                  </a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 items-start">

                  {/* Name */}
                  <div className="flex flex-col gap-2.5">
                    <label className="ml-2 text-[10px] font-black uppercase tracking-[0.25em] text-dark/40 dark:text-text-muted/60">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-2xl px-5 py-4 bg-white dark:bg-black/20 text-sm font-medium text-dark dark:text-white placeholder:text-dark/40 dark:placeholder:text-text-muted/40 border border-black/10 dark:border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                      aria-label="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="email" className="ml-2 text-[10px] font-black uppercase tracking-[0.25em] text-dark/40 dark:text-text-muted/60">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full rounded-2xl px-5 py-4 bg-white dark:bg-black/20 text-sm font-medium text-dark dark:text-white placeholder:text-dark/40 dark:placeholder:text-text-muted/40 border border-black/10 dark:border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                      aria-label="Email address"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
                  </div>

                </div>

                {/* Summary */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="message" className="ml-2 text-[10px] font-black uppercase tracking-[0.25em] text-dark/40 dark:text-text-muted/60">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your vision..."
                    className="w-full rounded-2xl px-5 py-4 bg-white dark:bg-black/20 text-sm font-medium text-dark dark:text-white placeholder:text-dark/40 dark:placeholder:text-text-muted/40 border border-black/10 dark:border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
                    aria-label="Project details"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 lg:py-6 bg-dark dark:bg-accent text-white dark:text-black font-black uppercase tracking-[0.2em] text-[10px] lg:text-xs rounded-2xl flex items-center justify-center gap-3 hover:bg-accent-hover hover:shadow-xl transition-all duration-500 shadow-md group"
                  aria-disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Inquiry"}
                  <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="mt-10 flex justify-center lg:justify-start gap-5">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    i === 0
                      ? "https://github.com/dev-praveen007"
                      : i === 1
                        ? "https://www.linkedin.com/in/praveen-annadurai"
                        : "mailto:praveenannadurai201@gmail.com"
                  }
                  className="w-12 h-12 border border-black/10 dark:border-accent/20 rounded-2xl flex items-center justify-center bg-white dark:bg-black/20 hover:bg-black hover:text-accent text-dark/60 dark:text-text-muted transition-all duration-300 shadow-sm hover:scale-110 active:scale-95 group"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
