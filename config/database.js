module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-52-54-237-144.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd5ohgoo4bdcepo'),
      user: env('DATABASE_USERNAME', 'qxqdxhlxeyzuwf'),
      password: env('DATABASE_PASSWORD', '19802f55412fe66b106e1fdde673c48016ca7dd61a675a91ed4a0264f9800b99'),
      ssl: {
        rejectUnauthorized: false
      },
    },
  },
});
