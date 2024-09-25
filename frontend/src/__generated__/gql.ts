/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createBet($createBetInput: CreateBetInput!) {\n    createBet(input: $createBetInput) {\n      ok\n      error\n      bet {\n        id\n      }\n    }\n  }\n": types.CreateBetDocument,
    "\n  mutation logout($loginInput: LogoutInput!) {\n    logout(input: $loginInput) {\n      ok\n      error\n    }\n  }\n": types.LogoutDocument,
    "\n  subscription OnPendingBet {\n    pendingBet {\n      bet {\n        id\n      }\n    }\n  }\n": types.OnPendingBetDocument,
    "\n  mutation judge($judgeBetInput: JudgeBetInput!) {\n    judgeBet(input: $judgeBetInput) {\n      ok\n    }\n  }\n": types.JudgeDocument,
    "\n  mutation login($loginInput: LoginInput!) {\n    login(input: $loginInput) {\n      ok\n      token\n      error\n    }\n  }\n": types.LoginDocument,
    "\n  query Bet($getBetInput: GetBetInput!) {\n    getBetById(input: $getBetInput) {\n      bet {\n        id\n        createdAt\n        updatedAt\n        creator {\n          id\n          name\n          profileImg\n        }\n        judge {\n          id\n          name\n          profileImg\n        }\n        title\n        content\n        totalAmount\n        DepositComplete\n        status\n        result\n        teams {\n          id\n          team\n          isBet\n          name\n          profileImg\n        }\n        membersJoined {\n          id\n          name\n          profileImg\n        }\n      }\n    }\n  }\n": types.BetDocument,
    "\n  query Me {\n    me {\n      id\n      name\n      profileImg\n      betsJoined {\n        id\n        createdAt\n        updatedAt\n        creator {\n          id\n          name\n          profileImg\n        }\n        judge {\n          id\n          name\n          profileImg\n        }\n        title\n        content\n        totalAmount\n        DepositComplete\n        status\n        result\n        teams {\n          id\n          team\n          isBet\n          name\n          profileImg\n        }\n        membersJoined {\n          id\n          name\n          profileImg\n        }\n      }\n      betsJudged {\n        id\n        judge {\n          id\n          name\n        }\n        creator {\n          id\n          name\n        }\n        status\n        title\n        totalAmount\n        content\n        DepositComplete\n        teams {\n          id\n          team\n          isBet\n          name\n          profileImg\n        }\n      }\n      friends {\n        id\n        createdAt\n        updatedAt\n        name\n        profileImg\n      }\n    }\n  }\n": types.MeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createBet($createBetInput: CreateBetInput!) {\n    createBet(input: $createBetInput) {\n      ok\n      error\n      bet {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createBet($createBetInput: CreateBetInput!) {\n    createBet(input: $createBetInput) {\n      ok\n      error\n      bet {\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation logout($loginInput: LogoutInput!) {\n    logout(input: $loginInput) {\n      ok\n      error\n    }\n  }\n"): (typeof documents)["\n  mutation logout($loginInput: LogoutInput!) {\n    logout(input: $loginInput) {\n      ok\n      error\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription OnPendingBet {\n    pendingBet {\n      bet {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription OnPendingBet {\n    pendingBet {\n      bet {\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation judge($judgeBetInput: JudgeBetInput!) {\n    judgeBet(input: $judgeBetInput) {\n      ok\n    }\n  }\n"): (typeof documents)["\n  mutation judge($judgeBetInput: JudgeBetInput!) {\n    judgeBet(input: $judgeBetInput) {\n      ok\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation login($loginInput: LoginInput!) {\n    login(input: $loginInput) {\n      ok\n      token\n      error\n    }\n  }\n"): (typeof documents)["\n  mutation login($loginInput: LoginInput!) {\n    login(input: $loginInput) {\n      ok\n      token\n      error\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Bet($getBetInput: GetBetInput!) {\n    getBetById(input: $getBetInput) {\n      bet {\n        id\n        createdAt\n        updatedAt\n        creator {\n          id\n          name\n          profileImg\n        }\n        judge {\n          id\n          name\n          profileImg\n        }\n        title\n        content\n        totalAmount\n        DepositComplete\n        status\n        result\n        teams {\n          id\n          team\n          isBet\n          name\n          profileImg\n        }\n        membersJoined {\n          id\n          name\n          profileImg\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Bet($getBetInput: GetBetInput!) {\n    getBetById(input: $getBetInput) {\n      bet {\n        id\n        createdAt\n        updatedAt\n        creator {\n          id\n          name\n          profileImg\n        }\n        judge {\n          id\n          name\n          profileImg\n        }\n        title\n        content\n        totalAmount\n        DepositComplete\n        status\n        result\n        teams {\n          id\n          team\n          isBet\n          name\n          profileImg\n        }\n        membersJoined {\n          id\n          name\n          profileImg\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Me {\n    me {\n      id\n      name\n      profileImg\n      betsJoined {\n        id\n        createdAt\n        updatedAt\n        creator {\n          id\n          name\n          profileImg\n        }\n        judge {\n          id\n          name\n          profileImg\n        }\n        title\n        content\n        totalAmount\n        DepositComplete\n        status\n        result\n        teams {\n          id\n          team\n          isBet\n          name\n          profileImg\n        }\n        membersJoined {\n          id\n          name\n          profileImg\n        }\n      }\n      betsJudged {\n        id\n        judge {\n          id\n          name\n        }\n        creator {\n          id\n          name\n        }\n        status\n        title\n        totalAmount\n        content\n        DepositComplete\n        teams {\n          id\n          team\n          isBet\n          name\n          profileImg\n        }\n      }\n      friends {\n        id\n        createdAt\n        updatedAt\n        name\n        profileImg\n      }\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      id\n      name\n      profileImg\n      betsJoined {\n        id\n        createdAt\n        updatedAt\n        creator {\n          id\n          name\n          profileImg\n        }\n        judge {\n          id\n          name\n          profileImg\n        }\n        title\n        content\n        totalAmount\n        DepositComplete\n        status\n        result\n        teams {\n          id\n          team\n          isBet\n          name\n          profileImg\n        }\n        membersJoined {\n          id\n          name\n          profileImg\n        }\n      }\n      betsJudged {\n        id\n        judge {\n          id\n          name\n        }\n        creator {\n          id\n          name\n        }\n        status\n        title\n        totalAmount\n        content\n        DepositComplete\n        teams {\n          id\n          team\n          isBet\n          name\n          profileImg\n        }\n      }\n      friends {\n        id\n        createdAt\n        updatedAt\n        name\n        profileImg\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;