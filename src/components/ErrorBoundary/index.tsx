import { Component, ErrorInfo, ReactNode } from 'react';

import { ERROR_MESSAGES } from '@constants/errorMessages';

import { StyledErrorBoundaryWrapper, StyledErrorDetails, StyledErrorMessage, StyledRetryButton } from './index.styled';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
          <StyledErrorBoundaryWrapper>
            <StyledErrorMessage>{ERROR_MESSAGES.SOMETHING_WENT_WRONG}</StyledErrorMessage>
            <StyledErrorDetails>{this.state.error?.message || 'An unexpected error occurred.'}</StyledErrorDetails>
            <StyledRetryButton onClick={this.handleRetry}>{ERROR_MESSAGES.TRY_AGAIN}</StyledRetryButton>
          </StyledErrorBoundaryWrapper>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
