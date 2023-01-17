import React from "react";
import { ColumnType } from "utils/enums";
import { ArticleContentFragment } from '../generated/graphql';

export interface ContentModel {
  id: string;
  image: string[];
  subtitle: string;
  content: string;
}

export interface DragItem {
  index: number;
  id: ArticleContentFragment['id'];
}

export interface SelectModel {
  id: number;
  name?: string; 
}

export interface InfoModel {
  id: number;
  name? : string;
  activate? : boolean;
  domestic? : boolean;
}