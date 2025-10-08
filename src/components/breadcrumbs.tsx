'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type BreadcrumbSegment = {
  name: string;
  path?: string;
};

type BreadcrumbsProps = {
  segments: BreadcrumbSegment[];
  className?: string;
};

export function Breadcrumbs({ segments, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('mb-8', className)}>
      <ol className="flex items-center space-x-1 text-sm text-muted-foreground">
        {segments.map((segment, index) => (
          <li key={segment.name} className="flex items-center space-x-1">
            {segment.path ? (
              <Link href={segment.path} className="hover:text-primary transition-colors">
                {segment.name}
              </Link>
            ) : (
              <span className="font-medium text-foreground">{segment.name}</span>
            )}
            {index < segments.length - 1 && <ChevronRight className="h-4 w-4" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
