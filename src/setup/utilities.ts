import pino from 'pino'
import {XMLParser} from 'fast-xml-parser'
import {access, constants} from 'node:fs/promises'
import path from 'node:path'

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

export async function isFileExists(filepath: string) {
    try {
        await access(filepath, constants.F_OK)
        return true
    } catch (e) {
        return false
    }
}

export function stringify (obj: unknown) {
    return JSON.stringify(obj, null, 4)
}

export function isArray (v: unknown): v is unknown[] {
    return (!!v) && (v.constructor === Array)
}

export function isObject (v: unknown): v is object {
    return (!!v) && (v.constructor === Object)
}
