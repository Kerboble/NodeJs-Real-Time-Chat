import axios from 'axios'
import pen from "./assets/icons8-quill-pen-64.png"
import loginPhoto from "./assets/Rectangle 7592.png"

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();

      const { value } = e.target[0];
      
      axios.post(
        'http://localhost:3001/authenticate',
        {username: value}
      )
      .then(r => props.onAuth({...r.data, secret: value}))
      .catch(e => console.log('error', e))
    };
  
    return (
      <div className="background">
        <img src={loginPhoto} className='login-photo' />
        <form onSubmit={onSubmit} className="form-container">
          <div className="form-title"> <img src={pen} className='pen-logo' />PenPals</div>
          <div className="auth">
            <input className="auth-input" name="username" placeholder='First and Last Name' />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;