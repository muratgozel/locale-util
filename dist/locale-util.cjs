'use strict';

const countryCodes = [
    'AC',
    'AD',
    'AE',
    'AF',
    'AG',
    'AI',
    'AL',
    'AM',
    'AO',
    'AR',
    'AS',
    'AT',
    'AU',
    'AW',
    'AX',
    'AZ',
    'BA',
    'BB',
    'BD',
    'BE',
    'BF',
    'BG',
    'BH',
    'BI',
    'BJ',
    'BL',
    'BM',
    'BN',
    'BO',
    'BQ',
    'BR',
    'BS',
    'BT',
    'BV',
    'BW',
    'BY',
    'BZ',
    'CA',
    'CC',
    'CD',
    'CF',
    'CG',
    'CH',
    'CI',
    'CK',
    'CL',
    'CM',
    'CN',
    'CO',
    'CR',
    'CU',
    'CV',
    'CW',
    'CX',
    'CY',
    'CZ',
    'DE',
    'DG',
    'DJ',
    'DK',
    'DM',
    'DO',
    'DZ',
    'EA',
    'EC',
    'EE',
    'EG',
    'EH',
    'ER',
    'ES',
    'ET',
    'FI',
    'FJ',
    'FK',
    'FM',
    'FO',
    'FR',
    'GA',
    'GB',
    'GD',
    'GE',
    'GF',
    'GG',
    'GH',
    'GI',
    'GL',
    'GM',
    'GN',
    'GP',
    'GQ',
    'GR',
    'GS',
    'GT',
    'GU',
    'GW',
    'GY',
    'HK',
    'HM',
    'HN',
    'HR',
    'HT',
    'HU',
    'IC',
    'ID',
    'IE',
    'IL',
    'IM',
    'IN',
    'IO',
    'IQ',
    'IR',
    'IS',
    'IT',
    'JE',
    'JM',
    'JO',
    'JP',
    'KE',
    'KG',
    'KH',
    'KI',
    'KM',
    'KN',
    'KP',
    'KR',
    'KW',
    'KY',
    'KZ',
    'LA',
    'LB',
    'LC',
    'LI',
    'LK',
    'LR',
    'LS',
    'LT',
    'LU',
    'LV',
    'LY',
    'MA',
    'MC',
    'MD',
    'ME',
    'MF',
    'MG',
    'MH',
    'MK',
    'ML',
    'MM',
    'MN',
    'MO',
    'MP',
    'MQ',
    'MR',
    'MS',
    'MT',
    'MU',
    'MV',
    'MW',
    'MX',
    'MY',
    'MZ',
    'NA',
    'NC',
    'NE',
    'NF',
    'NG',
    'NI',
    'NL',
    'NO',
    'NP',
    'NR',
    'NU',
    'NZ',
    'OM',
    'PA',
    'PE',
    'PF',
    'PG',
    'PH',
    'PK',
    'PL',
    'PM',
    'PN',
    'PR',
    'PS',
    'PT',
    'PW',
    'PY',
    'QA',
    'RE',
    'RO',
    'RS',
    'RU',
    'RW',
    'SA',
    'SB',
    'SC',
    'SD',
    'SE',
    'SG',
    'SH',
    'SI',
    'SJ',
    'SK',
    'SL',
    'SM',
    'SN',
    'SO',
    'SR',
    'SS',
    'ST',
    'SV',
    'SX',
    'SY',
    'SZ',
    'TA',
    'TC',
    'TD',
    'TF',
    'TG',
    'TH',
    'TJ',
    'TK',
    'TL',
    'TM',
    'TN',
    'TO',
    'TR',
    'TT',
    'TV',
    'TW',
    'TZ',
    'UA',
    'UG',
    'UM',
    'US',
    'UY',
    'UZ',
    'VA',
    'VC',
    'VE',
    'VG',
    'VI',
    'VN',
    'VU',
    'WF',
    'WS',
    'XK',
    'YE',
    'YT',
    'ZA',
    'ZM',
    'ZW'
];

