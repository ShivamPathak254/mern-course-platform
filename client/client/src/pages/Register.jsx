import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
  'https://mern-course-platform-2.onrender.com/api/auth/register',
  form
);

    alert('Registered successfully!');
    navigate('/login');
  } catch (err) {
    console.error(err.response?.data || err.message);
    alert('Registration failed!');
  }
};


  return (
    <div className={styles.registerContainer}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h2 className={styles.registerTitle}>Register</h2>
        
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Name</label>
          <input 
            type="text" 
            name="name" 
            className={styles.formInput}
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email</label>
          <input 
            type="email" 
            name="email" 
            className={styles.formInput}
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Password</label>
          <input 
            type="password" 
            name="password" 
            className={styles.formInput}
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Role</label>
          <select 
            name="role" 
            className={styles.formSelect}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>
        
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;