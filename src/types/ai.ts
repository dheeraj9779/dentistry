export type DentalAnalysisResponse = {
  riskLevel: string;
  possibleIssue: string;
  recommendations: string[];
  explanation: string;
};

type AIError = {
  message: string;
  code: string;
};

type AISuccess<T> = {
  success: true;
  data: T;
};

type AIFailure = {
  success: false;
  error: AIError;
};

export type AIResponse<T> = AISuccess<T> | AIFailure;