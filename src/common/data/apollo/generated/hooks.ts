/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined | null;
export type InputMaybe<T> = T | undefined | null;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSONString: string;
  UUID: string;
};

/** An enumeration. */
export enum ActivityAction {
  /** Comment reply */
  CommentReply = 'COMMENT_REPLY',
  /** New comment */
  NewComment = 'NEW_COMMENT',
  /** Recommend article */
  RecommedArticle = 'RECOMMED_ARTICLE',
  /** Recommend treatment */
  RecommedTreatment = 'RECOMMED_TREATMENT',
  /** Recommend comment */
  RecommendComment = 'RECOMMEND_COMMENT',
  /** Recommend review */
  RecommendReview = 'RECOMMEND_REVIEW',
  /** Recommend review answer */
  RecommendReviewAnswer = 'RECOMMEND_REVIEW_ANSWER',
  /** Review sent */
  ReviewSent = 'REVIEW_SENT',
}

export type ActivityPaginatedType = {
  __typename?: 'ActivityPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']>;
  hasPrev?: Maybe<Scalars['Boolean']>;
  objects: Array<ActivityType>;
  orderBy?: Maybe<Array<OrderByType>>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type ActivityType = {
  __typename?: 'ActivityType';
  action: ActivityAction;
  created?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  modified?: Maybe<Scalars['DateTime']>;
  object?: Maybe<ActivityUnionType>;
  user?: Maybe<UserType>;
};

export type ActivityUnionType =
  | ArticleType
  | ClinicType
  | CommentType
  | RecommendationType
  | ReviewType
  | TreatmentType;

export type ArticleFilterInputType = {
  /** List of authors' IDs */
  authors?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Search articles by title */
  search?: InputMaybe<Scalars['String']>;
  /** List of Symptoms' IDs */
  symptoms?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
};

export type ArticleOrderByInputType = {
  direction: OrderingDirectionEnum;
  option: ArticleOrderingOptionEnum;
};

/** An enumeration. */
export enum ArticleOrderingOptionEnum {
  Comments = 'COMMENTS',
  Upvoted = 'UPVOTED',
}

