export type APIError = {
  response?: {
    data?: {
      message?: string;
      errors?: ValidationError[];
    };
  };
};

interface ValidationError {
  path: string[];
  message: string;
}