const countries = [
    {
        'code': 'AC',
        'englishName': 'Ascension Island',
        'nativeName': 'Ascension Island'
    },
    {
        'code': 'AD',
        'englishName': 'Andorra',
        'nativeName': 'Andorra'
    },
    {
        'code': 'AE',
        'englishName': 'United Arab Emirates',
        'nativeName': 'الإمارات العربية المتحدة'
    },
    {
        'code': 'AF',
        'englishName': 'Afghanistan',
        'nativeName': 'افغانستان'
    },
    {
        'code': 'AG',
        'englishName': 'Antigua & Barbuda',
        'nativeName': 'Antigua & Barbuda'
    },
    {
        'code': 'AI',
        'englishName': 'Anguilla',
        'nativeName': 'Anguilla'
    },
    {
        'code': 'AL',
        'englishName': 'Albania',
        'nativeName': 'Shqipëri'
    },
    {
        'code': 'AM',
        'englishName': 'Armenia',
        'nativeName': 'Հայաստան'
    },
    {
        'code': 'AO',
        'englishName': 'Angola',
        'nativeName': 'Angola'
    },
    {
        'code': 'AR',
        'englishName': 'Argentina',
        'nativeName': 'Argentina'
    },
    {
        'code': 'AS',
        'englishName': 'American Samoa',
        'nativeName': ''
    },
    {
        'code': 'AT',
        'englishName': 'Austria',
        'nativeName': 'Österreich'
    },
    {
        'code': 'AU',
        'englishName': 'Australia',
        'nativeName': 'Australia'
    },
    {
        'code': 'AW',
        'englishName': 'Aruba',
        'nativeName': 'Aruba'
    },
    {
        'code': 'AX',
        'englishName': 'Åland Islands',
        'nativeName': 'Åland'
    },
    {
        'code': 'AZ',
        'englishName': 'Azerbaijan',
        'nativeName': 'Azərbaycan'
    },
    {
        'code': 'BA',
        'englishName': 'Bosnia & Herzegovina',
        'nativeName': 'Bosna i Hercegovina'
    },
    {
        'code': 'BB',
        'englishName': 'Barbados',
        'nativeName': 'Barbados'
    },
    {
        'code': 'BD',
        'englishName': 'Bangladesh',
        'nativeName': 'বাংলাদেশ'
    },
    {
        'code': 'BE',
        'englishName': 'Belgium',
        'nativeName': 'België'
    },
    {
        'code': 'BF',
        'englishName': 'Burkina Faso',
        'nativeName': 'Burkina Faso'
    },
    {
        'code': 'BG',
        'englishName': 'Bulgaria',
        'nativeName': 'България'
    },
    {
        'code': 'BH',
        'englishName': 'Bahrain',
        'nativeName': 'البحرين'
    },
    {
        'code': 'BI',
        'englishName': 'Burundi',
        'nativeName': 'Uburundi'
    },
    {
        'code': 'BJ',
        'englishName': 'Benin',
        'nativeName': 'Bénin'
    },
    {
        'code': 'BL',
        'englishName': 'St. Barthélemy',
        'nativeName': 'Saint-Barthélemy'
    },
    {
        'code': 'BM',
        'englishName': 'Bermuda',
        'nativeName': 'Bermuda'
    },
    {
        'code': 'BN',
        'englishName': 'Brunei',
        'nativeName': 'Brunei'
    },
    {
        'code': 'BO',
        'englishName': 'Bolivia',
        'nativeName': 'Bolivia'
    },
    {
        'code': 'BQ',
        'englishName': 'Caribbean Netherlands',
        'nativeName': 'Caribisch Nederland'
    },
    {
        'code': 'BR',
        'englishName': 'Brazil',
        'nativeName': 'Brasil'
    },
    {
        'code': 'BS',
        'englishName': 'Bahamas',
        'nativeName': 'Bahamas'
    },
    {
        'code': 'BT',
        'englishName': 'Bhutan',
        'nativeName': 'འབྲུག'
    },
    {
        'code': 'BV',
        'englishName': 'Bouvet Island',
        'nativeName': 'Bouvet Island'
    },
    {
        'code': 'BW',
        'englishName': 'Botswana',
        'nativeName': 'Botswana'
    },
    {
        'code': 'BY',
        'englishName': 'Belarus',
        'nativeName': 'Беларусь'
    },
    {
        'code': 'BZ',
        'englishName': 'Belize',
        'nativeName': 'Belize'
    },
    {
        'code': 'CA',
        'englishName': 'Canada',
        'nativeName': 'Canada'
    },
    {
        'code': 'CC',
        'englishName': 'Cocos (Keeling) Islands',
        'nativeName': 'Cocos (Keeling) Islands'
    },
    {
        'code': 'CD',
        'englishName': 'Congo - Kinshasa',
        'nativeName': 'Congo-Kinshasa'
    },
    {
        'code': 'CF',
        'englishName': 'Central African Republic',
        'nativeName': 'République centrafricaine'
    },
    {
        'code': 'CG',
        'englishName': 'Congo - Brazzaville',
        'nativeName': 'Congo-Brazzaville'
    },
    {
        'code': 'CH',
        'englishName': 'Switzerland',
        'nativeName': 'Schweiz'
    },
    {
        'code': 'CI',
        'englishName': 'Côte d’Ivoire',
        'nativeName': 'Côte d’Ivoire'
    },
    {
        'code': 'CK',
        'englishName': 'Cook Islands',
        'nativeName': 'Cook Islands'
    },
    {
        'code': 'CL',
        'englishName': 'Chile',
        'nativeName': 'Chile'
    },
    {
        'code': 'CM',
        'englishName': 'Cameroon',
        'nativeName': 'Cameroun'
    },
    {
        'code': 'CN',
        'englishName': 'China',
        'nativeName': '中国'
    },
    {
        'code': 'CO',
        'englishName': 'Colombia',
        'nativeName': 'Colombia'
    },
    {
        'code': 'CR',
        'englishName': 'Costa Rica',
        'nativeName': 'Costa Rica'
    },
    {
        'code': 'CU',
        'englishName': 'Cuba',
        'nativeName': 'Cuba'
    },
    {
        'code': 'CV',
        'englishName': 'Cape Verde',
        'nativeName': 'Cabo Verde'
    },
    {
        'code': 'CW',
        'englishName': 'Curaçao',
        'nativeName': 'Curaçao'
    },
    {
        'code': 'CX',
        'englishName': 'Christmas Island',
        'nativeName': 'Christmas Island'
    },
    {
        'code': 'CY',
        'englishName': 'Cyprus',
        'nativeName': 'Κύπρος'
    },
    {
        'code': 'CZ',
        'englishName': 'Czechia',
        'nativeName': 'Česko'
    },
    {
        'code': 'DE',
        'englishName': 'Germany',
        'nativeName': 'Deutschland'
    },
    {
        'code': 'DG',
        'englishName': 'Diego Garcia',
        'nativeName': 'Diego Garcia'
    },
    {
        'code': 'DJ',
        'englishName': 'Djibouti',
        'nativeName': 'جيبوتي'
    },
    {
        'code': 'DK',
        'englishName': 'Denmark',
        'nativeName': 'Danmark'
    },
    {
        'code': 'DM',
        'englishName': 'Dominica',
        'nativeName': 'Dominica'
    },
    {
        'code': 'DO',
        'englishName': 'Dominican Republic',
        'nativeName': 'República Dominicana'
    },
    {
        'code': 'DZ',
        'englishName': 'Algeria',
        'nativeName': 'الجزائر'
    },
    {
        'code': 'EA',
        'englishName': 'Ceuta & Melilla',
        'nativeName': 'Ceuta y Melilla'
    },
    {
        'code': 'EC',
        'englishName': 'Ecuador',
        'nativeName': 'Ecuador'
    },
    {
        'code': 'EE',
        'englishName': 'Estonia',
        'nativeName': 'Eesti'
    },
    {
        'code': 'EG',
        'englishName': 'Egypt',
        'nativeName': 'مصر'
    },
    {
        'code': 'EH',
        'englishName': 'Western Sahara',
        'nativeName': 'الصحراء الغربية'
    },
    {
        'code': 'ER',
        'englishName': 'Eritrea',
        'nativeName': 'Eritrea'
    },
    {
        'code': 'ES',
        'englishName': 'Spain',
        'nativeName': 'España'
    },
    {
        'code': 'ET',
        'englishName': 'Ethiopia',
        'nativeName': 'ኢትዮጵያ'
    },
    {
        'code': 'FI',
        'englishName': 'Finland',
        'nativeName': 'Suomi'
    },
    {
        'code': 'FJ',
        'englishName': 'Fiji',
        'nativeName': 'Fiji'
    },
    {
        'code': 'FK',
        'englishName': 'Falkland Islands',
        'nativeName': 'Falkland Islands'
    },
    {
        'code': 'FM',
        'englishName': 'Micronesia',
        'nativeName': 'Micronesia'
    },
    {
        'code': 'FO',
        'englishName': 'Faroe Islands',
        'nativeName': 'Føroyar'
    },
    {
        'code': 'FR',
        'englishName': 'France',
        'nativeName': 'France'
    },
    {
        'code': 'GA',
        'englishName': 'Gabon',
        'nativeName': 'Gabon'
    },
    {
        'code': 'GB',
        'englishName': 'United Kingdom',
        'nativeName': 'United Kingdom'
    },
    {
        'code': 'GD',
        'englishName': 'Grenada',
        'nativeName': 'Grenada'
    },
    {
        'code': 'GE',
        'englishName': 'Georgia',
        'nativeName': 'საქართველო'
    },
    {
        'code': 'GF',
        'englishName': 'French Guiana',
        'nativeName': 'Guyane française'
    },
    {
        'code': 'GG',
        'englishName': 'Guernsey',
        'nativeName': 'Guernsey'
    },
    {
        'code': 'GH',
        'englishName': 'Ghana',
        'nativeName': 'Ghana'
    },
    {
        'code': 'GI',
        'englishName': 'Gibraltar',
        'nativeName': 'Gibraltar'
    },
    {
        'code': 'GL',
        'englishName': 'Greenland',
        'nativeName': 'Kalaallit Nunaat'
    },
    {
        'code': 'GM',
        'englishName': 'Gambia',
        'nativeName': 'Gambia'
    },
    {
        'code': 'GN',
        'englishName': 'Guinea',
        'nativeName': 'Guinée'
    },
    {
        'code': 'GP',
        'englishName': 'Guadeloupe',
        'nativeName': 'Guadeloupe'
    },
    {
        'code': 'GQ',
        'englishName': 'Equatorial Guinea',
        'nativeName': 'Guinea Ecuatorial'
    },
    {
        'code': 'GR',
        'englishName': 'Greece',
        'nativeName': 'Ελλάδα'
    },
    {
        'code': 'GS',
        'englishName': 'South Georgia & South Sandwich Islands',
        'nativeName': 'South Georgia & South Sandwich Islands'
    },
    {
        'code': 'GT',
        'englishName': 'Guatemala',
        'nativeName': 'Guatemala'
    },
    {
        'code': 'GU',
        'englishName': 'Guam',
        'nativeName': ''
    },
    {
        'code': 'GW',
        'englishName': 'Guinea-Bissau',
        'nativeName': 'Guiné-Bissau'
    },
    {
        'code': 'GY',
        'englishName': 'Guyana',
        'nativeName': 'Guyana'
    },
    {
        'code': 'HK',
        'englishName': 'Hong Kong SAR China',
        'nativeName': 'Hong Kong SAR China'
    },
    {
        'code': 'HM',
        'englishName': 'Heard & McDonald Islands',
        'nativeName': 'Heard & McDonald Islands'
    },
    {
        'code': 'HN',
        'englishName': 'Honduras',
        'nativeName': 'Honduras'
    },
    {
        'code': 'HR',
        'englishName': 'Croatia',
        'nativeName': 'Hrvatska'
    },
    {
        'code': 'HT',
        'englishName': 'Haiti',
        'nativeName': ''
    },
    {
        'code': 'HU',
        'englishName': 'Hungary',
        'nativeName': 'Magyarország'
    },
    {
        'code': 'IC',
        'englishName': 'Canary Islands',
        'nativeName': 'Canarias'
    },
    {
        'code': 'ID',
        'englishName': 'Indonesia',
        'nativeName': 'Indonesia'
    },
    {
        'code': 'IE',
        'englishName': 'Ireland',
        'nativeName': 'Ireland'
    },
    {
        'code': 'IL',
        'englishName': 'Israel',
        'nativeName': 'ישראל'
    },
    {
        'code': 'IM',
        'englishName': 'Isle of Man',
        'nativeName': 'Isle of Man'
    },
    {
        'code': 'IN',
        'englishName': 'India',
        'nativeName': 'भारत'
    },
    {
        'code': 'IO',
        'englishName': 'British Indian Ocean Territory',
        'nativeName': 'British Indian Ocean Territory'
    },
    {
        'code': 'IQ',
        'englishName': 'Iraq',
        'nativeName': 'العراق'
    },
    {
        'code': 'IR',
        'englishName': 'Iran',
        'nativeName': 'ایران'
    },
    {
        'code': 'IS',
        'englishName': 'Iceland',
        'nativeName': 'Ísland'
    },
    {
        'code': 'IT',
        'englishName': 'Italy',
        'nativeName': 'Italia'
    },
    {
        'code': 'JE',
        'englishName': 'Jersey',
        'nativeName': 'Jersey'
    },
    {
        'code': 'JM',
        'englishName': 'Jamaica',
        'nativeName': 'Jamaica'
    },
    {
        'code': 'JO',
        'englishName': 'Jordan',
        'nativeName': 'الأردن'
    },
    {
        'code': 'JP',
        'englishName': 'Japan',
        'nativeName': '日本'
    },
    {
        'code': 'KE',
        'englishName': 'Kenya',
        'nativeName': 'Kenya'
    },
    {
        'code': 'KG',
        'englishName': 'Kyrgyzstan',
        'nativeName': 'Кыргызстан'
    },
    {
        'code': 'KH',
        'englishName': 'Cambodia',
        'nativeName': 'កម្ពុជា'
    },
    {
        'code': 'KI',
        'englishName': 'Kiribati',
        'nativeName': 'Kiribati'
    },
    {
        'code': 'KM',
        'englishName': 'Comoros',
        'nativeName': 'جزر القمر'
    },
    {
        'code': 'KN',
        'englishName': 'St. Kitts & Nevis',
        'nativeName': 'St. Kitts & Nevis'
    },
    {
        'code': 'KP',
        'englishName': 'North Korea',
        'nativeName': '북한'
    },
    {
        'code': 'KR',
        'englishName': 'South Korea',
        'nativeName': '대한민국'
    },
    {
        'code': 'KW',
        'englishName': 'Kuwait',
        'nativeName': 'الكويت'
    },
    {
        'code': 'KY',
        'englishName': 'Cayman Islands',
        'nativeName': 'Cayman Islands'
    },
    {
        'code': 'KZ',
        'englishName': 'Kazakhstan',
        'nativeName': 'Казахстан'
    },
    {
        'code': 'LA',
        'englishName': 'Laos',
        'nativeName': 'ລາວ'
    },
    {
        'code': 'LB',
        'englishName': 'Lebanon',
        'nativeName': 'لبنان'
    },
    {
        'code': 'LC',
        'englishName': 'St. Lucia',
        'nativeName': 'St. Lucia'
    },
    {
        'code': 'LI',
        'englishName': 'Liechtenstein',
        'nativeName': 'Liechtenstein'
    },
    {
        'code': 'LK',
        'englishName': 'Sri Lanka',
        'nativeName': 'ශ්‍රී ලංකාව'
    },
    {
        'code': 'LR',
        'englishName': 'Liberia',
        'nativeName': 'Liberia'
    },
    {
        'code': 'LS',
        'englishName': 'Lesotho',
        'nativeName': ''
    },
    {
        'code': 'LT',
        'englishName': 'Lithuania',
        'nativeName': 'Lietuva'
    },
    {
        'code': 'LU',
        'englishName': 'Luxembourg',
        'nativeName': 'Luxembourg'
    },
    {
        'code': 'LV',
        'englishName': 'Latvia',
        'nativeName': 'Latvija'
    },
    {
        'code': 'LY',
        'englishName': 'Libya',
        'nativeName': 'ليبيا'
    },
    {
        'code': 'MA',
        'englishName': 'Morocco',
        'nativeName': 'المغرب'
    },
    {
        'code': 'MC',
        'englishName': 'Monaco',
        'nativeName': 'Monaco'
    },
    {
        'code': 'MD',
        'englishName': 'Moldova',
        'nativeName': 'Republica Moldova'
    },
    {
        'code': 'ME',
        'englishName': 'Montenegro',
        'nativeName': 'Montenegro'
    },
    {
        'code': 'MF',
        'englishName': 'St. Martin',
        'nativeName': 'Saint-Martin'
    },
    {
        'code': 'MG',
        'englishName': 'Madagascar',
        'nativeName': 'Madagasikara'
    },
    {
        'code': 'MH',
        'englishName': 'Marshall Islands',
        'nativeName': 'Marshall Islands'
    },
    {
        'code': 'MK',
        'englishName': 'North Macedonia',
        'nativeName': 'Северна Македонија'
    },
    {
        'code': 'ML',
        'englishName': 'Mali',
        'nativeName': 'Mali'
    },
    {
        'code': 'MM',
        'englishName': 'Myanmar (Burma)',
        'nativeName': 'မြန်မာ'
    },
    {
        'code': 'MN',
        'englishName': 'Mongolia',
        'nativeName': 'Монгол'
    },
    {
        'code': 'MO',
        'englishName': 'Macao SAR China',
        'nativeName': 'Macau, RAE da China'
    },
    {
        'code': 'MP',
        'englishName': 'Northern Mariana Islands',
        'nativeName': 'Northern Mariana Islands'
    },
    {
        'code': 'MQ',
        'englishName': 'Martinique',
        'nativeName': 'Martinique'
    },
    {
        'code': 'MR',
        'englishName': 'Mauritania',
        'nativeName': 'موريتانيا'
    },
    {
        'code': 'MS',
        'englishName': 'Montserrat',
        'nativeName': 'Montserrat'
    },
    {
        'code': 'MT',
        'englishName': 'Malta',
        'nativeName': 'Malta'
    },
    {
        'code': 'MU',
        'englishName': 'Mauritius',
        'nativeName': 'Mauritius'
    },
    {
        'code': 'MV',
        'englishName': 'Maldives',
        'nativeName': ''
    },
    {
        'code': 'MW',
        'englishName': 'Malawi',
        'nativeName': 'Malawi'
    },
    {
        'code': 'MX',
        'englishName': 'Mexico',
        'nativeName': 'México'
    },
    {
        'code': 'MY',
        'englishName': 'Malaysia',
        'nativeName': 'Malaysia'
    },
    {
        'code': 'MZ',
        'englishName': 'Mozambique',
        'nativeName': 'Moçambique'
    },
    {
        'code': 'NA',
        'englishName': 'Namibia',
        'nativeName': 'Namibia'
    },
    {
        'code': 'NC',
        'englishName': 'New Caledonia',
        'nativeName': 'Nouvelle-Calédonie'
    },
    {
        'code': 'NE',
        'englishName': 'Niger',
        'nativeName': 'Niger'
    },
    {
        'code': 'NF',
        'englishName': 'Norfolk Island',
        'nativeName': 'Norfolk Island'
    },
    {
        'code': 'NG',
        'englishName': 'Nigeria',
        'nativeName': 'Nigeria'
    },
    {
        'code': 'NI',
        'englishName': 'Nicaragua',
        'nativeName': 'Nicaragua'
    },
    {
        'code': 'NL',
        'englishName': 'Netherlands',
        'nativeName': 'Nederland'
    },
    {
        'code': 'NO',
        'englishName': 'Norway',
        'nativeName': ''
    },
    {
        'code': 'NP',
        'englishName': 'Nepal',
        'nativeName': 'नेपाल'
    },
    {
        'code': 'NR',
        'englishName': 'Nauru',
        'nativeName': 'Nauru'
    },
    {
        'code': 'NU',
        'englishName': 'Niue',
        'nativeName': 'Niue'
    },
    {
        'code': 'NZ',
        'englishName': 'New Zealand',
        'nativeName': 'Aotearoa'
    },
    {
        'code': 'OM',
        'englishName': 'Oman',
        'nativeName': 'عُمان'
    },
    {
        'code': 'PA',
        'englishName': 'Panama',
        'nativeName': 'Panamá'
    },
    {
        'code': 'PE',
        'englishName': 'Peru',
        'nativeName': 'Perú'
    },
    {
        'code': 'PF',
        'englishName': 'French Polynesia',
        'nativeName': 'Polynésie française'
    },
    {
        'code': 'PG',
        'englishName': 'Papua New Guinea',
        'nativeName': ''
    },
    {
        'code': 'PH',
        'englishName': 'Philippines',
        'nativeName': 'Philippines'
    },
    {
        'code': 'PK',
        'englishName': 'Pakistan',
        'nativeName': 'پاکستان'
    },
    {
        'code': 'PL',
        'englishName': 'Poland',
        'nativeName': 'Polska'
    },
    {
        'code': 'PM',
        'englishName': 'St. Pierre & Miquelon',
        'nativeName': 'Saint-Pierre-et-Miquelon'
    },
    {
        'code': 'PN',
        'englishName': 'Pitcairn Islands',
        'nativeName': 'Pitcairn Islands'
    },
    {
        'code': 'PR',
        'englishName': 'Puerto Rico',
        'nativeName': 'Puerto Rico'
    },
    {
        'code': 'PS',
        'englishName': 'Palestinian Territories',
        'nativeName': 'الأراضي الفلسطينية'
    },
    {
        'code': 'PT',
        'englishName': 'Portugal',
        'nativeName': 'Portugal'
    },
    {
        'code': 'PW',
        'englishName': 'Palau',
        'nativeName': ''
    },
    {
        'code': 'PY',
        'englishName': 'Paraguay',
        'nativeName': ''
    },
    {
        'code': 'QA',
        'englishName': 'Qatar',
        'nativeName': 'قطر'
    },
    {
        'code': 'RE',
        'englishName': 'Réunion',
        'nativeName': 'La Réunion'
    },
    {
        'code': 'RO',
        'englishName': 'Romania',
        'nativeName': 'România'
    },
    {
        'code': 'RS',
        'englishName': 'Serbia',
        'nativeName': 'Србија'
    },
    {
        'code': 'RU',
        'englishName': 'Russia',
        'nativeName': 'Россия'
    },
    {
        'code': 'RW',
        'englishName': 'Rwanda',
        'nativeName': 'U Rwanda'
    },
    {
        'code': 'SA',
        'englishName': 'Saudi Arabia',
        'nativeName': 'المملكة العربية السعودية'
    },
    {
        'code': 'SB',
        'englishName': 'Solomon Islands',
        'nativeName': 'Solomon Islands'
    },
    {
        'code': 'SC',
        'englishName': 'Seychelles',
        'nativeName': 'Seychelles'
    },
    {
        'code': 'SD',
        'englishName': 'Sudan',
        'nativeName': 'السودان'
    },
    {
        'code': 'SE',
        'englishName': 'Sweden',
        'nativeName': 'Sverige'
    },
    {
        'code': 'SG',
        'englishName': 'Singapore',
        'nativeName': 'Singapore'
    },
    {
        'code': 'SH',
        'englishName': 'St. Helena',
        'nativeName': 'St. Helena'
    },
    {
        'code': 'SI',
        'englishName': 'Slovenia',
        'nativeName': 'Slovenija'
    },
    {
        'code': 'SJ',
        'englishName': 'Svalbard & Jan Mayen',
        'nativeName': ''
    },
    {
        'code': 'SK',
        'englishName': 'Slovakia',
        'nativeName': 'Slovensko'
    },
    {
        'code': 'SL',
        'englishName': 'Sierra Leone',
        'nativeName': 'Sierra Leone'
    },
    {
        'code': 'SM',
        'englishName': 'San Marino',
        'nativeName': 'San Marino'
    },
    {
        'code': 'SN',
        'englishName': 'Senegal',
        'nativeName': 'Sénégal'
    },
    {
        'code': 'SO',
        'englishName': 'Somalia',
        'nativeName': 'Soomaaliya'
    },
    {
        'code': 'SR',
        'englishName': 'Suriname',
        'nativeName': 'Suriname'
    },
    {
        'code': 'SS',
        'englishName': 'South Sudan',
        'nativeName': 'South Sudan'
    },
    {
        'code': 'ST',
        'englishName': 'São Tomé & Príncipe',
        'nativeName': 'São Tomé e Príncipe'
    },
    {
        'code': 'SV',
        'englishName': 'El Salvador',
        'nativeName': 'El Salvador'
    },
    {
        'code': 'SX',
        'englishName': 'Sint Maarten',
        'nativeName': 'Sint Maarten'
    },
    {
        'code': 'SY',
        'englishName': 'Syria',
        'nativeName': 'سوريا'
    },
    {
        'code': 'SZ',
        'englishName': 'Eswatini',
        'nativeName': 'Eswatini'
    },
    {
        'code': 'TA',
        'englishName': 'Tristan da Cunha',
        'nativeName': 'Tristan da Cunha'
    },
    {
        'code': 'TC',
        'englishName': 'Turks & Caicos Islands',
        'nativeName': 'Turks & Caicos Islands'
    },
    {
        'code': 'TD',
        'englishName': 'Chad',
        'nativeName': 'Tchad'
    },
    {
        'code': 'TF',
        'englishName': 'French Southern Territories',
        'nativeName': 'Terres australes françaises'
    },
    {
        'code': 'TG',
        'englishName': 'Togo',
        'nativeName': 'Togo'
    },
    {
        'code': 'TH',
        'englishName': 'Thailand',
        'nativeName': 'ไทย'
    },
    {
        'code': 'TJ',
        'englishName': 'Tajikistan',
        'nativeName': 'Тоҷикистон'
    },
    {
        'code': 'TK',
        'englishName': 'Tokelau',
        'nativeName': 'Tokelau'
    },
    {
        'code': 'TL',
        'englishName': 'Timor-Leste',
        'nativeName': 'Timor-Leste'
    },
    {
        'code': 'TM',
        'englishName': 'Turkmenistan',
        'nativeName': 'Türkmenistan'
    },
    {
        'code': 'TN',
        'englishName': 'Tunisia',
        'nativeName': 'تونس'
    },
    {
        'code': 'TO',
        'englishName': 'Tonga',
        'nativeName': 'Tonga'
    },
    {
        'code': 'TR',
        'englishName': 'Turkey',
        'nativeName': 'Türkiye'
    },
    {
        'code': 'TT',
        'englishName': 'Trinidad & Tobago',
        'nativeName': 'Trinidad & Tobago'
    },
    {
        'code': 'TV',
        'englishName': 'Tuvalu',
        'nativeName': ''
    },
    {
        'code': 'TW',
        'englishName': 'Taiwan',
        'nativeName': 'Taiwan'
    },
    {
        'code': 'TZ',
        'englishName': 'Tanzania',
        'nativeName': 'Tanzania'
    },
    {
        'code': 'UA',
        'englishName': 'Ukraine',
        'nativeName': 'Україна'
    },
    {
        'code': 'UG',
        'englishName': 'Uganda',
        'nativeName': 'Uganda'
    },
    {
        'code': 'UM',
        'englishName': 'U.S. Outlying Islands',
        'nativeName': 'U.S. Outlying Islands'
    },
    {
        'code': 'US',
        'englishName': 'United States',
        'nativeName': 'United States'
    },
    {
        'code': 'UY',
        'englishName': 'Uruguay',
        'nativeName': 'Uruguay'
    },
    {
        'code': 'UZ',
        'englishName': 'Uzbekistan',
        'nativeName': 'Oʻzbekiston'
    },
    {
        'code': 'VA',
        'englishName': 'Vatican City',
        'nativeName': 'Città del Vaticano'
    },
    {
        'code': 'VC',
        'englishName': 'St. Vincent & Grenadines',
        'nativeName': 'St. Vincent & Grenadines'
    },
    {
        'code': 'VE',
        'englishName': 'Venezuela',
        'nativeName': 'Venezuela'
    },
    {
        'code': 'VG',
        'englishName': 'British Virgin Islands',
        'nativeName': 'British Virgin Islands'
    },
    {
        'code': 'VI',
        'englishName': 'U.S. Virgin Islands',
        'nativeName': 'U.S. Virgin Islands'
    },
    {
        'code': 'VN',
        'englishName': 'Vietnam',
        'nativeName': 'Việt Nam'
    },
    {
        'code': 'VU',
        'englishName': 'Vanuatu',
        'nativeName': ''
    },
    {
        'code': 'WF',
        'englishName': 'Wallis & Futuna',
        'nativeName': 'Wallis-et-Futuna'
    },
    {
        'code': 'WS',
        'englishName': 'Samoa',
        'nativeName': ''
    },
    {
        'code': 'XK',
        'englishName': 'Kosovo',
        'nativeName': 'Kosovë'
    },
    {
        'code': 'YE',
        'englishName': 'Yemen',
        'nativeName': 'اليمن'
    },
    {
        'code': 'YT',
        'englishName': 'Mayotte',
        'nativeName': 'Mayotte'
    },
    {
        'code': 'ZA',
        'englishName': 'South Africa',
        'nativeName': 'South Africa'
    },
    {
        'code': 'ZM',
        'englishName': 'Zambia',
        'nativeName': 'Zambia'
    },
    {
        'code': 'ZW',
        'englishName': 'Zimbabwe',
        'nativeName': 'Zimbabwe'
    }
];

