 import React,{Component} from "react";
 import { Link } from 'react-router-dom'
 import AuthenticationService from './../../../AuthenticationService.js'


// class HeaderComponent extends Component{

   

//     render(){
//        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
//         console.log("User Logged in ==> "+isUserLoggedIn);
//         return(
//             <header>
//                 <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
//                 <div><a href="http://www.in28minutes.com" className="navbar-brand">Cross Platform Assignment</a></div>
//                  <ul className= "navbar-nav">
//                       <li><Link className="nav-link" to="/welcome/cpad_grp30">Home</Link></li>
//                  </ul>
//                 <ul className="navbar-nav navbar-collapse justify-content-end">
//                         {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
//                         <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>
//                 </ul>
//                 </nav>
//             </header>
            
//         )
//     }
// }
// export default HeaderComponent;




class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="www.google.com" className="navbar-brand">CPAD Assignment</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/cpad_grp30">Home</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent