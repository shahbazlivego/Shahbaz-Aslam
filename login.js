export default function Login() {
  return (
    <div style={{ padding: 20 }}>
      <h1>User Login</h1>
      <form>
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button>Login</button>
      </form>
    </div>
  );
}