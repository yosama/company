export default () => ({
  api: {
    host: process.env.API_HOST || '0.0.0.0',
    port: parseInt(process.env.API_PORT, 10) || 3000,
    context: process.env.ENDPOINT_ROUTE
  },
});