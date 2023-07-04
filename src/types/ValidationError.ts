export type ErrorType = {
    fileName?: string;
    errorType: "maxSize" | "maxWidth" | "maxHeight" | "maxCount";
    message: string;
  }