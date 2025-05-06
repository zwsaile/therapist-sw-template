'use client';

import React from 'react';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const approaches = [
  {
    name: 'Client-Centered',
    description: 'I believe in creating a safe, non-judgmental space where you can freely express yourself and explore your thoughts and feelings.',
  },
  {
    name: 'Evidence-Based',
    description: 'My therapeutic approach is grounded in research-backed methods that have proven effective in helping clients achieve their goals.',
  },
  {
    name: 'Holistic',
    description: 'I consider the whole person—mind, body, and spirit—in our work together, recognizing that all aspects of your life are interconnected.',
  },
  {
    name: 'Collaborative',
    description: 'We work together as a team, with you as the expert on your own experience and me as a guide in your journey toward healing.',
  },
];

export default function Approach() {
  return (
    <div id="approach" className="bg-white min-h-screen flex flex-col justify-center px-6 lg:px-8 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Approach</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I believe in a personalized approach to therapy that honors your unique experiences and goals. Here&apos;s what you can expect when working with me.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {approaches.map((approach) => (
              <div key={approach.name} className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900">{approach.name}</dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{approach.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto mt-16 max-w-2xl bg-purple-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Qualifications</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-0 space-y-2">
            <li>Licensed Professional Counselor (LPC)</li>
            <li>Master of Science in Counseling</li>
            <li>Certification in Trauma-Informed Care</li>
            <li>Specialized training in Cognitive Behavioral Therapy</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 