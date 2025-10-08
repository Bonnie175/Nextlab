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
} from 'lucide-react';
import type React from 'react';

const iconMappings: { [key: string]: React.ElementType } = {
  Language: BookOpen,
  English: BookOpen,
  Kiswahili: BookOpen,
  Mathematical: Calculator,
  Mathematics: Calculator,
  Creative: Paintbrush,
  Music: MicVocal,
  Science: Atom,
  Technology: Computer,
  Social: Landmark,
  Environmental: Globe,
  Agriculture: Sprout,
  Health: Stethoscope,
  Hygiene: Stethoscope,
  'Pre-Technical': Hammer,
  Life: Smile,
  Religious: HeartHandshake,
  STEM: Atom,
  Arts: Palette,
  Sports: Dumbbell,
  ICT: Computer,
  'Home Science': CookingPot,
  Business: Scale,
  KPSEA: PenTool,
  Assessment: PenTool,
  'Performing Arts': Drama,
  'Visual Arts': Palette,
  'Pure Sciences': FlaskConical,
  'Engineering': Wrench,
  'Health Sciences': HeartPulse,
  'Agricultural': Leaf,
  'University': GraduationCap,
  'College': Briefcase,
  'Hospitality': CookingPot,
  'Building': Building,
  'Fashion': Palette,
};

export const getSubjectIcon = (subjectName: string): React.ElementType => {
  const normalizedName = subjectName.toLowerCase();

  // Exact matches first
  if (iconMappings[subjectName]) {
    return iconMappings[subjectName];
  }

  for (const key in iconMappings) {
    if (normalizedName.includes(key.toLowerCase())) {
      return iconMappings[key];
    }
  }
  return Plus; // A neutral default icon
};
