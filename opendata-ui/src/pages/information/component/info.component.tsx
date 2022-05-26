import { Link } from "react-router-dom";
import check from "../../../assets/images/check.svg";
import "./info.component.scss";
import { IInfoProps } from "../types/types";
import { generateGuid } from "core/helpers/common-functions/common-functions";

const InfoComponent = ({ data }: IInfoProps) => {
  return (
    <div className="info_right_card">
      <Link to={`information/${data.id}`}>
        <h3>{data && data?.title}</h3>
      </Link>
      <p>{data && data?.description}</p>
      <ul className="info_file_type">
        {
          data && data.linkResponseTypes.map((file:any)=>(
            <li>{file} </li>
          ))
        }
     
      </ul>
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
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
