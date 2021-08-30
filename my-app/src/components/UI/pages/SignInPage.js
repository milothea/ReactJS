import './SignInPage.css';

const SignInPage = () => {
    return (
      <div className='sign-in-page'>
          <div className='sign-in__container'>
              <h2 className='sign-in__heading'>Sign into your account</h2>
              <fieldset className='sign-in__fieldset'>
                  <legend className='sign-in__legend'>Username</legend>
                  <input className='sign-in__input' type='text'/>
              </fieldset>
              <fieldset className='sign-in__fieldset'>
                  <legend className='sign-in__legend'>Password</legend>
                  <input className='sign-in__input' type='password'/>
              </fieldset>
              <button className='sign-in-page__btn'>Sign in</button>
          </div>
      </div>
    );
}

export default SignInPage;
