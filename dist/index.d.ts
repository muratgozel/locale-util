interface Language {
    code: string;
    nativeName: string | undefined;
    englishName: string | undefined;
}
interface Currency {
    code: string;
    num: string;
    nativeName: string | undefined;
    englishName: string | undefined;
}
interface Country {
    code: string;
    nativeName: string | undefined;
    englishName: string | undefined;
}
interface Timezone {
    name: string;
    offset: number;
    country: string;
}

var countryCodes = [
	"AD",
	"AE",
	"AF",
	"AG",
	"AI",
	"AL",
	"AM",
	"AO",
	"AR",
	"AS",
	"AT",
	"AU",
	"AW",
	"AX",
	"AZ",
	"BA",
	"BB",
	"BD",
	"BE",
	"BF",
	"BG",
	"BH",
	"BI",
	"BJ",
	"BL",
	"BM",
	"BN",
	"BO",
	"BQ",
	"BR",
	"BS",
	"BT",
	"BW",
	"BY",
	"BZ",
	"CA",
	"CC",
	"CD",
	"CF",
	"CG",
	"CH",
	"CI",
	"CK",
	"CL",
	"CM",
	"CN",
	"CO",
	"CR",
	"CU",
	"CV",
	"CW",
	"CX",
	"CY",
	"CZ",
	"DE",
	"DG",
	"DJ",
	"DK",
	"DM",
	"DO",
	"DZ",
	"EA",
	"EC",
	"EE",
	"EG",
	"EH",
	"ER",
	"ES",
	"ET",
	"FI",
	"FJ",
	"FK",
	"FM",
	"FO",
	"FR",
	"GA",
	"GB",
	"GD",
	"GE",
	"GF",
	"GG",
	"GH",
	"GI",
	"GL",
	"GM",
	"GN",
	"GP",
	"GQ",
	"GR",
	"GT",
	"GU",
	"GW",
	"GY",
	"HK",
	"HN",
	"HR",
	"HT",
	"HU",
	"IC",
	"ID",
	"IE",
	"IL",
	"IM",
	"IN",
	"IO",
	"IQ",
	"IR",
	"IS",
	"IT",
	"JE",
	"JM",
	"JO",
	"JP",
	"KE",
	"KG",
	"KH",
	"KI",
	"KM",
	"KN",
	"KP",
	"KR",
	"KW",
	"KY",
	"KZ",
	"LA",
	"LB",
	"LC",
	"LI",
	"LK",
	"LR",
	"LS",
	"LT",
	"LU",
	"LV",
	"LY",
	"MA",
	"MC",
	"MD",
	"ME",
	"MF",
	"MG",
	"MH",
	"MK",
	"ML",
	"MM",
	"MN",
	"MO",
	"MP",
	"MQ",
	"MR",
	"MS",
	"MT",
	"MU",
	"MV",
	"MW",
	"MX",
	"MY",
	"MZ",
	"NA",
	"NC",
	"NE",
	"NF",
	"NG",
	"NI",
	"NL",
	"NO",
	"NP",
	"NR",
	"NU",
	"NZ",
	"OM",
	"PA",
	"PE",
	"PF",
	"PG",
	"PH",
	"PK",
	"PL",
	"PM",
	"PN",
	"PR",
	"PS",
	"PT",
	"PW",
	"PY",
	"QA",
	"RE",
	"RO",
	"RS",
	"RU",
	"RW",
	"SA",
	"SB",
	"SC",
	"SD",
	"SE",
	"SG",
	"SH",
	"SI",
	"SJ",
	"SK",
	"SL",
	"SM",
	"SN",
	"SO",
	"SR",
	"SS",
	"ST",
	"SV",
	"SX",
	"SY",
	"SZ",
	"TC",
	"TD",
	"TG",
	"TH",
	"TJ",
	"TK",
	"TL",
	"TM",
	"TN",
	"TO",
	"TR",
	"TT",
	"TV",
	"TW",
	"TZ",
	"UA",
	"UG",
	"UM",
	"US",
	"UY",
	"UZ",
	"VA",
	"VC",
	"VE",
	"VG",
	"VI",
	"VN",
	"VU",
	"WF",
	"WS",
	"XK",
	"YE",
	"YT",
	"ZA",
	"ZM",
	"ZW"
];

var countries = [
	{
		code: "AD",
		nativeName: "Andorra",
		englishName: "Andorra"
	},
	{
		code: "AE",
		nativeName: "الإمارات العربية المتحدة",
		englishName: "United Arab Emirates"
	},
	{
		code: "AF",
		nativeName: "افغانستان",
		englishName: "Afghanistan"
	},
	{
		code: "AG",
		nativeName: "Antigua & Barbuda",
		englishName: "Antigua & Barbuda"
	},
	{
		code: "AI",
		nativeName: "Anguilla",
		englishName: "Anguilla"
	},
	{
		code: "AL",
		nativeName: "Shqipëri",
		englishName: "Albania"
	},
	{
		code: "AM",
		nativeName: "Հայաստան",
		englishName: "Armenia"
	},
	{
		code: "AO",
		nativeName: "Angola",
		englishName: "Angola"
	},
	{
		code: "AR",
		nativeName: "Argentina",
		englishName: "Argentina"
	},
	{
		code: "AS",
		nativeName: "American Samoa",
		englishName: "American Samoa"
	},
	{
		code: "AT",
		nativeName: "Österreich",
		englishName: "Austria"
	},
	{
		code: "AU",
		nativeName: "Australia",
		englishName: "Australia"
	},
	{
		code: "AW",
		nativeName: "Aruba",
		englishName: "Aruba"
	},
	{
		code: "AX",
		nativeName: "Åland",
		englishName: "Åland Islands"
	},
	{
		code: "AZ",
		nativeName: "Azərbaycan",
		englishName: "Azerbaijan"
	},
	{
		code: "BA",
		nativeName: "Bosna i Hercegovina",
		englishName: "Bosnia & Herzegovina"
	},
	{
		code: "BB",
		nativeName: "Barbados",
		englishName: "Barbados"
	},
	{
		code: "BD",
		nativeName: "বাংলাদেশ",
		englishName: "Bangladesh"
	},
	{
		code: "BE",
		nativeName: "België",
		englishName: "Belgium"
	},
	{
		code: "BF",
		nativeName: "Burkina Faso",
		englishName: "Burkina Faso"
	},
	{
		code: "BG",
		nativeName: "България",
		englishName: "Bulgaria"
	},
	{
		code: "BH",
		nativeName: "البحرين",
		englishName: "Bahrain"
	},
	{
		code: "BI",
		nativeName: "Uburundi",
		englishName: "Burundi"
	},
	{
		code: "BJ",
		nativeName: "Bénin",
		englishName: "Benin"
	},
	{
		code: "BL",
		nativeName: "Saint-Barthélemy",
		englishName: "St. Barthélemy"
	},
	{
		code: "BM",
		nativeName: "Bermuda",
		englishName: "Bermuda"
	},
	{
		code: "BN",
		nativeName: "Brunei",
		englishName: "Brunei"
	},
	{
		code: "BO",
		nativeName: "Bolivia",
		englishName: "Bolivia"
	},
	{
		code: "BQ",
		nativeName: "Caribisch Nederland",
		englishName: "Caribbean Netherlands"
	},
	{
		code: "BR",
		nativeName: "Brasil",
		englishName: "Brazil"
	},
	{
		code: "BS",
		nativeName: "Bahamas",
		englishName: "Bahamas"
	},
	{
		code: "BT",
		nativeName: "འབྲུག",
		englishName: "Bhutan"
	},
	{
		code: "BW",
		nativeName: "Botswana",
		englishName: "Botswana"
	},
	{
		code: "BY",
		nativeName: "Беларусь",
		englishName: "Belarus"
	},
	{
		code: "BZ",
		nativeName: "Belize",
		englishName: "Belize"
	},
	{
		code: "CA",
		nativeName: "Canada",
		englishName: "Canada"
	},
	{
		code: "CC",
		nativeName: "Cocos (Keeling) Islands",
		englishName: "Cocos (Keeling) Islands"
	},
	{
		code: "CD",
		nativeName: "Jamhuri ya Kidemokrasia ya Kongo",
		englishName: "Congo - Kinshasa"
	},
	{
		code: "CF",
		nativeName: "République centrafricaine",
		englishName: "Central African Republic"
	},
	{
		code: "CG",
		nativeName: "Congo-Brazzaville",
		englishName: "Congo - Brazzaville"
	},
	{
		code: "CH",
		nativeName: "Schweiz",
		englishName: "Switzerland"
	},
	{
		code: "CI",
		nativeName: "Côte d’Ivoire",
		englishName: "Côte d’Ivoire"
	},
	{
		code: "CK",
		nativeName: "Cook Islands",
		englishName: "Cook Islands"
	},
	{
		code: "CL",
		nativeName: "Chile",
		englishName: "Chile"
	},
	{
		code: "CM",
		nativeName: "Cameroun",
		englishName: "Cameroon"
	},
	{
		code: "CN",
		nativeName: "中国",
		englishName: "China"
	},
	{
		code: "CO",
		nativeName: "Colombia",
		englishName: "Colombia"
	},
	{
		code: "CR",
		nativeName: "Costa Rica",
		englishName: "Costa Rica"
	},
	{
		code: "CU",
		nativeName: "Cuba",
		englishName: "Cuba"
	},
	{
		code: "CV",
		nativeName: "Cabo Verde",
		englishName: "Cape Verde"
	},
	{
		code: "CW",
		nativeName: "Kòrsou",
		englishName: "Curaçao"
	},
	{
		code: "CX",
		nativeName: "Christmas Island",
		englishName: "Christmas Island"
	},
	{
		code: "CY",
		nativeName: "Κύπρος",
		englishName: "Cyprus"
	},
	{
		code: "CZ",
		nativeName: "Česko",
		englishName: "Czechia"
	},
	{
		code: "DE",
		nativeName: "Deutschland",
		englishName: "Germany"
	},
	{
		code: "DG",
		nativeName: "Diego Garcia",
		englishName: "Diego Garcia"
	},
	{
		code: "DJ",
		nativeName: "جيبوتي",
		englishName: "Djibouti"
	},
	{
		code: "DK",
		nativeName: "Danmark",
		englishName: "Denmark"
	},
	{
		code: "DM",
		nativeName: "Dominica",
		englishName: "Dominica"
	},
	{
		code: "DO",
		nativeName: "República Dominicana",
		englishName: "Dominican Republic"
	},
	{
		code: "DZ",
		nativeName: "الجزائر",
		englishName: "Algeria"
	},
	{
		code: "EA",
		nativeName: "Ceuta y Melilla",
		englishName: "Ceuta & Melilla"
	},
	{
		code: "EC",
		nativeName: "Ecuador",
		englishName: "Ecuador"
	},
	{
		code: "EE",
		nativeName: "Eesti",
		englishName: "Estonia"
	},
	{
		code: "EG",
		nativeName: "مصر",
		englishName: "Egypt"
	},
	{
		code: "EH",
		nativeName: "الصحراء الغربية",
		englishName: "Western Sahara"
	},
	{
		code: "ER",
		nativeName: "ኤርትራ",
		englishName: "Eritrea"
	},
	{
		code: "ES",
		nativeName: "España",
		englishName: "Spain"
	},
	{
		code: "ET",
		nativeName: "ኢትዮጵያ",
		englishName: "Ethiopia"
	},
	{
		code: "FI",
		nativeName: "Suomi",
		englishName: "Finland"
	},
	{
		code: "FJ",
		nativeName: "Fiji",
		englishName: "Fiji"
	},
	{
		code: "FK",
		nativeName: "Falkland Islands",
		englishName: "Falkland Islands"
	},
	{
		code: "FM",
		nativeName: "Micronesia",
		englishName: "Micronesia"
	},
	{
		code: "FO",
		nativeName: "Føroyar",
		englishName: "Faroe Islands"
	},
	{
		code: "FR",
		nativeName: "France",
		englishName: "France"
	},
	{
		code: "GA",
		nativeName: "Gabon",
		englishName: "Gabon"
	},
	{
		code: "GB",
		nativeName: "United Kingdom",
		englishName: "United Kingdom"
	},
	{
		code: "GD",
		nativeName: "Grenada",
		englishName: "Grenada"
	},
	{
		code: "GE",
		nativeName: "საქართველო",
		englishName: "Georgia"
	},
	{
		code: "GF",
		nativeName: "Guyane française",
		englishName: "French Guiana"
	},
	{
		code: "GG",
		nativeName: "Guernsey",
		englishName: "Guernsey"
	},
	{
		code: "GH",
		nativeName: "Gaana",
		englishName: "Ghana"
	},
	{
		code: "GI",
		nativeName: "Gibraltar",
		englishName: "Gibraltar"
	},
	{
		code: "GL",
		nativeName: "Kalaallit Nunaat",
		englishName: "Greenland"
	},
	{
		code: "GM",
		nativeName: "Gambia",
		englishName: "Gambia"
	},
	{
		code: "GN",
		nativeName: "Guinée",
		englishName: "Guinea"
	},
	{
		code: "GP",
		nativeName: "Guadeloupe",
		englishName: "Guadeloupe"
	},
	{
		code: "GQ",
		nativeName: "Guinea Ecuatorial",
		englishName: "Equatorial Guinea"
	},
	{
		code: "GR",
		nativeName: "Ελλάδα",
		englishName: "Greece"
	},
	{
		code: "GT",
		nativeName: "Guatemala",
		englishName: "Guatemala"
	},
	{
		code: "GU",
		nativeName: "Guam",
		englishName: "Guam"
	},
	{
		code: "GW",
		nativeName: "Guiné-Bissau",
		englishName: "Guinea-Bissau"
	},
	{
		code: "GY",
		nativeName: "Guyana",
		englishName: "Guyana"
	},
	{
		code: "HK",
		nativeName: "Hong Kong SAR China",
		englishName: "Hong Kong SAR China"
	},
	{
		code: "HN",
		nativeName: "Honduras",
		englishName: "Honduras"
	},
	{
		code: "HR",
		nativeName: "Hrvatska",
		englishName: "Croatia"
	},
	{
		code: "HT",
		nativeName: "Haïti",
		englishName: "Haiti"
	},
	{
		code: "HU",
		nativeName: "Magyarország",
		englishName: "Hungary"
	},
	{
		code: "IC",
		nativeName: "Canarias",
		englishName: "Canary Islands"
	},
	{
		code: "ID",
		nativeName: "Indonesia",
		englishName: "Indonesia"
	},
	{
		code: "IE",
		nativeName: "Ireland",
		englishName: "Ireland"
	},
	{
		code: "IL",
		nativeName: "ישראל",
		englishName: "Israel"
	},
	{
		code: "IM",
		nativeName: "Isle of Man",
		englishName: "Isle of Man"
	},
	{
		code: "IN",
		nativeName: "भारत",
		englishName: "India"
	},
	{
		code: "IO",
		nativeName: "British Indian Ocean Territory",
		englishName: "British Indian Ocean Territory"
	},
	{
		code: "IQ",
		nativeName: "العراق",
		englishName: "Iraq"
	},
	{
		code: "IR",
		nativeName: "ایران",
		englishName: "Iran"
	},
	{
		code: "IS",
		nativeName: "Ísland",
		englishName: "Iceland"
	},
	{
		code: "IT",
		nativeName: "Italia",
		englishName: "Italy"
	},
	{
		code: "JE",
		nativeName: "Jersey",
		englishName: "Jersey"
	},
	{
		code: "JM",
		nativeName: "Jamaica",
		englishName: "Jamaica"
	},
	{
		code: "JO",
		nativeName: "الأردن",
		englishName: "Jordan"
	},
	{
		code: "JP",
		nativeName: "日本",
		englishName: "Japan"
	},
	{
		code: "KE",
		nativeName: "Kenya",
		englishName: "Kenya"
	},
	{
		code: "KG",
		nativeName: "Кыргызстан",
		englishName: "Kyrgyzstan"
	},
	{
		code: "KH",
		nativeName: "កម្ពុជា",
		englishName: "Cambodia"
	},
	{
		code: "KI",
		nativeName: "Kiribati",
		englishName: "Kiribati"
	},
	{
		code: "KM",
		nativeName: "جزر القمر",
		englishName: "Comoros"
	},
	{
		code: "KN",
		nativeName: "St. Kitts & Nevis",
		englishName: "St. Kitts & Nevis"
	},
	{
		code: "KP",
		nativeName: "북한",
		englishName: "North Korea"
	},
	{
		code: "KR",
		nativeName: "대한민국",
		englishName: "South Korea"
	},
	{
		code: "KW",
		nativeName: "الكويت",
		englishName: "Kuwait"
	},
	{
		code: "KY",
		nativeName: "Cayman Islands",
		englishName: "Cayman Islands"
	},
	{
		code: "KZ",
		nativeName: "Казахстан",
		englishName: "Kazakhstan"
	},
	{
		code: "LA",
		nativeName: "ລາວ",
		englishName: "Laos"
	},
	{
		code: "LB",
		nativeName: "لبنان",
		englishName: "Lebanon"
	},
	{
		code: "LC",
		nativeName: "St. Lucia",
		englishName: "St. Lucia"
	},
	{
		code: "LI",
		nativeName: "Liechtenstein",
		englishName: "Liechtenstein"
	},
	{
		code: "LK",
		nativeName: "ශ්‍රී ලංකාව",
		englishName: "Sri Lanka"
	},
	{
		code: "LR",
		nativeName: "Liberia",
		englishName: "Liberia"
	},
	{
		code: "LS",
		nativeName: "Lesotho",
		englishName: "Lesotho"
	},
	{
		code: "LT",
		nativeName: "Lietuva",
		englishName: "Lithuania"
	},
	{
		code: "LU",
		nativeName: "Luxembourg",
		englishName: "Luxembourg"
	},
	{
		code: "LV",
		nativeName: "Latvija",
		englishName: "Latvia"
	},
	{
		code: "LY",
		nativeName: "ليبيا",
		englishName: "Libya"
	},
	{
		code: "MA",
		nativeName: "المغرب",
		englishName: "Morocco"
	},
	{
		code: "MC",
		nativeName: "Monaco",
		englishName: "Monaco"
	},
	{
		code: "MD",
		nativeName: "Republica Moldova",
		englishName: "Moldova"
	},
	{
		code: "ME",
		englishName: "Montenegro"
	},
	{
		code: "MF",
		nativeName: "Saint-Martin",
		englishName: "St. Martin"
	},
	{
		code: "MG",
		nativeName: "Madagasikara",
		englishName: "Madagascar"
	},
	{
		code: "MH",
		nativeName: "Marshall Islands",
		englishName: "Marshall Islands"
	},
	{
		code: "MK",
		nativeName: "Северна Македонија",
		englishName: "North Macedonia"
	},
	{
		code: "ML",
		nativeName: "Mali",
		englishName: "Mali"
	},
	{
		code: "MM",
		nativeName: "မြန်မာ",
		englishName: "Myanmar (Burma)"
	},
	{
		code: "MN",
		nativeName: "Монгол",
		englishName: "Mongolia"
	},
	{
		code: "MO",
		nativeName: "Macau, RAE da China",
		englishName: "Macao SAR China"
	},
	{
		code: "MP",
		nativeName: "Northern Mariana Islands",
		englishName: "Northern Mariana Islands"
	},
	{
		code: "MQ",
		nativeName: "Martinique",
		englishName: "Martinique"
	},
	{
		code: "MR",
		nativeName: "موريتانيا",
		englishName: "Mauritania"
	},
	{
		code: "MS",
		nativeName: "Montserrat",
		englishName: "Montserrat"
	},
	{
		code: "MT",
		nativeName: "Malta",
		englishName: "Malta"
	},
	{
		code: "MU",
		nativeName: "Mauritius",
		englishName: "Mauritius"
	},
	{
		code: "MV",
		nativeName: "ދިވެހި ރާއްޖެ",
		englishName: "Maldives"
	},
	{
		code: "MW",
		nativeName: "Malawi",
		englishName: "Malawi"
	},
	{
		code: "MX",
		nativeName: "México",
		englishName: "Mexico"
	},
	{
		code: "MY",
		nativeName: "Malaysia",
		englishName: "Malaysia"
	},
	{
		code: "MZ",
		nativeName: "Moçambique",
		englishName: "Mozambique"
	},
	{
		code: "NA",
		nativeName: "Namibia",
		englishName: "Namibia"
	},
	{
		code: "NC",
		nativeName: "Nouvelle-Calédonie",
		englishName: "New Caledonia"
	},
	{
		code: "NE",
		nativeName: "Niger",
		englishName: "Niger"
	},
	{
		code: "NF",
		nativeName: "Norfolk Island",
		englishName: "Norfolk Island"
	},
	{
		code: "NG",
		nativeName: "Nigeria",
		englishName: "Nigeria"
	},
	{
		code: "NI",
		nativeName: "Nicaragua",
		englishName: "Nicaragua"
	},
	{
		code: "NL",
		nativeName: "Nederland",
		englishName: "Netherlands"
	},
	{
		code: "NO",
		nativeName: "Norge",
		englishName: "Norway"
	},
	{
		code: "NP",
		nativeName: "नेपाल",
		englishName: "Nepal"
	},
	{
		code: "NR",
		nativeName: "Nauru",
		englishName: "Nauru"
	},
	{
		code: "NU",
		nativeName: "Niue",
		englishName: "Niue"
	},
	{
		code: "NZ",
		nativeName: "New Zealand",
		englishName: "New Zealand"
	},
	{
		code: "OM",
		nativeName: "عُمان",
		englishName: "Oman"
	},
	{
		code: "PA",
		nativeName: "Panamá",
		englishName: "Panama"
	},
	{
		code: "PE",
		nativeName: "Perú",
		englishName: "Peru"
	},
	{
		code: "PF",
		nativeName: "Polynésie française",
		englishName: "French Polynesia"
	},
	{
		code: "PG",
		nativeName: "Papua Niugini",
		englishName: "Papua New Guinea"
	},
	{
		code: "PH",
		nativeName: "Philippines",
		englishName: "Philippines"
	},
	{
		code: "PK",
		nativeName: "پاکستان",
		englishName: "Pakistan"
	},
	{
		code: "PL",
		nativeName: "Polska",
		englishName: "Poland"
	},
	{
		code: "PM",
		nativeName: "Saint-Pierre-et-Miquelon",
		englishName: "St. Pierre & Miquelon"
	},
	{
		code: "PN",
		nativeName: "Pitcairn Islands",
		englishName: "Pitcairn Islands"
	},
	{
		code: "PR",
		nativeName: "Puerto Rico",
		englishName: "Puerto Rico"
	},
	{
		code: "PS",
		nativeName: "الأراضي الفلسطينية",
		englishName: "Palestinian Territories"
	},
	{
		code: "PT",
		nativeName: "Portugal",
		englishName: "Portugal"
	},
	{
		code: "PW",
		nativeName: "Palau",
		englishName: "Palau"
	},
	{
		code: "PY",
		nativeName: "Paraguai",
		englishName: "Paraguay"
	},
	{
		code: "QA",
		nativeName: "قطر",
		englishName: "Qatar"
	},
	{
		code: "RE",
		nativeName: "La Réunion",
		englishName: "Réunion"
	},
	{
		code: "RO",
		nativeName: "România",
		englishName: "Romania"
	},
	{
		code: "RS",
		nativeName: "Србија",
		englishName: "Serbia"
	},
	{
		code: "RU",
		nativeName: "Россия",
		englishName: "Russia"
	},
	{
		code: "RW",
		nativeName: "U Rwanda",
		englishName: "Rwanda"
	},
	{
		code: "SA",
		nativeName: "المملكة العربية السعودية",
		englishName: "Saudi Arabia"
	},
	{
		code: "SB",
		nativeName: "Solomon Islands",
		englishName: "Solomon Islands"
	},
	{
		code: "SC",
		nativeName: "Seychelles",
		englishName: "Seychelles"
	},
	{
		code: "SD",
		nativeName: "السودان",
		englishName: "Sudan"
	},
	{
		code: "SE",
		nativeName: "Sverige",
		englishName: "Sweden"
	},
	{
		code: "SG",
		nativeName: "Singapore",
		englishName: "Singapore"
	},
	{
		code: "SH",
		nativeName: "St. Helena",
		englishName: "St. Helena"
	},
	{
		code: "SI",
		nativeName: "Slovenija",
		englishName: "Slovenia"
	},
	{
		code: "SJ",
		englishName: "Svalbard & Jan Mayen"
	},
	{
		code: "SK",
		nativeName: "Slovensko",
		englishName: "Slovakia"
	},
	{
		code: "SL",
		nativeName: "Sierra Leone",
		englishName: "Sierra Leone"
	},
	{
		code: "SM",
		nativeName: "San Marino",
		englishName: "San Marino"
	},
	{
		code: "SN",
		nativeName: "Senegaal",
		englishName: "Senegal"
	},
	{
		code: "SO",
		nativeName: "Soomaaliya",
		englishName: "Somalia"
	},
	{
		code: "SR",
		nativeName: "Suriname",
		englishName: "Suriname"
	},
	{
		code: "SS",
		nativeName: "South Sudan",
		englishName: "South Sudan"
	},
	{
		code: "ST",
		nativeName: "São Tomé e Príncipe",
		englishName: "São Tomé & Príncipe"
	},
	{
		code: "SV",
		nativeName: "El Salvador",
		englishName: "El Salvador"
	},
	{
		code: "SX",
		nativeName: "Sint Maarten",
		englishName: "Sint Maarten"
	},
	{
		code: "SY",
		nativeName: "سوريا",
		englishName: "Syria"
	},
	{
		code: "SZ",
		nativeName: "Eswatini",
		englishName: "Eswatini"
	},
	{
		code: "TC",
		nativeName: "Turks & Caicos Islands",
		englishName: "Turks & Caicos Islands"
	},
	{
		code: "TD",
		nativeName: "Tchad",
		englishName: "Chad"
	},
	{
		code: "TG",
		nativeName: "Togo",
		englishName: "Togo"
	},
	{
		code: "TH",
		nativeName: "ไทย",
		englishName: "Thailand"
	},
	{
		code: "TJ",
		nativeName: "Тоҷикистон",
		englishName: "Tajikistan"
	},
	{
		code: "TK",
		nativeName: "Tokelau",
		englishName: "Tokelau"
	},
	{
		code: "TL",
		nativeName: "Timor-Leste",
		englishName: "Timor-Leste"
	},
	{
		code: "TM",
		nativeName: "Türkmenistan",
		englishName: "Turkmenistan"
	},
	{
		code: "TN",
		nativeName: "تونس",
		englishName: "Tunisia"
	},
	{
		code: "TO",
		nativeName: "Tonga",
		englishName: "Tonga"
	},
	{
		code: "TR",
		nativeName: "Türkiye",
		englishName: "Türkiye"
	},
	{
		code: "TT",
		nativeName: "Trinidad & Tobago",
		englishName: "Trinidad & Tobago"
	},
	{
		code: "TV",
		nativeName: "Tuvalu",
		englishName: "Tuvalu"
	},
	{
		code: "TW",
		englishName: "Taiwan"
	},
	{
		code: "TZ",
		nativeName: "Tanzania",
		englishName: "Tanzania"
	},
	{
		code: "UA",
		nativeName: "Україна",
		englishName: "Ukraine"
	},
	{
		code: "UG",
		nativeName: "Uganda",
		englishName: "Uganda"
	},
	{
		code: "UM",
		nativeName: "U.S. Outlying Islands",
		englishName: "U.S. Outlying Islands"
	},
	{
		code: "US",
		nativeName: "United States",
		englishName: "United States"
	},
	{
		code: "UY",
		nativeName: "Uruguay",
		englishName: "Uruguay"
	},
	{
		code: "UZ",
		nativeName: "Oʻzbekiston",
		englishName: "Uzbekistan"
	},
	{
		code: "VA",
		nativeName: "Città del Vaticano",
		englishName: "Vatican City"
	},
	{
		code: "VC",
		nativeName: "St. Vincent & Grenadines",
		englishName: "St. Vincent & Grenadines"
	},
	{
		code: "VE",
		nativeName: "Venezuela",
		englishName: "Venezuela"
	},
	{
		code: "VG",
		nativeName: "British Virgin Islands",
		englishName: "British Virgin Islands"
	},
	{
		code: "VI",
		nativeName: "U.S. Virgin Islands",
		englishName: "U.S. Virgin Islands"
	},
	{
		code: "VN",
		nativeName: "Việt Nam",
		englishName: "Vietnam"
	},
	{
		code: "VU",
		nativeName: "Vanuatu",
		englishName: "Vanuatu"
	},
	{
		code: "WF",
		nativeName: "Wallis-et-Futuna",
		englishName: "Wallis & Futuna"
	},
	{
		code: "WS",
		nativeName: "Samoa",
		englishName: "Samoa"
	},
	{
		code: "XK",
		nativeName: "Kosovë",
		englishName: "Kosovo"
	},
	{
		code: "YE",
		nativeName: "اليمن",
		englishName: "Yemen"
	},
	{
		code: "YT",
		nativeName: "Mayotte",
		englishName: "Mayotte"
	},
	{
		code: "ZA",
		nativeName: "South Africa",
		englishName: "South Africa"
	},
	{
		code: "ZM",
		nativeName: "Zambia",
		englishName: "Zambia"
	},
	{
		code: "ZW",
		nativeName: "Zimbabwe",
		englishName: "Zimbabwe"
	}
];