const countryCallingCodes = {
    'AC': 247,
    'AD': 376,
    'AE': 971,
    'AF': 93,
    'AG': 1,
    'AI': 1,
    'AL': 355,
    'AM': 374,
    'AO': 244,
    'AR': 54,
    'AS': 1,
    'AT': 43,
    'AU': 61,
    'AW': 297,
    'AX': 358,
    'AZ': 994,
    'BA': 387,
    'BB': 1,
    'BD': 880,
    'BE': 32,
    'BF': 226,
    'BG': 359,
    'BH': 973,
    'BI': 257,
    'BJ': 229,
    'BL': 590,
    'BM': 1,
    'BN': 673,
    'BO': 591,
    'BQ': 599,
    'BR': 55,
    'BS': 1,
    'BT': 975,
    'BW': 267,
    'BY': 375,
    'BZ': 501,
    'CA': 1,
    'CC': 61,
    'CD': 243,
    'CF': 236,
    'CG': 242,
    'CH': 41,
    'CI': 225,
    'CK': 682,
    'CL': 56,
    'CM': 237,
    'CN': 86,
    'CO': 57,
    'CR': 506,
    'CU': 53,
    'CV': 238,
    'CW': 599,
    'CX': 61,
    'CY': 357,
    'CZ': 420,
    'DE': 49,
    'DJ': 253,
    'DK': 45,
    'DM': 1,
    'DO': 1,
    'DZ': 213,
    'EC': 593,
    'EE': 372,
    'EG': 20,
    'EH': 212,
    'ER': 291,
    'ES': 34,
    'ET': 251,
    'FI': 358,
    'FJ': 679,
    'FK': 500,
    'FM': 691,
    'FO': 298,
    'FR': 33,
    'GA': 241,
    'GB': 44,
    'GD': 1,
    'GE': 995,
    'GF': 594,
    'GG': 44,
    'GH': 233,
    'GI': 350,
    'GL': 299,
    'GM': 220,
    'GN': 224,
    'GP': 590,
    'GQ': 240,
    'GR': 30,
    'GT': 502,
    'GU': 1,
    'GW': 245,
    'GY': 592,
    'HK': 852,
    'HN': 504,
    'HR': 385,
    'HT': 509,
    'HU': 36,
    'ID': 62,
    'IE': 353,
    'IL': 972,
    'IM': 44,
    'IN': 91,
    'IO': 246,
    'IQ': 964,
    'IR': 98,
    'IS': 354,
    'IT': 39,
    'JE': 44,
    'JM': 1,
    'JO': 962,
    'JP': 81,
    'KE': 254,
    'KG': 996,
    'KH': 855,
    'KI': 686,
    'KM': 269,
    'KN': 1,
    'KP': 850,
    'KR': 82,
    'KW': 965,
    'KY': 1,
    'KZ': 7,
    'LA': 856,
    'LB': 961,
    'LC': 1,
    'LI': 423,
    'LK': 94,
    'LR': 231,
    'LS': 266,
    'LT': 370,
    'LU': 352,
    'LV': 371,
    'LY': 218,
    'MA': 212,
    'MC': 377,
    'MD': 373,
    'ME': 382,
    'MF': 590,
    'MG': 261,
    'MH': 692,
    'MK': 389,
    'ML': 223,
    'MM': 95,
    'MN': 976,
    'MO': 853,
    'MP': 1,
    'MQ': 596,
    'MR': 222,
    'MS': 1,
    'MT': 356,
    'MU': 230,
    'MV': 960,
    'MW': 265,
    'MX': 52,
    'MY': 60,
    'MZ': 258,
    'NA': 264,
    'NC': 687,
    'NE': 227,
    'NF': 672,
    'NG': 234,
    'NI': 505,
    'NL': 31,
    'NO': 47,
    'NP': 977,
    'NR': 674,
    'NU': 683,
    'NZ': 64,
    'OM': 968,
    'PA': 507,
    'PE': 51,
    'PF': 689,
    'PG': 675,
    'PH': 63,
    'PK': 92,
    'PL': 48,
    'PM': 508,
    'PR': 1,
    'PS': 970,
    'PT': 351,
    'PW': 680,
    'PY': 595,
    'QA': 974,
    'RE': 262,
    'RO': 40,
    'RS': 381,
    'RU': 7,
    'RW': 250,
    'SA': 966,
    'SB': 677,
    'SC': 248,
    'SD': 249,
    'SE': 46,
    'SG': 65,
    'SH': 290,
    'SI': 386,
    'SJ': 47,
    'SK': 421,
    'SL': 232,
    'SM': 378,
    'SN': 221,
    'SO': 252,
    'SR': 597,
    'SS': 211,
    'ST': 239,
    'SV': 503,
    'SX': 1,
    'SY': 963,
    'SZ': 268,
    'TA': 290,
    'TC': 1,
    'TD': 235,
    'TG': 228,
    'TH': 66,
    'TJ': 992,
    'TK': 690,
    'TL': 670,
    'TM': 993,
    'TN': 216,
    'TO': 676,
    'TR': 90,
    'TT': 1,
    'TV': 688,
    'TW': 886,
    'TZ': 255,
    'UA': 380,
    'UG': 256,
    'US': 1,
    'UY': 598,
    'UZ': 998,
    'VA': 39,
    'VC': 1,
    'VE': 58,
    'VG': 1,
    'VI': 1,
    'VN': 84,
    'VU': 678,
    'WF': 681,
    'WS': 685,
    'XK': 383,
    'YE': 967,
    'YT': 262,
    'ZA': 27,
    'ZM': 260,
    'ZW': 263,
    'BV': undefined,
    'DG': undefined,
    'EA': undefined,
    'GS': undefined,
    'HM': undefined,
    'IC': undefined,
    'PN': undefined,
    'TF': undefined,
    'UM': undefined
};

const countryLanguages = {
    'AC': [
        'en'
    ],
    'AD': [
        'ca'
    ],
    'AE': [
        'ar'
    ],
    'AF': [
        'fa',
        'ps'
    ],
    'AG': [
        'en'
    ],
    'AI': [
        'en'
    ],
    'AL': [
        'sq'
    ],
    'AM': [
        'hy'
    ],
    'AO': [
        'pt'
    ],
    'AR': [
        'es'
    ],
    'AS': [
        'sm'
    ],
    'AT': [
        'de'
    ],
    'AU': [
        'en'
    ],
    'AW': [
        'nl',
        'pap'
    ],
    'AX': [
        'sv'
    ],
    'AZ': [
        'az'
    ],
    'BA': [
        'bs',
        'hr',
        'sr'
    ],
    'BB': [
        'en'
    ],
    'BD': [
        'bn'
    ],
    'BE': [
        'nl',
        'fr',
        'de'
    ],
    'BF': [
        'fr'
    ],
    'BG': [
        'bg'
    ],
    'BH': [
        'ar'
    ],
    'BI': [
        'rn',
        'fr',
        'en'
    ],
    'BJ': [
        'fr'
    ],
    'BL': [
        'fr'
    ],
    'BM': [
        'en'
    ],
    'BN': [
        'ms'
    ],
    'BO': [
        'es',
        'qu',
        'ay'
    ],
    'BQ': [
        'nl'
    ],
    'BR': [
        'pt'
    ],
    'BS': [
        'en'
    ],
    'BT': [
        'dz'
    ],
    'BV': [],
    'BW': [
        'en',
        'tn'
    ],
    'BY': [
        'be',
        'ru'
    ],
    'BZ': [
        'en'
    ],
    'CA': [
        'en',
        'fr'
    ],
    'CC': [
        'en'
    ],
    'CD': [
        'fr'
    ],
    'CF': [
        'fr',
        'sg'
    ],
    'CG': [
        'fr'
    ],
    'CH': [
        'de',
        'fr',
        'it'
    ],
    'CI': [
        'fr'
    ],
    'CK': [
        'en'
    ],
    'CL': [
        'es'
    ],
    'CM': [
        'fr',
        'en'
    ],
    'CN': [
        'zh'
    ],
    'CO': [
        'es'
    ],
    'CR': [
        'es'
    ],
    'CU': [
        'es'
    ],
    'CV': [
        'pt'
    ],
    'CW': [
        'nl'
    ],
    'CX': [
        'en'
    ],
    'CY': [
        'el',
        'tr'
    ],
    'CZ': [
        'cs'
    ],
    'DE': [
        'de'
    ],
    'DG': [
        'en'
    ],
    'DJ': [
        'ar',
        'fr'
    ],
    'DK': [
        'da'
    ],
    'DM': [
        'en'
    ],
    'DO': [
        'es'
    ],
    'DZ': [
        'ar',
        'fr'
    ],
    'EA': [
        'es'
    ],
    'EC': [
        'es',
        'qu'
    ],
    'EE': [
        'et'
    ],
    'EG': [
        'ar'
    ],
    'EH': [
        'ar'
    ],
    'ER': [
        'en',
        'ar'
    ],
    'ES': [
        'es'
    ],
    'ET': [
        'am'
    ],
    'FI': [
        'fi',
        'sv'
    ],
    'FJ': [
        'en',
        'hif',
        'fj'
    ],
    'FK': [
        'en'
    ],
    'FM': [
        'en'
    ],
    'FO': [
        'fo'
    ],
    'FR': [
        'fr'
    ],
    'GA': [
        'fr'
    ],
    'GB': [
        'en'
    ],
    'GD': [
        'en'
    ],
    'GE': [
        'ka'
    ],
    'GF': [
        'fr'
    ],
    'GG': [
        'en'
    ],
    'GH': [
        'en'
    ],
    'GI': [
        'en'
    ],
    'GL': [
        'kl'
    ],
    'GM': [
        'en'
    ],
    'GN': [
        'fr'
    ],
    'GP': [
        'fr'
    ],
    'GQ': [
        'es',
        'fr',
        'pt'
    ],
    'GR': [
        'el'
    ],
    'GS': [],
    'GT': [
        'es'
    ],
    'GU': [
        'ch'
    ],
    'GW': [
        'pt'
    ],
    'GY': [
        'en'
    ],
    'HK': [
        'en'
    ],
    'HM': [],
    'HN': [
        'es'
    ],
    'HR': [
        'hr'
    ],
    'HT': [
        'ht',
        'fr'
    ],
    'HU': [
        'hu'
    ],
    'IC': [
        'es'
    ],
    'ID': [
        'id'
    ],
    'IE': [
        'en',
        'ga'
    ],
    'IL': [
        'he',
        'ar'
    ],
    'IM': [
        'en',
        'gv'
    ],
    'IN': [
        'hi',
        'en'
    ],
    'IO': [
        'en'
    ],
    'IQ': [
        'ar'
    ],
    'IR': [
        'fa'
    ],
    'IS': [
        'is'
    ],
    'IT': [
        'it'
    ],
    'JE': [
        'en'
    ],
    'JM': [
        'en'
    ],
    'JO': [
        'ar'
    ],
    'JP': [
        'ja'
    ],
    'KE': [
        'sw',
        'en'
    ],
    'KG': [
        'ky',
        'ru'
    ],
    'KH': [
        'km'
    ],
    'KI': [
        'en',
        'gil'
    ],
    'KM': [
        'ar',
        'fr',
        'zdj',
        'wni'
    ],
    'KN': [
        'en'
    ],
    'KP': [
        'ko'
    ],
    'KR': [
        'ko'
    ],
    'KW': [
        'ar'
    ],
    'KY': [
        'en'
    ],
    'KZ': [
        'ru',
        'kk'
    ],
    'LA': [
        'lo'
    ],
    'LB': [
        'ar'
    ],
    'LC': [
        'en'
    ],
    'LI': [
        'de'
    ],
    'LK': [
        'si',
        'ta'
    ],
    'LR': [
        'en'
    ],
    'LS': [
        'st',
        'en'
    ],
    'LT': [
        'lt'
    ],
    'LU': [
        'fr',
        'lb',
        'de'
    ],
    'LV': [
        'lv'
    ],
    'LY': [
        'ar'
    ],
    'MA': [
        'ar',
        'tzm'
    ],
    'MC': [
        'fr'
    ],
    'MD': [
        'ro'
    ],
    'ME': [],
    'MF': [
        'fr'
    ],
    'MG': [
        'mg',
        'fr',
        'en'
    ],
    'MH': [
        'en',
        'mh'
    ],
    'MK': [
        'mk'
    ],
    'ML': [
        'fr'
    ],
    'MM': [
        'my'
    ],
    'MN': [
        'mn'
    ],
    'MO': [
        'pt'
    ],
    'MP': [
        'en'
    ],
    'MQ': [
        'fr'
    ],
    'MR': [
        'ar'
    ],
    'MS': [
        'en'
    ],
    'MT': [
        'mt',
        'en'
    ],
    'MU': [
        'en',
        'fr'
    ],
    'MV': [
        'dv'
    ],
    'MW': [
        'en',
        'ny'
    ],
    'MX': [
        'es',
        'vec'
    ],
    'MY': [
        'ms'
    ],
    'MZ': [
        'pt'
    ],
    'NA': [
        'en'
    ],
    'NC': [
        'fr'
    ],
    'NE': [
        'fr'
    ],
    'NF': [
        'en'
    ],
    'NG': [
        'en',
        'yo'
    ],
    'NI': [
        'es'
    ],
    'NL': [
        'nl'
    ],
    'NO': [
        'nb',
        'no',
        'nn'
    ],
    'NP': [
        'ne'
    ],
    'NR': [
        'en',
        'na'
    ],
    'NU': [
        'en',
        'niu'
    ],
    'NZ': [
        'mi'
    ],
    'OM': [
        'ar'
    ],
    'PA': [
        'es'
    ],
    'PE': [
        'es',
        'qu'
    ],
    'PF': [
        'fr',
        'ty'
    ],
    'PG': [
        'tpi',
        'en',
        'ho'
    ],
    'PH': [
        'en',
        'fil'
    ],
    'PK': [
        'ur',
        'en'
    ],
    'PL': [
        'pl'
    ],
    'PM': [
        'fr'
    ],
    'PN': [
        'en'
    ],
    'PR': [
        'es'
    ],
    'PS': [
        'ar'
    ],
    'PT': [
        'pt'
    ],
    'PW': [
        'pau',
        'en'
    ],
    'PY': [
        'gn',
        'es'
    ],
    'QA': [
        'ar'
    ],
    'RE': [
        'fr'
    ],
    'RO': [
        'ro'
    ],
    'RS': [
        'sr'
    ],
    'RU': [
        'ru'
    ],
    'RW': [
        'rw',
        'en',
        'fr'
    ],
    'SA': [
        'ar'
    ],
    'SB': [
        'en'
    ],
    'SC': [
        'fr',
        'en'
    ],
    'SD': [
        'ar',
        'en'
    ],
    'SE': [
        'sv'
    ],
    'SG': [
        'en',
        'zh',
        'ms',
        'ta'
    ],
    'SH': [
        'en'
    ],
    'SI': [
        'sl'
    ],
    'SJ': [
        'nb'
    ],
    'SK': [
        'sk'
    ],
    'SL': [
        'en'
    ],
    'SM': [
        'it'
    ],
    'SN': [
        'fr'
    ],
    'SO': [
        'so',
        'ar'
    ],
    'SR': [
        'nl'
    ],
    'SS': [
        'en'
    ],
    'ST': [
        'pt'
    ],
    'SV': [
        'es'
    ],
    'SX': [
        'en',
        'nl'
    ],
    'SY': [
        'ar',
        'fr'
    ],
    'SZ': [
        'en',
        'ss'
    ],
    'TA': [
        'en'
    ],
    'TC': [
        'en'
    ],
    'TD': [
        'fr',
        'ar'
    ],
    'TF': [
        'fr'
    ],
    'TG': [
        'fr'
    ],
    'TH': [
        'th'
    ],
    'TJ': [
        'tg'
    ],
    'TK': [
        'en',
        'tkl'
    ],
    'TL': [
        'pt',
        'tet'
    ],
    'TM': [
        'tk'
    ],
    'TN': [
        'ar',
        'fr'
    ],
    'TO': [
        'to',
        'en'
    ],
    'TR': [
        'tr'
    ],
    'TT': [
        'en'
    ],
    'TV': [
        'tvl',
        'en'
    ],
    'TW': [],
    'TZ': [
        'sw',
        'en'
    ],
    'UA': [
        'uk'
    ],
    'UG': [
        'sw',
        'en'
    ],
    'UM': [
        'en'
    ],
    'US': [
        'en',
        'es',
        'haw'
    ],
    'UY': [
        'es'
    ],
    'UZ': [
        'uz'
    ],
    'VA': [
        'it'
    ],
    'VC': [
        'en'
    ],
    'VE': [
        'es'
    ],
    'VG': [
        'en'
    ],
    'VI': [
        'en'
    ],
    'VN': [
        'vi'
    ],
    'VU': [
        'bi',
        'en',
        'fr'
    ],
    'WF': [
        'fr'
    ],
    'WS': [
        'sm',
        'en'
    ],
    'XK': [
        'sq',
        'sr'
    ],
    'YE': [
        'ar'
    ],
    'YT': [
        'fr'
    ],
    'ZA': [
        'en'
    ],
    'ZM': [
        'en'
    ],
    'ZW': [
        'sn',
        'en',
        'nd'
    ]
};

const currencyCodes = [
    'SHP',
    'EUR',
    'AED',
    'AFN',
    'XCD',
    'ALL',
    'AMD',
    'AOA',
    'ARS',
    'USD',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'XOF',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BRL',
    'BSD',
    'BTN',
    'NOK',
    'BWP',
    'BYN',
    'BZD',
    'CAD',
    'CDF',
    'XAF',
    'CHF',
    'NZD',
    'CLP',
    'CNY',
    'COP',
    'CRC',
    'CUP',
    'CVE',
    'ANG',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'MAD',
    'ERN',
    'ETB',
    'FJD',
    'FKP',
    'GBP',
    'GEL',
    'GHS',
    'GIP',
    'GMD',
    'GNF',
    'GTQ',
    'GYD',
    'HKD',
    'HNL',
    'HTG',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'KMF',
    'KPW',
    'KRW',
    'KWD',
    'KYD',
    'KZT',
    'LAK',
    'LBP',
    'LKR',
    'LRD',
    'ZAR',
    'LYD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRU',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
    'MYR',
    'MZN',
    'NAD',
    'XPF',
    'NGN',
    'NIO',
    'NPR',
    'OMR',
    'PAB',
    'PEN',
    'PGK',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD',
    'RUB',
    'RWF',
    'SAR',
    'SBD',
    'SCR',
    'SDG',
    'SEK',
    'SGD',
    'SLE',
    'SOS',
    'SRD',
    'SSP',
    'STN',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRY',
    'TTD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'UYU',
    'UZS',
    'VES',
    'VND',
    'VUV',
    'WST',
    'YER',
    'ZMW'
];

