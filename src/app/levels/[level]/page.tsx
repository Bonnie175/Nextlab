'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cbcData, type Level } from '@/lib/cbc-data';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/page-header';
import { Breadcrumbs } from '@/components/breadcrumbs';

export default function LevelPage() {
  const params = useParams();
  const levelName = decodeURIComponent(params.level as string);

  const level: Level | undefined = cbcData.find((l) => l.name === levelName);

  if (!level) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold">Education Level not found.</h1>
        <Link href="/">
          <Button variant="link">Go back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="flex-grow">
      <PageHeader
        title={level.name}
        description={level.description}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs segments={[{ name: 'Home', path: '/' }, { name: level.name }]} />

        <section id="grades" className="text-center mt-8">
          <h2 className="font-headline text-3xl font-bold tracking-tight">
            Select a Grade / Level
          </h2>
          <p className="mt-2 text-muted-foreground">
            Now, choose a grade within {level.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {level.grades.map((grade) => (
              <Link href={`/levels/${encodeURIComponent(level.name)}/grades/${encodeURIComponent(grade.name)}`} key={grade.name}>
                <Button
                  variant='outline'
                  size="lg"
                  className="text-base"
                >
                  {grade.name}
                </Button>
              </Link>
            ))}
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
