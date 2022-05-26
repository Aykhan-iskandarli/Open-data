
export interface ISelectProps {
    data: Option[],
    selected_item: Option,
    select?: any
}

export interface Option {
    key:  number,
    value: string
}

export interface IHomeReduxState {
    categories: {
        items: ICategory[],
        itemsFilter: IFilter[]
    } | null,
    organisations: {
        items: IOrganisation[],
        itemsFilter: IFilter[]
    } | null,
    popularServices: [] | null,
    newServices: [] | null,
    faqs?: [],
    faqError?: [],
    dropdown_categories: IDropdown[],
    dropdown_organisations: IDropdown[],
    dropdown_fileTypes: IDropdown[],
    dropdown_content: IDropdown[],
    dropdown_languages: IDropdown[],
}

export interface IOrganisation {
    serviceCount: number,
    description: string,
    name: string,
    id: number,
    organisationPhoto?: any
}

export interface ICategory {
    servicesCount: number,
    category: string,
    id: number,
    categoryPhoto?: any
}


export interface IFilter {
    key: number | string,
    value: string,
    icon?: any,
    serviceCount?: any
}


export interface IFaq {
    title?: String,
    description?: string,
    id?: number,
    icon?: any,

}
export interface IPaginate {
    pageIndex: number | string,
    totalPages: number | string,
    totalCount: number | string,
    hasPreviousPage: boolean,
    hasNextPage: boolean

}

export interface IDropdown {
    key: string | number,
    value: string | null,
    label?: string
}