'use client';

import { Flex, Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';
import { useRoomStore } from 'store/useRoomStore';
import NavCreate from '../components/NavCreate';
import { PAGE_URL } from 'constants/url';
import { gql, useMutation } from '@apollo/client';
import { CreateBetInput, CreateBetOutput } from '__generated__/graphql';
import { useMe } from 'hooks/useMe';

const moneyOptions = [
  {
    value: 10000,
  },
  {
    value: 20000,
  },
  {
    value: 30000,
  },
  {
    value: 40000,
  },
  {
    value: 50000,
  },
  {
    value: 60000,
  },
  {
    value: 70000,
  },
];

const CreateBet_Mutation = gql`
  mutation createBet($createBetInput: CreateBetInput!) {
    createBet(input: $createBetInput) {
      ok
      error
      bet {
        id
      }
    }
  }
`;

export default function CreateRoom() {
  const [money, setMoney] = useState(10000);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { myTeam, opponent, judge, reset } = useRoomStore();
  const [createBet] = useMutation<CreateBetOutput>(CreateBet_Mutation);
  const { me } = useMe();

  const onSubmit = async () => {
    if (!me) return;

    const team1 = myTeam.map((user) => ({ id: user.id, team: 1 }));
    team1.push({ id: me.id, team: 1 });
    const team2 = opponent.map((user) => ({ id: user.id, team: 2 }));
    const members = team1.concat(team2);
    const createBetInput = {
      title,
      creatorId: me.id,
      judgeId: judge[0]?.id || me.id,
      totalAmount: money,
      members: members,
      content: description,
    };

    try {
      const { data } = await createBet({
        variables: {
          createBetInput,
        },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }

    reset();
  };

  return (
    <>
      <NavCreate from={PAGE_URL.INVITE_JUDGE} to={PAGE_URL.ROOM_CONFIRM} onClick={onSubmit}>
        방 생성
      </NavCreate>
      <Form>
        <Flex vertical className="p-8" gap={32}>
          <Flex justify="space-between">
            <label htmlFor="title" className="w-full font-semibold text-2xl">
              제목
            </label>
            <Input
              id="title"
              required
              placeholder="제목 입력 (2~8자)"
              onChange={(e) => setTitle(e.target.value)}
              variant="filled"
              minLength={2}
              maxLength={8}
            />
          </Flex>
          <Flex justify="space-between">
            <Flex align="end" gap={4}>
              <h2>금액</h2>
              <span>(인당)</span>
            </Flex>
            <Flex align="center" gap={4}>
              <Select
                options={moneyOptions}
                onChange={(e) => setMoney(e.value)}
                defaultValue={moneyOptions[0]}
              />
              <span>원</span>
            </Flex>
          </Flex>
          <Flex vertical gap={16}>
            <label htmlFor="textarea" className="font-semibold text-2xl">
              설명
            </label>
            <TextArea
              id="textarea"
              placeholder="설명 (최대 30자)"
              onChange={(e) => setDescription(e.target.value)}
              maxLength={30}
              autoSize={{ minRows: 2, maxRows: 6 }}
            />
          </Flex>
        </Flex>
      </Form>
    </>
  );
}
