export type MoodOptionType = {
  emoji: string;
  description: string;
};

export type MoodOptionWithTimeStamp = {
  mood: MoodOptionType;
  timestamp: number;
};

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface PostsResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface TaskResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
