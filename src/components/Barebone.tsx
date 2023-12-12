import React from 'react';
import logo from './logo.svg';
import './barebone.css';

export const Barebone = () => {
    return (
        <div className="barebone">
            <header className="barebone-header">
                <img src={logo} className="barebone-logo" alt="logo" />
            </header>
        </div>
    );
}
