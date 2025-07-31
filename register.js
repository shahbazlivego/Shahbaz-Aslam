export default function Register() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Create an Account</h1>
      <form>
        <input type="text" placeholder="Full Name" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button>Register</button>
      </form>
    </div>
  );
}