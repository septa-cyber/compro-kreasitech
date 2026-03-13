"use client";

import { useState, useRef, useEffect, ReactNode } from 'react';

interface TruncatableTextProps {
    text: string;
    onReadMore: () => void;
    className?: string; // Standard text classes without line-clamp
    clampClass?: string; // e.g., "line-clamp-[8] md:line-clamp-[10] lg:line-clamp-[12]"
}

export default function TruncatableText({ 
    text, 
    onReadMore, 
    className = "", 
    clampClass = "line-clamp-[8] md:line-clamp-[10] lg:line-clamp-[12]" 
}: TruncatableTextProps) {
    const [isTruncated, setIsTruncated] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkTruncation = () => {
            if (textRef.current) {
                // If the element's scrollHeight (total height of content) 
                // is greater than its clientHeight (visible height), it is truncated.
                const { scrollHeight, clientHeight } = textRef.current;
                
                // Add a small buffer (2px) to prevent false positives due to subpixel rendering
                setIsTruncated(scrollHeight > clientHeight + 2);
            }
        };

        // Check initially
        checkTruncation();

        // Re-check on window resize because line count limits change (8 vs 10 vs 12)
        window.addEventListener('resize', checkTruncation);
        
        // Also observe layout shifts if fonts load late
        if ('ResizeObserver' in window && textRef.current) {
            const observer = new ResizeObserver(checkTruncation);
            observer.observe(textRef.current);
            return () => {
                window.removeEventListener('resize', checkTruncation);
                observer.disconnect();
            };
        }

        return () => window.removeEventListener('resize', checkTruncation);
    }, [text, clampClass]);

    return (
        <div className="self-stretch flex-1 font-body-lg text-gray-700 group-hover:text-white transition-colors duration-300 flex flex-col items-start w-full">
            <div 
                ref={textRef} 
                className={`${clampClass} ${className} w-full`}
            >
                {text}
            </div>
            
            {/* Visibility hidden trick: we always render the button if we MIGHT need it to reserve space, 
                or we conditionally render it. Conditional rendering is requested. */}
            {isTruncated && (
                <button
                    onClick={onReadMore}
                    className="inline-flex items-center gap-2 mt-2 text-violet-600 font-btn group-hover:text-white transition-all group/btn w-fit"
                >
                    Baca Selengkapnya
                    <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                </button>
            )}
        </div>
    );
}
