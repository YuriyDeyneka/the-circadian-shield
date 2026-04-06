import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Can I use this while working or studying — not just for sleep?",
    answer: "Absolutely — and this is one of the most underrated uses. White noise isn’t just for bedtime. It covers the interference of external noise (open offices, roommates, street sounds) and helps you enter a focused, distraction-free state. Students, remote workers, and high-performers keep it running on their desk all day."
  },
  {
    question: "I’ve tried white noise apps and they don’t work. How is this different?",
    answer: "Phone speakers are physically incapable of hitting the specific low-frequency Delta wave triggers required for a biological override. They sound ‘tinny’ and actually keep your brain in a state of high alert. The Circadian Shield uses a custom acoustic driver to create a true ‘Invisible Sound Wall’ that masks environmental assault."
  },
  {
    question: "Is the light going to be too bright and keep me awake?",
    answer: "No. The Circadian Shield features adjustable 1%–100% red-spectrum dimming designed specifically for pitch-black environments. Unlike blue light from screens, this specific red wavelength signals your brain to produce melatonin, actually helping you fall asleep faster."
  },
  {
    question: "Is it safe for my baby’s nursery?",
    answer: "Absolutely. It uses 100% non-toxic materials and features frequencies specifically mapped for infant sleep cycles. The 'Parental Peace' mode is designed exactly for this—providing a safe, soothing environment that helps babies connect their sleep cycles."
  },
  {
    question: "What if it doesn't work for me?",
    answer: "We offer a 90-Night Deep Sleep Guarantee. If you don't experience the best sleep of your life within 90 days, simply return it and we'll buy it back. No questions asked."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-0 border-t border-slate-200">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-slate-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none group"
              >
                <span className="font-bold text-slate-900 pr-4 group-hover:text-slate-600 transition-colors">{faq.question}</span>
                <span className="text-slate-400 flex-shrink-0">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-slate-600 leading-relaxed pr-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
