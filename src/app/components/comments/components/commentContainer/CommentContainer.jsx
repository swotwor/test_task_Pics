import style from './index.module.scss';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../../../../logic/logic';

const CommentContainer = ({item}) => {
    const dispatch = useDispatch();
    const {id, body, user} = item;

    const handleClickOnButton = () => {
        deleteComment(id, dispatch);
    }
    
    return (
        <div className={style.wrapper}>
            <p className={style.userName}>{user.username}</p>
            <p>{body}</p>
            <div className={style.deleteButton} onClick={handleClickOnButton}>&times;</div>
        </div>
    );
};

export default CommentContainer;