var AC$1 = 247;
var AD$2 = 376;
var AE$2 = 971;
var AF$2 = 93;
var AG$2 = 1;
var AI$2 = 1;
var AL$2 = 355;
var AM$2 = 374;
var AO$2 = 244;
var AR$2 = 54;
var AS$2 = 1;
var AT$2 = 43;
var AU$2 = 61;
var AW$2 = 297;
var AX$2 = 358;
var AZ$2 = 994;
var BA$2 = 387;
var BB$2 = 1;
var BD$2 = 880;
var BE$2 = 32;
var BF$2 = 226;
var BG$2 = 359;
var BH$2 = 973;
var BI$2 = 257;
var BJ$2 = 229;
var BL$2 = 590;
var BM$2 = 1;
var BN$2 = 673;
var BO$2 = 591;
var BQ$2 = 599;
var BR$2 = 55;
var BS$2 = 1;
var BT$2 = 975;
var BW$2 = 267;
var BY$2 = 375;
var BZ$2 = 501;
var CA$2 = 1;
var CC$2 = 61;
var CD$2 = 243;
var CF$2 = 236;
var CG$2 = 242;
var CH$2 = 41;
var CI$2 = 225;
var CK$2 = 682;
var CL$2 = 56;
var CM$2 = 237;
var CN$2 = 86;
var CO$2 = 57;
var CR$2 = 506;
var CU$2 = 53;
var CV$2 = 238;
var CW$2 = 599;
var CX$2 = 61;
var CY$2 = 357;
var CZ$2 = 420;
var DE$2 = 49;
var DJ$2 = 253;
var DK$2 = 45;
var DM$2 = 1;
var DO$2 = 1;
var DZ$2 = 213;
var EC$2 = 593;
var EE$2 = 372;
var EG$2 = 20;
var EH$2 = 212;
var ER$2 = 291;
var ES$2 = 34;
var ET$2 = 251;
var FI$2 = 358;
var FJ$2 = 679;
var FK$2 = 500;
var FM$2 = 691;
var FO$2 = 298;
var FR$2 = 33;
var GA$2 = 241;
var GB$2 = 44;
var GD$2 = 1;
var GE$2 = 995;
var GF$2 = 594;
var GG$2 = 44;
var GH$2 = 233;
var GI$2 = 350;
var GL$2 = 299;
var GM$2 = 220;
var GN$2 = 224;
var GP$2 = 590;
var GQ$2 = 240;
var GR$2 = 30;
var GT$2 = 502;
var GU$2 = 1;
var GW$2 = 245;
var GY$2 = 592;
var HK$2 = 852;
var HN$2 = 504;
var HR$2 = 385;
var HT$2 = 509;
var HU$2 = 36;
var ID$2 = 62;
var IE$2 = 353;
var IL$2 = 972;
var IM$2 = 44;
var IN$2 = 91;
var IO$2 = 246;
var IQ$2 = 964;
var IR$2 = 98;
var IS$2 = 354;
var IT$2 = 39;
var JE$2 = 44;
var JM$2 = 1;
var JO$2 = 962;
var JP$2 = 81;
var KE$2 = 254;
var KG$2 = 996;
var KH$2 = 855;
var KI$2 = 686;
var KM$2 = 269;
var KN$2 = 1;
var KP$2 = 850;
var KR$2 = 82;
var KW$2 = 965;
var KY$2 = 1;
var KZ$2 = 7;
var LA$2 = 856;
var LB$2 = 961;
var LC$2 = 1;
var LI$2 = 423;
var LK$2 = 94;
var LR$2 = 231;
var LS$2 = 266;
var LT$2 = 370;
var LU$2 = 352;
var LV$2 = 371;
var LY$2 = 218;
var MA$2 = 212;
var MC$2 = 377;
var MD$2 = 373;
var ME$2 = 382;
var MF$2 = 590;
var MG$2 = 261;
var MH$2 = 692;
var MK$2 = 389;
var ML$2 = 223;
var MM$2 = 95;
var MN$2 = 976;
var MO$2 = 853;
var MP$2 = 1;
var MQ$2 = 596;
var MR$2 = 222;
var MS$2 = 1;
var MT$2 = 356;
var MU$2 = 230;
var MV$2 = 960;
var MW$2 = 265;
var MX$2 = 52;
var MY$2 = 60;
var MZ$2 = 258;
var NA$2 = 264;
var NC$2 = 687;
var NE$2 = 227;
var NF$2 = 672;
var NG$2 = 234;
var NI$2 = 505;
var NL$2 = 31;
var NO$2 = 47;
var NP$2 = 977;
var NR$2 = 674;
var NU$2 = 683;
var NZ$2 = 64;
var OM$2 = 968;
var PA$2 = 507;
var PE$2 = 51;
var PF$2 = 689;
var PG$2 = 675;
var PH$2 = 63;
var PK$2 = 92;
var PL$2 = 48;
var PM$2 = 508;
var PR$2 = 1;
var PS$2 = 970;
var PT$2 = 351;
var PW$2 = 680;
var PY$2 = 595;
var QA$2 = 974;
var RE$2 = 262;
var RO$2 = 40;
var RS$2 = 381;
var RU$2 = 7;
var RW$2 = 250;
var SA$2 = 966;
var SB$2 = 677;
var SC$2 = 248;
var SD$2 = 249;
var SE$2 = 46;
var SG$2 = 65;
var SH$2 = 290;
var SI$2 = 386;
var SJ$2 = 47;
var SK$2 = 421;
var SL$2 = 232;
var SM$2 = 378;
var SN$2 = 221;
var SO$2 = 252;
var SR$2 = 597;
var SS$2 = 211;
var ST$2 = 239;
var SV$2 = 503;
var SX$2 = 1;
var SY$2 = 963;
var SZ$2 = 268;
var TA$1 = 290;
var TC$2 = 1;
var TD$2 = 235;
var TG$2 = 228;
var TH$2 = 66;
var TJ$2 = 992;
var TK$2 = 690;
var TL$2 = 670;
var TM$2 = 993;
var TN$2 = 216;
var TO$2 = 676;
var TR$2 = 90;
var TT$2 = 1;
var TV$2 = 688;
var TW$2 = 886;
var TZ$2 = 255;
var UA$2 = 380;
var UG$2 = 256;
var US$2 = 1;
var UY$2 = 598;
var UZ$2 = 998;
var VA$2 = 39;
var VC$2 = 1;
var VE$2 = 58;
var VG$2 = 1;
var VI$2 = 1;
var VN$2 = 84;
var VU$2 = 678;
var WF$2 = 681;
var WS$2 = 685;
var XK$2 = 383;
var YE$2 = 967;
var YT$2 = 262;
var ZA$2 = 27;
var ZM$2 = 260;
var ZW$2 = 263;
var countryCallingCodes = {
	AC: AC$1,
	AD: AD$2,
	AE: AE$2,
	AF: AF$2,
	AG: AG$2,
	AI: AI$2,
	AL: AL$2,
	AM: AM$2,
	AO: AO$2,
	AR: AR$2,
	AS: AS$2,
	AT: AT$2,
	AU: AU$2,
	AW: AW$2,
	AX: AX$2,
	AZ: AZ$2,
	BA: BA$2,
	BB: BB$2,
	BD: BD$2,
	BE: BE$2,
	BF: BF$2,
	BG: BG$2,
	BH: BH$2,
	BI: BI$2,
	BJ: BJ$2,
	BL: BL$2,
	BM: BM$2,
	BN: BN$2,
	BO: BO$2,
	BQ: BQ$2,
	BR: BR$2,
	BS: BS$2,
	BT: BT$2,
	BW: BW$2,
	BY: BY$2,
	BZ: BZ$2,
	CA: CA$2,
	CC: CC$2,
	CD: CD$2,
	CF: CF$2,
	CG: CG$2,
	CH: CH$2,
	CI: CI$2,
	CK: CK$2,
	CL: CL$2,
	CM: CM$2,
	CN: CN$2,
	CO: CO$2,
	CR: CR$2,
	CU: CU$2,
	CV: CV$2,
	CW: CW$2,
	CX: CX$2,
	CY: CY$2,
	CZ: CZ$2,
	DE: DE$2,
	DJ: DJ$2,
	DK: DK$2,
	DM: DM$2,
	DO: DO$2,
	DZ: DZ$2,
	EC: EC$2,
	EE: EE$2,
	EG: EG$2,
	EH: EH$2,
	ER: ER$2,
	ES: ES$2,
	ET: ET$2,
	FI: FI$2,
	FJ: FJ$2,
	FK: FK$2,
	FM: FM$2,
	FO: FO$2,
	FR: FR$2,
	GA: GA$2,
	GB: GB$2,
	GD: GD$2,
	GE: GE$2,
	GF: GF$2,
	GG: GG$2,
	GH: GH$2,
	GI: GI$2,
	GL: GL$2,
	GM: GM$2,
	GN: GN$2,
	GP: GP$2,
	GQ: GQ$2,
	GR: GR$2,
	GT: GT$2,
	GU: GU$2,
	GW: GW$2,
	GY: GY$2,
	HK: HK$2,
	HN: HN$2,
	HR: HR$2,
	HT: HT$2,
	HU: HU$2,
	ID: ID$2,
	IE: IE$2,
	IL: IL$2,
	IM: IM$2,
	IN: IN$2,
	IO: IO$2,
	IQ: IQ$2,
	IR: IR$2,
	IS: IS$2,
	IT: IT$2,
	JE: JE$2,
	JM: JM$2,
	JO: JO$2,
	JP: JP$2,
	KE: KE$2,
	KG: KG$2,
	KH: KH$2,
	KI: KI$2,
	KM: KM$2,
	KN: KN$2,
	KP: KP$2,
	KR: KR$2,
	KW: KW$2,
	KY: KY$2,
	KZ: KZ$2,
	LA: LA$2,
	LB: LB$2,
	LC: LC$2,
	LI: LI$2,
	LK: LK$2,
	LR: LR$2,
	LS: LS$2,
	LT: LT$2,
	LU: LU$2,
	LV: LV$2,
	LY: LY$2,
	MA: MA$2,
	MC: MC$2,
	MD: MD$2,
	ME: ME$2,
	MF: MF$2,
	MG: MG$2,
	MH: MH$2,
	MK: MK$2,
	ML: ML$2,
	MM: MM$2,
	MN: MN$2,
	MO: MO$2,
	MP: MP$2,
	MQ: MQ$2,
	MR: MR$2,
	MS: MS$2,
	MT: MT$2,
	MU: MU$2,
	MV: MV$2,
	MW: MW$2,
	MX: MX$2,
	MY: MY$2,
	MZ: MZ$2,
	NA: NA$2,
	NC: NC$2,
	NE: NE$2,
	NF: NF$2,
	NG: NG$2,
	NI: NI$2,
	NL: NL$2,
	NO: NO$2,
	NP: NP$2,
	NR: NR$2,
	NU: NU$2,
	NZ: NZ$2,
	OM: OM$2,
	PA: PA$2,
	PE: PE$2,
	PF: PF$2,
	PG: PG$2,
	PH: PH$2,
	PK: PK$2,
	PL: PL$2,
	PM: PM$2,
	PR: PR$2,
	PS: PS$2,
	PT: PT$2,
	PW: PW$2,
	PY: PY$2,
	QA: QA$2,
	RE: RE$2,
	RO: RO$2,
	RS: RS$2,
	RU: RU$2,
	RW: RW$2,
	SA: SA$2,
	SB: SB$2,
	SC: SC$2,
	SD: SD$2,
	SE: SE$2,
	SG: SG$2,
	SH: SH$2,
	SI: SI$2,
	SJ: SJ$2,
	SK: SK$2,
	SL: SL$2,
	SM: SM$2,
	SN: SN$2,
	SO: SO$2,
	SR: SR$2,
	SS: SS$2,
	ST: ST$2,
	SV: SV$2,
	SX: SX$2,
	SY: SY$2,
	SZ: SZ$2,
	TA: TA$1,
	TC: TC$2,
	TD: TD$2,
	TG: TG$2,
	TH: TH$2,
	TJ: TJ$2,
	TK: TK$2,
	TL: TL$2,
	TM: TM$2,
	TN: TN$2,
	TO: TO$2,
	TR: TR$2,
	TT: TT$2,
	TV: TV$2,
	TW: TW$2,
	TZ: TZ$2,
	UA: UA$2,
	UG: UG$2,
	US: US$2,
	UY: UY$2,
	UZ: UZ$2,
	VA: VA$2,
	VC: VC$2,
	VE: VE$2,
	VG: VG$2,
	VI: VI$2,
	VN: VN$2,
	VU: VU$2,
	WF: WF$2,
	WS: WS$2,
	XK: XK$2,
	YE: YE$2,
	YT: YT$2,
	ZA: ZA$2,
	ZM: ZM$2,
	ZW: ZW$2
};

