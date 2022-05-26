import { type } from "os"


export interface ISelectProps {
    data: Option[],
    select?: any
}

export interface Option {
    id: string,
    value: string
}

export interface IServiceReduxState {
    services: IService[] | null
}


export interface IService {
    id: number | string,
    title: string,
    description: string,
    tags: string[],
    linkResponseTypes: string[],
    createdDate: string,
    updatedDate: string
}

export interface ISidebarProps {
    title: String,
    items?: [],
    clickHandler?: any,
    active?: IParam[]
}

export interface IInfoProps {
    text?: String,
    file?: Boolean,
    data?: any
}


export interface IParamsState {
    category: IParam[],
    organisation: IParam[],
    format: IParam[],
    tag: IParam[]
}

export interface IParams {
    CategoryIds?: string,
    OrganisationIds?: string,
    FileTypeIds?: string,
    TagIds?: string
}

export interface IParam {
    id: number, value: string
}
export type ParamsNames = "category" | "organisation" | "format" | "tag"

export interface IDetailInfo {
    text?: boolean,
}