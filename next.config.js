'use strict';

module.exports = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.API_URL,
        OTHER_ENV_VAR: process.env.OTHER_ENV_VAR,
    },
    images: {
        domains: ['example.com'],
    },
};
