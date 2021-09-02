import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ErrorPage.css';

const ErrorPage = () => {
    const paths = useSelector(state => state.settings.appPaths);

    return (
        <div className='error-page'>
            <h1 className='error-page__heading'>Error 404</h1>
            <h2 className='error-page__subheading'>Oops!.. This page doesn't exist</h2>
            <Link className='error-page__btn'
                  to={paths.mainPage}>Back to home page</Link>
        </div>
    )
};

export default ErrorPage;
