import i18n from 'i18n';
import type {DictionaryKey} from 'i18n/types';
import {string} from 'yup';

export const validateEmail = string()
  .trim()
  .email(i18n.t('yup.invalid.email' as DictionaryKey).toString())
  .required(i18n.t('yup.required.email' as DictionaryKey).toString());
