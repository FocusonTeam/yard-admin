import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
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
  __typename?: "Accept";
  copylight: Scalars["Boolean"];
  location: Scalars["Boolean"];
  marketing: Scalars["Boolean"];
  privacy: Scalars["Boolean"];
  terms: Scalars["Boolean"];
};

export type AcceptInput = {
  copylight?: InputMaybe<Scalars["Boolean"]>;
  location?: InputMaybe<Scalars["Boolean"]>;
  marketing?: InputMaybe<Scalars["Boolean"]>;
  privacy?: InputMaybe<Scalars["Boolean"]>;
  terms?: InputMaybe<Scalars["Boolean"]>;
};

export type AdminLoginResult = {
  __typename?: "AdminLoginResult";
  accessToken: Scalars["String"];
  owner?: Maybe<Scalars["String"]>;
  refreshToken?: Maybe<Scalars["String"]>;
};

export type AdminLoginResultInput = {
  accessToken: Scalars["String"];
  owner?: InputMaybe<Scalars["String"]>;
  refreshToken?: InputMaybe<Scalars["String"]>;
};

export type Area = {
  __typename?: "Area";
  activate: Scalars["Boolean"];
  areaTrend?: Maybe<AreaTrend>;
  areaTrends?: Maybe<Array<AreaTrend>>;
  articles?: Maybe<Array<Article>>;
  /** 법정구역 코드 */
  code: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  domestic: Scalars["Boolean"];
  id: Scalars["Int"];
  images?: Maybe<Array<AreaImages>>;
  /** y 좌표 */
  latitude?: Maybe<Scalars["String"]>;
  /** x 좌표 */
  longitude?: Maybe<Scalars["String"]>;
  /** 군 단위 영어 이름 */
  name?: Maybe<Scalars["String"]>;
  posts?: Maybe<Array<Post>>;
  /** 무작위 지역 이미지 */
  randomImage?: Maybe<AreaImages>;
  /** 시도 단위 */
  region1depth?: Maybe<Scalars["String"]>;
  /** 군 단위 */
  region2depth: Scalars["String"];
  /** 이모지 심볼 */
  symbol: Scalars["String"];
  /** 고정된 첫번째 이미지 */
  thumbnail?: Maybe<Image>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AreaImages = {
  __typename?: "AreaImages";
  area?: Maybe<Area>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  image?: Maybe<Image>;
  title?: Maybe<Scalars["String"]>;
};

export type AreaImagesInput = {
  area?: InputMaybe<AreaInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  image?: InputMaybe<ImageInput>;
  title?: InputMaybe<Scalars["String"]>;
};

export type AreaInput = {
  activate: Scalars["Boolean"];
  areaTrend?: InputMaybe<AreaTrendInput>;
  areaTrends?: InputMaybe<Array<AreaTrendInput>>;
  articles?: InputMaybe<Array<ArticleInput>>;
  /** 법정구역 코드 */
  code: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  domestic: Scalars["Boolean"];
  images?: InputMaybe<Array<AreaImagesInput>>;
  /** y 좌표 */
  latitude?: InputMaybe<Scalars["String"]>;
  /** x 좌표 */
  longitude?: InputMaybe<Scalars["String"]>;
  /** 군 단위 영어 이름 */
  name?: InputMaybe<Scalars["String"]>;
  posts?: InputMaybe<Array<PostInput>>;
  /** 무작위 지역 이미지 */
  randomImage?: InputMaybe<AreaImagesInput>;
  /** 시도 단위 */
  region1depth?: InputMaybe<Scalars["String"]>;
  /** 군 단위 */
  region2depth: Scalars["String"];
  /** 이모지 심볼 */
  symbol: Scalars["String"];
  /** 고정된 첫번째 이미지 */
  thumbnail?: InputMaybe<ImageInput>;
};

export type AreaTrend = {
  __typename?: "AreaTrend";
  area: Area;
  baseDate?: Maybe<Scalars["DateTime"]>;
  /** 방문수 */
  count?: Maybe<Scalars["Float"]>;
  id: Scalars["Int"];
  /** 방문자 수 추세 */
  trend?: Maybe<Trend>;
};

export type AreaTrendInput = {
  area: AreaInput;
  baseDate?: InputMaybe<Scalars["DateTime"]>;
  /** 방문수 */
  count?: InputMaybe<Scalars["Float"]>;
  id: Scalars["Int"];
  /** 방문자 수 추세 */
  trend?: InputMaybe<Trend>;
};

export type Article = {
  __typename?: "Article";
  area: Area;
  articleContents?: Maybe<Array<ArticleContent>>;
  category: ArticleCategory;
  contents?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  editor: Scalars["String"];
  id: Scalars["Int"];
  images?: Maybe<Array<Image>>;
  places?: Maybe<Array<ArticlePlace>>;
  state: ArticleState;
  thumbnail?: Maybe<Image>;
  title: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  views: Scalars["Int"];
};

export type ArticleCategory = {
  __typename?: "ArticleCategory";
  articles?: Maybe<Array<Article>>;
  category: Scalars["String"];
  id: Scalars["Int"];
};

export type ArticleCategoryInput = {
  articles?: InputMaybe<Array<ArticleInput>>;
  category: Scalars["String"];
  id: Scalars["Int"];
};

export type ArticleContent = {
  __typename?: "ArticleContent";
  article?: Maybe<Article>;
  content?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["Int"];
  image?: Maybe<Image>;
  index?: Maybe<Scalars["Int"]>;
  place?: Maybe<ArticlePlace>;
  source?: Maybe<Scalars["String"]>;
  subtitle?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ArticleContentInput = {
  article?: InputMaybe<ArticleInput>;
  content?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<ImageInput>;
  index?: InputMaybe<Scalars["Int"]>;
  place?: InputMaybe<ArticlePlaceInput>;
  source?: InputMaybe<Scalars["String"]>;
  subtitle?: InputMaybe<Scalars["String"]>;
};

export type ArticleInput = {
  area: AreaInput;
  articleContents?: InputMaybe<Array<ArticleContentInput>>;
  category: ArticleCategoryInput;
  contents?: InputMaybe<Scalars["String"]>;
  editor: Scalars["String"];
  images?: InputMaybe<Array<ImageInput>>;
  places?: InputMaybe<Array<ArticlePlaceInput>>;
  state: ArticleState;
  thumbnail?: InputMaybe<ImageInput>;
  title: Scalars["String"];
  views: Scalars["Int"];
};

export type ArticlePlace = {
  __typename?: "ArticlePlace";
  article?: Maybe<Article>;
  category?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  /** 장소가 여러 개일 경우 순서 */
  index?: Maybe<Scalars["Int"]>;
  placeName?: Maybe<Scalars["String"]>;
  placeURL?: Maybe<Scalars["String"]>;
};

export type ArticlePlaceInput = {
  article?: InputMaybe<ArticleInput>;
  category?: InputMaybe<Scalars["String"]>;
  id: Scalars["Int"];
  /** 장소가 여러 개일 경우 순서 */
  index?: InputMaybe<Scalars["Int"]>;
  placeName?: InputMaybe<Scalars["String"]>;
  placeURL?: InputMaybe<Scalars["String"]>;
};

export enum ArticleState {
  Done = "DONE",
  Inprogress = "INPROGRESS",
  Uploaded = "UPLOADED",
}

export type Comment = {
  __typename?: "Comment";
  content: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["Int"];
  isMine?: Maybe<Scalars["Boolean"]>;
  /** 공개 여부 */
  open?: Maybe<Scalars["Boolean"]>;
  post: Post;
  profile: Profile;
  reports?: Maybe<Array<CommentReport>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CommentInput = {
  content: Scalars["String"];
  isMine?: InputMaybe<Scalars["Boolean"]>;
  /** 공개 여부 */
  open?: InputMaybe<Scalars["Boolean"]>;
  post: PostInput;
  profile: ProfileInput;
  reports?: InputMaybe<Array<CommentReportInput>>;
};

export type CommentReport = {
  __typename?: "CommentReport";
  comment?: Maybe<Comment>;
  id: Scalars["Int"];
  /** 기타 신고 사유 */
  other?: Maybe<Scalars["String"]>;
  /** 신고 사유 */
  reasonId?: Maybe<Scalars["Int"]>;
  reportedAt?: Maybe<Scalars["DateTime"]>;
  /** 신고자 */
  reporter: Profile;
  /** 피신고자 */
  respondent: Profile;
};

export type CommentReportInput = {
  comment?: InputMaybe<CommentInput>;
  id: Scalars["Int"];
  /** 기타 신고 사유 */
  other?: InputMaybe<Scalars["String"]>;
  /** 신고 사유 */
  reasonId?: InputMaybe<Scalars["Int"]>;
  reportedAt?: InputMaybe<Scalars["DateTime"]>;
  /** 신고자 */
  reporter: ProfileInput;
  /** 피신고자 */
  respondent: ProfileInput;
};

export type Content = {
  content?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<UploadImageInput>;
  placeCategory?: InputMaybe<Scalars["String"]>;
  placeName?: InputMaybe<Scalars["String"]>;
  placeUrl?: InputMaybe<Scalars["String"]>;
  source?: InputMaybe<Scalars["String"]>;
  subtitle?: InputMaybe<Scalars["String"]>;
};

export type CountResult = {
  __typename?: "CountResult";
  areaId: Scalars["Int"];
  comments: Scalars["Int"];
  posts: Scalars["Int"];
  region2depth: Scalars["String"];
};

export type CountResultInput = {
  areaId: Scalars["Int"];
  comments: Scalars["Int"];
  posts: Scalars["Int"];
  region2depth: Scalars["String"];
};

export type CreateArticleInput = {
  areaId: Scalars["Int"];
  categoryId: Scalars["Int"];
  contents?: InputMaybe<Array<Content>>;
  state: ArticleState;
  thumbnailIndex?: InputMaybe<Scalars["Int"]>;
  title: Scalars["String"];
};

export type EditArticleInput = {
  areaId: Scalars["Int"];
  categoryId: Scalars["Int"];
  contents?: InputMaybe<Array<Content>>;
  id: Scalars["Int"];
  state: ArticleState;
  thumbnailIndex?: InputMaybe<Scalars["Int"]>;
  title: Scalars["String"];
};

export type Image = {
  __typename?: "Image";
  areaImages?: Maybe<Array<AreaImages>>;
  article?: Maybe<Article>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  encoding?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  mimetype?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  place?: Maybe<Scalars["String"]>;
  postImages?: Maybe<Array<PostsImages>>;
  profile?: Maybe<Profile>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ImageInput = {
  areaImages?: InputMaybe<Array<AreaImagesInput>>;
  article?: InputMaybe<ArticleInput>;
  encoding?: InputMaybe<Scalars["String"]>;
  mimetype?: InputMaybe<Scalars["String"]>;
  path?: InputMaybe<Scalars["String"]>;
  place?: InputMaybe<Scalars["String"]>;
  postImages?: InputMaybe<Array<PostsImagesInput>>;
  profile?: InputMaybe<ProfileInput>;
};

export type Like = {
  __typename?: "Like";
  createdAt?: Maybe<Scalars["DateTime"]>;
  post?: Maybe<Post>;
  profile?: Maybe<Profile>;
};

export type LikeInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  post?: InputMaybe<PostInput>;
  profile?: InputMaybe<ProfileInput>;
};

export type Mutation = {
  __typename?: "Mutation";
  addAndroidVersion: Scalars["String"];
  addArticleCategory: Scalars["Boolean"];
  addIosVersion: Scalars["String"];
  changeArticleState: Article;
  closeComment: Scalars["Boolean"];
  closePost: Scalars["Boolean"];
  createAdmin: Scalars["Boolean"];
  createArticle: Article;
  deleteArticle: Scalars["Boolean"];
  deleteComment: Scalars["Boolean"];
  deletePost: Scalars["Boolean"];
  editArticle: Article;
  editArticleCategory: Scalars["Boolean"];
  openComment: Scalars["Boolean"];
  openPost: Scalars["Boolean"];
  regenerateToken: AdminLoginResult;
  removeArticleCategory: Scalars["Boolean"];
};

export type MutationAddAndroidVersionArgs = {
  version: Scalars["String"];
};

export type MutationAddArticleCategoryArgs = {
  category: Scalars["String"];
};

export type MutationAddIosVersionArgs = {
  version: Scalars["String"];
};

export type MutationChangeArticleStateArgs = {
  id: Scalars["Float"];
  state: Scalars["String"];
};

export type MutationCloseCommentArgs = {
  commentId: Scalars["Int"];
};

export type MutationClosePostArgs = {
  postId: Scalars["Int"];
};

export type MutationCreateAdminArgs = {
  id: Scalars["String"];
  owner: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};

export type MutationDeleteArticleArgs = {
  id: Scalars["Float"];
};

export type MutationDeleteCommentArgs = {
  commentId: Scalars["Int"];
};

export type MutationDeletePostArgs = {
  postId: Scalars["Int"];
};

export type MutationEditArticleArgs = {
  input: EditArticleInput;
};

export type MutationEditArticleCategoryArgs = {
  category: Scalars["String"];
  id: Scalars["Int"];
};

export type MutationOpenCommentArgs = {
  commentId: Scalars["Int"];
};

export type MutationOpenPostArgs = {
  postId: Scalars["Int"];
};

export type MutationRegenerateTokenArgs = {
  id: Scalars["String"];
  refreshToken: Scalars["String"];
};

export type MutationRemoveArticleCategoryArgs = {
  id: Scalars["Int"];
};

export enum Os {
  Android = "ANDROID",
  Ios = "IOS",
}

export type Place = {
  __typename?: "Place";
  /** 도로명 주소 */
  address?: Maybe<Scalars["String"]>;
  areaId?: Maybe<Scalars["Int"]>;
  category?: Maybe<Scalars["String"]>;
  categoryGroup?: Maybe<Scalars["String"]>;
  /** 카카오 API 상의 ID */
  externalId: Scalars["String"];
  id: Scalars["Int"];
  /** y 좌표 */
  latitude: Scalars["String"];
  /** x 좌표 */
  longitude: Scalars["String"];
  name: Scalars["String"];
  /** 장소 연락처 */
  phone?: Maybe<Scalars["String"]>;
  posts?: Maybe<Array<Post>>;
  /** 카테고리 이모지 */
  symbol?: Maybe<Scalars["String"]>;
  tags?: Maybe<Array<Tag>>;
  /** 장소에 올라온 가장 최근 이미지 */
  thumbnail?: Maybe<Image>;
  url?: Maybe<Scalars["String"]>;
};

export type PlaceInput = {
  /** 도로명 주소 */
  address?: InputMaybe<Scalars["String"]>;
  areaId?: InputMaybe<Scalars["Int"]>;
  category?: InputMaybe<Scalars["String"]>;
  categoryGroup?: InputMaybe<Scalars["String"]>;
  /** 카카오 API 상의 ID */
  externalId: Scalars["String"];
  id: Scalars["Int"];
  /** y 좌표 */
  latitude: Scalars["String"];
  /** x 좌표 */
  longitude: Scalars["String"];
  name: Scalars["String"];
  /** 장소 연락처 */
  phone?: InputMaybe<Scalars["String"]>;
  posts?: InputMaybe<Array<PostInput>>;
  /** 카테고리 이모지 */
  symbol?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<Array<TagInput>>;
  /** 장소에 올라온 가장 최근 이미지 */
  thumbnail?: InputMaybe<ImageInput>;
  url?: InputMaybe<Scalars["String"]>;
};

export type Post = {
  __typename?: "Post";
  area?: Maybe<Area>;
  comments?: Maybe<Array<Comment>>;
  content: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["Int"];
  images?: Maybe<Array<PostsImages>>;
  likes?: Maybe<Array<Like>>;
  /** 공개 여부 */
  open?: Maybe<Scalars["Boolean"]>;
  place: Place;
  profile: Profile;
  reports?: Maybe<Array<PostReport>>;
  tags?: Maybe<Array<Tag>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  views: Scalars["Int"];
};

export type PostInput = {
  area?: InputMaybe<AreaInput>;
  comments?: InputMaybe<Array<CommentInput>>;
  content: Scalars["String"];
  images?: InputMaybe<Array<PostsImagesInput>>;
  likes?: InputMaybe<Array<LikeInput>>;
  /** 공개 여부 */
  open?: InputMaybe<Scalars["Boolean"]>;
  place: PlaceInput;
  profile: ProfileInput;
  reports?: InputMaybe<Array<PostReportInput>>;
  tags?: InputMaybe<Array<TagInput>>;
  views: Scalars["Int"];
};

export type PostReport = {
  __typename?: "PostReport";
  id: Scalars["Int"];
  /** 기타 신고 사유 */
  other?: Maybe<Scalars["String"]>;
  post?: Maybe<Post>;
  /** 신고 사유 */
  reasonId?: Maybe<Scalars["Int"]>;
  reportedAt?: Maybe<Scalars["DateTime"]>;
  /** 신고자 */
  reporter: Profile;
  /** 피신고자 */
  respondent: Profile;
};

export type PostReportInput = {
  id: Scalars["Int"];
  /** 기타 신고 사유 */
  other?: InputMaybe<Scalars["String"]>;
  post?: InputMaybe<PostInput>;
  /** 신고 사유 */
  reasonId?: InputMaybe<Scalars["Int"]>;
  reportedAt?: InputMaybe<Scalars["DateTime"]>;
  /** 신고자 */
  reporter: ProfileInput;
  /** 피신고자 */
  respondent: ProfileInput;
};

export type PostsImages = {
  __typename?: "PostsImages";
  image: Image;
  index?: Maybe<Scalars["Int"]>;
  post?: Maybe<Post>;
};

export type PostsImagesInput = {
  image: ImageInput;
  index?: InputMaybe<Scalars["Int"]>;
  post?: InputMaybe<PostInput>;
};

export type Profile = {
  __typename?: "Profile";
  avatar?: Maybe<Image>;
  blockTarget?: Maybe<Array<UserBlock>>;
  blocks?: Maybe<Array<UserBlock>>;
  commentableDate: Scalars["String"];
  comments?: Maybe<Array<Comment>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["Int"];
  introduce?: Maybe<Scalars["String"]>;
  likes?: Maybe<Array<Like>>;
  nickname: Scalars["String"];
  postImages?: Maybe<Array<Image>>;
  postableDate: Scalars["String"];
  posts?: Maybe<Array<Post>>;
  reported?: Maybe<Array<Report>>;
  reports?: Maybe<Array<Report>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<User>;
};

export type ProfileInput = {
  avatar?: InputMaybe<ImageInput>;
  blockTarget?: InputMaybe<Array<UserBlockInput>>;
  blocks?: InputMaybe<Array<UserBlockInput>>;
  commentableDate?: InputMaybe<Scalars["String"]>;
  comments?: InputMaybe<Array<CommentInput>>;
  introduce?: InputMaybe<Scalars["String"]>;
  likes?: InputMaybe<Array<LikeInput>>;
  nickname: Scalars["String"];
  postImages?: InputMaybe<Array<ImageInput>>;
  postableDate?: InputMaybe<Scalars["String"]>;
  posts?: InputMaybe<Array<PostInput>>;
  reported?: InputMaybe<Array<ReportInput>>;
  reports?: InputMaybe<Array<ReportInput>>;
  user?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: "Query";
  adminLogin: AdminLoginResult;
  countArticle: Array<Scalars["Int"]>;
  countPostAndCommentByArea: Array<CountResult>;
  countPosting: Array<Scalars["Int"]>;
  countProfile: Array<Scalars["Int"]>;
  getArea: Area;
  getAreas: Array<Area>;
  getArticle: Article;
  getArticleCategories: Array<ArticleCategory>;
  getArticleForEdit: Article;
  getArticles: Array<Article>;
  getComments: Array<Comment>;
  getCommentsByArea: Array<Comment>;
  getPosts: Array<Post>;
  getPostsByArea: Array<Post>;
  loginExtension: AdminLoginResult;
  searchArticles: Array<Article>;
};

export type QueryAdminLoginArgs = {
  id: Scalars["String"];
  password: Scalars["String"];
};

export type QueryGetAreaArgs = {
  id: Scalars["Int"];
};

export type QueryGetArticleArgs = {
  id: Scalars["Int"];
};

export type QueryGetArticleForEditArgs = {
  id: Scalars["Int"];
};

export type QueryGetArticlesArgs = {
  areaId?: InputMaybe<Scalars["Int"]>;
};

export type QueryGetCommentsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryGetCommentsByAreaArgs = {
  areaId: Scalars["Int"];
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryGetPostsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryGetPostsByAreaArgs = {
  areaId: Scalars["Int"];
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type QueryLoginExtensionArgs = {
  id: Scalars["String"];
};

export type QuerySearchArticlesArgs = {
  areaId?: InputMaybe<Scalars["Int"]>;
  keyword?: InputMaybe<Scalars["String"]>;
};

export type Report = {
  __typename?: "Report";
  id: Scalars["Int"];
  /** 기타 신고 사유 */
  other?: Maybe<Scalars["String"]>;
  /** 신고 사유 */
  reasonId?: Maybe<Scalars["Int"]>;
  reportedAt?: Maybe<Scalars["DateTime"]>;
  /** 신고자 */
  reporter: Profile;
  /** 피신고자 */
  respondent: Profile;
};

export type ReportInput = {
  id: Scalars["Int"];
  /** 기타 신고 사유 */
  other?: InputMaybe<Scalars["String"]>;
  /** 신고 사유 */
  reasonId?: InputMaybe<Scalars["Int"]>;
  reportedAt?: InputMaybe<Scalars["DateTime"]>;
  /** 신고자 */
  reporter: ProfileInput;
  /** 피신고자 */
  respondent: ProfileInput;
};

export enum Role {
  Admin = "ADMIN",
  Test = "TEST",
  User = "USER",
}

export type Tag = {
  __typename?: "Tag";
  createdAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["Int"];
  numberOfPosts: Scalars["Int"];
  posts?: Maybe<Array<Post>>;
  tag: Scalars["String"];
};

export type TagInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  id: Scalars["Int"];
  numberOfPosts?: InputMaybe<Scalars["Int"]>;
  posts?: InputMaybe<Array<PostInput>>;
  tag: Scalars["String"];
};

export enum Trend {
  Decrease = "DECREASE",
  Increase = "INCREASE",
  Same = "SAME",
}

export type UploadImageInput = {
  encoding?: InputMaybe<Scalars["String"]>;
  index?: InputMaybe<Scalars["Int"]>;
  mimetype?: InputMaybe<Scalars["String"]>;
  path?: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  FCMToken?: Maybe<Scalars["String"]>;
  accept: Accept;
  activated: Scalars["Boolean"];
  blocked: Scalars["Boolean"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  externalId: Scalars["String"];
  id: Scalars["Int"];
  os: Os;
  profile: Profile;
  role: Role;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserBlock = {
  __typename?: "UserBlock";
  /** block당한 사람 */
  blockTarget: Profile;
  blockedAt?: Maybe<Scalars["DateTime"]>;
  /** block한 사람 */
  blocker: Profile;
  id: Scalars["Int"];
};

export type UserBlockInput = {
  /** block당한 사람 */
  blockTarget: ProfileInput;
  blockedAt?: InputMaybe<Scalars["DateTime"]>;
  /** block한 사람 */
  blocker: ProfileInput;
  id: Scalars["Int"];
};

export type UserInput = {
  FCMToken?: InputMaybe<Scalars["String"]>;
  accept: AcceptInput;
  activated?: InputMaybe<Scalars["Boolean"]>;
  blocked?: InputMaybe<Scalars["Boolean"]>;
  email: Scalars["String"];
  externalId: Scalars["String"];
  os: Os;
  profile: ProfileInput;
  role: Role;
};

export type LoginResultFragment = {
  __typename?: "AdminLoginResult";
  accessToken: string;
  refreshToken?: string | null;
  owner?: string | null;
};

export type ArticleUnitFragment = {
  __typename?: "Article";
  id: number;
  title: string;
  editor: string;
  state: ArticleState;
  area: {
    __typename?: "Area";
    id: number;
    region2depth: string;
    domestic: boolean;
  };
  category: { __typename?: "ArticleCategory"; category: string };
  thumbnail?: { __typename?: "Image"; id: number; path?: string | null } | null;
};

export type ArticleDetailFragment = {
  __typename?: "Article";
  id: number;
  updatedAt?: any | null;
  title: string;
  contents?: string | null;
  views: number;
  state: ArticleState;
  editor: string;
  category: { __typename?: "ArticleCategory"; id: number; category: string };
  area: {
    __typename?: "Area";
    id: number;
    region2depth: string;
    domestic: boolean;
  };
  thumbnail?: { __typename?: "Image"; id: number; path?: string | null } | null;
  places?: Array<{
    __typename?: "ArticlePlace";
    id: number;
    placeName?: string | null;
    placeURL?: string | null;
    category?: string | null;
  }> | null;
  articleContents?: Array<{
    __typename?: "ArticleContent";
    id: number;
    index?: number | null;
    subtitle?: string | null;
    content?: string | null;
    image?: {
      __typename?: "Image";
      path?: string | null;
      mimetype?: string | null;
    } | null;
    place?: {
      __typename?: "ArticlePlace";
      id: number;
      placeName?: string | null;
      placeURL?: string | null;
      category?: string | null;
    } | null;
  }> | null;
  images?: Array<{
    __typename?: "Image";
    id: number;
    path?: string | null;
  }> | null;
};

export type CategoryUnitFragment = {
  __typename?: "ArticleCategory";
  id: number;
  category: string;
};

export type ArticleContentFragment = {
  __typename?: "ArticleContent";
  id: number;
  index?: number | null;
  subtitle?: string | null;
  content?: string | null;
  image?: {
    __typename?: "Image";
    path?: string | null;
    mimetype?: string | null;
  } | null;
  place?: {
    __typename?: "ArticlePlace";
    id: number;
    placeName?: string | null;
    placeURL?: string | null;
    category?: string | null;
  } | null;
};

export type ArticlePlaceFragment = {
  __typename?: "ArticlePlace";
  id: number;
  placeName?: string | null;
  placeURL?: string | null;
  category?: string | null;
};

export type ArticleImageFragment = {
  __typename?: "Image";
  id: number;
  path?: string | null;
  mimetype?: string | null;
  encoding?: string | null;
};

export type CountResultFragment = {
  __typename?: "CountResult";
  areaId: number;
  region2depth: string;
  posts: number;
  comments: number;
};

export type AreaUnitFragment = {
  __typename?: "Area";
  id: number;
  region2depth: string;
  symbol: string;
  domestic: boolean;
  activate: boolean;
};

export type AddArticleCategoryMutationVariables = Exact<{
  category: Scalars["String"];
}>;

export type AddArticleCategoryMutation = {
  __typename?: "Mutation";
  addArticleCategory: boolean;
};

export type EditArticleCategoryMutationVariables = Exact<{
  id: Scalars["Int"];
  category: Scalars["String"];
}>;

export type EditArticleCategoryMutation = {
  __typename?: "Mutation";
  editArticleCategory: boolean;
};

export type RemoveArticleCategoryMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type RemoveArticleCategoryMutation = {
  __typename?: "Mutation";
  removeArticleCategory: boolean;
};

export type CreateArticleMutationVariables = Exact<{
  input: CreateArticleInput;
}>;

export type CreateArticleMutation = {
  __typename?: "Mutation";
  createArticle: {
    __typename?: "Article";
    id: number;
    updatedAt?: any | null;
    title: string;
    contents?: string | null;
    views: number;
    state: ArticleState;
    editor: string;
    category: { __typename?: "ArticleCategory"; id: number; category: string };
    area: {
      __typename?: "Area";
      id: number;
      region2depth: string;
      domestic: boolean;
    };
    thumbnail?: {
      __typename?: "Image";
      id: number;
      path?: string | null;
    } | null;
    places?: Array<{
      __typename?: "ArticlePlace";
      id: number;
      placeName?: string | null;
      placeURL?: string | null;
      category?: string | null;
    }> | null;
    articleContents?: Array<{
      __typename?: "ArticleContent";
      id: number;
      index?: number | null;
      subtitle?: string | null;
      content?: string | null;
      image?: {
        __typename?: "Image";
        path?: string | null;
        mimetype?: string | null;
      } | null;
      place?: {
        __typename?: "ArticlePlace";
        id: number;
        placeName?: string | null;
        placeURL?: string | null;
        category?: string | null;
      } | null;
    }> | null;
    images?: Array<{
      __typename?: "Image";
      id: number;
      path?: string | null;
    }> | null;
  };
};

export type EditArticleMutationVariables = Exact<{
  input: EditArticleInput;
}>;

export type EditArticleMutation = {
  __typename?: "Mutation";
  editArticle: {
    __typename?: "Article";
    id: number;
    updatedAt?: any | null;
    title: string;
    contents?: string | null;
    views: number;
    state: ArticleState;
    editor: string;
    category: { __typename?: "ArticleCategory"; id: number; category: string };
    area: {
      __typename?: "Area";
      id: number;
      region2depth: string;
      domestic: boolean;
    };
    thumbnail?: {
      __typename?: "Image";
      id: number;
      path?: string | null;
    } | null;
    places?: Array<{
      __typename?: "ArticlePlace";
      id: number;
      placeName?: string | null;
      placeURL?: string | null;
      category?: string | null;
    }> | null;
    articleContents?: Array<{
      __typename?: "ArticleContent";
      id: number;
      index?: number | null;
      subtitle?: string | null;
      content?: string | null;
      image?: {
        __typename?: "Image";
        path?: string | null;
        mimetype?: string | null;
      } | null;
      place?: {
        __typename?: "ArticlePlace";
        id: number;
        placeName?: string | null;
        placeURL?: string | null;
        category?: string | null;
      } | null;
    }> | null;
    images?: Array<{
      __typename?: "Image";
      id: number;
      path?: string | null;
    }> | null;
  };
};

export type DeleteArticleMutationVariables = Exact<{
  id: Scalars["Float"];
}>;

export type DeleteArticleMutation = {
  __typename?: "Mutation";
  deleteArticle: boolean;
};

export type ChangeArticleStateMutationVariables = Exact<{
  id: Scalars["Float"];
  state: Scalars["String"];
}>;

export type ChangeArticleStateMutation = {
  __typename?: "Mutation";
  changeArticleState: {
    __typename?: "Article";
    id: number;
    updatedAt?: any | null;
    title: string;
    contents?: string | null;
    views: number;
    state: ArticleState;
    editor: string;
    category: { __typename?: "ArticleCategory"; id: number; category: string };
    area: {
      __typename?: "Area";
      id: number;
      region2depth: string;
      domestic: boolean;
    };
    thumbnail?: {
      __typename?: "Image";
      id: number;
      path?: string | null;
    } | null;
    places?: Array<{
      __typename?: "ArticlePlace";
      id: number;
      placeName?: string | null;
      placeURL?: string | null;
      category?: string | null;
    }> | null;
    articleContents?: Array<{
      __typename?: "ArticleContent";
      id: number;
      index?: number | null;
      subtitle?: string | null;
      content?: string | null;
      image?: {
        __typename?: "Image";
        path?: string | null;
        mimetype?: string | null;
      } | null;
      place?: {
        __typename?: "ArticlePlace";
        id: number;
        placeName?: string | null;
        placeURL?: string | null;
        category?: string | null;
      } | null;
    }> | null;
    images?: Array<{
      __typename?: "Image";
      id: number;
      path?: string | null;
    }> | null;
  };
};

export type CreateAdminMutationVariables = Exact<{
  id: Scalars["String"];
  password: Scalars["String"];
  owner: Scalars["String"];
}>;

export type CreateAdminMutation = {
  __typename?: "Mutation";
  createAdmin: boolean;
};

export type RegenerateTokenMutationVariables = Exact<{
  id: Scalars["String"];
  refreshToken: Scalars["String"];
}>;

export type RegenerateTokenMutation = {
  __typename?: "Mutation";
  regenerateToken: {
    __typename?: "AdminLoginResult";
    accessToken: string;
    refreshToken?: string | null;
    owner?: string | null;
  };
};

export type AddAndroidVersionMutationVariables = Exact<{
  version: Scalars["String"];
}>;

export type AddAndroidVersionMutation = {
  __typename?: "Mutation";
  addAndroidVersion: string;
};

export type AddIosVersionMutationVariables = Exact<{
  version: Scalars["String"];
}>;

export type AddIosVersionMutation = {
  __typename?: "Mutation";
  addAndroidVersion: string;
};

export type AdminLoginQueryVariables = Exact<{
  id: Scalars["String"];
  password: Scalars["String"];
}>;

export type AdminLoginQuery = {
  __typename?: "Query";
  adminLogin: {
    __typename?: "AdminLoginResult";
    accessToken: string;
    refreshToken?: string | null;
    owner?: string | null;
  };
};

export type LoginExtensionQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type LoginExtensionQuery = {
  __typename?: "Query";
  loginExtension: {
    __typename?: "AdminLoginResult";
    accessToken: string;
    refreshToken?: string | null;
    owner?: string | null;
  };
};

export type CountPostingQueryVariables = Exact<{ [key: string]: never }>;

export type CountPostingQuery = {
  __typename?: "Query";
  countPosting: Array<number>;
};

export type CountProfileQueryVariables = Exact<{ [key: string]: never }>;

export type CountProfileQuery = {
  __typename?: "Query";
  countProfile: Array<number>;
};

export type GetAreasQueryVariables = Exact<{ [key: string]: never }>;

export type GetAreasQuery = {
  __typename?: "Query";
  getAreas: Array<{
    __typename?: "Area";
    id: number;
    region2depth: string;
    symbol: string;
    domestic: boolean;
    activate: boolean;
  }>;
};

export type GetArticleQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetArticleQuery = {
  __typename?: "Query";
  getArticle: {
    __typename?: "Article";
    id: number;
    updatedAt?: any | null;
    title: string;
    contents?: string | null;
    views: number;
    state: ArticleState;
    editor: string;
    category: { __typename?: "ArticleCategory"; id: number; category: string };
    area: {
      __typename?: "Area";
      id: number;
      region2depth: string;
      domestic: boolean;
    };
    thumbnail?: {
      __typename?: "Image";
      id: number;
      path?: string | null;
    } | null;
    places?: Array<{
      __typename?: "ArticlePlace";
      id: number;
      placeName?: string | null;
      placeURL?: string | null;
      category?: string | null;
    }> | null;
    articleContents?: Array<{
      __typename?: "ArticleContent";
      id: number;
      index?: number | null;
      subtitle?: string | null;
      content?: string | null;
      image?: {
        __typename?: "Image";
        path?: string | null;
        mimetype?: string | null;
      } | null;
      place?: {
        __typename?: "ArticlePlace";
        id: number;
        placeName?: string | null;
        placeURL?: string | null;
        category?: string | null;
      } | null;
    }> | null;
    images?: Array<{
      __typename?: "Image";
      id: number;
      path?: string | null;
    }> | null;
  };
};

export type GetArticlesQueryVariables = Exact<{
  areaId?: InputMaybe<Scalars["Int"]>;
}>;

export type GetArticlesQuery = {
  __typename?: "Query";
  getArticles: Array<{
    __typename?: "Article";
    id: number;
    title: string;
    editor: string;
    state: ArticleState;
    area: {
      __typename?: "Area";
      id: number;
      region2depth: string;
      domestic: boolean;
    };
    category: { __typename?: "ArticleCategory"; category: string };
    thumbnail?: {
      __typename?: "Image";
      id: number;
      path?: string | null;
    } | null;
  }>;
};

export type GetArticleCategoriesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetArticleCategoriesQuery = {
  __typename?: "Query";
  getArticleCategories: Array<{
    __typename?: "ArticleCategory";
    id: number;
    category: string;
  }>;
};

export type SearchArticlesQueryVariables = Exact<{
  keyword?: InputMaybe<Scalars["String"]>;
  areaId?: InputMaybe<Scalars["Int"]>;
}>;

export type SearchArticlesQuery = {
  __typename?: "Query";
  searchArticles: Array<{
    __typename?: "Article";
    id: number;
    title: string;
    editor: string;
    state: ArticleState;
    area: {
      __typename?: "Area";
      id: number;
      region2depth: string;
      domestic: boolean;
    };
    category: { __typename?: "ArticleCategory"; category: string };
    thumbnail?: {
      __typename?: "Image";
      id: number;
      path?: string | null;
    } | null;
  }>;
};

export type GetArticleForEditQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetArticleForEditQuery = {
  __typename?: "Query";
  getArticleForEdit: {
    __typename?: "Article";
    id: number;
    updatedAt?: any | null;
    title: string;
    contents?: string | null;
    views: number;
    state: ArticleState;
    editor: string;
    category: { __typename?: "ArticleCategory"; id: number; category: string };
    area: {
      __typename?: "Area";
      id: number;
      region2depth: string;
      domestic: boolean;
    };
    thumbnail?: {
      __typename?: "Image";
      id: number;
      path?: string | null;
    } | null;
    places?: Array<{
      __typename?: "ArticlePlace";
      id: number;
      placeName?: string | null;
      placeURL?: string | null;
      category?: string | null;
    }> | null;
    articleContents?: Array<{
      __typename?: "ArticleContent";
      id: number;
      index?: number | null;
      subtitle?: string | null;
      content?: string | null;
      image?: {
        __typename?: "Image";
        path?: string | null;
        mimetype?: string | null;
      } | null;
      place?: {
        __typename?: "ArticlePlace";
        id: number;
        placeName?: string | null;
        placeURL?: string | null;
        category?: string | null;
      } | null;
    }> | null;
    images?: Array<{
      __typename?: "Image";
      id: number;
      path?: string | null;
    }> | null;
  };
};

export type CountPostAndCommentByAreaQueryVariables = Exact<{
  [key: string]: never;
}>;

export type CountPostAndCommentByAreaQuery = {
  __typename?: "Query";
  countPostAndCommentByArea: Array<{
    __typename?: "CountResult";
    areaId: number;
    region2depth: string;
    posts: number;
    comments: number;
  }>;
};

export const LoginResultFragmentDoc = gql`
  fragment LoginResult on AdminLoginResult {
    accessToken
    refreshToken
    owner
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
  ${ArticlePlaceFragmentDoc}
`;
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
  ${ArticleContentFragmentDoc}
`;
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
  }
`;
export const AddArticleCategoryDocument = gql`
  mutation addArticleCategory($category: String!) {
    addArticleCategory(category: $category)
  }
`;
export type AddArticleCategoryMutationFn = Apollo.MutationFunction<
  AddArticleCategoryMutation,
  AddArticleCategoryMutationVariables
>;

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
export function useAddArticleCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddArticleCategoryMutation,
    AddArticleCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddArticleCategoryMutation,
    AddArticleCategoryMutationVariables
  >(AddArticleCategoryDocument, options);
}
export type AddArticleCategoryMutationHookResult = ReturnType<
  typeof useAddArticleCategoryMutation
>;
export type AddArticleCategoryMutationResult =
  Apollo.MutationResult<AddArticleCategoryMutation>;
export type AddArticleCategoryMutationOptions = Apollo.BaseMutationOptions<
  AddArticleCategoryMutation,
  AddArticleCategoryMutationVariables
>;
export const EditArticleCategoryDocument = gql`
  mutation editArticleCategory($id: Int!, $category: String!) {
    editArticleCategory(id: $id, category: $category)
  }
`;
export type EditArticleCategoryMutationFn = Apollo.MutationFunction<
  EditArticleCategoryMutation,
  EditArticleCategoryMutationVariables
>;

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
export function useEditArticleCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditArticleCategoryMutation,
    EditArticleCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    EditArticleCategoryMutation,
    EditArticleCategoryMutationVariables
  >(EditArticleCategoryDocument, options);
}
export type EditArticleCategoryMutationHookResult = ReturnType<
  typeof useEditArticleCategoryMutation
>;
export type EditArticleCategoryMutationResult =
  Apollo.MutationResult<EditArticleCategoryMutation>;
export type EditArticleCategoryMutationOptions = Apollo.BaseMutationOptions<
  EditArticleCategoryMutation,
  EditArticleCategoryMutationVariables
>;
export const RemoveArticleCategoryDocument = gql`
  mutation removeArticleCategory($id: Int!) {
    removeArticleCategory(id: $id)
  }
`;
export type RemoveArticleCategoryMutationFn = Apollo.MutationFunction<
  RemoveArticleCategoryMutation,
  RemoveArticleCategoryMutationVariables
>;

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
export function useRemoveArticleCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveArticleCategoryMutation,
    RemoveArticleCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveArticleCategoryMutation,
    RemoveArticleCategoryMutationVariables
  >(RemoveArticleCategoryDocument, options);
}
export type RemoveArticleCategoryMutationHookResult = ReturnType<
  typeof useRemoveArticleCategoryMutation
>;
export type RemoveArticleCategoryMutationResult =
  Apollo.MutationResult<RemoveArticleCategoryMutation>;
export type RemoveArticleCategoryMutationOptions = Apollo.BaseMutationOptions<
  RemoveArticleCategoryMutation,
  RemoveArticleCategoryMutationVariables
>;
export const CreateArticleDocument = gql`
  mutation createArticle($input: CreateArticleInput!) {
    createArticle(input: $input) {
      ...ArticleDetail
    }
  }
  ${ArticleDetailFragmentDoc}
`;
export type CreateArticleMutationFn = Apollo.MutationFunction<
  CreateArticleMutation,
  CreateArticleMutationVariables
>;

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
export function useCreateArticleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateArticleMutation,
    CreateArticleMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateArticleMutation,
    CreateArticleMutationVariables
  >(CreateArticleDocument, options);
}
export type CreateArticleMutationHookResult = ReturnType<
  typeof useCreateArticleMutation
>;
export type CreateArticleMutationResult =
  Apollo.MutationResult<CreateArticleMutation>;
export type CreateArticleMutationOptions = Apollo.BaseMutationOptions<
  CreateArticleMutation,
  CreateArticleMutationVariables
>;
export const EditArticleDocument = gql`
  mutation editArticle($input: EditArticleInput!) {
    editArticle(input: $input) {
      ...ArticleDetail
    }
  }
  ${ArticleDetailFragmentDoc}
`;
export type EditArticleMutationFn = Apollo.MutationFunction<
  EditArticleMutation,
  EditArticleMutationVariables
>;

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
export function useEditArticleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditArticleMutation,
    EditArticleMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditArticleMutation, EditArticleMutationVariables>(
    EditArticleDocument,
    options
  );
}
export type EditArticleMutationHookResult = ReturnType<
  typeof useEditArticleMutation
>;
export type EditArticleMutationResult =
  Apollo.MutationResult<EditArticleMutation>;
export type EditArticleMutationOptions = Apollo.BaseMutationOptions<
  EditArticleMutation,
  EditArticleMutationVariables
>;
export const DeleteArticleDocument = gql`
  mutation deleteArticle($id: Float!) {
    deleteArticle(id: $id)
  }
`;
export type DeleteArticleMutationFn = Apollo.MutationFunction<
  DeleteArticleMutation,
  DeleteArticleMutationVariables
>;

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
export function useDeleteArticleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteArticleMutation,
    DeleteArticleMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteArticleMutation,
    DeleteArticleMutationVariables
  >(DeleteArticleDocument, options);
}
export type DeleteArticleMutationHookResult = ReturnType<
  typeof useDeleteArticleMutation
