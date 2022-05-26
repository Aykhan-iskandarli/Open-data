import "./information-detail.component.scss";

import InfoComponent from "pages/information/component/info.component";
import arrowLeft from "../../assets/images/arrow.svg";
import { Link, useHistory, useParams } from "react-router-dom";

import ModalComponent from "packages/RModal/modal.component";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "core/layouts/public/types/public";
import { getDetail } from "./store/action";
import copy from "../../assets/images/copy.svg";
import download from "../../assets/images/download.svg";
import code from "../../assets/images/code.svg";
import * as FileSaver from "file-saver";
import { generateGuid } from "core/helpers/common-functions/common-functions";
import LoadingComponent from "packages/RLoading/loading.component";
import DetailComponent from "./component/infoDetail.component";
import Skeleton from "react-loading-skeleton";
import Swagger from "./component/Swagger";

const InformationDetailComponent = () => {
  const dispatch = useDispatch();
  const { detail } = useSelector((state: RootState) => state.detail);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [frameUrl, setFrameUrl] = useState('');
  const loading = useSelector((state: RootState) => state.publicState.loading);

  const data = detail.item;
  const { id } = useParams<{ id?: string }>()

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
  const saveFile = (url: string, format: string) => {
    FileSaver.saveAs(
      url,
      `${format}_${new Date().toUTCString()}.${format}`
    );
  };
  const content = useMemo(() => {
    return data ?
      <>
        <DetailComponent data={data} />
      </> :
      <>
        <Skeleton width={100} height={100} className="mb-16" />
        <Skeleton count={3} height={30} className=" my-8" />
      </>
  }, [data])

  return (
    <>
      <LoadingComponent scoped={true} show={loading} />
      <section className="information_detail_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="information_detail">
                <div className="detail-back" onClick={() => history.goBack()}>
                  <div className="detail-back-img">
                    <img src={arrowLeft} alt="" />
                  </div>
                  <span>Geri</span>
                </div>
                {content}
              </div>
              <div className="info_detail_bottom">
                <div className="row">
                  <div className="col-12">
                    <ul className="info_file_type_list">
                      <>
                        <div className="file_type_cont">
                          <div className="file_type_div">
                            <div className="w-full">
                              {data ?
                                data.linkResponseTypes.map(
                                  (file: any, index: number) => (
                                    <div key={generateGuid()} className="file_type">
                                      <div className="d-flex align-center p-5">
                                        <div className="file_type_name">
                                          <span className="file_name">{file}</span>
                                          <span className="vertical_divdier"></span>
                                        </div>
                                        <div>{data.linkUrls[index]}</div>
                                      </div>
                                      <div>
                                        {file === "json" ? (
                                          <div className="file_type_icon">
                                            <img
                                              className="icon_code"
                                              onClick={() => {
                                                setOpen(!open)
                                                setFrameUrl(data.linkUrls[index])
                                              }}
                                              src={code}
                                              alt=""
                                            />
                                            <button className="clipboard"
                                              onClick={() =>
                                                navigator.clipboard.writeText(
                                                  data.linkUrls[index]
                                                )
                                              }
                                            >
                                              <img src={copy} alt="" />
                                            </button>
                                          </div>
                                        ) : (
                                          <div
                                            className="file_type_icon "
                                            onClick={() =>
                                              saveFile(data.linkUrls[index], file)
                                            }
                                          >
                                            <img src={download} alt="" />
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  )
                                ) :
                                <>
                                  <Skeleton count={6} height={30} className=" my-8" />
                                </>}
                            </div>

                          </div>
                        </div>
                      </>
                      <ModalComponent
                        size="3"
                        title="json baxış"
                        show={open}
                        setShow={setOpen}
                        color="details-color"
                        custom_class="custom_class"
                      >
                        <Swagger url={frameUrl} />
                      </ModalComponent>
                    </ul>
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

export default InformationDetailComponent;
