import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Accept = {
  __typename?: 'Accept';
  activityNotification: Scalars['Boolean'];
  copylight: Scalars['Boolean'];
  location: Scalars['Boolean'];
  marketing: Scalars['Boolean'];
  officialNotification: Scalars['Boolean'];
  privacy: Scalars['Boolean'];
  pushNotification: Scalars['Boolean'];
  terms: Scalars['Boolean'];
};

export type AcceptInput = {
  activityNotification?: InputMaybe<Scalars['Boolean']>;
  copylight?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['Boolean']>;
  marketing?: InputMaybe<Scalars['Boolean']>;
  officialNotification?: InputMaybe<Scalars['Boolean']>;
  privacy?: InputMaybe<Scalars['Boolean']>;
  pushNotification?: InputMaybe<Scalars['Boolean']>;
  terms?: InputMaybe<Scalars['Boolean']>;
};

export type AddAreaImageInput = {
  areaId: Scalars['Int'];
  imageInput: UploadAreaImageInput;
};

export type AdminLoginResult = {
  __typename?: 'AdminLoginResult';
  accessToken: Scalars['String'];
  owner?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type AdminLoginResultInput = {
  accessToken: Scalars['String'];
  owner?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
};

export type Area = {
  __typename?: 'Area';
  activate: Scalars['Boolean'];
  areaTrend?: Maybe<AreaTrend>;
  areaTrends?: Maybe<Array<AreaTrend>>;
  articles?: Maybe<Array<Article>>;
  /** 법정구역 코드 */
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  domestic: Scalars['Boolean'];
  id: Scalars['Int'];
  images?: Maybe<Array<AreaImages>>;
  /** y 좌표 */
  latitude?: Maybe<Scalars['String']>;
  /** x 좌표 */
  longitude?: Maybe<Scalars['String']>;
  /** 군 단위 영어 이름 */
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  /** 무작위 지역 이미지 */
  randomImage?: Maybe<AreaImages>;
  /** 시도 단위 */
  region1depth?: Maybe<Scalars['String']>;
  /** 군 단위 */
  region2depth: Scalars['String'];
  /** 이모지 심볼 */
  symbol: Scalars['String'];
  /** 고정된 첫번째 이미지 */
  thumbnail?: Maybe<Image>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AreaData = {
  __typename?: 'AreaData';
  code: Scalars['String'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  region1depth: Scalars['String'];
  region2depth: Scalars['String'];
};

export type AreaDataInput = {
  code: Scalars['String'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  region1depth: Scalars['String'];
  region2depth: Scalars['String'];
};

export type AreaImages = {
  __typename?: 'AreaImages';
  area?: Maybe<Area>;
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Image>;
  title?: Maybe<Scalars['String']>;
};

export type AreaImagesInput = {
  area?: InputMaybe<AreaInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<ImageInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type AreaInput = {
  activate: Scalars['Boolean'];
  areaTrend?: InputMaybe<AreaTrendInput>;
  areaTrends?: InputMaybe<Array<AreaTrendInput>>;
  articles?: InputMaybe<Array<ArticleInput>>;
  /** 법정구역 코드 */
  code: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  domestic: Scalars['Boolean'];
  images?: InputMaybe<Array<AreaImagesInput>>;
  /** y 좌표 */
  latitude?: InputMaybe<Scalars['String']>;
  /** x 좌표 */
  longitude?: InputMaybe<Scalars['String']>;
  /** 군 단위 영어 이름 */
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<PostInput>>;
  /** 무작위 지역 이미지 */
  randomImage?: InputMaybe<AreaImagesInput>;
  /** 시도 단위 */
  region1depth?: InputMaybe<Scalars['String']>;
  /** 군 단위 */
  region2depth: Scalars['String'];
  /** 이모지 심볼 */
  symbol: Scalars['String'];
  /** 고정된 첫번째 이미지 */
  thumbnail?: InputMaybe<ImageInput>;
};

export type AreaTrend = {
  __typename?: 'AreaTrend';
  area: Area;
  baseDate?: Maybe<Scalars['DateTime']>;
  /** 방문수 */
  count?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  /** 방문자 수 추세 */
  trend?: Maybe<Trend>;
};

export type AreaTrendInput = {
  area: AreaInput;
  baseDate?: InputMaybe<Scalars['DateTime']>;
  /** 방문수 */
  count?: InputMaybe<Scalars['Float']>;
  id: Scalars['Int'];
  /** 방문자 수 추세 */
  trend?: InputMaybe<Trend>;
};

export type Article = {
  __typename?: 'Article';
  area?: Maybe<Area>;
  articleContents?: Maybe<Array<ArticleContent>>;
  category?: Maybe<ArticleCategory>;
  contents?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  editor: Scalars['String'];
  id: Scalars['Int'];
  images?: Maybe<Array<Image>>;
  places?: Maybe<Array<ArticlePlace>>;
  state: ArticleState;
  thumbnail?: Maybe<Image>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  views: Scalars['Int'];
};

export type ArticleCategory = {
  __typename?: 'ArticleCategory';
  articles?: Maybe<Array<Article>>;
  category: Scalars['String'];
  id: Scalars['Int'];
};

export type ArticleCategoryInput = {
  articles?: InputMaybe<Array<ArticleInput>>;
  category: Scalars['String'];
  id: Scalars['Int'];
};

export type ArticleContent = {
  __typename?: 'ArticleContent';
  article?: Maybe<Article>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  image?: Maybe<Image>;
  index?: Maybe<Scalars['Int']>;
  place?: Maybe<ArticlePlace>;
  source?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleContentInput = {
  article?: InputMaybe<ArticleInput>;
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<ImageInput>;
  index?: InputMaybe<Scalars['Int']>;
  place?: InputMaybe<ArticlePlaceInput>;
  source?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
};

export type ArticleInput = {
  area?: InputMaybe<AreaInput>;
  articleContents?: InputMaybe<Array<ArticleContentInput>>;
  category?: InputMaybe<ArticleCategoryInput>;
  contents?: InputMaybe<Scalars['String']>;
  editor: Scalars['String'];
  images?: InputMaybe<Array<ImageInput>>;
  places?: InputMaybe<Array<ArticlePlaceInput>>;
  state: ArticleState;
  thumbnail?: InputMaybe<ImageInput>;
  title: Scalars['String'];
  views: Scalars['Int'];
};

export type ArticlePlace = {
  __typename?: 'ArticlePlace';
  article?: Maybe<Article>;
  category?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** 장소가 여러 개일 경우 순서 */
  index?: Maybe<Scalars['Int']>;
  placeName?: Maybe<Scalars['String']>;
  placeURL?: Maybe<Scalars['String']>;
};

export type ArticlePlaceInput = {
  article?: InputMaybe<ArticleInput>;
  category?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** 장소가 여러 개일 경우 순서 */
  index?: InputMaybe<Scalars['Int']>;
  placeName?: InputMaybe<Scalars['String']>;
  placeURL?: InputMaybe<Scalars['String']>;
};

export enum ArticleState {
  Done = 'DONE',
  Inprogress = 'INPROGRESS',
  Uploaded = 'UPLOADED'
}

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  isMine?: Maybe<Scalars['Boolean']>;
  /** 공개 여부 */
  open?: Maybe<Scalars['Boolean']>;
  post: Post;
  profile: Profile;
  reports?: Maybe<Array<CommentReport>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentInput = {
  content: Scalars['String'];
  isMine?: InputMaybe<Scalars['Boolean']>;
  /** 공개 여부 */
  open?: InputMaybe<Scalars['Boolean']>;
  post: PostInput;
  profile: ProfileInput;
  reports?: InputMaybe<Array<CommentReportInput>>;
};

export type CommentReport = {
  __typename?: 'CommentReport';
  comment?: Maybe<Comment>;
  id: Scalars['Int'];
  /** 기타 신고 사유 */
  other?: Maybe<Scalars['String']>;
  /** 신고 사유 */
  reasonId?: Maybe<Scalars['Int']>;
  reportedAt?: Maybe<Scalars['DateTime']>;
  /** 신고자 */
  reporter: Profile;
  /** 피신고자 */
  respondent: Profile;
};

export type CommentReportInput = {
  comment?: InputMaybe<CommentInput>;
  id: Scalars['Int'];
  /** 기타 신고 사유 */
  other?: InputMaybe<Scalars['String']>;
  /** 신고 사유 */
  reasonId?: InputMaybe<Scalars['Int']>;
  reportedAt?: InputMaybe<Scalars['DateTime']>;
  /** 신고자 */
  reporter: ProfileInput;
  /** 피신고자 */
  respondent: ProfileInput;
};

export type Content = {
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<UploadImageInput>;
  placeCategory?: InputMaybe<Scalars['String']>;
  placeName?: InputMaybe<Scalars['String']>;
  placeUrl?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
};

export type CountResult = {
  __typename?: 'CountResult';
  areaId: Scalars['Int'];
  comments: Scalars['Int'];
  posts: Scalars['Int'];
  region2depth: Scalars['String'];
};

export type CountResultInput = {
  areaId: Scalars['Int'];
  comments: Scalars['Int'];
  posts: Scalars['Int'];
  region2depth: Scalars['String'];
};

export type CreateAreaInput = {
  activate: Scalars['Boolean'];
  /** 법정구역 코드 */
  code: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  domestic: Scalars['Boolean'];
  /** y 좌표 */
  latitude?: InputMaybe<Scalars['String']>;
  /** x 좌표 */
  longitude?: InputMaybe<Scalars['String']>;
  /** 군 단위 영어 이름 */
  name?: InputMaybe<Scalars['String']>;
  /** 시도 단위 */
  region1depth?: InputMaybe<Scalars['String']>;
  /** 군 단위 */
  region2depth: Scalars['String'];
  /** 이모지 심볼 */
  symbol: Scalars['String'];
};

export type CreateArticleInput = {
  areaId: Scalars['Int'];
  categoryId: Scalars['Int'];
  contents?: InputMaybe<Array<Content>>;
  state: ArticleState;
  thumbnailIndex?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type Creations = {
  __typename?: 'Creations';
  /** 내용 */
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  /** 창작자의 닉네임 */
  creator: Scalars['String'];
  /** 창작물의 id */
  id: Scalars['Int'];
  /** POST인 경우 이미지 */
  images?: Maybe<Array<Image>>;
  /** 공개 여부 */
  open: Scalars['Boolean'];
  /** 신고 당한 횟수 */
  reported: Scalars['Int'];
  /** POST or COMMENT */
  type?: Maybe<CreationsType>;
};

export type CreationsInput = {
  /** 내용 */
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  /** 창작자의 닉네임 */
  creator: Scalars['String'];
  /** 창작물의 id */
  id: Scalars['Int'];
  /** POST인 경우 이미지 */
  images?: InputMaybe<Array<ImageInput>>;
  /** 공개 여부 */
  open: Scalars['Boolean'];
  /** 신고 당한 횟수 */
  reported: Scalars['Int'];
  /** POST or COMMENT */
  type?: InputMaybe<CreationsType>;
};

export enum CreationsType {
  Comment = 'COMMENT',
  Post = 'POST'
}

export type EditArticleInput = {
  areaId: Scalars['Int'];
  categoryId: Scalars['Int'];
  contents?: InputMaybe<Array<Content>>;
  id: Scalars['Int'];
  state: ArticleState;
  thumbnailIndex?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  areaImages?: Maybe<Array<AreaImages>>;
  article?: Maybe<Article>;
  createdAt?: Maybe<Scalars['DateTime']>;
  encoding?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  mimetype?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  postImages?: Maybe<Array<PostsImages>>;
  profile?: Maybe<Profile>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ImageInput = {
  areaImages?: InputMaybe<Array<AreaImagesInput>>;
  article?: InputMaybe<ArticleInput>;
  encoding?: InputMaybe<Scalars['String']>;
  mimetype?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  postImages?: InputMaybe<Array<PostsImagesInput>>;
  profile?: InputMaybe<ProfileInput>;
};

export type Like = {
  __typename?: 'Like';
  createdAt?: Maybe<Scalars['DateTime']>;
  post?: Maybe<Post>;
  profile?: Maybe<Profile>;
};

export type LikeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  post?: InputMaybe<PostInput>;
  profile?: InputMaybe<ProfileInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addArea: Area;
  addAreaImage: Area;
  addArticleCategory: Scalars['Boolean'];
  addServiceVersion: Service;
  changeArticleState: Article;
  changeCreationsState: Scalars['Boolean'];
  changeVersionState: Service;
  createArticle: Article;
  deleteArticle: Scalars['Boolean'];
  deleteCreations: Scalars['Boolean'];
  editArticle: Article;
  editArticleCategory: Scalars['Boolean'];
  regenerateToken: AdminLoginResult;
  removeAreaImage: Area;
  removeArticleCategory: Scalars['Boolean'];
  setAreaActivate: Area;
};


export type MutationAddAreaArgs = {
  input: CreateAreaInput;
};


export type MutationAddAreaImageArgs = {
  input: AddAreaImageInput;
};


export type MutationAddArticleCategoryArgs = {
  category: Scalars['String'];
};


export type MutationAddServiceVersionArgs = {
  os: Os;
  version: Scalars['String'];
};


export type MutationChangeArticleStateArgs = {
  id: Scalars['Float'];
  state: ArticleState;
};


export type MutationChangeCreationsStateArgs = {
  id: Scalars['Int'];
  state: Scalars['Boolean'];
  type: CreationsType;
};


export type MutationChangeVersionStateArgs = {
  os: Os;
  shouldUpdate: Scalars['Boolean'];
  version: Scalars['String'];
};


export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteCreationsArgs = {
  id: Scalars['Int'];
  type: CreationsType;
};


export type MutationEditArticleArgs = {
  input: EditArticleInput;
};


export type MutationEditArticleCategoryArgs = {
  category: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationRegenerateTokenArgs = {
  id: Scalars['String'];
  refreshToken: Scalars['String'];
};


export type MutationRemoveAreaImageArgs = {
  areaId: Scalars['Float'];
  imageId: Scalars['Float'];
};


export type MutationRemoveArticleCategoryArgs = {
  id: Scalars['Int'];
};


export type MutationSetAreaActivateArgs = {
  activate: Scalars['Boolean'];
  id: Scalars['Int'];
};

export type Notification = {
  __typename?: 'Notification';
  activist?: Maybe<Profile>;
  contents?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  notiType: NotificationType;
  profile: Profile;
  read: Scalars['Boolean'];
  targetId?: Maybe<Scalars['Int']>;
};

export type NotificationInput = {
  activist?: InputMaybe<ProfileInput>;
  contents?: InputMaybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  notiType: NotificationType;
  profile: ProfileInput;
  read?: InputMaybe<Scalars['Boolean']>;
  targetId?: InputMaybe<Scalars['Int']>;
};

export enum NotificationType {
  Article = 'ARTICLE',
  Comment = 'COMMENT',
  Feed = 'FEED',
  Like = 'LIKE',
  Official = 'OFFICIAL',
  Post = 'POST'
}

export enum Os {
  Android = 'ANDROID',
  Ios = 'IOS'
}

export type Place = {
  __typename?: 'Place';
  /** 도로명 주소 */
  address?: Maybe<Scalars['String']>;
  areaId?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  categoryGroup?: Maybe<Scalars['String']>;
  /** 카카오 API 상의 ID */
  externalId: Scalars['String'];
  id: Scalars['Int'];
  /** y 좌표 */
  latitude: Scalars['String'];
  /** x 좌표 */
  longitude: Scalars['String'];
  name: Scalars['String'];
  /** 장소 연락처 */
  phone?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  /** 카테고리 이모지 */
  symbol?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  /** 장소에 올라온 가장 최근 이미지 */
  thumbnail?: Maybe<Image>;
  url?: Maybe<Scalars['String']>;
};

export type PlaceInput = {
  /** 도로명 주소 */
  address?: InputMaybe<Scalars['String']>;
  areaId?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<Scalars['String']>;
  categoryGroup?: InputMaybe<Scalars['String']>;
  /** 카카오 API 상의 ID */
  externalId: Scalars['String'];
  id: Scalars['Int'];
  /** y 좌표 */
  latitude: Scalars['String'];
  /** x 좌표 */
  longitude: Scalars['String'];
  name: Scalars['String'];
  /** 장소 연락처 */
  phone?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<PostInput>>;
  /** 카테고리 이모지 */
  symbol?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<TagInput>>;
  /** 장소에 올라온 가장 최근 이미지 */
  thumbnail?: InputMaybe<ImageInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  area?: Maybe<Area>;
  comments?: Maybe<Array<Comment>>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  images?: Maybe<Array<PostsImages>>;
  likes?: Maybe<Array<Like>>;
  /** 공개 여부 */
  open?: Maybe<Scalars['Boolean']>;
  place: Place;
  profile: Profile;
  reports?: Maybe<Array<PostReport>>;
  tags?: Maybe<Array<Tag>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views: Scalars['Int'];
};

export type PostInput = {
  area?: InputMaybe<AreaInput>;
  comments?: InputMaybe<Array<CommentInput>>;
  content: Scalars['String'];
  images?: InputMaybe<Array<PostsImagesInput>>;
  likes?: InputMaybe<Array<LikeInput>>;
  /** 공개 여부 */
  open?: InputMaybe<Scalars['Boolean']>;
  place: PlaceInput;
  profile: ProfileInput;
  reports?: InputMaybe<Array<PostReportInput>>;
  tags?: InputMaybe<Array<TagInput>>;
  views: Scalars['Int'];
};

export type PostReport = {
  __typename?: 'PostReport';
  id: Scalars['Int'];
  /** 기타 신고 사유 */
  other?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
  /** 신고 사유 */
  reasonId?: Maybe<Scalars['Int']>;
  reportedAt?: Maybe<Scalars['DateTime']>;
  /** 신고자 */
  reporter: Profile;
  /** 피신고자 */
  respondent: Profile;
};

export type PostReportInput = {
  id: Scalars['Int'];
  /** 기타 신고 사유 */
  other?: InputMaybe<Scalars['String']>;
  post?: InputMaybe<PostInput>;
  /** 신고 사유 */
  reasonId?: InputMaybe<Scalars['Int']>;
  reportedAt?: InputMaybe<Scalars['DateTime']>;
  /** 신고자 */
  reporter: ProfileInput;
  /** 피신고자 */
  respondent: ProfileInput;
};

export type PostsImages = {
  __typename?: 'PostsImages';
  image: Image;
  index?: Maybe<Scalars['Int']>;
  post?: Maybe<Post>;
};

export type PostsImagesInput = {
  image: ImageInput;
  index?: InputMaybe<Scalars['Int']>;
  post?: InputMaybe<PostInput>;
};

export type Profile = {
  __typename?: 'Profile';
  avatar?: Maybe<Image>;
  blockTarget?: Maybe<Array<UserBlock>>;
  blocks?: Maybe<Array<UserBlock>>;
  commentableDate: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  introduce?: Maybe<Scalars['String']>;
  likes?: Maybe<Array<Like>>;
  nickname: Scalars['String'];
  notifications?: Maybe<Array<Notification>>;
  postImages?: Maybe<Array<Image>>;
  postableDate: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  reported?: Maybe<Array<Report>>;
  reports?: Maybe<Array<Report>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type ProfileInput = {
  avatar?: InputMaybe<ImageInput>;
  blockTarget?: InputMaybe<Array<UserBlockInput>>;
  blocks?: InputMaybe<Array<UserBlockInput>>;
  commentableDate?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Array<CommentInput>>;
  introduce?: InputMaybe<Scalars['String']>;
  likes?: InputMaybe<Array<LikeInput>>;
  nickname: Scalars['String'];
  notifications?: InputMaybe<Array<NotificationInput>>;
  postImages?: InputMaybe<Array<ImageInput>>;
  postableDate?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<PostInput>>;
  reported?: InputMaybe<Array<ReportInput>>;
  reports?: InputMaybe<Array<ReportInput>>;
  user?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  adminLogin: AdminLoginResult;
  countArticle: Array<Scalars['Int']>;
  countPostAndCommentByArea: Array<CountResult>;
  countPosting: Array<Scalars['Int']>;
  countProfile: Array<Scalars['Int']>;
  getArea: Area;
  getAreas: Array<Area>;
  getArticle: Article;
  getArticleCategories: Array<ArticleCategory>;
  getArticleForEdit: Article;
  getArticles: Array<Article>;
  getCreations: Array<Creations>;
  getPost: Post;
  getReports: Array<PostReport>;
  loginExtension: AdminLoginResult;
  searchAreaData: Array<AreaData>;
  searchArticles: Array<Article>;
};


export type QueryAdminLoginArgs = {
  id: Scalars['String'];
  password: Scalars['String'];
};


export type QueryGetAreaArgs = {
  id: Scalars['Int'];
};


export type QueryGetArticleArgs = {
  id: Scalars['Int'];
};


export type QueryGetArticleForEditArgs = {
  id: Scalars['Int'];
};


export type QueryGetArticlesArgs = {
  areaId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetCreationsArgs = {
  reported?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<CreationsType>;
};


export type QueryGetPostArgs = {
  id: Scalars['Int'];
  type: CreationsType;
};


export type QueryGetReportsArgs = {
  type: ReportType;
};


export type QueryLoginExtensionArgs = {
  id: Scalars['String'];
};


export type QuerySearchAreaDataArgs = {
  domestic: Scalars['Boolean'];
  keyword: Scalars['String'];
};


export type QuerySearchArticlesArgs = {
  areaId?: InputMaybe<Scalars['Int']>;
  keyword?: InputMaybe<Scalars['String']>;
};

export type Report = {
  __typename?: 'Report';
  id: Scalars['Int'];
  /** 기타 신고 사유 */
  other?: Maybe<Scalars['String']>;
  /** 신고 사유 */
  reasonId?: Maybe<Scalars['Int']>;
  reportedAt?: Maybe<Scalars['DateTime']>;
  /** 신고자 */
  reporter: Profile;
  /** 피신고자 */
  respondent: Profile;
};

export type ReportInput = {
  id: Scalars['Int'];
  /** 기타 신고 사유 */
  other?: InputMaybe<Scalars['String']>;
  /** 신고 사유 */
  reasonId?: InputMaybe<Scalars['Int']>;
  reportedAt?: InputMaybe<Scalars['DateTime']>;
  /** 신고자 */
  reporter: ProfileInput;
  /** 피신고자 */
  respondent: ProfileInput;
};

export enum ReportType {
  Comment = 'COMMENT',
  Post = 'POST',
  User = 'USER'
}

export enum Role {
  Admin = 'ADMIN',
  Test = 'TEST',
  User = 'USER'
}

export type Service = {
  __typename?: 'Service';
  createdAt: Scalars['DateTime'];
  shouldUpdate: Scalars['Boolean'];
  version: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  numberOfPosts: Scalars['Int'];
  posts?: Maybe<Array<Post>>;
  tag: Scalars['String'];
};

export type TagInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  numberOfPosts?: InputMaybe<Scalars['Int']>;
  posts?: InputMaybe<Array<PostInput>>;
  tag: Scalars['String'];
};

export enum Trend {
  Decrease = 'DECREASE',
  Increase = 'INCREASE',
  Same = 'SAME'
}

export type UploadAreaImageInput = {
  encoding?: InputMaybe<Scalars['String']>;
  mimetype?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type UploadImageInput = {
  encoding?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  mimetype?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  FCMToken?: Maybe<Scalars['String']>;
  accept: Accept;
  activated: Scalars['Boolean'];
  blocked: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  externalId: Scalars['String'];
  id: Scalars['Int'];
  os: Os;
  profile: Profile;
  role: Role;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserBlock = {
  __typename?: 'UserBlock';
  /** block당한 사람 */
  blockTarget: Profile;
  blockedAt?: Maybe<Scalars['DateTime']>;
  /** block한 사람 */
  blocker: Profile;
  id: Scalars['Int'];
};

export type UserBlockInput = {
  /** block당한 사람 */
  blockTarget: ProfileInput;
  blockedAt?: InputMaybe<Scalars['DateTime']>;
  /** block한 사람 */
  blocker: ProfileInput;
  id: Scalars['Int'];
};

export type UserInput = {
  FCMToken?: InputMaybe<Scalars['String']>;
  accept: AcceptInput;
  activated?: InputMaybe<Scalars['Boolean']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  externalId: Scalars['String'];
  os: Os;
  profile: ProfileInput;
  role: Role;
};

export type ServiceFragment = { __typename?: 'Service', version: string, shouldUpdate: boolean, createdAt: any };

export type LoginResultFragment = { __typename?: 'AdminLoginResult', accessToken: string, refreshToken?: string | null, owner?: string | null };

export type AreaDataFragment = { __typename?: 'AreaData', code: string, region1depth: string, region2depth: string, name: string, longitude: string, latitude: string };

export type ArticleUnitFragment = { __typename?: 'Article', id: number, title: string, editor: string, state: ArticleState, area?: { __typename?: 'Area', id: number, region2depth: string, domestic: boolean } | null, category?: { __typename?: 'ArticleCategory', category: string } | null, thumbnail?: { __typename?: 'Image', id: number, path?: string | null } | null };

export type ArticleDetailFragment = { __typename?: 'Article', id: number, updatedAt?: any | null, title: string, contents?: string | null, views: number, state: ArticleState, editor: string, category?: { __typename?: 'ArticleCategory', id: number, category: string } | null, area?: { __typename?: 'Area', id: number, region2depth: string, domestic: boolean } | null, thumbnail?: { __typename?: 'Image', id: number, path?: string | null } | null, places?: Array<{ __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null }> | null, articleContents?: Array<{ __typename?: 'ArticleContent', id: number, index?: number | null, subtitle?: string | null, content?: string | null, image?: { __typename?: 'Image', path?: string | null, mimetype?: string | null } | null, place?: { __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null } | null }> | null, images?: Array<{ __typename?: 'Image', id: number, path?: string | null }> | null };

export type CategoryUnitFragment = { __typename?: 'ArticleCategory', id: number, category: string };

export type ArticleContentFragment = { __typename?: 'ArticleContent', id: number, index?: number | null, subtitle?: string | null, content?: string | null, image?: { __typename?: 'Image', path?: string | null, mimetype?: string | null } | null, place?: { __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null } | null };

export type ArticlePlaceFragment = { __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null };

export type ArticleImageFragment = { __typename?: 'Image', id: number, path?: string | null, mimetype?: string | null, encoding?: string | null };

export type CountResultFragment = { __typename?: 'CountResult', areaId: number, region2depth: string, posts: number, comments: number };

export type AreaUnitFragment = { __typename?: 'Area', id: number, region2depth: string, symbol: string, domestic: boolean, activate: boolean, images?: Array<{ __typename?: 'AreaImages', title?: string | null, image?: { __typename?: 'Image', id: number, path?: string | null } | null }> | null };

export type FeedUnitFragment = { __typename?: 'Creations', id: number, type?: CreationsType | null, creator: string, contents: string, open: boolean, reported: number, createdAt: any, images?: Array<{ __typename?: 'Image', id: number, path?: string | null }> | null };

export type AddArticleCategoryMutationVariables = Exact<{
  category: Scalars['String'];
}>;


export type AddArticleCategoryMutation = { __typename?: 'Mutation', addArticleCategory: boolean };

export type EditArticleCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
  category: Scalars['String'];
}>;


export type EditArticleCategoryMutation = { __typename?: 'Mutation', editArticleCategory: boolean };

export type RemoveArticleCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveArticleCategoryMutation = { __typename?: 'Mutation', removeArticleCategory: boolean };

export type AddAreaMutationVariables = Exact<{
  input: CreateAreaInput;
}>;


export type AddAreaMutation = { __typename?: 'Mutation', addArea: { __typename?: 'Area', id: number, region2depth: string, symbol: string, domestic: boolean, activate: boolean, images?: Array<{ __typename?: 'AreaImages', title?: string | null, image?: { __typename?: 'Image', id: number, path?: string | null } | null }> | null } };

export type AddAreaImageMutationVariables = Exact<{
  input: AddAreaImageInput;
}>;


export type AddAreaImageMutation = { __typename?: 'Mutation', addAreaImage: { __typename?: 'Area', id: number, region2depth: string, symbol: string, domestic: boolean, activate: boolean, images?: Array<{ __typename?: 'AreaImages', title?: string | null, image?: { __typename?: 'Image', id: number, path?: string | null } | null }> | null } };

export type RemoveAreaImageMutationVariables = Exact<{
  areaId: Scalars['Float'];
  imageId: Scalars['Float'];
}>;


export type RemoveAreaImageMutation = { __typename?: 'Mutation', removeAreaImage: { __typename?: 'Area', id: number, region2depth: string, symbol: string, domestic: boolean, activate: boolean, images?: Array<{ __typename?: 'AreaImages', title?: string | null, image?: { __typename?: 'Image', id: number, path?: string | null } | null }> | null } };

export type CreateArticleMutationVariables = Exact<{
  input: CreateArticleInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'Article', id: number, updatedAt?: any | null, title: string, contents?: string | null, views: number, state: ArticleState, editor: string, category?: { __typename?: 'ArticleCategory', id: number, category: string } | null, area?: { __typename?: 'Area', id: number, region2depth: string, domestic: boolean } | null, thumbnail?: { __typename?: 'Image', id: number, path?: string | null } | null, places?: Array<{ __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null }> | null, articleContents?: Array<{ __typename?: 'ArticleContent', id: number, index?: number | null, subtitle?: string | null, content?: string | null, image?: { __typename?: 'Image', path?: string | null, mimetype?: string | null } | null, place?: { __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null } | null }> | null, images?: Array<{ __typename?: 'Image', id: number, path?: string | null }> | null } };

export type EditArticleMutationVariables = Exact<{
  input: EditArticleInput;
}>;


export type EditArticleMutation = { __typename?: 'Mutation', editArticle: { __typename?: 'Article', id: number, updatedAt?: any | null, title: string, contents?: string | null, views: number, state: ArticleState, editor: string, category?: { __typename?: 'ArticleCategory', id: number, category: string } | null, area?: { __typename?: 'Area', id: number, region2depth: string, domestic: boolean } | null, thumbnail?: { __typename?: 'Image', id: number, path?: string | null } | null, places?: Array<{ __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null }> | null, articleContents?: Array<{ __typename?: 'ArticleContent', id: number, index?: number | null, subtitle?: string | null, content?: string | null, image?: { __typename?: 'Image', path?: string | null, mimetype?: string | null } | null, place?: { __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null } | null }> | null, images?: Array<{ __typename?: 'Image', id: number, path?: string | null }> | null } };

export type DeleteArticleMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteArticleMutation = { __typename?: 'Mutation', deleteArticle: boolean };

export type ChangeArticleStateMutationVariables = Exact<{
  id: Scalars['Float'];
  state: ArticleState;
}>;


export type ChangeArticleStateMutation = { __typename?: 'Mutation', changeArticleState: { __typename?: 'Article', id: number, updatedAt?: any | null, title: string, contents?: string | null, views: number, state: ArticleState, editor: string, category?: { __typename?: 'ArticleCategory', id: number, category: string } | null, area?: { __typename?: 'Area', id: number, region2depth: string, domestic: boolean } | null, thumbnail?: { __typename?: 'Image', id: number, path?: string | null } | null, places?: Array<{ __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null }> | null, articleContents?: Array<{ __typename?: 'ArticleContent', id: number, index?: number | null, subtitle?: string | null, content?: string | null, image?: { __typename?: 'Image', path?: string | null, mimetype?: string | null } | null, place?: { __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null } | null }> | null, images?: Array<{ __typename?: 'Image', id: number, path?: string | null }> | null } };

export type RegenerateTokenMutationVariables = Exact<{
  id: Scalars['String'];
  refreshToken: Scalars['String'];
}>;


export type RegenerateTokenMutation = { __typename?: 'Mutation', regenerateToken: { __typename?: 'AdminLoginResult', accessToken: string, refreshToken?: string | null, owner?: string | null } };

export type AddServiceVersionMutationVariables = Exact<{
  version: Scalars['String'];
  os: Os;
}>;


export type AddServiceVersionMutation = { __typename?: 'Mutation', addServiceVersion: { __typename?: 'Service', version: string, shouldUpdate: boolean, createdAt: any } };

export type ChangeCreationsStateMutationVariables = Exact<{
  id: Scalars['Int'];
  type: CreationsType;
  state: Scalars['Boolean'];
}>;


export type ChangeCreationsStateMutation = { __typename?: 'Mutation', changeCreationsState: boolean };

export type AdminLoginQueryVariables = Exact<{
  id: Scalars['String'];
  password: Scalars['String'];
}>;


export type AdminLoginQuery = { __typename?: 'Query', adminLogin: { __typename?: 'AdminLoginResult', accessToken: string, refreshToken?: string | null, owner?: string | null } };

export type LoginExtensionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type LoginExtensionQuery = { __typename?: 'Query', loginExtension: { __typename?: 'AdminLoginResult', accessToken: string, refreshToken?: string | null, owner?: string | null } };

export type CountPostingQueryVariables = Exact<{ [key: string]: never; }>;


export type CountPostingQuery = { __typename?: 'Query', countPosting: Array<number> };

export type CountProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type CountProfileQuery = { __typename?: 'Query', countProfile: Array<number> };

export type CountArticleQueryVariables = Exact<{ [key: string]: never; }>;


export type CountArticleQuery = { __typename?: 'Query', countArticle: Array<number> };

export type GetAreasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAreasQuery = { __typename?: 'Query', getAreas: Array<{ __typename?: 'Area', id: number, region2depth: string, symbol: string, domestic: boolean, activate: boolean, images?: Array<{ __typename?: 'AreaImages', title?: string | null, image?: { __typename?: 'Image', id: number, path?: string | null } | null }> | null }> };

export type SearchAreaDataQueryVariables = Exact<{
  domestic: Scalars['Boolean'];
  keyword: Scalars['String'];
}>;


export type SearchAreaDataQuery = { __typename?: 'Query', searchAreaData: Array<{ __typename?: 'AreaData', code: string, region1depth: string, region2depth: string, name: string, longitude: string, latitude: string }> };

export type GetArticleQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetArticleQuery = { __typename?: 'Query', getArticle: { __typename?: 'Article', id: number, updatedAt?: any | null, title: string, contents?: string | null, views: number, state: ArticleState, editor: string, category?: { __typename?: 'ArticleCategory', id: number, category: string } | null, area?: { __typename?: 'Area', id: number, region2depth: string, domestic: boolean } | null, thumbnail?: { __typename?: 'Image', id: number, path?: string | null } | null, places?: Array<{ __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null }> | null, articleContents?: Array<{ __typename?: 'ArticleContent', id: number, index?: number | null, subtitle?: string | null, content?: string | null, image?: { __typename?: 'Image', path?: string | null, mimetype?: string | null } | null, place?: { __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null } | null }> | null, images?: Array<{ __typename?: 'Image', id: number, path?: string | null }> | null } };

export type GetArticlesQueryVariables = Exact<{
  areaId?: InputMaybe<Scalars['Int']>;
}>;


export type GetArticlesQuery = { __typename?: 'Query', getArticles: Array<{ __typename?: 'Article', id: number, title: string, editor: string, state: ArticleState, area?: { __typename?: 'Area', id: number, region2depth: string, domestic: boolean } | null, category?: { __typename?: 'ArticleCategory', category: string } | null, thumbnail?: { __typename?: 'Image', id: number, path?: string | null } | null }> };

export type GetArticleCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticleCategoriesQuery = { __typename?: 'Query', getArticleCategories: Array<{ __typename?: 'ArticleCategory', id: number, category: string }> };

export type SearchArticlesQueryVariables = Exact<{
  keyword?: InputMaybe<Scalars['String']>;
  areaId?: InputMaybe<Scalars['Int']>;
}>;


export type SearchArticlesQuery = { __typename?: 'Query', searchArticles: Array<{ __typename?: 'Article', id: number, title: string, editor: string, state: ArticleState, area?: { __typename?: 'Area', id: number, region2depth: string, domestic: boolean } | null, category?: { __typename?: 'ArticleCategory', category: string } | null, thumbnail?: { __typename?: 'Image', id: number, path?: string | null } | null }> };

export type GetArticleForEditQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetArticleForEditQuery = { __typename?: 'Query', getArticleForEdit: { __typename?: 'Article', id: number, updatedAt?: any | null, title: string, contents?: string | null, views: number, state: ArticleState, editor: string, category?: { __typename?: 'ArticleCategory', id: number, category: string } | null, area?: { __typename?: 'Area', id: number, region2depth: string, domestic: boolean } | null, thumbnail?: { __typename?: 'Image', id: number, path?: string | null } | null, places?: Array<{ __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null }> | null, articleContents?: Array<{ __typename?: 'ArticleContent', id: number, index?: number | null, subtitle?: string | null, content?: string | null, image?: { __typename?: 'Image', path?: string | null, mimetype?: string | null } | null, place?: { __typename?: 'ArticlePlace', id: number, placeName?: string | null, placeURL?: string | null, category?: string | null } | null }> | null, images?: Array<{ __typename?: 'Image', id: number, path?: string | null }> | null } };

export type CountPostAndCommentByAreaQueryVariables = Exact<{ [key: string]: never; }>;


export type CountPostAndCommentByAreaQuery = { __typename?: 'Query', countPostAndCommentByArea: Array<{ __typename?: 'CountResult', areaId: number, region2depth: string, posts: number, comments: number }> };

export type GetCreationsQueryVariables = Exact<{
  reported?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<CreationsType>;
}>;


export type GetCreationsQuery = { __typename?: 'Query', getCreations: Array<{ __typename?: 'Creations', id: number, type?: CreationsType | null, creator: string, contents: string, open: boolean, reported: number, createdAt: any, images?: Array<{ __typename?: 'Image', id: number, path?: string | null }> | null }> };

export const ServiceFragmentDoc = gql`
    fragment Service on Service {
  version
  shouldUpdate
  createdAt
}
    `;
export const LoginResultFragmentDoc = gql`
    fragment LoginResult on AdminLoginResult {
  accessToken
  refreshToken
  owner
}
    `;
export const AreaDataFragmentDoc = gql`
    fragment AreaData on AreaData {
  code
  region1depth
  region2depth
  name
  longitude
  latitude
}
    `;
export const ArticleUnitFragmentDoc = gql`
    fragment ArticleUnit on Article {
  id
  title
  area {
    id
    region2depth
    domestic
  }
  category {
    category
  }
  editor
  thumbnail {
    id
    path
  }
  state
}
    `;
export const CategoryUnitFragmentDoc = gql`
    fragment CategoryUnit on ArticleCategory {
  id
  category
}
    `;
export const ArticlePlaceFragmentDoc = gql`
    fragment ArticlePlace on ArticlePlace {
  id
  placeName
  placeURL
  category
}
    `;
export const ArticleContentFragmentDoc = gql`
    fragment ArticleContent on ArticleContent {
  id
  index
  image {
    path
    mimetype
  }
  place {
    ...ArticlePlace
  }
  subtitle
  content
}
    ${ArticlePlaceFragmentDoc}`;
export const ArticleDetailFragmentDoc = gql`
    fragment ArticleDetail on Article {
  id
  updatedAt
  title
  contents
  views
  state
  category {
    ...CategoryUnit
  }
  area {
    id
    region2depth
    domestic
  }
  thumbnail {
    id
    path
  }
  editor
  places {
    ...ArticlePlace
  }
  articleContents {
    ...ArticleContent
  }
  images {
    id
    path
  }
}
    ${CategoryUnitFragmentDoc}
${ArticlePlaceFragmentDoc}
${ArticleContentFragmentDoc}`;
export const ArticleImageFragmentDoc = gql`
    fragment ArticleImage on Image {
  id
  path
  mimetype
  encoding
}
    `;
export const CountResultFragmentDoc = gql`
    fragment CountResult on CountResult {
  areaId
  region2depth
  posts
  comments
}
    `;
export const AreaUnitFragmentDoc = gql`
    fragment AreaUnit on Area {
  id
  region2depth
  symbol
  domestic
  activate
  images {
    image {
      id
      path
    }
    title
  }
}
    `;
export const FeedUnitFragmentDoc = gql`
    fragment FeedUnit on Creations {
  id
  type
  creator
  contents
  images {
    id
    path
  }
  open
  reported
  createdAt
}
    `;
export const AddArticleCategoryDocument = gql`
    mutation addArticleCategory($category: String!) {
  addArticleCategory(category: $category)
}
    `;
export type AddArticleCategoryMutationFn = Apollo.MutationFunction<AddArticleCategoryMutation, AddArticleCategoryMutationVariables>;
export type AddArticleCategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddArticleCategoryMutation, AddArticleCategoryMutationVariables>, 'mutation'>;

    export const AddArticleCategoryComponent = (props: AddArticleCategoryComponentProps) => (
      <ApolloReactComponents.Mutation<AddArticleCategoryMutation, AddArticleCategoryMutationVariables> mutation={AddArticleCategoryDocument} {...props} />
    );
    

/**
 * __useAddArticleCategoryMutation__
 *
 * To run a mutation, you first call `useAddArticleCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddArticleCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addArticleCategoryMutation, { data, loading, error }] = useAddArticleCategoryMutation({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useAddArticleCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AddArticleCategoryMutation, AddArticleCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddArticleCategoryMutation, AddArticleCategoryMutationVariables>(AddArticleCategoryDocument, options);
      }
export type AddArticleCategoryMutationHookResult = ReturnType<typeof useAddArticleCategoryMutation>;
export type AddArticleCategoryMutationResult = Apollo.MutationResult<AddArticleCategoryMutation>;
export type AddArticleCategoryMutationOptions = Apollo.BaseMutationOptions<AddArticleCategoryMutation, AddArticleCategoryMutationVariables>;
export const EditArticleCategoryDocument = gql`
    mutation editArticleCategory($id: Int!, $category: String!) {
  editArticleCategory(id: $id, category: $category)
}
    `;
export type EditArticleCategoryMutationFn = Apollo.MutationFunction<EditArticleCategoryMutation, EditArticleCategoryMutationVariables>;
export type EditArticleCategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<EditArticleCategoryMutation, EditArticleCategoryMutationVariables>, 'mutation'>;

    export const EditArticleCategoryComponent = (props: EditArticleCategoryComponentProps) => (
      <ApolloReactComponents.Mutation<EditArticleCategoryMutation, EditArticleCategoryMutationVariables> mutation={EditArticleCategoryDocument} {...props} />
    );
    

/**
 * __useEditArticleCategoryMutation__
 *
 * To run a mutation, you first call `useEditArticleCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditArticleCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editArticleCategoryMutation, { data, loading, error }] = useEditArticleCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useEditArticleCategoryMutation(baseOptions?: Apollo.MutationHookOptions<EditArticleCategoryMutation, EditArticleCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditArticleCategoryMutation, EditArticleCategoryMutationVariables>(EditArticleCategoryDocument, options);
      }
export type EditArticleCategoryMutationHookResult = ReturnType<typeof useEditArticleCategoryMutation>;
export type EditArticleCategoryMutationResult = Apollo.MutationResult<EditArticleCategoryMutation>;
export type EditArticleCategoryMutationOptions = Apollo.BaseMutationOptions<EditArticleCategoryMutation, EditArticleCategoryMutationVariables>;
export const RemoveArticleCategoryDocument = gql`
    mutation removeArticleCategory($id: Int!) {
  removeArticleCategory(id: $id)
}
    `;
export type RemoveArticleCategoryMutationFn = Apollo.MutationFunction<RemoveArticleCategoryMutation, RemoveArticleCategoryMutationVariables>;
export type RemoveArticleCategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveArticleCategoryMutation, RemoveArticleCategoryMutationVariables>, 'mutation'>;

    export const RemoveArticleCategoryComponent = (props: RemoveArticleCategoryComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveArticleCategoryMutation, RemoveArticleCategoryMutationVariables> mutation={RemoveArticleCategoryDocument} {...props} />
    );
    

/**
 * __useRemoveArticleCategoryMutation__
 *
 * To run a mutation, you first call `useRemoveArticleCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveArticleCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeArticleCategoryMutation, { data, loading, error }] = useRemoveArticleCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveArticleCategoryMutation(baseOptions?: Apollo.MutationHookOptions<RemoveArticleCategoryMutation, RemoveArticleCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveArticleCategoryMutation, RemoveArticleCategoryMutationVariables>(RemoveArticleCategoryDocument, options);
      }
export type RemoveArticleCategoryMutationHookResult = ReturnType<typeof useRemoveArticleCategoryMutation>;
export type RemoveArticleCategoryMutationResult = Apollo.MutationResult<RemoveArticleCategoryMutation>;
export type RemoveArticleCategoryMutationOptions = Apollo.BaseMutationOptions<RemoveArticleCategoryMutation, RemoveArticleCategoryMutationVariables>;
export const AddAreaDocument = gql`
    mutation addArea($input: CreateAreaInput!) {
  addArea(input: $input) {
    ...AreaUnit
  }
}
    ${AreaUnitFragmentDoc}`;
export type AddAreaMutationFn = Apollo.MutationFunction<AddAreaMutation, AddAreaMutationVariables>;
export type AddAreaComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddAreaMutation, AddAreaMutationVariables>, 'mutation'>;

    export const AddAreaComponent = (props: AddAreaComponentProps) => (
      <ApolloReactComponents.Mutation<AddAreaMutation, AddAreaMutationVariables> mutation={AddAreaDocument} {...props} />
    );
    

/**
 * __useAddAreaMutation__
 *
 * To run a mutation, you first call `useAddAreaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAreaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAreaMutation, { data, loading, error }] = useAddAreaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddAreaMutation(baseOptions?: Apollo.MutationHookOptions<AddAreaMutation, AddAreaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAreaMutation, AddAreaMutationVariables>(AddAreaDocument, options);
      }
export type AddAreaMutationHookResult = ReturnType<typeof useAddAreaMutation>;
export type AddAreaMutationResult = Apollo.MutationResult<AddAreaMutation>;
export type AddAreaMutationOptions = Apollo.BaseMutationOptions<AddAreaMutation, AddAreaMutationVariables>;
export const AddAreaImageDocument = gql`
    mutation addAreaImage($input: AddAreaImageInput!) {
  addAreaImage(input: $input) {
    ...AreaUnit
  }
}
    ${AreaUnitFragmentDoc}`;
export type AddAreaImageMutationFn = Apollo.MutationFunction<AddAreaImageMutation, AddAreaImageMutationVariables>;
export type AddAreaImageComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddAreaImageMutation, AddAreaImageMutationVariables>, 'mutation'>;

    export const AddAreaImageComponent = (props: AddAreaImageComponentProps) => (
      <ApolloReactComponents.Mutation<AddAreaImageMutation, AddAreaImageMutationVariables> mutation={AddAreaImageDocument} {...props} />
    );
    

/**
 * __useAddAreaImageMutation__
 *
 * To run a mutation, you first call `useAddAreaImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAreaImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAreaImageMutation, { data, loading, error }] = useAddAreaImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddAreaImageMutation(baseOptions?: Apollo.MutationHookOptions<AddAreaImageMutation, AddAreaImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAreaImageMutation, AddAreaImageMutationVariables>(AddAreaImageDocument, options);
      }
export type AddAreaImageMutationHookResult = ReturnType<typeof useAddAreaImageMutation>;
export type AddAreaImageMutationResult = Apollo.MutationResult<AddAreaImageMutation>;
export type AddAreaImageMutationOptions = Apollo.BaseMutationOptions<AddAreaImageMutation, AddAreaImageMutationVariables>;
export const RemoveAreaImageDocument = gql`
    mutation removeAreaImage($areaId: Float!, $imageId: Float!) {
  removeAreaImage(areaId: $areaId, imageId: $imageId) {
    ...AreaUnit
  }
}
    ${AreaUnitFragmentDoc}`;
export type RemoveAreaImageMutationFn = Apollo.MutationFunction<RemoveAreaImageMutation, RemoveAreaImageMutationVariables>;
export type RemoveAreaImageComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveAreaImageMutation, RemoveAreaImageMutationVariables>, 'mutation'>;

    export const RemoveAreaImageComponent = (props: RemoveAreaImageComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveAreaImageMutation, RemoveAreaImageMutationVariables> mutation={RemoveAreaImageDocument} {...props} />
    );
    

/**
 * __useRemoveAreaImageMutation__
 *
 * To run a mutation, you first call `useRemoveAreaImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAreaImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAreaImageMutation, { data, loading, error }] = useRemoveAreaImageMutation({
 *   variables: {
 *      areaId: // value for 'areaId'
 *      imageId: // value for 'imageId'
 *   },
 * });
 */
export function useRemoveAreaImageMutation(baseOptions?: Apollo.MutationHookOptions<RemoveAreaImageMutation, RemoveAreaImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveAreaImageMutation, RemoveAreaImageMutationVariables>(RemoveAreaImageDocument, options);
      }
export type RemoveAreaImageMutationHookResult = ReturnType<typeof useRemoveAreaImageMutation>;
export type RemoveAreaImageMutationResult = Apollo.MutationResult<RemoveAreaImageMutation>;
export type RemoveAreaImageMutationOptions = Apollo.BaseMutationOptions<RemoveAreaImageMutation, RemoveAreaImageMutationVariables>;
export const CreateArticleDocument = gql`
    mutation createArticle($input: CreateArticleInput!) {
  createArticle(input: $input) {
    ...ArticleDetail
  }
}
    ${ArticleDetailFragmentDoc}`;
export type CreateArticleMutationFn = Apollo.MutationFunction<CreateArticleMutation, CreateArticleMutationVariables>;
export type CreateArticleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateArticleMutation, CreateArticleMutationVariables>, 'mutation'>;

    export const CreateArticleComponent = (props: CreateArticleComponentProps) => (
      <ApolloReactComponents.Mutation<CreateArticleMutation, CreateArticleMutationVariables> mutation={CreateArticleDocument} {...props} />
    );
    

/**
 * __useCreateArticleMutation__
 *
 * To run a mutation, you first call `useCreateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArticleMutation, { data, loading, error }] = useCreateArticleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateArticleMutation(baseOptions?: Apollo.MutationHookOptions<CreateArticleMutation, CreateArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateArticleMutation, CreateArticleMutationVariables>(CreateArticleDocument, options);
      }
export type CreateArticleMutationHookResult = ReturnType<typeof useCreateArticleMutation>;
export type CreateArticleMutationResult = Apollo.MutationResult<CreateArticleMutation>;
export type CreateArticleMutationOptions = Apollo.BaseMutationOptions<CreateArticleMutation, CreateArticleMutationVariables>;
export const EditArticleDocument = gql`
    mutation editArticle($input: EditArticleInput!) {
  editArticle(input: $input) {
    ...ArticleDetail
  }
}
    ${ArticleDetailFragmentDoc}`;
export type EditArticleMutationFn = Apollo.MutationFunction<EditArticleMutation, EditArticleMutationVariables>;
export type EditArticleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<EditArticleMutation, EditArticleMutationVariables>, 'mutation'>;

    export const EditArticleComponent = (props: EditArticleComponentProps) => (
      <ApolloReactComponents.Mutation<EditArticleMutation, EditArticleMutationVariables> mutation={EditArticleDocument} {...props} />
    );
    

/**
 * __useEditArticleMutation__
 *
 * To run a mutation, you first call `useEditArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editArticleMutation, { data, loading, error }] = useEditArticleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditArticleMutation(baseOptions?: Apollo.MutationHookOptions<EditArticleMutation, EditArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditArticleMutation, EditArticleMutationVariables>(EditArticleDocument, options);
      }
export type EditArticleMutationHookResult = ReturnType<typeof useEditArticleMutation>;
export type EditArticleMutationResult = Apollo.MutationResult<EditArticleMutation>;
export type EditArticleMutationOptions = Apollo.BaseMutationOptions<EditArticleMutation, EditArticleMutationVariables>;
export const DeleteArticleDocument = gql`
    mutation deleteArticle($id: Float!) {
  deleteArticle(id: $id)
}
    `;
export type DeleteArticleMutationFn = Apollo.MutationFunction<DeleteArticleMutation, DeleteArticleMutationVariables>;
export type DeleteArticleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteArticleMutation, DeleteArticleMutationVariables>, 'mutation'>;

    export const DeleteArticleComponent = (props: DeleteArticleComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteArticleMutation, DeleteArticleMutationVariables> mutation={DeleteArticleDocument} {...props} />
    );
    

/**
 * __useDeleteArticleMutation__
 *
 * To run a mutation, you first call `useDeleteArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteArticleMutation, { data, loading, error }] = useDeleteArticleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteArticleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteArticleMutation, DeleteArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteArticleMutation, DeleteArticleMutationVariables>(DeleteArticleDocument, options);
      }
export type DeleteArticleMutationHookResult = ReturnType<typeof useDeleteArticleMutation>;
export type DeleteArticleMutationResult = Apollo.MutationResult<DeleteArticleMutation>;
export type DeleteArticleMutationOptions = Apollo.BaseMutationOptions<DeleteArticleMutation, DeleteArticleMutationVariables>;
export const ChangeArticleStateDocument = gql`
    mutation changeArticleState($id: Float!, $state: ArticleState!) {
  changeArticleState(id: $id, state: $state) {
    ...ArticleDetail
  }
}
    ${ArticleDetailFragmentDoc}`;
export type ChangeArticleStateMutationFn = Apollo.MutationFunction<ChangeArticleStateMutation, ChangeArticleStateMutationVariables>;
export type ChangeArticleStateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ChangeArticleStateMutation, ChangeArticleStateMutationVariables>, 'mutation'>;

    export const ChangeArticleStateComponent = (props: ChangeArticleStateComponentProps) => (
      <ApolloReactComponents.Mutation<ChangeArticleStateMutation, ChangeArticleStateMutationVariables> mutation={ChangeArticleStateDocument} {...props} />
    );
    

/**
 * __useChangeArticleStateMutation__
 *
 * To run a mutation, you first call `useChangeArticleStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeArticleStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeArticleStateMutation, { data, loading, error }] = useChangeArticleStateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useChangeArticleStateMutation(baseOptions?: Apollo.MutationHookOptions<ChangeArticleStateMutation, ChangeArticleStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeArticleStateMutation, ChangeArticleStateMutationVariables>(ChangeArticleStateDocument, options);
      }
export type ChangeArticleStateMutationHookResult = ReturnType<typeof useChangeArticleStateMutation>;
export type ChangeArticleStateMutationResult = Apollo.MutationResult<ChangeArticleStateMutation>;
export type ChangeArticleStateMutationOptions = Apollo.BaseMutationOptions<ChangeArticleStateMutation, ChangeArticleStateMutationVariables>;
export const RegenerateTokenDocument = gql`
    mutation regenerateToken($id: String!, $refreshToken: String!) {
  regenerateToken(id: $id, refreshToken: $refreshToken) {
    ...LoginResult
  }
}
    ${LoginResultFragmentDoc}`;
export type RegenerateTokenMutationFn = Apollo.MutationFunction<RegenerateTokenMutation, RegenerateTokenMutationVariables>;
export type RegenerateTokenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegenerateTokenMutation, RegenerateTokenMutationVariables>, 'mutation'>;

    export const RegenerateTokenComponent = (props: RegenerateTokenComponentProps) => (
      <ApolloReactComponents.Mutation<RegenerateTokenMutation, RegenerateTokenMutationVariables> mutation={RegenerateTokenDocument} {...props} />
    );
    

/**
 * __useRegenerateTokenMutation__
 *
 * To run a mutation, you first call `useRegenerateTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegenerateTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [regenerateTokenMutation, { data, loading, error }] = useRegenerateTokenMutation({
 *   variables: {
 *      id: // value for 'id'
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRegenerateTokenMutation(baseOptions?: Apollo.MutationHookOptions<RegenerateTokenMutation, RegenerateTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegenerateTokenMutation, RegenerateTokenMutationVariables>(RegenerateTokenDocument, options);
      }
export type RegenerateTokenMutationHookResult = ReturnType<typeof useRegenerateTokenMutation>;
export type RegenerateTokenMutationResult = Apollo.MutationResult<RegenerateTokenMutation>;
export type RegenerateTokenMutationOptions = Apollo.BaseMutationOptions<RegenerateTokenMutation, RegenerateTokenMutationVariables>;
export const AddServiceVersionDocument = gql`
    mutation addServiceVersion($version: String!, $os: OS!) {
  addServiceVersion(version: $version, os: $os) {
    ...Service
  }
}
    ${ServiceFragmentDoc}`;
export type AddServiceVersionMutationFn = Apollo.MutationFunction<AddServiceVersionMutation, AddServiceVersionMutationVariables>;
export type AddServiceVersionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddServiceVersionMutation, AddServiceVersionMutationVariables>, 'mutation'>;

    export const AddServiceVersionComponent = (props: AddServiceVersionComponentProps) => (
      <ApolloReactComponents.Mutation<AddServiceVersionMutation, AddServiceVersionMutationVariables> mutation={AddServiceVersionDocument} {...props} />
    );
    

/**
 * __useAddServiceVersionMutation__
 *
 * To run a mutation, you first call `useAddServiceVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddServiceVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addServiceVersionMutation, { data, loading, error }] = useAddServiceVersionMutation({
 *   variables: {
 *      version: // value for 'version'
 *      os: // value for 'os'
 *   },
 * });
 */
export function useAddServiceVersionMutation(baseOptions?: Apollo.MutationHookOptions<AddServiceVersionMutation, AddServiceVersionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddServiceVersionMutation, AddServiceVersionMutationVariables>(AddServiceVersionDocument, options);
      }
export type AddServiceVersionMutationHookResult = ReturnType<typeof useAddServiceVersionMutation>;
export type AddServiceVersionMutationResult = Apollo.MutationResult<AddServiceVersionMutation>;
export type AddServiceVersionMutationOptions = Apollo.BaseMutationOptions<AddServiceVersionMutation, AddServiceVersionMutationVariables>;
export const ChangeCreationsStateDocument = gql`
    mutation changeCreationsState($id: Int!, $type: CreationsType!, $state: Boolean!) {
  changeCreationsState(id: $id, type: $type, state: $state)
}
    `;
export type ChangeCreationsStateMutationFn = Apollo.MutationFunction<ChangeCreationsStateMutation, ChangeCreationsStateMutationVariables>;
export type ChangeCreationsStateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ChangeCreationsStateMutation, ChangeCreationsStateMutationVariables>, 'mutation'>;

    export const ChangeCreationsStateComponent = (props: ChangeCreationsStateComponentProps) => (
      <ApolloReactComponents.Mutation<ChangeCreationsStateMutation, ChangeCreationsStateMutationVariables> mutation={ChangeCreationsStateDocument} {...props} />
    );
    

/**
 * __useChangeCreationsStateMutation__
 *
 * To run a mutation, you first call `useChangeCreationsStateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeCreationsStateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeCreationsStateMutation, { data, loading, error }] = useChangeCreationsStateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useChangeCreationsStateMutation(baseOptions?: Apollo.MutationHookOptions<ChangeCreationsStateMutation, ChangeCreationsStateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeCreationsStateMutation, ChangeCreationsStateMutationVariables>(ChangeCreationsStateDocument, options);
      }
export type ChangeCreationsStateMutationHookResult = ReturnType<typeof useChangeCreationsStateMutation>;
export type ChangeCreationsStateMutationResult = Apollo.MutationResult<ChangeCreationsStateMutation>;
export type ChangeCreationsStateMutationOptions = Apollo.BaseMutationOptions<ChangeCreationsStateMutation, ChangeCreationsStateMutationVariables>;
export const AdminLoginDocument = gql`
    query adminLogin($id: String!, $password: String!) {
  adminLogin(id: $id, password: $password) {
    ...LoginResult
  }
}
    ${LoginResultFragmentDoc}`;
export type AdminLoginComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AdminLoginQuery, AdminLoginQueryVariables>, 'query'> & ({ variables: AdminLoginQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AdminLoginComponent = (props: AdminLoginComponentProps) => (
      <ApolloReactComponents.Query<AdminLoginQuery, AdminLoginQueryVariables> query={AdminLoginDocument} {...props} />
    );
    

/**
 * __useAdminLoginQuery__
 *
 * To run a query within a React component, call `useAdminLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminLoginQuery({
 *   variables: {
 *      id: // value for 'id'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAdminLoginQuery(baseOptions: Apollo.QueryHookOptions<AdminLoginQuery, AdminLoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminLoginQuery, AdminLoginQueryVariables>(AdminLoginDocument, options);
      }
export function useAdminLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminLoginQuery, AdminLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminLoginQuery, AdminLoginQueryVariables>(AdminLoginDocument, options);
        }
export type AdminLoginQueryHookResult = ReturnType<typeof useAdminLoginQuery>;
export type AdminLoginLazyQueryHookResult = ReturnType<typeof useAdminLoginLazyQuery>;
export type AdminLoginQueryResult = Apollo.QueryResult<AdminLoginQuery, AdminLoginQueryVariables>;
export const LoginExtensionDocument = gql`
    query loginExtension($id: String!) {
  loginExtension(id: $id) {
    ...LoginResult
  }
}
    ${LoginResultFragmentDoc}`;
export type LoginExtensionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LoginExtensionQuery, LoginExtensionQueryVariables>, 'query'> & ({ variables: LoginExtensionQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const LoginExtensionComponent = (props: LoginExtensionComponentProps) => (
      <ApolloReactComponents.Query<LoginExtensionQuery, LoginExtensionQueryVariables> query={LoginExtensionDocument} {...props} />
    );
    

/**
 * __useLoginExtensionQuery__
 *
 * To run a query within a React component, call `useLoginExtensionQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginExtensionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginExtensionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLoginExtensionQuery(baseOptions: Apollo.QueryHookOptions<LoginExtensionQuery, LoginExtensionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginExtensionQuery, LoginExtensionQueryVariables>(LoginExtensionDocument, options);
      }
export function useLoginExtensionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginExtensionQuery, LoginExtensionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginExtensionQuery, LoginExtensionQueryVariables>(LoginExtensionDocument, options);
        }
export type LoginExtensionQueryHookResult = ReturnType<typeof useLoginExtensionQuery>;
export type LoginExtensionLazyQueryHookResult = ReturnType<typeof useLoginExtensionLazyQuery>;
export type LoginExtensionQueryResult = Apollo.QueryResult<LoginExtensionQuery, LoginExtensionQueryVariables>;
export const CountPostingDocument = gql`
    query countPosting {
  countPosting
}
    `;
export type CountPostingComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CountPostingQuery, CountPostingQueryVariables>, 'query'>;

    export const CountPostingComponent = (props: CountPostingComponentProps) => (
      <ApolloReactComponents.Query<CountPostingQuery, CountPostingQueryVariables> query={CountPostingDocument} {...props} />
    );
    

/**
 * __useCountPostingQuery__
 *
 * To run a query within a React component, call `useCountPostingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountPostingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountPostingQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountPostingQuery(baseOptions?: Apollo.QueryHookOptions<CountPostingQuery, CountPostingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountPostingQuery, CountPostingQueryVariables>(CountPostingDocument, options);
      }
export function useCountPostingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountPostingQuery, CountPostingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountPostingQuery, CountPostingQueryVariables>(CountPostingDocument, options);
        }
export type CountPostingQueryHookResult = ReturnType<typeof useCountPostingQuery>;
export type CountPostingLazyQueryHookResult = ReturnType<typeof useCountPostingLazyQuery>;
export type CountPostingQueryResult = Apollo.QueryResult<CountPostingQuery, CountPostingQueryVariables>;
export const CountProfileDocument = gql`
    query countProfile {
  countProfile
}
    `;
export type CountProfileComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CountProfileQuery, CountProfileQueryVariables>, 'query'>;

    export const CountProfileComponent = (props: CountProfileComponentProps) => (
      <ApolloReactComponents.Query<CountProfileQuery, CountProfileQueryVariables> query={CountProfileDocument} {...props} />
    );
    

/**
 * __useCountProfileQuery__
 *
 * To run a query within a React component, call `useCountProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountProfileQuery(baseOptions?: Apollo.QueryHookOptions<CountProfileQuery, CountProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountProfileQuery, CountProfileQueryVariables>(CountProfileDocument, options);
      }
export function useCountProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountProfileQuery, CountProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountProfileQuery, CountProfileQueryVariables>(CountProfileDocument, options);
        }
export type CountProfileQueryHookResult = ReturnType<typeof useCountProfileQuery>;
export type CountProfileLazyQueryHookResult = ReturnType<typeof useCountProfileLazyQuery>;
export type CountProfileQueryResult = Apollo.QueryResult<CountProfileQuery, CountProfileQueryVariables>;
export const CountArticleDocument = gql`
    query countArticle {
  countArticle
}
    `;
export type CountArticleComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CountArticleQuery, CountArticleQueryVariables>, 'query'>;

    export const CountArticleComponent = (props: CountArticleComponentProps) => (
      <ApolloReactComponents.Query<CountArticleQuery, CountArticleQueryVariables> query={CountArticleDocument} {...props} />
    );
    

/**
 * __useCountArticleQuery__
 *
 * To run a query within a React component, call `useCountArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountArticleQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountArticleQuery(baseOptions?: Apollo.QueryHookOptions<CountArticleQuery, CountArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountArticleQuery, CountArticleQueryVariables>(CountArticleDocument, options);
      }
export function useCountArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountArticleQuery, CountArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountArticleQuery, CountArticleQueryVariables>(CountArticleDocument, options);
        }
export type CountArticleQueryHookResult = ReturnType<typeof useCountArticleQuery>;
export type CountArticleLazyQueryHookResult = ReturnType<typeof useCountArticleLazyQuery>;
export type CountArticleQueryResult = Apollo.QueryResult<CountArticleQuery, CountArticleQueryVariables>;
export const GetAreasDocument = gql`
    query getAreas {
  getAreas {
    ...AreaUnit
  }
}
    ${AreaUnitFragmentDoc}`;
export type GetAreasComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAreasQuery, GetAreasQueryVariables>, 'query'>;

    export const GetAreasComponent = (props: GetAreasComponentProps) => (
      <ApolloReactComponents.Query<GetAreasQuery, GetAreasQueryVariables> query={GetAreasDocument} {...props} />
    );
    

/**
 * __useGetAreasQuery__
 *
 * To run a query within a React component, call `useGetAreasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAreasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAreasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAreasQuery(baseOptions?: Apollo.QueryHookOptions<GetAreasQuery, GetAreasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAreasQuery, GetAreasQueryVariables>(GetAreasDocument, options);
      }
export function useGetAreasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAreasQuery, GetAreasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAreasQuery, GetAreasQueryVariables>(GetAreasDocument, options);
        }
export type GetAreasQueryHookResult = ReturnType<typeof useGetAreasQuery>;
export type GetAreasLazyQueryHookResult = ReturnType<typeof useGetAreasLazyQuery>;
export type GetAreasQueryResult = Apollo.QueryResult<GetAreasQuery, GetAreasQueryVariables>;
export const SearchAreaDataDocument = gql`
    query searchAreaData($domestic: Boolean!, $keyword: String!) {
  searchAreaData(domestic: $domestic, keyword: $keyword) {
    ...AreaData
  }
}
    ${AreaDataFragmentDoc}`;
export type SearchAreaDataComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SearchAreaDataQuery, SearchAreaDataQueryVariables>, 'query'> & ({ variables: SearchAreaDataQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SearchAreaDataComponent = (props: SearchAreaDataComponentProps) => (
      <ApolloReactComponents.Query<SearchAreaDataQuery, SearchAreaDataQueryVariables> query={SearchAreaDataDocument} {...props} />
    );
    

/**
 * __useSearchAreaDataQuery__
 *
 * To run a query within a React component, call `useSearchAreaDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchAreaDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchAreaDataQuery({
 *   variables: {
 *      domestic: // value for 'domestic'
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useSearchAreaDataQuery(baseOptions: Apollo.QueryHookOptions<SearchAreaDataQuery, SearchAreaDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchAreaDataQuery, SearchAreaDataQueryVariables>(SearchAreaDataDocument, options);
      }
export function useSearchAreaDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchAreaDataQuery, SearchAreaDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchAreaDataQuery, SearchAreaDataQueryVariables>(SearchAreaDataDocument, options);
        }
export type SearchAreaDataQueryHookResult = ReturnType<typeof useSearchAreaDataQuery>;
export type SearchAreaDataLazyQueryHookResult = ReturnType<typeof useSearchAreaDataLazyQuery>;
export type SearchAreaDataQueryResult = Apollo.QueryResult<SearchAreaDataQuery, SearchAreaDataQueryVariables>;
export const GetArticleDocument = gql`
    query getArticle($id: Int!) {
  getArticle(id: $id) {
    ...ArticleDetail
  }
}
    ${ArticleDetailFragmentDoc}`;
export type GetArticleComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetArticleQuery, GetArticleQueryVariables>, 'query'> & ({ variables: GetArticleQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetArticleComponent = (props: GetArticleComponentProps) => (
      <ApolloReactComponents.Query<GetArticleQuery, GetArticleQueryVariables> query={GetArticleDocument} {...props} />
    );
    

/**
 * __useGetArticleQuery__
 *
 * To run a query within a React component, call `useGetArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArticleQuery(baseOptions: Apollo.QueryHookOptions<GetArticleQuery, GetArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
      }
export function useGetArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticleQuery, GetArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, options);
        }
export type GetArticleQueryHookResult = ReturnType<typeof useGetArticleQuery>;
export type GetArticleLazyQueryHookResult = ReturnType<typeof useGetArticleLazyQuery>;
export type GetArticleQueryResult = Apollo.QueryResult<GetArticleQuery, GetArticleQueryVariables>;
export const GetArticlesDocument = gql`
    query getArticles($areaId: Int) {
  getArticles(areaId: $areaId) {
    ...ArticleUnit
  }
}
    ${ArticleUnitFragmentDoc}`;
export type GetArticlesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetArticlesQuery, GetArticlesQueryVariables>, 'query'>;

    export const GetArticlesComponent = (props: GetArticlesComponentProps) => (
      <ApolloReactComponents.Query<GetArticlesQuery, GetArticlesQueryVariables> query={GetArticlesDocument} {...props} />
    );
    

/**
 * __useGetArticlesQuery__
 *
 * To run a query within a React component, call `useGetArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesQuery({
 *   variables: {
 *      areaId: // value for 'areaId'
 *   },
 * });
 */
export function useGetArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, options);
      }
export function useGetArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, options);
        }
export type GetArticlesQueryHookResult = ReturnType<typeof useGetArticlesQuery>;
export type GetArticlesLazyQueryHookResult = ReturnType<typeof useGetArticlesLazyQuery>;
export type GetArticlesQueryResult = Apollo.QueryResult<GetArticlesQuery, GetArticlesQueryVariables>;
export const GetArticleCategoriesDocument = gql`
    query getArticleCategories {
  getArticleCategories {
    id
    category
  }
}
    `;
export type GetArticleCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetArticleCategoriesQuery, GetArticleCategoriesQueryVariables>, 'query'>;

    export const GetArticleCategoriesComponent = (props: GetArticleCategoriesComponentProps) => (
      <ApolloReactComponents.Query<GetArticleCategoriesQuery, GetArticleCategoriesQueryVariables> query={GetArticleCategoriesDocument} {...props} />
    );
    

/**
 * __useGetArticleCategoriesQuery__
 *
 * To run a query within a React component, call `useGetArticleCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetArticleCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetArticleCategoriesQuery, GetArticleCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticleCategoriesQuery, GetArticleCategoriesQueryVariables>(GetArticleCategoriesDocument, options);
      }
export function useGetArticleCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticleCategoriesQuery, GetArticleCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticleCategoriesQuery, GetArticleCategoriesQueryVariables>(GetArticleCategoriesDocument, options);
        }
export type GetArticleCategoriesQueryHookResult = ReturnType<typeof useGetArticleCategoriesQuery>;
export type GetArticleCategoriesLazyQueryHookResult = ReturnType<typeof useGetArticleCategoriesLazyQuery>;
export type GetArticleCategoriesQueryResult = Apollo.QueryResult<GetArticleCategoriesQuery, GetArticleCategoriesQueryVariables>;
export const SearchArticlesDocument = gql`
    query searchArticles($keyword: String, $areaId: Int) {
  searchArticles(keyword: $keyword, areaId: $areaId) {
    ...ArticleUnit
  }
}
    ${ArticleUnitFragmentDoc}`;
export type SearchArticlesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SearchArticlesQuery, SearchArticlesQueryVariables>, 'query'>;

    export const SearchArticlesComponent = (props: SearchArticlesComponentProps) => (
      <ApolloReactComponents.Query<SearchArticlesQuery, SearchArticlesQueryVariables> query={SearchArticlesDocument} {...props} />
    );
    

/**
 * __useSearchArticlesQuery__
 *
 * To run a query within a React component, call `useSearchArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchArticlesQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *      areaId: // value for 'areaId'
 *   },
 * });
 */
export function useSearchArticlesQuery(baseOptions?: Apollo.QueryHookOptions<SearchArticlesQuery, SearchArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchArticlesQuery, SearchArticlesQueryVariables>(SearchArticlesDocument, options);
      }
export function useSearchArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchArticlesQuery, SearchArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchArticlesQuery, SearchArticlesQueryVariables>(SearchArticlesDocument, options);
        }
export type SearchArticlesQueryHookResult = ReturnType<typeof useSearchArticlesQuery>;
export type SearchArticlesLazyQueryHookResult = ReturnType<typeof useSearchArticlesLazyQuery>;
export type SearchArticlesQueryResult = Apollo.QueryResult<SearchArticlesQuery, SearchArticlesQueryVariables>;
export const GetArticleForEditDocument = gql`
    query getArticleForEdit($id: Int!) {
  getArticleForEdit(id: $id) {
    ...ArticleDetail
  }
}
    ${ArticleDetailFragmentDoc}`;
export type GetArticleForEditComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetArticleForEditQuery, GetArticleForEditQueryVariables>, 'query'> & ({ variables: GetArticleForEditQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetArticleForEditComponent = (props: GetArticleForEditComponentProps) => (
      <ApolloReactComponents.Query<GetArticleForEditQuery, GetArticleForEditQueryVariables> query={GetArticleForEditDocument} {...props} />
    );
    

/**
 * __useGetArticleForEditQuery__
 *
 * To run a query within a React component, call `useGetArticleForEditQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleForEditQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleForEditQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArticleForEditQuery(baseOptions: Apollo.QueryHookOptions<GetArticleForEditQuery, GetArticleForEditQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticleForEditQuery, GetArticleForEditQueryVariables>(GetArticleForEditDocument, options);
      }
export function useGetArticleForEditLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticleForEditQuery, GetArticleForEditQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticleForEditQuery, GetArticleForEditQueryVariables>(GetArticleForEditDocument, options);
        }
export type GetArticleForEditQueryHookResult = ReturnType<typeof useGetArticleForEditQuery>;
export type GetArticleForEditLazyQueryHookResult = ReturnType<typeof useGetArticleForEditLazyQuery>;
export type GetArticleForEditQueryResult = Apollo.QueryResult<GetArticleForEditQuery, GetArticleForEditQueryVariables>;
export const CountPostAndCommentByAreaDocument = gql`
    query countPostAndCommentByArea {
  countPostAndCommentByArea {
    ...CountResult
  }
}
    ${CountResultFragmentDoc}`;
export type CountPostAndCommentByAreaComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CountPostAndCommentByAreaQuery, CountPostAndCommentByAreaQueryVariables>, 'query'>;

    export const CountPostAndCommentByAreaComponent = (props: CountPostAndCommentByAreaComponentProps) => (
      <ApolloReactComponents.Query<CountPostAndCommentByAreaQuery, CountPostAndCommentByAreaQueryVariables> query={CountPostAndCommentByAreaDocument} {...props} />
    );
    

/**
 * __useCountPostAndCommentByAreaQuery__
 *
 * To run a query within a React component, call `useCountPostAndCommentByAreaQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountPostAndCommentByAreaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountPostAndCommentByAreaQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountPostAndCommentByAreaQuery(baseOptions?: Apollo.QueryHookOptions<CountPostAndCommentByAreaQuery, CountPostAndCommentByAreaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountPostAndCommentByAreaQuery, CountPostAndCommentByAreaQueryVariables>(CountPostAndCommentByAreaDocument, options);
      }
export function useCountPostAndCommentByAreaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountPostAndCommentByAreaQuery, CountPostAndCommentByAreaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountPostAndCommentByAreaQuery, CountPostAndCommentByAreaQueryVariables>(CountPostAndCommentByAreaDocument, options);
        }
export type CountPostAndCommentByAreaQueryHookResult = ReturnType<typeof useCountPostAndCommentByAreaQuery>;
export type CountPostAndCommentByAreaLazyQueryHookResult = ReturnType<typeof useCountPostAndCommentByAreaLazyQuery>;
export type CountPostAndCommentByAreaQueryResult = Apollo.QueryResult<CountPostAndCommentByAreaQuery, CountPostAndCommentByAreaQueryVariables>;
export const GetCreationsDocument = gql`
    query getCreations($reported: Boolean, $type: CreationsType) {
  getCreations(reported: $reported, type: $type) {
    ...FeedUnit
  }
}
    ${FeedUnitFragmentDoc}`;
export type GetCreationsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCreationsQuery, GetCreationsQueryVariables>, 'query'>;

    export const GetCreationsComponent = (props: GetCreationsComponentProps) => (
      <ApolloReactComponents.Query<GetCreationsQuery, GetCreationsQueryVariables> query={GetCreationsDocument} {...props} />
    );
    

/**
 * __useGetCreationsQuery__
 *
 * To run a query within a React component, call `useGetCreationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCreationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCreationsQuery({
 *   variables: {
 *      reported: // value for 'reported'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetCreationsQuery(baseOptions?: Apollo.QueryHookOptions<GetCreationsQuery, GetCreationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCreationsQuery, GetCreationsQueryVariables>(GetCreationsDocument, options);
      }
export function useGetCreationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCreationsQuery, GetCreationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCreationsQuery, GetCreationsQueryVariables>(GetCreationsDocument, options);
        }
export type GetCreationsQueryHookResult = ReturnType<typeof useGetCreationsQuery>;
export type GetCreationsLazyQueryHookResult = ReturnType<typeof useGetCreationsLazyQuery>;
export type GetCreationsQueryResult = Apollo.QueryResult<GetCreationsQuery, GetCreationsQueryVariables>;