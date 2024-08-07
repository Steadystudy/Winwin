'use client';

import { Flex, Modal } from 'antd';
import AvatarRow from 'components/AvatarRow';
import NavJudge from 'components/NavJudge';
import React, { useRef, useState } from 'react';

export default function JudgeRoom() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  //FIXME - 여러 팀일 경우 index로 checked하고 값받아오기
  // const [checkedIndex, setCheckedIndex] = useState<number | null>(null);

  // const handleCheckboxChange = (index:number) => {
  //   setCheckedIndex(index)
  // }

  const team1 = useRef<HTMLInputElement>(null);
  const team2 = useRef<HTMLInputElement>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
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
          showModal();
        }}
      >
        타이틀
      </NavJudge>
      <Modal
        title="결과 입력"
        open={isModalOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>누구누구 팀 승리로 선택하시겠습니까?</p>
      </Modal>
      <Flex vertical className="p-8">
        <Flex vertical>
          <Flex justify="space-between" align="center" className="">
            <label htmlFor={`team1`}>
              <p>김아무개 Team</p>
            </label>
            <input
              id={`team1`}
              ref={team1}
              type="checkbox"
              onChange={(e) => {
                checkTeam1();
              }}
              className="w-6 h-6 border-gray-300 rounded-full"
            />
          </Flex>
          <Flex vertical className="max-h-40 overflow-y-auto">
            <AvatarRow name="아무개" />
            <AvatarRow name="아무개" />
          </Flex>
        </Flex>
        <Flex vertical>
          <Flex justify="space-between" align="center" className="">
            <label htmlFor={`team2`}>
              <p>이아무개 Team</p>
            </label>
            <input
              id={`team2`}
              ref={team2}
              type="checkbox"
              onChange={(e) => {
                checkTeam2();
              }}
              className="w-6 h-6 border-gray-300 rounded-full"
            />
          </Flex>
          <Flex vertical className="max-h-40 overflow-y-auto">
            <AvatarRow name="아무개" />
            <AvatarRow name="아무개" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
