export default interface UserType {
  _id?: string;
  name?: string;
  username?: string;
  isRegistered?: boolean;
  token?: string;
  postCount?: number;
  followerCount?: number;
  followCount?: number;
}
