import i18n from 'i18n';
import type {DictionaryKey} from 'i18n/types';
import {string} from 'yup';

export const validateFirstName = string().required(
  i18n.t('yup.required.firstName' as DictionaryKey),
);
