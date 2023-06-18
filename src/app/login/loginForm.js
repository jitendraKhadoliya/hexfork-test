'use client';

import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
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
import Axios from 'axios';

export function LoginForm(props) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Send login data to the backend
  const login = async (e) => {
    e.preventDefault();

    await Axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: formData,
      withCredentials: true,
      url: '/login',
    })
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem('Authorization', `Bearer ${res.data}`);
        router.push('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
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
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={login}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Dont have an account?{' '}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
