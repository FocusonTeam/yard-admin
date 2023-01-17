import { makeVar } from "@apollo/client";
import { ArticleContentFragment, ArticleDetailFragment } from "generated/graphql";
import { ArticleUnitFragment, ArticleImageFragment } from '../generated/graphql';


/**
 * Article
 */
export const ContentVar = makeVar<ArticleContentFragment | null>(null);

export const articleUnitsVar = makeVar<ArticleUnitFragment[]>([]);
export const ArticleDetailVar = makeVar<ArticleDetailFragment | null>(null);

export const contentsVar = makeVar<ArticleContentFragment[]>([]);
export const ImageVar = makeVar<ArticleImageFragment | null>(null);

export const DashboardVar = makeVar([]);

export const isLoggedVar = makeVar<Boolean>(false);

export const userIdVar = makeVar<String>("");
export const userNameVar = makeVar<String>("");
export const accessTokenVar = makeVar<String>("");
export const refreshTokenVar = makeVar<String>("");

export const errorMessageVar = makeVar<String>("");