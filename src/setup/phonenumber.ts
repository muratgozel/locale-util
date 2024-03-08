import {xmlParser} from './utilities'

export async function fetchAndParsePhoneNumMetadata (): Promise<Record<string, number>> {
    const url = process.env.npm_package_config_phonenumber_metadata_endpoint
    const res = await fetch(url)
    const data = await res.text()

    return (xmlParser
        .parse(data) as XmlParseResult)
        .phoneNumberMetadata
        .territories
        .territory
        .reduce((memo: Record<string, number>, item) => {
            if (item.id.length === 2 && !/[^A-Z]/.test(item.id)) {
                memo[item.id] = parseFloat(item.countryCode)
            }
            return memo
        }, {})
}

interface XmlParseResult {
    phoneNumberMetadata: {
        territories: {
            territory: Item[]
        }
    }
}

interface Item {
    id: string
    countryCode: string
}
