// components
import Signup from '../components/Signup'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import UpdateProfile from '../components/UpdateProfile'
// private route
import PrivateRoute from '../components/PrivateRoute'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// styled components
import styled from 'styled-components'
import '../styles/global.css'
// Auth Context
import AuthProvider from '../contexts/AuthContext'


const Container = styled.div`
    max-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;  

    .container {
        max-width: 400px;
    }
`

function App() {
    return (
        <Container>
            <div className="container">
                <Router>
                    <AuthProvider>
                        <Switch>
                            <PrivateRoute exact path='/' component={Dashboard} />
                            <PrivateRoute exact path='/update-profile' component={UpdateProfile} />
                            <Route path='/signup' component={Signup} />
                            <Route path='/login' component={Login} />
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>
        </Container>
    );
}

export default App;
