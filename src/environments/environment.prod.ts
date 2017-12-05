export const environment = {
  production: true,
    backend: {
        protocol: 'http',
        host: '127.0.0.1',
        port: '9000',
        endpoints: {
            allOptions: '/api/options',
            oneOption: '/api/option/:id'
        }
    }
};
