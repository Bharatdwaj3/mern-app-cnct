import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DiscoverMedia from './pages/DiscoverMedia';
import ImpPeople from './helpers/People/ImpPeople';
import PeopleDetails from './helpers/People/PeopleDetails';
import MDetails from './helpers/Movies_/MDetails';
import TV_Show_Details from './helpers/TV_shows/TV_Show_Details';
import NavBar from './components/NavBar';
import MForm from './pages/MForm'
import { Log_In, Register } from './profile';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mform" element={<MForm />} />
        <Route path="/mform/register" element={<Register />} />
        <Route path="/mform/log_in" element={<Log_In />} />
        <Route path="/discover/movies/:id" element={<MDetails />} />
        <Route path="/discover/tv_shows/:id" element={<TV_Show_Details />} />
        <Route path="/discover/*" element={<DiscoverMedia />} />
        <Route path="/imppeople" element={<ImpPeople />} />
        <Route path="/imppeople/:id" element={<PeopleDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
