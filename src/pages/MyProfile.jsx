// src/pages/MyProfile.jsx
import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';

export default function MyProfile() {
  const { currentUser } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">My Profile</h2>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img 
                  src={currentUser.photoURL || 'public/default.jpeg'} 
                  alt="Profile" 
                  onError={(e) => {
                    e.target.src = 'public/default.jpeg';
                  }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{currentUser.displayName || 'No Name'}</h3>
              <p className="text-gray-600">{currentUser.email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Display Name</span>
              </label>
              <p className="text-lg">{currentUser.displayName || 'Not set'}</p>
            </div>
            
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <p className="text-lg">{currentUser.email}</p>
            </div>
            
            <div>
              <label className="label">
                <span className="label-text font-semibold">Account Created</span>
              </label>
              <p className="text-lg">
                {currentUser.metadata?.creationTime 
                  ? new Date(currentUser.metadata.creationTime).toLocaleDateString()
                  : 'Unknown'
                }
              </p>
            </div>
          </div>

          <div className="card-actions justify-end mt-6">
            <Link to="/update-profile" className="btn btn-primary">
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}