var AD$1 = [
	"ca"
];
var AE$1 = [
	"ar"
];
var AF$1 = [
	"fa",
	"ps",
	"tk"
];
var AG$1 = [
	"en"
];
var AI$1 = [
	"en"
];
var AL$1 = [
	"sq"
];
var AM$1 = [
	"hy"
];
var AO$1 = [
	"pt"
];
var AR$1 = [
	"es"
];
var AS$1 = [
	"en"
];
var AT$1 = [
	"de",
	"hr",
	"sl",
	"hu"
];
var AU$1 = [
	"en"
];
var AW$1 = [
	"nl",
	"pap"
];
var AX$1 = [
	"sv"
];
var AZ$1 = [
	"az"
];
var BA$1 = [
	"bs",
	"hr",
	"sr"
];
var BB$1 = [
	"en"
];
var BD$1 = [
	"bn"
];
var BE$1 = [
	"nl",
	"fr",
	"de"
];
var BF$1 = [
	"fr"
];
var BG$1 = [
	"bg"
];
var BH$1 = [
	"ar"
];
var BI$1 = [
	"rn",
	"fr",
	"en"
];
var BJ$1 = [
	"fr"
];
var BL$1 = [
	"fr"
];
var BM$1 = [
	"en"
];
var BN$1 = [
	"ms"
];
var BO$1 = [
	"es",
	"qu",
	"ay"
];
var BQ$1 = [
	"nl"
];
var BR$1 = [
	"pt",
	"vec"
];
var BS$1 = [
	"en"
];
var BT$1 = [
	"dz"
];
var BW$1 = [
	"en",
	"tn"
];
var BY$1 = [
	"be",
	"ru"
];
var BZ$1 = [
	"en"
];
var CA$1 = [
	"en",
	"fr",
	"iu",
	"chp",
	"cr",
	"den",
	"dgr",
	"gwi"
];
var CC$1 = [
	"en"
];
var CD$1 = [
	"sw",
	"lua",
	"fr",
	"ln",
	"kg"
];
var CF$1 = [
	"fr",
	"sg"
];
var CG$1 = [
	"fr"
];
var CH$1 = [
	"de",
	"gsw",
	"fr",
	"it",
	"rm"
];
var CI$1 = [
	"fr"
];
var CK$1 = [
	"en"
];
var CL$1 = [
	"es"
];
var CM$1 = [
	"fr",
	"en"
];
var CN$1 = [
	"zh",
	"ug",
	"za",
	"bo",
	"ko"
];
var CO$1 = [
	"es"
];
var CR$1 = [
	"es"
];
var CU$1 = [
	"es"
];
var CV$1 = [
	"pt"
];
var CW$1 = [
	"pap",
	"nl"
];
var CX$1 = [
	"en"
];
var CY$1 = [
	"el",
	"tr"
];
var CZ$1 = [
	"cs"
];
var DE$1 = [
	"de",
	"frr"
];
var DG$1 = [
	"en"
];
var DJ$1 = [
	"ar",
	"fr"
];
var DK$1 = [
	"da",
	"de",
	"kl"
];
var DM$1 = [
	"en"
];
var DO$1 = [
	"es"
];
var DZ$1 = [
	"ar",
	"fr"
];
var EA$1 = [
	"es"
];
var EC$1 = [
	"es",
	"qu"
];
var EE$1 = [
	"et"
];
var EG$1 = [
	"ar"
];
var EH$1 = [
	"ar"
];
var ER$1 = [
	"ti",
	"en",
	"ar"
];
var ES$1 = [
	"es",
	"ca",
	"gl",
	"eu",
	"ast",
	"oc"
];
var ET$1 = [
	"am"
];
var FI$1 = [
	"fi",
	"sv",
	"sms"
];
var FJ$1 = [
	"en",
	"hif",
	"fj"
];
var FK$1 = [
	"en"
];
var FM$1 = [
	"en"
];
var FO$1 = [
	"fo"
];
var FR$1 = [
	"fr"
];
var GA$1 = [
	"fr"
];
var GB$1 = [
	"en",
	"cy",
	"ga",
	"gd"
];
var GD$1 = [
	"en"
];
var GE$1 = [
	"ka",
	"ab",
	"os"
];
var GF$1 = [
	"fr"
];
var GG$1 = [
	"en"
];
var GH$1 = [
	"ak",
	"en",
	"ee",
	"gaa"
];
var GI$1 = [
	"en"
];
var GL$1 = [
	"kl"
];
var GM$1 = [
	"en"
];
var GN$1 = [
	"fr"
];
var GP$1 = [
	"fr"
];
var GQ$1 = [
	"es",
	"fr",
	"pt"
];
var GR$1 = [
	"el"
];
var GT$1 = [
	"es",
	"quc"
];
var GU$1 = [
	"en",
	"ch"
];
var GW$1 = [
	"pt"
];
var GY$1 = [
	"en"
];
var HK$1 = [
	"en"
];
var HN$1 = [
	"es"
];
var HR$1 = [
	"hr",
	"it",
	"vec"
];
var HT$1 = [
	"fr"
];
var HU$1 = [
	"hu"
];
var IC$1 = [
	"es"
];
var ID$1 = [
	"id"
];
var IE$1 = [
	"en",
	"ga"
];
var IL$1 = [
	"he",
	"ar"
];
var IM$1 = [
	"en",
	"gv"
];
var IN$1 = [
	"hi",
	"en",
	"bn",
	"te",
	"mr",
	"ta",
	"ur",
	"gu",
	"kn",
	"ml",
	"or",
	"pa",
	"as",
	"mai",
	"ne",
	"sat",
	"ks",
	"kok",
	"sd",
	"kha",
	"sa"
];
var IO$1 = [
	"en"
];
var IQ$1 = [
	"ar",
	"ckb"
];
var IR$1 = [
	"fa"
];
var IS$1 = [
	"is"
];
var IT$1 = [
	"it",
	"fr",
	"vec"
];
var JE$1 = [
	"en"
];
var JM$1 = [
	"en"
];
var JO$1 = [
	"ar"
];
var JP$1 = [
	"ja"
];
var KE$1 = [
	"sw",
	"en"
];
var KG$1 = [
	"ky",
	"ru"
];
var KH$1 = [
	"km"
];
var KI$1 = [
	"en",
	"gil"
];
var KM$1 = [
	"ar",
	"fr",
	"zdj",
	"wni"
];
var KN$1 = [
	"en"
];
var KP$1 = [
	"ko"
];
var KR$1 = [
	"ko"
];
var KW$1 = [
	"ar"
];
var KY$1 = [
	"en"
];
var KZ$1 = [
	"ru",
	"kk"
];
var LA$1 = [
	"lo"
];
var LB$1 = [
	"ar"
];
var LC$1 = [
	"en"
];
var LI$1 = [
	"de",
	"gsw"
];
var LK$1 = [
	"si",
	"ta"
];
var LR$1 = [
	"en"
];
var LS$1 = [
	"en"
];
var LT$1 = [
	"lt"
];
var LU$1 = [
	"fr",
	"lb",
	"de"
];
var LV$1 = [
	"lv"
];
var LY$1 = [
	"ar"
];
var MA$1 = [
	"ar",
	"fr",
	"tzm"
];
var MC$1 = [
	"fr"
];
var MD$1 = [
	"ro"
];
var ME$1 = [
];
var MF$1 = [
	"fr"
];
var MG$1 = [
	"mg",
	"fr",
	"en"
];
var MH$1 = [
	"en",
	"mh"
];
var MK$1 = [
	"mk",
	"sq"
];
var ML$1 = [
	"fr"
];
var MM$1 = [
	"my"
];
var MN$1 = [
	"mn"
];
var MO$1 = [
	"pt"
];
var MP$1 = [
	"en"
];
var MQ$1 = [
	"fr"
];
var MR$1 = [
	"ar"
];
var MS$1 = [
	"en"
];
var MT$1 = [
	"mt",
	"en"
];
var MU$1 = [
	"en",
	"fr"
];
var MV$1 = [
	"dv"
];
var MW$1 = [
	"en",
	"ny"
];
var MX$1 = [
	"es",
	"vec"
];
var MY$1 = [
	"ms"
];
var MZ$1 = [
	"pt"
];
var NA$1 = [
	"en"
];
var NC$1 = [
	"fr"
];
var NE$1 = [
	"fr"
];
var NF$1 = [
	"en"
];
var NG$1 = [
	"en",
	"yo"
];
var NI$1 = [
	"es"
];
var NL$1 = [
	"nl",
	"fy"
];
var NO$1 = [
	"no",
	"nn",
	"se"
];
var NP$1 = [
	"ne"
];
var NR$1 = [
	"en",
	"na"
];
var NU$1 = [
	"en",
	"niu"
];
var NZ$1 = [
	"en",
	"mi"
];
var OM$1 = [
	"ar"
];
var PA$1 = [
	"es"
];
var PE$1 = [
	"es",
	"qu"
];
var PF$1 = [
	"fr",
	"ty"
];
var PG$1 = [
	"tpi",
	"en",
	"ho"
];
var PH$1 = [
	"en",
	"fil",
	"ceb",
	"ilo",
	"hil",
	"war",
	"pag",
	"mdh",
	"tsg"
];
var PK$1 = [
	"ur",
	"en"
];
var PL$1 = [
	"pl",
	"de",
	"csb",
	"lt"
];
var PM$1 = [
	"fr"
];
var PN$1 = [
	"en"
];
var PR$1 = [
	"es",
	"en"
];
var PS$1 = [
	"ar"
];
var PT$1 = [
	"pt"
];
var PW$1 = [
	"en"
];
var PY$1 = [
	"gn",
	"es"
];
var QA$1 = [
	"ar"
];
var RE$1 = [
	"fr"
];
var RO$1 = [
	"ro"
];
var RS$1 = [
	"sr",
	"hu",
	"ro",
	"hr",
	"sk",
	"uk"
];
var RU$1 = [
	"ru",
	"tt",
	"ba",
	"ce",
	"av",
	"udm",
	"sah",
	"kbd",
	"myv",
	"mdf",
	"kum",
	"kv",
	"lez",
	"krc",
	"inh",
	"tyv",
	"ady",
	"lbe",
	"koi"
];
var RW$1 = [
	"rw",
	"en",
	"fr"
];
var SA$1 = [
	"ar"
];
var SB$1 = [
	"en"
];
var SC$1 = [
	"fr",
	"en"
];
var SD$1 = [
	"ar",
	"en"
];
var SE$1 = [
	"sv",
	"fi"
];
var SG$1 = [
	"en",
	"zh",
	"ms",
	"ta"
];
var SH$1 = [
	"en"
];
var SI$1 = [
	"sl",
	"vec"
];
var SJ$1 = [
];
var SK$1 = [
	"sk"
];
var SL$1 = [
	"en"
];
var SM$1 = [
	"it"
];
var SN$1 = [
	"wo",
	"fr",
	"ff",
	"srr",
	"dyo",
	"sav",
	"mfv",
	"bjt",
	"snf",
	"knf",
	"bsc",
	"mey",
	"tnr"
];
var SO$1 = [
	"so",
	"ar"
];
var SR$1 = [
	"nl"
];
var SS$1 = [
	"en"
];
var ST$1 = [
	"pt"
];
var SV$1 = [
	"es"
];
var SX$1 = [
	"en",
	"nl"
];
var SY$1 = [
	"ar",
	"fr"
];
var SZ$1 = [
	"en",
	"ss"
];
var TC$1 = [
	"en"
];
var TD$1 = [
	"fr",
	"ar"
];
var TG$1 = [
	"fr"
];
var TH$1 = [
	"th"
];
var TJ$1 = [
	"tg"
];
var TK$1 = [
	"en",
	"tkl"
];
var TL$1 = [
	"pt",
	"tet"
];
var TM$1 = [
	"tk"
];
var TN$1 = [
	"ar",
	"fr"
];
var TO$1 = [
	"to",
	"en"
];
var TR$1 = [
	"tr"
];
var TT$1 = [
	"en"
];
var TV$1 = [
	"en"
];
var TW$1 = [
];
var TZ$1 = [
	"sw",
	"en"
];
var UA$1 = [
	"uk",
	"ru"
];
var UG$1 = [
	"sw",
	"en"
];
var UM$1 = [
	"en"
];
var US$1 = [
	"en",
	"es",
	"haw"
];
var UY$1 = [
	"es"
];
var UZ$1 = [
	"uz"
];
var VA$1 = [
	"it"
];
var VC$1 = [
	"en"
];
var VE$1 = [
	"es"
];
var VG$1 = [
	"en"
];
var VI$1 = [
	"en"
];
var VN$1 = [
	"vi"
];
var VU$1 = [
	"en",
	"fr"
];
var WF$1 = [
	"fr"
];
var WS$1 = [
	"en"
];
var XK$1 = [
	"sq",
	"sr"
];
var YE$1 = [
	"ar"
];
var YT$1 = [
	"fr"
];
var ZA$1 = [
	"en",
	"zu",
	"xh",
	"af",
	"nso",
	"tn",
	"st",
	"ts",
	"ss",
	"ve",
	"nr"
];
var ZM$1 = [
	"en"
];
var ZW$1 = [
	"sn",
	"en",
	"nd"
];
var countryLanguages = {
	AD: AD$1,
	AE: AE$1,
	AF: AF$1,
	AG: AG$1,
	AI: AI$1,
	AL: AL$1,
	AM: AM$1,
	AO: AO$1,
	AR: AR$1,
	AS: AS$1,
	AT: AT$1,
	AU: AU$1,
	AW: AW$1,
	AX: AX$1,
	AZ: AZ$1,
	BA: BA$1,
	BB: BB$1,
	BD: BD$1,
	BE: BE$1,
	BF: BF$1,
	BG: BG$1,
	BH: BH$1,
	BI: BI$1,
	BJ: BJ$1,
	BL: BL$1,
	BM: BM$1,
	BN: BN$1,
	BO: BO$1,
	BQ: BQ$1,
	BR: BR$1,
	BS: BS$1,
	BT: BT$1,
	BW: BW$1,
	BY: BY$1,
	BZ: BZ$1,
	CA: CA$1,
	CC: CC$1,
	CD: CD$1,
	CF: CF$1,
	CG: CG$1,
	CH: CH$1,
	CI: CI$1,
	CK: CK$1,
	CL: CL$1,
	CM: CM$1,
	CN: CN$1,
	CO: CO$1,
	CR: CR$1,
	CU: CU$1,
	CV: CV$1,
	CW: CW$1,
	CX: CX$1,
	CY: CY$1,
	CZ: CZ$1,
	DE: DE$1,
	DG: DG$1,
	DJ: DJ$1,
	DK: DK$1,
	DM: DM$1,
	DO: DO$1,
	DZ: DZ$1,
	EA: EA$1,
	EC: EC$1,
	EE: EE$1,
	EG: EG$1,
	EH: EH$1,
	ER: ER$1,
	ES: ES$1,
	ET: ET$1,
	FI: FI$1,
	FJ: FJ$1,
	FK: FK$1,
	FM: FM$1,
	FO: FO$1,
	FR: FR$1,
	GA: GA$1,
	GB: GB$1,
	GD: GD$1,
	GE: GE$1,
	GF: GF$1,
	GG: GG$1,
	GH: GH$1,
	GI: GI$1,
	GL: GL$1,
	GM: GM$1,
	GN: GN$1,
	GP: GP$1,
	GQ: GQ$1,
	GR: GR$1,
	GT: GT$1,
	GU: GU$1,
	GW: GW$1,
	GY: GY$1,
	HK: HK$1,
	HN: HN$1,
	HR: HR$1,
	HT: HT$1,
	HU: HU$1,
	IC: IC$1,
	ID: ID$1,
	IE: IE$1,
	IL: IL$1,
	IM: IM$1,
	IN: IN$1,
	IO: IO$1,
	IQ: IQ$1,
	IR: IR$1,
	IS: IS$1,
	IT: IT$1,
	JE: JE$1,
	JM: JM$1,
	JO: JO$1,
	JP: JP$1,
	KE: KE$1,
	KG: KG$1,
	KH: KH$1,
	KI: KI$1,
	KM: KM$1,
	KN: KN$1,
	KP: KP$1,
	KR: KR$1,
	KW: KW$1,
	KY: KY$1,
	KZ: KZ$1,
	LA: LA$1,
	LB: LB$1,
	LC: LC$1,
	LI: LI$1,
	LK: LK$1,
	LR: LR$1,
	LS: LS$1,
	LT: LT$1,
	LU: LU$1,
	LV: LV$1,
	LY: LY$1,
	MA: MA$1,
	MC: MC$1,
	MD: MD$1,
	ME: ME$1,
	MF: MF$1,
	MG: MG$1,
	MH: MH$1,
	MK: MK$1,
	ML: ML$1,
	MM: MM$1,
	MN: MN$1,
	MO: MO$1,
	MP: MP$1,
	MQ: MQ$1,
	MR: MR$1,
	MS: MS$1,
	MT: MT$1,
	MU: MU$1,
	MV: MV$1,
	MW: MW$1,
	MX: MX$1,
	MY: MY$1,
	MZ: MZ$1,
	NA: NA$1,
	NC: NC$1,
	NE: NE$1,
	NF: NF$1,
	NG: NG$1,
	NI: NI$1,
	NL: NL$1,
	NO: NO$1,
	NP: NP$1,
	NR: NR$1,
	NU: NU$1,
	NZ: NZ$1,
	OM: OM$1,
	PA: PA$1,
	PE: PE$1,
	PF: PF$1,
	PG: PG$1,
	PH: PH$1,
	PK: PK$1,
	PL: PL$1,
	PM: PM$1,
	PN: PN$1,
	PR: PR$1,
	PS: PS$1,
	PT: PT$1,
	PW: PW$1,
	PY: PY$1,
	QA: QA$1,
	RE: RE$1,
	RO: RO$1,
	RS: RS$1,
	RU: RU$1,
	RW: RW$1,
	SA: SA$1,
	SB: SB$1,
	SC: SC$1,
	SD: SD$1,
	SE: SE$1,
	SG: SG$1,
	SH: SH$1,
	SI: SI$1,
	SJ: SJ$1,
	SK: SK$1,
	SL: SL$1,
	SM: SM$1,
	SN: SN$1,
	SO: SO$1,
	SR: SR$1,
	SS: SS$1,
	ST: ST$1,
	SV: SV$1,
	SX: SX$1,
	SY: SY$1,
	SZ: SZ$1,
	TC: TC$1,
	TD: TD$1,
	TG: TG$1,
	TH: TH$1,
	TJ: TJ$1,
	TK: TK$1,
	TL: TL$1,
	TM: TM$1,
	TN: TN$1,
	TO: TO$1,
	TR: TR$1,
	TT: TT$1,
	TV: TV$1,
	TW: TW$1,
	TZ: TZ$1,
	UA: UA$1,
	UG: UG$1,
	UM: UM$1,
	US: US$1,
	UY: UY$1,
	UZ: UZ$1,
	VA: VA$1,
	VC: VC$1,
	VE: VE$1,
	VG: VG$1,
	VI: VI$1,
	VN: VN$1,
	VU: VU$1,
	WF: WF$1,
	WS: WS$1,
	XK: XK$1,
	YE: YE$1,
	YT: YT$1,
	ZA: ZA$1,
	ZM: ZM$1,
	ZW: ZW$1
};

