import AccardionComponent from "packages/RAccardion/accardion.component";
import InputComponent from "packages/RInput/input.component";
import { getFaqs } from "pages/home/store/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/types/store.types";
import "./faq.component.scss";
import search_icon from "../../assets/images/search.svg"
import { toast, ToastContainer } from "react-toastify";

const FaqComponent = () => {
  const faqs = useSelector((state: RootState) => state.home.faqs);
  const [data,setData] = useState({
    title:""
  })
  const paginationData = faqs.pagination;
  const dispatch = useDispatch();

  
  const { title } = data;

  const faqSearchChange = (e:any) =>{
      const {name,value} = e.target;
      setData({...data, [name]:value})

    console.log(data)
  }
  const getFaqSearch = () =>{
    if(faqs.pagination.totalPages <2){
      dispatch(getFaqs(data))
    }

      setData({title:""})
  }
  const pressEnter = (e:any) =>{
    if (e.key === 'Enter') {
      dispatch(getFaqs(data))
      setData({title:""})
    }
  }
  const PageSize = 3

  const fetchFAQ = (pageNumber: any) => {
    dispatch(getFaqs({ PageNumber: pageNumber, PageSize }));
  };

  useEffect(() => {
    dispatch(getFaqs({ PageNumber: 1, PageSize }));
  }, [dispatch]);

  return (
    <section className="faq_page">
      <div className="container">
        <ToastContainer/>
        <div className="faq">
          <div className="info-search-input">
            <InputComponent
              name="title"
              value={title}
              type="text"
              placeholder="Axtarış sözü əlavə edin..."
              className="faq_input"
              onChange={faqSearchChange}
              onKeyDown={pressEnter}
            />
            <img src={search_icon} alt="" onClick={getFaqSearch}/>
          </div>
        </div>
        <AccardionComponent faqs={faqs} paginate={true} paginationData={paginationData} fetchFAQ={fetchFAQ} PageSize={PageSize} />

      </div>
    </section>
  );
};

export default FaqComponent;
