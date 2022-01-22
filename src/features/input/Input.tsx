import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";

import { add } from "../claps/clapsSlice";

export interface InputProps {
    placeholder?: string;
}

export const Input = (props: InputProps) => {
    const [value, setValue] = useState('');

    const dispatch = useAppDispatch();

    const addClap = (text: string) => {
        dispatch(add(text));
    }

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                addClap(value);
                setValue('');
            }}>
                <input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={props.placeholder}>
                </input>
                <button>
                    Submit
                </button>
            </form>
        </div>
    );
}