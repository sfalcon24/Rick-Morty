import i18n from 'i18n';
import type {DictionaryKey} from 'i18n/types';
import {ref, string} from 'yup';

export const validatePassword = string()
  .matches(
    new RegExp('^([^\\s]{8,})$'),
    i18n.t('yup.invalid.passwordLength').toString(),
  )
  .required(i18n.t('yup.required.password' as DictionaryKey).toString());

export const confirmationPassword = (field: string = 'password') =>
  string()
    .required(i18n.t('yup.required.field' as DictionaryKey).toString())
    .oneOf(
      [ref(field)],
      i18n.t('yup.confirmation.password' as DictionaryKey).toString(),
    );
