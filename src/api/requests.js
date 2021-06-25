import { baseUrl } from "../config";

export const Session = {
  create(requestBody) {
    return fetch(`${baseUrl}/users/sign_in`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((res) => res.json());
  },
};

export const CurrentUser = {
  show() {
    return fetch(`${baseUrl}/current_user`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
  },
};

export const Video = {
  async index() {
    const response = await fetch(`${baseUrl}/videos`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.json();
  },
};
