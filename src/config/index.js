export default {
    app: {
    corsOrigin: process.env.APP_URL_CORS,
    env: process.env.NODE_ENV,
    port: Number(process.env.PORT),
  },
}