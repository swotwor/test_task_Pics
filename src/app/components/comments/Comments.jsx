import style from './index.module.scss';
import { useSelector } from 'react-redux';
import CommentContainer from './components/commentContainer/CommentContainer';

const Comments = () => {
    const commentsState = useSelector(state => state.commentsState.comments);
    const lastTenComments = commentsState.slice(-10);

    return (
        <div className={style.wrapper}>
            {lastTenComments.length
                ? lastTenComments.map(item => {
                    return <CommentContainer key={item.id} item={item}/>
                })
                : <h1>No Comments!!</h1>
            }
        </div>
    );
};

export default Comments;