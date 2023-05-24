/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    ActivityUnionType: [
      'ArticleType',
      'ClinicType',
      'CommentType',
      'RecommendationType',
      'ReviewType',
      'TreatmentType',
    ],
    CommentUnionType: ['ArticleType', 'TreatmentType'],
    FavoriteUnionType: ['ArticleType', 'ClinicType', 'TreatmentType'],
    NotificationSettingUnionType: [
      'ClinicNotificationSettingType',
      'CustomerNotificationSettingType',
    ],
    RecommendationUnionType: [
      'ArticleType',
      'CommentType',
      'ReviewAnswerType',
      'ReviewType',
      'TreatmentType',
    ],
    ReportUnionType: ['CommentType', 'ReviewType', 'UserType'],
  },
};
export default result;
