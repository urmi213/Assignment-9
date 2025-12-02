import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100 shadow sticky top-0 z-50">
      <style>
        {`
          .navbar a, .navbar .link {
            text-decoration: none !important;
          }
          .navbar a:hover, .navbar .link:hover {
            text-decoration: none !important;
          }
        `}
      </style>

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">☰</div>
          <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/popular-games">Popular Games</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold">🎮 GameHub</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-6">
          <Link to="/" className="link no-underline">Home</Link>
          <Link to="/popular-games" className="link no-underline">Popular Games</Link>
          <Link to="/about" className="link no-underline">About</Link>
        </div>
      </div>

      <div className="navbar-end">
        {currentUser ? (
          <div className="flex items-center gap-2">
            <Link to="/my-profile" className="btn btn-ghost no-underline">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src={currentUser.photoURL || 'public/default.jpeg'} alt="User" />
                </div>
              </div>
              <span className="hidden sm:inline ml-2">
                {currentUser.displayName?.split(' ')[0] || 'Profile'}
              </span>
            </Link>
            <button 
              onClick={() => { logout(); navigate('/'); }} 
              className="btn btn-primary btn-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-primary no-underline">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline btn-primary no-underline">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
