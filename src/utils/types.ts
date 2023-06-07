export interface LoginDataType {
  email: string;
  password: string;
}

export interface SigninDataType {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
}

export interface UserData {
  status?: boolean;
  user?: {
    id?: number;
    email?: string;
    name?: string;
    googleId?: string;
    bio?: string;
    status?: number;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    token?: string;
  };
}
export interface ChannelData {
  status?: boolean;
  channel?: {
    id?: number;
    name?: string;
    type?: string;
    createdAt?: string;
    updatedAt?: string;
    ownerId?: number;
    owner?: {
      id?: number;
      name?: string;
      email?: string;
    };
  };
}

export interface UserListData {
  status: boolean;
  users: [
    {
      id: number;
      name: string;
      email: string;
      bio: string;
    }
  ];
}

export interface ChannelListData {
  status: boolean;
  channels: [
    {
      id: number;
      name: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      ownerId: number;
      owner: {
        id: number;
        name: string;
        email: string;
      };
    }
  ];
}

export interface ChannelDataType {
  name?: string;
  type?: "public" | "private";
  members?: [];
}

export interface UpdateUserData {
  name?: string;
  oldPassword?: string;
  password?: string;
  confirmPassword?: string;
  bio?: string;
}

export interface UpdateChannelData {
  members: [];
}

export interface MessageData {
  status: boolean;
  messages: [
    {
      id: number;
      content: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string;
      senderId: number;
      recipientId: number;
      channelId: number;
      sender: {
        id: number;
        name: string;
        email: string;
      };
    }
  ];
}

export interface SendMessagesData {
  content: string;
}

export interface CreateChannelPageProps {
  users: UserListData;
  channel: ChannelData;
}

export interface FormInputProps {
  label: string;
  type: string;
  placeholder?: string;
  register: any;
  name: string;
  errors: any;
}

export interface SendDataProps {
  endpoint: string;
  method: "post" | "put";
  data: any;
  isToken: boolean;
}
