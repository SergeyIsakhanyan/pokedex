import axios from "axios";
import { merge } from "lodash";
import { Method } from "./api";

export interface IResponse<T> {
  success: boolean;
  data: T;
  errorInfo: any;
}

export class HttpClient {
  private static readonly InvalidResponse = (response: any) =>
    new Error(`Invalid response: ${JSON.stringify(response)}`);

  public static async call<T>(
    url: string,
    method: Method = Method.POST,
    data: any | null = null,
    params: {}
  ): Promise<IResponse<T>> {
    const callConfig = merge({
      data,
      method,
      params,
      url
    });

    const response = await axios(callConfig).then(result => {
      return { data: result.data, success: result.status === 200 } as IResponse<
        T
      >;
    });
    if (!response.success) {
      throw this.InvalidResponse(response);
    }
    return response;
  }
}
