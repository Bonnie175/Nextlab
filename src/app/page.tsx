'use client';

import React, { useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import { cbcData, type Level, type Grade, type Subject } from '@/lib/cbc-data';
import { getSubjectIcon } from '@/lib/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GraduationCap, ChevronRight } from 'lucide-react';

export default function Home() {
  const [selectedLevelName, setSelectedLevelName] = useState<string | null>(null);
  const [selectedGradeName, setSelectedGradeName] = useState<string | null>(null);
  const [selectedSubjectName, setSelectedSubjectName] = useState<string | null>(null);
  const [selectedPathwayName, setSelectedPathwayName] = useState<string | null>(null);

  const gradesRef = useRef<HTMLDivElement>(null);
  const subjectsRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);

  const selectedLevel = useMemo(
    () => cbcData.find((level) => level.name === selectedLevelName) || null,
    [selectedLevelName]
  );

  const selectedGrade = useMemo(
    () => selectedLevel?.grades.find((grade) => grade.name === selectedGradeName) || null,
    [selectedLevel, selectedGradeName]
  );

  const selectedSubject = useMemo(
    () => selectedGrade?.subjects.find((subject) => subject.name === selectedSubjectName) || null,
    [selectedGrade, selectedSubjectName]
  );

  const selectedPathway = useMemo(
    () => selectedSubject?.pathways?.find(p => p.name === selectedPathwayName) || null,
    [selectedSubject, selectedPathwayName]
  );

  const handleSelectLevel = (name: string) => {
    setSelectedLevelName(name);
    setSelectedGradeName(null);
    setSelectedSubjectName(null);
    setSelectedPathwayName(null);
    setTimeout(() => gradesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const handleSelectGrade = (name: string) => {
    setSelectedGradeName(name);
    setSelectedSubjectName(null);
    setSelectedPathwayName(null);
    setTimeout(() => subjectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const handleSelectSubject = (name: string) => {
    setSelectedSubjectName(name);
    setSelectedPathwayName(null);
    setTimeout(() => outcomesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const handleSelectPathway = (name: string) => {
    setSelectedPathwayName(name);
    setTimeout(() => outcomesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }), 100);
  }


  return (
    <main className="flex-grow">
      <header className="text-center py-16 md:py-24 bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mt-4">
            CBC Explorer
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            An interactive guide to Kenya's new Competency-Based Curriculum.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="levels" className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight">
            1. Select an Education Level
          </h2>
          <p className="mt-2 text-muted-foreground">Start by choosing a level in the CBC journey.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {cbcData.map((level) => {
              const image = PlaceHolderImages.find((img) => img.id === level.imageId);
              return (
                <Card
                  key={level.name}
                  onClick={() => handleSelectLevel(level.name)}
                  className={cn(
                    'cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2',
                    selectedLevelName === level.name && 'ring-2 ring-primary shadow-2xl -translate-y-1'
                  )}
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                      <Image
                        src={image?.imageUrl || `https://picsum.photos/seed/${level.name}/800/600`}
                        alt={level.description}
                        fill
                        className="object-cover rounded-t-lg"
                        data-ai-hint={image?.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="font-headline text-xl font-bold">{level.name}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{level.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {selectedLevel && (
          <div
            ref={gradesRef}
            className="mt-16 pt-16 border-t animate-in fade-in duration-500"
          >
            <section id="grades" className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight">
                2. Select a Grade / Level
              </h2>
              <p className="mt-2 text-muted-foreground">
                Now, choose a grade within {selectedLevel.name}.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {selectedLevel.grades.map((grade) => (
                  <Button
                    key={grade.name}
                    variant={selectedGradeName === grade.name ? 'default' : 'outline'}
                    size="lg"
                    className="text-base"
                    onClick={() => handleSelectGrade(grade.name)}
                  >
                    {grade.name}
                  </Button>
                ))}
              </div>
            </section>
          </div>
        )}

        {selectedGrade && (
          <div
            ref={subjectsRef}
            className="mt-16 pt-16 border-t animate-in fade-in duration-500"
          >
            <section id="subjects" className="text-center">
              <div className="max-w-3xl mx-auto mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tight">
                  {selectedGrade.name} Overview
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {selectedGrade.summary}
                </p>
              </div>

              <h3 className="font-headline text-2xl font-bold tracking-tight">
                3. Select a Subject to See Learning Outcomes
              </h3>
              <p className="mt-2 text-muted-foreground">
                Explore the subjects offered in {selectedGrade.name}.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {selectedGrade.subjects.map((subject) => {
                  const Icon = getSubjectIcon(subject.name);
                  return (
                    <Card
                      key={subject.name}
                      onClick={() => handleSelectSubject(subject.name)}
                      className={cn(
                        'cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary',
                        selectedSubjectName === subject.name && 'ring-2 ring-primary shadow-xl'
                      )}
                    >
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <div className="bg-accent/20 p-3 rounded-full">
                          <Icon className="h-8 w-8 text-accent-foreground" />
                        </div>
                        <h4 className="mt-3 font-semibold text-sm">{subject.name}</h4>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {selectedSubject && (
          <div
            ref={outcomesRef}
            className="mt-16 pt-16 border-t animate-in fade-in duration-500"
          >
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-primary/20 p-4 rounded-full">
                    {React.createElement(getSubjectIcon(selectedSubject.name), { className: "h-10 w-10 text-primary-foreground" })}
                  </div>
                </div>
                <CardTitle className="font-headline text-3xl">{selectedSubject.name}</CardTitle>
                <CardDescription>
                  Curriculum Design for {selectedGrade?.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-base space-y-6 px-6 pb-6">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedSubject.curriculumDesign}
                </p>

                {selectedSubject.pathways && (
                  <div className="space-y-4 pt-4">
                     <h4 className="font-headline text-xl font-semibold text-center">Specialized Tracks</h4>
                    {selectedSubject.pathways.map((pathway) => (
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
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
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
        )}

      </div>

      <footer className="bg-card text-center py-6 mt-16 border-t">
        <p className="text-sm text-muted-foreground">
          Built for educational purposes. All data is representational.
        </p>
      </footer>
    </main>
  );
}
