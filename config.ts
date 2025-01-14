import dotenv from 'dotenv'
dotenv.config()

if (!process.env.DATABASE_URL) {
    throw new Error(`Missing env var: DATABASE_URL`)
}
export const DATABASE_URL = process.env.DATABASE_URL

if (!process.env.TELEGRAM_BOT_TOKEN) {
    throw new Error(`Missing env var: TELEGRAM_BOT_TOKEN`)
}
export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

if (!process.env.OPENAI_API_KEY) {
    throw new Error(`Missing env var: OPENAI_API_KEY`)
}
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY

if (!process.env.AZURE_SPEECH_KEY) {
    throw new Error(`Missing env var: AZURE_SPEECH_KEY`)
}
export const AZURE_SPEECH_KEY = process.env.AZURE_SPEECH_KEY

if (!process.env.AZURE_SPEECH_REGION) {
    throw new Error(`Missing env var: AZURE_SPEECH_REGION`)
}
export const AZURE_SPEECH_REGION = process.env.AZURE_SPEECH_REGION

if (!process.env.WEBHOOK_URL) {
    throw new Error(`Missing env var: WEBHOOK_URL`)
}
export const WEBHOOK_URL = process.env.WEBHOOK_URL

// OPTIONAL

if (!process.env.PORT) {
    console.warn(`Missing env var PORT so defaulting to PORT=8080`)
}
export const PORT = process.env.PORT || 8080

export const MASTER_PROMPT = process.env.MASTER_PROMPT

// const config = {
//     PORT: process.env.PORT || 8080,
//     DATABASE_URL: process.env.DATABASE_URL,
//     TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
//     OPENAI_API_KEY: process.env.OPENAI_API_KEY,
//     AZURE_SPEECH_KEY: process.env.AZURE_SPEECH_KEY,
//     AZURE_SPEECH_REGION: process.env.AZURE_SPEECH_REGION,
//     WEBHOOK_URL: process.env.WEBHOOK_URL,
//     MASTER_PROMPT: process.env.MASTER_PROMPT,
// }
