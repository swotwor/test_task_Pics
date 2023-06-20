import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comments: [],
};

export const slice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addCommet: (state, action) => {
            state.comments = [...state.comments, action.payload]
        },
        saveCommentsToState: (state, action) => {
            state.comments = action.payload.comments;
        },
        deleteCommentFromTheState: (state, action) => {
            const commentId = action.payload;
            state.comments = state.comments.filter((comment) => comment.id !== commentId);
        },
    },
});

export const {
    addCommet,
    saveCommentsToState,
    deleteCommentFromTheState,
} = slice.actions;

export default slice.reducer;
