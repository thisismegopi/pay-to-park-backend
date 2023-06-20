import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT, 10) || 3000,
}));
