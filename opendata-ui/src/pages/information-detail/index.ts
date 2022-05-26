import copy from "../../assets/images/copy.svg";
import download from "../../assets/images/download.svg";
import code from "../../assets/images/code.svg";

export const fileTypeList = [
  {
    id: 1,
    title: "https://opendata.az/jeog/azerbaijan_reg...",
    icon: copy,
    icon1: code,
    file: "json",
  },
  {
    id: 2,
    title: "Azərbaycan rayonları",
    icon: download,
    file: "csv",
  },
  {
    id: 3,
    title: "Azərbaycan rayonları",
    icon: download,
    file: "xls",
  },
  {
    id: 4,
    title: "Azərbaycan rayonları",
    icon: download,
    file: "doc",
  },
  {
    id: 5,
    title: "Azərbaycan rayonları",
    icon: download,
    file: "pdf",
  },
];


export const detailContent = [
    {
      id: 1,
      title: "Servisin adı",
      desc: "Azərbaycan rayonları",
      class:"border-right"
    },
    {
      id: 2,
      title: "Servisin təsviri",
      desc: "Azərbaycan rayonlarının siyahısı və koordinatları",
      file: "csv",
    },
    {
        id: 3,
        title: "Təqdim edən qurum",
        desc: "Ekologiya və Təbii sərvətlər Nazirliyi",
        file: "pdf",
      },
    {
      id: 4,
      title: "Kateqoriya",
      desc: "Təhsil, Coğrafi məkanlar",
      file: "xls",
    },
    {
      id: 5,
      title: "Açar sözlər",
      desc: "Xəritə, İnzibati bölgü",
      file: "doc",
    },
    {
      id: 6,
      title: "Yaranma tarixi",
      desc: "14.02.2021",
      file: "pdf",
      class:"border-bottom"
    },
  ];
