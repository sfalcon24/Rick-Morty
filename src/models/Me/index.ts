import type {MeDataFragment} from 'apollo/generated/schema';

export const normalizeMe = (data: MeDataFragment) => ({
  email: data.email,
  id: data.id,
});

type Me = ReturnType<typeof normalizeMe>;

export default Me;
