import type { AxiosResponse } from 'axios'
import { BaseService } from './BaseService'

import type {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from '@/types/auth'

export class AuthService extends BaseService {
  public login(request: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
    return this.post<LoginResponse>('/auth/login', request)
  }

  public signUp(
    request: SignUpRequest,
  ): Promise<AxiosResponse<SignUpResponse>> {
    return this.post<SignUpResponse>('/users', request)
  }
}
