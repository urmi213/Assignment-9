import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const { signup, updateUserProfile, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => 
    setForm({ ...form, [e.target.name]: e.target.value });

  const validatePassword = pwd =>
    /[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && pwd.length >= 6;

  const handleSubmit = async e => {
    e.preventDefault();

    if (form.password !== form.confirmPassword)
      return setError('Passwords do not match');

    if (!validatePassword(form.password))
      return setError('Password must contain uppercase, lowercase letters and at least 6 chars');

    try {
      setError('');
      setLoading(true);

      
      await signup(form.email, form.password);

     
      await updateUserProfile({
        displayName: form.name,
        photoURL: form.photoURL.trim() || 'public/default.jpeg'
      });

      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setGoogleLoading(true);

      const result = await googleSignIn();
      const user = result.user;

      console.log("Google Photo:", user.photoURL); 

     

      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 bg-gray-900">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl mb-4">Join GameHub</h2>

          {error && <div className="alert alert-error">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-3">
            <input 
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input 
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input 
              name="photoURL"
              type="url"
              placeholder="Photo URL (optional)"
              className="input input-bordered w-full"
              value={form.photoURL}
              onChange={handleChange}
            />

            <input 
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={form.password}
              onChange={handleChange}
              required
            />

            <input 
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Creating Account...
                </>
              ) : 'Sign Up'}
            </button>
          </form>

          <div className="divider">OR</div>

          <button 
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full gap-2"
            disabled={googleLoading}
          >
            {googleLoading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Signing in...
              </>
            ) : (
              <>
                <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
                  <span className="text-lg font-bold text-red-500">G</span>
                </div>
                Sign up with Google
              </>
            )}
          </button>

          <p className="text-center mt-4 text-sm text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
