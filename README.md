# 프로젝트 WinWin

### 기획 배경

우리의 일상에서 친구나 동료와 함께 내기를 할 때가 있습니다. 예를 들어, 여러 명이 모여 보드게임의 승패로 내기를 하였을 때, 정산 방법이 복잡하거나 불투명할 경우 갈등이 발생할 수 있습니다. 금전적 문제는 종종 불만을 자아내며, 이는 원활한 관계를 해치는 요인이 될 수 있습니다. 이러한 문제를 해결하기 위해, 내기 돈을 신뢰성 있게 관리하고 참여자들이 지정한 심판이 결과를 입력해 정산해주는 프로그램을 기획하였습니다.

### 핵심 기능 설명

1. 내기 생성 및 설정: 사용자가 새로운 내기를 생성하고 참여자들을 추가. 내기 내용, 참여자, 심판, 금액 등을 설정
2. 심판 지정 및 결과 입력: 방을 만드는 사용자가 심판을 지정하고, 해당 심판이 결과를 입력. 이 기능을 통해 신뢰성을 높이고 분쟁을 줄임
3. 정산 과정 자동화: 내기가 끝난 후, 심판이 입력한 결과에 따라 자동으로 정산을 진행하고 참여자별 상금을 계산
4. 투명한 결과 표시: 정산 결과와 내기 내역을 표시. 이를 통해 내기 결과와 과정이 투명하게 드러나며, 시각적으로 표시하여 모든 참여자가 쉽게 이해할 수 있음

### 아이디어 차별성

1. 자동화된 정산 시스템: 내기 시작 전 돈을 모아 종료 후 심판이 결과를 입
   력하면 정산이 자동으로 진행
2. 신뢰성 있는 어플: 신한은행과 연계하기 때문에 돈을 믿고 맡길 수 있음
3. 토큰 시스템 및 이벤트: 내기에 진 사람에게 보상 기회를 제공. 인센티브
   제도를 통한 애플리케이션 이용률 증가
4. 광고와 상품 연계: 이벤트 페이지에서 상품 광고를 통한 광고비 수익 창출

### 내기 규칙

이는 법적 문제를 고려했을 때 내기 진행할 수 있는 사용자의 최소 기준을 만들기 위함

1. 내기 횟수: 월 최대 5회로 제한
2. 최대 내기 금액: 상한선을 성인은 10만원, 미성년자는 3만원으로 제한
3. 참여 가능 여부: 내기에 참여하고자 하는 사용자는 회원가입 시 생성한 계좌 내 잔고가 내기 금액의 5배 이상이어야 내기를 진행할 수 있도록 설정

### 기대효과

1. 운영자 측면: 사용자가 내기를 위해 계좌에 자금을 예치함으로써 운영자는 일정 금액을 확보. 광고 수익 외에도 제휴 업체와의 협력을 통해 수수료 서비스, 이벤트 및 프로모션에 따른 수익 창출이 가능하여 지속 가능한 비즈니스 모델을 구축할 수 있음.

2. 사용자 측면: 사용자들이 건강한 방식으로 내기를 즐길 수 있음. 법적으로 안전한 내기 환경을 제공하기 때문에 사용자들에게 안심하고 사용할 수 있는 플랫폼이 됨. 직관적인 UI/UX로 다양한 연령대 사용자들이 쉽게 접근할 수 있고 내기 생성부터 결과까지 과정을 쉽게 이해하게 함

### 진행상황 (2024.09.27)

내기 생성 과정  
![상대팀](https://github.com/user-attachments/assets/fb4c1f52-9530-4c93-bd0b-cbd330d0bbba)
![심판](https://github.com/user-attachments/assets/e5997649-95fc-469a-ae1a-23952a799c42)
![방생성](https://github.com/user-attachments/assets/88d422d5-ebc2-46e3-8895-e285e2ec8a3e)  
홈 화면  
![홈화면](https://github.com/user-attachments/assets/3f5198bf-568d-41e1-8387-c66f838a89b4)  
심판 화면  
![심판 화면](https://github.com/user-attachments/assets/7c617fc7-e0a1-4bed-bcbb-cf44455f979c)
![심판하기](https://github.com/user-attachments/assets/a510c750-2a2f-4007-9ccb-16af45a1439b)
![심판 확인](https://github.com/user-attachments/assets/2dd58e13-c6ac-416c-940d-05984e834f95)  
결과 화면  
![끝난 내기](https://github.com/user-attachments/assets/b3aeeb08-f80d-4fa2-abf9-37c8ebd95b93)
![결과 화면](https://github.com/user-attachments/assets/a25c2958-5186-4ebf-b16b-51fffd522f57)

### 배포페이지

[Storybook 배포페이지](https://651fd2521967afdc6589d5eb-rxdjcjxrjb.chromatic.com/?path=/)

### 📃 Languages / Libraries

![NextJS](https://img.shields.io/badge/NextJS-%23000000.svg?style=for-the-badge&logo=Next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-004088.svg?style=for-the-badge&logo=typescript&logoColor=white)<br/>
![React-hook-form](https://img.shields.io/badge/React_Hook_Form-FF3366?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

### 📝 State Management

![Zustand](https://img.shields.io/badge/zustand-orange?style=for-the-badge&logo=zustand&logoColor=white)
![SWR](https://img.shields.io/badge/swr-000000?style=for-the-badge&logo=swr&logoColor=%2361DAFB)

### 🛠 Tools

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### 🧐 Linters

![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
