/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';
export type ActivityPaginatedTypeKeySpecifier = (
  | 'hasNext'
  | 'hasPrev'
  | 'objects'
  | 'orderBy'
  | 'page'
  | 'pages'
  | 'totalResults'
  | ActivityPaginatedTypeKeySpecifier
)[];
export type ActivityPaginatedTypeFieldPolicy = {
  hasNext?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPrev?: FieldPolicy<any> | FieldReadFunction<any>;
  objects?: FieldPolicy<any> | FieldReadFunction<any>;
  orderBy?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  totalResults?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ActivityTypeKeySpecifier = (
  | 'action'
  | 'created'
  | 'id'
  | 'modified'
  | 'object'
  | 'user'
  | ActivityTypeKeySpecifier
)[];
export type ActivityTypeFieldPolicy = {
  action?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  object?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ArticlePaginatedTypeKeySpecifier = (
  | 'hasNext'
  | 'hasPrev'
  | 'objects'
  | 'orderBy'
  | 'page'
  | 'pages'
  | 'totalResults'
  | ArticlePaginatedTypeKeySpecifier
)[];
export type ArticlePaginatedTypeFieldPolicy = {
  hasNext?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPrev?: FieldPolicy<any> | FieldReadFunction<any>;
  objects?: FieldPolicy<any> | FieldReadFunction<any>;
  orderBy?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  totalResults?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ArticleTypeKeySpecifier = (
  | 'author'
  | 'badRecommendations'
  | 'comments'
  | 'content'
  | 'created'
  | 'currentUserRecommendation'
  | 'goodRecommendations'
  | 'id'
  | 'image'
  | 'isFavorite'
  | 'modified'
  | 'readingTime'
  | 'recommendations'
  | 'symptoms'
  | 'title'
  | 'treatments'
  | ArticleTypeKeySpecifier
)[];
export type ArticleTypeFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  badRecommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  comments?: FieldPolicy<any> | FieldReadFunction<any>;
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  currentUserRecommendation?: FieldPolicy<any> | FieldReadFunction<any>;
  goodRecommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  isFavorite?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  readingTime?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  symptoms?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  treatments?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AuthorTypeKeySpecifier = (
  | 'articles'
  | 'id'
  | 'name'
  | 'totalArticles'
  | AuthorTypeKeySpecifier
)[];
export type AuthorTypeFieldPolicy = {
  articles?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  totalArticles?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChangeEmailKeySpecifier = (
  | 'errors'
  | 'user'
  | ChangeEmailKeySpecifier
)[];
export type ChangeEmailFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ChangePasswordKeySpecifier = (
  | 'errors'
  | 'passwordChanged'
  | ChangePasswordKeySpecifier
)[];
export type ChangePasswordFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordChanged?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ClinicErrorTypeKeySpecifier = (
  | 'code'
  | 'field'
  | 'message'
  | ClinicErrorTypeKeySpecifier
)[];
export type ClinicErrorTypeFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ClinicImagePaginatedTypeKeySpecifier = (
  | 'hasNext'
  | 'hasPrev'
  | 'objects'
  | 'orderBy'
  | 'page'
  | 'pages'
  | 'totalResults'
  | ClinicImagePaginatedTypeKeySpecifier
)[];
export type ClinicImagePaginatedTypeFieldPolicy = {
  hasNext?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPrev?: FieldPolicy<any> | FieldReadFunction<any>;
  objects?: FieldPolicy<any> | FieldReadFunction<any>;
  orderBy?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  totalResults?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ClinicImageTypeKeySpecifier = (
  | 'id'
  | 'image'
  | 'isDefault'
  | ClinicImageTypeKeySpecifier
)[];
export type ClinicImageTypeFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  isDefault?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ClinicNotificationSettingTypeKeySpecifier = (
  | 'created'
  | 'id'
  | 'interactionEmail'
  | 'modified'
  | 'reviewEmail'
  | ClinicNotificationSettingTypeKeySpecifier
)[];
export type ClinicNotificationSettingTypeFieldPolicy = {
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  interactionEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  reviewEmail?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ClinicPaginatedTypeKeySpecifier = (
  | 'hasNext'
  | 'hasPrev'
  | 'objects'
  | 'orderBy'
  | 'page'
  | 'pages'
  | 'totalResults'
  | ClinicPaginatedTypeKeySpecifier
)[];
export type ClinicPaginatedTypeFieldPolicy = {
  hasNext?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPrev?: FieldPolicy<any> | FieldReadFunction<any>;
  objects?: FieldPolicy<any> | FieldReadFunction<any>;
  orderBy?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  totalResults?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ClinicTypeKeySpecifier = (
  | 'additionalInfo'
  | 'calendar'
  | 'created'
  | 'description'
  | 'email'
  | 'id'
  | 'images'
  | 'isFavorite'
  | 'isReviewed'
  | 'location'
  | 'logo'
  | 'modified'
  | 'name'
  | 'owner'
  | 'phone'
  | 'rating'
  | 'relatedClinics'
  | 'reviews'
  | 'reviewsStarsPercentages'
  | 'status'
  | 'symptoms'
  | 'totalReviews'
  | 'treatments'
  | 'website'
  | ClinicTypeKeySpecifier
)[];
export type ClinicTypeFieldPolicy = {
  additionalInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  calendar?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  images?: FieldPolicy<any> | FieldReadFunction<any>;
  isFavorite?: FieldPolicy<any> | FieldReadFunction<any>;
  isReviewed?: FieldPolicy<any> | FieldReadFunction<any>;
  location?: FieldPolicy<any> | FieldReadFunction<any>;
  logo?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  owner?: FieldPolicy<any> | FieldReadFunction<any>;
  phone?: FieldPolicy<any> | FieldReadFunction<any>;
  rating?: FieldPolicy<any> | FieldReadFunction<any>;
  relatedClinics?: FieldPolicy<any> | FieldReadFunction<any>;
  reviews?: FieldPolicy<any> | FieldReadFunction<any>;
  reviewsStarsPercentages?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  symptoms?: FieldPolicy<any> | FieldReadFunction<any>;
  totalReviews?: FieldPolicy<any> | FieldReadFunction<any>;
  treatments?: FieldPolicy<any> | FieldReadFunction<any>;
  website?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentErrorTypeKeySpecifier = (
  | 'code'
  | 'field'
  | 'message'
  | CommentErrorTypeKeySpecifier
)[];
export type CommentErrorTypeFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentPaginatedTypeKeySpecifier = (
  | 'hasNext'
  | 'hasPrev'
  | 'objects'
  | 'orderBy'
  | 'page'
  | 'pages'
  | 'totalResults'
  | CommentPaginatedTypeKeySpecifier
)[];
export type CommentPaginatedTypeFieldPolicy = {
  hasNext?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPrev?: FieldPolicy<any> | FieldReadFunction<any>;
  objects?: FieldPolicy<any> | FieldReadFunction<any>;
  orderBy?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  totalResults?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentTypeKeySpecifier = (
  | 'answers'
  | 'badRecommendations'
  | 'created'
  | 'currentUserRecommendation'
  | 'deleted'
  | 'goodRecommendations'
  | 'id'
  | 'isReply'
  | 'message'
  | 'modified'
  | 'object'
  | 'parent'
  | 'recommendations'
  | 'user'
  | CommentTypeKeySpecifier
)[];
export type CommentTypeFieldPolicy = {
  answers?: FieldPolicy<any> | FieldReadFunction<any>;
  badRecommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  currentUserRecommendation?: FieldPolicy<any> | FieldReadFunction<any>;
  deleted?: FieldPolicy<any> | FieldReadFunction<any>;
  goodRecommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isReply?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  object?: FieldPolicy<any> | FieldReadFunction<any>;
  parent?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateArticleCommentKeySpecifier = (
  | 'comment'
  | 'errors'
  | CreateArticleCommentKeySpecifier
)[];
export type CreateArticleCommentFieldPolicy = {
  comment?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateArticleRecommendationKeySpecifier = (
  | 'errors'
  | 'recommendation'
  | CreateArticleRecommendationKeySpecifier
)[];
export type CreateArticleRecommendationFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendation?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateClinicKeySpecifier = (
  | 'clinic'
  | 'errors'
  | CreateClinicKeySpecifier
)[];
export type CreateClinicFieldPolicy = {
  clinic?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateClinicReviewKeySpecifier = (
  | 'errors'
  | 'review'
  | CreateClinicReviewKeySpecifier
)[];
export type CreateClinicReviewFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  review?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateCommentRecommendationKeySpecifier = (
  | 'errors'
  | 'recommendation'
  | CreateCommentRecommendationKeySpecifier
)[];
export type CreateCommentRecommendationFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendation?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateLinkKeySpecifier = (
  | 'contentType'
  | 'retrieveUrl'
  | 'uploadUrl'
  | CreateLinkKeySpecifier
)[];
export type CreateLinkFieldPolicy = {
  contentType?: FieldPolicy<any> | FieldReadFunction<any>;
  retrieveUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  uploadUrl?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateReviewAnswerKeySpecifier = (
  | 'errors'
  | 'reviewanswer'
  | CreateReviewAnswerKeySpecifier
)[];
export type CreateReviewAnswerFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  reviewanswer?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateReviewAnswerRecommendationKeySpecifier = (
  | 'errors'
  | 'recommendation'
  | CreateReviewAnswerRecommendationKeySpecifier
)[];
export type CreateReviewAnswerRecommendationFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendation?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateReviewRecommendationKeySpecifier = (
  | 'errors'
  | 'recommendation'
  | CreateReviewRecommendationKeySpecifier
)[];
export type CreateReviewRecommendationFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendation?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateTreatmentCommentKeySpecifier = (
  | 'comment'
  | 'errors'
  | CreateTreatmentCommentKeySpecifier
)[];
export type CreateTreatmentCommentFieldPolicy = {
  comment?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateTreatmentRecommendationKeySpecifier = (
  | 'errors'
  | 'recommendation'
  | CreateTreatmentRecommendationKeySpecifier
)[];
export type CreateTreatmentRecommendationFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendation?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CustomerNotificationSettingTypeKeySpecifier = (
  | 'contentEmail'
  | 'contentPush'
  | 'created'
  | 'id'
  | 'interactionEmail'
  | 'interactionPush'
  | 'modified'
  | CustomerNotificationSettingTypeKeySpecifier
)[];
export type CustomerNotificationSettingTypeFieldPolicy = {
  contentEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  contentPush?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  interactionEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  interactionPush?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteClinicReviewKeySpecifier = (
  | 'errors'
  | 'review'
  | DeleteClinicReviewKeySpecifier
)[];
export type DeleteClinicReviewFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  review?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteClinicUserKeySpecifier = (
  | 'errors'
  | 'user'
  | DeleteClinicUserKeySpecifier
)[];
export type DeleteClinicUserFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteCommentKeySpecifier = (
  | 'comment'
  | 'errors'
  | DeleteCommentKeySpecifier
)[];
export type DeleteCommentFieldPolicy = {
  comment?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteRecommendationKeySpecifier = (
  | 'errors'
  | 'recommendation'
  | DeleteRecommendationKeySpecifier
)[];
export type DeleteRecommendationFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendation?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteReviewAnswerKeySpecifier = (
  | 'errors'
  | 'reviewanswer'
  | DeleteReviewAnswerKeySpecifier
)[];
export type DeleteReviewAnswerFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  reviewanswer?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteUserKeySpecifier = (
  | 'errors'
  | 'user'
  | DeleteUserKeySpecifier
)[];
export type DeleteUserFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FavoriteErrorTypeKeySpecifier = (
  | 'code'
  | 'field'
  | 'message'
  | FavoriteErrorTypeKeySpecifier
)[];
export type FavoriteErrorTypeFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FavoritePaginatedTypeKeySpecifier = (
  | 'hasNext'
  | 'hasPrev'
  | 'objects'
  | 'orderBy'
  | 'page'
  | 'pages'
  | 'totalResults'
  | FavoritePaginatedTypeKeySpecifier
)[];
export type FavoritePaginatedTypeFieldPolicy = {
  hasNext?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPrev?: FieldPolicy<any> | FieldReadFunction<any>;
  objects?: FieldPolicy<any> | FieldReadFunction<any>;
  orderBy?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  totalResults?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FavoriteTypeKeySpecifier = (
  | 'created'
  | 'id'
  | 'modified'
  | 'object'
  | 'user'
  | FavoriteTypeKeySpecifier
)[];
export type FavoriteTypeFieldPolicy = {
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  object?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GenerateAccessCodeKeySpecifier = (
  | 'accessCodeSent'
  | 'errors'
  | GenerateAccessCodeKeySpecifier
)[];
export type GenerateAccessCodeFieldPolicy = {
  accessCodeSent?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GenerateAccessCodeToNewEmailKeySpecifier = (
  | 'accessCodeSent'
  | 'errors'
  | GenerateAccessCodeToNewEmailKeySpecifier
)[];
export type GenerateAccessCodeToNewEmailFieldPolicy = {
  accessCodeSent?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LocationTypeKeySpecifier = (
  | 'fullAddress'
  | 'id'
  | 'lat'
  | 'lng'
  | LocationTypeKeySpecifier
)[];
export type LocationTypeFieldPolicy = {
  fullAddress?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  lat?: FieldPolicy<any> | FieldReadFunction<any>;
  lng?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LoginMobileKeySpecifier = (
  | 'errors'
  | 'token'
  | 'user'
  | LoginMobileKeySpecifier
)[];
export type LoginMobileFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  token?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LoginWebKeySpecifier = (
  | 'errors'
  | 'refreshToken'
  | 'token'
  | 'user'
  | LoginWebKeySpecifier
)[];
export type LoginWebFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
  token?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LogoutKeySpecifier = (
  | 'errors'
  | 'loggedOut'
  | LogoutKeySpecifier
)[];
export type LogoutFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  loggedOut?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | 'changeEmail'
  | 'changePassword'
  | 'createArticleComment'
  | 'createArticleRecommendation'
  | 'createClinic'
  | 'createClinicReview'
  | 'createCommentRecommendation'
  | 'createReviewAnswer'
  | 'createReviewAnswerRecommendation'
  | 'createReviewRecommendation'
  | 'createTreatmentComment'
  | 'createTreatmentRecommendation'
  | 'deleteClinicReview'
  | 'deleteClinicUser'
  | 'deleteComment'
  | 'deleteRecommendation'
  | 'deleteReviewAnswer'
  | 'deleteUser'
  | 'generateAccessCode'
  | 'generateAccessCodeToNewEmail'
  | 'getUploadUrl'
  | 'loginMobile'
  | 'loginWeb'
  | 'logout'
  | 'refreshToken'
  | 'removeArticleAsFavorite'
  | 'removeClinicAsFavorite'
  | 'removeTreatmentAsFavorite'
  | 'replyComment'
  | 'reportComment'
  | 'reportReview'
  | 'reportUser'
  | 'resetPassword'
  | 'setArticleAsFavorite'
  | 'setClinicAsFavorite'
  | 'setClinicNotifications'
  | 'setCustomerNotifications'
  | 'setOnboardingDone'
  | 'setTreatmentAsFavorite'
  | 'socialLoginMobile'
  | 'socialLoginWeb'
  | 'updateClinic'
  | 'updateClinicReview'
  | 'updateComment'
  | 'updateReviewAnswer'
  | 'updateUserProfile'
  | 'verifyUserAccountFromClinic'
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  changeEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  changePassword?: FieldPolicy<any> | FieldReadFunction<any>;
  createArticleComment?: FieldPolicy<any> | FieldReadFunction<any>;
  createArticleRecommendation?: FieldPolicy<any> | FieldReadFunction<any>;
  createClinic?: FieldPolicy<any> | FieldReadFunction<any>;
  createClinicReview?: FieldPolicy<any> | FieldReadFunction<any>;
  createCommentRecommendation?: FieldPolicy<any> | FieldReadFunction<any>;
  createReviewAnswer?: FieldPolicy<any> | FieldReadFunction<any>;
  createReviewAnswerRecommendation?: FieldPolicy<any> | FieldReadFunction<any>;
  createReviewRecommendation?: FieldPolicy<any> | FieldReadFunction<any>;
  createTreatmentComment?: FieldPolicy<any> | FieldReadFunction<any>;
  createTreatmentRecommendation?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteClinicReview?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteClinicUser?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteComment?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteRecommendation?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteReviewAnswer?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
  generateAccessCode?: FieldPolicy<any> | FieldReadFunction<any>;
  generateAccessCodeToNewEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  getUploadUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  loginMobile?: FieldPolicy<any> | FieldReadFunction<any>;
  loginWeb?: FieldPolicy<any> | FieldReadFunction<any>;
  logout?: FieldPolicy<any> | FieldReadFunction<any>;
  refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
  removeArticleAsFavorite?: FieldPolicy<any> | FieldReadFunction<any>;
  removeClinicAsFavorite?: FieldPolicy<any> | FieldReadFunction<any>;
  removeTreatmentAsFavorite?: FieldPolicy<any> | FieldReadFunction<any>;
  replyComment?: FieldPolicy<any> | FieldReadFunction<any>;
  reportComment?: FieldPolicy<any> | FieldReadFunction<any>;
  reportReview?: FieldPolicy<any> | FieldReadFunction<any>;
  reportUser?: FieldPolicy<any> | FieldReadFunction<any>;
  resetPassword?: FieldPolicy<any> | FieldReadFunction<any>;
  setArticleAsFavorite?: FieldPolicy<any> | FieldReadFunction<any>;
  setClinicAsFavorite?: FieldPolicy<any> | FieldReadFunction<any>;
  setClinicNotifications?: FieldPolicy<any> | FieldReadFunction<any>;
  setCustomerNotifications?: FieldPolicy<any> | FieldReadFunction<any>;
  setOnboardingDone?: FieldPolicy<any> | FieldReadFunction<any>;
  setTreatmentAsFavorite?: FieldPolicy<any> | FieldReadFunction<any>;
  socialLoginMobile?: FieldPolicy<any> | FieldReadFunction<any>;
  socialLoginWeb?: FieldPolicy<any> | FieldReadFunction<any>;
  updateClinic?: FieldPolicy<any> | FieldReadFunction<any>;
  updateClinicReview?: FieldPolicy<any> | FieldReadFunction<any>;
  updateComment?: FieldPolicy<any> | FieldReadFunction<any>;
  updateReviewAnswer?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUserProfile?: FieldPolicy<any> | FieldReadFunction<any>;
  verifyUserAccountFromClinic?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type OrderByTypeKeySpecifier = (
  | 'field'
  | 'ordering'
  | OrderByTypeKeySpecifier
)[];
export type OrderByTypeFieldPolicy = {
  field?: FieldPolicy<any> | FieldReadFunction<any>;
  ordering?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PhoneTypeKeySpecifier = (
  | 'number'
  | 'prefix'
  | PhoneTypeKeySpecifier
)[];
export type PhoneTypeFieldPolicy = {
  number?: FieldPolicy<any> | FieldReadFunction<any>;
  prefix?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | 'article'
  | 'articles'
  | 'checkEmailExists'
  | 'clinic'
  | 'clinics'
  | 'comment'
  | 'listAuthors'
  | 'listSymptoms'
  | 'listTreatments'
  | 'me'
  | 'recommendedArticles'
  | 'recommendedClinics'
  | 'recommendedTreatments'
  | 'review'
  | 'treatment'
  | 'treatments'
  | 'user'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  article?: FieldPolicy<any> | FieldReadFunction<any>;
  articles?: FieldPolicy<any> | FieldReadFunction<any>;
  checkEmailExists?: FieldPolicy<any> | FieldReadFunction<any>;
  clinic?: FieldPolicy<any> | FieldReadFunction<any>;
  clinics?: FieldPolicy<any> | FieldReadFunction<any>;
  comment?: FieldPolicy<any> | FieldReadFunction<any>;
  listAuthors?: FieldPolicy<any> | FieldReadFunction<any>;
  listSymptoms?: FieldPolicy<any> | FieldReadFunction<any>;
  listTreatments?: FieldPolicy<any> | FieldReadFunction<any>;
  me?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendedArticles?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendedClinics?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendedTreatments?: FieldPolicy<any> | FieldReadFunction<any>;
  review?: FieldPolicy<any> | FieldReadFunction<any>;
  treatment?: FieldPolicy<any> | FieldReadFunction<any>;
  treatments?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RecommendationErrorTypeKeySpecifier = (
  | 'code'
  | 'field'
  | 'message'
  | RecommendationErrorTypeKeySpecifier
)[];
export type RecommendationErrorTypeFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RecommendationPaginatedTypeKeySpecifier = (
  | 'hasNext'
  | 'hasPrev'
  | 'objects'
  | 'orderBy'
  | 'page'
  | 'pages'
  | 'totalResults'
  | RecommendationPaginatedTypeKeySpecifier
)[];
export type RecommendationPaginatedTypeFieldPolicy = {
  hasNext?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPrev?: FieldPolicy<any> | FieldReadFunction<any>;
  objects?: FieldPolicy<any> | FieldReadFunction<any>;
  orderBy?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  totalResults?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RecommendationTypeKeySpecifier = (
  | 'created'
  | 'id'
  | 'modified'
  | 'object'
  | 'reaction'
  | 'user'
  | RecommendationTypeKeySpecifier
)[];
export type RecommendationTypeFieldPolicy = {
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  object?: FieldPolicy<any> | FieldReadFunction<any>;
  reaction?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RefreshTokenKeySpecifier = (
  | 'errors'
  | 'token'
  | 'user'
  | RefreshTokenKeySpecifier
)[];
export type RefreshTokenFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  token?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RemoveArticleAsFavoriteKeySpecifier = (
  | 'errors'
  | 'removed'
  | RemoveArticleAsFavoriteKeySpecifier
)[];
export type RemoveArticleAsFavoriteFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  removed?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RemoveClinicAsFavoriteKeySpecifier = (
  | 'errors'
  | 'removed'
  | RemoveClinicAsFavoriteKeySpecifier
)[];
export type RemoveClinicAsFavoriteFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  removed?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RemoveTreatmentAsFavoriteKeySpecifier = (
  | 'errors'
  | 'removed'
  | RemoveTreatmentAsFavoriteKeySpecifier
)[];
export type RemoveTreatmentAsFavoriteFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  removed?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReplyCommentKeySpecifier = (
  | 'comment'
  | 'errors'
  | ReplyCommentKeySpecifier
)[];
export type ReplyCommentFieldPolicy = {
  comment?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReportCommentKeySpecifier = (
  | 'errors'
  | 'report'
  | ReportCommentKeySpecifier
)[];
export type ReportCommentFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  report?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReportErrorTypeKeySpecifier = (
  | 'code'
  | 'field'
  | 'message'
  | ReportErrorTypeKeySpecifier
)[];
export type ReportErrorTypeFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReportReviewKeySpecifier = (
  | 'errors'
  | 'report'
  | ReportReviewKeySpecifier
)[];
export type ReportReviewFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  report?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReportTypeKeySpecifier = (
  | 'created'
  | 'id'
  | 'message'
  | 'modified'
  | 'object'
  | 'reason'
  | 'user'
  | ReportTypeKeySpecifier
)[];
export type ReportTypeFieldPolicy = {
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  object?: FieldPolicy<any> | FieldReadFunction<any>;
  reason?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReportUserKeySpecifier = (
  | 'errors'
  | 'report'
  | ReportUserKeySpecifier
)[];
export type ReportUserFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  report?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ResetPasswordKeySpecifier = (
  | 'errors'
  | 'reset'
  | ResetPasswordKeySpecifier
)[];
export type ResetPasswordFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  reset?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReviewAnswerErrorTypeKeySpecifier = (
  | 'code'
  | 'field'
  | 'message'
  | ReviewAnswerErrorTypeKeySpecifier
)[];
export type ReviewAnswerErrorTypeFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReviewAnswerTypeKeySpecifier = (
  | 'badRecommendations'
  | 'clinic'
  | 'created'
  | 'currentUserRecommendation'
  | 'goodRecommendations'
  | 'id'
  | 'message'
  | 'modified'
  | 'user'
  | ReviewAnswerTypeKeySpecifier
)[];
export type ReviewAnswerTypeFieldPolicy = {
  badRecommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  clinic?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  currentUserRecommendation?: FieldPolicy<any> | FieldReadFunction<any>;
  goodRecommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReviewErrorTypeKeySpecifier = (
  | 'code'
  | 'field'
  | 'message'
  | ReviewErrorTypeKeySpecifier
)[];
export type ReviewErrorTypeFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReviewPaginatedTypeKeySpecifier = (
  | 'hasNext'
  | 'hasPrev'
  | 'objects'
  | 'orderBy'
  | 'page'
  | 'pages'
  | 'totalResults'
  | ReviewPaginatedTypeKeySpecifier
)[];
export type ReviewPaginatedTypeFieldPolicy = {
  hasNext?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPrev?: FieldPolicy<any> | FieldReadFunction<any>;
  objects?: FieldPolicy<any> | FieldReadFunction<any>;
  orderBy?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  totalResults?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReviewTypeKeySpecifier = (
  | 'answer'
  | 'badRecommendations'
  | 'banned'
  | 'clinic'
  | 'created'
  | 'currentUserRecommendation'
  | 'goodRecommendations'
  | 'id'
  | 'isSolved'
  | 'message'
  | 'modified'
  | 'recommendations'
  | 'stars'
  | 'user'
  | ReviewTypeKeySpecifier
)[];
export type ReviewTypeFieldPolicy = {
  answer?: FieldPolicy<any> | FieldReadFunction<any>;
  badRecommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  banned?: FieldPolicy<any> | FieldReadFunction<any>;
  clinic?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  currentUserRecommendation?: FieldPolicy<any> | FieldReadFunction<any>;
  goodRecommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isSolved?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  stars?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SectionTypeKeySpecifier = (
  | 'content'
  | 'created'
  | 'id'
  | 'modified'
  | 'order'
  | 'title'
  | 'treatment'
  | SectionTypeKeySpecifier
)[];
export type SectionTypeFieldPolicy = {
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  order?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  treatment?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetArticleAsFavoriteKeySpecifier = (
  | 'errors'
  | 'favorite'
  | SetArticleAsFavoriteKeySpecifier
)[];
export type SetArticleAsFavoriteFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  favorite?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetClinicAsFavoriteKeySpecifier = (
  | 'errors'
  | 'favorite'
  | SetClinicAsFavoriteKeySpecifier
)[];
export type SetClinicAsFavoriteFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  favorite?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetClinicNotificationsKeySpecifier = (
  | 'errors'
  | 'user'
  | SetClinicNotificationsKeySpecifier
)[];
export type SetClinicNotificationsFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetCustomerNotificationsKeySpecifier = (
  | 'errors'
  | 'user'
  | SetCustomerNotificationsKeySpecifier
)[];
export type SetCustomerNotificationsFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetOnboardingDoneKeySpecifier = (
  | 'errors'
  | 'user'
  | SetOnboardingDoneKeySpecifier
)[];
export type SetOnboardingDoneFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SetTreatmentAsFavoriteKeySpecifier = (
  | 'errors'
  | 'favorite'
  | SetTreatmentAsFavoriteKeySpecifier
)[];
export type SetTreatmentAsFavoriteFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  favorite?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SocialLoginMobileKeySpecifier = (
  | 'errors'
  | 'token'
  | 'user'
  | SocialLoginMobileKeySpecifier
)[];
export type SocialLoginMobileFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  token?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SocialLoginWebKeySpecifier = (
  | 'errors'
  | 'refreshToken'
  | 'token'
  | 'user'
  | SocialLoginWebKeySpecifier
)[];
export type SocialLoginWebFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
  token?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StartPercentageTypeKeySpecifier = (
  | 'numberOfReviews'
  | 'percentage'
  | 'stars'
  | StartPercentageTypeKeySpecifier
)[];
export type StartPercentageTypeFieldPolicy = {
  numberOfReviews?: FieldPolicy<any> | FieldReadFunction<any>;
  percentage?: FieldPolicy<any> | FieldReadFunction<any>;
  stars?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SymptomPaginatedTypeKeySpecifier = (
  | 'hasNext'
  | 'hasPrev'
  | 'objects'
  | 'orderBy'
  | 'page'
  | 'pages'
  | 'totalResults'
  | SymptomPaginatedTypeKeySpecifier
)[];
export type SymptomPaginatedTypeFieldPolicy = {
  hasNext?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPrev?: FieldPolicy<any> | FieldReadFunction<any>;
  objects?: FieldPolicy<any> | FieldReadFunction<any>;
  orderBy?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  totalResults?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SymptomTypeKeySpecifier = (
  | 'id'
  | 'name'
  | SymptomTypeKeySpecifier
)[];
export type SymptomTypeFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TreatmentPaginatedTypeKeySpecifier = (
  | 'hasNext'
  | 'hasPrev'
  | 'objects'
  | 'orderBy'
  | 'page'
  | 'pages'
  | 'totalResults'
  | TreatmentPaginatedTypeKeySpecifier
)[];
export type TreatmentPaginatedTypeFieldPolicy = {
  hasNext?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPrev?: FieldPolicy<any> | FieldReadFunction<any>;
  objects?: FieldPolicy<any> | FieldReadFunction<any>;
  orderBy?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  totalResults?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TreatmentTypeKeySpecifier = (
  | 'badRecommendations'
  | 'comments'
  | 'created'
  | 'currentUserRecommendation'
  | 'description'
  | 'goodRecommendations'
  | 'id'
  | 'image'
  | 'isFavorite'
  | 'modified'
  | 'name'
  | 'nearestClinics'
  | 'recommendations'
  | 'sections'
  | 'symptoms'
  | TreatmentTypeKeySpecifier
)[];
export type TreatmentTypeFieldPolicy = {
  badRecommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  comments?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  currentUserRecommendation?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  goodRecommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  isFavorite?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  nearestClinics?: FieldPolicy<any> | FieldReadFunction<any>;
  recommendations?: FieldPolicy<any> | FieldReadFunction<any>;
  sections?: FieldPolicy<any> | FieldReadFunction<any>;
  symptoms?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateClinicKeySpecifier = (
  | 'clinic'
  | 'errors'
  | UpdateClinicKeySpecifier
)[];
export type UpdateClinicFieldPolicy = {
  clinic?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateClinicReviewKeySpecifier = (
  | 'errors'
  | 'review'
  | UpdateClinicReviewKeySpecifier
)[];
export type UpdateClinicReviewFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  review?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateCommentKeySpecifier = (
  | 'comment'
  | 'errors'
  | UpdateCommentKeySpecifier
)[];
export type UpdateCommentFieldPolicy = {
  comment?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateProfileKeySpecifier = (
  | 'errors'
  | 'user'
  | UpdateProfileKeySpecifier
)[];
export type UpdateProfileFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateReviewAnswerKeySpecifier = (
  | 'errors'
  | 'reviewanswer'
  | UpdateReviewAnswerKeySpecifier
)[];
export type UpdateReviewAnswerFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  reviewanswer?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserErrorTypeKeySpecifier = (
  | 'code'
  | 'field'
  | 'message'
  | UserErrorTypeKeySpecifier
)[];
export type UserErrorTypeFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserTypeKeySpecifier = (
  | 'activities'
  | 'avatar'
  | 'biography'
  | 'clinic'
  | 'clinicLogo'
  | 'clinicName'
  | 'clinicTotalReplies'
  | 'created'
  | 'dateOfBirth'
  | 'email'
  | 'favorites'
  | 'fcmToken'
  | 'firstName'
  | 'fromSocialLogin'
  | 'id'
  | 'isActive'
  | 'isClinicCreator'
  | 'isOnboardingDone'
  | 'isVerified'
  | 'lastName'
  | 'location'
  | 'modified'
  | 'notificationsSettings'
  | 'reviews'
  | UserTypeKeySpecifier
)[];
export type UserTypeFieldPolicy = {
  activities?: FieldPolicy<any> | FieldReadFunction<any>;
  avatar?: FieldPolicy<any> | FieldReadFunction<any>;
  biography?: FieldPolicy<any> | FieldReadFunction<any>;
  clinic?: FieldPolicy<any> | FieldReadFunction<any>;
  clinicLogo?: FieldPolicy<any> | FieldReadFunction<any>;
  clinicName?: FieldPolicy<any> | FieldReadFunction<any>;
  clinicTotalReplies?: FieldPolicy<any> | FieldReadFunction<any>;
  created?: FieldPolicy<any> | FieldReadFunction<any>;
  dateOfBirth?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  favorites?: FieldPolicy<any> | FieldReadFunction<any>;
  fcmToken?: FieldPolicy<any> | FieldReadFunction<any>;
  firstName?: FieldPolicy<any> | FieldReadFunction<any>;
  fromSocialLogin?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isActive?: FieldPolicy<any> | FieldReadFunction<any>;
  isClinicCreator?: FieldPolicy<any> | FieldReadFunction<any>;
  isOnboardingDone?: FieldPolicy<any> | FieldReadFunction<any>;
  isVerified?: FieldPolicy<any> | FieldReadFunction<any>;
  lastName?: FieldPolicy<any> | FieldReadFunction<any>;
  location?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  notificationsSettings?: FieldPolicy<any> | FieldReadFunction<any>;
  reviews?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VerifyUserAccountFromClinicKeySpecifier = (
  | 'errors'
  | 'user'
  | VerifyUserAccountFromClinicKeySpecifier
)[];
export type VerifyUserAccountFromClinicFieldPolicy = {
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  ActivityPaginatedType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ActivityPaginatedTypeKeySpecifier
      | (() => undefined | ActivityPaginatedTypeKeySpecifier);
    fields?: ActivityPaginatedTypeFieldPolicy;
  };
  ActivityType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ActivityTypeKeySpecifier
      | (() => undefined | ActivityTypeKeySpecifier);
    fields?: ActivityTypeFieldPolicy;
  };
  ArticlePaginatedType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ArticlePaginatedTypeKeySpecifier
      | (() => undefined | ArticlePaginatedTypeKeySpecifier);
    fields?: ArticlePaginatedTypeFieldPolicy;
  };
  ArticleType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ArticleTypeKeySpecifier
      | (() => undefined | ArticleTypeKeySpecifier);
    fields?: ArticleTypeFieldPolicy;
  };
  AuthorType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AuthorTypeKeySpecifier
      | (() => undefined | AuthorTypeKeySpecifier);
    fields?: AuthorTypeFieldPolicy;
  };
  ChangeEmail?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ChangeEmailKeySpecifier
      | (() => undefined | ChangeEmailKeySpecifier);
    fields?: ChangeEmailFieldPolicy;
  };
  ChangePassword?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ChangePasswordKeySpecifier
      | (() => undefined | ChangePasswordKeySpecifier);
    fields?: ChangePasswordFieldPolicy;
  };
  ClinicErrorType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ClinicErrorTypeKeySpecifier
      | (() => undefined | ClinicErrorTypeKeySpecifier);
    fields?: ClinicErrorTypeFieldPolicy;
  };
  ClinicImagePaginatedType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ClinicImagePaginatedTypeKeySpecifier
      | (() => undefined | ClinicImagePaginatedTypeKeySpecifier);
    fields?: ClinicImagePaginatedTypeFieldPolicy;
  };
  ClinicImageType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ClinicImageTypeKeySpecifier
      | (() => undefined | ClinicImageTypeKeySpecifier);
    fields?: ClinicImageTypeFieldPolicy;
  };
  ClinicNotificationSettingType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ClinicNotificationSettingTypeKeySpecifier
      | (() => undefined | ClinicNotificationSettingTypeKeySpecifier);
    fields?: ClinicNotificationSettingTypeFieldPolicy;
  };
  ClinicPaginatedType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ClinicPaginatedTypeKeySpecifier
      | (() => undefined | ClinicPaginatedTypeKeySpecifier);
    fields?: ClinicPaginatedTypeFieldPolicy;
  };
  ClinicType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ClinicTypeKeySpecifier
      | (() => undefined | ClinicTypeKeySpecifier);
    fields?: ClinicTypeFieldPolicy;
  };
  CommentErrorType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CommentErrorTypeKeySpecifier
      | (() => undefined | CommentErrorTypeKeySpecifier);
    fields?: CommentErrorTypeFieldPolicy;
  };
  CommentPaginatedType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CommentPaginatedTypeKeySpecifier
      | (() => undefined | CommentPaginatedTypeKeySpecifier);
    fields?: CommentPaginatedTypeFieldPolicy;
  };
  CommentType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CommentTypeKeySpecifier
      | (() => undefined | CommentTypeKeySpecifier);
    fields?: CommentTypeFieldPolicy;
  };
  CreateArticleComment?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateArticleCommentKeySpecifier
      | (() => undefined | CreateArticleCommentKeySpecifier);
    fields?: CreateArticleCommentFieldPolicy;
  };
  CreateArticleRecommendation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateArticleRecommendationKeySpecifier
      | (() => undefined | CreateArticleRecommendationKeySpecifier);
    fields?: CreateArticleRecommendationFieldPolicy;
  };
  CreateClinic?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateClinicKeySpecifier
      | (() => undefined | CreateClinicKeySpecifier);
    fields?: CreateClinicFieldPolicy;
  };
  CreateClinicReview?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateClinicReviewKeySpecifier
      | (() => undefined | CreateClinicReviewKeySpecifier);
    fields?: CreateClinicReviewFieldPolicy;
  };
  CreateCommentRecommendation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateCommentRecommendationKeySpecifier
      | (() => undefined | CreateCommentRecommendationKeySpecifier);
    fields?: CreateCommentRecommendationFieldPolicy;
  };
  CreateLink?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateLinkKeySpecifier
      | (() => undefined | CreateLinkKeySpecifier);
    fields?: CreateLinkFieldPolicy;
  };
  CreateReviewAnswer?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateReviewAnswerKeySpecifier
      | (() => undefined | CreateReviewAnswerKeySpecifier);
    fields?: CreateReviewAnswerFieldPolicy;
  };
  CreateReviewAnswerRecommendation?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | CreateReviewAnswerRecommendationKeySpecifier
      | (() => undefined | CreateReviewAnswerRecommendationKeySpecifier);
    fields?: CreateReviewAnswerRecommendationFieldPolicy;
  };
  CreateReviewRecommendation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateReviewRecommendationKeySpecifier
      | (() => undefined | CreateReviewRecommendationKeySpecifier);
    fields?: CreateReviewRecommendationFieldPolicy;
  };
  CreateTreatmentComment?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateTreatmentCommentKeySpecifier
      | (() => undefined | CreateTreatmentCommentKeySpecifier);
    fields?: CreateTreatmentCommentFieldPolicy;
  };
  CreateTreatmentRecommendation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateTreatmentRecommendationKeySpecifier
      | (() => undefined | CreateTreatmentRecommendationKeySpecifier);
    fields?: CreateTreatmentRecommendationFieldPolicy;
  };
  CustomerNotificationSettingType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CustomerNotificationSettingTypeKeySpecifier
      | (() => undefined | CustomerNotificationSettingTypeKeySpecifier);
    fields?: CustomerNotificationSettingTypeFieldPolicy;
  };
  DeleteClinicReview?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | DeleteClinicReviewKeySpecifier
      | (() => undefined | DeleteClinicReviewKeySpecifier);
    fields?: DeleteClinicReviewFieldPolicy;
  };
  DeleteClinicUser?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | DeleteClinicUserKeySpecifier
      | (() => undefined | DeleteClinicUserKeySpecifier);
    fields?: DeleteClinicUserFieldPolicy;
  };
  DeleteComment?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | DeleteCommentKeySpecifier
      | (() => undefined | DeleteCommentKeySpecifier);
    fields?: DeleteCommentFieldPolicy;
  };
  DeleteRecommendation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | DeleteRecommendationKeySpecifier
      | (() => undefined | DeleteRecommendationKeySpecifier);
    fields?: DeleteRecommendationFieldPolicy;
  };
  DeleteReviewAnswer?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | DeleteReviewAnswerKeySpecifier
      | (() => undefined | DeleteReviewAnswerKeySpecifier);
    fields?: DeleteReviewAnswerFieldPolicy;
  };
  DeleteUser?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | DeleteUserKeySpecifier
      | (() => undefined | DeleteUserKeySpecifier);
    fields?: DeleteUserFieldPolicy;
  };
  FavoriteErrorType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | FavoriteErrorTypeKeySpecifier
      | (() => undefined | FavoriteErrorTypeKeySpecifier);
    fields?: FavoriteErrorTypeFieldPolicy;
  };
  FavoritePaginatedType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | FavoritePaginatedTypeKeySpecifier
      | (() => undefined | FavoritePaginatedTypeKeySpecifier);
    fields?: FavoritePaginatedTypeFieldPolicy;
  };
  FavoriteType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | FavoriteTypeKeySpecifier
      | (() => undefined | FavoriteTypeKeySpecifier);
    fields?: FavoriteTypeFieldPolicy;
  };
  GenerateAccessCode?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | GenerateAccessCodeKeySpecifier
      | (() => undefined | GenerateAccessCodeKeySpecifier);
    fields?: GenerateAccessCodeFieldPolicy;
  };
  GenerateAccessCodeToNewEmail?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | GenerateAccessCodeToNewEmailKeySpecifier
      | (() => undefined | GenerateAccessCodeToNewEmailKeySpecifier);
    fields?: GenerateAccessCodeToNewEmailFieldPolicy;
  };
  LocationType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LocationTypeKeySpecifier
      | (() => undefined | LocationTypeKeySpecifier);
    fields?: LocationTypeFieldPolicy;
  };
  LoginMobile?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LoginMobileKeySpecifier
      | (() => undefined | LoginMobileKeySpecifier);
    fields?: LoginMobileFieldPolicy;
  };
  LoginWeb?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LoginWebKeySpecifier
      | (() => undefined | LoginWebKeySpecifier);
    fields?: LoginWebFieldPolicy;
  };
  Logout?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LogoutKeySpecifier
      | (() => undefined | LogoutKeySpecifier);
    fields?: LogoutFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  OrderByType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | OrderByTypeKeySpecifier
      | (() => undefined | OrderByTypeKeySpecifier);
    fields?: OrderByTypeFieldPolicy;
  };
  PhoneType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PhoneTypeKeySpecifier
      | (() => undefined | PhoneTypeKeySpecifier);
    fields?: PhoneTypeFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  RecommendationErrorType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | RecommendationErrorTypeKeySpecifier
      | (() => undefined | RecommendationErrorTypeKeySpecifier);
    fields?: RecommendationErrorTypeFieldPolicy;
  };
  RecommendationPaginatedType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | RecommendationPaginatedTypeKeySpecifier
      | (() => undefined | RecommendationPaginatedTypeKeySpecifier);
    fields?: RecommendationPaginatedTypeFieldPolicy;
  };
  RecommendationType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | RecommendationTypeKeySpecifier
      | (() => undefined | RecommendationTypeKeySpecifier);
    fields?: RecommendationTypeFieldPolicy;
  };
  RefreshToken?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | RefreshTokenKeySpecifier
      | (() => undefined | RefreshTokenKeySpecifier);
    fields?: RefreshTokenFieldPolicy;
  };
  RemoveArticleAsFavorite?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | RemoveArticleAsFavoriteKeySpecifier
      | (() => undefined | RemoveArticleAsFavoriteKeySpecifier);
    fields?: RemoveArticleAsFavoriteFieldPolicy;
  };
  RemoveClinicAsFavorite?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | RemoveClinicAsFavoriteKeySpecifier
      | (() => undefined | RemoveClinicAsFavoriteKeySpecifier);
    fields?: RemoveClinicAsFavoriteFieldPolicy;
  };
  RemoveTreatmentAsFavorite?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | RemoveTreatmentAsFavoriteKeySpecifier
      | (() => undefined | RemoveTreatmentAsFavoriteKeySpecifier);
    fields?: RemoveTreatmentAsFavoriteFieldPolicy;
  };
  ReplyComment?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ReplyCommentKeySpecifier
      | (() => undefined | ReplyCommentKeySpecifier);
    fields?: ReplyCommentFieldPolicy;
  };
  ReportComment?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ReportCommentKeySpecifier
      | (() => undefined | ReportCommentKeySpecifier);
    fields?: ReportCommentFieldPolicy;
  };
  ReportErrorType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ReportErrorTypeKeySpecifier
      | (() => undefined | ReportErrorTypeKeySpecifier);
    fields?: ReportErrorTypeFieldPolicy;
  };
  ReportReview?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ReportReviewKeySpecifier
      | (() => undefined | ReportReviewKeySpecifier);
    fields?: ReportReviewFieldPolicy;
  };
  ReportType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ReportTypeKeySpecifier
      | (() => undefined | ReportTypeKeySpecifier);
    fields?: ReportTypeFieldPolicy;
  };
  ReportUser?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ReportUserKeySpecifier
      | (() => undefined | ReportUserKeySpecifier);
    fields?: ReportUserFieldPolicy;
  };
  ResetPassword?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ResetPasswordKeySpecifier
      | (() => undefined | ResetPasswordKeySpecifier);
    fields?: ResetPasswordFieldPolicy;
  };
  ReviewAnswerErrorType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ReviewAnswerErrorTypeKeySpecifier
      | (() => undefined | ReviewAnswerErrorTypeKeySpecifier);
    fields?: ReviewAnswerErrorTypeFieldPolicy;
  };
  ReviewAnswerType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ReviewAnswerTypeKeySpecifier
      | (() => undefined | ReviewAnswerTypeKeySpecifier);
    fields?: ReviewAnswerTypeFieldPolicy;
  };
  ReviewErrorType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ReviewErrorTypeKeySpecifier
      | (() => undefined | ReviewErrorTypeKeySpecifier);
    fields?: ReviewErrorTypeFieldPolicy;
  };
  ReviewPaginatedType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ReviewPaginatedTypeKeySpecifier
      | (() => undefined | ReviewPaginatedTypeKeySpecifier);
    fields?: ReviewPaginatedTypeFieldPolicy;
  };
  ReviewType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ReviewTypeKeySpecifier
      | (() => undefined | ReviewTypeKeySpecifier);
    fields?: ReviewTypeFieldPolicy;
  };
  SectionType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SectionTypeKeySpecifier
      | (() => undefined | SectionTypeKeySpecifier);
    fields?: SectionTypeFieldPolicy;
  };
  SetArticleAsFavorite?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SetArticleAsFavoriteKeySpecifier
      | (() => undefined | SetArticleAsFavoriteKeySpecifier);
    fields?: SetArticleAsFavoriteFieldPolicy;
  };
  SetClinicAsFavorite?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SetClinicAsFavoriteKeySpecifier
      | (() => undefined | SetClinicAsFavoriteKeySpecifier);
    fields?: SetClinicAsFavoriteFieldPolicy;
  };
  SetClinicNotifications?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SetClinicNotificationsKeySpecifier
      | (() => undefined | SetClinicNotificationsKeySpecifier);
    fields?: SetClinicNotificationsFieldPolicy;
  };
  SetCustomerNotifications?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SetCustomerNotificationsKeySpecifier
      | (() => undefined | SetCustomerNotificationsKeySpecifier);
    fields?: SetCustomerNotificationsFieldPolicy;
  };
  SetOnboardingDone?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SetOnboardingDoneKeySpecifier
      | (() => undefined | SetOnboardingDoneKeySpecifier);
    fields?: SetOnboardingDoneFieldPolicy;
  };
  SetTreatmentAsFavorite?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SetTreatmentAsFavoriteKeySpecifier
      | (() => undefined | SetTreatmentAsFavoriteKeySpecifier);
    fields?: SetTreatmentAsFavoriteFieldPolicy;
  };
  SocialLoginMobile?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SocialLoginMobileKeySpecifier
      | (() => undefined | SocialLoginMobileKeySpecifier);
    fields?: SocialLoginMobileFieldPolicy;
  };
  SocialLoginWeb?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SocialLoginWebKeySpecifier
      | (() => undefined | SocialLoginWebKeySpecifier);
    fields?: SocialLoginWebFieldPolicy;
  };
  StartPercentageType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | StartPercentageTypeKeySpecifier
      | (() => undefined | StartPercentageTypeKeySpecifier);
    fields?: StartPercentageTypeFieldPolicy;
  };
  SymptomPaginatedType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SymptomPaginatedTypeKeySpecifier
      | (() => undefined | SymptomPaginatedTypeKeySpecifier);
    fields?: SymptomPaginatedTypeFieldPolicy;
  };
  SymptomType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SymptomTypeKeySpecifier
      | (() => undefined | SymptomTypeKeySpecifier);
    fields?: SymptomTypeFieldPolicy;
  };
  TreatmentPaginatedType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | TreatmentPaginatedTypeKeySpecifier
      | (() => undefined | TreatmentPaginatedTypeKeySpecifier);
    fields?: TreatmentPaginatedTypeFieldPolicy;
  };
  TreatmentType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | TreatmentTypeKeySpecifier
      | (() => undefined | TreatmentTypeKeySpecifier);
    fields?: TreatmentTypeFieldPolicy;
  };
  UpdateClinic?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UpdateClinicKeySpecifier
      | (() => undefined | UpdateClinicKeySpecifier);
    fields?: UpdateClinicFieldPolicy;
  };
  UpdateClinicReview?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UpdateClinicReviewKeySpecifier
      | (() => undefined | UpdateClinicReviewKeySpecifier);
    fields?: UpdateClinicReviewFieldPolicy;
  };
  UpdateComment?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UpdateCommentKeySpecifier
      | (() => undefined | UpdateCommentKeySpecifier);
    fields?: UpdateCommentFieldPolicy;
  };
  UpdateProfile?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UpdateProfileKeySpecifier
      | (() => undefined | UpdateProfileKeySpecifier);
    fields?: UpdateProfileFieldPolicy;
  };
  UpdateReviewAnswer?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UpdateReviewAnswerKeySpecifier
      | (() => undefined | UpdateReviewAnswerKeySpecifier);
    fields?: UpdateReviewAnswerFieldPolicy;
  };
  UserErrorType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UserErrorTypeKeySpecifier
      | (() => undefined | UserErrorTypeKeySpecifier);
    fields?: UserErrorTypeFieldPolicy;
  };
  UserType?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UserTypeKeySpecifier
      | (() => undefined | UserTypeKeySpecifier);
    fields?: UserTypeFieldPolicy;
  };
  VerifyUserAccountFromClinic?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | VerifyUserAccountFromClinicKeySpecifier
      | (() => undefined | VerifyUserAccountFromClinicKeySpecifier);
    fields?: VerifyUserAccountFromClinicFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
