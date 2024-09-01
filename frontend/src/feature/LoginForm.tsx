'use clinet';

import { gql, useMutation } from '@apollo/client';
import { LOCALSTORAGE_TOKEN } from '../constants';
import { authTokenVar, isLoggedInVar } from 'provider/ApolloProvider';
import { useState } from 'react';

const LOGIN_MUTATION = gql`
  mutation loginMuation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      token
      error
    }
  }
`;

export default function LoginForm() {
  const [name, setName] = useState('');
  // loginMutation 타입
  const onCompleted = (data: any) => {
    const {
      login: { ok, token },
    } = data;
    if (ok && token) {
      localStorage.setItem(LOCALSTORAGE_TOKEN, token);
      authTokenVar(token);
      isLoggedInVar(true);
    }
  };
  const [loginMuation, { loading, data: loginResult }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  const onSubmit = () => {
    if (!loading) {
      loginMuation({
        variables: {
          name,
        },
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </form>
  );
}
