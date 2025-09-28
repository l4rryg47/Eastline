import { BuildingOfficeIcon, MapPinIcon, CurrencyDollarIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function CareersPage() {
  const benefits = [
    'Competitive salaries and performance bonuses',
    'Comprehensive health, dental, and vision insurance',
    'Retirement savings plan with company match',
    'Paid time off and holidays',
    'Professional development and training programs',
    'Flexible work arrangements',
    'Employee assistance programs',
    'Wellness programs and gym memberships',
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Marine Operations Manager',
      type: 'Full-time',
      location: 'Houston, TX',
      department: 'Operations',
      description: 'Lead and oversee all marine operations, ensuring safe and efficient vessel operations.',
    },
    {
      id: 2,
      title: 'Supply Chain Analyst',
      type: 'Full-time',
      location: 'Singapore',
      department: 'Logistics',
      description: 'Analyze supply chain data to optimize logistics and reduce operational costs.',
    },
    {
      id: 3,
      title: 'Environmental Compliance Specialist',
      type: 'Full-time',
      location: 'Rotterdam, Netherlands',
      department: 'Compliance',
      description: 'Ensure all operations comply with environmental regulations and sustainability goals.',
    },
    {
      id: 4,
      title: 'Vessel Chartering Manager',
      type: 'Full-time',
      location: 'Dubai, UAE',
      department: 'Commercial',
      description: 'Manage vessel chartering operations and client relationships in the Middle East region.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="h-80 w-full bg-gray-900 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2">
          <img
            className="h-full w-full object-cover opacity-75"
            src="/images/careers-hero.jpg"
            alt="Diverse team in a meeting"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
        </div>
        <div className="relative pt-12 pb-24 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="text-base font-semibold uppercase tracking-wide text-primary-400">Join Our Team</h2>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Build Your Career with Us
              </h1>
              <p className="mt-3 text-lg text-gray-300">
                Be part of a global leader in energy logistics, where your work makes a real difference in powering the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-primary-600">Careers</h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Eastline Shippers?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We're building a diverse and inclusive workplace where talented people can grow their careers while making a positive impact.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <BuildingOfficeIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Our Culture</h3>
                    <p className="mt-5 text-base text-gray-600">
                      We foster a collaborative environment that values innovation, integrity, and excellence. Our team is our greatest asset, and we're committed to creating a workplace where everyone can thrive.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Learning & Development</h3>
                    <p className="mt-5 text-base text-gray-600">
                      We invest in our employees' growth through training programs, mentorship opportunities, and support for continuing education. Your success is our success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Global Opportunities</h3>
                    <p className="mt-5 text-base text-gray-600">
                      With operations across six continents, we offer exciting opportunities to work in different countries and cultures, building a truly international career.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base font-semibold uppercase tracking-wide text-primary-600">Join Our Team</h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Current Openings
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore exciting career opportunities at Eastline Shippers
            </p>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
              {openPositions.map((position) => (
                <li key={position.id}>
                  <a href={`/careers/${position.id}`} className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-lg font-medium text-primary-600">{position.title}</p>
                        <div className="ml-2 flex flex-shrink-0">
                          <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {position.type}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <BuildingOfficeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            {position.department}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            {position.location}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                          <p>
                            Closing on <time dateTime="2023-01-07">January 7, 2023</time>
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">{position.description}</p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 px-4 py-4 text-center sm:px-6">
              <p className="text-sm text-gray-500">
                Don't see a role that matches your skills?{' '}
                <a href="/contact" className="font-medium text-primary-600 hover:text-primary-500">
                  Contact us
                </a>{' '}
                to discuss how you might be a good fit for our team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-primary-600">Benefits</h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Employee Benefits & Perks
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer comprehensive benefits to support the health, well-being, and financial security of our employees and their families.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to join our team?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-100">
            Start your journey with Eastline Shippers today and be part of shaping the future of energy logistics.
          </p>
          <a
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
