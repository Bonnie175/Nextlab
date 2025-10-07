'use server';

/**
 * @fileOverview A flow for generating curriculum learning outcomes.
 *
 * - generateLearningOutcomes - A function that generates learning outcomes for a subject and grade.
 * - GenerateLearningOutcomesInput - The input type for the generateLearningOutcomes function.
 * - GenerateLearningOutcomesOutput - The return type for the generateLearningOutcomes function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateLearningOutcomesInputSchema = z.object({
  subject: z.string().describe('The subject to generate learning outcomes for.'),
  grade: z.string().describe('The grade level for the subject.'),
});
export type GenerateLearningOutcomesInput = z.infer<typeof GenerateLearningOutcomesInputSchema>;

const GenerateLearningOutcomesOutputSchema = z.object({
  outcomes: z.string().describe('The detailed learning outcomes for the specified subject and grade. This should be a comprehensive list written in paragraph form, detailing the expected skills, knowledge, and competencies.'),
});
export type GenerateLearningOutcomesOutput = z.infer<typeof GenerateLearningOutcomesOutputSchema>;

const outcomesPrompt = ai.definePrompt({
  name: 'generateLearningOutcomesPrompt',
  input: { schema: GenerateLearningOutcomesInputSchema },
  output: { schema: GenerateLearningOutcomesOutputSchema },
  prompt: `You are an expert curriculum designer for Kenya's Competency-Based Curriculum (CBC).
  
Your task is to generate detailed learning outcomes for the subject '{{{subject}}}' for students in '{{{grade}}}'.

The outcomes should be comprehensive, clear, and aligned with the CBC principles of fostering competencies. Structure the output as a single, well-written paragraph.

Do not just list items. Elaborate on what learners are expected to know, understand, and be able to do by the end of the learning period for this subject at this grade. Consider skills, attitudes, and values.
`,
});

const generateOutcomesFlow = ai.defineFlow(
  {
    name: 'generateOutcomesFlow',
    inputSchema: GenerateLearningOutcomesInputSchema,
    outputSchema: GenerateLearningOutcomesOutputSchema,
  },
  async (input) => {
    const { output } = await outcomesPrompt(input);
    if (!output) {
      throw new Error('Failed to generate learning outcomes.');
    }
    return output;
  }
);

export async function generateLearningOutcomes(input: GenerateLearningOutcomesInput): Promise<GenerateLearningOutcomesOutput> {
  return generateOutcomesFlow(input);
}
