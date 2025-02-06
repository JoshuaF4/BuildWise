export default function SignIn({ goBack }) {
    return (
      <div className="form-container">
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submitA">Sign In</button>
        </form>
        <button className="back-btn" onClick={goBack}>
          Back
        </button>
      </div>
    );
  }