>;
export type DeleteArticleMutationResult =
  Apollo.MutationResult<DeleteArticleMutation>;
export type DeleteArticleMutationOptions = Apollo.BaseMutationOptions<
  DeleteArticleMutation,
  DeleteArticleMutationVariables
>;
export const ChangeArticleStateDocument = gql`
  mutation changeArticleState($id: Float!, $state: String!) {
    changeArticleState(id: $id, state: $state) {
      ...ArticleDetail
    }
  }
  ${ArticleDetailFragmentDoc}
`;
export type ChangeArticleStateMutationFn = Apollo.MutationFunction<
  ChangeArticleStateMutation,
  ChangeArticleStateMutationVariables
>;

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
export function useChangeArticleStateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChangeArticleStateMutation,
    ChangeArticleStateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ChangeArticleStateMutation,
    ChangeArticleStateMutationVariables
  >(ChangeArticleStateDocument, options);
}
export type ChangeArticleStateMutationHookResult = ReturnType<
  typeof useChangeArticleStateMutation
>;
export type ChangeArticleStateMutationResult =
  Apollo.MutationResult<ChangeArticleStateMutation>;
export type ChangeArticleStateMutationOptions = Apollo.BaseMutationOptions<
  ChangeArticleStateMutation,
  ChangeArticleStateMutationVariables
