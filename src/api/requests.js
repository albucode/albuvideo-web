import { baseUrl } from "../config";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const Session = {
  async create(requestBody) {
    const response = await fetch(`${baseUrl}/users/sign_in`, {
      method: "POST",
      credentials: "include",
      headers: headers,
      body: JSON.stringify(requestBody),
    });
    return response.json();
  },
};

export const CurrentUser = {
  async show() {
    const response = await fetch(`${baseUrl}/current_user`, {
      method: "GET",
      credentials: "include",
      headers: headers,
    });
    return response.json();
  },
};
