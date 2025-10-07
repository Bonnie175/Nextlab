'use client';

import { useState, type FC } from 'react';
import { summarizeLearningOutcomes } from '@/ai/flows/summarize-learning-outcomes';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';
import type { Subject } from '@/lib/cbc-data';

interface LearningOutcomesProps {
  subject: Subject;
  icon: FC<{ className?: string }>;
}

export default function LearningOutcomes({ subject, icon: Icon }: LearningOutcomesProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary('');
    try {
      const result = await summarizeLearningOutcomes({ learningOutcomes: subject.learningOutcomes });
      if (result.summary) {
        setSummary(result.summary);
      } else {
        throw new Error('Empty summary returned.');
      }
    } catch (e) {
      console.error(e);
      toast({
        variant: 'destructive',
        title: 'AI Summary Failed',
        description: 'Could not generate a summary. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center mb-4">
            <div className="bg-primary/20 p-4 rounded-full">
                <Icon className="h-10 w-10 text-primary-foreground" />
            </div>
        </div>
        <CardTitle className="font-headline text-3xl">{subject.name}</CardTitle>
        <CardDescription>Learning Outcomes</CardDescription>
      </CardHeader>
      <CardContent className="text-base space-y-6">
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {subject.learningOutcomes}
        </p>

        {summary && (
          <div className="p-4 bg-accent/20 border-l-4 border-accent rounded-r-lg animate-in fade-in duration-500">
            <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-accent-foreground"/>
                <h4 className="font-headline text-lg font-semibold text-accent-foreground">AI Summary</h4>
            </div>
            <p className="text-sm text-accent-foreground/80 leading-relaxed">
              {summary}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={handleSummarize} disabled={isLoading} size="lg">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating Summary...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Summarize with AI
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
