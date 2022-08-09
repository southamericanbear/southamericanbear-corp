const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const fetchWithoutToken = (
  endpoint: string,
  data: any,
  method = "GET"
) => {
  const url = `${baseURL}${endpoint}`;
  if (method === "GET") return fetch(url);
  else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchWithToken = (endpoint: string, data: any, method = "GET") => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem("token") || "";
  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        " x-token": token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        " x-token": token,
      },
      body: JSON.stringify(data),
    });
  }
};
