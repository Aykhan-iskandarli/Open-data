import React from "react";

export interface ITags {
    tags: ITag[],
    onClick: function
}
export interface ITag {
    id: number | string,
    tag: string
}