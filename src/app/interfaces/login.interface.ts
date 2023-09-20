export interface loginResponse {
    accessToken: string;
    user: {
      email: string;
      role: string;
      id: number;
    };
  }