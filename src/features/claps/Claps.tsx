import React from 'react';
import { useAppSelector } from '../../app/hooks';

import { selectClaps } from './clapsSlice';

export const Claps = () => {
    const claps = useAppSelector(selectClaps);

    return (
        <ul>
            {claps.map((clap) => {
                const { id, text } = clap;
                return <li title={id} key={id}>{text}</li>
            })}
        </ul>
    );
}