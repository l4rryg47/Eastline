import Image from 'next/image';
import { BuildingOfficeIcon, UserGroupIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: 'Years of Experience', value: '25+', icon: BuildingOfficeIcon },
  { id: 2, name: 'Global Clients', value: '500+', icon: UserGroupIcon },
  { id: 3, name: 'Countries Served', value: '60+', icon: GlobeAltIcon },
  { id: 4, name: 'Awards Won', value: '12', icon: TrophyIcon },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="h-80 w-full bg-gray-900 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2">
          <Image
            className="h-full w-full object-cover opacity-75"
            src="/images/about-hero.jpg"
            alt="Shipping containers at port"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
        </div>
        <div className="relative pt-12 pb-24 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="text-base font-semibold uppercase tracking-wide text-primary-400">About Us</h2>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Leading the Way in Energy Logistics
              </h1>
              <p className="mt-3 text-lg text-gray-300">
                For over two decades, Eastline Shippers has been at the forefront of the energy logistics industry, 
                delivering innovative and reliable shipping solutions to clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <div className="order-first text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <div className="flex justify-center">
                    <stat.icon className="h-10 w-10 text-primary-600" aria-hidden="true" />
                  </div>
                  {stat.value}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Founded in 1998, Eastline Shippers began as a small regional operator with just three vessels. 
                Today, we're a global leader in energy logistics, with a fleet of over 100 vessels and operations 
                spanning six continents.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white hover:bg-primary-700"
                  >
                    Download Company Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:p-0">
                <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <Image
                    className="w-full"
                    src="/images/company-history.jpg"
                    alt="Company history timeline"
                    width={672}
                    height={448}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-gray-500">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {[
                {
                  name: 'Safety First',
                  description: 'We prioritize the safety of our people, our clients, and the environment above all else.',
                },
                {
                  name: 'Integrity',
                  description: 'We conduct our business with the highest ethical standards and transparency.',
                },
                {
                  name: 'Innovation',
                  description: 'We embrace new technologies and processes to improve efficiency and sustainability.',
                },
                {
                  name: 'Customer Focus',
                  description: 'We build lasting relationships by understanding and exceeding our customers\' needs.',
                },
              ].map((value) => (
                <div key={value.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
