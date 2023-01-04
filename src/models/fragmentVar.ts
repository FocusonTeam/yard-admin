import { makeVar } from "@apollo/client";
import { ArticleContentFragment, ArticleDetailFragment } from "generated/graphql";


/**
 * Article
 */
export const ContentVar = makeVar<ArticleContentFragment | null>(null);
export const ArticleDetailVar = makeVar<ArticleDetailFragment | null>(null);

export const DashboardVar = makeVar([]);