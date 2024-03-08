import pino from 'pino'
import {XMLParser} from 'fast-xml-parser'

export const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            minimumLevel: 'info'
        }
    }
})

export const xmlParser = new XMLParser({
    ignoreAttributes: false,
    allowBooleanAttributes: true,
    attributeNamePrefix: ''
})

export function stringify (obj: unknown) {
    return JSON.stringify(obj, null, 4)
}

export function isArray (v: unknown): v is unknown[] {
    return (!!v) && (v.constructor === Array)
}

export function isObject (v: unknown): v is object {
    return (!!v) && (v.constructor === Object)
}
