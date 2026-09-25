// 📝 Sign-in DTOs — request/response shapes for the login endpoint
// Source: ADAM business-fe (partial sample for verification)

export type SignInFieldType = {
  username?: string;
  password?: string;
};

export type SignInResponse = {
  access: string;
  refresh: string;
};
