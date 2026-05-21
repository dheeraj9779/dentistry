type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined | null>;
  cookie?: string;
  cache?: RequestCache;
};

function buildQueryString(params?: Record<string, string | number | boolean | undefined | null>) {
  if (!params) return '';
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    searchParams.append(key, String(value));
  });
  return searchParams.toString() ? `?${searchParams.toString()}` : '';
}

async function fetchApi<T>(url: string, options: RequestOptions = {}): Promise<T> {
  const {
    method = 'GET',
    headers = {},
    body,
    params,
    cache = 'no-store',
  } = options;

  const requestUrl = `${url}${buildQueryString(params)}`;

  const requestHeaders: Record<string, string> = {
    Accept: 'application/json',
    ...headers,
  };

  const init: RequestInit = {
    method,
    headers: requestHeaders,
    cache,
  };

  if (body !== undefined && method !== 'GET' && method !== 'HEAD') {
    if (body instanceof FormData) {
      init.body = body;
      delete requestHeaders['Content-Type'];
    } else {
      init.body = JSON.stringify(body);
      requestHeaders['Content-Type'] = requestHeaders['Content-Type'] ?? 'application/json';
    }
  }

  const response = await fetch(requestUrl, init);
  const responseText = await response.text();
  const contentType = response.headers.get('content-type') ?? '';
  const isJson = contentType.includes('application/json');
  const data = isJson && responseText ? JSON.parse(responseText) : (responseText as unknown);

  if (!response.ok) {
    const errorMessage = typeof data === 'object' && data !== null && 'error' in data
      ? (data as { error?: string }).error
      : response.statusText;
    throw new Error(errorMessage || 'API request failed');
  }

  return data as T;
}

export const api = {
  get<T>(url: string, options?: RequestOptions): Promise<T> {
    return fetchApi(url, { ...options, method: 'GET' });
  },
  post<T>(url: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return fetchApi(url, { ...options, method: 'POST', body });
  },
  put<T>(url: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return fetchApi(url, { ...options, method: 'PUT', body });
  },
  patch<T>(url: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return fetchApi(url, { ...options, method: 'PATCH', body });
  },
  delete<T>(url: string, options?: RequestOptions): Promise<T> {
    return fetchApi(url, { ...options, method: 'DELETE' });
  },
};
