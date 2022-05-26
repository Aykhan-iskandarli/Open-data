import category_icon from "assets/images/category-home.svg";
import organization_icon from "assets/images/organization-home.svg";
import new_icon from "assets/images/new-info-home.svg";
import popular_icon from "assets/images/popular-home.svg";
import { getCategories, getOrganisations } from "pages/home/store/actions";


export const params = { PageNumber: 1, PageSize: 12 }
export const paramsAll = {}

export const categoryNameList: {
  id: number,
  minLength: number,
  icon: string,
  name: string,
  clickHandler?: () => void,
  clickMoreHandler?: () => void
}[] = [
    {
      id: 1,
      minLength: 12,
      icon: category_icon,
      name: "Kateqoriyalar",
      clickHandler: () => getCategories(params),
      clickMoreHandler: () => getCategories(paramsAll)
    },
    {
      id: 2,
      minLength: 16,
      icon: organization_icon,
      name: "Qurumlar",
      clickHandler: () => getOrganisations(params),
      clickMoreHandler: () => getOrganisations(paramsAll)
    },
    {
      id: 3,
      minLength: 16,
      icon: new_icon,
      name: "Yeni məlumatlar",
      // clickHandler: () => console.log(),
      // clickMoreHandler: () => console.log()
    },
    {
      id: 4,
      minLength: 16,
      icon: popular_icon,
      name: "Populyar məlumatlar",
      // clickHandler: () => console.log(),
      // clickMoreHandler: () => console.log()
    },
  ];