const currencies = [
    {
        'code': 'AED',
        'num': 784,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'AFN',
        'num': 971,
        'englishName': 'Persian',
        'nativeName': 'فارسی'
    },
    {
        'code': 'ALL',
        'num': 8,
        'englishName': 'Albanian',
        'nativeName': 'shqip'
    },
    {
        'code': 'AMD',
        'num': 51,
        'englishName': 'Armenian',
        'nativeName': 'հայերեն'
    },
    {
        'code': 'ANG',
        'num': 532,
        'englishName': 'Dutch',
        'nativeName': 'Nederlands'
    },
    {
        'code': 'AOA',
        'num': 973,
        'englishName': 'Portuguese',
        'nativeName': 'português'
    },
    {
        'code': 'ARS',
        'num': 32,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'AUD',
        'num': 36,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'AWG',
        'num': 533,
        'englishName': 'Dutch',
        'nativeName': 'Nederlands'
    },
    {
        'code': 'AZN',
        'num': 944,
        'englishName': 'Azerbaijani',
        'nativeName': 'azərbaycan'
    },
    {
        'code': 'BAM',
        'num': 977,
        'englishName': 'Bosnian',
        'nativeName': 'bosanski'
    },
    {
        'code': 'BBD',
        'num': 52,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'BDT',
        'num': 50,
        'englishName': 'Bangla',
        'nativeName': 'বাংলা'
    },
    {
        'code': 'BGN',
        'num': 975,
        'englishName': 'Bulgarian',
        'nativeName': 'български'
    },
    {
        'code': 'BHD',
        'num': 48,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'BIF',
        'num': 108,
        'englishName': 'Rundi',
        'nativeName': 'Ikirundi'
    },
    {
        'code': 'BMD',
        'num': 60,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'BND',
        'num': 96,
        'englishName': 'Malay',
        'nativeName': 'Melayu'
    },
    {
        'code': 'BOB',
        'num': 68,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'BRL',
        'num': 986,
        'englishName': 'Portuguese',
        'nativeName': 'português'
    },
    {
        'code': 'BSD',
        'num': 44,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'BTN',
        'num': 64,
        'englishName': 'Dzongkha',
        'nativeName': 'རྫོང་ཁ'
    },
    {
        'code': 'BWP',
        'num': 72,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'BZD',
        'num': 84,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'CAD',
        'num': 124,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'CDF',
        'num': 976,
        'englishName': 'French',
        'nativeName': 'français'
    },
    {
        'code': 'CHF',
        'num': 756,
        'englishName': 'German',
        'nativeName': 'Deutsch'
    },
    {
        'code': 'CLP',
        'num': 152,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'CNY',
        'num': 156,
        'englishName': 'Chinese',
        'nativeName': '中文'
    },
    {
        'code': 'COP',
        'num': 170,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'CRC',
        'num': 188,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'CUP',
        'num': 192,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'CVE',
        'num': 132,
        'englishName': 'Portuguese',
        'nativeName': 'português'
    },
    {
        'code': 'CZK',
        'num': 203,
        'englishName': 'Czech',
        'nativeName': 'čeština'
    },
    {
        'code': 'DJF',
        'num': 262,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'DKK',
        'num': 208,
        'englishName': 'Danish',
        'nativeName': 'dansk'
    },
    {
        'code': 'DOP',
        'num': 214,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'DZD',
        'num': 12,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'EGP',
        'num': 818,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'ERN',
        'num': 232,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'ETB',
        'num': 230,
        'englishName': 'Amharic',
        'nativeName': 'አማርኛ'
    },
    {
        'code': 'EUR',
        'num': 978,
        'englishName': 'Catalan',
        'nativeName': 'català'
    },
    {
        'code': 'FJD',
        'num': 242,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'FKP',
        'num': 238,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'GBP',
        'num': 826,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'GEL',
        'num': 981,
        'englishName': 'Georgian',
        'nativeName': 'ქართული'
    },
    {
        'code': 'GHS',
        'num': 936,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'GIP',
        'num': 292,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'GMD',
        'num': 270,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'GNF',
        'num': 324,
        'englishName': 'French',
        'nativeName': 'français'
    },
    {
        'code': 'GTQ',
        'num': 320,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'GYD',
        'num': 328,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'HKD',
        'num': 344,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'HNL',
        'num': 340,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'HTG',
        'num': 332,
        'englishName': 'Haitian Creole',
        'nativeName': ''
    },
    {
        'code': 'HUF',
        'num': 348,
        'englishName': 'Hungarian',
        'nativeName': 'magyar'
    },
    {
        'code': 'IDR',
        'num': 360,
        'englishName': 'Indonesian',
        'nativeName': 'Indonesia'
    },
    {
        'code': 'ILS',
        'num': 376,
        'englishName': 'Hebrew',
        'nativeName': 'עברית'
    },
    {
        'code': 'INR',
        'num': 356,
        'englishName': 'Hindi',
        'nativeName': 'हिन्दी'
    },
    {
        'code': 'IQD',
        'num': 368,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'IRR',
        'num': 364,
        'englishName': 'Persian',
        'nativeName': 'فارسی'
    },
    {
        'code': 'ISK',
        'num': 352,
        'englishName': 'Icelandic',
        'nativeName': 'íslenska'
    },
    {
        'code': 'JMD',
        'num': 388,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'JOD',
        'num': 400,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'JPY',
        'num': 392,
        'englishName': 'Japanese',
        'nativeName': '日本語'
    },
    {
        'code': 'KES',
        'num': 404,
        'englishName': 'Swahili',
        'nativeName': 'Kiswahili'
    },
    {
        'code': 'KGS',
        'num': 417,
        'englishName': 'Kyrgyz',
        'nativeName': 'кыргызча'
    },
    {
        'code': 'KHR',
        'num': 116,
        'englishName': 'Khmer',
        'nativeName': 'ខ្មែរ'
    },
    {
        'code': 'KMF',
        'num': 174,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'KPW',
        'num': 408,
        'englishName': 'Korean',
        'nativeName': '한국어'
    },
    {
        'code': 'KRW',
        'num': 410,
        'englishName': 'Korean',
        'nativeName': '한국어'
    },
    {
        'code': 'KWD',
        'num': 414,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'KYD',
        'num': 136,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'KZT',
        'num': 398,
        'englishName': 'Russian',
        'nativeName': 'русский'
    },
    {
        'code': 'LAK',
        'num': 418,
        'englishName': 'Lao',
        'nativeName': 'ລາວ'
    },
    {
        'code': 'LBP',
        'num': 422,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'LKR',
        'num': 144,
        'englishName': 'Sinhala',
        'nativeName': 'සිංහල'
    },
    {
        'code': 'LRD',
        'num': 430,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'LYD',
        'num': 434,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'MAD',
        'num': 504,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'MDL',
        'num': 498,
        'englishName': 'Romanian',
        'nativeName': 'română'
    },
    {
        'code': 'MGA',
        'num': 969,
        'englishName': 'Malagasy',
        'nativeName': 'Malagasy'
    },
    {
        'code': 'MKD',
        'num': 807,
        'englishName': 'Macedonian',
        'nativeName': 'македонски'
    },
    {
        'code': 'MMK',
        'num': 104,
        'englishName': 'Burmese',
        'nativeName': 'မြန်မာ'
    },
    {
        'code': 'MNT',
        'num': 496,
        'englishName': 'Mongolian',
        'nativeName': 'монгол'
    },
    {
        'code': 'MOP',
        'num': 446,
        'englishName': 'Portuguese',
        'nativeName': 'português'
    },
    {
        'code': 'MRU',
        'num': 929,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'MUR',
        'num': 480,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'MVR',
        'num': 462,
        'englishName': 'Divehi',
        'nativeName': ''
    },
    {
        'code': 'MWK',
        'num': 454,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'MXN',
        'num': 484,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'MYR',
        'num': 458,
        'englishName': 'Malay',
        'nativeName': 'Melayu'
    },
    {
        'code': 'MZN',
        'num': 943,
        'englishName': 'Portuguese',
        'nativeName': 'português'
    },
    {
        'code': 'NAD',
        'num': 516,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'NGN',
        'num': 566,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'NIO',
        'num': 558,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'NOK',
        'num': 578,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'NPR',
        'num': 524,
        'englishName': 'Nepali',
        'nativeName': 'नेपाली'
    },
    {
        'code': 'NZD',
        'num': 554,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'OMR',
        'num': 512,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'PAB',
        'num': 590,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'PEN',
        'num': 604,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'PGK',
        'num': 598,
        'englishName': 'Tok Pisin',
        'nativeName': ''
    },
    {
        'code': 'PHP',
        'num': 608,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'PKR',
        'num': 586,
        'englishName': 'Urdu',
        'nativeName': 'اردو'
    },
    {
        'code': 'PLN',
        'num': 985,
        'englishName': 'Polish',
        'nativeName': 'polski'
    },
    {
        'code': 'PYG',
        'num': 600,
        'englishName': 'Guarani',
        'nativeName': ''
    },
    {
        'code': 'QAR',
        'num': 634,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'RON',
        'num': 946,
        'englishName': 'Romanian',
        'nativeName': 'română'
    },
    {
        'code': 'RSD',
        'num': 941,
        'englishName': 'Serbian',
        'nativeName': 'српски'
    },
    {
        'code': 'RUB',
        'num': 643,
        'englishName': 'Russian',
        'nativeName': 'русский'
    },
    {
        'code': 'RWF',
        'num': 646,
        'englishName': 'Kinyarwanda',
        'nativeName': 'Kinyarwanda'
    },
    {
        'code': 'SAR',
        'num': 682,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'SBD',
        'num': 90,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'SCR',
        'num': 690,
        'englishName': 'French',
        'nativeName': 'français'
    },
    {
        'code': 'SDG',
        'num': 938,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'SEK',
        'num': 752,
        'englishName': 'Swedish',
        'nativeName': 'svenska'
    },
    {
        'code': 'SGD',
        'num': 702,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'SHP',
        'num': 654,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'SOS',
        'num': 706,
        'englishName': 'Somali',
        'nativeName': 'Soomaali'
    },
    {
        'code': 'SRD',
        'num': 968,
        'englishName': 'Dutch',
        'nativeName': 'Nederlands'
    },
    {
        'code': 'SSP',
        'num': 728,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'STN',
        'num': 930,
        'englishName': 'Portuguese',
        'nativeName': 'português'
    },
    {
        'code': 'SYP',
        'num': 760,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'SZL',
        'num': 748,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'THB',
        'num': 764,
        'englishName': 'Thai',
        'nativeName': 'ไทย'
    },
    {
        'code': 'TJS',
        'num': 972,
        'englishName': 'Tajik',
        'nativeName': 'тоҷикӣ'
    },
    {
        'code': 'TMT',
        'num': 934,
        'englishName': 'Turkmen',
        'nativeName': 'türkmen dili'
    },
    {
        'code': 'TND',
        'num': 788,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'TOP',
        'num': 776,
        'englishName': 'Tongan',
        'nativeName': 'lea fakatonga'
    },
    {
        'code': 'TRY',
        'num': 949,
        'englishName': 'Turkish',
        'nativeName': 'Türkçe'
    },
    {
        'code': 'TTD',
        'num': 780,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'TWD',
        'num': 901,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'TZS',
        'num': 834,
        'englishName': 'Swahili',
        'nativeName': 'Kiswahili'
    },
    {
        'code': 'UAH',
        'num': 980,
        'englishName': 'Ukrainian',
        'nativeName': 'українська'
    },
    {
        'code': 'UGX',
        'num': 800,
        'englishName': 'Swahili',
        'nativeName': 'Kiswahili'
    },
    {
        'code': 'USD',
        'num': 840,
        'englishName': 'Samoan',
        'nativeName': ''
    },
    {
        'code': 'UYU',
        'num': 858,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'UZS',
        'num': 860,
        'englishName': 'Uzbek',
        'nativeName': 'o‘zbek'
    },
    {
        'code': 'VES',
        'num': 928,
        'englishName': 'Spanish',
        'nativeName': 'español'
    },
    {
        'code': 'VND',
        'num': 704,
        'englishName': 'Vietnamese',
        'nativeName': 'Tiếng Việt'
    },
    {
        'code': 'VUV',
        'num': 548,
        'englishName': 'Bislama',
        'nativeName': ''
    },
    {
        'code': 'WST',
        'num': 882,
        'englishName': 'Samoan',
        'nativeName': ''
    },
    {
        'code': 'XAF',
        'num': 950,
        'englishName': 'French',
        'nativeName': 'français'
    },
    {
        'code': 'XCD',
        'num': 951,
        'englishName': 'English',
        'nativeName': 'English'
    },
    {
        'code': 'XOF',
        'num': 952,
        'englishName': 'French',
        'nativeName': 'français'
    },
    {
        'code': 'XPF',
        'num': 953,
        'englishName': 'French',
        'nativeName': 'français'
    },
    {
        'code': 'YER',
        'num': 886,
        'englishName': 'Arabic',
        'nativeName': 'العربية'
    },
    {
        'code': 'ZAR',
        'num': 710,
        'englishName': 'Southern Sotho',
        'nativeName': ''
    },
    {
        'code': 'ZMW',
        'num': 967,
        'englishName': 'English',
        'nativeName': 'English'
    }
];

const languageCodes = [
    'en',
    'ca',
    'ar',
    'fa',
    'ps',
    'sq',
    'hy',
    'pt',
    'es',
    'sm',
    'de',
    'nl',
    'pap',
    'sv',
    'az',
    'bs',
    'hr',
    'sr',
    'bn',
    'fr',
    'bg',
    'rn',
    'ms',
    'qu',
    'ay',
    'dz',
    'tn',
    'be',
    'ru',
    'sg',
    'it',
    'zh',
    'el',
    'tr',
    'cs',
    'da',
    'et',
    'am',
    'fi',
    'hif',
    'fj',
    'fo',
    'ka',
    'kl',
    'ch',
    'ht',
    'hu',
    'id',
    'ga',
    'he',
    'gv',
    'hi',
    'is',
    'ja',
    'sw',
    'ky',
    'km',
    'gil',
    'zdj',
    'wni',
    'ko',
    'kk',
    'lo',
    'si',
    'ta',
    'st',
    'lt',
    'lb',
    'lv',
    'tzm',
    'ro',
    'mg',
    'mh',
    'mk',
    'my',
    'mn',
    'mt',
    'dv',
    'ny',
    'vec',
    'yo',
    'nb',
    'no',
    'nn',
    'ne',
    'na',
    'niu',
    'mi',
    'ty',
    'tpi',
    'ho',
    'fil',
    'ur',
    'pl',
    'pau',
    'gn',
    'rw',
    'sl',
    'sk',
    'so',
    'ss',
    'th',
    'tg',
    'tkl',
    'tet',
    'tk',
    'to',
    'tvl',
    'uk',
    'haw',
    'uz',
    'vi',
    'bi',
    'sn',
    'nd'
];