export type ArticlePaginatedType = {
  __typename?: 'ArticlePaginatedType';
  hasNext?: Maybe<Scalars['Boolean']>;
  hasPrev?: Maybe<Scalars['Boolean']>;
  objects: Array<ArticleType>;
  orderBy?: Maybe<Array<OrderByType>>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type ArticleType = {
  __typename?: 'ArticleType';
  author?: Maybe<AuthorType>;
  badRecommendations?: Maybe<Scalars['Int']>;
  comments?: Maybe<CommentPaginatedType>;
  content: Scalars['String'];
  created?: Maybe<Scalars['DateTime']>;
  currentUserRecommendation?: Maybe<RecommendationType>;
  goodRecommendations?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  image?: Maybe<Scalars['String']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['DateTime']>;
  readingTime?: Maybe<Scalars['Float']>;
  recommendations?: Maybe<RecommendationPaginatedType>;
  symptoms?: Maybe<SymptomPaginatedType>;
  title: Scalars['String'];
  treatments?: Maybe<TreatmentPaginatedType>;
};

export type ArticleTypeCommentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ArticleTypeRecommendationsArgs = {
  filter?: InputMaybe<RecommendationReactionFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ArticleTypeSymptomsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ArticleTypeTreatmentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type AuthorType = {
  __typename?: 'AuthorType';
  articles?: Maybe<ArticlePaginatedType>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  totalArticles?: Maybe<Scalars['Int']>;
};

export type AuthorTypeArticlesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Changes user email. */
export type ChangeEmail = {
  __typename?: 'ChangeEmail';
  errors: Array<UserErrorType>;
  user?: Maybe<UserType>;
};

export type ChangeEmailInput = {
  /** Code to allow operation. */
  code: Scalars['String'];
  newEmail: Scalars['String'];
};

/** Changes user password. */
export type ChangePassword = {
  __typename?: 'ChangePassword';
  errors: Array<UserErrorType>;
  passwordChanged?: Maybe<Scalars['Boolean']>;
};

export type ChangePasswordInput = {
  /** Current password. */
  currentPassword: Scalars['String'];
  /** New passowrd. */
  newPassword: Scalars['String'];
  /** Repeated new password. */
  repeatedNewPassword: Scalars['String'];
};

/** An enumeration. */
export enum ClinicErrorCodes {
  AlreadyExists = 'ALREADY_EXISTS',
  Inactive = 'INACTIVE',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type ClinicErrorType = {
  __typename?: 'ClinicErrorType';
  /** Clinic error code. */
  code: ClinicErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

export type ClinicFilterInputType = {
  /** Radius in km */
  radius?: InputMaybe<Scalars['Int']>;
  /** Search clinics by name */
  search?: InputMaybe<Scalars['String']>;
  /** List of Symptoms' IDs */
  symptoms?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** List of Treatmentss' IDs */
  treatments?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
};

export type ClinicImageInput = {
  /** Clinic's image. */
  imageUrl: Scalars['String'];
  /** Is default. */
  isDefault?: InputMaybe<Scalars['Boolean']>;
};

export type ClinicImagePaginatedType = {
  __typename?: 'ClinicImagePaginatedType';
  hasNext?: Maybe<Scalars['Boolean']>;
  hasPrev?: Maybe<Scalars['Boolean']>;
  objects: Array<ClinicImageType>;
  orderBy?: Maybe<Array<OrderByType>>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type ClinicImageType = {
  __typename?: 'ClinicImageType';
  id: Scalars['UUID'];
  image: Scalars['String'];
  isDefault: Scalars['Boolean'];
};

export type ClinicNotificationSettingType = {
  __typename?: 'ClinicNotificationSettingType';
  created?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  interactionEmail: Scalars['Boolean'];
  modified?: Maybe<Scalars['DateTime']>;
  reviewEmail: Scalars['Boolean'];
};

export type ClinicOrderByInputType = {
  direction: OrderingDirectionEnum;
  option: ClinicOrderingOptionEnum;
};

/** An enumeration. */
export enum ClinicOrderingOptionEnum {
  Distance = 'DISTANCE',
  Rating = 'RATING',
  Reviews = 'REVIEWS',
}

export type ClinicPaginatedType = {
  __typename?: 'ClinicPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']>;
  hasPrev?: Maybe<Scalars['Boolean']>;
  objects: Array<ClinicType>;
  orderBy?: Maybe<Array<OrderByType>>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum ClinicReviewStatusEnum {
  Pending = 'PENDING',
  Solved = 'SOLVED',
}

/** An enumeration. */
export enum ClinicStatus {
  /** Approved */
  Approved = 'APPROVED',
  /** Rejected */
  Rejected = 'REJECTED',
  /** Reviewing */
  Reviewing = 'REVIEWING',
}

export type ClinicType = {
  __typename?: 'ClinicType';
  additionalInfo: Scalars['String'];
  calendar?: Maybe<Scalars['JSONString']>;
  created?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  images?: Maybe<ClinicImagePaginatedType>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  isReviewed?: Maybe<Scalars['Boolean']>;
  location?: Maybe<LocationType>;
  logo?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  owner?: Maybe<UserType>;
  phone?: Maybe<PhoneType>;
  rating: Scalars['Float'];
  relatedClinics?: Maybe<ClinicPaginatedType>;
  reviews?: Maybe<ReviewPaginatedType>;
  reviewsStarsPercentages: Array<Maybe<StartPercentageType>>;
  status: ClinicStatus;
  symptoms?: Maybe<SymptomPaginatedType>;
  totalReviews?: Maybe<Scalars['Int']>;
  treatments?: Maybe<TreatmentPaginatedType>;
  website?: Maybe<Scalars['String']>;
};

export type ClinicTypeImagesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ClinicTypeRelatedClinicsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ClinicTypeReviewsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<ClinicReviewStatusEnum>;
};

export type ClinicTypeSymptomsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ClinicTypeTreatmentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** An enumeration. */
export enum CommentErrorCodes {
  AlreadyExists = 'ALREADY_EXISTS',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
}

export type CommentErrorType = {
  __typename?: 'CommentErrorType';
  /** Comment error code. */
  code: CommentErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

export type CommentPaginatedType = {
  __typename?: 'CommentPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']>;
  hasPrev?: Maybe<Scalars['Boolean']>;
  objects: Array<CommentType>;
  orderBy?: Maybe<Array<OrderByType>>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type CommentType = {
  __typename?: 'CommentType';
  answers?: Maybe<CommentPaginatedType>;
  badRecommendations?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['DateTime']>;
  currentUserRecommendation?: Maybe<RecommendationType>;
  deleted: Scalars['Boolean'];
  goodRecommendations?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  isReply?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  modified?: Maybe<Scalars['DateTime']>;
  object?: Maybe<CommentUnionType>;
  parent?: Maybe<CommentType>;
  recommendations?: Maybe<RecommendationPaginatedType>;
  user?: Maybe<UserType>;
};

export type CommentTypeAnswersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type CommentTypeRecommendationsArgs = {
  filter?: InputMaybe<RecommendationReactionFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type CommentUnionType = ArticleType | TreatmentType;

/** Creates an article's comment */
export type CreateArticleComment = {
  __typename?: 'CreateArticleComment';
  comment?: Maybe<CommentType>;
  errors: Array<CommentErrorType>;
};

export type CreateArticleCommentInput = {
  /** Article's ID */
  article: Scalars['UUID'];
  message: Scalars['String'];
};

/** Creates an article's recommendation */
export type CreateArticleRecommendation = {
  __typename?: 'CreateArticleRecommendation';
  errors: Array<RecommendationErrorType>;
  recommendation?: Maybe<RecommendationType>;
};

export type CreateArticleRecommendationInput = {
  /** Article's ID */
  article: Scalars['UUID'];
  reaction: RecommendationReactionEnum;
};

/** Creates a clinic */
export type CreateClinic = {
  __typename?: 'CreateClinic';
  clinic?: Maybe<ClinicType>;
  errors: Array<ClinicErrorType>;
};

export type CreateClinicInput = {
  /** Clinic's aditional info. */
  additionalInfo?: InputMaybe<Scalars['String']>;
  /** Clinic's calendar. */
  calendar?: InputMaybe<Scalars['String']>;
  /** Clinic's description. */
  description?: InputMaybe<Scalars['String']>;
  /** Clinic's email. */
  email?: InputMaybe<Scalars['String']>;
  /** Clinic's phone. */
  fullPhone?: InputMaybe<PhoneInputType>;
  /** Clinic's images. */
  images?: InputMaybe<Array<InputMaybe<ClinicImageInput>>>;
  location: LocationInputType;
  /** Clinic's logo. */
  logo?: InputMaybe<Scalars['String']>;
  /** Clinic's name. */
  name: Scalars['String'];
  /** Clinic's symptoms. */
  symptoms?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Clinic's treatments. */
  treatments?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Clinic's website url. */
  website?: InputMaybe<Scalars['String']>;
};

/** Creates a clinic's review */
export type CreateClinicReview = {
  __typename?: 'CreateClinicReview';
  errors: Array<ReviewErrorType>;
  review?: Maybe<ReviewType>;
};

export type CreateClinicReviewInput = {
  /** Clinic to be reviewed. */
  clinic: Scalars['UUID'];
  /** Review's message. */
  message: Scalars['String'];
  /** Review's stars. */
  stars: Scalars['Int'];
};

/** Creates a comment's recommendation */
export type CreateCommentRecommendation = {
  __typename?: 'CreateCommentRecommendation';
  errors: Array<RecommendationErrorType>;
  recommendation?: Maybe<RecommendationType>;
};

export type CreateCommentRecommendationInput = {
  /** Comment's ID */
  comment: Scalars['UUID'];
  reaction: RecommendationReactionEnum;
};

export type CreateLink = {
  __typename?: 'CreateLink';
  contentType?: Maybe<Scalars['String']>;
  retrieveUrl?: Maybe<Scalars['String']>;
  uploadUrl?: Maybe<Scalars['String']>;
};

/** Creates a review's reply */
export type CreateReviewAnswer = {
  __typename?: 'CreateReviewAnswer';
  errors: Array<ReviewAnswerErrorType>;
  reviewanswer?: Maybe<ReviewAnswerType>;
};

export type CreateReviewAnswerInput = {
  /** Review reply message. */
  message: Scalars['String'];
  /** Review's ID to reply to */
  review: Scalars['UUID'];
};

/** Creates a review answer's recommendation */
export type CreateReviewAnswerRecommendation = {
  __typename?: 'CreateReviewAnswerRecommendation';
  errors: Array<RecommendationErrorType>;
  recommendation?: Maybe<RecommendationType>;
};

export type CreateReviewAnswerRecommendationInput = {
  reaction: RecommendationReactionEnum;
  /** Review Answer's ID */
  reviewAnswer: Scalars['UUID'];
};

/** Creates a review's recommendation */
export type CreateReviewRecommendation = {
  __typename?: 'CreateReviewRecommendation';
  errors: Array<RecommendationErrorType>;
  recommendation?: Maybe<RecommendationType>;
};

export type CreateReviewRecommendationInput = {
  reaction: RecommendationReactionEnum;
  /** Review's ID */
  review: Scalars['UUID'];
};

/** Creates a treatment's comment */
export type CreateTreatmentComment = {
  __typename?: 'CreateTreatmentComment';
  comment?: Maybe<CommentType>;
  errors: Array<CommentErrorType>;
};

export type CreateTreatmentCommentInput = {
  message: Scalars['String'];
  /** Treatment's ID */
  treatment: Scalars['UUID'];
};

/** Creates a treatment's recommendation */
export type CreateTreatmentRecommendation = {
  __typename?: 'CreateTreatmentRecommendation';
  errors: Array<RecommendationErrorType>;
  recommendation?: Maybe<RecommendationType>;
};

export type CreateTreatmentRecommendationInput = {
  reaction: RecommendationReactionEnum;
  /** Treatment's ID */
  treatment: Scalars['UUID'];
};

export type CustomerNotificationSettingType = {
  __typename?: 'CustomerNotificationSettingType';
  contentEmail: Scalars['Boolean'];
  contentPush: Scalars['Boolean'];
  created?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  interactionEmail: Scalars['Boolean'];
  interactionPush: Scalars['Boolean'];
  modified?: Maybe<Scalars['DateTime']>;
};

/** Deletes a clinic's review */
export type DeleteClinicReview = {
  __typename?: 'DeleteClinicReview';
  errors: Array<ReviewErrorType>;
  review?: Maybe<ReviewType>;
};

/** Deletes a User owner of Clinic and their Clinic if any */
export type DeleteClinicUser = {
  __typename?: 'DeleteClinicUser';
  errors: Array<UserErrorType>;
  user?: Maybe<UserType>;
};

/** Deletes a comment */
export type DeleteComment = {
  __typename?: 'DeleteComment';
  comment?: Maybe<CommentType>;
  errors: Array<CommentErrorType>;
};

/** Deletes a recommendation */
export type DeleteRecommendation = {
  __typename?: 'DeleteRecommendation';
  errors: Array<RecommendationErrorType>;
  recommendation?: Maybe<RecommendationType>;
};

/** Deletes Clinic's review reply */
export type DeleteReviewAnswer = {
  __typename?: 'DeleteReviewAnswer';
  errors: Array<ReviewAnswerErrorType>;
  reviewanswer?: Maybe<ReviewAnswerType>;
};

/** Deletes a User */
export type DeleteUser = {
  __typename?: 'DeleteUser';
  errors: Array<UserErrorType>;
  user?: Maybe<UserType>;
};

/** An enumeration. */
export enum FavoriteErrorCodes {
  AlreadyExists = 'ALREADY_EXISTS',
  Inactive = 'INACTIVE',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
}

export type FavoriteErrorType = {
  __typename?: 'FavoriteErrorType';
  /** Favorite error code. */
  code: FavoriteErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

export type FavoritePaginatedType = {
  __typename?: 'FavoritePaginatedType';
  hasNext?: Maybe<Scalars['Boolean']>;
  hasPrev?: Maybe<Scalars['Boolean']>;
  objects: Array<FavoriteType>;
  orderBy?: Maybe<Array<OrderByType>>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type FavoriteType = {
  __typename?: 'FavoriteType';
  created?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  modified?: Maybe<Scalars['DateTime']>;
  object?: Maybe<FavoriteUnionType>;
  user?: Maybe<UserType>;
};

export type FavoriteUnionType = ArticleType | ClinicType | TreatmentType;

/** An enumeration. */
export enum FilterFavoriteByTypeEnum {
  Article = 'ARTICLE',
  Clinic = 'CLINIC',
  Treatment = 'TREATMENT',
}

/** Generates one-time login code. */
export type GenerateAccessCode = {
  __typename?: 'GenerateAccessCode';
  /** Flag that determines if the code has been sent */
  accessCodeSent?: Maybe<Scalars['Boolean']>;
  errors: Array<UserErrorType>;
};

export type GenerateAccessCodeInput = {
  email: Scalars['String'];
  platform: PlatformType;
};

/** Generates one-time login code. */
export type GenerateAccessCodeToNewEmail = {
  __typename?: 'GenerateAccessCodeToNewEmail';
  /** Flag that determines if the code has been sent */
  accessCodeSent?: Maybe<Scalars['Boolean']>;
  errors: Array<UserErrorType>;
};

export type GenerateAccessCodeToNewEmailInput = {
  email: Scalars['String'];
  newEmail: Scalars['String'];
  platform: PlatformType;
};

export type LocationInputType = {
  fullAddress: Scalars['String'];
  point: PointInputType;
};

export type LocationType = {
  __typename?: 'LocationType';
  fullAddress?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** Creates JWT mobile token. */
export type LoginMobile = {
  __typename?: 'LoginMobile';
  errors: Array<UserErrorType>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<UserType>;
};

/** Creates JWT web token. */
export type LoginWeb = {
  __typename?: 'LoginWeb';
  errors: Array<UserErrorType>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<UserType>;
};

/** Logged out user. */
export type Logout = {
  __typename?: 'Logout';
  errors: Array<UserErrorType>;
  loggedOut?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Changes user email. */
  changeEmail?: Maybe<ChangeEmail>;
  /** Changes user password. */
  changePassword?: Maybe<ChangePassword>;
  /** Creates an article's comment */
  createArticleComment?: Maybe<CreateArticleComment>;
  /** Creates an article's recommendation */
  createArticleRecommendation?: Maybe<CreateArticleRecommendation>;
  /** Creates a clinic */
  createClinic?: Maybe<CreateClinic>;
  /** Creates a clinic's review */
  createClinicReview?: Maybe<CreateClinicReview>;
  /** Creates a comment's recommendation */
  createCommentRecommendation?: Maybe<CreateCommentRecommendation>;
  /** Creates a review's reply */
  createReviewAnswer?: Maybe<CreateReviewAnswer>;
  /** Creates a review answer's recommendation */
  createReviewAnswerRecommendation?: Maybe<CreateReviewAnswerRecommendation>;
  /** Creates a review's recommendation */
  createReviewRecommendation?: Maybe<CreateReviewRecommendation>;
  /** Creates a treatment's comment */
  createTreatmentComment?: Maybe<CreateTreatmentComment>;
  /** Creates a treatment's recommendation */
  createTreatmentRecommendation?: Maybe<CreateTreatmentRecommendation>;
  /** Deletes a clinic's review */
  deleteClinicReview?: Maybe<DeleteClinicReview>;
  /** Deletes a User owner of Clinic and their Clinic if any */
  deleteClinicUser?: Maybe<DeleteClinicUser>;
  /** Deletes a comment */
  deleteComment?: Maybe<DeleteComment>;
  /** Deletes a recommendation */
  deleteRecommendation?: Maybe<DeleteRecommendation>;
  /** Deletes Clinic's review reply */
  deleteReviewAnswer?: Maybe<DeleteReviewAnswer>;
  /** Deletes a User */
  deleteUser?: Maybe<DeleteUser>;
  /** Generates one-time login code. */
  generateAccessCode?: Maybe<GenerateAccessCode>;
  /** Generates one-time login code. */
  generateAccessCodeToNewEmail?: Maybe<GenerateAccessCodeToNewEmail>;
  getUploadUrl?: Maybe<CreateLink>;
  /** Creates JWT mobile token. */
  loginMobile?: Maybe<LoginMobile>;
  /** Creates JWT web token. */
  loginWeb?: Maybe<LoginWeb>;
  /** Logged out user. */
  logout?: Maybe<Logout>;
  /** Refresh JWT token. Mutation tries to take refreshToken from the input. */
  refreshToken?: Maybe<RefreshToken>;
  /** Remove Article as favorite */
  removeArticleAsFavorite?: Maybe<RemoveArticleAsFavorite>;
  /** Remove clinic as favorite */
  removeClinicAsFavorite?: Maybe<RemoveClinicAsFavorite>;
  /** Remove Treatment as favorite */
  removeTreatmentAsFavorite?: Maybe<RemoveTreatmentAsFavorite>;
  /** Replies a comment */
  replyComment?: Maybe<ReplyComment>;
  /** Reports a comment */
  reportComment?: Maybe<ReportComment>;
  /** Reports a review */
  reportReview?: Maybe<ReportReview>;
  /** Reports a user */
  reportUser?: Maybe<ReportUser>;
  /** Reset passowrd. */
  resetPassword?: Maybe<ResetPassword>;
  /** Set an article as favorite */
  setArticleAsFavorite?: Maybe<SetArticleAsFavorite>;
  /** Set a clinic as favorite */
  setClinicAsFavorite?: Maybe<SetClinicAsFavorite>;
  /** Set user (clinic owner) notifications settings. */
  setClinicNotifications?: Maybe<SetClinicNotifications>;
  /** Set user notifications settings. */
  setCustomerNotifications?: Maybe<SetCustomerNotifications>;
  /** Set user onboarding to done. */
  setOnboardingDone?: Maybe<SetOnboardingDone>;
  /** Set a treatment as favorite */
  setTreatmentAsFavorite?: Maybe<SetTreatmentAsFavorite>;
  /** Creates JWT mobile token from social login. */
  socialLoginMobile?: Maybe<SocialLoginMobile>;
  /** Creates JWT web token from social login. */
  socialLoginWeb?: Maybe<SocialLoginWeb>;
  /** Updates a Clinic information */
  updateClinic?: Maybe<UpdateClinic>;
  /** Updates a clinic's review */
  updateClinicReview?: Maybe<UpdateClinicReview>;
  /** Updates a comment */
  updateComment?: Maybe<UpdateComment>;
  /** Updates a review's reply */
  updateReviewAnswer?: Maybe<UpdateReviewAnswer>;
  /** Updates User's profile. */
  updateUserProfile?: Maybe<UpdateProfile>;
  /** Verifies user account from clinic. */
  verifyUserAccountFromClinic?: Maybe<VerifyUserAccountFromClinic>;
};

export type MutationChangeEmailArgs = {
  input: ChangeEmailInput;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationCreateArticleCommentArgs = {
  input?: InputMaybe<CreateArticleCommentInput>;
};

export type MutationCreateArticleRecommendationArgs = {
  input: CreateArticleRecommendationInput;
};

export type MutationCreateClinicArgs = {
  input: CreateClinicInput;
};

export type MutationCreateClinicReviewArgs = {
  input: CreateClinicReviewInput;
};

export type MutationCreateCommentRecommendationArgs = {
  input: CreateCommentRecommendationInput;
};

export type MutationCreateReviewAnswerArgs = {
  input: CreateReviewAnswerInput;
};

export type MutationCreateReviewAnswerRecommendationArgs = {
  input: CreateReviewAnswerRecommendationInput;
};

export type MutationCreateReviewRecommendationArgs = {
  input: CreateReviewRecommendationInput;
};

export type MutationCreateTreatmentCommentArgs = {
  input: CreateTreatmentCommentInput;
};

export type MutationCreateTreatmentRecommendationArgs = {
  input: CreateTreatmentRecommendationInput;
};

export type MutationDeleteClinicReviewArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};

export type MutationDeleteCommentArgs = {
  id: Scalars['UUID'];
};

export type MutationDeleteRecommendationArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};

export type MutationDeleteReviewAnswerArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};

export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};

export type MutationGenerateAccessCodeArgs = {
  input: GenerateAccessCodeInput;
};

export type MutationGenerateAccessCodeToNewEmailArgs = {
  input: GenerateAccessCodeToNewEmailInput;
};

export type MutationGetUploadUrlArgs = {
  input: UploadInput;
};

export type MutationLoginMobileArgs = {
  input: LoginInput;
};

export type MutationLoginWebArgs = {
  input: LoginInput;
};

export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};

export type MutationRemoveArticleAsFavoriteArgs = {
  id: Scalars['UUID'];
};

export type MutationRemoveClinicAsFavoriteArgs = {
  id: Scalars['UUID'];
};

export type MutationRemoveTreatmentAsFavoriteArgs = {
  id: Scalars['UUID'];
};

export type MutationReplyCommentArgs = {
  input: ReplyCommentInput;
};

export type MutationReportCommentArgs = {
  input: ReportCommentInput;
};

export type MutationReportReviewArgs = {
  input: ReportReviewInput;
};

export type MutationReportUserArgs = {
  input: ReportUserInput;
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

export type MutationSetArticleAsFavoriteArgs = {
  id: Scalars['UUID'];
};

export type MutationSetClinicAsFavoriteArgs = {
  id: Scalars['UUID'];
};

export type MutationSetClinicNotificationsArgs = {
  input: SetClinicNotificationsInput;
};

export type MutationSetCustomerNotificationsArgs = {
  input: SetCustomerNotificationsInput;
};

export type MutationSetTreatmentAsFavoriteArgs = {
  id: Scalars['UUID'];
};

export type MutationSocialLoginMobileArgs = {
  input: SocialLoginInput;
};

export type MutationSocialLoginWebArgs = {
  input: SocialLoginInput;
};

export type MutationUpdateClinicArgs = {
  id: Scalars['UUID'];
  input: UpdateClinicInput;
};

export type MutationUpdateClinicReviewArgs = {
  id: Scalars['UUID'];
  input: UpdateClinicReviewInput;
};

export type MutationUpdateCommentArgs = {
  id: Scalars['UUID'];
  input: UpdateCommentInput;
};

export type MutationUpdateReviewAnswerArgs = {
  id: Scalars['UUID'];
  input: UpdateReviewAnswerInput;
};

export type MutationUpdateUserProfileArgs = {
  input: UserProfileInput;
};

export type MutationVerifyUserAccountFromClinicArgs = {
  userId: Scalars['UUID'];
};

export type NotificationSettingUnionType =
  | ClinicNotificationSettingType
  | CustomerNotificationSettingType;

export type OrderByType = {
  __typename?: 'OrderByType';
  field?: Maybe<Scalars['String']>;
  ordering?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum OrderingDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type PhoneInputType = {
  /** Telephone number */
  number: Scalars['String'];
  /** Telephone prefix number */
  prefix: Scalars['String'];
};

export type PhoneType = {
  __typename?: 'PhoneType';
  number?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum PlatformType {
  Mobile = 'MOBILE',
  Web = 'WEB',
}

export type PointInputType = {
  lat?: InputMaybe<Scalars['String']>;
  lng?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<ArticleType>;
  articles?: Maybe<ArticlePaginatedType>;
  checkEmailExists?: Maybe<Scalars['Boolean']>;
  clinic?: Maybe<ClinicType>;
  clinics?: Maybe<ClinicPaginatedType>;
  comment?: Maybe<CommentType>;
  listAuthors?: Maybe<Array<AuthorType>>;
  listSymptoms?: Maybe<Array<SymptomType>>;
  listTreatments?: Maybe<Array<TreatmentType>>;
  me?: Maybe<UserType>;
  recommendedArticles?: Maybe<ArticlePaginatedType>;
  recommendedClinics?: Maybe<ClinicPaginatedType>;
  recommendedTreatments?: Maybe<TreatmentPaginatedType>;
  review?: Maybe<ReviewType>;
  treatment?: Maybe<TreatmentType>;
  treatments?: Maybe<TreatmentPaginatedType>;
  user?: Maybe<UserType>;
};

export type QueryArticleArgs = {
  id: Scalars['UUID'];
};

export type QueryArticlesArgs = {
  filter?: InputMaybe<ArticleFilterInputType>;
  orderBy?: InputMaybe<ArticleOrderByInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type QueryCheckEmailExistsArgs = {
  email: Scalars['String'];
};

export type QueryClinicArgs = {
  id: Scalars['UUID'];
};

export type QueryClinicsArgs = {
  filter?: InputMaybe<ClinicFilterInputType>;
  orderBy?: InputMaybe<ClinicOrderByInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  userCurrentLocation?: InputMaybe<PointInputType>;
};

export type QueryCommentArgs = {
  id: Scalars['UUID'];
};

export type QueryRecommendedArticlesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type QueryRecommendedClinicsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  userCurrentLocation?: InputMaybe<PointInputType>;
};

export type QueryRecommendedTreatmentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type QueryReviewArgs = {
  id: Scalars['UUID'];
};

export type QueryTreatmentArgs = {
  id: Scalars['UUID'];
};

export type QueryTreatmentsArgs = {
  filter?: InputMaybe<TreatmentFilterInputType>;
  orderBy?: InputMaybe<TreatmentOrderByInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  userCurrentLocation?: InputMaybe<PointInputType>;
};

export type QueryUserArgs = {
  id: Scalars['UUID'];
};

/** An enumeration. */
export enum RecommendationErrorCodes {
  AlreadyExists = 'ALREADY_EXISTS',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
}

export type RecommendationErrorType = {
  __typename?: 'RecommendationErrorType';
  /** Recommendation error code. */
  code: RecommendationErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

export type RecommendationPaginatedType = {
  __typename?: 'RecommendationPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']>;
  hasPrev?: Maybe<Scalars['Boolean']>;
  objects: Array<RecommendationType>;
  orderBy?: Maybe<Array<OrderByType>>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum RecommendationReaction {
  /** Bad */
  Bad = 'BAD',
  /** Good */
  Good = 'GOOD',
}

/** An enumeration. */
export enum RecommendationReactionEnum {
  Bad = 'BAD',
  Good = 'GOOD',
}

export type RecommendationReactionFilterInput = {
  reaction: RecommendationReactionEnum;
};

export type RecommendationType = {
  __typename?: 'RecommendationType';
  created?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  modified?: Maybe<Scalars['DateTime']>;
  object?: Maybe<RecommendationUnionType>;
  reaction: RecommendationReaction;
  user?: Maybe<UserType>;
};

export type RecommendationUnionType =
  | ArticleType
  | CommentType
  | ReviewAnswerType
  | ReviewType
  | TreatmentType;

/** Refresh JWT token. Mutation tries to take refreshToken from the input. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  errors: Array<UserErrorType>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<UserType>;
};

export type RefreshTokenInput = {
  /** Refresh token. */
  refreshToken?: InputMaybe<Scalars['String']>;
};

/** Remove Article as favorite */
export type RemoveArticleAsFavorite = {
  __typename?: 'RemoveArticleAsFavorite';
  errors: Array<FavoriteErrorType>;
  removed?: Maybe<Scalars['Boolean']>;
};

/** Remove clinic as favorite */
export type RemoveClinicAsFavorite = {
  __typename?: 'RemoveClinicAsFavorite';
  errors: Array<FavoriteErrorType>;
  removed?: Maybe<Scalars['Boolean']>;
};

/** Remove Treatment as favorite */
export type RemoveTreatmentAsFavorite = {
  __typename?: 'RemoveTreatmentAsFavorite';
  errors: Array<FavoriteErrorType>;
  removed?: Maybe<Scalars['Boolean']>;
};

/** Replies a comment */
export type ReplyComment = {
  __typename?: 'ReplyComment';
  comment?: Maybe<CommentType>;
  errors: Array<CommentErrorType>;
};

export type ReplyCommentInput = {
  /** Comment's ID */
  comment: Scalars['UUID'];
  /** Comment's message */
  message: Scalars['String'];
};

/** Reports a comment */
export type ReportComment = {
  __typename?: 'ReportComment';
  errors: Array<ReportErrorType>;
  report?: Maybe<ReportType>;
};

export type ReportCommentInput = {
  /** Comment's ID to report */
  comment: Scalars['UUID'];
  /** Reason's message */
  message: Scalars['String'];
  /** Report's reason */
  reason: Scalars['String'];
};

/** An enumeration. */
export enum ReportErrorCodes {
  AlreadyExists = 'ALREADY_EXISTS',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
}

export type ReportErrorType = {
  __typename?: 'ReportErrorType';
  /** Report error code. */
  code: ReportErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

/** Reports a review */
export type ReportReview = {
  __typename?: 'ReportReview';
  errors: Array<ReportErrorType>;
  report?: Maybe<ReportType>;
};

export type ReportReviewInput = {
  /** Reason's message */
  message: Scalars['String'];
  /** Report's reason */
  reason: Scalars['String'];
  /** Review's ID to report */
  review: Scalars['UUID'];
};

export type ReportType = {
  __typename?: 'ReportType';
  created?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  message: Scalars['String'];
  modified?: Maybe<Scalars['DateTime']>;
  object?: Maybe<ReportUnionType>;
  reason: Scalars['String'];
  user?: Maybe<UserType>;
};

export type ReportUnionType = CommentType | ReviewType | UserType;

/** Reports a user */
export type ReportUser = {
  __typename?: 'ReportUser';
  errors: Array<ReportErrorType>;
  report?: Maybe<ReportType>;
};

export type ReportUserInput = {
  /** Reason's message */
  message: Scalars['String'];
  /** Report's reason */
  reason: Scalars['String'];
  /** User's ID to report */
  user: Scalars['UUID'];
};

/** Reset passowrd. */
export type ResetPassword = {
  __typename?: 'ResetPassword';
  errors: Array<UserErrorType>;
  reset?: Maybe<Scalars['Boolean']>;
};

export type ResetPasswordInput = {
  /** New passowrd. */
  password: Scalars['String'];
  /** Repeated new password. */
  repeatedPassword: Scalars['String'];
  /** Token to reset password. */
  token: Scalars['String'];
};

/** An enumeration. */
export enum ReviewAnswerErrorCodes {
  Inactive = 'INACTIVE',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
}

export type ReviewAnswerErrorType = {
  __typename?: 'ReviewAnswerErrorType';
  /** ReviewAnswer error code. */
  code: ReviewAnswerErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

export type ReviewAnswerType = {
  __typename?: 'ReviewAnswerType';
  badRecommendations?: Maybe<Scalars['Int']>;
  clinic?: Maybe<ClinicType>;
  created?: Maybe<Scalars['DateTime']>;
  currentUserRecommendation?: Maybe<RecommendationType>;
  goodRecommendations?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  message: Scalars['String'];
  modified?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserType>;
};

/** An enumeration. */
export enum ReviewErrorCodes {
  Inactive = 'INACTIVE',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  OneReviewPerClinic = 'ONE_REVIEW_PER_CLINIC',
  Required = 'REQUIRED',
}

export type ReviewErrorType = {
  __typename?: 'ReviewErrorType';
  /** Review error code. */
  code: ReviewErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

export type ReviewPaginatedType = {
  __typename?: 'ReviewPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']>;
  hasPrev?: Maybe<Scalars['Boolean']>;
  objects: Array<ReviewType>;
  orderBy?: Maybe<Array<OrderByType>>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type ReviewType = {
  __typename?: 'ReviewType';
  answer?: Maybe<ReviewAnswerType>;
  badRecommendations?: Maybe<Scalars['Int']>;
  banned: Scalars['Boolean'];
  clinic?: Maybe<ClinicType>;
  created?: Maybe<Scalars['DateTime']>;
  currentUserRecommendation?: Maybe<RecommendationType>;
  goodRecommendations?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  isSolved?: Maybe<Scalars['Boolean']>;
  message: Scalars['String'];
  modified?: Maybe<Scalars['DateTime']>;
  recommendations?: Maybe<RecommendationPaginatedType>;
  stars: Scalars['Int'];
  user?: Maybe<UserType>;
};

export type ReviewTypeRecommendationsArgs = {
  filter?: InputMaybe<RecommendationReactionFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type SectionType = {
  __typename?: 'SectionType';
  content: Scalars['String'];
  created?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  modified?: Maybe<Scalars['DateTime']>;
  order: Scalars['Int'];
  title: Scalars['String'];
  treatment?: Maybe<TreatmentType>;
};

/** Set an article as favorite */
export type SetArticleAsFavorite = {
  __typename?: 'SetArticleAsFavorite';
  errors: Array<FavoriteErrorType>;
  favorite?: Maybe<FavoriteType>;
};

/** Set a clinic as favorite */
export type SetClinicAsFavorite = {
  __typename?: 'SetClinicAsFavorite';
  errors: Array<FavoriteErrorType>;
  favorite?: Maybe<FavoriteType>;
};

/** Set user (clinic owner) notifications settings. */
export type SetClinicNotifications = {
  __typename?: 'SetClinicNotifications';
  errors: Array<UserErrorType>;
  user?: Maybe<UserType>;
};

export type SetClinicNotificationsInput = {
  interactionEmail?: InputMaybe<Scalars['Boolean']>;
  reviewEmail?: InputMaybe<Scalars['Boolean']>;
};

/** Set user notifications settings. */
export type SetCustomerNotifications = {
  __typename?: 'SetCustomerNotifications';
  errors: Array<UserErrorType>;
  user?: Maybe<UserType>;
};

export type SetCustomerNotificationsInput = {
  contentEmail?: InputMaybe<Scalars['Boolean']>;
  contentPush?: InputMaybe<Scalars['Boolean']>;
  interactionEmail?: InputMaybe<Scalars['Boolean']>;
  interactionPush?: InputMaybe<Scalars['Boolean']>;
};

/** Set user onboarding to done. */
export type SetOnboardingDone = {
  __typename?: 'SetOnboardingDone';
  errors: Array<UserErrorType>;
  user?: Maybe<UserType>;
};

/** Set a treatment as favorite */
export type SetTreatmentAsFavorite = {
  __typename?: 'SetTreatmentAsFavorite';
  errors: Array<FavoriteErrorType>;
  favorite?: Maybe<FavoriteType>;
};

export type SocialLoginInput = {
  /** User's token. */
  token: Scalars['String'];
};

/** Creates JWT mobile token from social login. */
export type SocialLoginMobile = {
  __typename?: 'SocialLoginMobile';
  errors: Array<UserErrorType>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<UserType>;
};

/** Creates JWT web token from social login. */
export type SocialLoginWeb = {
  __typename?: 'SocialLoginWeb';
  errors: Array<UserErrorType>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>;
  /** A user instance. */
  user?: Maybe<UserType>;
};

export type StartPercentageType = {
  __typename?: 'StartPercentageType';
  numberOfReviews?: Maybe<Scalars['Int']>;
  percentage?: Maybe<Scalars['Float']>;
  stars?: Maybe<Scalars['Int']>;
};

export type SymptomPaginatedType = {
  __typename?: 'SymptomPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']>;
  hasPrev?: Maybe<Scalars['Boolean']>;
  objects: Array<SymptomType>;
  orderBy?: Maybe<Array<OrderByType>>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type SymptomType = {
  __typename?: 'SymptomType';
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type TreatmentFilterInputType = {
  /** Search treatments by name */
  search?: InputMaybe<Scalars['String']>;
  /** List of Symptoms' IDs */
  symptoms?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
};

export type TreatmentOrderByInputType = {
  direction: OrderingDirectionEnum;
  option: TreatmentOrderingOptionEnum;
};

/** An enumeration. */
export enum TreatmentOrderingOptionEnum {
  ClinicNearby = 'CLINIC_NEARBY',
  Comments = 'COMMENTS',
  Upvoted = 'UPVOTED',
}

export type TreatmentPaginatedType = {
  __typename?: 'TreatmentPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']>;
  hasPrev?: Maybe<Scalars['Boolean']>;
  objects: Array<TreatmentType>;
  orderBy?: Maybe<Array<OrderByType>>;
  page?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type TreatmentType = {
  __typename?: 'TreatmentType';
  badRecommendations?: Maybe<Scalars['Int']>;
  comments?: Maybe<CommentPaginatedType>;
  created?: Maybe<Scalars['DateTime']>;
  currentUserRecommendation?: Maybe<RecommendationType>;
  description: Scalars['String'];
  goodRecommendations?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  image?: Maybe<Scalars['String']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  nearestClinics?: Maybe<ClinicPaginatedType>;
  recommendations?: Maybe<RecommendationPaginatedType>;
  sections: Array<SectionType>;
  symptoms?: Maybe<SymptomPaginatedType>;
};

export type TreatmentTypeCommentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type TreatmentTypeNearestClinicsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  userCurrentLocation?: InputMaybe<PointInputType>;
};

export type TreatmentTypeRecommendationsArgs = {
  filter?: InputMaybe<RecommendationReactionFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type TreatmentTypeSymptomsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Updates a Clinic information */
export type UpdateClinic = {
  __typename?: 'UpdateClinic';
  clinic?: Maybe<ClinicType>;
  errors: Array<ClinicErrorType>;
};

export type UpdateClinicInput = {
  /** Clinic's aditional info. */
  additionalInfo?: InputMaybe<Scalars['String']>;
  /** Clinic's calendar. */
  calendar?: InputMaybe<Scalars['String']>;
  /** Clinic's description. */
  description?: InputMaybe<Scalars['String']>;
  /** Clinic's email. */
  email?: InputMaybe<Scalars['String']>;
  /** Clinic's phone. */
  fullPhone?: InputMaybe<PhoneInputType>;
  /** Clinic's images. */
  images?: InputMaybe<Array<InputMaybe<ClinicImageInput>>>;
  location?: InputMaybe<LocationInputType>;
  /** Clinic's logo. */
  logo?: InputMaybe<Scalars['String']>;
  /** Clinic's name. */
  name?: InputMaybe<Scalars['String']>;
  /** Clinic's symptoms. */
  symptoms?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Clinic's treatments. */
  treatments?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  /** Clinic's website url. */
  website?: InputMaybe<Scalars['String']>;
};

/** Updates a clinic's review */
export type UpdateClinicReview = {
  __typename?: 'UpdateClinicReview';
  errors: Array<ReviewErrorType>;
  review?: Maybe<ReviewType>;
};

export type UpdateClinicReviewInput = {
  /** Review's message. */
  message?: InputMaybe<Scalars['String']>;
  /** Review's stars. */
  stars?: InputMaybe<Scalars['Int']>;
};

/** Updates a comment */
export type UpdateComment = {
  __typename?: 'UpdateComment';
  comment?: Maybe<CommentType>;
  errors: Array<CommentErrorType>;
};

export type UpdateCommentInput = {
  /** Comment's message */
  message: Scalars['String'];
};

/** Updates User's profile. */
export type UpdateProfile = {
  __typename?: 'UpdateProfile';
  errors: Array<UserErrorType>;
  user?: Maybe<UserType>;
};

/** Updates a review's reply */
export type UpdateReviewAnswer = {
  __typename?: 'UpdateReviewAnswer';
  errors: Array<ReviewAnswerErrorType>;
  reviewanswer?: Maybe<ReviewAnswerType>;
};

export type UpdateReviewAnswerInput = {
  /** Review reply message. */
  message: Scalars['String'];
};

export type UploadInput = {
  contentType: Scalars['String'];
  filename: Scalars['String'];
  private: Scalars['Boolean'];
};

/** An enumeration. */
export enum UserErrorCodes {
  AccountNotConfirmed = 'ACCOUNT_NOT_CONFIRMED',
  AlreadyExists = 'ALREADY_EXISTS',
  FirebaseCertificate = 'FIREBASE_CERTIFICATE',
  FirebaseDisabledUser = 'FIREBASE_DISABLED_USER',
  FirebaseInvalidToken = 'FIREBASE_INVALID_TOKEN',
  Inactive = 'INACTIVE',
  Invalid = 'INVALID',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidEmail = 'INVALID_EMAIL',
  JwtDecodeError = 'JWT_DECODE_ERROR',
  JwtInvalidToken = 'JWT_INVALID_TOKEN',
  JwtMissingToken = 'JWT_MISSING_TOKEN',
  JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type UserErrorType = {
  __typename?: 'UserErrorType';
  /** User error code. */
  code: UserErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>;
  /** The error message. */
  message?: Maybe<Scalars['String']>;
};

export type UserProfileInput = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['Date']>;
  fcmToken?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<LocationInputType>;
};

export type UserType = {
  __typename?: 'UserType';
  activities?: Maybe<ActivityPaginatedType>;
  avatar?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  clinic?: Maybe<ClinicType>;
  clinicLogo?: Maybe<Scalars['String']>;
  clinicName?: Maybe<Scalars['String']>;
  clinicTotalReplies?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  favorites?: Maybe<FavoritePaginatedType>;
  fcmToken?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fromSocialLogin?: Maybe<Scalars['Boolean']>;
  id: Scalars['UUID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  isClinicCreator: Scalars['Boolean'];
  isOnboardingDone: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<LocationType>;
  modified?: Maybe<Scalars['DateTime']>;
  notificationsSettings?: Maybe<NotificationSettingUnionType>;
  reviews?: Maybe<ReviewPaginatedType>;
};

export type UserTypeActivitiesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type UserTypeFavoritesArgs = {
  filter?: InputMaybe<FilterFavoriteByTypeEnum>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type UserTypeReviewsArgs = {
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** Verifies user account from clinic. */
export type VerifyUserAccountFromClinic = {
  __typename?: 'VerifyUserAccountFromClinic';
  errors: Array<UserErrorType>;
  user?: Maybe<UserType>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  loginMobile?:
    | {__typename?: 'LoginMobile'; token?: string | undefined | null}
    | undefined
    | null;
};

export type MeQueryVariables = Exact<{[key: string]: never}>;

export type MeQuery = {
  __typename?: 'Query';
  me?:
    | {__typename?: 'UserType'; id: string; email?: string | undefined | null}
    | undefined
    | null;
};

export type MeDataFragment = {
  __typename?: 'UserType';
  id: string;
  email?: string | undefined | null;
};

export const MeDataFragmentDoc = gql`
  fragment MeData on UserType {
    id
    email
  }
`;
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    loginMobile(input: $input) {
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      id
      email
    }
  }
`;
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
