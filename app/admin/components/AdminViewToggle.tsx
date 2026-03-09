"use client";

import React from 'react';
import { FaList, FaThLarge } from 'react-icons/fa';

interface AdminViewToggleProps {
    view: 'table' | 'card';
    onViewChange: (view: 'table' | 'card') => void;
}

export default function AdminViewToggle({ view, onViewChange }: AdminViewToggleProps) {
    return (
        <div className="flex items-center bg-gray-50 p-1 rounded-xl border border-gray-200 shadow-sm">
            <button
                onClick={() => onViewChange('table')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 ${view === 'table'
                        ? 'bg-white text-violet-600 shadow-sm border border-violet-100'
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                    }`}
                title="Tampilan Tabel"
            >
                <FaList size={14} />
                <span className="text-xs font-semibold font-montserrat hidden md:block">Tabel</span>
            </button>
            <button
                onClick={() => onViewChange('card')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 ${view === 'card'
                        ? 'bg-white text-violet-600 shadow-sm border border-violet-100'
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                    }`}
                title="Tampilan Card"
            >
                <FaThLarge size={14} />
                <span className="text-xs font-semibold font-montserrat hidden md:block">Card</span>
            </button>
        </div>
    );
}
