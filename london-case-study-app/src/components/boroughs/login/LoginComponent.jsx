import react, {Component} from 'react';
import AuthenticationService from '../../../AuthenticationService.js';
import './LoginComponent.css';


class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoginSuccess: false,
            isLoginFailed : false
        }
     this.handleChangeEvent = this.handleChangeEvent.bind(this);
     this.loginClicked      = this.loginClicked.bind(this);
       
    }
    render(){
        return(
            <div>
                <h2>Login</h2>
            <div className="container">
                <ShowLoginFailed isLoginFailed = {this.state.isLoginFailed}/>
                User Name: <input  type = "text" name="username" onChange =  {this.handleChangeEvent}/><br/><br/>
                Password: <input  type = "password" name = "password" onChange = {this.handleChangeEvent}/><br/><br/>
                <button className= "btn btn-success" onClick = {this.loginClicked}>Sign In</button>
            </div>
            </div>
            
        )
    }

    handleChangeEvent(event){
        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    loginClicked(){
        if(this.state.username === 'cpad_grp30' && this.state.password === 'password'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            console.log("Is user logged in after clicking login button ===> "+AuthenticationService.isUserLoggedIn());
        this.props.history.push(`/welcome/${this.state.username}`);
        }
        else{
         console.log("Login Failed")
            this.setState({
                isLoginFailed: true
            })
        }
    }

  

     
    }

    function ShowLoginFailed(props){
        if(props.isLoginFailed){
            return <div>
                Invalid Credentials
            </div>
        }
        return null;
    }




export default LoginComponent;