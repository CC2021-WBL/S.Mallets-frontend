import { Link } from 'react-router-dom';

import ErrorTextCart from '../features/notFoundPage/ErrorTextCart';
import LogoCarpet from './LogoCarpet';

// { error, resetErrorBoundary }

export function ErrorFallback() {
  return (
    <div className="relative mx-auto mb-20 w-full max-w-7xl">
      <LogoCarpet className="absolute right-8 z-[1] hidden lg:block" />
      <div role="alert" className="my-24 flex flex-col items-center">
        <ErrorTextCart
          mainText="Ooops, coś poszło nie tak"
          subtext="Odśwież stronę"
        ></ErrorTextCart>
        <h1>
          <Link to="/">Home page</Link>
        </h1>
        {/* <button onClick={resetErrorBoundary}>Try again</button> */}
      </div>
    </div>
  );
}

export const errorHandler = (error: any, errorInfo: any) => {
  console.log(error, errorInfo);
};
