import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { SignInComponent } from "./sign-in-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignInComponent>
      <h2>Already have an account?</h2>
      <span>Sing in with your email and password</span>
      <form onSubmit={(e) => handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
            type="button"
          >
            Google
          </Button>
        </div>
      </form>
    </SignInComponent>
  );
};

export default SignInForm;
