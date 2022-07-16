import http from './http';

export async function login(data) {
  return http.post('/auth/login', data);
}