>;
export const CreateAdminDocument = gql`
  mutation createAdmin($id: String!, $password: String!, $owner: String!) {
    createAdmin(id: $id, password: $password, owner: $owner)
  }
`;
export type CreateAdminMutationFn = Apollo.MutationFunction<
  CreateAdminMutation,
  CreateAdminMutationVariables
>;

/**
 * __useCreateAdminMutation__
 *
 * To run a mutation, you first call `useCreateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdminMutation, { data, loading, error }] = useCreateAdminMutation({
 *   variables: {
 *      id: // value for 'id'
 *      password: // value for 'password'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useCreateAdminMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAdminMutation,
    CreateAdminMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateAdminMutation, CreateAdminMutationVariables>(
    CreateAdminDocument,
    options
  );
}
export type CreateAdminMutationHookResult = ReturnType<
  typeof useCreateAdminMutation
>;
export type CreateAdminMutationResult =
  Apollo.MutationResult<CreateAdminMutation>;
export type CreateAdminMutationOptions = Apollo.BaseMutationOptions<
  CreateAdminMutation,
  CreateAdminMutationVariables
>;
export const RegenerateTokenDocument = gql`
  mutation regenerateToken($id: String!, $refreshToken: String!) {
    regenerateToken(id: $id, refreshToken: $refreshToken) {
      ...LoginResult
    }
  }
  ${LoginResultFragmentDoc}
`;
export type RegenerateTokenMutationFn = Apollo.MutationFunction<
  RegenerateTokenMutation,
  RegenerateTokenMutationVariables
>;

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
export function useRegenerateTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegenerateTokenMutation,
    RegenerateTokenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegenerateTokenMutation,
    RegenerateTokenMutationVariables
  >(RegenerateTokenDocument, options);
}
export type RegenerateTokenMutationHookResult = ReturnType<
  typeof useRegenerateTokenMutation
>;
export type RegenerateTokenMutationResult =
  Apollo.MutationResult<RegenerateTokenMutation>;
export type RegenerateTokenMutationOptions = Apollo.BaseMutationOptions<
  RegenerateTokenMutation,
  RegenerateTokenMutationVariables
>;
export const AddAndroidVersionDocument = gql`
  mutation addAndroidVersion($version: String!) {
    addAndroidVersion(version: $version)
  }
`;
export type AddAndroidVersionMutationFn = Apollo.MutationFunction<
  AddAndroidVersionMutation,
  AddAndroidVersionMutationVariables
>;

/**
 * __useAddAndroidVersionMutation__
 *
 * To run a mutation, you first call `useAddAndroidVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAndroidVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAndroidVersionMutation, { data, loading, error }] = useAddAndroidVersionMutation({
 *   variables: {
 *      version: // value for 'version'
 *   },
 * });
 */
