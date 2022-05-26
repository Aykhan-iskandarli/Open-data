import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import InputComponent from "packages/RInput/input.component";
import InfoComponent from "./component/info.component";
import SidebarComponent from "./component/sidebar.component";
import "./information.component.scss";
import deleteTag from "../../assets/images/deleteTag.svg"
import search_icon from "../../assets/images/search.svg";
import {
  decodeURL,
  encodeURL,
  generateGuid,
} from "core/helpers/common-functions/common-functions";
import { RootState } from "store/types/store.types";
import { getCategories, getDropdownFileTypes, getOrganisations } from "pages/home/store/actions";
import { Search } from "pages/home/components/Hero/store/action";
import { getServicesByDetailedSearch, getServicesBySearch } from './store/actions'
import { IParam, IParams, IParamsState, IService, ParamsNames } from './types/types';
import LoadingComponent from "packages/RLoading/loading.component";
import { paramsAll } from "pages/home/components/Categories";
import Skeleton from "react-loading-skeleton";
import queryString from 'query-string';

const InformationComponent = () => {
  const loading = useSelector((state: RootState) => state.publicState.loading)
  const { tags } = useSelector((state: RootState) => state.search);
  const categories = useSelector(
    (state: RootState) => state.home.categories && state.home.categories.itemsFilter
  );
  const organisations = useSelector(
    (state: RootState) => state.home.organisations && state.home.organisations.itemsFilter
  );
  const format = useSelector(
    (state: RootState) => state.home.dropdown_fileTypes
  );
  const { services } = useSelector((state: RootState) => state.services);
  const [show, setShow] = useState(false);
  const [searchInput, setSearchInput] = useState({
    keyword: "",
  });
  const { search, state } = useLocation();
  const url = search.split("?")[1];
  const [params, setParams] = useState<IParamsState>(url ? decodeURL(url) : {
    category: [],
    organisation: [],
    format: [],
    tag: []
  });
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (url) {
      setParams(decodeURL(url));
    }
  }, [search, state, url]);

  useEffect(() => {
    dispatch(getCategories(paramsAll));
    dispatch(getOrganisations(paramsAll));
    dispatch(getDropdownFileTypes());
  }, [dispatch]);

  useEffect(() => {
    let set_params = {
      CategoryIds: params.category?.map(item => item.id),
      OrganisationIds: params.organisation?.map(item => item.id),
      FileTypeIds: params.format?.map(item => item.id),
      TagIds: params.tag?.map(item => item.id)
    }
    dispatch(getServicesByDetailedSearch(queryString.stringify(set_params)))
  }, [dispatch, params])

  const selectItemHandler = ({ name, item }: { name: ParamsNames, item: IParam }) => {
    const itemParams = params[name];

    if (itemParams) {
      const selectedItem = itemParams.find(param => param.id === item.id)
      let newParams: IParam[] = itemParams;
      if (selectedItem) {
        newParams = itemParams.filter(param => param.id !== item.id)
      } else {
        newParams = [...itemParams, item]
      }
      urlChangeHandler({ ...params, [name]: newParams });
    } else {
      urlChangeHandler({ ...params, [name]: [item] });
    }
  };

  useEffect(() => {
    dispatch(Search(searchInput));
  }, [dispatch, searchInput]);

  const changeSearch = (e: any) => {
    const { name, value } = e.target;
    setSearchInput({ ...searchInput, [name]: value });
  };

  const removeItemHandler = ({ name, item }: { name: ParamsNames, item: IParam }) => {
    const itemParams = params[name];
    const newParams = itemParams.filter(param => param.id !== item.id)
    urlChangeHandler({ ...params, [name]: [...newParams] });
  };

  const urlChangeHandler = (urlParams: any) => {
    history.push({ pathname: "", search: `?${encodeURL(urlParams)}` });
  };

  return (
    <>
      <LoadingComponent show={loading} />
      <section className="info_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="info">
                <div className="info-search-input"
                  onMouseLeave={() => setShow(false)}
                >
                  <InputComponent
                    name="keyword"
                    type="text"
                    placeholder="Axtarış sözü əlavə edin..."
                    show={() => setShow(true)}
                    onChange={changeSearch}
                  />
                  <img src={search_icon} alt="" />
                  {show && (
                    <ul className="search_autocomplete">
                      {tags.map((tag: any) => (
                        <li
                          onClick={() => {
                            selectItemHandler({
                              name: "tag",
                              item: { id: tag.id, value: tag.tag },
                            })
                            setShow(false)
                          }
                          }
                          key={tag.id}
                          className={
                            tag.tag === null ? "search_none" : "search_active"
                          }
                        >
                          {tag.tag}
                        </li>
                      ))}
                      { }
                    </ul>
                  )}
                </div>
                <ul className="search-tags">

                  {params && params.category?.map(param =>
                    param.id && (
                      <li key={generateGuid()} className="selected-tags">
                        {param.value}
                        <p
                          className="clear-icon"
                          onClick={() => {
                            removeItemHandler({
                              name: "category",
                              item: param,
                            });
                          }}
                        >
                          <img src={deleteTag} alt="" />
                        </p>
                      </li>
                    ))}

                  {params && params.organisation?.map(param =>
                    param.id && (
                      <li key={generateGuid()} className="selected-tags">
                        {param.value}
                        <p
                          className="clear-icon"
                          onClick={() => {
                            removeItemHandler({
                              name: "organisation",
                              item: param,
                            });
                          }}
                        >
                          <img src={deleteTag} alt="" />
                        </p>
                      </li>
                    ))}

                  {params && params.format?.map(param =>
                    param.id && (
                      <li key={generateGuid()} className="selected-tags">
                        {param.value}
                        <p
                          className="clear-icon"
                          onClick={() => {
                            removeItemHandler({
                              name: "format",
                              item: param,
                            });
                          }}
                        >
                          <img src={deleteTag} alt="" />
                        </p>
                      </li>
                    ))}

                  {params && params.tag?.map(param =>
                    param.id && (
                      <li key={generateGuid()} className="selected-tags">
                        {param.value}
                        <p
                          className="clear-icon"
                          onClick={() => {
                            removeItemHandler({
                              name: "tag",
                              item: param
                            });
                          }}
                        >
                          <img src={deleteTag} alt="" />
                        </p>
                      </li>
                    ))}

                  {(params.category?.length ||
                    params.tag?.length ||
                    params.organisation?.length ||
                    params.format?.length) ? (
                    <li
                      key={generateGuid()} className="selected-tags clear"
                      onClick={() => {
                        urlChangeHandler({
                          category: [],
                          organisation: [],
                          format: [],
                          tag: []
                        });
                      }}
                    >
                      Təmizlə
                    </li>
                  ) : ''}
                </ul>



                <div className="info-content">
                  <div className="row">
                    <div className="col-3">
                      <SidebarComponent
                        items={categories}
                        title="Kateqoriyalar"
                        active={params.category}
                        clickHandler={(item: any) => {
                          selectItemHandler({ name: "category", item });
                        }}
                      />
                      <SidebarComponent
                        items={organisations}
                        active={params.organisation}
                        title="Qurumlar"
                        clickHandler={(item: any) => {
                          selectItemHandler({ name: "organisation", item });
                        }}
                      />
                      <SidebarComponent
                        items={format}
                        active={params.format}
                        title="Formatlar"
                        clickHandler={(item: any) => {
                          selectItemHandler({ name: "format", item });
                        }}
                      />
                    </div>
                    <div className="col-9">
                      <div className="info-content-right">
                        {services ? services?.map((service: IService) =>
                          <InfoComponent key={generateGuid()} data={service} file={true} />
                        ) : <>
                          <Skeleton width={100} height={100} className="mb-16" />
                          <Skeleton count={3} height={30} className=" my-8" />
                        </>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InformationComponent;

