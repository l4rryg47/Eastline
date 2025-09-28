import { TruckIcon, WrenchScrewdriverIcon, GlobeAltIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const services = [
  {
    name: 'Oil & Gas Transportation',
    description: 'Safe and efficient transportation of crude oil, refined products, and natural gas across global routes.',
    icon: TruckIcon,
    features: [
      'Crude oil shipping',
      'Refined products transport',
      'LNG and LPG transportation',
      'Specialized tanker services'
    ]
  },
  {
    name: 'Port Operations',
    description: 'Comprehensive port management services including loading, unloading, and storage solutions.',
    icon: TruckIcon,
    features: [
      'Bunkering services',
      'Cargo handling',
      'Port agency services',
      'Customs clearance'
    ]
  },
  {
    name: 'Technical Management',
    description: 'Full technical support and vessel management to ensure operational excellence.',
    icon: WrenchScrewdriverIcon,
    features: [
      'Vessel maintenance',
      'Crew management',
      'Technical supervision',
      'Dry-docking'
    ]
  },
  {
    name: 'Global Logistics',
    description: 'End-to-end logistics solutions for complex supply chain requirements.',
    icon: GlobeAltIcon,
    features: [
      'Supply chain optimization',
      'Freight forwarding',
      'Intermodal transport',
      'Inventory management'
    ]
  },
  {
    name: 'Energy Solutions',
    description: 'Innovative solutions for renewable energy transport and storage.',
    icon: BoltIcon,
    features: [
      'Renewable energy transport',
      'Battery storage solutions',
      'Alternative fuels',
      'Carbon footprint reduction'
    ]
  },
  {
    name: 'Safety & Compliance',
    description: 'Comprehensive safety management and regulatory compliance services.',
    icon: ShieldCheckIcon,
    features: [
      'Risk assessment',
      'Safety training',
      'Regulatory compliance',
      'Environmental protection'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gray-900
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary-900/60 before:to-gray-900/90 before:z-10">
        <div className="relative h-96">
          <Image
            src="/images/services-hero.jpg"
            alt="Container ship at sea"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 -mt-32 pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Services
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
                Comprehensive logistics solutions tailored to the unique needs of the energy sector.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Capabilities</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Energy Logistics Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We deliver end-to-end logistics services designed to meet the complex demands of the global energy industry.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold leading-7 text-gray-900">{service.name}</h3>
                </div>
                <p className="mt-4 flex-auto text-base leading-7 text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex">
                      <svg className="h-6 w-5 flex-none text-primary-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-500"
                >
                  Learn more
                  <svg className="ml-2 h-5 w-5 flex-none text-primary-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to streamline your logistics?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Our team of experts is ready to design a customized logistics solution for your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Excellence in Energy Logistics
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With decades of experience and a commitment to innovation, we deliver reliable and efficient logistics solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {[
                {
                  name: 'Global Network',
                  description: 'Extensive network of partners and agents worldwide ensuring seamless operations across borders.',
                },
                {
                  name: 'Advanced Technology',
                  description: 'State-of-the-art tracking and monitoring systems for complete cargo visibility.',
                },
                {
                  name: 'Safety First',
                  description: 'Stringent safety protocols and compliance with international regulations.',
                },
                {
                  name: 'Sustainability',
                  description: 'Commitment to reducing environmental impact through innovative solutions.',
                },
              ].map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
