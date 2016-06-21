import { ONE } from './../constants/Constants';

export const formatArrayToOrderString = (arr) => (
  (arr && arr.size > ONE)
    ? arr.concat(',')
    : arr && arr.concat()
);
