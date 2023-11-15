import { useRef } from "react";
import { toast } from "react-toastify";

function Login() {
  const email = useRef();
  const password = useRef();
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const handleSignIn = (e) => {
    if (
      email.current.value == localEmail &&
      password.current.value == localPassword
    ) {
      e.preventDefault();
      localStorage.setItem("signUp", email.current.value);
      toast.success("Logged In Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      e.preventDefault();
      toast.error("Incorrect username or password !!!");
    }
  };
  return (
    <div>
      <form className="h-[90vh] flex flex-col gap-3 items-center justify-center">
        <div className="flex flex-col gap-3 items-center justify-center border p-10 rounded-2xl">
          <h1 className="text-3xl">Log In</h1>
          <div className="border rounded-md">
            <input
              className="input"
              placeholder="Username"
              type="text"
              ref={email}
            />
          </div>
          <div className="border rounded-md">
            <input
              className="input"
              placeholder="Password"
              type="password"
              ref={password}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSignIn}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
