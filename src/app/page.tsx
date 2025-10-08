'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cbcData } from '@/lib/cbc-data';
import { Card } from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';

// Simplified image data directly in the component for reliability
const levelImages: { [key: string]: { src: string; hint: string } } = {
  'Early Years Education': {
    src: 'https://picsum.photos/seed/early_years/800/600',
    hint: 'children classroom',
  },
  'Middle School': {
    src: 'https://picsum.photos/seed/middle_school/800/600',
    hint: 'students learning',
  },
  'Senior School': {
    src: 'https://picsum.photos/seed/senior_school/800/600',
    hint: 'student science',
  },
  'Tertiary Education': {
    src: 'https://picsum.photos/seed/tertiary/800/600',
    hint: 'university graduation',
  },
};

export default function Home() {
  return (
    <main className="flex-grow">
      <PageHeader
        title="CBC Explorer"
        description="An interactive guide to Kenya's new Competency-Based Curriculum."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="levels" className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight">
            Select an Education Level
          </h2>
          <p className="mt-2 text-muted-foreground">Start by choosing a level in the CBC journey.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {cbcData.map((level) => {
              const image = levelImages[level.name] || { src: `https://picsum.photos/seed/${level.name}/800/600`, hint: 'education' };
              return (
                <Link href={`/levels/${encodeURIComponent(level.name)}`} key={level.name} passHref>
                  <Card className="group relative block w-full h-64 cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={image.src}
                      alt={level.description}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={image.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-headline text-xl font-bold">{level.name}</h3>
                      <p className="mt-2 text-sm opacity-90">{level.description}</p>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section id="about" className="mt-24 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight">
            About This Project
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The CBC Explorer is an interactive tool designed to demystify Kenya's Competency-Based Curriculum. It provides a clear, explorable overview of the educational journey from early years to tertiary education. This project was built to serve as an informational guide for parents, educators, and students.
            </p>
             <p className="mt-4 text-sm text-muted-foreground">
              Created by Next Tech Lab.
            </p>
          </div>
        </section>
      </div>

      <footer className="bg-primary text-primary-foreground text-center py-6 mt-16">
        <p className="text-sm text-primary-foreground/80">
          Built for educational purposes. All data is representational.
        </p>
      </footer>
    </main>
  );
}
