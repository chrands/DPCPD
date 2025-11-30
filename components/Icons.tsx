import React from 'react';
import { 
  Activity, 
  Dna, 
  FileText, 
  User, 
  Search, 
  ChevronRight, 
  Microscope, 
  FlaskConical, 
  Lock,
  ArrowRight,
  Menu
} from 'lucide-react';

// Consistent stroke width of 1.5px as per guidelines
const STROKE_WIDTH = 1.5;

export const Icons = {
  Activity: (props: any) => <Activity strokeWidth={STROKE_WIDTH} {...props} />,
  Dna: (props: any) => <Dna strokeWidth={STROKE_WIDTH} {...props} />,
  FileText: (props: any) => <FileText strokeWidth={STROKE_WIDTH} {...props} />,
  User: (props: any) => <User strokeWidth={STROKE_WIDTH} {...props} />,
  Search: (props: any) => <Search strokeWidth={STROKE_WIDTH} {...props} />,
  ChevronRight: (props: any) => <ChevronRight strokeWidth={STROKE_WIDTH} {...props} />,
  Microscope: (props: any) => <Microscope strokeWidth={STROKE_WIDTH} {...props} />,
  Flask: (props: any) => <FlaskConical strokeWidth={STROKE_WIDTH} {...props} />,
  Lock: (props: any) => <Lock strokeWidth={STROKE_WIDTH} {...props} />,
  ArrowRight: (props: any) => <ArrowRight strokeWidth={STROKE_WIDTH} {...props} />,
  Menu: (props: any) => <Menu strokeWidth={STROKE_WIDTH} {...props} />,
};