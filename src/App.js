import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/authenticate/Authenticate';
import Activate from './pages/activate/Activate';
import Rooms from './pages/Rooms/Rooms';
import Room from './pages/Room/Room';
import { useSelector } from 'react-redux';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
import Loader from './components/shared/Loader/Loader';

function App() {

  const { loading } = useLoadingWithRefresh();

  return (loading) ? (
    <Loader message="Loading, please wait.." />
  ):(
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<GuestRoute><Home /></GuestRoute>} />
        <Route path="/authenticate" element={<GuestRoute><Authenticate /></GuestRoute>} />
        <Route path="/activate" element={<SemiProtectedRoute><Activate /></SemiProtectedRoute>} />
        <Route path="/rooms" element={<ProtectedRoute><Rooms /></ProtectedRoute>} />
        <Route path="/room/:id" element={<ProtectedRoute><Room /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Navigate to="/rooms" replace /> : children;
};

const SemiProtectedRoute = ({ children }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  if (!isAuth) {
    return <Navigate to="/" replace />;
  } else if (isAuth && user && !user.activated) {
    return children;
  } else {
    return <Navigate to="/rooms" replace />;
  }
};

const ProtectedRoute = ({ children }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  if (!isAuth) {
    return <Navigate to="/" replace />;
  } else if (isAuth && user && !user.activated) {
    return <Navigate to="/activate" replace />;
  } else {
    return children;
  }
};

export default App;