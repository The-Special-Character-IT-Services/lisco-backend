module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3096bb9eea91541fa24a089811416607'),
  },
});
