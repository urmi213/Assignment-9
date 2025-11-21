// src/pages/UpdateProfile.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

export default function UpdateProfile() {
  const { currentUser, updateUserProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: currentUser.displayName || '',
    photoURL: currentUser.photoURL || ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await updateUserProfile({
        displayName: formData.name,
        photoURL: formData.photoURL
      });
      navigate('/my-profile');
    } catch (error) {
      setError('Failed to update profile: ' + error.message);
    }
    setLoading(false);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">Update Profile</h2>
          
          {error && (
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input 
                type="text" 
                name="name"
                placeholder="Your name" 
                className="input input-bordered"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input 
                type="url" 
                name="photoURL"
                placeholder="https://example.com/photo.jpg" 
                className="input input-bordered"
                value={formData.photoURL}
                onChange={handleChange}
              />
              <label className="label">
                <span className="label-text-alt">Leave empty to keep current photo</span>
              </label>
            </div>
            
            <div className="form-control mt-6">
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Updating...' : 'Update Profile'}
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <button 
              onClick={() => navigate('/my-profile')}
              className="btn btn-outline btn-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}