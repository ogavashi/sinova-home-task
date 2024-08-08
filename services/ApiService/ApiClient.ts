import queryString from "query-string";

interface IRequest {
  url: string;
  method?: string;
  headers?: HeadersInit;
  params?: any;
  body?: any;
}

export default class ApiClient {
  baseURL: string;
  apiKey: string;

  constructor({ baseURL, apiKey }: { baseURL: string; apiKey: string }) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
  }

  async get(url: string, params: HeadersInit) {
    return this.request({
      url,
      params,
      method: "GET",
    });
  }

  async post(url: string, payload: unknown, params: HeadersInit) {
    return this.request({
      url,
      method: "POST",
      params,
      body: payload,
    });
  }

  async put(url: string, payload = {}) {
    return this.request({
      url,
      method: "PUT",
      body: payload,
    });
  }

  async patch(url: string, payload = {}) {
    return this.request({
      url,
      method: "PATCH",
      body: payload,
    });
  }

  async delete(url: string, payload = {}) {
    return this.request({
      url,
      method: "DELETE",
      body: payload,
    });
  }

  async request({ url, method, params = {}, body }: IRequest) {
    try {
      const requestHeaders: HeadersInit = {
        "Cache-Control": "no-cache",
        pragma: "no-cache",
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
      };

      const query = Object.keys(params).length ? `?${queryString.stringify(params)}` : "";

      const response = await fetch(`${this.baseURL}${url}${query}`, {
        method,
        headers: requestHeaders,
        credentials: "include",
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();

        return data;
      }

      throw new Error(response.statusText);
    } catch (e) {
      if (e instanceof Error) {
        console.log("[ERROR]: ", e.message);
      }
      throw e;
    }
  }
}
