import Joi from 'joi';
import 'dotenv/config';

interface EnvVars {
    PORT: number;
    DATABASE_URL: string;
}

const envsSchema = Joi.object({
    PORT: Joi.number().required(),
    DATABASE_URL: Joi.string().required(),
}).unknown(true);

const { error, value: envsValidate } = envsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = {
    PORT: Number(envsValidate.PORT),
    DATABASE_URL: envsValidate.DATABASE_URL,
};

console.log(envVars);

export const envs = {
    PORT: envVars.PORT,
    DATABASE_URL: envVars.DATABASE_URL
};

export default envVars;