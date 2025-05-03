import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem("loggedin") === "true";

  if (!isLoggedIn) {
    const redirectTo = new URL(request.url).pathname
    const response = redirect(`/login?message=You should login first!&redirectTo=${redirectTo}`);
    response.body = true;
    return response;
  }
}
