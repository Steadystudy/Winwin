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
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dailyTransferLimit: Scalars['Int']['output'];
  expiredAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  isPrimary: Scalars['Boolean']['output'];
  oneTimeTransferLimit: Scalars['Int']['output'];
  owner: User;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Bet = {
  __typename?: 'Bet';
  DepositComplete: Scalars['Boolean']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  creator: User;
  id: Scalars['Float']['output'];
  judge: User;
  membersJoined?: Maybe<Array<User>>;
  result?: Maybe<Scalars['Float']['output']>;
  status: BetStatus;
  teams?: Maybe<Array<BetUser>>;
  title: Scalars['String']['output'];
  totalAmount: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum BetStatus {
  Betted = 'Betted',
  Betting = 'Betting',
  Canceled = 'Canceled',
  Done = 'Done'
}

export type BetUser = {
  __typename?: 'BetUser';
  account?: Maybe<Array<Account>>;
  betsCreated?: Maybe<Array<Bet>>;
  betsJoined?: Maybe<Array<Bet>>;
  betsJudged?: Maybe<Array<Bet>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  friends?: Maybe<Array<User>>;
  id: Scalars['Float']['output'];
  isBet: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  profileImg?: Maybe<Scalars['String']['output']>;
  team: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateBetInput = {
  content: Scalars['String']['input'];
  creatorId: Scalars['Int']['input'];
  judgeId: Scalars['Int']['input'];
  members: Array<MemberType>;
  title: Scalars['String']['input'];
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

export type GetBetInput = {
  betId: Scalars['Int']['input'];
};

export type GetBetOutput = {
  __typename?: 'GetBetOutput';
  bet: Bet;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type JudgeBetInput = {
  betId: Scalars['Int']['input'];
  judgeId: Scalars['Int']['input'];
  result?: InputMaybe<Scalars['Float']['input']>;
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

export type LogoutInput = {
  id: Scalars['Float']['input'];
};

export type LogoutOutput = {
  __typename?: 'LogoutOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type MemberType = {
  id: Scalars['Float']['input'];
  team: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBet: CreateBetOutput;
  createFriends: CreateFriendsOutput;
  createUser: CreateUserOutput;
  judgeBet: CreateBetOutput;
  login: LoginOutput;
  logout: LogoutOutput;
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


export type MutationLogoutArgs = {
  input: LogoutInput;
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
  getBetById: GetBetOutput;
  getUserWithFriends: User;
  me: User;
};


export type QueryFindUserArgs = {
  input: FindUserInput;
};


export type QueryGetBetByIdArgs = {
  input: GetBetInput;
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
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  friends?: Maybe<Array<User>>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  profileImg?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateBetMutationVariables = Exact<{
  createBetInput: CreateBetInput;
}>;


export type CreateBetMutation = { __typename?: 'Mutation', createBet: { __typename?: 'CreateBetOutput', ok: boolean, error?: string | null, bet?: { __typename?: 'Bet', id: number } | null } };

export type LogoutMutationVariables = Exact<{
  loginInput: LogoutInput;
}>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'LogoutOutput', ok: boolean, error?: string | null } };

export type OnPendingBetSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnPendingBetSubscription = { __typename?: 'Subscription', pendingBet: { __typename?: 'PendingBet', bet: { __typename?: 'Bet', id: number } } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', ok: boolean, token?: string | null, error?: string | null } };

export type BetQueryVariables = Exact<{
  getBetInput: GetBetInput;
}>;


export type BetQuery = { __typename?: 'Query', getBetById: { __typename?: 'GetBetOutput', bet: { __typename?: 'Bet', id: number, createdAt?: any | null, updatedAt?: any | null, title: string, content: string, totalAmount: number, DepositComplete: boolean, status: BetStatus, result?: number | null, creator: { __typename?: 'User', id: number, name: string, profileImg?: string | null }, judge: { __typename?: 'User', id: number, name: string, profileImg?: string | null }, teams?: Array<{ __typename?: 'BetUser', id: number, team: number, isBet: boolean, name: string, profileImg?: string | null }> | null, membersJoined?: Array<{ __typename?: 'User', id: number, name: string, profileImg?: string | null }> | null } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: number, name: string, profileImg?: string | null, betsJoined?: Array<{ __typename?: 'Bet', id: number, createdAt?: any | null, updatedAt?: any | null, title: string, content: string, totalAmount: number, DepositComplete: boolean, status: BetStatus, result?: number | null, creator: { __typename?: 'User', id: number, name: string, profileImg?: string | null }, judge: { __typename?: 'User', id: number, name: string, profileImg?: string | null }, teams?: Array<{ __typename?: 'BetUser', id: number, team: number, isBet: boolean, name: string, profileImg?: string | null }> | null, membersJoined?: Array<{ __typename?: 'User', id: number, name: string, profileImg?: string | null }> | null }> | null, friends?: Array<{ __typename?: 'User', id: number, createdAt?: any | null, updatedAt?: any | null, name: string, profileImg?: string | null }> | null } };


export const CreateBetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createBet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createBetInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createBetInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"bet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateBetMutation, CreateBetMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LogoutInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const OnPendingBetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnPendingBet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pendingBet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<OnPendingBetSubscription, OnPendingBetSubscriptionVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const BetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Bet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getBetInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetBetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBetById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getBetInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}}]}},{"kind":"Field","name":{"kind":"Name","value":"judge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"DepositComplete"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"isBet"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}}]}},{"kind":"Field","name":{"kind":"Name","value":"membersJoined"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BetQuery, BetQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}},{"kind":"Field","name":{"kind":"Name","value":"betsJoined"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}}]}},{"kind":"Field","name":{"kind":"Name","value":"judge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}},{"kind":"Field","name":{"kind":"Name","value":"DepositComplete"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"isBet"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}}]}},{"kind":"Field","name":{"kind":"Name","value":"membersJoined"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"friends"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileImg"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;