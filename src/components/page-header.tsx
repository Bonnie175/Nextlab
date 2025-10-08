'use client';

import React from 'react';

export const KenyanFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-12 h-8 mr-4 rounded">
        <rect width="900" height="600" fill="#000"/>
        <rect y="200" width="900" height="200" fill="#fff"/>
        <rect y="225" width="900" height="150" fill="#922529"/>
        <rect y="400" width="900" height="200" fill="#008000"/>
        <path d="M450 150a150 150 0 100 300 150 150 0 000-300zm0 30a120 120 0 110 240 120 120 0 010-240z" fill="#fff"/>
        <path d="M450 160a140 140 0 100 280 140 140 0 000-280z" fill="#922529"/>
        <path d="M450 180a120 120 0 100 240 120 120 0 000-240z" fill="#fff"/>
        <g fill="#000">
        <path d="M450 210a90 90 0 100 180 90 90 0 000-180z"/>
        <circle cx="450" cy="300" r="15"/>
        <path d="M435 240h30l-15-30zm0 120h30l-15 30z"/>
        </g>
    </svg>
);


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