export function useAddAndroidVersionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddAndroidVersionMutation,
    AddAndroidVersionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddAndroidVersionMutation,
    AddAndroidVersionMutationVariables
  >(AddAndroidVersionDocument, options);
}
export type AddAndroidVersionMutationHookResult = ReturnType<
  typeof useAddAndroidVersionMutation
>;
export type AddAndroidVersionMutationResult =
  Apollo.MutationResult<AddAndroidVersionMutation>;
export type AddAndroidVersionMutationOptions = Apollo.BaseMutationOptions<
  AddAndroidVersionMutation,
  AddAndroidVersionMutationVariables
>;
export const AddIosVersionDocument = gql`
  mutation addIosVersion($version: String!) {
    addAndroidVersion(version: $version)
  }
`;
export type AddIosVersionMutationFn = Apollo.MutationFunction<
  AddIosVersionMutation,
  AddIosVersionMutationVariables
>;

/**
 * __useAddIosVersionMutation__
 *
 * To run a mutation, you first call `useAddIosVersionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddIosVersionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addIosVersionMutation, { data, loading, error }] = useAddIosVersionMutation({
 *   variables: {
 *      version: // value for 'version'
 *   },
 * });
 */
export function useAddIosVersionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddIosVersionMutation,
    AddIosVersionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddIosVersionMutation,
    AddIosVersionMutationVariables
  >(AddIosVersionDocument, options);
}
export type AddIosVersionMutationHookResult = ReturnType<
  typeof useAddIosVersionMutation
