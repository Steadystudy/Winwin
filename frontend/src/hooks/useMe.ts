import { gql, useQuery } from '@apollo/client';
import { MeQuery, MeQueryVariables } from '__generated__/graphql';

const ME_QUERY = gql`
  query Me {
    me {
      id
      createdAt
      updatedAt
      name
      profileImg
      betsCreated {
        id
      }
      friends {
        id
        createdAt
        updatedAt
        name
        profileImg
      }
    }
  }
`;

export const useMe = () => {
  const { data, loading, error } = useQuery<MeQuery>(ME_QUERY);

  return { me: data?.me, loading, error };
};
