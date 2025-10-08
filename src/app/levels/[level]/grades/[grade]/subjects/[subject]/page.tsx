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
import { ChevronRight } from 'lucide-react';

export default function SubjectPage() {
  const params = useParams();
  const levelName = decodeURIComponent(params.level as string);
  const gradeName = decodeURIComponent(params.grade as string);
  const subjectName = decodeURIComponent(params.subject as string);

  const [selectedPathwayName, setSelectedPathwayName] = useState<string | null>(null);

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

  const handleSelectPathway = (name: string) => {
    setSelectedPathwayName(current => current === name ? null : name);
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

        <div className="mt-8">
            <Card className="shadow-lg">
              <CardContent className="text-base space-y-6 p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {subject.curriculumDesign}
                </p>

                {subject.pathways && (
                  <div className="space-y-4 pt-4">
                     <h4 className="font-headline text-xl font-semibold text-center">Specialized Tracks</h4>
                    {subject.pathways.map((pathway) => (
                      <Card 
                        key={pathway.name}
                        onClick={() => handleSelectPathway(pathway.name)}
                        className={cn(
                          "cursor-pointer transition-all hover:bg-muted/50",
                          selectedPathwayName === pathway.name && "ring-2 ring-primary"
                        )}
                      >
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className='flex items-center'>
                            <div className="bg-accent/20 p-3 rounded-full mr-4">
                                {React.createElement(getSubjectIcon(pathway.name), { className: "h-6 w-6 text-accent-foreground" })}
                            </div>
                            <div>
                               <h5 className="font-semibold">{pathway.name}</h5>
                            </div>
                          </div>
                          <ChevronRight className={cn("h-5 w-5 text-muted-foreground transition-transform", selectedPathwayName === pathway.name && "rotate-90")} />
                        </CardContent>
                        {selectedPathwayName === pathway.name && (
                           <CardContent className="pt-0 pb-4 px-4">
                               <p className="text-sm text-muted-foreground leading-relaxed border-t pt-4 mt-4">
                                 {pathway.curriculumDesign}
                               </p>
                           </CardContent>
                        )}
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
      </div>
      <footer className="bg-card text-center py-6 mt-16 border-t">
        <p className="text-sm text-muted-foreground">
          Built for educational purposes by Next Tech Lab. All data is representational.
        </p>
      </footer>
    </main>
  );
}
