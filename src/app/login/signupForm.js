import React, { useContext } from 'react';
import { useState } from 'react';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from './common';
import { Marginer } from './marginer/marginer.jsx';
import { AccountContext } from './accountContext.js';
import { Axios } from 'axios';

export function SignupForm(props) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Send user data to the backend
  const register = async (e) => {
    e.preventDefault();

    await Axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: formData,
      withCredentials: true,
      url: '/register',
    })
      .then((res) => {
        console.log(res.data);
        switchToSignin();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer onSubmit={register}>
        <Input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={register}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
