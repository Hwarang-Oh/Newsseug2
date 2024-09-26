import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MemberState, MemberStore, ProviderType } from 'types/api/member';

const initialState: MemberStore = {
  member: { nickname: '', gender: 'MALE', age: 27 },
  AccessToken: '',
  providerType: 'none',
  providerId: '',
};

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMemberInfo: (state, action: PayloadAction<MemberState>) => {
      state.member.nickname = action.payload.nickname;
      state.member.gender = action.payload.gender;
      state.member.age = action.payload.age;
    },
    setProviderInfo: (
      state,
      action: PayloadAction<{ AccessToken: string; providerId: string }>,
    ) => {
      state.AccessToken = action.payload.AccessToken;
      state.providerId = action.payload.providerId;
    },
    setProviderType: (state, action: PayloadAction<ProviderType>) => {
      state.providerType = action.payload;
    },
  },
});

export const { setMemberInfo, setProviderInfo, setProviderType } =
  memberSlice.actions;
export default memberSlice.reducer;
