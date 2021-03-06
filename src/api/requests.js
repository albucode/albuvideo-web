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
  async delete() {
    return await fetch(`${baseUrl}/users/sign_out`, {
      method: "DELETE",
      credentials: "include",
      headers: headers,
    });
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

  async create(requestBody) {
    const response = await fetch(`${baseUrl}/videos`, {
      method: "POST",
      credentials: "include",
      headers: headers,
      body: JSON.stringify(requestBody),
    });
    return response.json();
  },

  async update(videoId, requestBody) {
    const response = await fetch(`${baseUrl}/videos/${videoId}`, {
      method: "PUT",
      credentials: "include",
      headers: headers,
      body: JSON.stringify(requestBody),
    });
    return response.json();
  },

  async delete(videoId) {
    const response = await fetch(`${baseUrl}/videos/${videoId}`, {
      method: "DELETE",
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

  async create(requestBody) {
    const response = await fetch(`${baseUrl}/webhook_subscriptions`, {
      method: "POST",
      credentials: "include",
      headers: headers,
      body: JSON.stringify(requestBody),
    });
    return response.json();
  },

  async delete(webhookSubscriptionId) {
    const response = await fetch(
      `${baseUrl}/webhook_subscriptions/${webhookSubscriptionId}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: headers,
      }
    );
    return response.json();
  },
  async show(webhookSubscriptionId) {
    const response = await fetch(
      `${baseUrl}/webhook_subscriptions/${webhookSubscriptionId}`,
      {
        method: "GET",
        credentials: "include",
        headers: headers,
      }
    );
    return response.json();
  },
  async update(webhookSubscriptionId, requestBody) {
    const response = await fetch(
      `${baseUrl}/webhook_subscriptions/${webhookSubscriptionId}`,
      {
        method: "PUT",
        credentials: "include",
        headers: headers,
        body: JSON.stringify(requestBody),
      }
    );
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

export const VideoStats = {
  async show(videoId, frequency, interval) {
    const response = await fetch(
      `${baseUrl}/videos/${videoId}/stats?interval=${interval}&frequency=${frequency}`,
      {
        method: "GET",
        credentials: "include",
        headers: headers,
      }
    );
    return response.json();
  },
};

export const Countries = {
  async index() {
    const response = await fetch(`${baseUrl}/countries`, {
      method: "GET",
      credentials: "include",
      headers: headers,
    });
    return response.json();
  },
};

export const Options = {
  async index() {
    const response = await fetch(`${baseUrl}/options`, {
      method: "GET",
      credentials: "include",
      headers: headers,
    });
    return response.json();
  },
};

export const Invoices = {
  async index() {
    const response = await fetch(`${baseUrl}/invoices`, {
      method: "GET",
      credentials: "include",
      headers: headers,
    });
    return response.json();
  },
};
