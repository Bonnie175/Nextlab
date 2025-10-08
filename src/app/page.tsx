'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cbcData } from '@/lib/cbc-data';
import { placeholderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';

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
              const image = placeholderImages.find((img) => img.id === level.imageId);
              return (
                <Link href={`/levels/${encodeURIComponent(level.name)}`} key={level.name} passHref>
                  <Card className="group relative block w-full h-64 cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={image?.imageUrl || `https://picsum.photos/seed/${level.name}/800/600`}
                      alt={level.description}
                      fill
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={image?.imageHint}
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
      </div>

      <footer className="bg-primary text-primary-foreground text-center py-6 mt-16">
        <p className="text-sm text-primary-foreground/80">
          Built for educational purposes by Next Tech Lab. All data is representational.
        </p>
      </footer>
    </main>
  );
}
