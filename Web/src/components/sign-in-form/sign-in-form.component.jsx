import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email.");
          break;

        case "auth/user-not-found":
          alert("No account registered to that email.");
          break;

        default:
          alert("An unexpected error occurred. Please try again later");
          console.log(error);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
