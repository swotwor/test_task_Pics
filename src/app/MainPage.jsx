import style from './index.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCommentsFromServer } from '../logic/logic';
import Comments from './components/comments/Comments';
import SendForm from './components/sendForm/SendForm';

const MainPage = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        getCommentsFromServer(dispatch)
    }, []);

    return (
        <div className={style.wrapperApp}>
            <Comments />
            <SendForm />
        </div>
    );
};

export default MainPage;
