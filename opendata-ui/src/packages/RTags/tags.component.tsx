import "./tags.component.scss";
import { ITags } from "./types/tags";

const TagsComponent = ({ tags, onClick }: ITags) => {

  return (
    <ul className="tagList">
      {tags && tags.map((tag: any) => (
        <li key={tag.id} onClick={() => { onClick({ id: tag.id, value: tag.tag }) }}>
          {tag.tag}
        </li>
      ))}
    </ul>
  );
};

export default TagsComponent;
