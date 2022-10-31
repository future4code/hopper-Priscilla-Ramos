export interface allUser {
  id: string,
  name: string,
  email: string,
  password: string,
  friends: {
    friendId: string,
    friendName: string
  }
};

export interface user {
  id: string,
  name: string,
  email: string,
  password: string
};

export interface friend {
  friendId: string,
  friendName: string
};
