import { NewsProps } from "../../interfaces/interfaces";

const News: React.FC<NewsProps> = ({
  id,
  title,
  content,
  image,
  tag,
}): JSX.Element => {
  return (
    <>
      <p>{title}</p>
      <p>{tag}</p>
      <p>{image}</p>
      <p>{content}</p>
    </>
  );
};

export default News;