const languages = [
    {
        'code': 'en',
        'nativeName': 'English',
        'englishName': 'English'
    },
    {
        'code': 'ca',
        'nativeName': 'català',
        'englishName': 'Catalan'
    },
    {
        'code': 'ar',
        'nativeName': 'العربية',
        'englishName': 'Arabic'
    },
    {
        'code': 'fa',
        'nativeName': 'فارسی',
        'englishName': 'Persian'
    },
    {
        'code': 'ps',
        'nativeName': 'پښتو',
        'englishName': 'Pashto'
    },
    {
        'code': 'sq',
        'nativeName': 'shqip',
        'englishName': 'Albanian'
    },
    {
        'code': 'hy',
        'nativeName': 'հայերեն',
        'englishName': 'Armenian'
    },
    {
        'code': 'pt',
        'nativeName': 'português',
        'englishName': 'Portuguese'
    },
    {
        'code': 'es',
        'nativeName': 'español',
        'englishName': 'Spanish'
    },
    {
        'code': 'sm',
        'nativeName': '',
        'englishName': 'Samoan'
    },
    {
        'code': 'de',
        'nativeName': 'Deutsch',
        'englishName': 'German'
    },
    {
        'code': 'nl',
        'nativeName': 'Nederlands',
        'englishName': 'Dutch'
    },
    {
        'code': 'pap',
        'nativeName': '',
        'englishName': 'Papiamento'
    },
    {
        'code': 'sv',
        'nativeName': 'svenska',
        'englishName': 'Swedish'
    },
    {
        'code': 'az',
        'nativeName': 'azərbaycan',
        'englishName': 'Azerbaijani'
    },
    {
        'code': 'bs',
        'nativeName': 'bosanski',
        'englishName': 'Bosnian'
    },
    {
        'code': 'hr',
        'nativeName': 'hrvatski',
        'englishName': 'Croatian'
    },
    {
        'code': 'sr',
        'nativeName': 'српски',
        'englishName': 'Serbian'
    },
    {
        'code': 'bn',
        'nativeName': 'বাংলা',
        'englishName': 'Bangla'
    },
    {
        'code': 'fr',
        'nativeName': 'français',
        'englishName': 'French'
    },
    {
        'code': 'bg',
        'nativeName': 'български',
        'englishName': 'Bulgarian'
    },
    {
        'code': 'rn',
        'nativeName': 'Ikirundi',
        'englishName': 'Rundi'
    },
    {
        'code': 'ms',
        'nativeName': 'Melayu',
        'englishName': 'Malay'
    },
    {
        'code': 'qu',
        'nativeName': 'Runasimi',
        'englishName': 'Quechua'
    },
    {
        'code': 'ay',
        'nativeName': '',
        'englishName': 'Aymara'
    },
    {
        'code': 'dz',
        'nativeName': 'རྫོང་ཁ',
        'englishName': 'Dzongkha'
    },
    {
        'code': 'tn',
        'nativeName': '',
        'englishName': 'Tswana'
    },
    {
        'code': 'be',
        'nativeName': 'беларуская',
        'englishName': 'Belarusian'
    },
    {
        'code': 'ru',
        'nativeName': 'русский',
        'englishName': 'Russian'
    },
    {
        'code': 'sg',
        'nativeName': 'Sängö',
        'englishName': 'Sango'
    },
    {
        'code': 'it',
        'nativeName': 'italiano',
        'englishName': 'Italian'
    },
    {
        'code': 'zh',
        'nativeName': '中文',
        'englishName': 'Chinese'
    },
    {
        'code': 'el',
        'nativeName': 'Ελληνικά',
        'englishName': 'Greek'
    },
    {
        'code': 'tr',
        'nativeName': 'Türkçe',
        'englishName': 'Turkish'
    },
    {
        'code': 'cs',
        'nativeName': 'čeština',
        'englishName': 'Czech'
    },
    {
        'code': 'da',
        'nativeName': 'dansk',
        'englishName': 'Danish'
    },
    {
        'code': 'et',
        'nativeName': 'eesti',
        'englishName': 'Estonian'
    },
    {
        'code': 'am',
        'nativeName': 'አማርኛ',
        'englishName': 'Amharic'
    },
    {
        'code': 'fi',
        'nativeName': 'suomi',
        'englishName': 'Finnish'
    },
    {
        'code': 'hif',
        'nativeName': '',
        'englishName': 'Fiji Hindi'
    },
    {
        'code': 'fj',
        'nativeName': '',
        'englishName': 'Fijian'
    },
    {
        'code': 'fo',
        'nativeName': 'føroyskt',
        'englishName': 'Faroese'
    },
    {
        'code': 'ka',
        'nativeName': 'ქართული',
        'englishName': 'Georgian'
    },
    {
        'code': 'kl',
        'nativeName': 'kalaallisut',
        'englishName': 'Kalaallisut'
    },
    {
        'code': 'ch',
        'nativeName': '',
        'englishName': 'Chamorro'
    },
    {
        'code': 'ht',
        'nativeName': '',
        'englishName': 'Haitian Creole'
    },
    {
        'code': 'hu',
        'nativeName': 'magyar',
        'englishName': 'Hungarian'
    },
    {
        'code': 'id',
        'nativeName': 'Indonesia',
        'englishName': 'Indonesian'
    },
    {
        'code': 'ga',
        'nativeName': 'Gaeilge',
        'englishName': 'Irish'
    },
    {
        'code': 'he',
        'nativeName': 'עברית',
        'englishName': 'Hebrew'
    },
    {
        'code': 'gv',
        'nativeName': 'Gaelg',
        'englishName': 'Manx'
    },
    {
        'code': 'hi',
        'nativeName': 'हिन्दी',
        'englishName': 'Hindi'
    },
    {
        'code': 'is',
        'nativeName': 'íslenska',
        'englishName': 'Icelandic'
    },
    {
        'code': 'ja',
        'nativeName': '日本語',
        'englishName': 'Japanese'
    },
    {
        'code': 'sw',
        'nativeName': 'Kiswahili',
        'englishName': 'Swahili'
    },
    {
        'code': 'ky',
        'nativeName': 'кыргызча',
        'englishName': 'Kyrgyz'
    },
    {
        'code': 'km',
        'nativeName': 'ខ្មែរ',
        'englishName': 'Khmer'
    },
    {
        'code': 'gil',
        'nativeName': '',
        'englishName': 'Gilbertese'
    },
    {
        'code': 'zdj',
        'nativeName': '',
        'englishName': ''
    },
    {
        'code': 'wni',
        'nativeName': '',
        'englishName': ''
    },
    {
        'code': 'ko',
        'nativeName': '한국어',
        'englishName': 'Korean'
    },
    {
        'code': 'kk',
        'nativeName': 'қазақ тілі',
        'englishName': 'Kazakh'
    },
    {
        'code': 'lo',
        'nativeName': 'ລາວ',
        'englishName': 'Lao'
    },
    {
        'code': 'si',
        'nativeName': 'සිංහල',
        'englishName': 'Sinhala'
    },
    {
        'code': 'ta',
        'nativeName': 'தமிழ்',
        'englishName': 'Tamil'
    },
    {
        'code': 'st',
        'nativeName': '',
        'englishName': 'Southern Sotho'
    },
    {
        'code': 'lt',
        'nativeName': 'lietuvių',
        'englishName': 'Lithuanian'
    },
    {
        'code': 'lb',
        'nativeName': 'Lëtzebuergesch',
        'englishName': 'Luxembourgish'
    },
    {
        'code': 'lv',
        'nativeName': 'latviešu',
        'englishName': 'Latvian'
    },
    {
        'code': 'tzm',
        'nativeName': 'Tamaziɣt n laṭlaṣ',
        'englishName': 'Central Atlas Tamazight'
    },
    {
        'code': 'ro',
        'nativeName': 'română',
        'englishName': 'Romanian'
    },
    {
        'code': 'mg',
        'nativeName': 'Malagasy',
        'englishName': 'Malagasy'
    },
    {
        'code': 'mh',
        'nativeName': '',
        'englishName': 'Marshallese'
    },
    {
        'code': 'mk',
        'nativeName': 'македонски',
        'englishName': 'Macedonian'
    },
    {
        'code': 'my',
        'nativeName': 'မြန်မာ',
        'englishName': 'Burmese'
    },
    {
        'code': 'mn',
        'nativeName': 'монгол',
        'englishName': 'Mongolian'
    },
    {
        'code': 'mt',
        'nativeName': 'Malti',
        'englishName': 'Maltese'
    },
    {
        'code': 'dv',
        'nativeName': '',
        'englishName': 'Divehi'
    },
    {
        'code': 'ny',
        'nativeName': '',
        'englishName': 'Nyanja'
    },
    {
        'code': 'vec',
        'nativeName': '',
        'englishName': 'Venetian'
    },
    {
        'code': 'yo',
        'nativeName': 'Èdè Yorùbá',
        'englishName': 'Yoruba'
    },
    {
        'code': 'nb',
        'nativeName': '',
        'englishName': 'Norwegian Bokmål'
    },
    {
        'code': 'no',
        'nativeName': 'norsk',
        'englishName': 'Norwegian'
    },
    {
        'code': 'nn',
        'nativeName': 'norsk nynorsk',
        'englishName': 'Norwegian Nynorsk'
    },
    {
        'code': 'ne',
        'nativeName': 'नेपाली',
        'englishName': 'Nepali'
    },
    {
        'code': 'na',
        'nativeName': '',
        'englishName': 'Nauru'
    },
    {
        'code': 'niu',
        'nativeName': '',
        'englishName': 'Niuean'
    },
    {
        'code': 'mi',
        'nativeName': 'Māori',
        'englishName': 'Māori'
    },
    {
        'code': 'ty',
        'nativeName': '',
        'englishName': 'Tahitian'
    },
    {
        'code': 'tpi',
        'nativeName': '',
        'englishName': 'Tok Pisin'
    },
    {
        'code': 'ho',
        'nativeName': '',
        'englishName': 'Hiri Motu'
    },
    {
        'code': 'fil',
        'nativeName': 'Filipino',
        'englishName': 'Filipino'
    },
    {
        'code': 'ur',
        'nativeName': 'اردو',
        'englishName': 'Urdu'
    },
    {
        'code': 'pl',
        'nativeName': 'polski',
        'englishName': 'Polish'
    },
    {
        'code': 'pau',
        'nativeName': '',
        'englishName': 'Palauan'
    },
    {
        'code': 'gn',
        'nativeName': '',
        'englishName': 'Guarani'
    },
    {
        'code': 'rw',
        'nativeName': 'Kinyarwanda',
        'englishName': 'Kinyarwanda'
    },
    {
        'code': 'sl',
        'nativeName': 'slovenščina',
        'englishName': 'Slovenian'
    },
    {
        'code': 'sk',
        'nativeName': 'slovenčina',
        'englishName': 'Slovak'
    },
    {
        'code': 'so',
        'nativeName': 'Soomaali',
        'englishName': 'Somali'
    },
    {
        'code': 'ss',
        'nativeName': '',
        'englishName': 'Swati'
    },
    {
        'code': 'th',
        'nativeName': 'ไทย',
        'englishName': 'Thai'
    },
    {
        'code': 'tg',
        'nativeName': 'тоҷикӣ',
        'englishName': 'Tajik'
    },
    {
        'code': 'tkl',
        'nativeName': '',
        'englishName': 'Tokelau'
    },
    {
        'code': 'tet',
        'nativeName': '',
        'englishName': 'Tetum'
    },
    {
        'code': 'tk',
        'nativeName': 'türkmen dili',
        'englishName': 'Turkmen'
    },
    {
        'code': 'to',
        'nativeName': 'lea fakatonga',
        'englishName': 'Tongan'
    },
    {
        'code': 'tvl',
        'nativeName': '',
        'englishName': 'Tuvalu'
    },
    {
        'code': 'uk',
        'nativeName': 'українська',
        'englishName': 'Ukrainian'
    },
    {
        'code': 'haw',
        'nativeName': 'ʻŌlelo Hawaiʻi',
        'englishName': 'Hawaiian'
    },
    {
        'code': 'uz',
        'nativeName': 'o‘zbek',
        'englishName': 'Uzbek'
    },
    {
        'code': 'vi',
        'nativeName': 'Tiếng Việt',
        'englishName': 'Vietnamese'
    },
    {
        'code': 'bi',
        'nativeName': '',
        'englishName': 'Bislama'
    },
    {
        'code': 'sn',
        'nativeName': 'chiShona',
        'englishName': 'Shona'
    },
    {
        'code': 'nd',
        'nativeName': 'isiNdebele',
        'englishName': 'North Ndebele'
    }
];