>;
export type AddIosVersionMutationResult =
  Apollo.MutationResult<AddIosVersionMutation>;
export type AddIosVersionMutationOptions = Apollo.BaseMutationOptions<
  AddIosVersionMutation,
  AddIosVersionMutationVariables
>;
export const AdminLoginDocument = gql`
  query adminLogin($id: String!, $password: String!) {
    adminLogin(id: $id, password: $password) {
      ...LoginResult
    }
  }
  ${LoginResultFragmentDoc}
`;

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
export function useAdminLoginQuery(
  baseOptions: Apollo.QueryHookOptions<
    AdminLoginQuery,
    AdminLoginQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AdminLoginQuery, AdminLoginQueryVariables>(
    AdminLoginDocument,
    options
  );
}
export function useAdminLoginLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdminLoginQuery,
    AdminLoginQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AdminLoginQuery, AdminLoginQueryVariables>(
    AdminLoginDocument,
    options
  );
}
export type AdminLoginQueryHookResult = ReturnType<typeof useAdminLoginQuery>;
export type AdminLoginLazyQueryHookResult = ReturnType<
  typeof useAdminLoginLazyQuery
>;
export type AdminLoginQueryResult = Apollo.QueryResult<
  AdminLoginQuery,
  AdminLoginQueryVariables
