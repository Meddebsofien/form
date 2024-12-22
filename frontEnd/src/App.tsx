
import './App.css'
import Formulaire from './components/form'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UsersList from './components/user_list';

function App() {

  return (
    <>
      
       
       <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<Formulaire />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
