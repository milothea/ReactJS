import { Link } from 'react-router-dom';
import AppContext from '../../../data/app-context';
import './ErrorPage.css';
import {useContext} from "react";

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <h1 className='error-page__heading'>Error 404</h1>
            <h2 className='error-page__subheading'>Oops!.. This page doesn't exist</h2>
            <Link className='error-page__btn'
                  to={useContext(AppContext).paths.mainPage}>Back to home page</Link>
        </div>
    )
};

export default ErrorPage;