var currencyCodes = [
	"SHP",
	"EUR",
	"AED",
	"AFN",
	"XCD",
	"ALL",
	"AMD",
	"AOA",
	"ARS",
	"USD",
	"AUD",
	"AWG",
	"AZN",
	"BAM",
	"BBD",
	"BDT",
	"XOF",
	"BGN",
	"BHD",
	"BIF",
	"BMD",
	"BND",
	"BOB",
	"BRL",
	"BSD",
	"BTN",
	"NOK",
	"BWP",
	"BZD",
	"CAD",
	"CDF",
	"XAF",
	"CHF",
	"NZD",
	"CLP",
	"CNY",
	"COP",
	"CRC",
	"CUP",
	"CVE",
	"ANG",
	"CZK",
	"DJF",
	"DKK",
	"DOP",
	"DZD",
	"EGP",
	"MAD",
	"ERN",
	"ETB",
	"FJD",
	"FKP",
	"GBP",
	"GEL",
	"GHS",
	"GIP",
	"GMD",
	"GNF",
	"GTQ",
	"GYD",
	"HKD",
	"HNL",
	"HTG",
	"HUF",
	"IDR",
	"ILS",
	"INR",
	"IQD",
	"IRR",
	"ISK",
	"JMD",
	"JOD",
	"JPY",
	"KES",
	"KGS",
	"KHR",
	"KMF",
	"KPW",
	"KRW",
	"KWD",
	"KYD",
	"KZT",
	"LAK",
	"LBP",
	"LKR",
	"LRD",
	"ZAR",
	"LYD",
	"MDL",
	"MGA",
	"MKD",
	"MMK",
	"MNT",
	"MOP",
	"MRU",
	"MUR",
	"MVR",
	"MWK",
	"MXN",
	"MYR",
	"MZN",
	"NAD",
	"XPF",
	"NGN",
	"NIO",
	"NPR",
	"OMR",
	"PAB",
	"PEN",
	"PGK",
	"PHP",
	"PKR",
	"PLN",
	"PYG",
	"QAR",
	"RON",
	"RSD",
	"RUB",
	"RWF",
	"SAR",
	"SBD",
	"SCR",
	"SDG",
	"SEK",
	"SGD",
	"SOS",
	"SRD",
	"SSP",
	"STN",
	"SYP",
	"SZL",
	"THB",
	"TJS",
	"TMT",
	"TND",
	"TOP",
	"TRY",
	"TTD",
	"TWD",
	"TZS",
	"UAH",
	"UGX",
	"UYU",
	"UZS",
	"VES",
	"VND",
	"VUV",
	"WST",
	"YER",
	"ZMW",
	"XAG"
];

var currencies = [
	{
		code: "SHP",
		num: "654",
		englishName: "St. Helena Pound"
	},
	{
		code: "EUR",
		num: "978",
		nativeName: "euro",
		englishName: "Euro"
	},
	{
		code: "AED",
		num: "784",
		nativeName: "درهم إماراتي",
		englishName: "United Arab Emirates Dirham"
	},
	{
		code: "AFN",
		num: "971",
		nativeName: "افغانی افغانستان",
		englishName: "Afghan Afghani"
	},
	{
		code: "XCD",
		num: "951",
		nativeName: "East Caribbean Dollar",
		englishName: "East Caribbean Dollar"
	},
	{
		code: "ALL",
		num: "8",
		nativeName: "Leku shqiptar",
		englishName: "Albanian Lek"
	},
	{
		code: "AMD",
		num: "51",
		nativeName: "հայկական դրամ",
		englishName: "Armenian Dram"
	},
	{
		code: "AOA",
		num: "973",
		nativeName: "Kwanza angolano",
		englishName: "Angolan Kwanza"
	},
	{
		code: "ARS",
		num: "32",
		nativeName: "peso argentino",
		englishName: "Argentine Peso"
	},
	{
		code: "USD",
		num: "840",
		nativeName: "US Dollar",
		englishName: "US Dollar"
	},
	{
		code: "AUD",
		num: "36",
		nativeName: "Australian Dollar",
		englishName: "Australian Dollar"
	},
	{
		code: "AWG",
		num: "533",
		nativeName: "Arubaanse gulden",
		englishName: "Aruban Florin"
	},
	{
		code: "AZN",
		num: "944",
		nativeName: "Azərbaycan Manatı",
		englishName: "Azerbaijani Manat"
	},
	{
		code: "BAM",
		num: "977",
		nativeName: "Bosanskohercegovačka konvertibilna marka",
		englishName: "Bosnia-Herzegovina Convertible Mark"
	},
	{
		code: "BBD",
		num: "52",
		nativeName: "Barbadian Dollar",
		englishName: "Barbadian Dollar"
	},
	{
		code: "BDT",
		num: "50",
		nativeName: "বাংলাদেশী টাকা",
		englishName: "Bangladeshi Taka"
	},
	{
		code: "XOF",
		num: "952",
		nativeName: "franc CFA (BCEAO)",
		englishName: "West African CFA Franc"
	},
	{
		code: "BGN",
		num: "975",
		nativeName: "Български лев",
		englishName: "Bulgarian Lev"
	},
	{
		code: "BHD",
		num: "48",
		nativeName: "دينار بحريني",
		englishName: "Bahraini Dinar"
	},
	{
		code: "BIF",
		num: "108",
		nativeName: "Ifaranga ry’Uburundi",
		englishName: "Burundian Franc"
	},
	{
		code: "BMD",
		num: "60",
		nativeName: "Bermudan Dollar",
		englishName: "Bermudan Dollar"
	},
	{
		code: "BND",
		num: "96",
		nativeName: "Dolar Brunei",
		englishName: "Brunei Dollar"
	},
	{
		code: "BOB",
		num: "68",
		nativeName: "boliviano",
		englishName: "Bolivian Boliviano"
	},
	{
		code: "BRL",
		num: "986",
		nativeName: "Real brasileiro",
		englishName: "Brazilian Real"
	},
	{
		code: "BSD",
		num: "44",
		nativeName: "Bahamian Dollar",
		englishName: "Bahamian Dollar"
	},
	{
		code: "BTN",
		num: "64",
		nativeName: "དངུལ་ཀྲམ",
		englishName: "Bhutanese Ngultrum"
	},
	{
		code: "NOK",
		num: "578",
		englishName: "Norwegian Krone"
	},
	{
		code: "BWP",
		num: "72",
		nativeName: "Botswanan Pula",
		englishName: "Botswanan Pula"
	},
	{
		code: "BZD",
		num: "84",
		nativeName: "Belize Dollar",
		englishName: "Belize Dollar"
	},
	{
		code: "CAD",
		num: "124",
		nativeName: "Canadian Dollar",
		englishName: "Canadian Dollar"
	},
	{
		code: "CDF",
		num: "976",
		nativeName: "Faranga ya Kongo",
		englishName: "Congolese Franc"
	},
	{
		code: "XAF",
		num: "950",
		nativeName: "franc CFA (BEAC)",
		englishName: "Central African CFA Franc"
	},
	{
		code: "CHF",
		num: "756",
		nativeName: "Schweizer Franken",
		englishName: "Swiss Franc"
	},
	{
		code: "NZD",
		num: "554",
		nativeName: "New Zealand Dollar",
		englishName: "New Zealand Dollar"
	},
	{
		code: "CLP",
		num: "152",
		nativeName: "peso chileno",
		englishName: "Chilean Peso"
	},
	{
		code: "CNY",
		num: "156",
		nativeName: "人民币",
		englishName: "Chinese Yuan"
	},
	{
		code: "COP",
		num: "170",
		nativeName: "peso colombiano",
		englishName: "Colombian Peso"
	},
	{
		code: "CRC",
		num: "188",
		nativeName: "colón costarricense",
		englishName: "Costa Rican Colón"
	},
	{
		code: "CUP",
		num: "192",
		nativeName: "peso cubano",
		englishName: "Cuban Peso"
	},
	{
		code: "CVE",
		num: "132",
		nativeName: "Escudo cabo-verdiano",
		englishName: "Cape Verdean Escudo"
	},
	{
		code: "ANG",
		num: "532",
		nativeName: {
			"#text": "Florin",
			draft: "unconfirmed"
		},
		englishName: "Netherlands Antillean Guilder"
	},
	{
		code: "CZK",
		num: "203",
		nativeName: "česká koruna",
		englishName: "Czech Koruna"
	},
	{
		code: "DJF",
		num: "262",
		nativeName: "فرنك جيبوتي",
		englishName: "Djiboutian Franc"
	},
	{
		code: "DKK",
		num: "208",
		nativeName: "dansk krone",
		englishName: "Danish Krone"
	},
	{
		code: "DOP",
		num: "214",
		nativeName: "peso dominicano",
		englishName: "Dominican Peso"
	},
	{
		code: "DZD",
		num: "12",
		nativeName: "دينار جزائري",
		englishName: "Algerian Dinar"
	},
	{
		code: "EGP",
		num: "818",
		nativeName: "جنيه مصري",
		englishName: "Egyptian Pound"
	},
	{
		code: "MAD",
		num: "504",
		nativeName: "درهم مغربي",
		englishName: "Moroccan Dirham"
	},
	{
		code: "ERN",
		num: "232",
		nativeName: "ናቕፋ",
		englishName: "Eritrean Nakfa"
	},
	{
		code: "ETB",
		num: "230",
		nativeName: "የኢትዮጵያ ብር",
		englishName: "Ethiopian Birr"
	},
	{
		code: "FJD",
		num: "242",
		nativeName: "Fijian Dollar",
		englishName: "Fijian Dollar"
	},
	{
		code: "FKP",
		num: "238",
		nativeName: "Falkland Islands Pound",
		englishName: "Falkland Islands Pound"
	},
	{
		code: "GBP",
		num: "826",
		nativeName: "British Pound",
		englishName: "British Pound"
	},
	{
		code: "GEL",
		num: "981",
		nativeName: "ქართული ლარი",
		englishName: "Georgian Lari"
	},
	{
		code: "GHS",
		num: "936",
		nativeName: "Ghana Sidi",
		englishName: "Ghanaian Cedi"
	},
	{
		code: "GIP",
		num: "292",
		nativeName: "Gibraltar Pound",
		englishName: "Gibraltar Pound"
	},
	{
		code: "GMD",
		num: "270",
		nativeName: "Gambian Dalasi",
		englishName: "Gambian Dalasi"
	},
	{
		code: "GNF",
		num: "324",
		nativeName: "franc guinéen",
		englishName: "Guinean Franc"
	},
	{
		code: "GTQ",
		num: "320",
		nativeName: "quetzal guatemalteco",
		englishName: "Guatemalan Quetzal"
	},
	{
		code: "GYD",
		num: "328",
		nativeName: "Guyanaese Dollar",
		englishName: "Guyanaese Dollar"
	},
	{
		code: "HKD",
		num: "344",
		nativeName: "Hong Kong Dollar",
		englishName: "Hong Kong Dollar"
	},
	{
		code: "HNL",
		num: "340",
		nativeName: "lempira hondureño",
		englishName: "Honduran Lempira"
	},
	{
		code: "HTG",
		num: "332",
		nativeName: "gourde haïtienne",
		englishName: "Haitian Gourde"
	},
	{
		code: "HUF",
		num: "348",
		nativeName: "magyar forint",
		englishName: "Hungarian Forint"
	},
	{
		code: "IDR",
		num: "360",
		nativeName: "Rupiah Indonesia",
		englishName: "Indonesian Rupiah"
	},
	{
		code: "ILS",
		num: "376",
		nativeName: "שקל חדש",
		englishName: "Israeli New Shekel"
	},
	{
		code: "INR",
		num: "356",
		nativeName: "भारतीय रुपया",
		englishName: "Indian Rupee"
	},
	{
		code: "IQD",
		num: "368",
		nativeName: "دينار عراقي",
		englishName: "Iraqi Dinar"
	},
	{
		code: "IRR",
		num: "364",
		nativeName: "ریال ایران",
		englishName: "Iranian Rial"
	},
	{
		code: "ISK",
		num: "352",
		nativeName: "íslensk króna",
		englishName: "Icelandic Króna"
	},
	{
		code: "JMD",
		num: "388",
		nativeName: "Jamaican Dollar",
		englishName: "Jamaican Dollar"
	},
	{
		code: "JOD",
		num: "400",
		nativeName: "دينار أردني",
		englishName: "Jordanian Dinar"
	},
	{
		code: "JPY",
		num: "392",
		nativeName: "日本円",
		englishName: "Japanese Yen"
	},
	{
		code: "KES",
		num: "404",
		nativeName: "Shilingi ya Kenya",
		englishName: "Kenyan Shilling"
	},
	{
		code: "KGS",
		num: "417",
		nativeName: "Кыргызстан сому",
		englishName: "Kyrgystani Som"
	},
	{
		code: "KHR",
		num: "116",
		nativeName: "រៀល​កម្ពុជា",
		englishName: "Cambodian Riel"
	},
	{
		code: "KMF",
		num: "174",
		nativeName: "فرنك جزر القمر",
		englishName: "Comorian Franc"
	},
	{
		code: "KPW",
		num: "408",
		nativeName: "조선 민주주의 인민 공화국 원",
		englishName: "North Korean Won"
	},
	{
		code: "KRW",
		num: "410",
		nativeName: "대한민국 원",
		englishName: "South Korean Won"
	},
	{
		code: "KWD",
		num: "414",
		nativeName: "دينار كويتي",
		englishName: "Kuwaiti Dinar"
	},
	{
		code: "KYD",
		num: "136",
		nativeName: "Cayman Islands Dollar",
		englishName: "Cayman Islands Dollar"
	},
	{
		code: "KZT",
		num: "398",
		nativeName: "казахский тенге",
		englishName: "Kazakhstani Tenge"
	},
	{
		code: "LAK",
		num: "418",
		nativeName: "ລາວ ກີບ",
		englishName: "Laotian Kip"
	},
	{
		code: "LBP",
		num: "422",
		nativeName: "جنيه لبناني",
		englishName: "Lebanese Pound"
	},
	{
		code: "LKR",
		num: "144",
		nativeName: "ශ්‍රී ලංකා රුපියල",
		englishName: "Sri Lankan Rupee"
	},
	{
		code: "LRD",
		num: "430",
		nativeName: "Liberian Dollar",
		englishName: "Liberian Dollar"
	},
	{
		code: "ZAR",
		num: "710",
		nativeName: "South African Rand",
		englishName: "South African Rand"
	},
	{
		code: "LYD",
		num: "434",
		nativeName: "دينار ليبي",
		englishName: "Libyan Dinar"
	},
	{
		code: "MDL",
		num: "498",
		nativeName: "leu moldovenesc",
		englishName: "Moldovan Leu"
	},
	{
		code: "MGA",
		num: "969",
		nativeName: "Ariary",
		englishName: "Malagasy Ariary"
	},
	{
		code: "MKD",
		num: "807",
		nativeName: "Македонски денар",
		englishName: "Macedonian Denar"
	},
	{
		code: "MMK",
		num: "104",
		nativeName: "မြန်မာ ကျပ်",
		englishName: "Myanmar Kyat"
	},
	{
		code: "MNT",
		num: "496",
		nativeName: "Монгол төгрөг",
		englishName: "Mongolian Tugrik"
	},
	{
		code: "MOP",
		num: "446",
		nativeName: "Pataca macaense",
		englishName: "Macanese Pataca"
	},
	{
		code: "MRU",
		num: "929",
		nativeName: "أوقية موريتانية",
		englishName: "Mauritanian Ouguiya"
	},
	{
		code: "MUR",
		num: "480",
		nativeName: "Mauritian Rupee",
		englishName: "Mauritian Rupee"
	},
	{
		code: "MVR",
		num: "462",
		englishName: "Maldivian Rufiyaa"
	},
	{
		code: "MWK",
		num: "454",
		nativeName: "Malawian Kwacha",
		englishName: "Malawian Kwacha"
	},
	{
		code: "MXN",
		num: "484",
		nativeName: "peso mexicano",
		englishName: "Mexican Peso"
	},
	{
		code: "MYR",
		num: "458",
		nativeName: "Ringgit Malaysia",
		englishName: "Malaysian Ringgit"
	},
	{
		code: "MZN",
		num: "943",
		nativeName: "Metical moçambicano",
		englishName: "Mozambican Metical"
	},
	{
		code: "NAD",
		num: "516",
		nativeName: "Namibian Dollar",
		englishName: "Namibian Dollar"
	},
	{
		code: "XPF",
		num: "953",
		nativeName: "franc CFP",
		englishName: "CFP Franc"
	},
	{
		code: "NGN",
		num: "566",
		nativeName: "Nigerian Naira",
		englishName: "Nigerian Naira"
	},
	{
		code: "NIO",
		num: "558",
		nativeName: "córdoba oro",
		englishName: "Nicaraguan Córdoba"
	},
	{
		code: "NPR",
		num: "524",
		nativeName: "नेपाली रूपैयाँ",
		englishName: "Nepalese Rupee"
	},
	{
		code: "OMR",
		num: "512",
		nativeName: "ريال عماني",
		englishName: "Omani Rial"
	},
	{
		code: "PAB",
		num: "590",
		nativeName: "balboa panameño",
		englishName: "Panamanian Balboa"
	},
	{
		code: "PEN",
		num: "604",
		nativeName: "sol peruano",
		englishName: "Peruvian Sol"
	},
	{
		code: "PGK",
		num: "598",
		englishName: "Papua New Guinean Kina"
	},
	{
		code: "PHP",
		num: "608",
		nativeName: "Philippine Peso",
		englishName: "Philippine Peso"
	},
	{
		code: "PKR",
		num: "586",
		nativeName: "پاکستانی روپیہ",
		englishName: "Pakistani Rupee"
	},
	{
		code: "PLN",
		num: "985",
		nativeName: "złoty polski",
		englishName: "Polish Zloty"
	},
	{
		code: "PYG",
		num: "600",
		englishName: "Paraguayan Guarani"
	},
	{
		code: "QAR",
		num: "634",
		nativeName: "ريال قطري",
		englishName: "Qatari Riyal"
	},
	{
		code: "RON",
		num: "946",
		nativeName: "leu românesc",
		englishName: "Romanian Leu"
	},
	{
		code: "RSD",
		num: "941",
		nativeName: "српски динар",
		englishName: "Serbian Dinar"
	},
	{
		code: "RUB",
		num: "643",
		nativeName: "российский рубль",
		englishName: "Russian Ruble"
	},
	{
		code: "RWF",
		num: "646",
		englishName: "Rwandan Franc"
	},
	{
		code: "SAR",
		num: "682",
		nativeName: "ريال سعودي",
		englishName: "Saudi Riyal"
	},
	{
		code: "SBD",
		num: "90",
		nativeName: "Solomon Islands Dollar",
		englishName: "Solomon Islands Dollar"
	},
	{
		code: "SCR",
		num: "690",
		nativeName: "roupie des Seychelles",
		englishName: "Seychellois Rupee"
	},
	{
		code: "SDG",
		num: "938",
		nativeName: "جنيه سوداني",
		englishName: "Sudanese Pound"
	},
	{
		code: "SEK",
		num: "752",
		nativeName: "svensk krona",
		englishName: "Swedish Krona"
	},
	{
		code: "SGD",
		num: "702",
		nativeName: "Singapore Dollar",
		englishName: "Singapore Dollar"
	},
	{
		code: "SOS",
		num: "706",
		nativeName: "Shilingka Soomaaliya",
		englishName: "Somali Shilling"
	},
	{
		code: "SRD",
		num: "968",
		nativeName: "Surinaamse dollar",
		englishName: "Surinamese Dollar"
	},
	{
		code: "SSP",
		num: "728",
		nativeName: "South Sudanese Pound",
		englishName: "South Sudanese Pound"
	},
	{
		code: "STN",
		num: "930",
		nativeName: "Dobra de São Tomé e Príncipe",
		englishName: "São Tomé & Príncipe Dobra"
	},
	{
		code: "SYP",
		num: "760",
		nativeName: "ليرة سورية",
		englishName: "Syrian Pound"
	},
	{
		code: "SZL",
		num: "748",
		nativeName: "Swazi Lilangeni",
		englishName: "Swazi Lilangeni"
	},
	{
		code: "THB",
		num: "764",
		nativeName: "บาท",
		englishName: "Thai Baht"
	},
	{
		code: "TJS",
		num: "972",
		nativeName: "Сомонӣ",
		englishName: "Tajikistani Somoni"
	},
	{
		code: "TMT",
		num: "934",
		nativeName: "Türkmen manady",
		englishName: "Turkmenistani Manat"
	},
	{
		code: "TND",
		num: "788",
		nativeName: "دينار تونسي",
		englishName: "Tunisian Dinar"
	},
	{
		code: "TOP",
		num: "776",
		nativeName: "Paʻanga fakatonga",
		englishName: "Tongan Paʻanga"
	},
	{
		code: "TRY",
		num: "949",
		nativeName: "Türk lirası",
		englishName: "Turkish Lira"
	},
	{
		code: "TTD",
		num: "780",
		nativeName: "Trinidad & Tobago Dollar",
		englishName: "Trinidad & Tobago Dollar"
	},
	{
		code: "TWD",
		num: "901",
		englishName: "New Taiwan Dollar"
	},
	{
		code: "TZS",
		num: "834",
		nativeName: "Shilingi ya Tanzania",
		englishName: "Tanzanian Shilling"
	},
	{
		code: "UAH",
		num: "980",
		nativeName: "українська гривня",
		englishName: "Ukrainian Hryvnia"
	},
	{
		code: "UGX",
		num: "800",
		nativeName: "Shilingi ya Uganda",
		englishName: "Ugandan Shilling"
	},
	{
		code: "UYU",
		num: "858",
		nativeName: "peso uruguayo",
		englishName: "Uruguayan Peso"
	},
	{
		code: "UZS",
		num: "860",
		nativeName: "O‘zbekiston so‘mi",
		englishName: "Uzbekistani Som"
	},
	{
		code: "VES",
		num: "928",
		nativeName: "bolívar venezolano",
		englishName: "Venezuelan Bolívar"
	},
	{
		code: "VND",
		num: "704",
		nativeName: "Đồng Việt Nam",
		englishName: "Vietnamese Dong"
	},
	{
		code: "VUV",
		num: "548",
		nativeName: "Vanuatu Vatu",
		englishName: "Vanuatu Vatu"
	},
	{
		code: "WST",
		num: "882",
		nativeName: "Samoan Tala",
		englishName: "Samoan Tala"
	},
	{
		code: "YER",
		num: "886",
		nativeName: "ريال يمني",
		englishName: "Yemeni Rial"
	},
	{
		code: "ZMW",
		num: "967",
		nativeName: "Zambian Kwacha",
		englishName: "Zambian Kwacha"
	},
	{
		code: "XAG",
		num: "961",
		englishName: "Silver"
	}
];

