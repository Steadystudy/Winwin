export const PAGE_URL = {
  HOME: '/',
  INVITE_JUDGE: '/invite/judge',
  INVITE_MYTEAM: '/invite/myteam',
  INVITE_OPPONENT: '/invite/opponent',
  ROOM_CREATE: '/room/create',
  ROOM_CONFIRM: '/room/confirm',
  ROOM: (roomId: number) => `/room/${roomId}`,
  ROOM_JUDGE: (roomId: number) => `room/${roomId}/judge`,
};

export const API_URL = {
  BASE: '/api',
};
