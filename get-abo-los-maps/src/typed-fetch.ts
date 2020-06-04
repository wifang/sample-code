import fetch, { Response, RequestInfo, RequestInit, Request, HeaderInit } from "node-fetch";

export interface IHttpResponse<T> extends Response {
    parsedBody?: T;
}
export const http = <T>(request: RequestInfo): Promise<IHttpResponse<T>> => {
    let response: IHttpResponse<T>;
    return new Promise((resolve, reject) => {
        fetch(request)
        .then(res => {
            response = res;
            return res.json();
        })
        .then(body => {
            response.parsedBody = body;
            resolve(response);
        }).catch( (error) => { reject(error) });
    });
};

export const get = async <T>(
    path: string,
    headers: HeaderInit = { },
    args: RequestInit = { method: "get", headers: headers }
): Promise<IHttpResponse<T>> => await http<T>(new Request(path, args));
   
export const post = async <T>(
    path: string,
    body: any,
    headers: HeaderInit = { },
    args: RequestInit = { method: "post", body: JSON.stringify(body), headers: headers }
): Promise<IHttpResponse<T>> => await http<T>(new Request(path, args));
   
  export const put = async <T>(
    path: string,
    body: any,
    headers: HeaderInit = { },
    args: RequestInit = { method: "put", body: JSON.stringify(body), headers: headers }
  ): Promise<IHttpResponse<T>> => await http<T>(new Request(path, args));

export const restDelete = async <T>(
    path: string,
    headers: HeaderInit = { },
    args: RequestInit = { method: "delete", headers: headers }
): Promise<IHttpResponse<T>> => await http<T>(new Request(path, args));
   