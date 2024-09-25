import { gql, useQuery } from '@apollo/client';
import { BetQuery, GetBetInput } from '__generated__/graphql';

const BET_QUERY = gql`
  query Bet($getBetInput: GetBetInput!) {
    getBetById(input: $getBetInput) {
      bet {
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
    }
  }
`;

export const useBetRoom = ({ betId }: GetBetInput) => {
  const { data, error } = useQuery<BetQuery>(BET_QUERY, {
    variables: {
      getBetInput: {
        betId: Number(betId),
      },
    },
  });

  const team1 = data?.getBetById.bet.teams?.filter((team) => team.team === 1) || [];
  const team2 = data?.getBetById.bet.teams?.filter((team) => team.team === 2) || [];

  return { bet: { ...data?.getBetById.bet, team1, team2 }, error };
};
