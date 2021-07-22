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

  async show(videoId) {
    const response = await fetch(`${baseUrl}/videos/${videoId}`, {
      method: "GET",
      credentials: "include",
      headers: headers,
    });
    return response.json();
  },
};

export const AccessTokens = {
  async index() {
    const response = await fetch(`${baseUrl}/access_tokens`, {
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

export const SignatureKeys = {
  async index() {
    const response = await fetch(`${baseUrl}/signature_keys`, {
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

export const WebhookSubscriptions = {
  async index() {
    const response = await fetch(`${baseUrl}/webhook_subscriptions`, {
      method: "GET",
      credentials: "include",
      headers: headers,
    });
    return response.json();
  },
};

export const DashboardStats = {
  async show() {
    const response = await fetch(`${baseUrl}/stats`, {
      method: "GET",
      credentials: "include",
      headers: headers,
    });
    return response.json();
  },
};
