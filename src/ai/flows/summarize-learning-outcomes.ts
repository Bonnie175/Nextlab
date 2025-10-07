'use server';

/**
 * @fileOverview Summarizes learning outcomes for a given subject using AI.
 *
 * - summarizeLearningOutcomes - A function that takes learning outcomes as input and returns a concise summary.
 * - SummarizeLearningOutcomesInput - The input type for the summarizeLearningOutcomes function.
 * - SummarizeLearningOutcomesOutput - The return type for the summarizeLearningOutcomes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeLearningOutcomesInputSchema = z.object({
  learningOutcomes: z
    .string()
    .describe('Detailed learning outcomes for a specific subject.'),
});
export type SummarizeLearningOutcomesInput = z.infer<
  typeof SummarizeLearningOutcomesInputSchema
>;

const SummarizeLearningOutcomesOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the learning outcomes.'),
});
export type SummarizeLearningOutcomesOutput = z.infer<
  typeof SummarizeLearningOutcomesOutputSchema
>;

export async function summarizeLearningOutcomes(
  input: SummarizeLearningOutcomesInput
): Promise<SummarizeLearningOutcomesOutput> {
  return summarizeLearningOutcomesFlow(input);
}

const summarizeLearningOutcomesPrompt = ai.definePrompt({
  name: 'summarizeLearningOutcomesPrompt',
  input: {schema: SummarizeLearningOutcomesInputSchema},
  output: {schema: SummarizeLearningOutcomesOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing learning outcomes for educational subjects.  Provide a concise summary of the following learning outcomes:\n\nLearning Outcomes: {{{learningOutcomes}}}\n\nSummary: `,
});

const summarizeLearningOutcomesFlow = ai.defineFlow(
  {
    name: 'summarizeLearningOutcomesFlow',
    inputSchema: SummarizeLearningOutcomesInputSchema,
    outputSchema: SummarizeLearningOutcomesOutputSchema,
  },
  async input => {
    const {output} = await summarizeLearningOutcomesPrompt(input);
    return output!;
  }
);
