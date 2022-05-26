import { Link, useParams } from "react-router-dom";
import check from "../../../assets/images/check.svg";
import "./infoDetail.component.scss";
import video_guide from "../../../assets/images/video_guide.svg";
import goverment from "../../../assets/images/goverment.svg";
import { IDetailProps } from "../types/types";
import { generateGuid } from "core/helpers/common-functions/common-functions";
import { useState } from "react";
import ModalComponent from "packages/RModal/modal.component";
import ButtonComponent from "packages/RButton/button.component";

const InfoDetailComponent = ({ data }: IDetailProps) => {
  const [show, setShow] = useState(false)


  return (
    <div className="info_right_card">
      <h3>{data && data?.title}</h3>
      <p>{data && data?.description}</p>
      <div className="info-component-catgeory">
        <img src={goverment} alt="" />
        <span>{data && data?.categoryName}</span>
      </div>
      <ul className="info-tags">
        {data &&
          data?.tags.map((tag: any) => (
            <li key={generateGuid()}>
              {tag}
            </li>
          ))}
      </ul>
      <div className="info_date_container">
        <div className="info_date">
          <div className="create_date">
            <p>Yaranma tarixi</p>
            <span>{data.createdDate}</span>
          </div>
          <div className="change_date">
            <p>Dəyişdirilmə tarixi</p>
            <span>{data.updatedDate}</span>
          </div>
        </div>
        <div className="info_bottom_right">
          <div className="info_watching">
            <img src={check} alt="" />
            <span>10782</span>
          </div>
          <div className="video-guide" onClick={() => setShow(!show)}>
            <img src={video_guide} alt="" />
            <span>Təlimat</span>
          </div>
          <ModalComponent
            size="3"
            title="Azərbaycan rayonları"
            show={show}
            setShow={setShow}
            color="guide_color"
            custom_class="guide_modal"
            right_title="Təlimat"
            modal_img={video_guide}
          >
            <div className="modal_content_container">
              <div className="modal_guide_content">
                <h3>Test Document PDf</h3>
                <p>
                  {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              fugiat obcaecati, recusandae natus eos voluptatum, accusamus et
              laboriosam nesciunt dolore soluta ad debitis quibusdam deserunt
              officia ut cupiditate voluptates? Architecto, eveniet? Officia
              facere reprehenderit, ex ea nihil quae, provident corporis,
              quisquam est perferendis sed harum aperiam at quidem eos quo enim
              sit ab iusto veritatis rerum illo deleniti? Error inventore,
              debitis laboriosam repudiandae numquam, labore sapiente in
              nesciunt quod possimus earum natus quasi voluptate iure, nihil
              odio sint dolore vero! Debitis, ipsa impedit! Sunt corporis
              molestias dolorum perspiciatis quaerat ut quae? Vero repellendus,
              laudantium aliquam ad voluptatibus corrupti dolores nihil.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              fugiat obcaecati, recusandae natus eos voluptatum, accusamus et
              laboriosam nesciunt dolore soluta ad debitis quibusdam deserunt
              officia ut cupiditate voluptates? Architecto, eveniet? Officia
              facere reprehenderit, ex ea nihil quae, provident corporis,
              quisquam est perferendis sed harum aperiam at quidem eos quo enim
              sit ab iusto veritatis rerum illo deleniti? Error inventore,
              debitis laboriosam repudiandae numquam, labore sapiente in
              nesciunt quod possimus earum natus quasi voluptate iure, nihil
              odio sint dolore vero! Debitis, ipsa impedit! Sunt corporis
              molestias dolorum perspiciatis quaerat ut quae? Vero repellendus,
              laudantium aliquam ad voluptatibus corrupti dolores nihil. */}
                  {data && data?.instructionFileUrl}
                </p>
              </div>
            </div>
            <div className="modal_guide_btn">
              <ButtonComponent classNames="btn--dark btn--size-sm guide_btn" click={() => setShow(false)}>Bağla</ButtonComponent>
            </div>
          </ModalComponent>
        </div>
      </div>
    </div>
  );
};

export default InfoDetailComponent;
