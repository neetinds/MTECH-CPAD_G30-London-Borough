import react, {Component} from "react";
import LoginComponent from "./login/LoginComponent";
import WelcomeComponent from "./welcome/WelcomeComponent";
import ListBoroughs from "./listboroughs/Listboroughs";
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import HeaderComponent from "./header/HeaderComponent";
import FooterComponent from "./footer/FooterComponent";
import LogoutComponent from "./logout/LogoutComponent";


class BoroughApp extends Component{

    render(){
        return(
            <div className="BoroughApp">
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                    <Route path = "/" exact component={LoginComponent}/>
                    <Route path = "/login" component={LoginComponent}/>
                    <Route path = "/welcome/:username" component={WelcomeComponent}/>
                    <Route path = "/listboroughs" component={ListBoroughs}/>
                    <Route path = "/logout" component={LogoutComponent}/>
                    <Route  component={ErrorPage}/>
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
              
                <br/>
                <br/><br/><br/>
            </div>
        )
    }

}

function ErrorPage(){
    return <div>Page Not Found. Contact Support</div>
}

export default BoroughApp;