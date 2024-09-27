import { gql, useQuery } from '@apollo/client';
import { MeQuery } from '__generated__/graphql';
import { Fragment } from 'react';

const ME_QUERY = gql`
  query Me {
    me {
      id
      name
      profileImg
      betsJoined {
        id
        createdAt
        updatedAt
        creator {
          id
          name
          profileImg
        }
        judge {
          id
          name
          profileImg
        }
        title
        content
        totalAmount
        DepositComplete
        status
        result
        teams {
          id
          team
          isBet
          name
          profileImg
        }
        membersJoined {
          id
          name
          profileImg
        }
      }
      betsJudged {
        id
        judge {
          id
          name
        }
        creator {
          id
          name
        }
        status
        title
        totalAmount
        content
        DepositComplete
        teams {
          id
          team
          isBet
          name
          profileImg
        }
      }
      account {
        id
        bankCode
        bankName
        expiredAt
        dailyTransferLimit
        oneTimeTransferLimit
        isPrimary
        accountNo
        accountBalance
        owner {
          id
          name
        }
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
