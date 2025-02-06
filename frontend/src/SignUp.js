export default function SignUp({ goBack, goToDashboard }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    goToDashboard(); // Navigate to Dashboard
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={goBack}>Back</button>
    </div>
  );
}
