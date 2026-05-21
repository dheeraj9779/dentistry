

type RequestOptions = {
    method?: string;
    headers?: Record<string, string>,
    body?: unknown,
    params?: Record<string, string | number| boolean | undefined | null>,
    cookie?: string,
    cache?: string,
}

async function fetchApi<T>(url: string, options: RequestOptions = {}): Promise<T>{
    console.log("atleast i am here")
    const { method = 'GET', headers = {}, body, cookie, params, cache = 'no-store'} = options;

 
    const response = await fetch(url,
        {
            method: method,
            headers: {
                'Content-Type' : 'application/json',
                Accept: 'application/json',
                ...headers,
            
            },
            body: body ? JSON.stringify(body) : undefined
        }
    )
    return response.json()
}

export const api = {
    get<T>(url: string, options ?: RequestOptions): Promise<T> {
        return fetchApi(url, { ...options, method: 'GET'})
    },
    post<T>(url: string, body ?:unknown, options ?: RequestOptions): Promise<T> {
        return fetchApi(url, { ...options, method: 'POST', body})
    },
    put<T>(url: string, body ?:unknown,  options ?: RequestOptions): Promise<T> {
        return fetchApi(url, { ...options, method: 'PUT', body})
    },
    patch<T>(url: string, body ?:unknown, options ?: RequestOptions): Promise<T> {
        return fetchApi(url, { ...options, method: 'PATCH', body})
    },
    delete<T>(url: string, options ?: RequestOptions): Promise<T> {
        return fetchApi(url, { ...options, method: 'DELETE'})
    }
}