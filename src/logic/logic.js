import ky from 'ky';
import {
    addCommet,
    saveCommentsToState,
    deleteCommentFromTheState,
} from '../store/store';

export const getCommentsFromServer = async (dispatch) => {
    try {
        const res = await ky.get('https://dummyjson.com/comments').json();
        dispatch(saveCommentsToState(res));
    } catch (err) {
        alert(err);
    }
};

export const deleteComment = async (commentId, dispatch) => {
    try {
        const res = await ky
            .delete(`https://dummyjson.com/comments/${commentId}`)
            .json();

        if (res.isDeleted) {
            dispatch(deleteCommentFromTheState(commentId));
        }
    } catch (err) {
        alert(err);
    }
};

export const sendComment = async (textComment, lastIdComment, dispatch, setTextAreaState) => {
    try {
        const res = await ky
            .post('https://dummyjson.com/comments/add', {
                json: {
                    body: textComment,
                    postId: 3,
                    userId: 5,
                },
            })
            .json();
        dispatch(addCommet({...res, id:lastIdComment + 1}));
        localStorage.removeItem('comment');
        setTextAreaState('');
    } catch (err) {
        alert(err);
    }
};