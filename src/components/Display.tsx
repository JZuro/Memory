import './styles/Display.css';
import type { ReactNode } from 'react';

export default function Display({ children }: { children: ReactNode }) {
    return (
        <div>
            <div id="display">
                {children}
            </div>
        </div>
    );
}

