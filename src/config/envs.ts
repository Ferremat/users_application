import Joi from 'joi';
import 'dotenv/config';

interface EnvVars {
    PORT: number;
    DATABASE_URL: string;
    // 1. AÑADIR LAS PROPIEDADES A LA INTERFACE
    MS_USERS_HOST: string; 
    MS_USERS_PORT: number; 
}

const envsSchema = Joi.object({
    PORT: Joi.number().required(),
    DATABASE_URL: Joi.string().required(),
    // 2. AÑADIR LAS PROPIEDADES AL ESQUEMA DE VALIDACIÓN
    MS_USERS_HOST: Joi.string().required(),
    MS_USERS_PORT: Joi.number().required(),
}).unknown(true);

const { error, value: envsValidate } = envsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = {
    PORT: Number(envsValidate.PORT),
    DATABASE_URL: envsValidate.DATABASE_URL,
    MS_USERS_HOST: envsValidate.MS_USERS_HOST, 
    MS_USERS_PORT: Number(envsValidate.MS_USERS_PORT)
};

console.log(envVars);

export const envs = {
    PORT: envVars.PORT,
    DATABASE_URL: envVars.DATABASE_URL,
    MS_USERS_HOST: envVars.MS_USERS_HOST,
    MS_USERS_PORT: envVars.MS_USERS_PORT,
};

export default envVars;