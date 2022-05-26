import CardComponent from "packages/RCard/card.component";
import DividerComponent from "packages/RDivider/divider.components";
import { useState } from "react";
import "./sidebar.component.scss";
import arrow from "../../../assets/images/arrow_white.svg";
import arrow_blue from "../../../assets/images/arrow_blue.svg";
import { generateGuid } from "core/helpers/common-functions/common-functions";
import { ISidebarProps } from "../types/types";

const SidebarComponent = ({ title, items, clickHandler, active }: ISidebarProps) => {
  const [accShow, setAccShow] = useState(false);

  return (
    <div className="categories-container">
      <div className="categories_content">
        <CardComponent className={accShow ? "categories-card active_card" : "categories-card "}>
          <div
            className="categories_title"
            onClick={() => setAccShow(!accShow)}
          >
            <h4>{title}</h4>
            <span className={accShow ? "icon-div change-icon-div" : "icon-div"}>
              {accShow ? (
                <img
                  className={accShow ? "rotate-up" : "rotate-down"}
                  src={arrow}
                  alt=""
                />
              ) : (
                <img
                  className={accShow ? "rotate-up" : "rotate-down"}
                  src={arrow_blue}
                  alt=""
                />
              )}
            </span>
          </div>
          <ul
            className={accShow ? "categories-list accShow" : "categories-list"}
          >
            <DividerComponent className="sidebar_divider" />

            {/* <div className="sidebar-input-div">
            <InputComponent type="text" placeholder="Axtar" />
            <img src={delete_icon} alt="" />
          </div> */}
            {items ? items.map((cat: any) => (
              <li key={generateGuid()}
                className={`${active?.find(item => item.id === cat.key) ? "active" : ''}`}
                onClick={() => { clickHandler({ id: cat.key, value: cat.value }) }}
              >
                <div className="cat_list_div ">
                  {cat.icon && <img src={cat.icon} alt="" />}
                  <span className="categories_name">{cat.value}</span>
                </div>
                {cat.serviceCount !== undefined && <div className="categories_qty">
                  <span>{cat.serviceCount}</span>
                </div>}
              </li>
            )) :
              <li>
                <div className="cat_list_div ">
                  <span className="categories_name">Empty</span>
                </div>
              </li>
            }
          </ul>

        </CardComponent>
      </div>
    </div>
  );
};

export default SidebarComponent;
