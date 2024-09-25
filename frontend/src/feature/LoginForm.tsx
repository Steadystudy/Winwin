'use client';

import { gql, useMutation } from '@apollo/client';
import { isLoggedInVar } from 'provider/ApolloProvider';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PAGE_URL } from 'constants/url';
import { LoginMutation } from '__generated__/graphql';

const LOGIN_MUTATION = gql`
  mutation login($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      token
      error
    }
  }
`;

export default function LoginForm() {
  const router = useRouter();

  const [name, setName] = useState('');
  const onCompleted = (data: LoginMutation) => {
    const {
      login: { ok, token, error },
    } = data;
    if (ok && token) {
      isLoggedInVar(true);
      router.push(PAGE_URL.HOME);
    }
  };
  const [loginMuation, { loading, data: loginResult }] = useMutation<LoginMutation>(
    LOGIN_MUTATION,
    {
      onCompleted,
    },
  );

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loading) {
      loginMuation({
        variables: {
          loginInput: {
            name,
          },
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
      <button>submit</button>
    </form>
  );
}
