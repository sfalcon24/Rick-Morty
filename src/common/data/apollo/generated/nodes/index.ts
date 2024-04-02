/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import gql from 'graphql-tag';
export const CharacterSummary = gql`
  fragment CharacterSummary on Character {
    id
    name
    status
    image
  }
`;
export const Characters = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        next
      }
      results {
        ...CharacterSummary
      }
    }
  }
  ${CharacterSummary}
`;
