import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'node',
    initialState: {
        node: '',
        isClicked: false,
    },
    reducers: {
        changeNode(state, {payload}) {
            return {...state, isClicked: true, node: payload}
        },
        undoChange(state) {
            return {...state, isClicked: false}
        }

    }
})

export const {changeNode, undoChange} = slice.actions;

export const selectNode = state => state.node;

export default slice.reducer;