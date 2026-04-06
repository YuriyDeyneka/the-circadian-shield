import { Moon, Laptop, Baby, BrainCircuit } from 'lucide-react';

const useCases = [
  {
    icon: Moon,
    label: 'Deep Sleep',
    description: 'Fall asleep faster. Stay asleep longer.',
  },
  {
    icon: Laptop,
    label: 'Study & Work',
    description: 'Block distractions. Enter flow state.',
  },
  {
    icon: BrainCircuit,
    label: 'Stress Recovery',
    description: 'Lower cortisol. Reset your nervous system.',
  },
  {
    icon: Baby,
    label: 'Baby & Nursery',
    description: 'Safe frequencies. Parental peace restored.',
  },
];

export default function UseCaseBanner() {
  return (
    <section className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">
          White noise not only promotes sleep — it covers external interference so you can focus
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {useCases.map((uc, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <uc.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold text-sm">{uc.label}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
