'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cbcData, type Grade, type Level, type Subject } from '@/lib/cbc-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getSubjectIcon } from '@/lib/icons';
import { PageHeader } from '@/components/page-header';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function SubjectPage() {
  const params = useParams();
  const levelName = decodeURIComponent(params.level as string);
  const gradeName = decodeURIComponent(params.grade as string);
  const subjectName = decodeURIComponent(params.subject as string);

  const level: Level | undefined = cbcData.find((l) => l.name === levelName);
  const grade: Grade | undefined = level?.grades.find((g) => g.name === gradeName);
  const subject: Subject | undefined = grade?.subjects.find((s) => s.name === subjectName);

  if (!level || !grade || !subject) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold">Subject not found.</h1>
        <Link href="/">
          <button>Go back to Home</button>
        </Link>
      </div>
    );
  }

  return (
    <main className="flex-grow">
      <PageHeader
        title={subject.name}
        description={`Curriculum Design for ${grade.name}`}
      >
        <div className="bg-primary/20 p-4 rounded-full">
            {React.createElement(getSubjectIcon(subject.name), { className: "h-10 w-10 text-primary-foreground" })}
        </div>
      </PageHeader>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs segments={[
            { name: 'Home', path: '/' }, 
            { name: level.name, path: `/levels/${encodeURIComponent(level.name)}`},
            { name: grade.name, path: `/levels/${encodeURIComponent(level.name)}/grades/${encodeURIComponent(grade.name)}`},
            { name: subject.name }
        ]} />

        <div className="mt-8 space-y-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Curriculum Overview</CardTitle>
                </CardHeader>
              <CardContent className="text-base space-y-6 p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {subject.curriculumDesign}
                </p>
              </CardContent>
            </Card>

            {subject.pathways && (
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>Specialized Tracks</CardTitle>
                        <CardDescription>Explore the specialized pathways available within this subject.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {subject.pathways.map((pathway) => (
                                <AccordionItem value={pathway.name} key={pathway.name}>
                                    <AccordionTrigger>
                                        <div className='flex items-center gap-4'>
                                            <div className="bg-accent/20 p-3 rounded-full">
                                                {React.createElement(getSubjectIcon(pathway.name), { className: "h-6 w-6 text-accent-foreground" })}
                                            </div>
                                            <h5 className="font-semibold text-lg">{pathway.name}</h5>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2">
                                        <p className="text-sm text-muted-foreground leading-relaxed px-4 py-2 border-l-2 border-primary ml-4">
                                            {pathway.curriculumDesign}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            )}
        </div>
      </div>
      <footer className="bg-primary text-primary-foreground text-center py-6 mt-16">
        <p className="text-sm text-primary-foreground/80">
          Built for educational purposes. All data is representational.
        </p>
      </footer>
    </main>
  );
}
