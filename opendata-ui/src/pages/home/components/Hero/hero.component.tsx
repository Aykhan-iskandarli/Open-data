import ButtonComponent from 'packages/RButton/button.component'
import InputComponent from 'packages/RInput/input.component'
import TagsComponent from 'packages/RTags/tags.component'
import React, { useEffect, useState } from 'react'
import './hero.component.scss'
import search from "assets/images/search.svg"
import detail from "assets/images/detail.svg"
import { SelectInputComponent } from './select-input.component'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'core/layouts/public/types/public'
import { ITag } from 'packages/RTags/types/tags'
import { Search } from './store/action'
import { encodeURL } from 'core/helpers/common-functions/common-functions'
import { useHistory } from 'react-router-dom'
import { IParam } from 'pages/information/types/types'
import { getDropdownCategories, getDropdownFileTypes, getDropdownOrganisations } from 'pages/home/store/actions'
import { Option } from 'pages/home/types/types'

const HeroComponent = () => {
  const dispatch = useDispatch()
  const { tags } = useSelector((state: RootState) => state.search)
  const {
    dropdown_categories,
    dropdown_organisations,
    dropdown_fileTypes
  } = useSelector((state: RootState) => state.home)

  const [params, setParams] = useState({})
  const [dropdown, setDropdown] = useState({
    category: { key: 0, value: "Kateqoriya" },
    organisation: { key: 0, value: "Qurum" },
    format: { key: 0, value: "Fayl tipi" }
  })

  const history = useHistory()
  const [showFilter, setShowFilter] = useState(false)
  const [searchInput, setSearchInput] = useState({
    keyword: ""
  })
  const changeSearch = (e: any) => {
    const { name, value } = e.target
    setSearchInput({ ...searchInput, [name]: value })
  }

  const urlChangeHandler = (urlParams: any) => {
    history.push({ pathname: "information", search: `?${encodeURL(urlParams)}` });
  }

  useEffect(() => {
    dispatch(getDropdownFileTypes())
    dispatch(getDropdownCategories())
    dispatch(getDropdownOrganisations())
  }, [dispatch])


  useEffect(() => {
    dispatch(Search(searchInput))
  }, [dispatch, searchInput])

  useEffect(() => {
    console.log(params);
  }, [params])

  return (
    <section className="hero_section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero">
              <div className="hero-content">
                <span>Azərbaycan Respublikasının</span>
                <p>Açıq informasiyalar portalı</p>
              </div>
              <div className="hero-search">
                <img className="search-icon" src={search} alt="" />
                <InputComponent name="keyword" type="text" className="hero-input" inputCont="hero_search_input" placeholder="Axtarış üçün sözü daxil edin..." onChange={changeSearch} />
                <ButtonComponent classNames="btn--secondary search-btn"
                  click={() => setShowFilter(!showFilter)}
                ><img className='btn-detail-img' src={detail} alt="" />Ətraflı axtarış</ButtonComponent>
                <div className={`hero-dropdown p-24 ${showFilter ? 'show' : ''} `}>
                  <div className='m-0 search_filter-form'>
                    <div className="row">
                      <div className="col-md-8">
                        <div className="inputs_group">
                          <div className="search_filter-form-input">
                            <SelectInputComponent
                              data={dropdown_categories}
                              select={(item: Option) => {
                                setParams({ ...params, category: [{ id: item.key, value: item.value }] })
                                setDropdown({ ...dropdown, category: item })
                              }}
                              selected_item={dropdown.category}
                            />
                          </div>
                          <div className="search_filter-form-input">
                            <SelectInputComponent
                              data={dropdown_organisations}
                              select={(item: Option) => {
                                setParams({ ...params, organisation: [{ id: item.key, value: item.value }] })
                                setDropdown({ ...dropdown, organisation: item })
                              }}
                              selected_item={dropdown.organisation}
                            />
                          </div>
                          <div className="search_filter-form-input">
                            <SelectInputComponent
                              data={dropdown_fileTypes}
                              select={(item: Option) => {
                                setParams({ ...params, format: [{ id: item.key, value: item.value }] })
                                setDropdown({ ...dropdown, format: item })
                              }}
                              selected_item={dropdown.format}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 py-16 pl-6 d-flex">
                        <ButtonComponent classNames='p-16 w-100' click={() => urlChangeHandler(params)} >Axtar</ButtonComponent>
                        <ButtonComponent classNames='p-16 w-100 ml-10 filter-btn' click={() => {
                          setParams({})
                          setDropdown({
                            category: { key: 0, value: "Kateqoriya" },
                            organisation: { key: 0, value: "Qurum" },
                            format: { key: 0, value: "Fayl tipi" }
                          })
                        }} >Təmizlə</ButtonComponent>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <TagsComponent tags={tags} onClick={(item: IParam) => {
                urlChangeHandler({ tag: [item] })
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroComponent