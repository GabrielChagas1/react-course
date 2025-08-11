import type { Category } from "../enum/Category";

export interface IAppProps {
  title: string,
  content: string,
  commentsQty: number,
  tags: string[],
  category: Category
}

export default function Destructuring ({ title, content, commentsQty, tags, category}: IAppProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map(tag => (
          <span>#{tag} </span>
        ))}
        <h4>Categoria: {category}</h4>
      </div>
    </div>
  );
}
