/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import gql from 'graphql-tag';
export const MeData = gql`
  fragment MeData on UserType {
    id
    email
  }
`;
export const query = gql`
  query {
    character(id: 1) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
        type
      }
      location {
        name
        type
      }
      image
    }
  }
`;
export const Login = gql`
  mutation Login($input: LoginInput!) {
    loginMobile(input: $input) {
      token
    }
  }
`;
export const Me = gql`
  query Me {
    me {
      id
      email
    }
  }
`;
