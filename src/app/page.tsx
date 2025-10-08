'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cbcData } from '@/lib/cbc-data';
import { placeholderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
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
                  <Card
                    className='cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col'
                  >
                    <CardHeader className="p-0">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
                        <Image
                          src={image?.imageUrl || `https://picsum.photos/seed/${level.name}/800/600`}
                          alt={level.description}
                          width={800}
                          height={600}
                          className="object-cover w-full h-full"
                          data-ai-hint={image?.imageHint}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="font-headline text-xl font-bold">{level.name}</h3>
                      <p className="mt-2 text-muted-foreground text-sm flex-grow">{level.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      <footer className="bg-card text-center py-6 mt-16 border-t">
        <p className="text-sm text-muted-foreground">
          Built for educational purposes by Next Tech Lab. All data is representational.
        </p>
      </footer>
    </main>
  );
}
