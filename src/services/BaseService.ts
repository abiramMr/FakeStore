import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

export class BaseService {
  protected axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_APP_API,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    this.initializeInterceptors()
  }

  private initializeInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config
      },
      error => {
        return Promise.reject(error)
      },
    )

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      error => {
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized, logging out...')
        }
        return Promise.reject(error)
      },
    )
  }

  protected get<T>(
    url: string,
    config?: InternalAxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config)
  }

  protected post<T>(
    url: string,
    data: any,
    config?: InternalAxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config)
  }

  protected delete<T>(
    url: string,
    config?: InternalAxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config)
  }

  protected put<T>(
    url: string,
    data: any,
    config?: InternalAxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config)
  }
}
