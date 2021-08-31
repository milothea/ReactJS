import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../../data/app-context';
import './SignInPage.css';
import Input from '../Input';
import useInput from '../../hooks/use-input';

const SignInPage = () => {
    const context = useContext(AppContext);
    const history = useHistory();
    const {
        value: usernameValue,
        isValid: isUsernameValid,
        hasError: usernameHasError,
        inputChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
        resetHandler: resetUsername
    } = useInput(value => (/^[a-z0-9!#$%&'*+-/=?^_`{|}~.]+@[a-z]{2,}[.][a-z]{2,}$/gi).test(value));
    const {
        value: passwordValue,
        isValid: isPasswordValid,
        hasError: passwordHasError,
        inputChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        resetHandler: resetPassword
    } = useInput(value => (/^[a-z0-9]{8,}$/gi).test(value) && (/[0-9]+/g).test(value));
    const isDataValid = isUsernameValid && isPasswordValid;

    const submitHandler = (event) => {
        event.preventDefault();
        sessionStorage.setItem(usernameValue, passwordValue);
        resetUsername();
        resetPassword();
        context.onSignIn();
        history.replace('/');
    }

    return (
      <div className='sign-in-page'>
          <form className='sign-in__container'
                onSubmit={submitHandler}>
              <h2 className='sign-in__heading'>Sign into your account</h2>
              <Input type='text'
                     legend='Username'
                     isValid={!usernameHasError}
                     onChange={usernameChangeHandler}
                     onBlur={usernameBlurHandler}
              />
              <p className='error-message'>
                  { usernameHasError ?
                      'Username must not be empty and must be a valid email address'
                      :
                      ''
                  }
              </p>
              <Input type='password'
                     legend='Password'
                     isValid={!passwordHasError}
                     onChange={passwordChangeHandler}
                     onBlur={passwordBlurHandler}
              />
              <p className='error-message'>
                  { passwordHasError ?
                      'Password must not be empty and must contain number(s) and letters'
                      :
                      ''
                  }
              </p>
              <button className={`sign-in-page__btn ${isDataValid ? '' : 'disabled'}`}
                      disabled={!isDataValid}
                      onSubmit={submitHandler}>Sign in</button>
          </form>
      </div>
    );
}

export default SignInPage;
