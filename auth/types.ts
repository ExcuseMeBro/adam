// 🔐 Shared auth model — User shape used across the app
// Source: ADAM business-fe (partial sample for verification)

import type { ImageType } from "~shared/model";

export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  clinic_name: string;
  photo_url: ImageType;
  phone_number?: string;
  birth_date?: string;
  created_at: string;
}
