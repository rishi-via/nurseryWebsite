import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  CloudSun,
  Flower2,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Sprout,
  Trees,
  Wrench,
} from 'lucide-react';

const galleryPlants = [
  {
    name: 'Areca Palm',
    zone: 'Reception + Open Floors',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Snake Plant',
    zone: 'Meeting Rooms',
    image:
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'ZZ Plant',
    zone: 'Low-Light Workstations',
    image:
      'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Rubber Plant',
    zone: 'Director Cabins',
    image:
      'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Peace Lily',
    zone: 'Lobby Corners',
    image:
      'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Ficus Lyrata',
    zone: 'Executive Lounge',
    image:
      'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1200&q=80',
  },
];

const rentalPlans = [
  {
    title: 'Floor Starter',
    plants: '25-40 plants',
    support: 'Bi-weekly maintenance',
    bestFor: 'Single office floor',
  },
  {
    title: 'Corporate Plus',
    plants: '60-100 plants',
    support: 'Weekly maintenance + replacement',
    bestFor: 'HQ offices and multi-team spaces',
  },
  {
    title: 'Campus Signature',
    plants: '150+ plants',
    support: 'Dedicated plant care team',
    bestFor: 'Large corporate campuses',
  },
];

const services = [
  {
    title: 'Rent-A-Plant Program',
    description: 'End-to-end indoor plant rental with selection, setup, upkeep, and replacement.',
    Icon: CalendarClock,
  },
  {
    title: 'Workspace Plant Styling',
    description: 'Design plans for reception, collaboration zones, cabins, and cafeteria areas.',
    Icon: Building2,
  },
  {
    title: 'Maintenance Contracts',
    description: 'Watering, pruning, nutrition, cleaning, and health checks by trained staff.',
    Icon: Wrench,
  },
  {
    title: 'Seasonal Refresh',
    description: 'Quarterly plant rotation to keep your office aesthetics fresh and vibrant.',
    Icon: Flower2,
  },
  {
    title: 'Vertical Gardens',
    description: 'Design and installation of lush vertical green walls for lobbies and office zones.',
    Icon: Trees,
  },
  {
    title: 'Garden Execution and Maintenance',
    description: 'Complete on-site garden setup plus scheduled upkeep for long-term plant health.',
    Icon: Wrench,
  },
  {
    title: 'Artificial Lawns',
    description: 'Premium artificial grass solutions for terraces, breakout zones, and activity areas.',
    Icon: Sprout,
  },
  {
    title: 'Artificial Vertical Garden',
    description: 'Low-maintenance decorative vertical greens for statement walls and feature spaces.',
    Icon: Leaf,
  },
  {
    title: 'Garden Center',
    description: 'Reliable supply of indoor and outdoor plants, planters, media, and garden essentials.',
    Icon: Flower2,
  },
  {
    title: 'Irrigation',
    description: 'Efficient drip and automated watering systems tailored to your landscape layout.',
    Icon: ShieldCheck,
  },
  {
    title: 'Landscape Design Consultancy',
    description: 'Professional consultation for concept planning, plant palettes, and site optimization.',
    Icon: Building2,
  },
];

const heroPlants = [
  'https://images.unsplash.com/photo-1463154545680-d59320fd685d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=80',
];
const heroBackground =
  'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1800&q=80';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45 },
};

