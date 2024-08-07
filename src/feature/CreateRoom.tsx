'use client';

import { Flex, Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';
import { useRoomStore } from 'store/useRoomStore';
import NavCreate from '../components/NavCreate';
import { PAGE_URL } from 'constants/url';

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

export default function CreateRoom() {
  const [money, setMoney] = useState(10000);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { myTeam, opponent, judge, reset } = useRoomStore();

  const onSubmit = () => {
    // submit
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
              autoSize={{ minRows: 2, maxRows: 4 }}
            />
          </Flex>
        </Flex>
      </Form>
    </>
  );
}
