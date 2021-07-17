import React from "react";
import { render } from "react-dom";
import Register from "./modules/users/components/register/register";

const App = () => <Register />;

render(<App />, document.getElementById("root"));
