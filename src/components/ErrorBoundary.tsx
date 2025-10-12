"use client";

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>;
}

const DefaultErrorFallback = ({ error, reset }: { error?: Error; reset: () => void }) => (
  <div 
    className="w-full h-full flex items-center justify-center flex-col gap-4" 
    style={{ 
      backgroundColor: "var(--bg-primary)",
      padding: "var(--space-6)" 
    }}
  >
    <h2 style={{
      fontFamily: "var(--font-family-inter)",
      fontSize: "var(--text-h2)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--text-primary)",
      textAlign: "center",
      marginBottom: "var(--space-4)"
    }}>
      Something went wrong
    </h2>
    <p style={{
      fontFamily: "var(--font-family-roboto-mono)",
      fontSize: "var(--text-base)",
      fontWeight: "var(--font-weight-light)",
      color: "var(--text-primary)",
      textAlign: "center",
      marginBottom: "var(--space-6)",
      maxWidth: "500px"
    }}>
      {error?.message || "An unexpected error occurred. Please try refreshing the page."}
    </p>
    <button
      onClick={reset}
      style={{
        padding: "var(--space-2) var(--space-4)",
        backgroundColor: "var(--text-primary)",
        color: "var(--text-inverse)",
        border: "var(--border-width) solid var(--border-color)",
        fontFamily: "var(--font-family-inter)",
        fontSize: "var(--text-base)",
        fontWeight: "var(--font-weight-medium)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        cursor: "pointer"
      }}
    >
      Try Again
    </button>
  </div>
);

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} reset={this.reset} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;