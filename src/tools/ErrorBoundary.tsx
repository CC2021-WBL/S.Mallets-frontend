import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import ErrorTextCart from '../features/notFoundPage/ErrorTextCart';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <ErrorTextCart
            mainText="Ooops, coś poszło nie tak"
            subtext="Odśwież stronę"
          ></ErrorTextCart>
          <h1>
            <Link to="/">Home page</Link>
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