var languageCodes = [
	"ca",
	"ar",
	"fa",
	"ps",
	"tk",
	"en",
	"sq",
	"hy",
	"pt",
	"es",
	"sm",
	"de",
	"hr",
	"sl",
	"hu",
	"nl",
	"pap",
	"sv",
	"az",
	"bs",
	"sr",
	"bn",
	"fr",
	"bg",
	"rn",
	"ms",
	"qu",
	"ay",
	"vec",
	"dz",
	"tn",
	"be",
	"ru",
	"iu",
	"chp",
	"cr",
	"den",
	"dgr",
	"gwi",
	"sw",
	"lua",
	"ln",
	"kg",
	"sg",
	"gsw",
	"it",
	"rm",
	"zh",
	"ug",
	"za",
	"bo",
	"ko",
	"el",
	"tr",
	"cs",
	"frr",
	"da",
	"kl",
	"et",
	"ti",
	"gl",
	"eu",
	"ast",
	"oc",
	"am",
	"fi",
	"sms",
	"hif",
	"fj",
	"fo",
	"cy",
	"ga",
	"gd",
	"ka",
	"ab",
	"os",
	"ak",
	"ee",
	"gaa",
	"quc",
	"ch",
	"ht",
	"id",
	"he",
	"gv",
	"hi",
	"te",
	"mr",
	"ta",
	"ur",
	"gu",
	"kn",
	"ml",
	"or",
	"pa",
	"as",
	"mai",
	"ne",
	"sat",
	"ks",
	"kok",
	"sd",
	"kha",
	"sa",
	"ckb",
	"is",
	"ja",
	"ky",
	"km",
	"gil",
	"zdj",
	"wni",
	"kk",
	"lo",
	"si",
	"st",
	"lt",
	"lb",
	"lv",
	"tzm",
	"ro",
	"mg",
	"mh",
	"mk",
	"my",
	"mn",
	"mt",
	"dv",
	"ny",
	"yo",
	"fy",
	"nb",
	"no",
	"nn",
	"se",
	"na",
	"niu",
	"mi",
	"ty",
	"tpi",
	"ho",
	"fil",
	"ceb",
	"ilo",
	"hil",
	"war",
	"pag",
	"mdh",
	"tsg",
	"pl",
	"csb",
	"pau",
	"gn",
	"sk",
	"uk",
	"tt",
	"ba",
	"ce",
	"av",
	"udm",
	"sah",
	"kbd",
	"myv",
	"mdf",
	"kum",
	"kv",
	"lez",
	"krc",
	"inh",
	"tyv",
	"ady",
	"lbe",
	"koi",
	"rw",
	"wo",
	"ff",
	"srr",
	"dyo",
	"sav",
	"mfv",
	"bjt",
	"snf",
	"knf",
	"bsc",
	"mey",
	"tnr",
	"so",
	"ss",
	"th",
	"tg",
	"tkl",
	"tet",
	"to",
	"tvl",
	"haw",
	"uz",
	"vi",
	"bi",
	"zu",
	"xh",
	"af",
	"nso",
	"ts",
	"ve",
	"nr",
	"sn",
	"nd"
];

var languages = [
	{
		code: "ca",
		nativeName: "català",
		englishName: "Catalan"
	},
	{
		code: "ar",
		nativeName: "العربية",
		englishName: "Arabic"
	},
	{
		code: "fa",
		nativeName: "فارسی",
		englishName: "Persian"
	},
	{
		code: "ps",
		nativeName: "پښتو",
		englishName: "Pashto"
	},
	{
		code: "tk",
		nativeName: "türkmen dili",
		englishName: "Turkmen"
	},
	{
		code: "en",
		nativeName: "English",
		englishName: "English"
	},
	{
		code: "sq",
		nativeName: "shqip",
		englishName: "Albanian"
	},
	{
		code: "hy",
		nativeName: "հայերեն",
		englishName: "Armenian"
	},
	{
		code: "pt",
		nativeName: "português",
		englishName: "Portuguese"
	},
	{
		code: "es",
		nativeName: "español",
		englishName: "Spanish"
	},
	{
		code: "sm",
		englishName: "Samoan"
	},
	{
		code: "de",
		nativeName: "Deutsch",
		englishName: "German"
	},
	{
		code: "hr",
		nativeName: "hrvatski",
		englishName: "Croatian"
	},
	{
		code: "sl",
		nativeName: "slovenščina",
		englishName: "Slovenian"
	},
	{
		code: "hu",
		nativeName: "magyar",
		englishName: "Hungarian"
	},
	{
		code: "nl",
		nativeName: "Nederlands",
		englishName: "Dutch"
	},
	{
		code: "pap",
		nativeName: "Papiamentu",
		englishName: "Papiamento"
	},
	{
		code: "sv",
		nativeName: "svenska",
		englishName: "Swedish"
	},
	{
		code: "az",
		nativeName: "azərbaycan",
		englishName: "Azerbaijani"
	},
	{
		code: "bs",
		nativeName: "bosanski",
		englishName: "Bosnian"
	},
	{
		code: "sr",
		nativeName: "српски",
		englishName: "Serbian"
	},
	{
		code: "bn",
		nativeName: "বাংলা",
		englishName: "Bangla"
	},
	{
		code: "fr",
		nativeName: "français",
		englishName: "French"
	},
	{
		code: "bg",
		nativeName: "български",
		englishName: "Bulgarian"
	},
	{
		code: "rn",
		nativeName: "Ikirundi",
		englishName: "Rundi"
	},
	{
		code: "ms",
		nativeName: "Melayu",
		englishName: "Malay"
	},
	{
		code: "qu",
		nativeName: "Runasimi",
		englishName: "Quechua"
	},
	{
		code: "ay",
		englishName: "Aymara"
	},
	{
		code: "vec",
		nativeName: "veneto",
		englishName: "Venetian"
	},
	{
		code: "dz",
		nativeName: "རྫོང་ཁ",
		englishName: "Dzongkha"
	},
	{
		code: "tn",
		nativeName: "Setswana",
		englishName: "Tswana"
	},
	{
		code: "be",
		nativeName: "беларуская",
		englishName: "Belarusian"
	},
	{
		code: "ru",
		nativeName: "русский",
		englishName: "Russian"
	},
	{
		code: "iu",
		nativeName: "ᐃᓄᒃᑎᑐᑦ",
		englishName: "Inuktitut"
	},
	{
		code: "chp",
		englishName: "Chipewyan"
	},
	{
		code: "cr",
		englishName: "Cree"
	},
	{
		code: "den",
		englishName: "Slave"
	},
	{
		code: "dgr",
		englishName: "Dogrib"
	},
	{
		code: "gwi",
		englishName: "Gwichʼin"
	},
	{
		code: "sw",
		nativeName: "Kiswahili",
		englishName: "Swahili"
	},
	{
		code: "lua",
		englishName: "Luba-Lulua"
	},
	{
		code: "ln",
		nativeName: "lingála",
		englishName: "Lingala"
	},
	{
		code: "kg",
		englishName: "Kongo"
	},
	{
		code: "sg",
		nativeName: "Sängö",
		englishName: "Sango"
	},
	{
		code: "gsw",
		nativeName: "Schwiizertüütsch",
		englishName: "Swiss German"
	},
	{
		code: "it",
		nativeName: "italiano",
		englishName: "Italian"
	},
	{
		code: "rm",
		nativeName: "rumantsch",
		englishName: "Romansh"
	},
	{
		code: "zh",
		nativeName: "中文",
		englishName: "Chinese"
	},
	{
		code: "ug",
		nativeName: "ئۇيغۇرچە",
		englishName: "Uyghur"
	},
	{
		code: "za",
		nativeName: "Vahcuengh",
		englishName: "Zhuang"
	},
	{
		code: "bo",
		nativeName: "བོད་སྐད་",
		englishName: "Tibetan"
	},
	{
		code: "ko",
		nativeName: "한국어",
		englishName: "Korean"
	},
	{
		code: "el",
		nativeName: "Ελληνικά",
		englishName: "Greek"
	},
	{
		code: "tr",
		nativeName: "Türkçe",
		englishName: "Turkish"
	},
	{
		code: "cs",
		nativeName: "čeština",
		englishName: "Czech"
	},
	{
		code: "frr",
		nativeName: "Nordfriisk",
		englishName: "Northern Frisian"
	},
	{
		code: "da",
		nativeName: "dansk",
		englishName: "Danish"
	},
	{
		code: "kl",
		nativeName: "kalaallisut",
		englishName: "Kalaallisut"
	},
	{
		code: "et",
		nativeName: "eesti",
		englishName: "Estonian"
	},
	{
		code: "ti",
		nativeName: "ትግርኛ",
		englishName: "Tigrinya"
	},
	{
		code: "gl",
		nativeName: "galego",
		englishName: "Galician"
	},
	{
		code: "eu",
		nativeName: "euskara",
		englishName: "Basque"
	},
	{
		code: "ast",
		nativeName: "asturianu",
		englishName: "Asturian"
	},
	{
		code: "oc",
		nativeName: "occitan",
		englishName: "Occitan"
	},
	{
		code: "am",
		nativeName: "አማርኛ",
		englishName: "Amharic"
	},
	{
		code: "fi",
		nativeName: "suomi",
		englishName: "Finnish"
	},
	{
		code: "sms",
		nativeName: "sääʹmǩiõll",
		englishName: "Skolt Sami"
	},
	{
		code: "hif",
		englishName: "Fiji Hindi"
	},
	{
		code: "fj",
		englishName: "Fijian"
	},
	{
		code: "fo",
		nativeName: "føroyskt",
		englishName: "Faroese"
	},
	{
		code: "cy",
		nativeName: "Cymraeg",
		englishName: "Welsh"
	},
	{
		code: "ga",
		nativeName: "Gaeilge",
		englishName: "Irish"
	},
	{
		code: "gd",
		nativeName: "Gàidhlig",
		englishName: "Scottish Gaelic"
	},
	{
		code: "ka",
		nativeName: "ქართული",
		englishName: "Georgian"
	},
	{
		code: "ab",
		nativeName: "Аԥсшәа",
		englishName: "Abkhazian"
	},
	{
		code: "os",
		nativeName: "ирон",
		englishName: "Ossetic"
	},
	{
		code: "ak",
		nativeName: "Akan",
		englishName: "Akan"
	},
	{
		code: "ee",
		nativeName: "Eʋegbe",
		englishName: "Ewe"
	},
	{
		code: "gaa",
		nativeName: "Gã",
		englishName: "Ga"
	},
	{
		code: "quc",
		nativeName: "Kʼicheʼ",
		englishName: "Kʼicheʼ"
	},
	{
		code: "ch",
		englishName: "Chamorro"
	},
	{
		code: "ht",
		englishName: "Haitian Creole"
	},
	{
		code: "id",
		nativeName: "Indonesia",
		englishName: "Indonesian"
	},
	{
		code: "he",
		nativeName: "עברית",
		englishName: "Hebrew"
	},
	{
		code: "gv",
		nativeName: "Gaelg",
		englishName: "Manx"
	},
	{
		code: "hi",
		nativeName: "हिन्दी",
		englishName: "Hindi"
	},
	{
		code: "te",
		nativeName: "తెలుగు",
		englishName: "Telugu"
	},
	{
		code: "mr",
		nativeName: "मराठी",
		englishName: "Marathi"
	},
	{
		code: "ta",
		nativeName: "தமிழ்",
		englishName: "Tamil"
	},
	{
		code: "ur",
		nativeName: "اردو",
		englishName: "Urdu"
	},
	{
		code: "gu",
		nativeName: "ગુજરાતી",
		englishName: "Gujarati"
	},
	{
		code: "kn",
		nativeName: "ಕನ್ನಡ",
		englishName: "Kannada"
	},
	{
		code: "ml",
		nativeName: "മലയാളം",
		englishName: "Malayalam"
	},
	{
		code: "or",
		nativeName: "ଓଡ଼ିଆ",
		englishName: "Odia"
	},
	{
		code: "pa",
		nativeName: "ਪੰਜਾਬੀ",
		englishName: "Punjabi"
	},
	{
		code: "as",
		nativeName: "অসমীয়া",
		englishName: "Assamese"
	},
	{
		code: "mai",
		nativeName: "मैथिली",
		englishName: "Maithili"
	},
	{
		code: "ne",
		nativeName: "नेपाली",
		englishName: "Nepali"
	},
	{
		code: "sat",
		nativeName: "ᱥᱟᱱᱛᱟᱲᱤ",
		englishName: "Santali"
	},
	{
		code: "ks",
		nativeName: "کٲشُر",
		englishName: "Kashmiri"
	},
	{
		code: "kok",
		nativeName: "कोंकणी",
		englishName: "Konkani"
	},
	{
		code: "sd",
		nativeName: "سنڌي",
		englishName: "Sindhi"
	},
	{
		code: "kha",
		englishName: "Khasi"
	},
	{
		code: "sa",
		nativeName: "संस्कृत भाषा",
		englishName: "Sanskrit"
	},
	{
		code: "ckb",
		nativeName: "کوردیی ناوەندی",
		englishName: "Central Kurdish"
	},
	{
		code: "is",
		nativeName: "íslenska",
		englishName: "Icelandic"
	},
	{
		code: "ja",
		nativeName: "日本語",
		englishName: "Japanese"
	},
	{
		code: "ky",
		nativeName: "кыргызча",
		englishName: "Kyrgyz"
	},
	{
		code: "km",
		nativeName: "ខ្មែរ",
		englishName: "Khmer"
	},
	{
		code: "gil",
		englishName: "Gilbertese"
	},
	{
		code: "zdj"
	},
	{
		code: "wni"
	},
	{
		code: "kk",
		nativeName: "қазақ тілі",
		englishName: "Kazakh"
	},
	{
		code: "lo",
		nativeName: "ລາວ",
		englishName: "Lao"
	},
	{
		code: "si",
		nativeName: "සිංහල",
		englishName: "Sinhala"
	},
	{
		code: "st",
		englishName: "Southern Sotho"
	},
	{
		code: "lt",
		nativeName: "lietuvių",
		englishName: "Lithuanian"
	},
	{
		code: "lb",
		nativeName: "Lëtzebuergesch",
		englishName: "Luxembourgish"
	},
	{
		code: "lv",
		nativeName: "latviešu",
		englishName: "Latvian"
	},
	{
		code: "tzm",
		nativeName: "Tamaziɣt n laṭlaṣ",
		englishName: "Central Atlas Tamazight"
	},
	{
		code: "ro",
		nativeName: "română",
		englishName: "Romanian"
	},
	{
		code: "mg",
		nativeName: "Malagasy",
		englishName: "Malagasy"
	},
	{
		code: "mh",
		englishName: "Marshallese"
	},
	{
		code: "mk",
		nativeName: "македонски",
		englishName: "Macedonian"
	},
	{
		code: "my",
		nativeName: "မြန်မာ",
		englishName: "Burmese"
	},
	{
		code: "mn",
		nativeName: "монгол",
		englishName: "Mongolian"
	},
	{
		code: "mt",
		nativeName: "Malti",
		englishName: "Maltese"
	},
	{
		code: "dv",
		nativeName: "ދިވެހިބަސް",
		englishName: "Divehi"
	},
	{
		code: "ny",
		englishName: "Nyanja"
	},
	{
		code: "yo",
		nativeName: "Èdè Yorùbá",
		englishName: "Yoruba"
	},
	{
		code: "fy",
		nativeName: "Frysk",
		englishName: "Western Frisian"
	},
	{
		code: "nb",
		englishName: "Norwegian Bokmål"
	},
	{
		code: "no",
		nativeName: "norsk",
		englishName: "Norwegian"
	},
	{
		code: "nn",
		nativeName: "↑↑↑",
		englishName: "Norwegian Nynorsk"
	},
	{
		code: "se",
		nativeName: "davvisámegiella",
		englishName: "Northern Sami"
	},
	{
		code: "na",
		englishName: "Nauru"
	},
	{
		code: "niu",
		englishName: "Niuean"
	},
	{
		code: "mi",
		nativeName: "Māori",
		englishName: "Māori"
	},
	{
		code: "ty",
		englishName: "Tahitian"
	},
	{
		code: "tpi",
		nativeName: "Tok Pisin",
		englishName: "Tok Pisin"
	},
	{
		code: "ho",
		englishName: "Hiri Motu"
	},
	{
		code: "fil",
		nativeName: "Filipino",
		englishName: "Filipino"
	},
	{
		code: "ceb",
		nativeName: "Cebuano",
		englishName: "Cebuano"
	},
	{
		code: "ilo",
		englishName: "Iloko"
	},
	{
		code: "hil",
		englishName: "Hiligaynon"
	},
	{
		code: "war",
		englishName: "Waray"
	},
	{
		code: "pag",
		englishName: "Pangasinan"
	},
	{
		code: "mdh"
	},
	{
		code: "tsg"
	},
	{
		code: "pl",
		nativeName: "polski",
		englishName: "Polish"
	},
	{
		code: "csb",
		englishName: "Kashubian"
	},
	{
		code: "pau",
		englishName: "Palauan"
	},
	{
		code: "gn",
		nativeName: "avañe’ẽ",
		englishName: "Guarani"
	},
	{
		code: "sk",
		nativeName: "slovenčina",
		englishName: "Slovak"
	},
	{
		code: "uk",
		nativeName: "українська",
		englishName: "Ukrainian"
	},
	{
		code: "tt",
		nativeName: "татар",
		englishName: "Tatar"
	},
	{
		code: "ba",
		englishName: "Bashkir"
	},
	{
		code: "ce",
		nativeName: "нохчийн",
		englishName: "Chechen"
	},
	{
		code: "av",
		englishName: "Avaric"
	},
	{
		code: "udm",
		englishName: "Udmurt"
	},
	{
		code: "sah",
		nativeName: "саха тыла",
		englishName: "Yakut"
	},
	{
		code: "kbd",
		englishName: "Kabardian"
	},
	{
		code: "myv",
		nativeName: "эрзянь кель",
		englishName: "Erzya"
	},
	{
		code: "mdf",
		nativeName: "мокшень кяль",
		englishName: "Moksha"
	},
	{
		code: "kum",
		englishName: "Kumyk"
	},
	{
		code: "kv",
		englishName: "Komi"
	},
	{
		code: "lez",
		englishName: "Lezghian"
	},
	{
		code: "krc",
		englishName: "Karachay-Balkar"
	},
	{
		code: "inh",
		englishName: "Ingush"
	},
	{
		code: "tyv",
		englishName: "Tuvinian"
	},
	{
		code: "ady",
		englishName: "Adyghe"
	},
	{
		code: "lbe"
	},
	{
		code: "koi",
		englishName: "Komi-Permyak"
	},
	{
		code: "rw",
		nativeName: "Kinyarwanda",
		englishName: "Kinyarwanda"
	},
	{
		code: "wo",
		nativeName: "Wolof",
		englishName: "Wolof"
	},
	{
		code: "ff",
		nativeName: "Pulaar",
		englishName: "Fula"
	},
	{
		code: "srr",
		englishName: "Serer"
	},
	{
		code: "dyo",
		nativeName: "joola",
		englishName: "Jola-Fonyi"
	},
	{
		code: "sav"
	},
	{
		code: "mfv"
	},
	{
		code: "bjt"
	},
	{
		code: "snf"
	},
	{
		code: "knf"
	},
	{
		code: "bsc"
	},
	{
		code: "mey"
	},
	{
		code: "tnr"
	},
	{
		code: "so",
		nativeName: "Soomaali",
		englishName: "Somali"
	},
	{
		code: "ss",
		nativeName: "siSwati",
		englishName: "Swati"
	},
	{
		code: "th",
		nativeName: "ไทย",
		englishName: "Thai"
	},
	{
		code: "tg",
		nativeName: "тоҷикӣ",
		englishName: "Tajik"
	},
	{
		code: "tkl",
		englishName: "Tokelau"
	},
	{
		code: "tet",
		englishName: "Tetum"
	},
	{
		code: "to",
		nativeName: "lea fakatonga",
		englishName: "Tongan"
	},
	{
		code: "tvl",
		englishName: "Tuvalu"
	},
	{
		code: "haw",
		nativeName: "ʻŌlelo Hawaiʻi",
		englishName: "Hawaiian"
	},
	{
		code: "uz",
		nativeName: "o‘zbek",
		englishName: "Uzbek"
	},
	{
		code: "vi",
		nativeName: "Tiếng Việt",
		englishName: "Vietnamese"
	},
	{
		code: "bi",
		englishName: "Bislama"
	},
	{
		code: "zu",
		nativeName: "isiZulu",
		englishName: "Zulu"
	},
	{
		code: "xh",
		nativeName: "IsiXhosa",
		englishName: "Xhosa"
	},
	{
		code: "af",
		nativeName: "Afrikaans",
		englishName: "Afrikaans"
	},
	{
		code: "nso",
		nativeName: "Sesotho sa Leboa",
		englishName: "Northern Sotho"
	},
	{
		code: "ts",
		englishName: "Tsonga"
	},
	{
		code: "ve",
		englishName: "Venda"
	},
	{
		code: "nr",
		englishName: "South Ndebele"
	},
	{
		code: "sn",
		nativeName: "chiShona",
		englishName: "Shona"
	},
	{
		code: "nd",
		nativeName: "isiNdebele",
		englishName: "North Ndebele"
	}
];

