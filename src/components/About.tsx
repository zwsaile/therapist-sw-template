'use client';

import React from 'react';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <div id="about" className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-6 lg:px-8 scroll-mt-24">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="md:w-1/3 w-full flex justify-center">
          <img
            src="/therapist-photo.jpg"
            alt="Therapist portrait"
            className="rounded-xl shadow-elevated object-cover w-80 h-80 md:w-[28rem] md:h-[28rem]"
          />
        </div>
        <div className="md:w-2/3 w-full">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">About Me</h2>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            I am a dedicated mental health professional committed to helping individuals navigate their personal journeys toward healing and growth. With years of experience in the field, I provide a safe, non-judgmental space where clients can explore their thoughts, feelings, and experiences.
          </p>
          <p className="text-lg leading-8 text-gray-700 mb-10">
            I believe in the power of the therapeutic relationship and am committed to walking alongside you as you work toward your goals. Together, we can develop the tools and insights needed to create meaningful, lasting change in your life.
          </p>
          <blockquote className="border-l-4 border-purple-600 pl-6 italic text-xl font-medium text-gray-900 mb-10">
            "My approach combines evidence-based practices with a warm, empathetic style to create a therapeutic environment where healing can flourish."
          </blockquote>
          <div className="bg-purple-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold tracking-tight text-purple-800">Your First Session</h3>
              <CalendarDaysIcon className="h-7 w-7 text-purple-600" aria-hidden="true" />
            </div>
            <p className="text-lg leading-8 text-gray-700">
              During our first session, we&apos;ll discuss your goals, concerns, and what brings you to therapy. This is a time for us to get to know each other and determine if we&apos;re a good fit for working together. I&apos;ll explain my approach and answer any questions you may have about the therapeutic process.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              <li>Warm, welcoming environment</li>
              <li>Confidential and judgment-free</li>
              <li>Personalized to your needs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 