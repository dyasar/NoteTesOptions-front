export const environment = {
  production: true,
    backend: {
        protocol: 'http',
        host: '127.0.0.1',
        port: '4443',
        endpoints: {
            allOptions: '/api/options',
            oneOption: '/api/option/:id',
            getNote: '/api/note/:option_id'
        }
    }
};
