'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

// Define form schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  company: z.string().optional(),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  service: z.string().optional(),
  agree: z.boolean().refine(val => val === true, {
    message: 'You must agree to the privacy policy',
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      service: '',
      agree: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send the form data to your API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      
      // if (!response.ok) throw new Error('Failed to submit form');
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Headquarters',
      description: '123 Energy Plaza, Suite 1000\nHouston, TX 77002',
    },
    {
      icon: PhoneIcon,
      title: 'Contact',
      description: '+1 (800) 555-0199\ninfo@eastlineshippers.com',
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      description: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday - Sunday: Closed',
    },
  ];

  const services = [
    'Oil & Gas Transportation',
    'Port Operations',
    'Technical Management',
    'Global Logistics',
    'Energy Solutions',
    'Safety & Compliance',
    'Other',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="h-80 w-full bg-gray-900 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2">
          <img
            className="h-full w-full object-cover opacity-75"
            src="/images/contact-hero.jpg"
            alt="Port operations"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
        </div>
        <div className="relative pt-12 pb-24 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="text-base font-semibold uppercase tracking-wide text-primary-400">Get in Touch</h2>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Contact Us
              </h1>
              <p className="mt-3 text-lg text-gray-300">
                Have questions about our services or want to discuss your logistics needs? Our team is here to help.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                <div className="px-4 py-8 sm:px-10">
                  {submitStatus ? (
                    <div className={`rounded-md p-4 ${submitStatus.success ? 'bg-green-50' : 'bg-red-50'}`}>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          {submitStatus.success ? (
                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                          ) : (
                            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                          )}
                        </div>
                        <div className="ml-3">
                          <p className={`text-sm font-medium ${submitStatus.success ? 'text-green-800' : 'text-red-800'}`}>
                            {submitStatus.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-6">
                    <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
                    <p className="mt-2 text-sm text-gray-600">
                      Fill out the form and our team will get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="mt-1">
                            <input
                              id="name"
                              type="text"
                              autoComplete="name"
                              className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
                                errors.name ? 'border-red-300' : ''
                              }`}
                              {...register('name')}
                            />
                            {errors.name && (
                              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              type="email"
                              autoComplete="email"
                              className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
                                errors.email ? 'border-red-300' : ''
                              }`}
                              {...register('email')}
                            />
                            {errors.email && (
                              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <div className="mt-1">
                            <input
                              id="phone"
                              type="tel"
                              autoComplete="tel"
                              className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
                                errors.phone ? 'border-red-300' : ''
                              }`}
                              {...register('phone')}
                            />
                            {errors.phone && (
                              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                            Company
                          </label>
                          <div className="mt-1">
                            <input
                              id="company"
                              type="text"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                              {...register('company')}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            id="subject"
                            type="text"
                            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
                              errors.subject ? 'border-red-300' : ''
                            }`}
                            {...register('subject')}
                          />
                          {errors.subject && (
                            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                          Service of Interest
                        </label>
                        <div className="mt-1">
                          <select
                            id="service"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            {...register('service')}
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="message"
                            rows={4}
                            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
                              errors.message ? 'border-red-300' : ''
                            }`}
                            {...register('message')}
                          />
                          {errors.message && (
                            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="agree"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                            {...register('agree')}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="agree" className="font-medium text-gray-700">
                            I agree to the{' '}
                            <a href="/privacy" className="text-primary-600 hover:text-primary-500">
                              Privacy Policy
                            </a>{' '}
                            <span className="text-red-500">*</span>
                          </label>
                          {errors.agree && (
                            <p className="mt-1 text-sm text-red-600">{errors.agree.message}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 lg:mt-0">
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              <p className="mt-3 text-lg text-gray-500">
                Have questions or need assistance? We're here to help. Reach out to us through any of the following channels.
              </p>

              <div className="mt-8">
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                          <info.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{info.title}</h3>
                        <p className="mt-1 text-gray-500 whitespace-pre-line">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-medium text-gray-900">Follow us</h3>
                <div className="flex space-x-6 mt-4">
                  {[
                    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
                    { name: 'Twitter', href: '#', icon: 'twitter' },
                    { name: 'Facebook', href: '#', icon: 'facebook' },
                    { name: 'YouTube', href: '#', icon: 'youtube' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">{social.name}</span>
                      <div className="h-6 w-6">
                        {social.icon === 'linkedin' && (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        )}
                        {social.icon === 'twitter' && (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        )}
                        {social.icon === 'facebook' && (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        )}
                        {social.icon === 'youtube' && (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.214321027361!2d-95.3692!3d29.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c0b1a8ef7f1d%3A0x75f2a7c9f9e9b9b0!2s123%20Energy%20Plaza%2C%20Houston%2C%20TX%2077002!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eastline Shippers Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
