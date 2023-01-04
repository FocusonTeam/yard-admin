import React from "react";
import { ColumnType } from "utils/enums";

export interface ContentModel {
  id: string;
  image: string[];
  subtitle: string;
  content: string;
}

export interface DragItem {
  index: number;
  id: ContentModel['id'];
}