import { ErrorMessage } from 'formik';

const Error = (prop: { name: string; className?: string }) => {
  return (
    <ErrorMessage
      component="p"
      name={prop.name}
      className={`${prop.className} form-errors`}
    />
  );
};

export default Error;
