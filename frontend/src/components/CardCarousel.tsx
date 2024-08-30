'use client';

import { Carousel } from 'antd';
import BetCard from './BetCard';
import { gql, useMutation, useQuery } from '@apollo/client';

type LoginInput = {
  name: string;
};

const Login = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) {
      ok
      token
    }
  }
`;

const GET_USERS = gql`
  query GetUser {
    me {
      id
      name
    }
  }
`;

export default function CardCarousel() {
  const { data: d } = useQuery(GET_USERS);
  console.log(d);
  // const [add, { data }] = useMutation(Login);
  // console.log('d:', data);
  const onChange = (currentSlide: number) => {
    // add({ variables: { input: { name: 'ssafy' } } });
    // console.log(data);
    // console.log(currentSlide);
  };

  return (
    <Carousel
      className="flex justify-center items-center w-full px-4 mx-auto"
      afterChange={onChange}
      draggable
      autoplay
    >
      <BetCard />
      <BetCard />
      <BetCard />
    </Carousel>
  );
}
