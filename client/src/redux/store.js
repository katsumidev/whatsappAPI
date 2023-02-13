import { configureStore } from '@reduxjs/toolkit';
import nodeSlice from './nodeSlice';

export default configureStore({
    reducer: {
        node: nodeSlice
    }
})