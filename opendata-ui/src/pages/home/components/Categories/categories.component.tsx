import { useHistory } from 'react-router-dom'
import './categories.component.scss'
import righticon from "assets/images/arrow_right.svg"
import { categoryNameList, params } from './index'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from 'pages/home/store/actions'
import { ICategory, IFilter } from 'pages/home/types/types'
import { encodeURL, generateGuid } from 'core/helpers/common-functions/common-functions'
import icon1 from "assets/images/home.svg";
import { RootState } from 'store/types/store.types'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton'

const CategoriesComponent = () => {

  const [selectTab, setSelectTab] = useState<any>(categoryNameList[0].id)

  const selector = (state: RootState) => {
    return selectTab === 1 ? state.home.categories && state.home.categories.itemsFilter
      : selectTab === 2 ? state.home.organisations && state.home.organisations.itemsFilter
        : selectTab === 3 ? state.home.popularServices
          : selectTab === 4 ? state.home.newServices : []
  }
  const subCategories = useSelector((state: RootState) => selector(state))


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories(params))
  }, [dispatch])
  const history = useHistory()

  const showSubCategories = useMemo(
    () => {
      return (subCategories ?
        <div className="row ">
          {subCategories && subCategories.length && subCategories.map((sub: IFilter) => (
            <div key={generateGuid()} className="col-12 col-md-6 col-lg-3 pb-12 px-8">
              <div className="categoryList_item"
                onClick={() => {
                  history.push({ pathname: 'information', search: `?${encodeURL({ category:[ { id: sub.key, value: sub.value }] })}` })
                }}
              >
                <img src={sub.icon} alt="" />
                <p className='sub-name' title={sub.value} >
                  {sub.value}
                </p>
                <div className='sub-count'>{sub.serviceCount}</div>
              </div>
            </div>))}
        </div >
        : <div className='row'>
          <div className='col-12 col-md-6 col-lg-3 w-100'>
            <Skeleton height={60} />
          </div>
          <div className='col-12 col-md-6 col-lg-3 w-100'>
            <Skeleton height={60} />
          </div>
          <div className='col-12 col-md-6 col-lg-3 w-100'>
            <Skeleton height={60} />
          </div>
          <div className='col-12 col-md-6 col-lg-3 w-100'>
            <Skeleton height={60} />
          </div>
        </div>
      )
    },
    [subCategories, history],
  )
  
  const showMoreBtn = useCallback(
    (tab) => {
      return <div className="get-all">
        {subCategories && subCategories.length >= tab?.minLength &&
          <button onClick={() =>
            subCategories && subCategories.length <= tab?.minLength ?
              dispatch(tab?.clickMoreHandler())
              : dispatch(tab?.clickHandler())
          }>
            <span>
              {subCategories && subCategories.length <= tab?.minLength
                ? "Hamısına bax"
                : "Cədvəli qısalt"}
            </span>
            <img src={righticon} alt="" />
          </button>
        }
      </div>
    },
    [dispatch, subCategories],
  )


  return (
    <section className="category">
      <div className='container'>
        <div className='row'>
          <div className="col-12">
            <ul className="categoryNameList">
              {categoryNameList.map((category: any) => (
                <li key={category.id}
                  className={`lightGray ${selectTab === category.id ? 'active' : ''}`}
                  onClick={() => {
                    category.clickHandler && dispatch(category.clickHandler())
                    setSelectTab(category.id)
                  }}
                >
                  <div className="tab-icon">
                    <img src={category.icon} alt="" />
                  </div>
                  <span>{category.name}</span>
                </li>
              ))}
            </ul>
            <div className="divider"></div>
          </div>
          <div className="col-12 categoryList px-23">
            {showSubCategories}
          </div>
        </div>
        <div className="all-category">
          {showMoreBtn(categoryNameList.find(cnl => cnl.id === selectTab))}
        </div>
      </div>
    </section >
  )
}

export default CategoriesComponent