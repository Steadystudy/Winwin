export interface Room {
  betId: number;
  roomId: number;
  creatorId: number;
  judgeId: number;
  betContent: string;
  betCost: number;
  totalAmount: number;
  options: Option[];
}

interface Option {
  optionId: number;
  optionText: string;
}
