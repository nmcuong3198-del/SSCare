export const authService = {
  login(user) {
    localStorage.setItem("user", JSON.stringify(user));
  },

  logout() {
    localStorage.removeItem("user");
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  },

  isAuthenticated() {
    return !!localStorage.getItem("user");
  },
};