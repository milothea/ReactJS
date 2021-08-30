import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <h1 className='error-page__heading'>Error 404</h1>
            <h2 className='error-page__subheading'>Oops!.. This page doesn't exist</h2>
            <button className='error-page__btn'>Back to home page</button>
        </div>
    )
};

export default ErrorPage;