var timezones = [
	{
		name: "Europe/Andorra",
		offset: -60,
		country: "AD"
	},
	{
		name: "Asia/Dubai",
		offset: -240,
		country: "AE"
	},
	{
		name: "Asia/Kabul",
		offset: -270,
		country: "AF"
	},
	{
		name: "America/Antigua",
		offset: 240,
		country: "AG"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "AG"
	},
	{
		name: "America/Anguilla",
		offset: 240,
		country: "AI"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "AI"
	},
	{
		name: "Europe/Tirane",
		offset: -60,
		country: "AL"
	},
	{
		name: "Asia/Yerevan",
		offset: -240,
		country: "AM"
	},
	{
		name: "Africa/Lagos",
		offset: -60,
		country: "AO"
	},
	{
		name: "Africa/Luanda",
		offset: -60,
		country: "AO"
	},
	{
		name: "America/Argentina/Buenos_Aires",
		offset: 180,
		country: "AR"
	},
	{
		name: "America/Argentina/Catamarca",
		offset: 180,
		country: "AR"
	},
	{
		name: "America/Argentina/Cordoba",
		offset: 180,
		country: "AR"
	},
	{
		name: "America/Argentina/Jujuy",
		offset: 180,
		country: "AR"
	},
	{
		name: "America/Argentina/La_Rioja",
		offset: 180,
		country: "AR"
	},
	{
		name: "America/Argentina/Mendoza",
		offset: 180,
		country: "AR"
	},
	{
		name: "America/Argentina/Rio_Gallegos",
		offset: 180,
		country: "AR"
	},
	{
		name: "America/Argentina/Salta",
		offset: 180,
		country: "AR"
	},
	{
		name: "America/Argentina/San_Juan",
		offset: 180,
		country: "AR"
	},
	{
		name: "America/Argentina/San_Luis",
		offset: 180,
		country: "AR"
	},
	{
		name: "America/Argentina/Tucuman",
		offset: 180,
		country: "AR"
	},
	{
		name: "America/Argentina/Ushuaia",
		offset: 180,
		country: "AR"
	},
	{
		name: "Pacific/Pago_Pago",
		offset: 660,
		country: "AS"
	},
	{
		name: "Europe/Vienna",
		offset: -60,
		country: "AT"
	},
	{
		name: "Antarctica/Macquarie",
		offset: -660,
		country: "AU"
	},
	{
		name: "Australia/Adelaide",
		offset: -630,
		country: "AU"
	},
	{
		name: "Australia/Brisbane",
		offset: -600,
		country: "AU"
	},
	{
		name: "Australia/Broken_Hill",
		offset: -630,
		country: "AU"
	},
	{
		name: "Australia/Darwin",
		offset: -570,
		country: "AU"
	},
	{
		name: "Australia/Eucla",
		offset: -525,
		country: "AU"
	},
	{
		name: "Australia/Hobart",
		offset: -660,
		country: "AU"
	},
	{
		name: "Australia/Lindeman",
		offset: -600,
		country: "AU"
	},
	{
		name: "Australia/Lord_Howe",
		offset: -660,
		country: "AU"
	},
	{
		name: "Australia/Melbourne",
		offset: -660,
		country: "AU"
	},
	{
		name: "Australia/Perth",
		offset: -480,
		country: "AU"
	},
	{
		name: "Australia/Sydney",
		offset: -660,
		country: "AU"
	},
	{
		name: "America/Aruba",
		offset: 240,
		country: "AW"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "AW"
	},
	{
		name: "Europe/Helsinki",
		offset: -120,
		country: "AX"
	},
	{
		name: "Europe/Mariehamn",
		offset: -120,
		country: "AX"
	},
	{
		name: "Asia/Baku",
		offset: -240,
		country: "AZ"
	},
	{
		name: "Europe/Belgrade",
		offset: -60,
		country: "BA"
	},
	{
		name: "Europe/Sarajevo",
		offset: -60,
		country: "BA"
	},
	{
		name: "America/Barbados",
		offset: 240,
		country: "BB"
	},
	{
		name: "Asia/Dhaka",
		offset: -360,
		country: "BD"
	},
	{
		name: "Europe/Brussels",
		offset: -60,
		country: "BE"
	},
	{
		name: "Africa/Abidjan",
		offset: 0,
		country: "BF"
	},
	{
		name: "Africa/Ouagadougou",
		offset: 0,
		country: "BF"
	},
	{
		name: "Europe/Sofia",
		offset: -120,
		country: "BG"
	},
	{
		name: "Asia/Bahrain",
		offset: -180,
		country: "BH"
	},
	{
		name: "Asia/Qatar",
		offset: -180,
		country: "BH"
	},
	{
		name: "Africa/Bujumbura",
		offset: -120,
		country: "BI"
	},
	{
		name: "Africa/Maputo",
		offset: -120,
		country: "BI"
	},
	{
		name: "Africa/Lagos",
		offset: -60,
		country: "BJ"
	},
	{
		name: "Africa/Porto-Novo",
		offset: -60,
		country: "BJ"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "BL"
	},
	{
		name: "America/St_Barthelemy",
		offset: 240,
		country: "BL"
	},
	{
		name: "Atlantic/Bermuda",
		offset: 240,
		country: "BM"
	},
	{
		name: "Asia/Brunei",
		offset: -480,
		country: "BN"
	},
	{
		name: "Asia/Kuching",
		offset: -480,
		country: "BN"
	},
	{
		name: "America/La_Paz",
		offset: 240,
		country: "BO"
	},
	{
		name: "America/Kralendijk",
		offset: 240,
		country: "BQ"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "BQ"
	},
	{
		name: "America/Araguaina",
		offset: 180,
		country: "BR"
	},
	{
		name: "America/Bahia",
		offset: 180,
		country: "BR"
	},
	{
		name: "America/Belem",
		offset: 180,
		country: "BR"
	},
	{
		name: "America/Boa_Vista",
		offset: 240,
		country: "BR"
	},
	{
		name: "America/Campo_Grande",
		offset: 240,
		country: "BR"
	},
	{
		name: "America/Cuiaba",
		offset: 240,
		country: "BR"
	},
	{
		name: "America/Eirunepe",
		offset: 300,
		country: "BR"
	},
	{
		name: "America/Fortaleza",
		offset: 180,
		country: "BR"
	},
	{
		name: "America/Maceio",
		offset: 180,
		country: "BR"
	},
	{
		name: "America/Manaus",
		offset: 240,
		country: "BR"
	},
	{
		name: "America/Noronha",
		offset: 120,
		country: "BR"
	},
	{
		name: "America/Porto_Velho",
		offset: 240,
		country: "BR"
	},
	{
		name: "America/Recife",
		offset: 180,
		country: "BR"
	},
	{
		name: "America/Rio_Branco",
		offset: 300,
		country: "BR"
	},
	{
		name: "America/Santarem",
		offset: 180,
		country: "BR"
	},
	{
		name: "America/Sao_Paulo",
		offset: 180,
		country: "BR"
	},
	{
		name: "America/Nassau",
		offset: 300,
		country: "BS"
	},
	{
		name: "America/Toronto",
		offset: 300,
		country: "BS"
	},
	{
		name: "Asia/Thimphu",
		offset: -360,
		country: "BT"
	},
	{
		name: "Africa/Gaborone",
		offset: -120,
		country: "BW"
	},
	{
		name: "Africa/Maputo",
		offset: -120,
		country: "BW"
	},
	{
		name: "Europe/Minsk",
		offset: -180,
		country: "BY"
	},
	{
		name: "America/Belize",
		offset: 360,
		country: "BZ"
	},
	{
		name: "America/Atikokan",
		offset: 300,
		country: "CA"
	},
	{
		name: "America/Blanc-Sablon",
		offset: 240,
		country: "CA"
	},
	{
		name: "America/Cambridge_Bay",
		offset: 420,
		country: "CA"
	},
	{
		name: "America/Creston",
		offset: 420,
		country: "CA"
	},
	{
		name: "America/Dawson",
		offset: 420,
		country: "CA"
	},
	{
		name: "America/Dawson_Creek",
		offset: 420,
		country: "CA"
	},
	{
		name: "America/Edmonton",
		offset: 420,
		country: "CA"
	},
	{
		name: "America/Fort_Nelson",
		offset: 420,
		country: "CA"
	},
	{
		name: "America/Glace_Bay",
		offset: 240,
		country: "CA"
	},
	{
		name: "America/Goose_Bay",
		offset: 240,
		country: "CA"
	},
	{
		name: "America/Halifax",
		offset: 240,
		country: "CA"
	},
	{
		name: "America/Inuvik",
		offset: 420,
		country: "CA"
	},
	{
		name: "America/Iqaluit",
		offset: 300,
		country: "CA"
	},
	{
		name: "America/Moncton",
		offset: 240,
		country: "CA"
	},
	{
		name: "America/Panama",
		offset: 300,
		country: "CA"
	},
	{
		name: "America/Phoenix",
		offset: 420,
		country: "CA"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "CA"
	},
	{
		name: "America/Rankin_Inlet",
		offset: 360,
		country: "CA"
	},
	{
		name: "America/Regina",
		offset: 360,
		country: "CA"
	},
	{
		name: "America/Resolute",
		offset: 360,
		country: "CA"
	},
	{
		name: "America/St_Johns",
		offset: 210,
		country: "CA"
	},
	{
		name: "America/Swift_Current",
		offset: 360,
		country: "CA"
	},
	{
		name: "America/Toronto",
		offset: 300,
		country: "CA"
	},
	{
		name: "America/Vancouver",
		offset: 480,
		country: "CA"
	},
	{
		name: "America/Whitehorse",
		offset: 420,
		country: "CA"
	},
	{
		name: "America/Winnipeg",
		offset: 360,
		country: "CA"
	},
	{
		name: "Asia/Yangon",
		offset: -390,
		country: "CC"
	},
	{
		name: "Indian/Cocos",
		offset: -390,
		country: "CC"
	},
	{
		name: "Africa/Kinshasa",
		offset: -60,
		country: "CD"
	},
	{
		name: "Africa/Lagos",
		offset: -60,
		country: "CD"
	},
	{
		name: "Africa/Lubumbashi",
		offset: -120,
		country: "CD"
	},
	{
		name: "Africa/Maputo",
		offset: -120,
		country: "CD"
	},
	{
		name: "Africa/Bangui",
		offset: -60,
		country: "CF"
	},
	{
		name: "Africa/Lagos",
		offset: -60,
		country: "CF"
	},
	{
		name: "Africa/Brazzaville",
		offset: -60,
		country: "CG"
	},
	{
		name: "Africa/Lagos",
		offset: -60,
		country: "CG"
	},
	{
		name: "Europe/Zurich",
		offset: -60,
		country: "CH"
	},
	{
		name: "Africa/Abidjan",
		offset: 0,
		country: "CI"
	},
	{
		name: "Pacific/Rarotonga",
		offset: 600,
		country: "CK"
	},
	{
		name: "America/Punta_Arenas",
		offset: 180,
		country: "CL"
	},
	{
		name: "America/Santiago",
		offset: 180,
		country: "CL"
	},
	{
		name: "Pacific/Easter",
		offset: 300,
		country: "CL"
	},
	{
		name: "Africa/Douala",
		offset: -60,
		country: "CM"
	},
	{
		name: "Africa/Lagos",
		offset: -60,
		country: "CM"
	},
	{
		name: "Asia/Shanghai",
		offset: -480,
		country: "CN"
	},
	{
		name: "Asia/Urumqi",
		offset: -360,
		country: "CN"
	},
	{
		name: "America/Bogota",
		offset: 300,
		country: "CO"
	},
	{
		name: "America/Costa_Rica",
		offset: 360,
		country: "CR"
	},
	{
		name: "America/Havana",
		offset: 300,
		country: "CU"
	},
	{
		name: "Atlantic/Cape_Verde",
		offset: 60,
		country: "CV"
	},
	{
		name: "America/Curacao",
		offset: 240,
		country: "CW"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "CW"
	},
	{
		name: "Asia/Bangkok",
		offset: -420,
		country: "CX"
	},
	{
		name: "Indian/Christmas",
		offset: -420,
		country: "CX"
	},
	{
		name: "Asia/Famagusta",
		offset: -120,
		country: "CY"
	},
	{
		name: "Asia/Nicosia",
		offset: -120,
		country: "CY"
	},
	{
		name: "Europe/Prague",
		offset: -60,
		country: "CZ"
	},
	{
		name: "Europe/Berlin",
		offset: -60,
		country: "DE"
	},
	{
		name: "Europe/Busingen",
		offset: -60,
		country: "DE"
	},
	{
		name: "Europe/Zurich",
		offset: -60,
		country: "DE"
	},
	{
		name: "Africa/Djibouti",
		offset: -180,
		country: "DJ"
	},
	{
		name: "Africa/Nairobi",
		offset: -180,
		country: "DJ"
	},
	{
		name: "Europe/Berlin",
		offset: -60,
		country: "DK"
	},
	{
		name: "Europe/Copenhagen",
		offset: -60,
		country: "DK"
	},
	{
		name: "America/Dominica",
		offset: 240,
		country: "DM"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "DM"
	},
	{
		name: "America/Santo_Domingo",
		offset: 240,
		country: "DO"
	},
	{
		name: "Africa/Algiers",
		offset: -60,
		country: "DZ"
	},
	{
		name: "America/Guayaquil",
		offset: 300,
		country: "EC"
	},
	{
		name: "Pacific/Galapagos",
		offset: 360,
		country: "EC"
	},
	{
		name: "Europe/Tallinn",
		offset: -120,
		country: "EE"
	},
	{
		name: "Africa/Cairo",
		offset: -120,
		country: "EG"
	},
	{
		name: "Africa/El_Aaiun",
		offset: -60,
		country: "EH"
	},
	{
		name: "Africa/Asmara",
		offset: -180,
		country: "ER"
	},
	{
		name: "Africa/Nairobi",
		offset: -180,
		country: "ER"
	},
	{
		name: "Africa/Ceuta",
		offset: -60,
		country: "ES"
	},
	{
		name: "Atlantic/Canary",
		offset: 0,
		country: "ES"
	},
	{
		name: "Europe/Madrid",
		offset: -60,
		country: "ES"
	},
	{
		name: "Africa/Addis_Ababa",
		offset: -180,
		country: "ET"
	},
	{
		name: "Africa/Nairobi",
		offset: -180,
		country: "ET"
	},
	{
		name: "Europe/Helsinki",
		offset: -120,
		country: "FI"
	},
	{
		name: "Pacific/Fiji",
		offset: -720,
		country: "FJ"
	},
	{
		name: "Atlantic/Stanley",
		offset: 180,
		country: "FK"
	},
	{
		name: "Pacific/Chuuk",
		offset: -600,
		country: "FM"
	},
	{
		name: "Pacific/Guadalcanal",
		offset: -660,
		country: "FM"
	},
	{
		name: "Pacific/Kosrae",
		offset: -660,
		country: "FM"
	},
	{
		name: "Pacific/Pohnpei",
		offset: -660,
		country: "FM"
	},
	{
		name: "Pacific/Port_Moresby",
		offset: -600,
		country: "FM"
	},
	{
		name: "Atlantic/Faroe",
		offset: 0,
		country: "FO"
	},
	{
		name: "Europe/Paris",
		offset: -60,
		country: "FR"
	},
	{
		name: "Africa/Lagos",
		offset: -60,
		country: "GA"
	},
	{
		name: "Africa/Libreville",
		offset: -60,
		country: "GA"
	},
	{
		name: "Europe/London",
		offset: 0,
		country: "GB"
	},
	{
		name: "America/Grenada",
		offset: 240,
		country: "GD"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "GD"
	},
	{
		name: "Asia/Tbilisi",
		offset: -240,
		country: "GE"
	},
	{
		name: "America/Cayenne",
		offset: 180,
		country: "GF"
	},
	{
		name: "Europe/Guernsey",
		offset: 0,
		country: "GG"
	},
	{
		name: "Europe/London",
		offset: 0,
		country: "GG"
	},
	{
		name: "Africa/Abidjan",
		offset: 0,
		country: "GH"
	},
	{
		name: "Africa/Accra",
		offset: 0,
		country: "GH"
	},
	{
		name: "Europe/Gibraltar",
		offset: -60,
		country: "GI"
	},
	{
		name: "America/Danmarkshavn",
		offset: 0,
		country: "GL"
	},
	{
		name: "America/Nuuk",
		offset: 120,
		country: "GL"
	},
	{
		name: "America/Scoresbysund",
		offset: 60,
		country: "GL"
	},
	{
		name: "America/Thule",
		offset: 240,
		country: "GL"
	},
	{
		name: "Africa/Abidjan",
		offset: 0,
		country: "GM"
	},
	{
		name: "Africa/Banjul",
		offset: 0,
		country: "GM"
	},
	{
		name: "Africa/Abidjan",
		offset: 0,
		country: "GN"
	},
	{
		name: "Africa/Conakry",
		offset: 0,
		country: "GN"
	},
	{
		name: "America/Guadeloupe",
		offset: 240,
		country: "GP"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "GP"
	},
	{
		name: "Africa/Lagos",
		offset: -60,
		country: "GQ"
	},
	{
		name: "Africa/Malabo",
		offset: -60,
		country: "GQ"
	},
	{
		name: "Europe/Athens",
		offset: -120,
		country: "GR"
	},
	{
		name: "America/Guatemala",
		offset: 360,
		country: "GT"
	},
	{
		name: "Pacific/Guam",
		offset: -600,
		country: "GU"
	},
	{
		name: "Africa/Bissau",
		offset: 0,
		country: "GW"
	},
	{
		name: "America/Guyana",
		offset: 240,
		country: "GY"
	},
	{
		name: "Asia/Hong_Kong",
		offset: -480,
		country: "HK"
	},
	{
		name: "America/Tegucigalpa",
		offset: 360,
		country: "HN"
	},
	{
		name: "Europe/Belgrade",
		offset: -60,
		country: "HR"
	},
	{
		name: "Europe/Zagreb",
		offset: -60,
		country: "HR"
	},
	{
		name: "America/Port-au-Prince",
		offset: 300,
		country: "HT"
	},
	{
		name: "Europe/Budapest",
		offset: -60,
		country: "HU"
	},
	{
		name: "Asia/Jakarta",
		offset: -420,
		country: "ID"
	},
	{
		name: "Asia/Jayapura",
		offset: -540,
		country: "ID"
	},
	{
		name: "Asia/Makassar",
		offset: -480,
		country: "ID"
	},
	{
		name: "Asia/Pontianak",
		offset: -420,
		country: "ID"
	},
	{
		name: "Europe/Dublin",
		offset: 0,
		country: "IE"
	},
	{
		name: "Asia/Jerusalem",
		offset: -120,
		country: "IL"
	},
	{
		name: "Europe/Isle_of_Man",
		offset: 0,
		country: "IM"
	},
	{
		name: "Europe/London",
		offset: 0,
		country: "IM"
	},
	{
		name: "Asia/Kolkata",
		offset: -330,
		country: "IN"
	},
	{
		name: "Indian/Chagos",
		offset: -360,
		country: "IO"
	},
	{
		name: "Asia/Baghdad",
		offset: -180,
		country: "IQ"
	},
	{
		name: "Asia/Tehran",
		offset: -210,
		country: "IR"
	},
	{
		name: "Africa/Abidjan",
		offset: 0,
		country: "IS"
	},
	{
		name: "Atlantic/Reykjavik",
		offset: 0,
		country: "IS"
	},
	{
		name: "Europe/Rome",
		offset: -60,
		country: "IT"
	},
	{
		name: "Europe/Jersey",
		offset: 0,
		country: "JE"
	},
	{
		name: "Europe/London",
		offset: 0,
		country: "JE"
	},
	{
		name: "America/Jamaica",
		offset: 300,
		country: "JM"
	},
	{
		name: "Asia/Amman",
		offset: -180,
		country: "JO"
	},
	{
		name: "Asia/Tokyo",
		offset: -540,
		country: "JP"
	},
	{
		name: "Africa/Nairobi",
		offset: -180,
		country: "KE"
	},
	{
		name: "Asia/Bishkek",
		offset: -360,
		country: "KG"
	},
	{
		name: "Asia/Bangkok",
		offset: -420,
		country: "KH"
	},
	{
		name: "Asia/Phnom_Penh",
		offset: -420,
		country: "KH"
	},
	{
		name: "Pacific/Kanton",
		offset: -780,
		country: "KI"
	},
	{
		name: "Pacific/Kiritimati",
		offset: -840,
		country: "KI"
	},
	{
		name: "Pacific/Tarawa",
		offset: -720,
		country: "KI"
	},
	{
		name: "Africa/Nairobi",
		offset: -180,
		country: "KM"
	},
	{
		name: "Indian/Comoro",
		offset: -180,
		country: "KM"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "KN"
	},
	{
		name: "America/St_Kitts",
		offset: 240,
		country: "KN"
	},
	{
		name: "Asia/Pyongyang",
		offset: -540,
		country: "KP"
	},
	{
		name: "Asia/Seoul",
		offset: -540,
		country: "KR"
	},
	{
		name: "Asia/Kuwait",
		offset: -180,
		country: "KW"
	},
	{
		name: "Asia/Riyadh",
		offset: -180,
		country: "KW"
	},
	{
		name: "America/Cayman",
		offset: 300,
		country: "KY"
	},
	{
		name: "America/Panama",
		offset: 300,
		country: "KY"
	},
	{
		name: "Asia/Almaty",
		offset: -300,
		country: "KZ"
	},
	{
		name: "Asia/Aqtau",
		offset: -300,
		country: "KZ"
	},
	{
		name: "Asia/Aqtobe",
		offset: -300,
		country: "KZ"
	},
	{
		name: "Asia/Atyrau",
		offset: -300,
		country: "KZ"
	},
	{
		name: "Asia/Oral",
		offset: -300,
		country: "KZ"
	},
	{
		name: "Asia/Qostanay",
		offset: -300,
		country: "KZ"
	},
	{
		name: "Asia/Qyzylorda",
		offset: -300,
		country: "KZ"
	},
	{
		name: "Asia/Bangkok",
		offset: -420,
		country: "LA"
	},
	{
		name: "Asia/Vientiane",
		offset: -420,
		country: "LA"
	},
	{
		name: "Asia/Beirut",
		offset: -120,
		country: "LB"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "LC"
	},
	{
		name: "America/St_Lucia",
		offset: 240,
		country: "LC"
	},
	{
		name: "Europe/Vaduz",
		offset: -60,
		country: "LI"
	},
	{
		name: "Europe/Zurich",
		offset: -60,
		country: "LI"
	},
	{
		name: "Asia/Colombo",
		offset: -330,
		country: "LK"
	},
	{
		name: "Africa/Monrovia",
		offset: 0,
		country: "LR"
	},
	{
		name: "Africa/Johannesburg",
		offset: -120,
		country: "LS"
	},
	{
		name: "Africa/Maseru",
		offset: -120,
		country: "LS"
	},
	{
		name: "Europe/Vilnius",
		offset: -120,
		country: "LT"
	},
	{
		name: "Europe/Brussels",
		offset: -60,
		country: "LU"
	},
	{
		name: "Europe/Luxembourg",
		offset: -60,
		country: "LU"
	},
	{
		name: "Europe/Riga",
		offset: -120,
		country: "LV"
	},
	{
		name: "Africa/Tripoli",
		offset: -120,
		country: "LY"
	},
	{
		name: "Africa/Casablanca",
		offset: -60,
		country: "MA"
	},
	{
		name: "Europe/Monaco",
		offset: -60,
		country: "MC"
	},
	{
		name: "Europe/Paris",
		offset: -60,
		country: "MC"
	},
	{
		name: "Europe/Chisinau",
		offset: -120,
		country: "MD"
	},
	{
		name: "Europe/Belgrade",
		offset: -60,
		country: "ME"
	},
	{
		name: "Europe/Podgorica",
		offset: -60,
		country: "ME"
	},
	{
		name: "America/Marigot",
		offset: 240,
		country: "MF"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "MF"
	},
	{
		name: "Africa/Nairobi",
		offset: -180,
		country: "MG"
	},
	{
		name: "Indian/Antananarivo",
		offset: -180,
		country: "MG"
	},
	{
		name: "Pacific/Kwajalein",
		offset: -720,
		country: "MH"
	},
	{
		name: "Pacific/Majuro",
		offset: -720,
		country: "MH"
	},
	{
		name: "Pacific/Tarawa",
		offset: -720,
		country: "MH"
	},
	{
		name: "Europe/Belgrade",
		offset: -60,
		country: "MK"
	},
	{
		name: "Europe/Skopje",
		offset: -60,
		country: "MK"
	},
	{
		name: "Africa/Abidjan",
		offset: 0,
		country: "ML"
	},
	{
		name: "Africa/Bamako",
		offset: 0,
		country: "ML"
	},
	{
		name: "Asia/Yangon",
		offset: -390,
		country: "MM"
	},
	{
		name: "Asia/Choibalsan",
		offset: -480,
		country: "MN"
	},
	{
		name: "Asia/Hovd",
		offset: -420,
		country: "MN"
	},
	{
		name: "Asia/Ulaanbaatar",
		offset: -480,
		country: "MN"
	},
	{
		name: "Asia/Macau",
		offset: -480,
		country: "MO"
	},
	{
		name: "Pacific/Guam",
		offset: -600,
		country: "MP"
	},
	{
		name: "Pacific/Saipan",
		offset: -600,
		country: "MP"
	},
	{
		name: "America/Martinique",
		offset: 240,
		country: "MQ"
	},
	{
		name: "Africa/Abidjan",
		offset: 0,
		country: "MR"
	},
	{
		name: "Africa/Nouakchott",
		offset: 0,
		country: "MR"
	},
	{
		name: "America/Montserrat",
		offset: 240,
		country: "MS"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "MS"
	},
	{
		name: "Europe/Malta",
		offset: -60,
		country: "MT"
	},
	{
		name: "Indian/Mauritius",
		offset: -240,
		country: "MU"
	},
	{
		name: "Indian/Maldives",
		offset: -300,
		country: "MV"
	},
	{
		name: "Africa/Blantyre",
		offset: -120,
		country: "MW"
	},
	{
		name: "Africa/Maputo",
		offset: -120,
		country: "MW"
	},
	{
		name: "America/Bahia_Banderas",
		offset: 360,
		country: "MX"
	},
	{
		name: "America/Cancun",
		offset: 300,
		country: "MX"
	},
	{
		name: "America/Chihuahua",
		offset: 360,
		country: "MX"
	},
	{
		name: "America/Ciudad_Juarez",
		offset: 420,
		country: "MX"
	},
	{
		name: "America/Hermosillo",
		offset: 420,
		country: "MX"
	},
	{
		name: "America/Matamoros",
		offset: 360,
		country: "MX"
	},
	{
		name: "America/Mazatlan",
		offset: 420,
		country: "MX"
	},
	{
		name: "America/Merida",
		offset: 360,
		country: "MX"
	},
	{
		name: "America/Mexico_City",
		offset: 360,
		country: "MX"
	},
	{
		name: "America/Monterrey",
		offset: 360,
		country: "MX"
	},
	{
		name: "America/Ojinaga",
		offset: 360,
		country: "MX"
	},
	{
		name: "America/Tijuana",
		offset: 480,
		country: "MX"
	},
	{
		name: "Asia/Kuala_Lumpur",
		offset: -480,
		country: "MY"
	},
	{
		name: "Asia/Kuching",
		offset: -480,
		country: "MY"
	},
	{
		name: "Asia/Singapore",
		offset: -480,
		country: "MY"
	},
	{
		name: "Africa/Maputo",
		offset: -120,
		country: "MZ"
	},
	{
		name: "Africa/Windhoek",
		offset: -120,
		country: "NA"
	},
	{
		name: "Pacific/Noumea",
		offset: -660,
		country: "NC"
	},
	{
		name: "Africa/Lagos",
		offset: -60,
		country: "NE"
	},
	{
		name: "Africa/Niamey",
		offset: -60,
		country: "NE"
	},
	{
		name: "Pacific/Norfolk",
		offset: -720,
		country: "NF"
	},
	{
		name: "Africa/Lagos",
		offset: -60,
		country: "NG"
	},
	{
		name: "America/Managua",
		offset: 360,
		country: "NI"
	},
	{
		name: "Europe/Amsterdam",
		offset: -60,
		country: "NL"
	},
	{
		name: "Europe/Brussels",
		offset: -60,
		country: "NL"
	},
	{
		name: "Europe/Berlin",
		offset: -60,
		country: "NO"
	},
	{
		name: "Europe/Oslo",
		offset: -60,
		country: "NO"
	},
	{
		name: "Asia/Kathmandu",
		offset: -345,
		country: "NP"
	},
	{
		name: "Pacific/Nauru",
		offset: -720,
		country: "NR"
	},
	{
		name: "Pacific/Niue",
		offset: 660,
		country: "NU"
	},
	{
		name: "Pacific/Auckland",
		offset: -780,
		country: "NZ"
	},
	{
		name: "Pacific/Chatham",
		offset: -825,
		country: "NZ"
	},
	{
		name: "Asia/Dubai",
		offset: -240,
		country: "OM"
	},
	{
		name: "Asia/Muscat",
		offset: -240,
		country: "OM"
	},
	{
		name: "America/Panama",
		offset: 300,
		country: "PA"
	},
	{
		name: "America/Lima",
		offset: 300,
		country: "PE"
	},
	{
		name: "Pacific/Gambier",
		offset: 540,
		country: "PF"
	},
	{
		name: "Pacific/Marquesas",
		offset: 570,
		country: "PF"
	},
	{
		name: "Pacific/Tahiti",
		offset: 600,
		country: "PF"
	},
	{
		name: "Pacific/Bougainville",
		offset: -660,
		country: "PG"
	},
	{
		name: "Pacific/Port_Moresby",
		offset: -600,
		country: "PG"
	},
	{
		name: "Asia/Manila",
		offset: -480,
		country: "PH"
	},
	{
		name: "Asia/Karachi",
		offset: -300,
		country: "PK"
	},
	{
		name: "Europe/Warsaw",
		offset: -60,
		country: "PL"
	},
	{
		name: "America/Miquelon",
		offset: 180,
		country: "PM"
	},
	{
		name: "Pacific/Pitcairn",
		offset: 480,
		country: "PN"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "PR"
	},
	{
		name: "Asia/Gaza",
		offset: -120,
		country: "PS"
	},
	{
		name: "Asia/Hebron",
		offset: -120,
		country: "PS"
	},
	{
		name: "Atlantic/Azores",
		offset: 60,
		country: "PT"
	},
	{
		name: "Atlantic/Madeira",
		offset: 0,
		country: "PT"
	},
	{
		name: "Europe/Lisbon",
		offset: 0,
		country: "PT"
	},
	{
		name: "Pacific/Palau",
		offset: -540,
		country: "PW"
	},
	{
		name: "America/Asuncion",
		offset: 180,
		country: "PY"
	},
	{
		name: "Asia/Qatar",
		offset: -180,
		country: "QA"
	},
	{
		name: "Asia/Dubai",
		offset: -240,
		country: "RE"
	},
	{
		name: "Indian/Reunion",
		offset: -240,
		country: "RE"
	},
	{
		name: "Europe/Bucharest",
		offset: -120,
		country: "RO"
	},
	{
		name: "Europe/Belgrade",
		offset: -60,
		country: "RS"
	},
	{
		name: "Asia/Anadyr",
		offset: -720,
		country: "RU"
	},
	{
		name: "Asia/Barnaul",
		offset: -420,
		country: "RU"
	},
	{
		name: "Asia/Chita",
		offset: -540,
		country: "RU"
	},
	{
		name: "Asia/Irkutsk",
		offset: -480,
		country: "RU"
	},
	{
		name: "Asia/Kamchatka",
		offset: -720,
		country: "RU"
	},
	{
		name: "Asia/Khandyga",
		offset: -540,
		country: "RU"
	},
	{
		name: "Asia/Krasnoyarsk",
		offset: -420,
		country: "RU"
	},
	{
		name: "Asia/Magadan",
		offset: -660,
		country: "RU"
	},
	{
		name: "Asia/Novokuznetsk",
		offset: -420,
		country: "RU"
	},
	{
		name: "Asia/Novosibirsk",
		offset: -420,
		country: "RU"
	},
	{
		name: "Asia/Omsk",
		offset: -360,
		country: "RU"
	},
	{
		name: "Asia/Sakhalin",
		offset: -660,
		country: "RU"
	},
	{
		name: "Asia/Srednekolymsk",
		offset: -660,
		country: "RU"
	},
	{
		name: "Asia/Tomsk",
		offset: -420,
		country: "RU"
	},
	{
		name: "Asia/Ust-Nera",
		offset: -600,
		country: "RU"
	},
	{
		name: "Asia/Vladivostok",
		offset: -600,
		country: "RU"
	},
	{
		name: "Asia/Yakutsk",
		offset: -540,
		country: "RU"
	},
	{
		name: "Asia/Yekaterinburg",
		offset: -300,
		country: "RU"
	},
	{
		name: "Europe/Astrakhan",
		offset: -240,
		country: "RU"
	},
	{
		name: "Europe/Kaliningrad",
		offset: -120,
		country: "RU"
	},
	{
		name: "Europe/Kirov",
		offset: -180,
		country: "RU"
	},
	{
		name: "Europe/Moscow",
		offset: -180,
		country: "RU"
	},
	{
		name: "Europe/Samara",
		offset: -240,
		country: "RU"
	},
	{
		name: "Europe/Saratov",
		offset: -240,
		country: "RU"
	},
	{
		name: "Europe/Simferopol",
		offset: -180,
		country: "RU"
	},
	{
		name: "Europe/Ulyanovsk",
		offset: -240,
		country: "RU"
	},
	{
		name: "Europe/Volgograd",
		offset: -180,
		country: "RU"
	},
	{
		name: "Africa/Kigali",
		offset: -120,
		country: "RW"
	},
	{
		name: "Africa/Maputo",
		offset: -120,
		country: "RW"
	},
	{
		name: "Asia/Riyadh",
		offset: -180,
		country: "SA"
	},
	{
		name: "Pacific/Guadalcanal",
		offset: -660,
		country: "SB"
	},
	{
		name: "Asia/Dubai",
		offset: -240,
		country: "SC"
	},
	{
		name: "Indian/Mahe",
		offset: -240,
		country: "SC"
	},
	{
		name: "Africa/Khartoum",
		offset: -120,
		country: "SD"
	},
	{
		name: "Europe/Berlin",
		offset: -60,
		country: "SE"
	},
	{
		name: "Europe/Stockholm",
		offset: -60,
		country: "SE"
	},
	{
		name: "Asia/Singapore",
		offset: -480,
		country: "SG"
	},
	{
		name: "Africa/Abidjan",
		offset: 0,
		country: "SH"
	},
	{
		name: "Atlantic/St_Helena",
		offset: 0,
		country: "SH"
	},
	{
		name: "Europe/Belgrade",
		offset: -60,
		country: "SI"
	},
	{
		name: "Europe/Ljubljana",
		offset: -60,
		country: "SI"
	},
	{
		name: "Arctic/Longyearbyen",
		offset: -60,
		country: "SJ"
	},
	{
		name: "Europe/Berlin",
		offset: -60,
		country: "SJ"
	},
	{
		name: "Europe/Bratislava",
		offset: -60,
		country: "SK"
	},
	{
		name: "Europe/Prague",
		offset: -60,
		country: "SK"
	},
	{
		name: "Africa/Abidjan",
		offset: 0,
		country: "SL"
	},
	{
		name: "Africa/Freetown",
		offset: 0,
		country: "SL"
	},
	{
		name: "Europe/Rome",
		offset: -60,
		country: "SM"
	},
	{
		name: "Europe/San_Marino",
		offset: -60,
		country: "SM"
	},
	{
		name: "Africa/Abidjan",
		offset: 0,
		country: "SN"
	},
	{
		name: "Africa/Dakar",
		offset: 0,
		country: "SN"
	},
	{
		name: "Africa/Mogadishu",
		offset: -180,
		country: "SO"
	},
	{
		name: "Africa/Nairobi",
		offset: -180,
		country: "SO"
	},
	{
		name: "America/Paramaribo",
		offset: 180,
		country: "SR"
	},
	{
		name: "Africa/Juba",
		offset: -120,
		country: "SS"
	},
	{
		name: "Africa/Sao_Tome",
		offset: 0,
		country: "ST"
	},
	{
		name: "America/El_Salvador",
		offset: 360,
		country: "SV"
	},
	{
		name: "America/Lower_Princes",
		offset: 240,
		country: "SX"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "SX"
	},
	{
		name: "Asia/Damascus",
		offset: -180,
		country: "SY"
	},
	{
		name: "Africa/Johannesburg",
		offset: -120,
		country: "SZ"
	},
	{
		name: "Africa/Mbabane",
		offset: -120,
		country: "SZ"
	},
	{
		name: "America/Grand_Turk",
		offset: 300,
		country: "TC"
	},
	{
		name: "Africa/Ndjamena",
		offset: -60,
		country: "TD"
	},
	{
		name: "Africa/Abidjan",
		offset: 0,
		country: "TG"
	},
	{
		name: "Africa/Lome",
		offset: 0,
		country: "TG"
	},
	{
		name: "Asia/Bangkok",
		offset: -420,
		country: "TH"
	},
	{
		name: "Asia/Dushanbe",
		offset: -300,
		country: "TJ"
	},
	{
		name: "Pacific/Fakaofo",
		offset: -780,
		country: "TK"
	},
	{
		name: "Asia/Dili",
		offset: -540,
		country: "TL"
	},
	{
		name: "Asia/Ashgabat",
		offset: -300,
		country: "TM"
	},
	{
		name: "Africa/Tunis",
		offset: -60,
		country: "TN"
	},
	{
		name: "Pacific/Tongatapu",
		offset: -780,
		country: "TO"
	},
	{
		name: "Europe/Istanbul",
		offset: -180,
		country: "TR"
	},
	{
		name: "America/Port_of_Spain",
		offset: 240,
		country: "TT"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "TT"
	},
	{
		name: "Pacific/Funafuti",
		offset: -720,
		country: "TV"
	},
	{
		name: "Pacific/Tarawa",
		offset: -720,
		country: "TV"
	},
	{
		name: "Asia/Taipei",
		offset: -480,
		country: "TW"
	},
	{
		name: "Africa/Dar_es_Salaam",
		offset: -180,
		country: "TZ"
	},
	{
		name: "Africa/Nairobi",
		offset: -180,
		country: "TZ"
	},
	{
		name: "Europe/Kyiv",
		offset: -120,
		country: "UA"
	},
	{
		name: "Europe/Simferopol",
		offset: -180,
		country: "UA"
	},
	{
		name: "Africa/Kampala",
		offset: -180,
		country: "UG"
	},
	{
		name: "Africa/Nairobi",
		offset: -180,
		country: "UG"
	},
	{
		name: "Pacific/Midway",
		offset: 660,
		country: "UM"
	},
	{
		name: "Pacific/Pago_Pago",
		offset: 660,
		country: "UM"
	},
	{
		name: "Pacific/Tarawa",
		offset: -720,
		country: "UM"
	},
	{
		name: "Pacific/Wake",
		offset: -720,
		country: "UM"
	},
	{
		name: "America/Adak",
		offset: 600,
		country: "US"
	},
	{
		name: "America/Anchorage",
		offset: 540,
		country: "US"
	},
	{
		name: "America/Boise",
		offset: 420,
		country: "US"
	},
	{
		name: "America/Chicago",
		offset: 360,
		country: "US"
	},
	{
		name: "America/Denver",
		offset: 420,
		country: "US"
	},
	{
		name: "America/Detroit",
		offset: 300,
		country: "US"
	},
	{
		name: "America/Indiana/Indianapolis",
		offset: 300,
		country: "US"
	},
	{
		name: "America/Indiana/Knox",
		offset: 360,
		country: "US"
	},
	{
		name: "America/Indiana/Marengo",
		offset: 300,
		country: "US"
	},
	{
		name: "America/Indiana/Petersburg",
		offset: 300,
		country: "US"
	},
	{
		name: "America/Indiana/Tell_City",
		offset: 360,
		country: "US"
	},
	{
		name: "America/Indiana/Vevay",
		offset: 300,
		country: "US"
	},
	{
		name: "America/Indiana/Vincennes",
		offset: 300,
		country: "US"
	},
	{
		name: "America/Indiana/Winamac",
		offset: 300,
		country: "US"
	},
	{
		name: "America/Juneau",
		offset: 540,
		country: "US"
	},
	{
		name: "America/Kentucky/Louisville",
		offset: 300,
		country: "US"
	},
	{
		name: "America/Kentucky/Monticello",
		offset: 300,
		country: "US"
	},
	{
		name: "America/Los_Angeles",
		offset: 480,
		country: "US"
	},
	{
		name: "America/Menominee",
		offset: 360,
		country: "US"
	},
	{
		name: "America/Metlakatla",
		offset: 540,
		country: "US"
	},
	{
		name: "America/New_York",
		offset: 300,
		country: "US"
	},
	{
		name: "America/Nome",
		offset: 540,
		country: "US"
	},
	{
		name: "America/North_Dakota/Beulah",
		offset: 360,
		country: "US"
	},
	{
		name: "America/North_Dakota/Center",
		offset: 360,
		country: "US"
	},
	{
		name: "America/North_Dakota/New_Salem",
		offset: 360,
		country: "US"
	},
	{
		name: "America/Phoenix",
		offset: 420,
		country: "US"
	},
	{
		name: "America/Sitka",
		offset: 540,
		country: "US"
	},
	{
		name: "America/Yakutat",
		offset: 540,
		country: "US"
	},
	{
		name: "Pacific/Honolulu",
		offset: 600,
		country: "US"
	},
	{
		name: "America/Montevideo",
		offset: 180,
		country: "UY"
	},
	{
		name: "Asia/Samarkand",
		offset: -300,
		country: "UZ"
	},
	{
		name: "Asia/Tashkent",
		offset: -300,
		country: "UZ"
	},
	{
		name: "Europe/Rome",
		offset: -60,
		country: "VA"
	},
	{
		name: "Europe/Vatican",
		offset: -60,
		country: "VA"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "VC"
	},
	{
		name: "America/St_Vincent",
		offset: 240,
		country: "VC"
	},
	{
		name: "America/Caracas",
		offset: 240,
		country: "VE"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "VG"
	},
	{
		name: "America/Tortola",
		offset: 240,
		country: "VG"
	},
	{
		name: "America/Puerto_Rico",
		offset: 240,
		country: "VI"
	},
	{
		name: "America/St_Thomas",
		offset: 240,
		country: "VI"
	},
	{
		name: "Asia/Bangkok",
		offset: -420,
		country: "VN"
	},
	{
		name: "Asia/Ho_Chi_Minh",
		offset: -420,
		country: "VN"
	},
	{
		name: "Pacific/Efate",
		offset: -660,
		country: "VU"
	},
	{
		name: "Pacific/Tarawa",
		offset: -720,
		country: "WF"
	},
	{
		name: "Pacific/Wallis",
		offset: -720,
		country: "WF"
	},
	{
		name: "Pacific/Apia",
		offset: -780,
		country: "WS"
	},
	{
		name: "Asia/Aden",
		offset: -180,
		country: "YE"
	},
	{
		name: "Asia/Riyadh",
		offset: -180,
		country: "YE"
	},
	{
		name: "Africa/Nairobi",
		offset: -180,
		country: "YT"
	},
	{
		name: "Indian/Mayotte",
		offset: -180,
		country: "YT"
	},
	{
		name: "Africa/Johannesburg",
		offset: -120,
		country: "ZA"
	},
	{
		name: "Africa/Lusaka",
		offset: -120,
		country: "ZM"
	},
	{
		name: "Africa/Maputo",
		offset: -120,
		country: "ZM"
	},
	{
		name: "Africa/Harare",
		offset: -120,
		country: "ZW"
	},
	{
		name: "Africa/Maputo",
		offset: -120,
		country: "ZW"
	}
];

