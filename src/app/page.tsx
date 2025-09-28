import Link from 'next/link';
import { ArrowRightIcon, TruckIcon, GlobeAltIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      name: 'Global Network',
      description: 'Extensive network covering major ports and energy hubs worldwide.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Reliable Service',
      description: '99.8% on-time delivery rate with 24/7 tracking and monitoring.',
      icon: ClockIcon,
    },
    {
      name: 'Safety First',
      description: 'Industry-leading safety standards and environmental compliance.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Efficient Logistics',
      description: 'Optimized routes and supply chain solutions for cost efficiency.',
      icon: TruckIcon,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-oil-tanker.jpg"
            alt="Oil tanker at sea"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={85}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/90" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Global Energy</span>
              <span className="block text-primary-400 mt-2">Logistics Solutions</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200 sm:text-2xl">
              Delivering energy where it's needed most with reliability, efficiency, and environmental responsibility.
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center gap-4">
              <div className="rounded-md shadow-lg">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200 md:text-lg"
                >
                  Get a Free Quote
                  <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow-lg sm:mt-0">
                <Link
                  href="/services"
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200 md:text-lg"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Energy Logistics
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide end-to-end logistics solutions for the energy sector, ensuring safe and efficient transportation of your cargo.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
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
            <span className="block">Ready to ship with confidence?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-100">
            Contact our team today to discuss your logistics needs and get a customized shipping solution.
          </p>
          <Link
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
          >
            Contact Us
            <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5 text-primary-500" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
