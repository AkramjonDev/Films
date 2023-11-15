import { useRef } from "react";
import { toast } from "react-toastify";

function SignUp() {
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    if (email.current.value && password.current.value) {
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      toast.success("Account created successfully!!");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };
  return (
    <div>
      <form className="h-[90vh] flex flex-col gap-3 items-center justify-center">
        <div className="flex flex-col gap-3 items-center justify-center border p-10 rounded-2xl">
          <h1 className="text-3xl">Sign Up</h1>
          <div className="border rounded-md">
            <input
              className="input"
              placeholder="Username"
              type="text"
              required
              ref={email}
            />
          </div>
          <div className="border rounded-md">
            <input
              className="input"
              placeholder="Password"
              type="password"
              required
              ref={password}
            />
          </div>
          <button className="btn btn-primary" onClick={handleClick}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
