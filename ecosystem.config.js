module.exports = {
  apps: [
    {
      name: 'sorvyt',
      script: './dist/src/main.js',
      instances: 0,
      merge_logs: true,
      autorestart: true,
      wait_ready: true,
      listen_timeout: 50000,
      kill_timeout: 5000,
    },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
