export const isLogin = () => {
  return localStorage.getItem("logged") === "true";
};
