import { motion } from 'motion/react';
import { Brain, Flame, Laptop } from 'lucide-react';
import adImage from '../whitenoise-ad.jpg';

export default function Beliefs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-3">The Root Cause</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Why Your Brain Isn’t Broken <br/><span className="text-slate-500">(Your Environment Is).</span>
            </h3>

            <div className="space-y-10 mt-10">
              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                    <Brain className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">The "Band-Aid" Problem</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Sleeping pills and noise-cancelling headphones are just band-aids. They ignore the root cause: an environmental assault of blue light, sirens, and ambient interruptions that corrupt both your sleep and your focus. You can’t out-meditate a biologically hostile environment.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                    <Laptop className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">The Dual-State Solution</h4>
                  <p className="text-slate-600 leading-relaxed">
                    White noise isn’t just for sleep. The same acoustic masking that silences your bedroom also creates a distraction-free bubble at your desk — helping you study harder, work longer, and recover faster. One compact device. Total environmental control.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                    <Flame className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">The Evolutionary Signal</h4>
                  <p className="text-slate-600 leading-relaxed">
                    For 200,000 years, humans fell asleep to the red-spectrum glow of a fire and the low-frequency hum of nature. The Circadian Shield mimics this exact evolutionary signal, bypassing modern anxiety and triggering deep sleep — or a laser-focused work session.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden bg-slate-100 aspect-[4/5]">
              <img
                src={adImage}
                alt="Circadian Shield on desk — sleep and focus"
                className="w-full h-full object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold text-slate-900">Works Day &amp; Night</h4>
                </div>
                <p className="text-slate-600 text-sm">
                  Deeper sleep at night. Sharper focus during the day. One compact white noise device that does both.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
