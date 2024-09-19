'use client';

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from '@apollo/client';
import { LOCALSTORAGE_TOKEN } from '../constants';
import { PropsWithChildren } from 'react';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const token =
  typeof window !== 'undefined' ? window.localStorage.getItem(LOCALSTORAGE_TOKEN) : null;
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});
export const authTokenVar = makeVar(token);
export const isLoggedInVar = makeVar(Boolean(token));

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (message === 'Unauthorized') {
        // 사용자에게 로그아웃 처리 및 로그인 페이지로 리디렉션
        console.log('Unauthorized! Redirecting to login...');
        // 예: history.push('/login');
      }
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink).concat(errorLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
          token: {
            read() {
              return authTokenVar();
            },
          },
        },
      },
    },
  }),
  name: 'winwin',
});

const ApolloClientProvier = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvier;
