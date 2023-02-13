import i18n from 'i18n';
import type {DictionaryKey} from 'i18n/types';
import {string} from 'yup';

export const validateLastName = string().required(
  i18n.t('yup.required.lastName' as DictionaryKey).toString(),
);
