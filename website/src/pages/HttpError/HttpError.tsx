import { HttpErrorProps } from "../../interfaces/interfaces";

const HttpError: React.FC<HttpErrorProps> = ({
  code,
  title,
  message,
}): JSX.Element => {
  return (
    <>
      <p>{title}</p>
      <p>
        {code} {message}
      </p>
    </>
  );
};

export default HttpError;
