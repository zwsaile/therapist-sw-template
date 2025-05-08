'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] w-full mb-16">
      <div className="absolute inset-0">
        <Image
          src="/office-photo.jpg"
          alt="Professional therapy office environment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Your Journey to Mental Wellness Starts Here
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            I&apos;m here to provide professional support and guidance as you navigate life&apos;s challenges. Together, we&apos;ll work towards your goals in a safe, confidential environment.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-elevated transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-elevated-lg active:scale-95 active:shadow-elevated-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Schedule a Consultation
            </a>
            <a href="#services" className="text-sm font-semibold leading-6 text-white hover:text-gray-200">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 