'use client'

import React, { createContext, useState, useMemo, ReactNode } from "react";

interface ContextType {
    themes: string;
    setThemes: (theme: string) => void;
    option: string;
    setOption: (option: string) => void;
}

const DEFAULT_VALUE: ContextType = {
    themes: '',
    setThemes: () => { },
    option: '',
    setOption: () => { }
};

export const GlobalContext = createContext<ContextType>(DEFAULT_VALUE);

export function GlobalProvider({ children }: { children: ReactNode }) {
    const [themes, setThemes] = useState<string>('light');
    const [option, setOption] = useState<string>('');
    const memoizedValue = useMemo(
        () => ({
            themes,
            setThemes,
            option,
            setOption
        }),
        [themes, option]
    );

    return (
        <GlobalContext.Provider value={memoizedValue}>
            {children}
        </GlobalContext.Provider>
    );
}