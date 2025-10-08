'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cbcData, type Grade, type Level } from '@/lib/cbc-data';
import { Card, CardContent } from '@/components/ui/card';
import { getSubjectIcon } from '@/lib/icons';
import { PageHeader, KenyanFlag } from '@/components/page-header';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { cn } from '@/lib/utils';

export default function GradePage() {
  const params = useParams();
  const levelName = decodeURIComponent(params.level as string);
  const gradeName = decodeURIComponent(params.grade as string);

  const level: Level | undefined = cbcData.find((l) => l.name === levelName);
  const grade: Grade | undefined = level?.grades.find((g) => g.name === gradeName);

  if (!level || !grade) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold">Grade not found.</h1>
        <Link href="/">
          <button>Go back to Home</button>
        </Link>
      </div>
    );
  }

  return (
    <main className="flex-grow">
      <PageHeader
        title={grade.name}
        description={grade.summary}
      >
        <KenyanFlag />
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs segments={[
          { name: 'Home', path: '/' }, 
          { name: level.name, path: `/levels/${encodeURIComponent(level.name)}`},
          { name: grade.name }
        ]} />

        <section id="subjects" className="text-center mt-8">
           <h3 className="font-headline text-2xl font-bold tracking-tight">
            Select a Subject to See Learning Outcomes
          </h3>
          <p className="mt-2 text-muted-foreground">
            Explore the subjects offered in {grade.name}.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {grade.subjects.map((subject) => {
              const Icon = getSubjectIcon(subject.name);
              const subjectPath = `/levels/${encodeURIComponent(level.name)}/grades/${encodeURIComponent(grade.name)}/subjects/${encodeURIComponent(subject.name)}`;
              return (
                <Link href={subjectPath} key={subject.name}>
                  <Card
                    className='cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary h-full'
                  >
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                      <div className="bg-accent/20 p-3 rounded-full">
                        <Icon className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <h4 className="mt-3 font-semibold text-sm flex-grow flex items-center">{subject.name}</h4>
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
          Built for educational purposes. All data is representational.
        </p>
      </footer>
    </main>
  );
}
