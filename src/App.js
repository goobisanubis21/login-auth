import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";

function App() {
  return (
      <div className="App">
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <Router>
              <AuthProvider>
                <Switch>
                  <Route exact path ="/signup" component={Signup} />
                  <PrivateRoutes exact path ="/" component={Dashboard} />
                  <PrivateRoutes exact path = "/update-profile" component={UpdateProfile}/>
                  <Route exact path ="/login" component={Login} />
                  <Route exact path ="/forgot-password" component={ForgotPassword} />
                </Switch>
              </AuthProvider>
            </Router>
          </div>
        </Container>
      </div>
  );
}

export default App;
