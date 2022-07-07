import i18n from 'i18n';
import type {DictionaryKey} from 'i18n/types';
import {date} from 'yup';

export const validateDob = date().required(
  i18n.t('yup.required.dob' as DictionaryKey),
);