const timezones = [
    {
        'name': 'Europe/Andorra',
        'offset': -120,
        'country': 'AD'
    },
    {
        'name': 'Asia/Dubai',
        'offset': -240,
        'country': 'AE'
    },
    {
        'name': 'Asia/Kabul',
        'offset': -270,
        'country': 'AF'
    },
    {
        'name': 'America/Antigua',
        'offset': 240,
        'country': 'AG'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'AG'
    },
    {
        'name': 'America/Anguilla',
        'offset': 240,
        'country': 'AI'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'AI'
    },
    {
        'name': 'Europe/Tirane',
        'offset': -120,
        'country': 'AL'
    },
    {
        'name': 'Asia/Yerevan',
        'offset': -240,
        'country': 'AM'
    },
    {
        'name': 'Africa/Lagos',
        'offset': -60,
        'country': 'AO'
    },
    {
        'name': 'Africa/Luanda',
        'offset': -60,
        'country': 'AO'
    },
    {
        'name': 'America/Argentina/Buenos_Aires',
        'offset': 180,
        'country': 'AR'
    },
    {
        'name': 'America/Argentina/Catamarca',
        'offset': 180,
        'country': 'AR'
    },
    {
        'name': 'America/Argentina/Cordoba',
        'offset': 180,
        'country': 'AR'
    },
    {
        'name': 'America/Argentina/Jujuy',
        'offset': 180,
        'country': 'AR'
    },
    {
        'name': 'America/Argentina/La_Rioja',
        'offset': 180,
        'country': 'AR'
    },
    {
        'name': 'America/Argentina/Mendoza',
        'offset': 180,
        'country': 'AR'
    },
    {
        'name': 'America/Argentina/Rio_Gallegos',
        'offset': 180,
        'country': 'AR'
    },
    {
        'name': 'America/Argentina/Salta',
        'offset': 180,
        'country': 'AR'
    },
    {
        'name': 'America/Argentina/San_Juan',
        'offset': 180,
        'country': 'AR'
    },
    {
        'name': 'America/Argentina/San_Luis',
        'offset': 180,
        'country': 'AR'
    },
    {
        'name': 'America/Argentina/Tucuman',
        'offset': 180,
        'country': 'AR'
    },
    {
        'name': 'America/Argentina/Ushuaia',
        'offset': 180,
        'country': 'AR'
    },
    {
        'name': 'Pacific/Pago_Pago',
        'offset': 660,
        'country': 'AS'
    },
    {
        'name': 'Europe/Vienna',
        'offset': -120,
        'country': 'AT'
    },
    {
        'name': 'Antarctica/Macquarie',
        'offset': -600,
        'country': 'AU'
    },
    {
        'name': 'Australia/Adelaide',
        'offset': -570,
        'country': 'AU'
    },
    {
        'name': 'Australia/Brisbane',
        'offset': -600,
        'country': 'AU'
    },
    {
        'name': 'Australia/Broken_Hill',
        'offset': -570,
        'country': 'AU'
    },
    {
        'name': 'Australia/Darwin',
        'offset': -570,
        'country': 'AU'
    },
    {
        'name': 'Australia/Eucla',
        'offset': -525,
        'country': 'AU'
    },
    {
        'name': 'Australia/Hobart',
        'offset': -600,
        'country': 'AU'
    },
    {
        'name': 'Australia/Lindeman',
        'offset': -600,
        'country': 'AU'
    },
    {
        'name': 'Australia/Lord_Howe',
        'offset': -630,
        'country': 'AU'
    },
    {
        'name': 'Australia/Melbourne',
        'offset': -600,
        'country': 'AU'
    },
    {
        'name': 'Australia/Perth',
        'offset': -480,
        'country': 'AU'
    },
    {
        'name': 'Australia/Sydney',
        'offset': -600,
        'country': 'AU'
    },
    {
        'name': 'America/Aruba',
        'offset': 240,
        'country': 'AW'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'AW'
    },
    {
        'name': 'Europe/Helsinki',
        'offset': -180,
        'country': 'AX'
    },
    {
        'name': 'Europe/Mariehamn',
        'offset': -180,
        'country': 'AX'
    },
    {
        'name': 'Asia/Baku',
        'offset': -240,
        'country': 'AZ'
    },
    {
        'name': 'Europe/Belgrade',
        'offset': -120,
        'country': 'BA'
    },
    {
        'name': 'Europe/Sarajevo',
        'offset': -120,
        'country': 'BA'
    },
    {
        'name': 'America/Barbados',
        'offset': 240,
        'country': 'BB'
    },
    {
        'name': 'Asia/Dhaka',
        'offset': -360,
        'country': 'BD'
    },
    {
        'name': 'Europe/Brussels',
        'offset': -120,
        'country': 'BE'
    },
    {
        'name': 'Africa/Abidjan',
        'offset': 0,
        'country': 'BF'
    },
    {
        'name': 'Africa/Ouagadougou',
        'offset': 0,
        'country': 'BF'
    },
    {
        'name': 'Europe/Sofia',
        'offset': -180,
        'country': 'BG'
    },
    {
        'name': 'Asia/Bahrain',
        'offset': -180,
        'country': 'BH'
    },
    {
        'name': 'Asia/Qatar',
        'offset': -180,
        'country': 'BH'
    },
    {
        'name': 'Africa/Bujumbura',
        'offset': -120,
        'country': 'BI'
    },
    {
        'name': 'Africa/Maputo',
        'offset': -120,
        'country': 'BI'
    },
    {
        'name': 'Africa/Lagos',
        'offset': -60,
        'country': 'BJ'
    },
    {
        'name': 'Africa/Porto-Novo',
        'offset': -60,
        'country': 'BJ'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'BL'
    },
    {
        'name': 'America/St_Barthelemy',
        'offset': 240,
        'country': 'BL'
    },
    {
        'name': 'Atlantic/Bermuda',
        'offset': 180,
        'country': 'BM'
    },
    {
        'name': 'Asia/Brunei',
        'offset': -480,
        'country': 'BN'
    },
    {
        'name': 'Asia/Kuching',
        'offset': -480,
        'country': 'BN'
    },
    {
        'name': 'America/La_Paz',
        'offset': 240,
        'country': 'BO'
    },
    {
        'name': 'America/Kralendijk',
        'offset': 240,
        'country': 'BQ'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'BQ'
    },
    {
        'name': 'America/Araguaina',
        'offset': 180,
        'country': 'BR'
    },
    {
        'name': 'America/Bahia',
        'offset': 180,
        'country': 'BR'
    },
    {
        'name': 'America/Belem',
        'offset': 180,
        'country': 'BR'
    },
    {
        'name': 'America/Boa_Vista',
        'offset': 240,
        'country': 'BR'
    },
    {
        'name': 'America/Campo_Grande',
        'offset': 240,
        'country': 'BR'
    },
    {
        'name': 'America/Cuiaba',
        'offset': 240,
        'country': 'BR'
    },
    {
        'name': 'America/Eirunepe',
        'offset': 300,
        'country': 'BR'
    },
    {
        'name': 'America/Fortaleza',
        'offset': 180,
        'country': 'BR'
    },
    {
        'name': 'America/Maceio',
        'offset': 180,
        'country': 'BR'
    },
    {
        'name': 'America/Manaus',
        'offset': 240,
        'country': 'BR'
    },
    {
        'name': 'America/Noronha',
        'offset': 120,
        'country': 'BR'
    },
    {
        'name': 'America/Porto_Velho',
        'offset': 240,
        'country': 'BR'
    },
    {
        'name': 'America/Recife',
        'offset': 180,
        'country': 'BR'
    },
    {
        'name': 'America/Rio_Branco',
        'offset': 300,
        'country': 'BR'
    },
    {
        'name': 'America/Santarem',
        'offset': 180,
        'country': 'BR'
    },
    {
        'name': 'America/Sao_Paulo',
        'offset': 180,
        'country': 'BR'
    },
    {
        'name': 'America/Nassau',
        'offset': 240,
        'country': 'BS'
    },
    {
        'name': 'America/Toronto',
        'offset': 240,
        'country': 'BS'
    },
    {
        'name': 'Asia/Thimphu',
        'offset': -360,
        'country': 'BT'
    },
    {
        'name': 'Africa/Gaborone',
        'offset': -120,
        'country': 'BW'
    },
    {
        'name': 'Africa/Maputo',
        'offset': -120,
        'country': 'BW'
    },
    {
        'name': 'Europe/Minsk',
        'offset': -180,
        'country': 'BY'
    },
    {
        'name': 'America/Belize',
        'offset': 360,
        'country': 'BZ'
    },
    {
        'name': 'America/Atikokan',
        'offset': 300,
        'country': 'CA'
    },
    {
        'name': 'America/Blanc-Sablon',
        'offset': 240,
        'country': 'CA'
    },
    {
        'name': 'America/Cambridge_Bay',
        'offset': 360,
        'country': 'CA'
    },
    {
        'name': 'America/Creston',
        'offset': 420,
        'country': 'CA'
    },
    {
        'name': 'America/Dawson',
        'offset': 420,
        'country': 'CA'
    },
    {
        'name': 'America/Dawson_Creek',
        'offset': 420,
        'country': 'CA'
    },
    {
        'name': 'America/Edmonton',
        'offset': 360,
        'country': 'CA'
    },
    {
        'name': 'America/Fort_Nelson',
        'offset': 420,
        'country': 'CA'
    },
    {
        'name': 'America/Glace_Bay',
        'offset': 180,
        'country': 'CA'
    },
    {
        'name': 'America/Goose_Bay',
        'offset': 180,
        'country': 'CA'
    },
    {
        'name': 'America/Halifax',
        'offset': 180,
        'country': 'CA'
    },
    {
        'name': 'America/Inuvik',
        'offset': 360,
        'country': 'CA'
    },
    {
        'name': 'America/Iqaluit',
        'offset': 240,
        'country': 'CA'
    },
    {
        'name': 'America/Moncton',
        'offset': 180,
        'country': 'CA'
    },
    {
        'name': 'America/Panama',
        'offset': 300,
        'country': 'CA'
    },
    {
        'name': 'America/Phoenix',
        'offset': 420,
        'country': 'CA'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'CA'
    },
    {
        'name': 'America/Rankin_Inlet',
        'offset': 300,
        'country': 'CA'
    },
    {
        'name': 'America/Regina',
        'offset': 360,
        'country': 'CA'
    },
    {
        'name': 'America/Resolute',
        'offset': 300,
        'country': 'CA'
    },
    {
        'name': 'America/St_Johns',
        'offset': 150,
        'country': 'CA'
    },
    {
        'name': 'America/Swift_Current',
        'offset': 360,
        'country': 'CA'
    },
    {
        'name': 'America/Toronto',
        'offset': 240,
        'country': 'CA'
    },
    {
        'name': 'America/Vancouver',
        'offset': 420,
        'country': 'CA'
    },
    {
        'name': 'America/Whitehorse',
        'offset': 420,
        'country': 'CA'
    },
    {
        'name': 'America/Winnipeg',
        'offset': 300,
        'country': 'CA'
    },
    {
        'name': 'Asia/Yangon',
        'offset': -390,
        'country': 'CC'
    },
    {
        'name': 'Indian/Cocos',
        'offset': -390,
        'country': 'CC'
    },
    {
        'name': 'Africa/Kinshasa',
        'offset': -60,
        'country': 'CD'
    },
    {
        'name': 'Africa/Lagos',
        'offset': -60,
        'country': 'CD'
    },
    {
        'name': 'Africa/Lubumbashi',
        'offset': -120,
        'country': 'CD'
    },
    {
        'name': 'Africa/Maputo',
        'offset': -120,
        'country': 'CD'
    },
    {
        'name': 'Africa/Bangui',
        'offset': -60,
        'country': 'CF'
    },
    {
        'name': 'Africa/Lagos',
        'offset': -60,
        'country': 'CF'
    },
    {
        'name': 'Africa/Brazzaville',
        'offset': -60,
        'country': 'CG'
    },
    {
        'name': 'Africa/Lagos',
        'offset': -60,
        'country': 'CG'
    },
    {
        'name': 'Europe/Zurich',
        'offset': -120,
        'country': 'CH'
    },
    {
        'name': 'Africa/Abidjan',
        'offset': 0,
        'country': 'CI'
    },
    {
        'name': 'Pacific/Rarotonga',
        'offset': 600,
        'country': 'CK'
    },
    {
        'name': 'America/Punta_Arenas',
        'offset': 180,
        'country': 'CL'
    },
    {
        'name': 'America/Santiago',
        'offset': 240,
        'country': 'CL'
    },
    {
        'name': 'Pacific/Easter',
        'offset': 360,
        'country': 'CL'
    },
    {
        'name': 'Africa/Douala',
        'offset': -60,
        'country': 'CM'
    },
    {
        'name': 'Africa/Lagos',
        'offset': -60,
        'country': 'CM'
    },
    {
        'name': 'Asia/Shanghai',
        'offset': -480,
        'country': 'CN'
    },
    {
        'name': 'Asia/Urumqi',
        'offset': -360,
        'country': 'CN'
    },
    {
        'name': 'America/Bogota',
        'offset': 300,
        'country': 'CO'
    },
    {
        'name': 'America/Costa_Rica',
        'offset': 360,
        'country': 'CR'
    },
    {
        'name': 'America/Havana',
        'offset': 240,
        'country': 'CU'
    },
    {
        'name': 'Atlantic/Cape_Verde',
        'offset': 60,
        'country': 'CV'
    },
    {
        'name': 'America/Curacao',
        'offset': 240,
        'country': 'CW'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'CW'
    },
    {
        'name': 'Asia/Bangkok',
        'offset': -420,
        'country': 'CX'
    },
    {
        'name': 'Indian/Christmas',
        'offset': -420,
        'country': 'CX'
    },
    {
        'name': 'Asia/Famagusta',
        'offset': -180,
        'country': 'CY'
    },
    {
        'name': 'Asia/Nicosia',
        'offset': -180,
        'country': 'CY'
    },
    {
        'name': 'Europe/Prague',
        'offset': -120,
        'country': 'CZ'
    },
    {
        'name': 'Europe/Berlin',
        'offset': -120,
        'country': 'DE'
    },
    {
        'name': 'Europe/Busingen',
        'offset': -120,
        'country': 'DE'
    },
    {
        'name': 'Europe/Zurich',
        'offset': -120,
        'country': 'DE'
    },
    {
        'name': 'Africa/Djibouti',
        'offset': -180,
        'country': 'DJ'
    },
    {
        'name': 'Africa/Nairobi',
        'offset': -180,
        'country': 'DJ'
    },
    {
        'name': 'Europe/Berlin',
        'offset': -120,
        'country': 'DK'
    },
    {
        'name': 'Europe/Copenhagen',
        'offset': -120,
        'country': 'DK'
    },
    {
        'name': 'America/Dominica',
        'offset': 240,
        'country': 'DM'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'DM'
    },
    {
        'name': 'America/Santo_Domingo',
        'offset': 240,
        'country': 'DO'
    },
    {
        'name': 'Africa/Algiers',
        'offset': -60,
        'country': 'DZ'
    },
    {
        'name': 'America/Guayaquil',
        'offset': 300,
        'country': 'EC'
    },
    {
        'name': 'Pacific/Galapagos',
        'offset': 360,
        'country': 'EC'
    },
    {
        'name': 'Europe/Tallinn',
        'offset': -180,
        'country': 'EE'
    },
    {
        'name': 'Africa/Cairo',
        'offset': -180,
        'country': 'EG'
    },
    {
        'name': 'Africa/El_Aaiun',
        'offset': -60,
        'country': 'EH'
    },
    {
        'name': 'Africa/Asmara',
        'offset': -180,
        'country': 'ER'
    },
    {
        'name': 'Africa/Nairobi',
        'offset': -180,
        'country': 'ER'
    },
    {
        'name': 'Africa/Ceuta',
        'offset': -120,
        'country': 'ES'
    },
    {
        'name': 'Atlantic/Canary',
        'offset': -60,
        'country': 'ES'
    },
    {
        'name': 'Europe/Madrid',
        'offset': -120,
        'country': 'ES'
    },
    {
        'name': 'Africa/Addis_Ababa',
        'offset': -180,
        'country': 'ET'
    },
    {
        'name': 'Africa/Nairobi',
        'offset': -180,
        'country': 'ET'
    },
    {
        'name': 'Europe/Helsinki',
        'offset': -180,
        'country': 'FI'
    },
    {
        'name': 'Pacific/Fiji',
        'offset': -720,
        'country': 'FJ'
    },
    {
        'name': 'Atlantic/Stanley',
        'offset': 180,
        'country': 'FK'
    },
    {
        'name': 'Pacific/Chuuk',
        'offset': -600,
        'country': 'FM'
    },
    {
        'name': 'Pacific/Guadalcanal',
        'offset': -660,
        'country': 'FM'
    },
    {
        'name': 'Pacific/Kosrae',
        'offset': -660,
        'country': 'FM'
    },
    {
        'name': 'Pacific/Pohnpei',
        'offset': -660,
        'country': 'FM'
    },
    {
        'name': 'Pacific/Port_Moresby',
        'offset': -600,
        'country': 'FM'
    },
    {
        'name': 'Atlantic/Faroe',
        'offset': -60,
        'country': 'FO'
    },
    {
        'name': 'Europe/Paris',
        'offset': -120,
        'country': 'FR'
    },
    {
        'name': 'Africa/Lagos',
        'offset': -60,
        'country': 'GA'
    },
    {
        'name': 'Africa/Libreville',
        'offset': -60,
        'country': 'GA'
    },
    {
        'name': 'Europe/London',
        'offset': -60,
        'country': 'GB'
    },
    {
        'name': 'America/Grenada',
        'offset': 240,
        'country': 'GD'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'GD'
    },
    {
        'name': 'Asia/Tbilisi',
        'offset': -240,
        'country': 'GE'
    },
    {
        'name': 'America/Cayenne',
        'offset': 180,
        'country': 'GF'
    },
    {
        'name': 'Europe/Guernsey',
        'offset': -60,
        'country': 'GG'
    },
    {
        'name': 'Europe/London',
        'offset': -60,
        'country': 'GG'
    },
    {
        'name': 'Africa/Abidjan',
        'offset': 0,
        'country': 'GH'
    },
    {
        'name': 'Africa/Accra',
        'offset': 0,
        'country': 'GH'
    },
    {
        'name': 'Europe/Gibraltar',
        'offset': -120,
        'country': 'GI'
    },
    {
        'name': 'America/Danmarkshavn',
        'offset': 0,
        'country': 'GL'
    },
    {
        'name': 'America/Nuuk',
        'offset': 120,
        'country': 'GL'
    },
    {
        'name': 'America/Scoresbysund',
        'offset': 0,
        'country': 'GL'
    },
    {
        'name': 'America/Thule',
        'offset': 180,
        'country': 'GL'
    },
    {
        'name': 'Africa/Abidjan',
        'offset': 0,
        'country': 'GM'
    },
    {
        'name': 'Africa/Banjul',
        'offset': 0,
        'country': 'GM'
    },
    {
        'name': 'Africa/Abidjan',
        'offset': 0,
        'country': 'GN'
    },
    {
        'name': 'Africa/Conakry',
        'offset': 0,
        'country': 'GN'
    },
    {
        'name': 'America/Guadeloupe',
        'offset': 240,
        'country': 'GP'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'GP'
    },
    {
        'name': 'Africa/Lagos',
        'offset': -60,
        'country': 'GQ'
    },
    {
        'name': 'Africa/Malabo',
        'offset': -60,
        'country': 'GQ'
    },
    {
        'name': 'Europe/Athens',
        'offset': -180,
        'country': 'GR'
    },
    {
        'name': 'Atlantic/South_Georgia',
        'offset': 120,
        'country': 'GS'
    },
    {
        'name': 'America/Guatemala',
        'offset': 360,
        'country': 'GT'
    },
    {
        'name': 'Pacific/Guam',
        'offset': -600,
        'country': 'GU'
    },
    {
        'name': 'Africa/Bissau',
        'offset': 0,
        'country': 'GW'
    },
    {
        'name': 'America/Guyana',
        'offset': 240,
        'country': 'GY'
    },
    {
        'name': 'Asia/Hong_Kong',
        'offset': -480,
        'country': 'HK'
    },
    {
        'name': 'America/Tegucigalpa',
        'offset': 360,
        'country': 'HN'
    },
    {
        'name': 'Europe/Belgrade',
        'offset': -120,
        'country': 'HR'
    },
    {
        'name': 'Europe/Zagreb',
        'offset': -120,
        'country': 'HR'
    },
    {
        'name': 'America/Port-au-Prince',
        'offset': 240,
        'country': 'HT'
    },
    {
        'name': 'Europe/Budapest',
        'offset': -120,
        'country': 'HU'
    },
    {
        'name': 'Asia/Jakarta',
        'offset': -420,
        'country': 'ID'
    },
    {
        'name': 'Asia/Jayapura',
        'offset': -540,
        'country': 'ID'
    },
    {
        'name': 'Asia/Makassar',
        'offset': -480,
        'country': 'ID'
    },
    {
        'name': 'Asia/Pontianak',
        'offset': -420,
        'country': 'ID'
    },
    {
        'name': 'Europe/Dublin',
        'offset': -60,
        'country': 'IE'
    },
    {
        'name': 'Asia/Jerusalem',
        'offset': -180,
        'country': 'IL'
    },
    {
        'name': 'Europe/Isle_of_Man',
        'offset': -60,
        'country': 'IM'
    },
    {
        'name': 'Europe/London',
        'offset': -60,
        'country': 'IM'
    },
    {
        'name': 'Asia/Kolkata',
        'offset': -330,
        'country': 'IN'
    },
    {
        'name': 'Indian/Chagos',
        'offset': -360,
        'country': 'IO'
    },
    {
        'name': 'Asia/Baghdad',
        'offset': -180,
        'country': 'IQ'
    },
    {
        'name': 'Asia/Tehran',
        'offset': -210,
        'country': 'IR'
    },
    {
        'name': 'Africa/Abidjan',
        'offset': 0,
        'country': 'IS'
    },
    {
        'name': 'Atlantic/Reykjavik',
        'offset': 0,
        'country': 'IS'
    },
    {
        'name': 'Europe/Rome',
        'offset': -120,
        'country': 'IT'
    },
    {
        'name': 'Europe/Jersey',
        'offset': -60,
        'country': 'JE'
    },
    {
        'name': 'Europe/London',
        'offset': -60,
        'country': 'JE'
    },
    {
        'name': 'America/Jamaica',
        'offset': 300,
        'country': 'JM'
    },
    {
        'name': 'Asia/Amman',
        'offset': -180,
        'country': 'JO'
    },
    {
        'name': 'Asia/Tokyo',
        'offset': -540,
        'country': 'JP'
    },
    {
        'name': 'Africa/Nairobi',
        'offset': -180,
        'country': 'KE'
    },
    {
        'name': 'Asia/Bishkek',
        'offset': -360,
        'country': 'KG'
    },
    {
        'name': 'Asia/Bangkok',
        'offset': -420,
        'country': 'KH'
    },
    {
        'name': 'Asia/Phnom_Penh',
        'offset': -420,
        'country': 'KH'
    },
    {
        'name': 'Pacific/Kanton',
        'offset': -780,
        'country': 'KI'
    },
    {
        'name': 'Pacific/Kiritimati',
        'offset': -840,
        'country': 'KI'
    },
    {
        'name': 'Pacific/Tarawa',
        'offset': -720,
        'country': 'KI'
    },
    {
        'name': 'Africa/Nairobi',
        'offset': -180,
        'country': 'KM'
    },
    {
        'name': 'Indian/Comoro',
        'offset': -180,
        'country': 'KM'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'KN'
    },
    {
        'name': 'America/St_Kitts',
        'offset': 240,
        'country': 'KN'
    },
    {
        'name': 'Asia/Pyongyang',
        'offset': -540,
        'country': 'KP'
    },
    {
        'name': 'Asia/Seoul',
        'offset': -540,
        'country': 'KR'
    },
    {
        'name': 'Asia/Kuwait',
        'offset': -180,
        'country': 'KW'
    },
    {
        'name': 'Asia/Riyadh',
        'offset': -180,
        'country': 'KW'
    },
    {
        'name': 'America/Cayman',
        'offset': 300,
        'country': 'KY'
    },
    {
        'name': 'America/Panama',
        'offset': 300,
        'country': 'KY'
    },
    {
        'name': 'Asia/Almaty',
        'offset': -360,
        'country': 'KZ'
    },
    {
        'name': 'Asia/Aqtau',
        'offset': -300,
        'country': 'KZ'
    },
    {
        'name': 'Asia/Aqtobe',
        'offset': -300,
        'country': 'KZ'
    },
    {
        'name': 'Asia/Atyrau',
        'offset': -300,
        'country': 'KZ'
    },
    {
        'name': 'Asia/Oral',
        'offset': -300,
        'country': 'KZ'
    },
    {
        'name': 'Asia/Qostanay',
        'offset': -360,
        'country': 'KZ'
    },
    {
        'name': 'Asia/Qyzylorda',
        'offset': -300,
        'country': 'KZ'
    },
    {
        'name': 'Asia/Bangkok',
        'offset': -420,
        'country': 'LA'
    },
    {
        'name': 'Asia/Vientiane',
        'offset': -420,
        'country': 'LA'
    },
    {
        'name': 'Asia/Beirut',
        'offset': -180,
        'country': 'LB'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'LC'
    },
    {
        'name': 'America/St_Lucia',
        'offset': 240,
        'country': 'LC'
    },
    {
        'name': 'Europe/Vaduz',
        'offset': -120,
        'country': 'LI'
    },
    {
        'name': 'Europe/Zurich',
        'offset': -120,
        'country': 'LI'
    },
    {
        'name': 'Asia/Colombo',
        'offset': -330,
        'country': 'LK'
    },
    {
        'name': 'Africa/Monrovia',
        'offset': 0,
        'country': 'LR'
    },
    {
        'name': 'Africa/Johannesburg',
        'offset': -120,
        'country': 'LS'
    },
    {
        'name': 'Africa/Maseru',
        'offset': -120,
        'country': 'LS'
    },
    {
        'name': 'Europe/Vilnius',
        'offset': -180,
        'country': 'LT'
    },
    {
        'name': 'Europe/Brussels',
        'offset': -120,
        'country': 'LU'
    },
    {
        'name': 'Europe/Luxembourg',
        'offset': -120,
        'country': 'LU'
    },
    {
        'name': 'Europe/Riga',
        'offset': -180,
        'country': 'LV'
    },
    {
        'name': 'Africa/Tripoli',
        'offset': -120,
        'country': 'LY'
    },
    {
        'name': 'Africa/Casablanca',
        'offset': -60,
        'country': 'MA'
    },
    {
        'name': 'Europe/Monaco',
        'offset': -120,
        'country': 'MC'
    },
    {
        'name': 'Europe/Paris',
        'offset': -120,
        'country': 'MC'
    },
    {
        'name': 'Europe/Chisinau',
        'offset': -180,
        'country': 'MD'
    },
    {
        'name': 'Europe/Belgrade',
        'offset': -120,
        'country': 'ME'
    },
    {
        'name': 'Europe/Podgorica',
        'offset': -120,
        'country': 'ME'
    },
    {
        'name': 'America/Marigot',
        'offset': 240,
        'country': 'MF'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'MF'
    },
    {
        'name': 'Africa/Nairobi',
        'offset': -180,
        'country': 'MG'
    },
    {
        'name': 'Indian/Antananarivo',
        'offset': -180,
        'country': 'MG'
    },
    {
        'name': 'Pacific/Kwajalein',
        'offset': -720,
        'country': 'MH'
    },
    {
        'name': 'Pacific/Majuro',
        'offset': -720,
        'country': 'MH'
    },
    {
        'name': 'Pacific/Tarawa',
        'offset': -720,
        'country': 'MH'
    },
    {
        'name': 'Europe/Belgrade',
        'offset': -120,
        'country': 'MK'
    },
    {
        'name': 'Europe/Skopje',
        'offset': -120,
        'country': 'MK'
    },
    {
        'name': 'Africa/Abidjan',
        'offset': 0,
        'country': 'ML'
    },
    {
        'name': 'Africa/Bamako',
        'offset': 0,
        'country': 'ML'
    },
    {
        'name': 'Asia/Yangon',
        'offset': -390,
        'country': 'MM'
    },
    {
        'name': 'Asia/Choibalsan',
        'offset': -480,
        'country': 'MN'
    },
    {
        'name': 'Asia/Hovd',
        'offset': -420,
        'country': 'MN'
    },
    {
        'name': 'Asia/Ulaanbaatar',
        'offset': -480,
        'country': 'MN'
    },
    {
        'name': 'Asia/Macau',
        'offset': -480,
        'country': 'MO'
    },
    {
        'name': 'Pacific/Guam',
        'offset': -600,
        'country': 'MP'
    },
    {
        'name': 'Pacific/Saipan',
        'offset': -600,
        'country': 'MP'
    },
    {
        'name': 'America/Martinique',
        'offset': 240,
        'country': 'MQ'
    },
    {
        'name': 'Africa/Abidjan',
        'offset': 0,
        'country': 'MR'
    },
    {
        'name': 'Africa/Nouakchott',
        'offset': 0,
        'country': 'MR'
    },
    {
        'name': 'America/Montserrat',
        'offset': 240,
        'country': 'MS'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'MS'
    },
    {
        'name': 'Europe/Malta',
        'offset': -120,
        'country': 'MT'
    },
    {
        'name': 'Indian/Mauritius',
        'offset': -240,
        'country': 'MU'
    },
    {
        'name': 'Indian/Maldives',
        'offset': -300,
        'country': 'MV'
    },
    {
        'name': 'Africa/Blantyre',
        'offset': -120,
        'country': 'MW'
    },
    {
        'name': 'Africa/Maputo',
        'offset': -120,
        'country': 'MW'
    },
    {
        'name': 'America/Bahia_Banderas',
        'offset': 360,
        'country': 'MX'
    },
    {
        'name': 'America/Cancun',
        'offset': 300,
        'country': 'MX'
    },
    {
        'name': 'America/Chihuahua',
        'offset': 360,
        'country': 'MX'
    },
    {
        'name': 'America/Ciudad_Juarez',
        'offset': 360,
        'country': 'MX'
    },
    {
        'name': 'America/Hermosillo',
        'offset': 420,
        'country': 'MX'
    },
    {
        'name': 'America/Matamoros',
        'offset': 300,
        'country': 'MX'
    },
    {
        'name': 'America/Mazatlan',
        'offset': 420,
        'country': 'MX'
    },
    {
        'name': 'America/Merida',
        'offset': 360,
        'country': 'MX'
    },
    {
        'name': 'America/Mexico_City',
        'offset': 360,
        'country': 'MX'
    },
    {
        'name': 'America/Monterrey',
        'offset': 360,
        'country': 'MX'
    },
    {
        'name': 'America/Ojinaga',
        'offset': 300,
        'country': 'MX'
    },
    {
        'name': 'America/Tijuana',
        'offset': 420,
        'country': 'MX'
    },
    {
        'name': 'Asia/Kuala_Lumpur',
        'offset': -480,
        'country': 'MY'
    },
    {
        'name': 'Asia/Kuching',
        'offset': -480,
        'country': 'MY'
    },
    {
        'name': 'Asia/Singapore',
        'offset': -480,
        'country': 'MY'
    },
    {
        'name': 'Africa/Maputo',
        'offset': -120,
        'country': 'MZ'
    },
    {
        'name': 'Africa/Windhoek',
        'offset': -120,
        'country': 'NA'
    },
    {
        'name': 'Pacific/Noumea',
        'offset': -660,
        'country': 'NC'
    },
    {
        'name': 'Africa/Lagos',
        'offset': -60,
        'country': 'NE'
    },
    {
        'name': 'Africa/Niamey',
        'offset': -60,
        'country': 'NE'
    },
    {
        'name': 'Pacific/Norfolk',
        'offset': -660,
        'country': 'NF'
    },
    {
        'name': 'Africa/Lagos',
        'offset': -60,
        'country': 'NG'
    },
    {
        'name': 'America/Managua',
        'offset': 360,
        'country': 'NI'
    },
    {
        'name': 'Europe/Amsterdam',
        'offset': -120,
        'country': 'NL'
    },
    {
        'name': 'Europe/Brussels',
        'offset': -120,
        'country': 'NL'
    },
    {
        'name': 'Europe/Berlin',
        'offset': -120,
        'country': 'NO'
    },
    {
        'name': 'Europe/Oslo',
        'offset': -120,
        'country': 'NO'
    },
    {
        'name': 'Asia/Kathmandu',
        'offset': -345,
        'country': 'NP'
    },
    {
        'name': 'Pacific/Nauru',
        'offset': -720,
        'country': 'NR'
    },
    {
        'name': 'Pacific/Niue',
        'offset': 660,
        'country': 'NU'
    },
    {
        'name': 'Pacific/Auckland',
        'offset': -720,
        'country': 'NZ'
    },
    {
        'name': 'Pacific/Chatham',
        'offset': -765,
        'country': 'NZ'
    },
    {
        'name': 'Asia/Dubai',
        'offset': -240,
        'country': 'OM'
    },
    {
        'name': 'Asia/Muscat',
        'offset': -240,
        'country': 'OM'
    },
    {
        'name': 'America/Panama',
        'offset': 300,
        'country': 'PA'
    },
    {
        'name': 'America/Lima',
        'offset': 300,
        'country': 'PE'
    },
    {
        'name': 'Pacific/Gambier',
        'offset': 540,
        'country': 'PF'
    },
    {
        'name': 'Pacific/Marquesas',
        'offset': 570,
        'country': 'PF'
    },
    {
        'name': 'Pacific/Tahiti',
        'offset': 600,
        'country': 'PF'
    },
    {
        'name': 'Pacific/Bougainville',
        'offset': -660,
        'country': 'PG'
    },
    {
        'name': 'Pacific/Port_Moresby',
        'offset': -600,
        'country': 'PG'
    },
    {
        'name': 'Asia/Manila',
        'offset': -480,
        'country': 'PH'
    },
    {
        'name': 'Asia/Karachi',
        'offset': -300,
        'country': 'PK'
    },
    {
        'name': 'Europe/Warsaw',
        'offset': -120,
        'country': 'PL'
    },
    {
        'name': 'America/Miquelon',
        'offset': 120,
        'country': 'PM'
    },
    {
        'name': 'Pacific/Pitcairn',
        'offset': 480,
        'country': 'PN'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'PR'
    },
    {
        'name': 'Asia/Gaza',
        'offset': -180,
        'country': 'PS'
    },
    {
        'name': 'Asia/Hebron',
        'offset': -180,
        'country': 'PS'
    },
    {
        'name': 'Atlantic/Azores',
        'offset': 0,
        'country': 'PT'
    },
    {
        'name': 'Atlantic/Madeira',
        'offset': -60,
        'country': 'PT'
    },
    {
        'name': 'Europe/Lisbon',
        'offset': -60,
        'country': 'PT'
    },
    {
        'name': 'Pacific/Palau',
        'offset': -540,
        'country': 'PW'
    },
    {
        'name': 'America/Asuncion',
        'offset': 240,
        'country': 'PY'
    },
    {
        'name': 'Asia/Qatar',
        'offset': -180,
        'country': 'QA'
    },
    {
        'name': 'Asia/Dubai',
        'offset': -240,
        'country': 'RE'
    },
    {
        'name': 'Indian/Reunion',
        'offset': -240,
        'country': 'RE'
    },
    {
        'name': 'Europe/Bucharest',
        'offset': -180,
        'country': 'RO'
    },
    {
        'name': 'Europe/Belgrade',
        'offset': -120,
        'country': 'RS'
    },
    {
        'name': 'Asia/Anadyr',
        'offset': -720,
        'country': 'RU'
    },
    {
        'name': 'Asia/Barnaul',
        'offset': -420,
        'country': 'RU'
    },
    {
        'name': 'Asia/Chita',
        'offset': -540,
        'country': 'RU'
    },
    {
        'name': 'Asia/Irkutsk',
        'offset': -480,
        'country': 'RU'
    },
    {
        'name': 'Asia/Kamchatka',
        'offset': -720,
        'country': 'RU'
    },
    {
        'name': 'Asia/Khandyga',
        'offset': -540,
        'country': 'RU'
    },
    {
        'name': 'Asia/Krasnoyarsk',
        'offset': -420,
        'country': 'RU'
    },
    {
        'name': 'Asia/Magadan',
        'offset': -660,
        'country': 'RU'
    },
    {
        'name': 'Asia/Novokuznetsk',
        'offset': -420,
        'country': 'RU'
    },
    {
        'name': 'Asia/Novosibirsk',
        'offset': -420,
        'country': 'RU'
    },
    {
        'name': 'Asia/Omsk',
        'offset': -360,
        'country': 'RU'
    },
    {
        'name': 'Asia/Sakhalin',
        'offset': -660,
        'country': 'RU'
    },
    {
        'name': 'Asia/Srednekolymsk',
        'offset': -660,
        'country': 'RU'
    },
    {
        'name': 'Asia/Tomsk',
        'offset': -420,
        'country': 'RU'
    },
    {
        'name': 'Asia/Ust-Nera',
        'offset': -600,
        'country': 'RU'
    },
    {
        'name': 'Asia/Vladivostok',
        'offset': -600,
        'country': 'RU'
    },
    {
        'name': 'Asia/Yakutsk',
        'offset': -540,
        'country': 'RU'
    },
    {
        'name': 'Asia/Yekaterinburg',
        'offset': -300,
        'country': 'RU'
    },
    {
        'name': 'Europe/Astrakhan',
        'offset': -240,
        'country': 'RU'
    },
    {
        'name': 'Europe/Kaliningrad',
        'offset': -120,
        'country': 'RU'
    },
    {
        'name': 'Europe/Kirov',
        'offset': -180,
        'country': 'RU'
    },
    {
        'name': 'Europe/Moscow',
        'offset': -180,
        'country': 'RU'
    },
    {
        'name': 'Europe/Samara',
        'offset': -240,
        'country': 'RU'
    },
    {
        'name': 'Europe/Saratov',
        'offset': -240,
        'country': 'RU'
    },
    {
        'name': 'Europe/Simferopol',
        'offset': -180,
        'country': 'RU'
    },
    {
        'name': 'Europe/Ulyanovsk',
        'offset': -240,
        'country': 'RU'
    },
    {
        'name': 'Europe/Volgograd',
        'offset': -180,
        'country': 'RU'
    },
    {
        'name': 'Africa/Kigali',
        'offset': -120,
        'country': 'RW'
    },
    {
        'name': 'Africa/Maputo',
        'offset': -120,
        'country': 'RW'
    },
    {
        'name': 'Asia/Riyadh',
        'offset': -180,
        'country': 'SA'
    },
    {
        'name': 'Pacific/Guadalcanal',
        'offset': -660,
        'country': 'SB'
    },
    {
        'name': 'Asia/Dubai',
        'offset': -240,
        'country': 'SC'
    },
    {
        'name': 'Indian/Mahe',
        'offset': -240,
        'country': 'SC'
    },
    {
        'name': 'Africa/Khartoum',
        'offset': -120,
        'country': 'SD'
    },
    {
        'name': 'Europe/Berlin',
        'offset': -120,
        'country': 'SE'
    },
    {
        'name': 'Europe/Stockholm',
        'offset': -120,
        'country': 'SE'
    },
    {
        'name': 'Asia/Singapore',
        'offset': -480,
        'country': 'SG'
    },
    {
        'name': 'Africa/Abidjan',
        'offset': 0,
        'country': 'SH'
    },
    {
        'name': 'Atlantic/St_Helena',
        'offset': 0,
        'country': 'SH'
    },
    {
        'name': 'Europe/Belgrade',
        'offset': -120,
        'country': 'SI'
    },
    {
        'name': 'Europe/Ljubljana',
        'offset': -120,
        'country': 'SI'
    },
    {
        'name': 'Arctic/Longyearbyen',
        'offset': -120,
        'country': 'SJ'
    },
    {
        'name': 'Europe/Berlin',
        'offset': -120,
        'country': 'SJ'
    },
    {
        'name': 'Europe/Bratislava',
        'offset': -120,
        'country': 'SK'
    },
    {
        'name': 'Europe/Prague',
        'offset': -120,
        'country': 'SK'
    },
    {
        'name': 'Africa/Abidjan',
        'offset': 0,
        'country': 'SL'
    },
    {
        'name': 'Africa/Freetown',
        'offset': 0,
        'country': 'SL'
    },
    {
        'name': 'Europe/Rome',
        'offset': -120,
        'country': 'SM'
    },
    {
        'name': 'Europe/San_Marino',
        'offset': -120,
        'country': 'SM'
    },
    {
        'name': 'Africa/Abidjan',
        'offset': 0,
        'country': 'SN'
    },
    {
        'name': 'Africa/Dakar',
        'offset': 0,
        'country': 'SN'
    },
    {
        'name': 'Africa/Mogadishu',
        'offset': -180,
        'country': 'SO'
    },
    {
        'name': 'Africa/Nairobi',
        'offset': -180,
        'country': 'SO'
    },
    {
        'name': 'America/Paramaribo',
        'offset': 180,
        'country': 'SR'
    },
    {
        'name': 'Africa/Juba',
        'offset': -120,
        'country': 'SS'
    },
    {
        'name': 'Africa/Sao_Tome',
        'offset': 0,
        'country': 'ST'
    },
    {
        'name': 'America/El_Salvador',
        'offset': 360,
        'country': 'SV'
    },
    {
        'name': 'America/Lower_Princes',
        'offset': 240,
        'country': 'SX'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'SX'
    },
    {
        'name': 'Asia/Damascus',
        'offset': -180,
        'country': 'SY'
    },
    {
        'name': 'Africa/Johannesburg',
        'offset': -120,
        'country': 'SZ'
    },
    {
        'name': 'Africa/Mbabane',
        'offset': -120,
        'country': 'SZ'
    },
    {
        'name': 'America/Grand_Turk',
        'offset': 240,
        'country': 'TC'
    },
    {
        'name': 'Africa/Ndjamena',
        'offset': -60,
        'country': 'TD'
    },
    {
        'name': 'Asia/Dubai',
        'offset': -240,
        'country': 'TF'
    },
    {
        'name': 'Indian/Kerguelen',
        'offset': -300,
        'country': 'TF'
    },
    {
        'name': 'Indian/Maldives',
        'offset': -300,
        'country': 'TF'
    },
    {
        'name': 'Africa/Abidjan',
        'offset': 0,
        'country': 'TG'
    },
    {
        'name': 'Africa/Lome',
        'offset': 0,
        'country': 'TG'
    },
    {
        'name': 'Asia/Bangkok',
        'offset': -420,
        'country': 'TH'
    },
    {
        'name': 'Asia/Dushanbe',
        'offset': -300,
        'country': 'TJ'
    },
    {
        'name': 'Pacific/Fakaofo',
        'offset': -780,
        'country': 'TK'
    },
    {
        'name': 'Asia/Dili',
        'offset': -540,
        'country': 'TL'
    },
    {
        'name': 'Asia/Ashgabat',
        'offset': -300,
        'country': 'TM'
    },
    {
        'name': 'Africa/Tunis',
        'offset': -60,
        'country': 'TN'
    },
    {
        'name': 'Pacific/Tongatapu',
        'offset': -780,
        'country': 'TO'
    },
    {
        'name': 'Europe/Istanbul',
        'offset': -180,
        'country': 'TR'
    },
    {
        'name': 'America/Port_of_Spain',
        'offset': 240,
        'country': 'TT'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'TT'
    },
    {
        'name': 'Pacific/Funafuti',
        'offset': -720,
        'country': 'TV'
    },
    {
        'name': 'Pacific/Tarawa',
        'offset': -720,
        'country': 'TV'
    },
    {
        'name': 'Asia/Taipei',
        'offset': -480,
        'country': 'TW'
    },
    {
        'name': 'Africa/Dar_es_Salaam',
        'offset': -180,
        'country': 'TZ'
    },
    {
        'name': 'Africa/Nairobi',
        'offset': -180,
        'country': 'TZ'
    },
    {
        'name': 'Europe/Kyiv',
        'offset': -180,
        'country': 'UA'
    },
    {
        'name': 'Europe/Simferopol',
        'offset': -180,
        'country': 'UA'
    },
    {
        'name': 'Africa/Kampala',
        'offset': -180,
        'country': 'UG'
    },
    {
        'name': 'Africa/Nairobi',
        'offset': -180,
        'country': 'UG'
    },
    {
        'name': 'Pacific/Midway',
        'offset': 660,
        'country': 'UM'
    },
    {
        'name': 'Pacific/Pago_Pago',
        'offset': 660,
        'country': 'UM'
    },
    {
        'name': 'Pacific/Tarawa',
        'offset': -720,
        'country': 'UM'
    },
    {
        'name': 'Pacific/Wake',
        'offset': -720,
        'country': 'UM'
    },
    {
        'name': 'America/Adak',
        'offset': 540,
        'country': 'US'
    },
    {
        'name': 'America/Anchorage',
        'offset': 480,
        'country': 'US'
    },
    {
        'name': 'America/Boise',
        'offset': 360,
        'country': 'US'
    },
    {
        'name': 'America/Chicago',
        'offset': 300,
        'country': 'US'
    },
    {
        'name': 'America/Denver',
        'offset': 360,
        'country': 'US'
    },
    {
        'name': 'America/Detroit',
        'offset': 240,
        'country': 'US'
    },
    {
        'name': 'America/Indiana/Indianapolis',
        'offset': 240,
        'country': 'US'
    },
    {
        'name': 'America/Indiana/Knox',
        'offset': 300,
        'country': 'US'
    },
    {
        'name': 'America/Indiana/Marengo',
        'offset': 240,
        'country': 'US'
    },
    {
        'name': 'America/Indiana/Petersburg',
        'offset': 240,
        'country': 'US'
    },
    {
        'name': 'America/Indiana/Tell_City',
        'offset': 300,
        'country': 'US'
    },
    {
        'name': 'America/Indiana/Vevay',
        'offset': 240,
        'country': 'US'
    },
    {
        'name': 'America/Indiana/Vincennes',
        'offset': 240,
        'country': 'US'
    },
    {
        'name': 'America/Indiana/Winamac',
        'offset': 240,
        'country': 'US'
    },
    {
        'name': 'America/Juneau',
        'offset': 480,
        'country': 'US'
    },
    {
        'name': 'America/Kentucky/Louisville',
        'offset': 240,
        'country': 'US'
    },
    {
        'name': 'America/Kentucky/Monticello',
        'offset': 240,
        'country': 'US'
    },
    {
        'name': 'America/Los_Angeles',
        'offset': 420,
        'country': 'US'
    },
    {
        'name': 'America/Menominee',
        'offset': 300,
        'country': 'US'
    },
    {
        'name': 'America/Metlakatla',
        'offset': 480,
        'country': 'US'
    },
    {
        'name': 'America/New_York',
        'offset': 240,
        'country': 'US'
    },
    {
        'name': 'America/Nome',
        'offset': 480,
        'country': 'US'
    },
    {
        'name': 'America/North_Dakota/Beulah',
        'offset': 300,
        'country': 'US'
    },
    {
        'name': 'America/North_Dakota/Center',
        'offset': 300,
        'country': 'US'
    },
    {
        'name': 'America/North_Dakota/New_Salem',
        'offset': 300,
        'country': 'US'
    },
    {
        'name': 'America/Phoenix',
        'offset': 420,
        'country': 'US'
    },
    {
        'name': 'America/Sitka',
        'offset': 480,
        'country': 'US'
    },
    {
        'name': 'America/Yakutat',
        'offset': 480,
        'country': 'US'
    },
    {
        'name': 'Pacific/Honolulu',
        'offset': 600,
        'country': 'US'
    },
    {
        'name': 'America/Montevideo',
        'offset': 180,
        'country': 'UY'
    },
    {
        'name': 'Asia/Samarkand',
        'offset': -300,
        'country': 'UZ'
    },
    {
        'name': 'Asia/Tashkent',
        'offset': -300,
        'country': 'UZ'
    },
    {
        'name': 'Europe/Rome',
        'offset': -120,
        'country': 'VA'
    },
    {
        'name': 'Europe/Vatican',
        'offset': -120,
        'country': 'VA'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'VC'
    },
    {
        'name': 'America/St_Vincent',
        'offset': 240,
        'country': 'VC'
    },
    {
        'name': 'America/Caracas',
        'offset': 240,
        'country': 'VE'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'VG'
    },
    {
        'name': 'America/Tortola',
        'offset': 240,
        'country': 'VG'
    },
    {
        'name': 'America/Puerto_Rico',
        'offset': 240,
        'country': 'VI'
    },
    {
        'name': 'America/St_Thomas',
        'offset': 240,
        'country': 'VI'
    },
    {
        'name': 'Asia/Bangkok',
        'offset': -420,
        'country': 'VN'
    },
    {
        'name': 'Asia/Ho_Chi_Minh',
        'offset': -420,
        'country': 'VN'
    },
    {
        'name': 'Pacific/Efate',
        'offset': -660,
        'country': 'VU'
    },
    {
        'name': 'Pacific/Tarawa',
        'offset': -720,
        'country': 'WF'
    },
    {
        'name': 'Pacific/Wallis',
        'offset': -720,
        'country': 'WF'
    },
    {
        'name': 'Pacific/Apia',
        'offset': -780,
        'country': 'WS'
    },
    {
        'name': 'Asia/Aden',
        'offset': -180,
        'country': 'YE'
    },
    {
        'name': 'Asia/Riyadh',
        'offset': -180,
        'country': 'YE'
    },
    {
        'name': 'Africa/Nairobi',
        'offset': -180,
        'country': 'YT'
    },
    {
        'name': 'Indian/Mayotte',
        'offset': -180,
        'country': 'YT'
    },
    {
        'name': 'Africa/Johannesburg',
        'offset': -120,
        'country': 'ZA'
    },
    {
        'name': 'Africa/Lusaka',
        'offset': -120,
        'country': 'ZM'
    },
    {
        'name': 'Africa/Maputo',
        'offset': -120,
        'country': 'ZM'
    },
    {
        'name': 'Africa/Harare',
        'offset': -120,
        'country': 'ZW'
    },
    {
        'name': 'Africa/Maputo',
        'offset': -120,
        'country': 'ZW'
    }
];

