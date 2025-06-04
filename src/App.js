import '@ant-design/v5-patch-for-react-19';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './component/page/login/LoginPage';
import DashboardPage from './component/page/dashboard/DashboardPage';
import HomePage from './component/page/home/HomePage';
import GeneralCodePage from './component/page/generalcode/GeneralCodePage';
import './App.css';


function App(){
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}>
            <Route path="/dashboard/home" element={<HomePage/>}/>
            <Route path="/dashboard/generalCode" element={<GeneralCodePage/>}/>
          </Route>
        </Routes>
      </Router>
    );

}

export default App;
