import type {CurrencyCode} from './currencyCodes'

export type Currency = {
    code: CurrencyCode,
    num: number,
    nativeName: string,
    englishName: string
}

export const currencies: Currency[] = [
    {
        'code': 'AED',
        'num': 784,
        'englishName': 'United Arab Emirates Dirham',
        'nativeName': 'درهم إماراتي'
    },
    {
        'code': 'AFN',
        'num': 971,
        'englishName': 'Afghan Afghani',
        'nativeName': 'افغانی افغانستان'
    },
    {
        'code': 'ALL',
        'num': 8,
        'englishName': 'Albanian Lek',
        'nativeName': 'Leku shqiptar'
    },
    {
        'code': 'AMD',
        'num': 51,
        'englishName': 'Armenian Dram',
        'nativeName': 'հայկական դրամ'
    },
    {
        'code': 'ANG',
        'num': 532,
        'englishName': 'Netherlands Antillean Guilder',
        'nativeName': 'Nederlands-Antilliaanse gulden'
    },
    {
        'code': 'AOA',
        'num': 973,
        'englishName': 'Angolan Kwanza',
        'nativeName': 'Kwanza angolano'
    },
    {
        'code': 'ARS',
        'num': 32,
        'englishName': 'Argentine Peso',
        'nativeName': 'peso argentino'
    },
    {
        'code': 'AUD',
        'num': 36,
        'englishName': 'Australian Dollar',
        'nativeName': 'Australian Dollar'
    },
    {
        'code': 'AWG',
        'num': 533,
        'englishName': 'Aruban Florin',
        'nativeName': 'Arubaanse gulden'
    },
    {
        'code': 'AZN',
        'num': 944,
        'englishName': 'Azerbaijani Manat',
        'nativeName': 'Azərbaycan Manatı'
    },
    {
        'code': 'BAM',
        'num': 977,
        'englishName': 'Bosnia-Herzegovina Convertible Mark',
        'nativeName': 'Bosanskohercegovačka konvertibilna marka'
    },
    {
        'code': 'BBD',
        'num': 52,
        'englishName': 'Barbadian Dollar',
        'nativeName': 'Barbadian Dollar'
    },
    {
        'code': 'BDT',
        'num': 50,
        'englishName': 'Bangladeshi Taka',
        'nativeName': 'বাংলাদেশী টাকা'
    },
    {
        'code': 'BGN',
        'num': 975,
        'englishName': 'Bulgarian Lev',
        'nativeName': 'Български лев'
    },
    {
        'code': 'BHD',
        'num': 48,
        'englishName': 'Bahraini Dinar',
        'nativeName': 'دينار بحريني'
    },
    {
        'code': 'BIF',
        'num': 108,
        'englishName': 'Burundian Franc',
        'nativeName': 'Ifaranga ry’Uburundi'
    },
    {
        'code': 'BMD',
        'num': 60,
        'englishName': 'Bermudan Dollar',
        'nativeName': 'Bermudan Dollar'
    },
    {
        'code': 'BND',
        'num': 96,
        'englishName': 'Brunei Dollar',
        'nativeName': 'Dolar Brunei'
    },
    {
        'code': 'BOB',
        'num': 68,
        'englishName': 'Bolivian Boliviano',
        'nativeName': 'boliviano'
    },
    {
        'code': 'BRL',
        'num': 986,
        'englishName': 'Brazilian Real',
        'nativeName': 'Real brasileiro'
    },
    {
        'code': 'BSD',
        'num': 44,
        'englishName': 'Bahamian Dollar',
        'nativeName': 'Bahamian Dollar'
    },
    {
        'code': 'BTN',
        'num': 64,
        'englishName': 'Bhutanese Ngultrum',
        'nativeName': 'དངུལ་ཀྲམ'
    },
    {
        'code': 'BWP',
        'num': 72,
        'englishName': 'Botswanan Pula',
        'nativeName': 'Botswanan Pula'
    },
    {
        'code': 'BZD',
        'num': 84,
        'englishName': 'Belize Dollar',
        'nativeName': 'Belize Dollar'
    },
    {
        'code': 'CAD',
        'num': 124,
        'englishName': 'Canadian Dollar',
        'nativeName': 'Canadian Dollar'
    },
    {
        'code': 'CDF',
        'num': 976,
        'englishName': 'Congolese Franc',
        'nativeName': 'franc congolais'
    },
    {
        'code': 'CHF',
        'num': 756,
        'englishName': 'Swiss Franc',
        'nativeName': 'Schweizer Franken'
    },
    {
        'code': 'CLP',
        'num': 152,
        'englishName': 'Chilean Peso',
        'nativeName': 'peso chileno'
    },
    {
        'code': 'CNY',
        'num': 156,
        'englishName': 'Chinese Yuan',
        'nativeName': '人民币'
    },
    {
        'code': 'COP',
        'num': 170,
        'englishName': 'Colombian Peso',
        'nativeName': 'peso colombiano'
    },
    {
        'code': 'CRC',
        'num': 188,
        'englishName': 'Costa Rican Colón',
        'nativeName': 'colón costarricense'
    },
    {
        'code': 'CUP',
        'num': 192,
        'englishName': 'Cuban Peso',
        'nativeName': 'peso cubano'
    },
    {
        'code': 'CVE',
        'num': 132,
        'englishName': 'Cape Verdean Escudo',
        'nativeName': 'Escudo cabo-verdiano'
    },
    {
        'code': 'CZK',
        'num': 203,
        'englishName': 'Czech Koruna',
        'nativeName': 'česká koruna'
    },
    {
        'code': 'DJF',
        'num': 262,
        'englishName': 'Djiboutian Franc',
        'nativeName': 'فرنك جيبوتي'
    },
    {
        'code': 'DKK',
        'num': 208,
        'englishName': 'Danish Krone',
        'nativeName': 'dansk krone'
    },
    {
        'code': 'DOP',
        'num': 214,
        'englishName': 'Dominican Peso',
        'nativeName': 'peso dominicano'
    },
    {
        'code': 'DZD',
        'num': 12,
        'englishName': 'Algerian Dinar',
        'nativeName': 'دينار جزائري'
    },
    {
        'code': 'EGP',
        'num': 818,
        'englishName': 'Egyptian Pound',
        'nativeName': 'جنيه مصري'
    },
    {
        'code': 'ERN',
        'num': 232,
        'englishName': 'Eritrean Nakfa',
        'nativeName': 'Eritrean Nakfa'
    },
    {
        'code': 'ETB',
        'num': 230,
        'englishName': 'Ethiopian Birr',
        'nativeName': 'የኢትዮጵያ ብር'
    },
    {
        'code': 'EUR',
        'num': 978,
        'englishName': 'Euro',
        'nativeName': 'euro'
    },
    {
        'code': 'FJD',
        'num': 242,
        'englishName': 'Fijian Dollar',
        'nativeName': 'Fijian Dollar'
    },
    {
        'code': 'FKP',
        'num': 238,
        'englishName': 'Falkland Islands Pound',
        'nativeName': 'Falkland Islands Pound'
    },
    {
        'code': 'GBP',
        'num': 826,
        'englishName': 'British Pound',
        'nativeName': 'British Pound'
    },
    {
        'code': 'GEL',
        'num': 981,
        'englishName': 'Georgian Lari',
        'nativeName': 'ქართული ლარი'
    },
    {
        'code': 'GHS',
        'num': 936,
        'englishName': 'Ghanaian Cedi',
        'nativeName': 'Ghanaian Cedi'
    },
    {
        'code': 'GIP',
        'num': 292,
        'englishName': 'Gibraltar Pound',
        'nativeName': 'Gibraltar Pound'
    },
    {
        'code': 'GMD',
        'num': 270,
        'englishName': 'Gambian Dalasi',
        'nativeName': 'Gambian Dalasi'
    },
    {
        'code': 'GNF',
        'num': 324,
        'englishName': 'Guinean Franc',
        'nativeName': 'franc guinéen'
    },
    {
        'code': 'GTQ',
        'num': 320,
        'englishName': 'Guatemalan Quetzal',
        'nativeName': 'quetzal guatemalteco'
    },
    {
        'code': 'GYD',
        'num': 328,
        'englishName': 'Guyanaese Dollar',
        'nativeName': 'Guyanaese Dollar'
    },
    {
        'code': 'HKD',
        'num': 344,
        'englishName': 'Hong Kong Dollar',
        'nativeName': 'Hong Kong Dollar'
    },
    {
        'code': 'HNL',
        'num': 340,
        'englishName': 'Honduran Lempira',
        'nativeName': 'lempira hondureño'
    },
    {
        'code': 'HTG',
        'num': 332,
        'englishName': 'Haitian Gourde',
        'nativeName': ''
    },
    {
        'code': 'HUF',
        'num': 348,
        'englishName': 'Hungarian Forint',
        'nativeName': 'magyar forint'
    },
    {
        'code': 'IDR',
        'num': 360,
        'englishName': 'Indonesian Rupiah',
        'nativeName': 'Rupiah Indonesia'
    },
    {
        'code': 'ILS',
        'num': 376,
        'englishName': 'Israeli New Shekel',
        'nativeName': 'שקל חדש'
    },
    {
        'code': 'INR',
        'num': 356,
        'englishName': 'Indian Rupee',
        'nativeName': 'भारतीय रुपया'
    },
    {
        'code': 'IQD',
        'num': 368,
        'englishName': 'Iraqi Dinar',
        'nativeName': 'دينار عراقي'
    },
    {
        'code': 'IRR',
        'num': 364,
        'englishName': 'Iranian Rial',
        'nativeName': 'ریال ایران'
    },
    {
        'code': 'ISK',
        'num': 352,
        'englishName': 'Icelandic Króna',
        'nativeName': 'íslensk króna'
    },
    {
        'code': 'JMD',
        'num': 388,
        'englishName': 'Jamaican Dollar',
        'nativeName': 'Jamaican Dollar'
    },
    {
        'code': 'JOD',
        'num': 400,
        'englishName': 'Jordanian Dinar',
        'nativeName': 'دينار أردني'
    },
    {
        'code': 'JPY',
        'num': 392,
        'englishName': 'Japanese Yen',
        'nativeName': '日本円'
    },
    {
        'code': 'KES',
        'num': 404,
        'englishName': 'Kenyan Shilling',
        'nativeName': 'Shilingi ya Kenya'
    },
    {
        'code': 'KGS',
        'num': 417,
        'englishName': 'Kyrgystani Som',
        'nativeName': 'Кыргызстан сому'
    },
    {
        'code': 'KHR',
        'num': 116,
        'englishName': 'Cambodian Riel',
        'nativeName': 'រៀល​កម្ពុជា'
    },
    {
        'code': 'KMF',
        'num': 174,
        'englishName': 'Comorian Franc',
        'nativeName': 'فرنك جزر القمر'
    },
    {
        'code': 'KPW',
        'num': 408,
        'englishName': 'North Korean Won',
        'nativeName': '조선 민주주의 인민 공화국 원'
    },
    {
        'code': 'KRW',
        'num': 410,
        'englishName': 'South Korean Won',
        'nativeName': '대한민국 원'
    },
    {
        'code': 'KWD',
        'num': 414,
        'englishName': 'Kuwaiti Dinar',
        'nativeName': 'دينار كويتي'
    },
    {
        'code': 'KYD',
        'num': 136,
        'englishName': 'Cayman Islands Dollar',
        'nativeName': 'Cayman Islands Dollar'
    },
    {
        'code': 'KZT',
        'num': 398,
        'englishName': 'Kazakhstani Tenge',
        'nativeName': 'казахский тенге'
    },
    {
        'code': 'LAK',
        'num': 418,
        'englishName': 'Laotian Kip',
        'nativeName': 'ລາວ ກີບ'
    },
    {
        'code': 'LBP',
        'num': 422,
        'englishName': 'Lebanese Pound',
        'nativeName': 'جنيه لبناني'
    },
    {
        'code': 'LKR',
        'num': 144,
        'englishName': 'Sri Lankan Rupee',
        'nativeName': 'ශ්‍රී ලංකා රුපියල'
    },
    {
        'code': 'LRD',
        'num': 430,
        'englishName': 'Liberian Dollar',
        'nativeName': 'Liberian Dollar'
    },
    {
        'code': 'LYD',
        'num': 434,
        'englishName': 'Libyan Dinar',
        'nativeName': 'دينار ليبي'
    },
    {
        'code': 'MAD',
        'num': 504,
        'englishName': 'Moroccan Dirham',
        'nativeName': 'درهم مغربي'
    },
    {
        'code': 'MDL',
        'num': 498,
        'englishName': 'Moldovan Leu',
        'nativeName': 'leu moldovenesc'
    },
    {
        'code': 'MGA',
        'num': 969,
        'englishName': 'Malagasy Ariary',
        'nativeName': 'Ariary'
    },
    {
        'code': 'MKD',
        'num': 807,
        'englishName': 'Macedonian Denar',
        'nativeName': 'Македонски денар'
    },
    {
        'code': 'MMK',
        'num': 104,
        'englishName': 'Myanmar Kyat',
        'nativeName': 'မြန်မာ ကျပ်'
    },
    {
        'code': 'MNT',
        'num': 496,
        'englishName': 'Mongolian Tugrik',
        'nativeName': 'Монгол төгрөг'
    },
    {
        'code': 'MOP',
        'num': 446,
        'englishName': 'Macanese Pataca',
        'nativeName': 'Pataca macaense'
    },
    {
        'code': 'MRU',
        'num': 929,
        'englishName': 'Mauritanian Ouguiya',
        'nativeName': 'أوقية موريتانية'
    },
    {
        'code': 'MUR',
        'num': 480,
        'englishName': 'Mauritian Rupee',
        'nativeName': 'Mauritian Rupee'
    },
    {
        'code': 'MVR',
        'num': 462,
        'englishName': 'Maldivian Rufiyaa',
        'nativeName': ''
    },
    {
        'code': 'MWK',
        'num': 454,
        'englishName': 'Malawian Kwacha',
        'nativeName': 'Malawian Kwacha'
    },
    {
        'code': 'MXN',
        'num': 484,
        'englishName': 'Mexican Peso',
        'nativeName': 'peso mexicano'
    },
    {
        'code': 'MYR',
        'num': 458,
        'englishName': 'Malaysian Ringgit',
        'nativeName': 'Ringgit Malaysia'
    },
    {
        'code': 'MZN',
        'num': 943,
        'englishName': 'Mozambican Metical',
        'nativeName': 'Metical moçambicano'
    },
    {
        'code': 'NAD',
        'num': 516,
        'englishName': 'Namibian Dollar',
        'nativeName': 'Namibian Dollar'
    },
    {
        'code': 'NGN',
        'num': 566,
        'englishName': 'Nigerian Naira',
        'nativeName': 'Nigerian Naira'
    },
    {
        'code': 'NIO',
        'num': 558,
        'englishName': 'Nicaraguan Córdoba',
        'nativeName': 'córdoba oro'
    },
    {
        'code': 'NOK',
        'num': 578,
        'englishName': 'Norwegian Krone',
        'nativeName': 'Norwegian Krone'
    },
    {
        'code': 'NPR',
        'num': 524,
        'englishName': 'Nepalese Rupee',
        'nativeName': 'नेपाली रूपैयाँ'
    },
    {
        'code': 'NZD',
        'num': 554,
        'englishName': 'New Zealand Dollar',
        'nativeName': 'New Zealand Dollar'
    },
    {
        'code': 'OMR',
        'num': 512,
        'englishName': 'Omani Rial',
        'nativeName': 'ريال عماني'
    },
    {
        'code': 'PAB',
        'num': 590,
        'englishName': 'Panamanian Balboa',
        'nativeName': 'balboa panameño'
    },
    {
        'code': 'PEN',
        'num': 604,
        'englishName': 'Peruvian Sol',
        'nativeName': 'sol peruano'
    },
    {
        'code': 'PGK',
        'num': 598,
        'englishName': 'Papua New Guinean Kina',
        'nativeName': ''
    },
    {
        'code': 'PHP',
        'num': 608,
        'englishName': 'Philippine Peso',
        'nativeName': 'Philippine Peso'
    },
    {
        'code': 'PKR',
        'num': 586,
        'englishName': 'Pakistani Rupee',
        'nativeName': 'پاکستانی روپیہ'
    },
    {
        'code': 'PLN',
        'num': 985,
        'englishName': 'Polish Zloty',
        'nativeName': 'złoty polski'
    },
    {
        'code': 'PYG',
        'num': 600,
        'englishName': 'Paraguayan Guarani',
        'nativeName': ''
    },
    {
        'code': 'QAR',
        'num': 634,
        'englishName': 'Qatari Riyal',
        'nativeName': 'ريال قطري'
    },
    {
        'code': 'RON',
        'num': 946,
        'englishName': 'Romanian Leu',
        'nativeName': 'leu românesc'
    },
    {
        'code': 'RSD',
        'num': 941,
        'englishName': 'Serbian Dinar',
        'nativeName': 'српски динар'
    },
    {
        'code': 'RUB',
        'num': 643,
        'englishName': 'Russian Ruble',
        'nativeName': 'российский рубль'
    },
    {
        'code': 'RWF',
        'num': 646,
        'englishName': 'Rwandan Franc',
        'nativeName': ''
    },
    {
        'code': 'SAR',
        'num': 682,
        'englishName': 'Saudi Riyal',
        'nativeName': 'ريال سعودي'
    },
    {
        'code': 'SBD',
        'num': 90,
        'englishName': 'Solomon Islands Dollar',
        'nativeName': 'Solomon Islands Dollar'
    },
    {
        'code': 'SCR',
        'num': 690,
        'englishName': 'Seychellois Rupee',
        'nativeName': 'roupie des Seychelles'
    },
    {
        'code': 'SDG',
        'num': 938,
        'englishName': 'Sudanese Pound',
        'nativeName': 'جنيه سوداني'
    },
    {
        'code': 'SEK',
        'num': 752,
        'englishName': 'Swedish Krona',
        'nativeName': 'svensk krona'
    },
    {
        'code': 'SGD',
        'num': 702,
        'englishName': 'Singapore Dollar',
        'nativeName': 'Singapore Dollar'
    },
    {
        'code': 'SHP',
        'num': 654,
        'englishName': 'St. Helena Pound',
        'nativeName': 'St. Helena Pound'
    },
    {
        'code': 'SOS',
        'num': 706,
        'englishName': 'Somali Shilling',
        'nativeName': 'Shilingka Soomaaliya'
    },
    {
        'code': 'SRD',
        'num': 968,
        'englishName': 'Surinamese Dollar',
        'nativeName': 'Surinaamse dollar'
    },
    {
        'code': 'SSP',
        'num': 728,
        'englishName': 'South Sudanese Pound',
        'nativeName': 'South Sudanese Pound'
    },
    {
        'code': 'STN',
        'num': 930,
        'englishName': 'São Tomé & Príncipe Dobra',
        'nativeName': 'Dobra de São Tomé e Príncipe'
    },
    {
        'code': 'SYP',
        'num': 760,
        'englishName': 'Syrian Pound',
        'nativeName': 'ليرة سورية'
    },
    {
        'code': 'SZL',
        'num': 748,
        'englishName': 'Swazi Lilangeni',
        'nativeName': 'Swazi Lilangeni'
    },
    {
        'code': 'THB',
        'num': 764,
        'englishName': 'Thai Baht',
        'nativeName': 'บาท'
    },
    {
        'code': 'TJS',
        'num': 972,
        'englishName': 'Tajikistani Somoni',
        'nativeName': 'Сомонӣ'
    },
    {
        'code': 'TMT',
        'num': 934,
        'englishName': 'Turkmenistani Manat',
        'nativeName': 'Türkmen manady'
    },
    {
        'code': 'TND',
        'num': 788,
        'englishName': 'Tunisian Dinar',
        'nativeName': 'دينار تونسي'
    },
    {
        'code': 'TOP',
        'num': 776,
        'englishName': 'Tongan Paʻanga',
        'nativeName': 'Paʻanga fakatonga'
    },
    {
        'code': 'TRY',
        'num': 949,
        'englishName': 'Turkish Lira',
        'nativeName': 'Türk lirası'
    },
    {
        'code': 'TTD',
        'num': 780,
        'englishName': 'Trinidad & Tobago Dollar',
        'nativeName': 'Trinidad & Tobago Dollar'
    },
    {
        'code': 'TWD',
        'num': 901,
        'englishName': 'New Taiwan Dollar',
        'nativeName': 'New Taiwan Dollar'
    },
    {
        'code': 'TZS',
        'num': 834,
        'englishName': 'Tanzanian Shilling',
        'nativeName': 'Shilingi ya Tanzania'
    },
    {
        'code': 'UAH',
        'num': 980,
        'englishName': 'Ukrainian Hryvnia',
        'nativeName': 'українська гривня'
    },
    {
        'code': 'UGX',
        'num': 800,
        'englishName': 'Ugandan Shilling',
        'nativeName': 'Shilingi ya Uganda'
    },
    {
        'code': 'USD',
        'num': 840,
        'englishName': 'US Dollar',
        'nativeName': ''
    },
    {
        'code': 'UYU',
        'num': 858,
        'englishName': 'Uruguayan Peso',
        'nativeName': 'peso uruguayo'
    },
    {
        'code': 'UZS',
        'num': 860,
        'englishName': 'Uzbekistani Som',
        'nativeName': 'O‘zbekiston so‘mi'
    },
    {
        'code': 'VES',
        'num': 928,
        'englishName': 'Venezuelan Bolívar',
        'nativeName': 'bolívar venezolano'
    },
    {
        'code': 'VND',
        'num': 704,
        'englishName': 'Vietnamese Dong',
        'nativeName': 'Đồng Việt Nam'
    },
    {
        'code': 'VUV',
        'num': 548,
        'englishName': 'Vanuatu Vatu',
        'nativeName': ''
    },
    {
        'code': 'WST',
        'num': 882,
        'englishName': 'Samoan Tala',
        'nativeName': ''
    },
    {
        'code': 'XAF',
        'num': 950,
        'englishName': 'Central African CFA Franc',
        'nativeName': 'franc CFA (BEAC)'
    },
    {
        'code': 'XCD',
        'num': 951,
        'englishName': 'East Caribbean Dollar',
        'nativeName': 'East Caribbean Dollar'
    },
    {
        'code': 'XOF',
        'num': 952,
        'englishName': 'West African CFA Franc',
        'nativeName': 'franc CFA (BCEAO)'
    },
    {
        'code': 'XPF',
        'num': 953,
        'englishName': 'CFP Franc',
        'nativeName': 'franc CFP'
    },
    {
        'code': 'YER',
        'num': 886,
        'englishName': 'Yemeni Rial',
        'nativeName': 'ريال يمني'
    },
    {
        'code': 'ZAR',
        'num': 710,
        'englishName': 'South African Rand',
        'nativeName': ''
    },
    {
        'code': 'ZMW',
        'num': 967,
        'englishName': 'Zambian Kwacha',
        'nativeName': 'Zambian Kwacha'
    }
]