const countryCurrencies = {
    'AC': 'SHP',
    'AD': 'EUR',
    'AE': 'AED',
    'AF': 'AFN',
    'AG': 'XCD',
    'AI': 'XCD',
    'AL': 'ALL',
    'AM': 'AMD',
    'AO': 'AOA',
    'AR': 'ARS',
    'AS': 'USD',
    'AT': 'EUR',
    'AU': 'AUD',
    'AW': 'AWG',
    'AX': 'EUR',
    'AZ': 'AZN',
    'BA': 'BAM',
    'BB': 'BBD',
    'BD': 'BDT',
    'BE': 'EUR',
    'BF': 'XOF',
    'BG': 'BGN',
    'BH': 'BHD',
    'BI': 'BIF',
    'BJ': 'XOF',
    'BL': 'EUR',
    'BM': 'BMD',
    'BN': 'BND',
    'BO': 'BOB',
    'BQ': 'USD',
    'BR': 'BRL',
    'BS': 'BSD',
    'BT': 'BTN',
    'BV': 'NOK',
    'BW': 'BWP',
    'BY': 'BYN',
    'BZ': 'BZD',
    'CA': 'CAD',
    'CC': 'AUD',
    'CD': 'CDF',
    'CF': 'XAF',
    'CG': 'XAF',
    'CH': 'CHF',
    'CI': 'XOF',
    'CK': 'NZD',
    'CL': 'CLP',
    'CM': 'XAF',
    'CN': 'CNY',
    'CO': 'COP',
    'CR': 'CRC',
    'CU': 'CUP',
    'CV': 'CVE',
    'CW': 'ANG',
    'CX': 'AUD',
    'CY': 'EUR',
    'CZ': 'CZK',
    'DE': 'EUR',
    'DG': 'USD',
    'DJ': 'DJF',
    'DK': 'DKK',
    'DM': 'XCD',
    'DO': 'DOP',
    'DZ': 'DZD',
    'EA': 'EUR',
    'EC': 'USD',
    'EE': 'EUR',
    'EG': 'EGP',
    'EH': 'MAD',
    'ER': 'ERN',
    'ES': 'EUR',
    'ET': 'ETB',
    'FI': 'EUR',
    'FJ': 'FJD',
    'FK': 'FKP',
    'FM': 'USD',
    'FO': 'DKK',
    'FR': 'EUR',
    'GA': 'XAF',
    'GB': 'GBP',
    'GD': 'XCD',
    'GE': 'GEL',
    'GF': 'EUR',
    'GG': 'GBP',
    'GH': 'GHS',
    'GI': 'GIP',
    'GL': 'DKK',
    'GM': 'GMD',
    'GN': 'GNF',
    'GP': 'EUR',
    'GQ': 'XAF',
    'GR': 'EUR',
    'GS': 'GBP',
    'GT': 'GTQ',
    'GU': 'USD',
    'GW': 'XOF',
    'GY': 'GYD',
    'HK': 'HKD',
    'HM': 'AUD',
    'HN': 'HNL',
    'HR': 'EUR',
    'HT': 'HTG',
    'HU': 'HUF',
    'IC': 'EUR',
    'ID': 'IDR',
    'IE': 'EUR',
    'IL': 'ILS',
    'IM': 'GBP',
    'IN': 'INR',
    'IO': 'USD',
    'IQ': 'IQD',
    'IR': 'IRR',
    'IS': 'ISK',
    'IT': 'EUR',
    'JE': 'GBP',
    'JM': 'JMD',
    'JO': 'JOD',
    'JP': 'JPY',
    'KE': 'KES',
    'KG': 'KGS',
    'KH': 'KHR',
    'KI': 'AUD',
    'KM': 'KMF',
    'KN': 'XCD',
    'KP': 'KPW',
    'KR': 'KRW',
    'KW': 'KWD',
    'KY': 'KYD',
    'KZ': 'KZT',
    'LA': 'LAK',
    'LB': 'LBP',
    'LC': 'XCD',
    'LI': 'CHF',
    'LK': 'LKR',
    'LR': 'LRD',
    'LS': 'ZAR',
    'LT': 'EUR',
    'LU': 'EUR',
    'LV': 'EUR',
    'LY': 'LYD',
    'MA': 'MAD',
    'MC': 'EUR',
    'MD': 'MDL',
    'ME': 'EUR',
    'MF': 'EUR',
    'MG': 'MGA',
    'MH': 'USD',
    'MK': 'MKD',
    'ML': 'XOF',
    'MM': 'MMK',
    'MN': 'MNT',
    'MO': 'MOP',
    'MP': 'USD',
    'MQ': 'EUR',
    'MR': 'MRU',
    'MS': 'XCD',
    'MT': 'EUR',
    'MU': 'MUR',
    'MV': 'MVR',
    'MW': 'MWK',
    'MX': 'MXN',
    'MY': 'MYR',
    'MZ': 'MZN',
    'NA': 'NAD',
    'NC': 'XPF',
    'NE': 'XOF',
    'NF': 'AUD',
    'NG': 'NGN',
    'NI': 'NIO',
    'NL': 'EUR',
    'NO': 'NOK',
    'NP': 'NPR',
    'NR': 'AUD',
    'NU': 'NZD',
    'NZ': 'NZD',
    'OM': 'OMR',
    'PA': 'PAB',
    'PE': 'PEN',
    'PF': 'XPF',
    'PG': 'PGK',
    'PH': 'PHP',
    'PK': 'PKR',
    'PL': 'PLN',
    'PM': 'EUR',
    'PN': 'NZD',
    'PR': 'USD',
    'PS': 'ILS',
    'PT': 'EUR',
    'PW': 'USD',
    'PY': 'PYG',
    'QA': 'QAR',
    'RE': 'EUR',
    'RO': 'RON',
    'RS': 'RSD',
    'RU': 'RUB',
    'RW': 'RWF',
    'SA': 'SAR',
    'SB': 'SBD',
    'SC': 'SCR',
    'SD': 'SDG',
    'SE': 'SEK',
    'SG': 'SGD',
    'SH': 'SHP',
    'SI': 'EUR',
    'SJ': 'NOK',
    'SK': 'EUR',
    'SL': 'SLE',
    'SM': 'EUR',
    'SN': 'XOF',
    'SO': 'SOS',
    'SR': 'SRD',
    'SS': 'SSP',
    'ST': 'STN',
    'SV': 'USD',
    'SX': 'ANG',
    'SY': 'SYP',
    'SZ': 'SZL',
    'TA': 'GBP',
    'TC': 'USD',
    'TD': 'XAF',
    'TF': 'EUR',
    'TG': 'XOF',
    'TH': 'THB',
    'TJ': 'TJS',
    'TK': 'NZD',
    'TL': 'USD',
    'TM': 'TMT',
    'TN': 'TND',
    'TO': 'TOP',
    'TR': 'TRY',
    'TT': 'TTD',
    'TV': 'AUD',
    'TW': 'TWD',
    'TZ': 'TZS',
    'UA': 'UAH',
    'UG': 'UGX',
    'UM': 'USD',
    'US': 'USD',
    'UY': 'UYU',
    'UZ': 'UZS',
    'VA': 'EUR',
    'VC': 'XCD',
    'VE': 'VES',
    'VG': 'USD',
    'VI': 'USD',
    'VN': 'VND',
    'VU': 'VUV',
    'WF': 'XPF',
    'WS': 'WST',
    'XK': 'EUR',
    'YE': 'YER',
    'YT': 'EUR',
    'ZA': 'ZAR',
    'ZM': 'ZMW',
    'ZW': 'USD'
};

