import React from 'react';

import styles from './Header.module.css'

export interface HeaderProps {
    title: string;
}

export const Header = (props: HeaderProps) => {
    return (
        <div className={styles['app-title']}>
            <h1>
                {props.title}
            </h1>
        </div>
    );
}