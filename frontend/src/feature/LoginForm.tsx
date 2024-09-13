'use client';

import { gql, useMutation } from '@apollo/client';
import { LOCALSTORAGE_TOKEN } from '../constants';
import { authTokenVar, isLoggedInVar } from 'provider/ApolloProvider';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PAGE_URL } from 'constants/url';

// const LOGIN_MUTATION = gql`
//   mutation login($loginInput: LoginInput!) {
//     login(input: $loginInput) {
//       ok
//       token
//       error
//     }
//   }
// `;

export default function LoginForm() {
  const router = useRouter();

  const [name, setName] = useState('');
  // const onCompleted = (data: LoginMutation) => {
  //   const {
  //     login: { ok, token, error },
  //   } = data;
  //   if (ok && token) {
  //     localStorage.setItem(LOCALSTORAGE_TOKEN, token);
  //     authTokenVar(token);
  //     isLoggedInVar(true);
  //   }
  // };
  // const [loginMuation, { loading, data: loginResult }] = useMutation<LoginMutation>(
  //   LOGIN_MUTATION,
  //   {
  //     onCompleted,
  //   },
  // );

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
        }),
        credentials: 'include', // 쿠키를 요청에 포함
      });

      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const { ok, token, error } = await response.json();

      if (ok && token) {
        // localStorage.setItem(LOCALSTORAGE_TOKEN, token);
        authTokenVar(token);
        isLoggedInVar(true);

        router.push(PAGE_URL.HOME);
      }
    } catch (error) {
      console.error(error);
    }

    // if (!loading) {
    //   loginMuation({
    //     variables: {
    //       loginInput: {
    //         name,
    //       },
    //     },
    //   });
    // }
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