const isCountryCode = (v) => {
    return typeof v === 'string' && countryCodes.find((code) => code === v) !== undefined;
};
const findCountry = (v) => {
    return countries.find(({ code }) => code === v);
};
const findCallingCode = (v) => {
    return isCountryCode(v) && Object.hasOwn(countryCallingCodes, v)
        ? countryCallingCodes[v]
        : undefined;
};
const findCountryLanguages = (v) => {
    return isCountryCode(v) && Object.hasOwn(countryLanguages, v)
        ? countryLanguages[v]
        : undefined;
};
const isCurrencyCode = (v) => {
    return typeof v === 'string' && currencyCodes.find((code) => code === v) !== undefined;
};
const findCurrency = (v) => {
    return currencies.find(({ code }) => code === v);
};
const findCurrencyCode = (v) => {
    return countryCurrencies[v] || undefined;
};
const isLanguageCode = (v) => {
    return typeof v === 'string' && languageCodes.find((code) => code === v) !== undefined;
};
const findLanguage = (v) => {
    return languages.find(({ code }) => code === v);
};
const findCountryTimezones = (v) => {
    return isCountryCode(v) && timezones.some(({ country }) => country === v)
        ? timezones.filter(({ country }) => country === v)
        : undefined;
};
const findTimezoneOffset = (v) => {
    return timezones.some(({ name }) => name === v)
        ? timezones.filter(({ name }) => name === v)[0].offset
        : undefined;
};

exports.countries = countries;
exports.countryCallingCodes = countryCallingCodes;
exports.countryCodes = countryCodes;
exports.countryCurrencies = countryCurrencies;
exports.countryLanguages = countryLanguages;
exports.currencies = currencies;
exports.currencyCodes = currencyCodes;
exports.findCallingCode = findCallingCode;
exports.findCountry = findCountry;
exports.findCountryLanguages = findCountryLanguages;
exports.findCountryTimezones = findCountryTimezones;
exports.findCurrency = findCurrency;
exports.findCurrencyCode = findCurrencyCode;
exports.findLanguage = findLanguage;
exports.findTimezoneOffset = findTimezoneOffset;
exports.isCountryCode = isCountryCode;
exports.isCurrencyCode = isCurrencyCode;
exports.isLanguageCode = isLanguageCode;
exports.languageCodes = languageCodes;
exports.languages = languages;
exports.timezones = timezones;
