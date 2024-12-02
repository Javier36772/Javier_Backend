import React from 'react';

function Login() {
  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Login</h2>
        <form>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>correo</label>
            <input
              type="email"
              id="email"
              placeholder="e.g. jane.doe@example.com"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>contraseña</label>
            <input
              type="password"
              id="password"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.loginButton}>
            Login
          </button>
        </form>
        <div style={styles.loginFooter}>
          <a href="#" style={styles.link}></a>
          <a href="#" style={styles.link}></a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f4f4f4',
    margin: 0,
  },
  loginBox: {
    backgroundColor: '#d9d9d9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '20px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  loginButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#e63946',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  loginFooter: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    fontSize: '12px',
    color: '#333',
  },
};

export default Login;