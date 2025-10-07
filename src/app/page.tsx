'use client';

import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cbcData, type Level, type Grade, type Subject } from '@/lib/cbc-data';
import { getSubjectIcon } from '@/lib/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GraduationCap, Wand2, AlertTriangle } from 'lucide-react';
import { generateLearningOutcomes, type GenerateLearningOutcomesOutput } from '@/ai/flows/generate-outcomes-flow';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const [selectedLevelName, setSelectedLevelName] = useState<string | null>(null);
  const [selectedGradeName, setSelectedGradeName] = useState<string | null>(null);
  const [selectedSubjectName, setSelectedSubjectName] = useState<string | null>(null);
  const [outcomes, setOutcomes] = useState<GenerateLearningOutcomesOutput | null>(null);
  const [isLoadingOutcomes, setIsLoadingOutcomes] = useState(false);
  const [errorOutcomes, setErrorOutcomes] = useState<string | null>(null);

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

  const handleSelectLevel = (name: string) => {
    setSelectedLevelName(name);
    setSelectedGradeName(null);
    setSelectedSubjectName(null);
    setOutcomes(null);
    setTimeout(() => gradesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const handleSelectGrade = (name: string) => {
    setSelectedGradeName(name);
    setSelectedSubjectName(null);
    setOutcomes(null);
    setTimeout(() => subjectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const handleSelectSubject = (name: string) => {
    setSelectedSubjectName(name);
    setOutcomes(null);
    setTimeout(() => outcomesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };
  
  const fetchOutcomes = useCallback(async () => {
    if (!selectedSubjectName || !selectedGradeName) return;

    setIsLoadingOutcomes(true);
    setErrorOutcomes(null);
    setOutcomes(null);

    try {
      const result = await generateLearningOutcomes({ subject: selectedSubjectName, grade: selectedGradeName });
      setOutcomes(result);
    } catch (error) {
      console.error('Failed to generate learning outcomes:', error);
      setErrorOutcomes('Sorry, we couldn\'t generate the learning outcomes at this moment. Please try again.');
    } finally {
      setIsLoadingOutcomes(false);
    }
  }, [selectedSubjectName, selectedGradeName]);

  useEffect(() => {
    if (selectedSubjectName) {
      fetchOutcomes();
    }
  }, [selectedSubjectName, fetchOutcomes]);


  return (
    <main className="flex-grow">
      <header className="text-center py-16 md:py-24 bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GraduationCap className="mx-auto h-16 w-16 text-primary" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
                2. Select a Grade
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

        {selectedSubjectName && (
          <div
            ref={outcomesRef}
            className="mt-16 pt-16 border-t animate-in fade-in duration-500"
          >
            <Card className="shadow-lg">
                <CardHeader className="text-center">
                    <div className="flex justify-center items-center mb-4">
                        <div className="bg-primary/20 p-4 rounded-full">
                            {React.createElement(getSubjectIcon(selectedSubjectName), { className: "h-10 w-10 text-primary-foreground" })}
                        </div>
                    </div>
                    <CardTitle className="font-headline text-3xl">{selectedSubjectName}</CardTitle>
                    <CardDescription className="flex items-center justify-center gap-2">
                      <Wand2 className="h-4 w-4" />
                      AI-Generated Learning Outcomes
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-base space-y-6">
                  {isLoadingOutcomes && (
                    <div className="space-y-4">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  )}
                  {errorOutcomes && (
                    <div className="text-destructive-foreground bg-destructive p-4 rounded-md flex items-center gap-4">
                      <AlertTriangle />
                      <p>{errorOutcomes}</p>
                    </div>
                  )}
                  {outcomes && (
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {outcomes.outcomes}
                    </p>
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