var AC = "SHP";
var AD = "EUR";
var AE = "AED";
var AF = "AFN";
var AG = "XCD";
var AI = "XCD";
var AL = "ALL";
var AM = "AMD";
var AO = "AOA";
var AR = "ARS";
var AS = "USD";
var AT = "EUR";
var AU = "AUD";
var AW = "AWG";
var AX = "EUR";
var AZ = "AZN";
var BA = "BAM";
var BB = "BBD";
var BD = "BDT";
var BE = "EUR";
var BF = "XOF";
var BG = "BGN";
var BH = "BHD";
var BI = "BIF";
var BJ = "XOF";
var BL = "EUR";
var BM = "BMD";
var BN = "BND";
var BO = "BOB";
var BQ = "USD";
var BR = "BRL";
var BS = "BSD";
var BT = "BTN";
var BU = "BUK";
var BV = "NOK";
var BW = "BWP";
var BY = "BYN";
var BZ = "BZD";
var CA = "CAD";
var CC = "AUD";
var CD = "CDF";
var CF = "XAF";
var CG = "XAF";
var CH = "CHF";
var CI = "XOF";
var CK = "NZD";
var CL = "CLP";
var CM = "XAF";
var CN = "CNY";
var CO = "COP";
var CR = "CRC";
var CS = "CSD";
var CU = "CUP";
var CV = "CVE";
var CW = "ANG";
var CX = "AUD";
var CY = "EUR";
var CZ = "CZK";
var DD = "DDM";
var DE = "EUR";
var DG = "USD";
var DJ = "DJF";
var DK = "DKK";
var DM = "XCD";
var DO = "DOP";
var DZ = "DZD";
var EA = "EUR";
var EC = "USD";
var EE = "EUR";
var EG = "EGP";
var EH = "MAD";
var ER = "ERN";
var ES = "EUR";
var ET = "ETB";
var EU = "EUR";
var FI = "EUR";
var FJ = "FJD";
var FK = "FKP";
var FM = "USD";
var FO = "DKK";
var FR = "EUR";
var GA = "XAF";
var GB = "GBP";
var GD = "XCD";
var GE = "GEL";
var GF = "EUR";
var GG = "GBP";
var GH = "GHS";
var GI = "GIP";
var GL = "DKK";
var GM = "GMD";
var GN = "GNF";
var GP = "EUR";
var GQ = "XAF";
var GR = "EUR";
var GS = "GBP";
var GT = "GTQ";
var GU = "USD";
var GW = "XOF";
var GY = "GYD";
var HK = "HKD";
var HM = "AUD";
var HN = "HNL";
var HR = "EUR";
var HT = "HTG";
var HU = "HUF";
var IC = "EUR";
var ID = "IDR";
var IE = "EUR";
var IL = "ILS";
var IM = "GBP";
var IN = "INR";
var IO = "USD";
var IQ = "IQD";
var IR = "IRR";
var IS = "ISK";
var IT = "EUR";
var JE = "GBP";
var JM = "JMD";
var JO = "JOD";
var JP = "JPY";
var KE = "KES";
var KG = "KGS";
var KH = "KHR";
var KI = "AUD";
var KM = "KMF";
var KN = "XCD";
var KP = "KPW";
var KR = "KRW";
var KW = "KWD";
var KY = "KYD";
var KZ = "KZT";
var LA = "LAK";
var LB = "LBP";
var LC = "XCD";
var LI = "CHF";
var LK = "LKR";
var LR = "LRD";
var LS = "ZAR";
var LT = "EUR";
var LU = "EUR";
var LV = "EUR";
var LY = "LYD";
var MA = "MAD";
var MC = "EUR";
var MD = "MDL";
var ME = "EUR";
var MF = "EUR";
var MG = "MGA";
var MH = "USD";
var MK = "MKD";
var ML = "XOF";
var MM = "MMK";
var MN = "MNT";
var MO = "MOP";
var MP = "USD";
var MQ = "EUR";
var MR = "MRU";
var MS = "XCD";
var MT = "EUR";
var MU = "MUR";
var MV = "MVR";
var MW = "MWK";
var MX = "MXN";
var MY = "MYR";
var MZ = "MZN";
var NA = "NAD";
var NC = "XPF";
var NE = "XOF";
var NF = "AUD";
var NG = "NGN";
var NI = "NIO";
var NL = "EUR";
var NO = "NOK";
var NP = "NPR";
var NR = "AUD";
var NU = "NZD";
var NZ = "NZD";
var OM = "OMR";
var PA = "PAB";
var PE = "PEN";
var PF = "XPF";
var PG = "PGK";
var PH = "PHP";
var PK = "PKR";
var PL = "PLN";
var PM = "EUR";
var PN = "NZD";
var PR = "USD";
var PS = "ILS";
var PT = "EUR";
var PW = "USD";
var PY = "PYG";
var QA = "QAR";
var RE = "EUR";
var RO = "RON";
var RS = "RSD";
var RU = "RUB";
var RW = "RWF";
var SA = "SAR";
var SB = "SBD";
var SC = "SCR";
var SD = "SDG";
var SE = "SEK";
var SG = "SGD";
var SH = "SHP";
var SI = "EUR";
var SJ = "NOK";
var SK = "EUR";
var SL = "SLE";
var SM = "EUR";
var SN = "XOF";
var SO = "SOS";
var SR = "SRD";
var SS = "SSP";
var ST = "STN";
var SU = "SUR";
var SV = "USD";
var SX = "ANG";
var SY = "SYP";
var SZ = "SZL";
var TA = "GBP";
var TC = "USD";
var TD = "XAF";
var TF = "EUR";
var TG = "XOF";
var TH = "THB";
var TJ = "TJS";
var TK = "NZD";
var TL = "USD";
var TM = "TMT";
var TN = "TND";
var TO = "TOP";
var TP = "TPE";
var TR = "TRY";
var TT = "TTD";
var TV = "AUD";
var TW = "TWD";
var TZ = "TZS";
var UA = "UAH";
var UG = "UGX";
var UM = "USD";
var US = "USD";
var UY = "UYU";
var UZ = "UZS";
var VA = "EUR";
var VC = "XCD";
var VE = "VES";
var VG = "USD";
var VI = "USD";
var VN = "VND";
var VU = "VUV";
var WF = "XPF";
var WS = "WST";
var XK = "EUR";
var YE = "YER";
var YD = "YDD";
var YT = "EUR";
var YU = "YUM";
var ZA = "ZAR";
var ZM = "ZMW";
var ZR = "ZRN";
var ZW = "USD";
var ZZ = "XAG";
var countryCurrencies = {
	AC: AC,
	AD: AD,
	AE: AE,
	AF: AF,
	AG: AG,
	AI: AI,
	AL: AL,
	AM: AM,
	AO: AO,
	AR: AR,
	AS: AS,
	AT: AT,
	AU: AU,
	AW: AW,
	AX: AX,
	AZ: AZ,
	BA: BA,
	BB: BB,
	BD: BD,
	BE: BE,
	BF: BF,
	BG: BG,
	BH: BH,
	BI: BI,
	BJ: BJ,
	BL: BL,
	BM: BM,
	BN: BN,
	BO: BO,
	BQ: BQ,
	BR: BR,
	BS: BS,
	BT: BT,
	BU: BU,
	BV: BV,
	BW: BW,
	BY: BY,
	BZ: BZ,
	CA: CA,
	CC: CC,
	CD: CD,
	CF: CF,
	CG: CG,
	CH: CH,
	CI: CI,
	CK: CK,
	CL: CL,
	CM: CM,
	CN: CN,
	CO: CO,
	CR: CR,
	CS: CS,
	CU: CU,
	CV: CV,
	CW: CW,
	CX: CX,
	CY: CY,
	CZ: CZ,
	DD: DD,
	DE: DE,
	DG: DG,
	DJ: DJ,
	DK: DK,
	DM: DM,
	DO: DO,
	DZ: DZ,
	EA: EA,
	EC: EC,
	EE: EE,
	EG: EG,
	EH: EH,
	ER: ER,
	ES: ES,
	ET: ET,
	EU: EU,
	FI: FI,
	FJ: FJ,
	FK: FK,
	FM: FM,
	FO: FO,
	FR: FR,
	GA: GA,
	GB: GB,
	GD: GD,
	GE: GE,
	GF: GF,
	GG: GG,
	GH: GH,
	GI: GI,
	GL: GL,
	GM: GM,
	GN: GN,
	GP: GP,
	GQ: GQ,
	GR: GR,
	GS: GS,
	GT: GT,
	GU: GU,
	GW: GW,
	GY: GY,
	HK: HK,
	HM: HM,
	HN: HN,
	HR: HR,
	HT: HT,
	HU: HU,
	IC: IC,
	ID: ID,
	IE: IE,
	IL: IL,
	IM: IM,
	IN: IN,
	IO: IO,
	IQ: IQ,
	IR: IR,
	IS: IS,
	IT: IT,
	JE: JE,
	JM: JM,
	JO: JO,
	JP: JP,
	KE: KE,
	KG: KG,
	KH: KH,
	KI: KI,
	KM: KM,
	KN: KN,
	KP: KP,
	KR: KR,
	KW: KW,
	KY: KY,
	KZ: KZ,
	LA: LA,
	LB: LB,
	LC: LC,
	LI: LI,
	LK: LK,
	LR: LR,
	LS: LS,
	LT: LT,
	LU: LU,
	LV: LV,
	LY: LY,
	MA: MA,
	MC: MC,
	MD: MD,
	ME: ME,
	MF: MF,
	MG: MG,
	MH: MH,
	MK: MK,
	ML: ML,
	MM: MM,
	MN: MN,
	MO: MO,
	MP: MP,
	MQ: MQ,
	MR: MR,
	MS: MS,
	MT: MT,
	MU: MU,
	MV: MV,
	MW: MW,
	MX: MX,
	MY: MY,
	MZ: MZ,
	NA: NA,
	NC: NC,
	NE: NE,
	NF: NF,
	NG: NG,
	NI: NI,
	NL: NL,
	NO: NO,
	NP: NP,
	NR: NR,
	NU: NU,
	NZ: NZ,
	OM: OM,
	PA: PA,
	PE: PE,
	PF: PF,
	PG: PG,
	PH: PH,
	PK: PK,
	PL: PL,
	PM: PM,
	PN: PN,
	PR: PR,
	PS: PS,
	PT: PT,
	PW: PW,
	PY: PY,
	QA: QA,
	RE: RE,
	RO: RO,
	RS: RS,
	RU: RU,
	RW: RW,
	SA: SA,
	SB: SB,
	SC: SC,
	SD: SD,
	SE: SE,
	SG: SG,
	SH: SH,
	SI: SI,
	SJ: SJ,
	SK: SK,
	SL: SL,
	SM: SM,
	SN: SN,
	SO: SO,
	SR: SR,
	SS: SS,
	ST: ST,
	SU: SU,
	SV: SV,
	SX: SX,
	SY: SY,
	SZ: SZ,
	TA: TA,
	TC: TC,
	TD: TD,
	TF: TF,
	TG: TG,
	TH: TH,
	TJ: TJ,
	TK: TK,
	TL: TL,
	TM: TM,
	TN: TN,
	TO: TO,
	TP: TP,
	TR: TR,
	TT: TT,
	TV: TV,
	TW: TW,
	TZ: TZ,
	UA: UA,
	UG: UG,
	UM: UM,
	US: US,
	UY: UY,
	UZ: UZ,
	VA: VA,
	VC: VC,
	VE: VE,
	VG: VG,
	VI: VI,
	VN: VN,
	VU: VU,
	WF: WF,
	WS: WS,
	XK: XK,
	YE: YE,
	YD: YD,
	YT: YT,
	YU: YU,
	ZA: ZA,
	ZM: ZM,
	ZR: ZR,
	ZW: ZW,
	ZZ: ZZ
};

declare const isCountryCode: (v: unknown) => boolean;
declare const findCountry: (v: string) => Country | undefined;
declare const findCountryCallingCode: (v: string) => number | undefined;
declare const findCountryLanguages: (v: string) => string[] | undefined;
declare const isCurrencyCode: (v: unknown) => boolean;
declare const findCurrency: (v: string) => Currency | undefined;
declare const findCountryCurrencyCode: (v: string) => string | undefined;
declare const isLanguageCode: (v: unknown) => boolean;
declare const findLanguage: (v: string) => Language | undefined;
declare const findCountryTimezones: (v: string) => Timezone[] | undefined;
declare const findTimezoneOffset: (v: string) => number | undefined;

export { countries, countryCallingCodes, countryCodes, countryCurrencies, countryLanguages, currencies, currencyCodes, findCountry, findCountryCallingCode, findCountryCurrencyCode, findCountryLanguages, findCountryTimezones, findCurrency, findLanguage, findTimezoneOffset, isCountryCode, isCurrencyCode, isLanguageCode, languageCodes, languages, timezones };
