// 🛡️ Auth utility — checks if the current session is still valid
// Source: ADAM business-fe (partial sample for verification)

import { apiClient } from "~shared/lib/api-client";

export const isAuthenticated = async (): Promise<boolean> => {
  try {
    const res = await apiClient.get("/accounts/profile/");
    if (res.status === 200) {
      return true;
    }

    return false;
  } catch {
    return false;
  }
};
