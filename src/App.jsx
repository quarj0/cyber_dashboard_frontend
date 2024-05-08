
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './Layouts/Dashboard';
import IncidentDashboard from './components/IncidentDashboard';
import ThreatsDashboard from './components/ThreatsDashboard';
import ReportsDashboard from './components/ReportsDashboard';
import SettingsDashboard from './components/SettingsDashboard.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route exact path="/incidents" Component={IncidentDashboard} />
        <Route exact path="/threats" Component={ThreatsDashboard} />
        <Route exact path="/reports" Component={ReportsDashboard} />
        <Route exact path="/settings" Component={SettingsDashboard} />
      </Routes>
    </Router>
  );
};

export default App;
