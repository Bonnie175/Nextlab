import {
  BookOpen,
  Calculator,
  Atom,
  Paintbrush,
  Music,
  Globe,
  Dumbbell,
  HeartHandshake,
  Computer,
  Sprout,
  Hammer,
  Drama,
  Smile,
  Landmark,
  Palette,
  MicVocal,
  Plus,
  CookingPot,
  Scale,
  Stethoscope,
  PenTool,
  FlaskConical,
  Wrench,
  HeartPulse,
  Leaf,
  GraduationCap,
  Briefcase,
  Building,
  School,
  Book,
  PenSquare,
  ShieldCheck,
  BrainCircuit,
  PencilRuler,
  Lightbulb,
  FileText,
  Wind,
  DraftingCompass
} from 'lucide-react';
import type React from 'react';

const iconMappings: { [key: string]: React.ElementType } = {
  // ECE
  'Language Activities': BookOpen,
  'Mathematical Activities': Calculator,
  'Creative Arts': Paintbrush,
  'Music Activities': Music,
  'Environmental Activities': Globe,
  
  // Primary
  'English': Book,
  'Kiswahili': Book,
  'Mathematics': Calculator,
  'Science and Technology': BrainCircuit,
  'Social Studies': Landmark,
  'Christian Religious Education': HeartHandshake,
  'Islamic Religious Education': HeartHandshake,
  'Hindu Religious Education': HeartHandshake,
  'Agriculture': Sprout,
  'Home Science': CookingPot,
  'Physical and Health Education': Dumbbell,
  'Hygiene and Nutrition': ShieldCheck,

  // Junior School
  'Integrated Science': Atom,
  'Pre-Technical Studies': PencilRuler,
  'Life Skills Education': Smile,
  'Health Education': Stethoscope,
  'ICT': Computer,
  'Business Studies': Briefcase,
  'Performing Arts': Drama,
  'Visual Arts': Palette,
  'Junior School Assessment': PenSquare,
  
  // Senior School
  'STEM': BrainCircuit,
  'Arts and Sports Science Pathway': Palette,
  'Social Sciences Pathway': Landmark,
  'Pure Sciences': FlaskConical,
  'Engineering': Wrench,
  'Health Sciences': HeartPulse,
  'Agricultural & Environmental Sciences': Leaf,
  'Community Service and Leadership': HeartHandshake,
  'Career Guidance and Mentorship': Lightbulb,
  'KACE Preparation': FileText,
  'Advanced Pathway Project': Lightbulb,
  'Tertiary Transition Skills': GraduationCap,
  'Woodwork': Hammer,
  'Metalwork': Wrench,
  'Electricity': Lightbulb,
  'Power Mechanics': Wrench,
  'Drawing & Design': DraftingCompass,
  'Aviation Technology': Wind,


  // Tertiary
  'University': GraduationCap,
  'College': Briefcase,
  'Hospitality': CookingPot,
  'Building and Construction': Building,
  'Fashion and Design': Palette,
  'Bachelor of Science in Computer Science': Computer,
  'Bachelor of Medicine and Surgery': Stethoscope,
  'Bachelor of Laws (LLB)': Scale,
  'Bachelor of Commerce (BCom)': Briefcase,

  // Fallbacks
  'Language': BookOpen,
  'English Language': Book,
  'Kiswahili Language': Book,
  'Mathematical': Calculator,
  'Creative': Paintbrush,
  'Music': MicVocal,
  'Science': Atom,
  'Technology': Computer,
  'Social': Landmark,
  'Environmental': Globe,
  'Health': Stethoscope,
  'Pre-Technical': Hammer,
  'Life': Smile,
  'Religious': HeartHandshake,
  'Arts': Palette,
  'Sports': Dumbbell,
  'Business': Scale,
  'KPSEA': PenTool,
  'Assessment': PenTool,
  'Agricultural': Leaf,
};

export const getSubjectIcon = (subjectName: string): React.ElementType => {
  // Direct match first
  if (iconMappings[subjectName]) {
    return iconMappings[subjectName];
  }

  // Check for keywords
  const normalizedName = subjectName.toLowerCase();
  for (const key in iconMappings) {
    if (normalizedName.includes(key.toLowerCase())) {
      return iconMappings[key];
    }
  }

  return School; // A more relevant default icon
};
