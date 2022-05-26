export interface IDetail {
  id?: 3;
  title?: String;
  description?: String;
  categoryName?: String;
  categoryPhoto?: String;
  instructionFileUrl?: String;
  tags?: string[],
  linkUrls?: string[],
  linkResponseTypes?: string[],
  createdDate: string,
  updatedDate: string,
}


export interface IDetailProps {
  text?: String,
  file?: Boolean,
  data?: any
}
