import React from "react";
class UserSignupPage extends React.Component{
    render(){
        const newLocal = 'password';
        return(
            <form>
<div>
    <h1>Sign Up</h1>
    <div><label>User Name</label>
    <input/>
    </div>
    <div>
    <label>Display Name</label>
    <input/>
    </div>
    <div>
    <label>Password</label>
    <input type={newLocal}/>
    </div>
    <div>
    <label>Password Repeat</label>
    <input type='password'/>
    </div>
    <div>
        <button>Sign Up</button>
    </div>
</div>
</form>
        );
    }
}


export default UserSignupPage;