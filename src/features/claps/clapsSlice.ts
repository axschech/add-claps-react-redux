import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Clap {
    text: string;
    id: string;
}

export interface ClapsState {
    claps: Clap[];
}

const initialState: ClapsState = {
    claps: []
}

export const clapsSlice = createSlice({
    name: 'claps',
    initialState,
    reducers: {
        add: {
            reducer(state, action: PayloadAction<Clap>) {
                state.claps.push(action.payload);
            },
            prepare(text: string) {
                return {
                    payload: {
                        id: nanoid(),
                        text
                    }
                }
            }
        }
    }
})

export const selectClaps = (state: RootState) => state.claps.claps;

export const { add } = clapsSlice.actions;

export default clapsSlice.reducer;