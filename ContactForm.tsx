import React from "react";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
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

          {/* RIGHT PANEL */}
          <div className="flex-[1.4] p-6 md:p-10 lg:p-16 bg-black relative">

            {state.succeeded ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-white">
                <h3 className="text-2xl font-black">Message Sent 🚀</h3>
                <p className="text-white/60">I'll get back to you very soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8 text-white">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">

                  <div className="flex flex-col">
                    <label className="mb-2 ml-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                      Your Name
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="h-12 lg:h-14 w-full rounded-2xl px-5 bg-black/40 text-sm font-medium text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-2 ml-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="h-12 lg:h-14 w-full rounded-2xl px-5 bg-black/40 text-sm font-medium text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1" />
                  </div>

                </div>

                <div className="flex flex-col">
                  <label className="mb-2 ml-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your vision..."
                    className="min-h-[120px] w-full rounded-2xl px-5 py-4 bg-black/40 text-sm font-medium text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 lg:py-6 bg-accent text-black font-black uppercase tracking-[0.2em] text-[10px] lg:text-xs rounded-2xl flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-500 disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send Inquiry"}
                  <Send size={14} />
                </button>

              </form>
            )}

            <div className="mt-10 flex justify-center lg:justify-start gap-5 text-white">
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
                  className="w-12 h-12 border border-white/10 rounded-2xl flex items-center justify-center bg-black/30 hover:bg-black hover:text-accent transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
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
