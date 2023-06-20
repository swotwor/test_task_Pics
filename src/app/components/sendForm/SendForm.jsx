import style from './index.module.scss';
import { useState } from 'react';
import { sendComment } from '../../../logic/logic';
import { useDispatch, useSelector } from 'react-redux';

const SendForm = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.commentsState.comments);
    const lastIdComment = comments[comments.length - 1]?.id;
    const [textAreaState, setTextAreaState] = useState(localStorage.getItem('comment') || '');

    const handleChange = (e) => {
        setTextAreaState(e.target.value);
        localStorage.setItem('comment', e.target.value)
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (textAreaState) {
            sendComment(textAreaState, lastIdComment, dispatch, setTextAreaState);
        }
    };

    return (
        <div className={style.wrapper}>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={textAreaState}
                    onChange={handleChange}
                    placeholder="Input message..."
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default SendForm;
