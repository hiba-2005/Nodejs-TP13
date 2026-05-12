module.exports = {
  apps: [
    {
      name: "node-prod-api",
      script: "index.js",
      instances: 2,
      exec_mode: "cluster",
      watch: false,
      max_memory_restart: "250M",
      env: {
        NODE_ENV: "production",
        PORT: 4000
      }
    }
  ]
};