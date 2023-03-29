import {Supplement} from './resources/supplement.js'

const supplement = new Supplement()
const data = await supplement.readMain()
const localData = await supplement.readLocalData(data)
const phoneNumberMetadata = await supplement.readPhoneNumberMetadata()
await supplement.write(data, localData, phoneNumberMetadata)