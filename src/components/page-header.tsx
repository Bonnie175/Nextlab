'use client';

import React from 'react';

interface PageHeaderProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
    return (
        <header className="text-center py-16 md:py-24 bg-card border-b">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    {children}
                    <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
                        {title}
                    </h1>
                </div>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    {description}
                </p>
            </div>
      </header>
    );
}
