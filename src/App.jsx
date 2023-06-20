import style from './index.module.scss';
import MainPage from './app/mainPage';

function App() {
    return (
        <div className={style.wrapper}>
            <MainPage />
        </div>
    );
}

export default App;
