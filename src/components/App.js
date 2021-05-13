//components
import Signup from '../components/Signup'
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
                            <Route path='/signup' component={Signup} />
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>
        </Container>
    );
}

export default App;
