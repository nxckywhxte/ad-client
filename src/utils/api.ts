const SERVER_HOST =
  (process.env.SERVER_HOST as string) ||
  'localhost'
const SERVER_PORT =
  (process.env.SERVER_PORT as string) || '1010'

export const SERVER_BASE_URL = `http://${SERVER_HOST}:${SERVER_PORT}/api/v1`
