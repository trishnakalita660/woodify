import React, {useState} from 'react';
 

function FormLogin({LoginCredentials,error}) {

 const [details,setDetails] = useState({email:"", password:""})
const submit = e=>{
  e.preventDefault();
  LoginCredentials(details);
}
    return (
        <div className="login__form">
       
      <form onSubmit={submit} >
      <div className="form-inner">
      
        <div className="form-group">
          <label htmlFor="email"> USER ID: </label>
          <br/>
           <input type="text" name="email" id="email" onChange= {e=>setDetails({...details, email: e.target.value})} value={details.email} />
          </div>

        <div className="form-group">
      
          <label htmlFor="password"> PASSWORD: </label>
          <br/>
          <input type="password" name="password" id="password" onChange={e=>setDetails({...details, password:e.target.value})} value={details.password}/>
        </div>
        <div  >
          <button className="form__button" onClick={submit}> LOGIN </button>
        </div>
        <div className="forgot" ><a href="#">Forgot Password ?</a>
        </div>
        <div className="new" ><a href="#">New Account ?</a>
        </div>
         
       <br/>  
       
      
      </div>
      </form>
        </div>
    )
}

export default FormLogin
