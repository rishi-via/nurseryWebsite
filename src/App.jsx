import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  Flower2,
  Leaf,
  MapPin,
  ShieldCheck,
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
      'https://images.unsplash.com/photo-1614594975304-8f7e8f46b8e5?auto=format&fit=crop&w=1200&q=80',
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
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45 },
};

function App() {
  return (
    <main className="min-h-screen">
      <section className="px-4 pt-6 pb-10 md:pt-10 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-leaf-700 text-white shadow-xl"
        >
          <div className="px-5 py-10 md:px-10 md:py-14">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
              <Leaf className="h-4 w-4" />
              Ankur Nursery
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
              Corporate Greenery Solutions for Modern Offices
            </h1>
            <p className="mt-4 max-w-2xl text-base text-brand-50 md:text-lg">
              We help large companies transform entire office environments with premium indoor plants, rent-a-plant
              programs, and full-service maintenance.
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
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/45 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Explore Plant Gallery
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                '5000+ office plants maintained monthly',
                'Pan-city delivery and service teams',
                'Fast plant replacement SLA',
              ].map((point) => (
                <div key={point} className="rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                  <p className="text-sm font-medium">{point}</p>
                </div>
              ))}
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
