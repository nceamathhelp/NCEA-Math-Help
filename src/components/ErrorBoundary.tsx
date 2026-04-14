import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State;
  public props: Props;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
    this.props = props;
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = "Something went wrong. Please try refreshing the page.";
      
      try {
        if (this.state.error?.message) {
          const parsed = JSON.parse(this.state.error.message);
          if (parsed.error && parsed.error.includes('Missing or insufficient permissions')) {
            errorMessage = "You don't have permission to access this data. Please make sure you are signed in with the correct account.";
          }
        }
      } catch (e) {
        // Not a JSON error, use default
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
          <Card className="max-w-md w-full border-2 border-red-100">
            <CardHeader className="text-center">
              <div className="mx-auto bg-red-100 p-3 rounded-full w-fit mb-4 text-red-600">
                <AlertTriangle size={32} />
              </div>
              <CardTitle className="text-2xl">Oops! An error occurred</CardTitle>
              <CardDescription className="text-slate-600 mt-2">
                {errorMessage}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                className="w-full gap-2" 
                onClick={() => window.location.reload()}
              >
                <RefreshCcw size={18} />
                Refresh Page
              </Button>
            </CardFooter>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
