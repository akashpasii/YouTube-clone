import { Component } from "react";
import { Navigate,useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

class Login extends Component {
  state = {
    userName: "",
    password: "",
    formError: false,
  };

  onSubmitButton = async (event) => {
    event.preventDefault();
    const { userName, password } = this.state;
    const ad = {
      userName: "rahul",
      password: "rahul@2026",
    };

    if (userName == ad.userName && password === ad.password) {
      this.props.navigate("/");
      Cookies.set("tName", "secure", { expires: 30 });
    } else {
      this.setState({
        formError: true,
      });
      console.log("invalid credentials");
    }
  };

  onUsername = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  onPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    const { userName, password, formError } = this.state;
    const ad = Cookies.get("tName");
    if (ad !== undefined) {
      return <Navigate to="/" replace />;
    }
    console.log(ad);
    return (
      <>
        <div className="flex justify-center items-center bg-black text-white px-4 h-screen w-full">
          <form
            className="w-full h-[60vh] lg:w-[40%]"
            onSubmit={this.onSubmitButton}
          >
            <h1 className="text-2xl font-semibold mb-4">Login Page</h1>
            <div className="mb-2">
              <label htmlFor="userName" className="cursor-pointer">
                Name
              </label>
              <input
                type="text"
                placeholder="Username"
                onChange={this.onUsername}
                id="userName"
                value={userName}
                className="text-start border rounded px-2 py-1 mt-1 outline-none w-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="cursor-pointer">
                Password
              </label>
              <input
                type="Password"
                placeholder="Password"
                onChange={this.onPassword}
                id="password"
                value={password}
                className="text-start border rounded px-2 py-1 mt-1 outline-none w-full"
              />
            </div>
            {formError && (
              <p className="text-red-600 text-lg mt-1">Invalid UserName</p>
            )}
            <div className="flex justify-start mt-4">
              <button
                className="bg-amber-50 text-black px-4 py-1 font-medium rounded-sm cursor-pointer active:scale-98"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default function WithNavigate(props) {
  const navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
}