>;
export function refetchAdminLoginQuery(variables: AdminLoginQueryVariables) {
  return { query: AdminLoginDocument, variables: variables };
}
export const LoginExtensionDocument = gql`
  query loginExtension($id: String!) {
    loginExtension(id: $id) {
      ...LoginResult
    }
  }
  ${LoginResultFragmentDoc}
`;

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
export function useLoginExtensionQuery(
  baseOptions: Apollo.QueryHookOptions<
    LoginExtensionQuery,
    LoginExtensionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LoginExtensionQuery, LoginExtensionQueryVariables>(
    LoginExtensionDocument,
    options
  );
}
export function useLoginExtensionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LoginExtensionQuery,
    LoginExtensionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LoginExtensionQuery, LoginExtensionQueryVariables>(
    LoginExtensionDocument,
    options
  );
}
export type LoginExtensionQueryHookResult = ReturnType<
  typeof useLoginExtensionQuery
>;
export type LoginExtensionLazyQueryHookResult = ReturnType<
  typeof useLoginExtensionLazyQuery
>;
export type LoginExtensionQueryResult = Apollo.QueryResult<
  LoginExtensionQuery,
  LoginExtensionQueryVariables
>;
export function refetchLoginExtensionQuery(
  variables: LoginExtensionQueryVariables
) {
  return { query: LoginExtensionDocument, variables: variables };
}
export const CountPostingDocument = gql`
  query countPosting {
    countPosting
  }
`;

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
export function useCountPostingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CountPostingQuery,
    CountPostingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CountPostingQuery, CountPostingQueryVariables>(
    CountPostingDocument,
    options
  );
}
export function useCountPostingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CountPostingQuery,
    CountPostingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CountPostingQuery, CountPostingQueryVariables>(
    CountPostingDocument,
    options
  );
}
export type CountPostingQueryHookResult = ReturnType<
  typeof useCountPostingQuery