function App() {
  return (
    <main className="min-h-screen">
      <section className="px-4 pt-5 pb-10 md:pt-8 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundImage: `url(${heroBackground})` }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-cover bg-center text-white shadow-xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-700/85 via-brand-700/65 to-lagoon-700/75" />
          <div className="pointer-events-none absolute -left-16 top-20 h-44 w-44 rounded-full bg-sun-300/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-14 bottom-12 h-52 w-52 rounded-full bg-lagoon-300/35 blur-3xl" />
          <div className="pointer-events-none absolute left-1/3 top-0 h-24 w-24 rounded-full bg-white/20 blur-2xl" />

          <div className="relative grid gap-7 px-5 py-8 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-8 md:px-10 md:py-10">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur">
                <Leaf className="h-4 w-4" />
                Ankur Nursery
              </p>
              <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                Tropical Office Landscapes That Don&apos;t Feel Corporate
              </h1>
              <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                We design, install, and maintain vibrant plant ecosystems for large offices so your workspace feels
                alive, premium, and unforgettable.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-700 transition hover:brightness-95"
                >
                  Book Site Visit
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#gallery"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/50 bg-black/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Plant Gallery
                </a>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  { label: '5000+', note: 'Plants in active office care' },
                  { label: '48 Hrs', note: 'Replacement turnaround SLA' },
                  { label: '100+', note: 'Large office clients supported' },
                ].map((point) => (
                  <div key={point.label} className="rounded-2xl bg-white/15 p-4 shadow-md backdrop-blur-sm">
                    <p className="text-2xl font-bold tracking-tight">{point.label}</p>
                    <p className="mt-1 text-sm text-white/85">{point.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[360px] md:min-h-[440px]">
              <motion.img
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                src={heroPlants[0]}
                alt="Tropical office plant arrangement"
                className="absolute right-0 top-0 h-[62%] w-[78%] rounded-[1.7rem] border-2 border-white/30 object-cover shadow-2xl"
              />
              <motion.img
                initial={{ opacity: 0, x: -12, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                src={heroPlants[1]}
                alt="Lush indoor tropical greens"
                className="absolute bottom-0 left-0 h-[58%] w-[63%] rounded-[1.5rem] border-2 border-white/25 object-cover shadow-2xl"
              />
              <motion.img
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.35 }}
                src={heroPlants[2]}
                alt="Large statement foliage for office entrance"
                className="absolute bottom-6 right-5 h-[32%] w-[45%] rounded-2xl border-2 border-white/25 object-cover shadow-xl"
              />
              <div className="absolute left-2 top-6 inline-flex items-center gap-2 rounded-full bg-black/25 px-3 py-1.5 text-sm font-medium backdrop-blur">
                <CloudSun className="h-4 w-4 text-sun-300" />
                Tropical Mood Styling
              </div>
              <div className="absolute -bottom-2 right-2 inline-flex items-center gap-2 rounded-full bg-sun-300/95 px-3 py-1.5 text-sm font-semibold text-soil-700 shadow-lg">
                <Sparkles className="h-4 w-4" />
                Designed for Wow Moments
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="gallery" className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700">Plant Gallery</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Plants Curated for Corporate Interiors
            </h2>
          </motion.div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryPlants.map((plant, index) => (
              <motion.article
                key={plant.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img src={plant.image} alt={plant.name} className="h-52 w-full object-cover" />
                <div className="space-y-2 p-5">
                  <h3 className="text-xl font-semibold text-slate-900">{plant.name}</h3>
                  <p className="inline-flex items-center gap-2 text-base text-slate-600">
                    <MapPin className="h-5 w-5 text-brand-600" />
                    {plant.zone}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-6xl rounded-3xl bg-soil-100 p-5 md:p-8">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-soil-700">Rent-A-Plant Plans</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Flexible Monthly Programs for Every Office Size
            </h2>
          </motion.div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {rentalPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">{plan.title}</h3>
                <ul className="mt-3 space-y-2 text-base text-slate-700">
                  <li className="inline-flex items-start gap-2">
                    <Trees className="mt-0.5 h-5 w-5 text-brand-600" />
                    {plan.plants}
                  </li>
                  <li className="inline-flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-600" />
                    {plan.support}
                  </li>
                  <li className="inline-flex items-start gap-2">
                    <Building2 className="mt-0.5 h-5 w-5 text-brand-600" />
                    {plan.bestFor}
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700">Services</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">
              End-to-End Office Plant Management
            </h2>
          </motion.div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <service.Icon className="h-8 w-8 text-brand-600" />
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-12">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl rounded-3xl bg-white p-5 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700">How We Work</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              'Site audit of lighting, layout, and footfall',
              'Custom plant plan with quantity and placement',
              'Installation, care schedule, and ongoing support',
            ].map((step, index) => (
              <div key={step} className="rounded-2xl bg-leaf-100 p-4">
                <p className="inline-flex items-start gap-2 text-base text-slate-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-leaf-700" />
                  <span>
                    <span className="font-semibold">Step {index + 1}: </span>
                    {step}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="px-4 pt-8 pb-12 md:pt-12 md:pb-16">
        <motion.div
          {...fadeUp}
          className="mx-auto flex max-w-6xl flex-col gap-5 rounded-3xl bg-gradient-to-r from-soil-700 to-brand-700 p-6 text-white md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-white/85">
              <Sprout className="h-4 w-4" />
              Ready to green your office?
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Get a Corporate Proposal from Ankur Nursery
            </h2>
            <p className="mt-2 max-w-2xl text-base text-white/85">
              Share your office size and locations. We will send a tailored plant rental and maintenance plan.
            </p>
          </div>
          <a
            href="mailto:hello@ankurnursery.com"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-700 transition hover:brightness-95"
          >
            Contact Sales Team
          </a>
        </motion.div>
      </section>
    </main>
  );
}

export default App;
