/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  accountBalance: Scalars['Int']['output'];
  accountNo: Scalars['String']['output'];
  bankCode: Scalars['String']['output'];
  bankName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dailyTransferLimit: Scalars['Int']['output'];
  expiredAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  isPrimary: Scalars['Boolean']['output'];
  oneTimeTransferLimit: Scalars['Int']['output'];
  owner: User;
  updatedAt: Scalars['DateTime']['output'];
};

export type Bet = {
  __typename?: 'Bet';
  DepositComplete: Scalars['Boolean']['output'];
  bettedMembers: Array<Scalars['Int']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  creator: User;
  id: Scalars['Float']['output'];
  judge: User;
  membersJoined: Array<User>;
  result: Scalars['String']['output'];
  status: BetStatus;
  teamOne: Array<Scalars['Int']['output']>;
  teamTwo: Array<Scalars['Int']['output']>;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum BetStatus {
  Betted = 'Betted',
  Betting = 'Betting',
  Canceled = 'Canceled',
  Done = 'Done'
}

export type CreateBetInput = {
  content: Scalars['String']['input'];
  creatorId: Scalars['Int']['input'];
  judgeId: Scalars['Int']['input'];
  teamOne: Array<Scalars['Int']['input']>;
  teamTwo: Array<Scalars['Int']['input']>;
  totalAmount: Scalars['Int']['input'];
};

export type CreateBetOutput = {
  __typename?: 'CreateBetOutput';
  bet?: Maybe<Bet>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateFriendsInput = {
  id: Scalars['Float']['input'];
};

export type CreateFriendsOutput = {
  __typename?: 'CreateFriendsOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateUserInput = {
  name: Scalars['String']['input'];
  profileImg?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type FindUserInput = {
  name: Scalars['String']['input'];
};

export type JudgeBetInput = {
  betId: Scalars['Int']['input'];
  judgeId: Scalars['Int']['input'];
  result: Scalars['String']['input'];
};

export type LoginInput = {
  name: Scalars['String']['input'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBet: CreateBetOutput;
  createFriends: CreateFriendsOutput;
  createUser: CreateUserOutput;
  judgeBet: CreateBetOutput;
  login: LoginOutput;
  sendMoney: SendMoneyOutput;
};


export type MutationCreateBetArgs = {
  input: CreateBetInput;
};


export type MutationCreateFriendsArgs = {
  input: CreateFriendsInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationJudgeBetArgs = {
  input: JudgeBetInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationSendMoneyArgs = {
  input: SendMoneyInput;
};

export type PendingBet = {
  __typename?: 'PendingBet';
  bet: Bet;
  role: Roles;
};

export type Query = {
  __typename?: 'Query';
  bets: Array<Bet>;
  findUser: User;
  getUserWithFriends: User;
  me: User;
};


export type QueryFindUserArgs = {
  input: FindUserInput;
};

export enum Roles {
  Creator = 'CREATOR',
  Judge = 'JUDGE',
  Participant = 'PARTICIPANT'
}

export type SendMoneyInput = {
  betId: Scalars['Int']['input'];
  money: Scalars['Int']['input'];
};

export type SendMoneyOutput = {
  __typename?: 'SendMoneyOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  betResult: Bet;
  betted: Bet;
  canceled: Bet;
  pendingBet: PendingBet;
};

export type User = {
  __typename?: 'User';
  account?: Maybe<Array<Account>>;
  betsCreated?: Maybe<Array<Bet>>;
  betsJoined?: Maybe<Array<Bet>>;
  betsJudged?: Maybe<Array<Bet>>;
  createdAt: Scalars['DateTime']['output'];
  friends?: Maybe<Array<User>>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  profileImg?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', ok: boolean, token?: string | null, error?: string | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: number, createdAt: any, updatedAt: any, name: string, profileImg?: string | null, betsCreated?: Array<{ __typename?: 'Bet', id: number }> | null, friends?: Array<{ __typename?: 'User', id: number, createdAt: any, updatedAt: any, name: string, profileImg?: string | null }> | null } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}},{"kind":"Field","name":{"kind":"Name","value":"betsCreated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"friends"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;