>;
export type CountPostingLazyQueryHookResult = ReturnType<
  typeof useCountPostingLazyQuery
>;
export type CountPostingQueryResult = Apollo.QueryResult<
  CountPostingQuery,
  CountPostingQueryVariables
>;
export function refetchCountPostingQuery(
  variables?: CountPostingQueryVariables
) {
  return { query: CountPostingDocument, variables: variables };
}
export const CountProfileDocument = gql`
  query countProfile {
    countProfile
  }
`;

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
export function useCountProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CountProfileQuery,
    CountProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CountProfileQuery, CountProfileQueryVariables>(
    CountProfileDocument,
    options
  );
}
export function useCountProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CountProfileQuery,
    CountProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CountProfileQuery, CountProfileQueryVariables>(
    CountProfileDocument,
    options
  );
}
export type CountProfileQueryHookResult = ReturnType<
  typeof useCountProfileQuery
>;
export type CountProfileLazyQueryHookResult = ReturnType<
  typeof useCountProfileLazyQuery
>;
export type CountProfileQueryResult = Apollo.QueryResult<
  CountProfileQuery,
  CountProfileQueryVariables
>;
export function refetchCountProfileQuery(
  variables?: CountProfileQueryVariables
) {
  return { query: CountProfileDocument, variables: variables };
}
export const GetAreasDocument = gql`
  query getAreas {
    getAreas {
      ...AreaUnit
    }
  }
  ${AreaUnitFragmentDoc}
`;

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
export function useGetAreasQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAreasQuery, GetAreasQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAreasQuery, GetAreasQueryVariables>(
    GetAreasDocument,
    options
  );
}
export function useGetAreasLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAreasQuery,
    GetAreasQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAreasQuery, GetAreasQueryVariables>(
    GetAreasDocument,
    options
  );
}
export type GetAreasQueryHookResult = ReturnType<typeof useGetAreasQuery>;
export type GetAreasLazyQueryHookResult = ReturnType<
  typeof useGetAreasLazyQuery
