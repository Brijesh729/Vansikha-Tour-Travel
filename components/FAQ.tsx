"use client";

import { useState } from "react";
import { buildFaqSchema } from "@/lib/metadata";

interface Faq {
  question: string;
  answer: string;
}

const FAQ = ({ faqs, title = "Frequently Asked Questions" }: { faqs: Faq[]; title?: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const schema = buildFaqSchema(faqs);

  return (
    <section>
      {/* FAQPage schema only added because the FAQs are visibly rendered below,
          per Google's guidance on FAQ rich results. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <h2 className="text-3xl font-serif text-white font-medium mb-8 border-b border-zinc-700 pb-4">{title}</h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="border border-zinc-700 rounded-xl overflow-hidden bg-zinc-800/30">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between text-left px-6 py-4 text-white font-medium"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className={`text-amber-500 transition-transform shrink-0 ml-4 ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
