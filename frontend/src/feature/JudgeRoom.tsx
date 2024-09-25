'use client';

import { gql, useMutation } from '@apollo/client';
import { JudgeBetInput } from '__generated__/graphql';
import { Flex, Modal } from 'antd';
import AvatarRow from 'components/AvatarRow';
import NavJudge from 'components/NavJudge';
import { useBetRoom } from 'hooks/useBetRoom';
import React, { useRef, useState } from 'react';

const JUDGE_MUTATION = gql`
  mutation judge($judgeBetInput: JudgeBetInput!) {
    judgeBet(input: $judgeBetInput) {
      ok
    }
  }
`;

export default function JudgeRoom({ betId }: { betId: number }) {
  const {
    bet: { team1: teamOne, team2: teamTwo, title, judge },
  } = useBetRoom({ betId });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  //FIXME - 여러 팀일 경우 index로 checked하고 값받아오기
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);
  const onCompleted = (data: any) => {
    const {
      judgeBet: { ok, error },
    } = data;
    if (ok) {
      console.log('judge 성공');
    } else {
      console.log(error);
    }
  };

  const [judgeMutation, { data, loading }] = useMutation(JUDGE_MUTATION, {
    variables: {
      judgeBetInput: {
        betId,
        result: checkedIndex,
        judgeId: judge?.id,
      },
    },
    onCompleted,
  });

  const handleCheckboxChange = (index: number) => {
    checkedIndex !== index ? setCheckedIndex(index) : setCheckedIndex(null);
  };

  const team1 = useRef<HTMLInputElement>(null);
  const team2 = useRef<HTMLInputElement>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    judgeMutation();
    setTimeout(() => {
      setIsModalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const checkTeam1 = () => {
    if (team2.current?.checked) {
      team2.current.checked = false;
    }
  };

  const checkTeam2 = () => {
    if (team1.current?.checked) {
      team1.current.checked = false;
    }
  };

  return (
    <>
      <NavJudge
        onClick={() => {
          if (checkedIndex) {
            showModal();
          }
        }}
      >
        {title}
      </NavJudge>
      <Modal
        title="결과 입력"
        open={isModalOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>
          {checkedIndex && checkedIndex === 1 ? teamOne[0]?.name : teamTwo[0]?.name} 팀 승리로
          선택하시겠습니까?
        </p>
      </Modal>
      <Flex vertical className="p-8">
        <Flex vertical>
          <Flex justify="space-between" align="center" className="">
            <label htmlFor={`team1`}>
              <p>{teamOne[0]?.name} Team</p>
            </label>
            <input
              id={`team1`}
              ref={team1}
              type="checkbox"
              onChange={(e) => {
                checkTeam1();
                handleCheckboxChange(1);
              }}
              className="w-6 h-6 border-gray-300 rounded-full"
            />
          </Flex>
          <Flex vertical className="max-h-40 overflow-y-auto">
            {teamOne &&
              teamOne.map(({ id, name }) => <AvatarRow size="small" name={name} key={id} />)}
          </Flex>
        </Flex>
        <Flex vertical>
          <Flex justify="space-between" align="center" className="">
            <label htmlFor={`team2`}>
              <p>{teamTwo[0]?.name} Team</p>
            </label>
            <input
              id={`team2`}
              ref={team2}
              type="checkbox"
              onChange={(e) => {
                checkTeam2();
                handleCheckboxChange(2);
              }}
              className="w-6 h-6 border-gray-300 rounded-full"
            />
          </Flex>
          <Flex vertical className="max-h-40 overflow-y-auto">
            {teamTwo &&
              teamTwo.map(({ id, name }) => <AvatarRow size="small" name={name} key={id} />)}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
