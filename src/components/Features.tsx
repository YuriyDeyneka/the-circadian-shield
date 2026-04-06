import { motion } from 'motion/react';
import { VolumeX, Flame, Music, Brain, Baby, Laptop } from 'lucide-react';

const features = [
  {
    icon: VolumeX,
    title: 'Invisible Sound Wall',
    subtitle: 'Dual-Sync White Noise Tech',
    description: 'Drowns out sirens, barking dogs, thin walls, and office chatter — the external interference that fragments both your sleep and your focus.'
  },
  {
    icon: Laptop,
    title: 'Deep Work Mode',
    subtitle: 'Focus as Hard as You Sleep',
    description: 'White noise doesn\'t just promote sleep — it masks distracting interruptions so you enter flow state faster and stay there longer while studying or working.'
  },
  {
    icon: Flame,
    title: 'Anti-Blue Light Shield',
    subtitle: 'Biological Red-Spectrum Glow',
    description: 'Signals your primitive brain to start melatonin production immediately, bypassing the "Circadian Corruption" caused by phone screens.'
  },
  {
    icon: Music,
    title: '12 Clinically-Mapped Soundscapes',
    subtitle: 'Not Cheap Radio Loops',
    description: 'Engineered specifically to bypass the "High Alert" state of a stressed nervous system and trigger deep Delta-wave sleep — or peak cognitive flow.'
  },
  {
    icon: Brain,
    title: 'Nervous System Reset',
    subtitle: 'From Alert to Calm in Minutes',
    description: 'The same low-frequency hum that quiets your mind at night also lowers cortisol during high-pressure work sessions, protecting your focus and your health.'
  },
  {
    icon: Baby,
    title: 'The "Parental Peace" Mode',
    subtitle: 'Portable & Breathing Guided',
    description: 'Designed specifically for "shushing fatigue" and keeping the baby asleep during those critical, short sleep windows.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-3">The Biological Override</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Engineered to silence your environment.
          </h3>
          <p className="text-lg text-slate-600">
            White noise not only promotes deep sleep — it covers the interference of external noise to help you focus on studying and working. One device. Two superpowers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">{feature.subtitle}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