>;
export type GetAreasQueryResult = Apollo.QueryResult<
  GetAreasQuery,
  GetAreasQueryVariables
>;
export function refetchGetAreasQuery(variables?: GetAreasQueryVariables) {
  return { query: GetAreasDocument, variables: variables };
}
export const GetArticleDocument = gql`
  query getArticle($id: Int!) {
    getArticle(id: $id) {
      ...ArticleDetail
    }
  }
  ${ArticleDetailFragmentDoc}
`;

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
export function useGetArticleQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetArticleQuery,
    GetArticleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetArticleQuery, GetArticleQueryVariables>(
    GetArticleDocument,
    options
  );
}
export function useGetArticleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetArticleQuery,
    GetArticleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetArticleQuery, GetArticleQueryVariables>(
    GetArticleDocument,
    options
  );
}
export type GetArticleQueryHookResult = ReturnType<typeof useGetArticleQuery>;
export type GetArticleLazyQueryHookResult = ReturnType<
  typeof useGetArticleLazyQuery
>;
export type GetArticleQueryResult = Apollo.QueryResult<
  GetArticleQuery,
  GetArticleQueryVariables
>;
export function refetchGetArticleQuery(variables: GetArticleQueryVariables) {
  return { query: GetArticleDocument, variables: variables };
}
export const GetArticlesDocument = gql`
  query getArticles($areaId: Int) {
    getArticles(areaId: $areaId) {
      ...ArticleUnit
    }
  }
  ${ArticleUnitFragmentDoc}
`;

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
export function useGetArticlesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetArticlesQuery, GetArticlesQueryVariables>(
    GetArticlesDocument,
    options
  );
}
export function useGetArticlesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetArticlesQuery, GetArticlesQueryVariables>(
    GetArticlesDocument,
    options
  );
}
export type GetArticlesQueryHookResult = ReturnType<typeof useGetArticlesQuery>;
export type GetArticlesLazyQueryHookResult = ReturnType<
  typeof useGetArticlesLazyQuery
>;
export type GetArticlesQueryResult = Apollo.QueryResult<
  GetArticlesQuery,
  GetArticlesQueryVariables
>;
export function refetchGetArticlesQuery(variables?: GetArticlesQueryVariables) {
  return { query: GetArticlesDocument, variables: variables };
}
export const GetArticleCategoriesDocument = gql`
  query getArticleCategories {
    getArticleCategories {
      id
      category
    }
  }
`;

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
export function useGetArticleCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetArticleCategoriesQuery,
    GetArticleCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetArticleCategoriesQuery,
    GetArticleCategoriesQueryVariables
  >(GetArticleCategoriesDocument, options);
}
export function useGetArticleCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetArticleCategoriesQuery,
    GetArticleCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetArticleCategoriesQuery,
    GetArticleCategoriesQueryVariables
  >(GetArticleCategoriesDocument, options);
}
export type GetArticleCategoriesQueryHookResult = ReturnType<
  typeof useGetArticleCategoriesQuery
>;
export type GetArticleCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetArticleCategoriesLazyQuery
>;
export type GetArticleCategoriesQueryResult = Apollo.QueryResult<
  GetArticleCategoriesQuery,
  GetArticleCategoriesQueryVariables
>;
export function refetchGetArticleCategoriesQuery(
  variables?: GetArticleCategoriesQueryVariables
) {
  return { query: GetArticleCategoriesDocument, variables: variables };
}
export const SearchArticlesDocument = gql`
  query searchArticles($keyword: String, $areaId: Int) {
    searchArticles(keyword: $keyword, areaId: $areaId) {
      ...ArticleUnit
    }
  }
  ${ArticleUnitFragmentDoc}
`;

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
export function useSearchArticlesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchArticlesQuery,
    SearchArticlesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchArticlesQuery, SearchArticlesQueryVariables>(
    SearchArticlesDocument,
    options
  );
}
export function useSearchArticlesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchArticlesQuery,
    SearchArticlesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchArticlesQuery, SearchArticlesQueryVariables>(
    SearchArticlesDocument,
    options
  );
}
export type SearchArticlesQueryHookResult = ReturnType<
  typeof useSearchArticlesQuery
>;
export type SearchArticlesLazyQueryHookResult = ReturnType<
  typeof useSearchArticlesLazyQuery
>;
export type SearchArticlesQueryResult = Apollo.QueryResult<
  SearchArticlesQuery,
  SearchArticlesQueryVariables
>;
export function refetchSearchArticlesQuery(
  variables?: SearchArticlesQueryVariables
) {
  return { query: SearchArticlesDocument, variables: variables };
}
export const GetArticleForEditDocument = gql`
  query getArticleForEdit($id: Int!) {
    getArticleForEdit(id: $id) {
      ...ArticleDetail
    }
  }
  ${ArticleDetailFragmentDoc}
`;

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
export function useGetArticleForEditQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetArticleForEditQuery,
    GetArticleForEditQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetArticleForEditQuery,
    GetArticleForEditQueryVariables
  >(GetArticleForEditDocument, options);
}
export function useGetArticleForEditLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetArticleForEditQuery,
    GetArticleForEditQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetArticleForEditQuery,
    GetArticleForEditQueryVariables
  >(GetArticleForEditDocument, options);
}
export type GetArticleForEditQueryHookResult = ReturnType<
  typeof useGetArticleForEditQuery
>;
export type GetArticleForEditLazyQueryHookResult = ReturnType<
  typeof useGetArticleForEditLazyQuery
>;
export type GetArticleForEditQueryResult = Apollo.QueryResult<
  GetArticleForEditQuery,
  GetArticleForEditQueryVariables
>;
export function refetchGetArticleForEditQuery(
  variables: GetArticleForEditQueryVariables
) {
  return { query: GetArticleForEditDocument, variables: variables };
}
export const CountPostAndCommentByAreaDocument = gql`
  query countPostAndCommentByArea {
    countPostAndCommentByArea {
      ...CountResult
    }
  }
  ${CountResultFragmentDoc}
`;

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
export function useCountPostAndCommentByAreaQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CountPostAndCommentByAreaQuery,
    CountPostAndCommentByAreaQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CountPostAndCommentByAreaQuery,
    CountPostAndCommentByAreaQueryVariables
  >(CountPostAndCommentByAreaDocument, options);
}
export function useCountPostAndCommentByAreaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CountPostAndCommentByAreaQuery,
    CountPostAndCommentByAreaQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CountPostAndCommentByAreaQuery,
    CountPostAndCommentByAreaQueryVariables
  >(CountPostAndCommentByAreaDocument, options);
}
export type CountPostAndCommentByAreaQueryHookResult = ReturnType<
  typeof useCountPostAndCommentByAreaQuery
>;
export type CountPostAndCommentByAreaLazyQueryHookResult = ReturnType<
  typeof useCountPostAndCommentByAreaLazyQuery
>;
export type CountPostAndCommentByAreaQueryResult = Apollo.QueryResult<
  CountPostAndCommentByAreaQuery,
  CountPostAndCommentByAreaQueryVariables
>;
export function refetchCountPostAndCommentByAreaQuery(
  variables?: CountPostAndCommentByAreaQueryVariables
) {
  return { query: CountPostAndCommentByAreaDocument, variables: variables };
}
