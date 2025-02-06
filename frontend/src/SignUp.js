export default function SignUp({ goBack }) {
    return (
      <div className="form-container">
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }