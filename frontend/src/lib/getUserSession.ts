import { cookies } from "next/headers";

export const getUserSession = () => {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("next-auth.session-token")?.value;
  const userId = cookieStore.get("userId")?.value;

  return { sessionToken, userId };
};
