import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Austin, TX',
    rating: 5,
    title: 'Finally sleeping through the night',
    body: 'I live next to a busy street and have tried everything — melatonin, blackout curtains, you name it. The Circadian Shield was the first thing that actually worked. I fall asleep in under 10 minutes now. Total game changer.',
    verified: true,
    daysAgo: 2,
  },
  {
    name: 'James T.',
    location: 'Brooklyn, NY',
    rating: 5,
    title: 'Works for sleep AND deep work sessions',
    body: 'I bought it for sleep but I honestly use it more at my desk. I work from home and my neighbors are loud. Put this on while coding and I enter a focus state I haven\'t felt since college. Worth every penny.',
    verified: true,
    daysAgo: 5,
  },
  {
    name: 'Priya K.',
    location: 'San Jose, CA',
    rating: 5,
    title: 'My baby sleeps 7 hours straight now',
    body: 'We were waking up 3-4 times a night with our 6-month-old. A friend recommended this and I was skeptical. After 3 nights, she started sleeping 6-7 hour stretches. I cried actual tears of relief. Buy this immediately.',
    verified: true,
    daysAgo: 7,
  },
  {
    name: 'Marcus R.',
    location: 'Chicago, IL',
    rating: 5,
    title: 'Replaced my white noise app instantly',
    body: 'The difference between this and a phone speaker is night and day — literally. The sound is fuller, deeper, and it doesn\'t feel harsh. My phone was keeping me alert even with the screen off. This just melts the room.',
    verified: true,
    daysAgo: 11,
  },
  {
    name: 'Lauren H.',
    location: 'Denver, CO',
    rating: 5,
    title: 'I study for 4+ hours without losing focus',
    body: 'As a grad student I need to be able to block everything out. Cafes, libraries, dorm rooms — I bring this everywhere. The white noise wall it creates is unreal. My study sessions have doubled in length and quality.',
    verified: true,
    daysAgo: 14,
  },
  {
    name: 'David C.',
    location: 'Seattle, WA',
    rating: 4,
    title: 'Solid product, took a few nights to dial in',
    body: 'First night I wasn\'t sure — kept waking up. By night three I\'d found the right volume and soundscape (I use the rain setting) and now I sleep straight through. Wish it had a carry pouch but the device itself is excellent.',
    verified: true,
    daysAgo: 18,
  },
  {
    name: 'Amanda F.',
    location: 'Miami, FL',
    rating: 5,
    title: 'The red light alone is worth it',
    body: 'I didn\'t realize how much damage I was doing scrolling my phone in bed. Switched to the red glow mode at 9pm and within a week my entire sleep schedule shifted. I\'m naturally tired by 10:30. It\'s wild how fast it works.',
    verified: true,
    daysAgo: 21,
  },
  {
    name: 'Tom W.',
    location: 'Nashville, TN',
    rating: 5,
    title: 'Bought the 3-pack for the whole house',
    body: 'Got one for our bedroom, one for the nursery, and one for my home office. Each room has its own thing going on. Best $64 I\'ve ever spent. My wife says it\'s the best purchase of the year and she\'s not wrong.',
    verified: true,
    daysAgo: 24,
  },
  {
    name: 'Nina S.',
    location: 'Portland, OR',
    rating: 5,
    title: 'Anxiety gone at bedtime',
    body: 'I have pretty bad nighttime anxiety and my brain would just race the second my head hit the pillow. The combination of the low red light and the sound frequencies genuinely shuts that loop off. I don\'t know how it works but I don\'t care.',
    verified: true,
    daysAgo: 29,
  },
  {
    name: 'Chris B.',
    location: 'Boston, MA',
    rating: 5,
    title: 'Skeptic turned believer',
    body: 'I thought this was going to be gimmicky. I\'m an engineer, I like evidence. What I can tell you is my sleep tracker went from averaging 5h 40min to 6h 55min of actual sleep in two weeks. The data doesn\'t lie.',
    verified: true,
    daysAgo: 33,
  },
  {
    name: 'Rachel G.',
    location: 'Atlanta, GA',
    rating: 5,
    title: 'My shift-worker husband finally sleeps during the day',
    body: 'He works nights and sleeping during daylight with neighborhood noise was destroying him. This has been a genuine quality-of-life upgrade for our whole family. He\'s less irritable, more present, and actually healthy again.',
    verified: true,
    daysAgo: 38,
  },
  {
    name: 'Kevin L.',
    location: 'Los Angeles, CA',
    rating: 4,
    title: 'Great for the office, excellent for sleep',
    body: 'Open plan office is brutal for concentration. I keep this on my desk and it\'s become a running joke that people know when I\'m in "the zone" because the little white device is on. 90% fewer interruptions subjectively.',
    verified: true,
    daysAgo: 45,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-3">Customer Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real results from real sleepers.</h3>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-2xl font-bold text-slate-900">{avgRating}</span>
            <span className="text-slate-500 text-sm">({reviews.length} verified reviews)</span>
          </div>
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.07 }}
              className="break-inside-avoid bg-slate-50 border border-slate-200 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <StarRating rating={review.rating} />
                {review.verified && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                )}
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{review.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{review.body}</p>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-700">{review.name} · {review.location}</span>
                <span>{review.daysAgo}d ago</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
