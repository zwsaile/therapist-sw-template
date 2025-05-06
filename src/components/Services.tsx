'use client';

import React from 'react';
import {
  UserGroupIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Individual Therapy',
    description: 'One-on-one sessions focused on your personal growth and mental health goals.',
    icon: UserGroupIcon,
  },
  {
    name: 'Couples Counseling',
    description: 'Strengthen your relationship through guided communication and understanding.',
    icon: HeartIcon,
  },
  {
    name: 'Anxiety & Depression',
    description: 'Evidence-based approaches to manage and overcome anxiety and depression.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Trauma Recovery',
    description: 'Safe and supportive environment for processing and healing from trauma.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Career Counseling',
    description: 'Navigate career transitions and find fulfillment in your professional life.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Personal Growth',
    description: 'Develop self-awareness and build resilience for a more fulfilling life.',
    icon: SparklesIcon,
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-white min-h-screen flex flex-col justify-start px-6 lg:px-8 scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive mental health services tailored to your unique needs and goals.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col items-start bg-white rounded-2xl shadow-elevated p-8">
              <div className="rounded-lg bg-purple-50 p-3">
                <service.icon className="h-6 w-6 text-purple-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">{service.name}</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">{service.description}</p>
              <a
                href="#contact"
                className="mt-4 text-sm font-semibold leading-6 text-purple-600 hover:text-purple-500"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 