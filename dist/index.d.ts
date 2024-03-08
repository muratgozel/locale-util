interface Language {
    code: string;
    nativeName: string | undefined;
    englishName: string | undefined;
}
interface Currency {
    code: string;
    num: string;
    nativeName?: string | undefined;
    englishName: string | undefined;
}
interface Country {
    code: string;
    nativeName?: string | undefined;
    englishName: string;
}
interface Timezone {
    name: string;
    offset: number;
    country: string;
}

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

declare const countryCodes: string[];
declare const countries: Country[];
declare const countryCallingCodes: {
    AC: number;
    AD: number;
    AE: number;
    AF: number;
    AG: number;
    AI: number;
    AL: number;
    AM: number;
    AO: number;
    AR: number;
    AS: number;
    AT: number;
    AU: number;
    AW: number;
    AX: number;
    AZ: number;
    BA: number;
    BB: number;
    BD: number;
    BE: number;
    BF: number;
    BG: number;
    BH: number;
    BI: number;
    BJ: number;
    BL: number;
    BM: number;
    BN: number;
    BO: number;
    BQ: number;
    BR: number;
    BS: number;
    BT: number;
    BW: number;
    BY: number;
    BZ: number;
    CA: number;
    CC: number;
    CD: number;
    CF: number;
    CG: number;
    CH: number;
    CI: number;
    CK: number;
    CL: number;
    CM: number;
    CN: number;
    CO: number;
    CR: number;
    CU: number;
    CV: number;
    CW: number;
    CX: number;
    CY: number;
    CZ: number;
    DE: number;
    DJ: number;
    DK: number;
    DM: number;
    DO: number;
    DZ: number;
    EC: number;
    EE: number;
    EG: number;
    EH: number;
    ER: number;
    ES: number;
    ET: number;
    FI: number;
    FJ: number;
    FK: number;
    FM: number;
    FO: number;
    FR: number;
    GA: number;
    GB: number;
    GD: number;
    GE: number;
    GF: number;
    GG: number;
    GH: number;
    GI: number;
    GL: number;
    GM: number;
    GN: number;
    GP: number;
    GQ: number;
    GR: number;
    GT: number;
    GU: number;
    GW: number;
    GY: number;
    HK: number;
    HN: number;
    HR: number;
    HT: number;
    HU: number;
    ID: number;
    IE: number;
    IL: number;
    IM: number;
    IN: number;
    IO: number;
    IQ: number;
    IR: number;
    IS: number;
    IT: number;
    JE: number;
    JM: number;
    JO: number;
    JP: number;
    KE: number;
    KG: number;
    KH: number;
    KI: number;
    KM: number;
    KN: number;
    KP: number;
    KR: number;
    KW: number;
    KY: number;
    KZ: number;
    LA: number;
    LB: number;
    LC: number;
    LI: number;
    LK: number;
    LR: number;
    LS: number;
    LT: number;
    LU: number;
    LV: number;
    LY: number;
    MA: number;
    MC: number;
    MD: number;
    ME: number;
    MF: number;
    MG: number;
    MH: number;
    MK: number;
    ML: number;
    MM: number;
    MN: number;
    MO: number;
    MP: number;
    MQ: number;
    MR: number;
    MS: number;
    MT: number;
    MU: number;
    MV: number;
    MW: number;
    MX: number;
    MY: number;
    MZ: number;
    NA: number;
    NC: number;
    NE: number;
    NF: number;
    NG: number;
    NI: number;
    NL: number;
    NO: number;
    NP: number;
    NR: number;
    NU: number;
    NZ: number;
    OM: number;
    PA: number;
    PE: number;
    PF: number;
    PG: number;
    PH: number;
    PK: number;
    PL: number;
    PM: number;
    PR: number;
    PS: number;
    PT: number;
    PW: number;
    PY: number;
    QA: number;
    RE: number;
    RO: number;
    RS: number;
    RU: number;
    RW: number;
    SA: number;
    SB: number;
    SC: number;
    SD: number;
    SE: number;
    SG: number;
    SH: number;
    SI: number;
    SJ: number;
    SK: number;
    SL: number;
    SM: number;
    SN: number;
    SO: number;
    SR: number;
    SS: number;
    ST: number;
    SV: number;
    SX: number;
    SY: number;
    SZ: number;
    TA: number;
    TC: number;
    TD: number;
    TG: number;
    TH: number;
    TJ: number;
    TK: number;
    TL: number;
    TM: number;
    TN: number;
    TO: number;
    TR: number;
    TT: number;
    TV: number;
    TW: number;
    TZ: number;
    UA: number;
    UG: number;
    US: number;
    UY: number;
    UZ: number;
    VA: number;
    VC: number;
    VE: number;
    VG: number;
    VI: number;
    VN: number;
    VU: number;
    WF: number;
    WS: number;
    XK: number;
    YE: number;
    YT: number;
    ZA: number;
    ZM: number;
    ZW: number;
};
declare const countryLanguages: {
    AD: string[];
    AE: string[];
    AF: string[];
    AG: string[];
    AI: string[];
    AL: string[];
    AM: string[];
    AO: string[];
    AR: string[];
    AS: string[];
    AT: string[];
    AU: string[];
    AW: string[];
    AX: string[];
    AZ: string[];
    BA: string[];
    BB: string[];
    BD: string[];
    BE: string[];
    BF: string[];
    BG: string[];
    BH: string[];
    BI: string[];
    BJ: string[];
    BL: string[];
    BM: string[];
    BN: string[];
    BO: string[];
    BQ: string[];
    BR: string[];
    BS: string[];
    BT: string[];
    BW: string[];
    BY: string[];
    BZ: string[];
    CA: string[];
    CC: string[];
    CD: string[];
    CF: string[];
    CG: string[];
    CH: string[];
    CI: string[];
    CK: string[];
    CL: string[];
    CM: string[];
    CN: string[];
    CO: string[];
    CR: string[];
    CU: string[];
    CV: string[];
    CW: string[];
    CX: string[];
    CY: string[];
    CZ: string[];
    DE: string[];
    DG: string[];
    DJ: string[];
    DK: string[];
    DM: string[];
    DO: string[];
    DZ: string[];
    EA: string[];
    EC: string[];
    EE: string[];
    EG: string[];
    EH: string[];
    ER: string[];
    ES: string[];
    ET: string[];
    FI: string[];
    FJ: string[];
    FK: string[];
    FM: string[];
    FO: string[];
    FR: string[];
    GA: string[];
    GB: string[];
    GD: string[];
    GE: string[];
    GF: string[];
    GG: string[];
    GH: string[];
    GI: string[];
    GL: string[];
    GM: string[];
    GN: string[];
    GP: string[];
    GQ: string[];
    GR: string[];
    GT: string[];
    GU: string[];
    GW: string[];
    GY: string[];
    HK: string[];
    HN: string[];
    HR: string[];
    HT: string[];
    HU: string[];
    IC: string[];
    ID: string[];
    IE: string[];
    IL: string[];
    IM: string[];
    IN: string[];
    IO: string[];
    IQ: string[];
    IR: string[];
    IS: string[];
    IT: string[];
    JE: string[];
    JM: string[];
    JO: string[];
    JP: string[];
    KE: string[];
    KG: string[];
    KH: string[];
    KI: string[];
    KM: string[];
    KN: string[];
    KP: string[];
    KR: string[];
    KW: string[];
    KY: string[];
    KZ: string[];
    LA: string[];
    LB: string[];
    LC: string[];
    LI: string[];
    LK: string[];
    LR: string[];
    LS: string[];
    LT: string[];
    LU: string[];
    LV: string[];
    LY: string[];
    MA: string[];
    MC: string[];
    MD: string[];
    ME: never[];
    MF: string[];
    MG: string[];
    MH: string[];
    MK: string[];
    ML: string[];
    MM: string[];
    MN: string[];
    MO: string[];
    MP: string[];
    MQ: string[];
    MR: string[];
    MS: string[];
    MT: string[];
    MU: string[];
    MV: string[];
    MW: string[];
    MX: string[];
    MY: string[];
    MZ: string[];
    NA: string[];
    NC: string[];
    NE: string[];
    NF: string[];
    NG: string[];
    NI: string[];
    NL: string[];
    NO: string[];
    NP: string[];
    NR: string[];
    NU: string[];
    NZ: string[];
    OM: string[];
    PA: string[];
    PE: string[];
    PF: string[];
    PG: string[];
    PH: string[];
    PK: string[];
    PL: string[];
    PM: string[];
    PN: string[];
    PR: string[];
    PS: string[];
    PT: string[];
    PW: string[];
    PY: string[];
    QA: string[];
    RE: string[];
    RO: string[];
    RS: string[];
    RU: string[];
    RW: string[];
    SA: string[];
    SB: string[];
    SC: string[];
    SD: string[];
    SE: string[];
    SG: string[];
    SH: string[];
    SI: string[];
    SJ: never[];
    SK: string[];
    SL: string[];
    SM: string[];
    SN: string[];
    SO: string[];
    SR: string[];
    SS: string[];
    ST: string[];
    SV: string[];
    SX: string[];
    SY: string[];
    SZ: string[];
    TC: string[];
    TD: string[];
    TG: string[];
    TH: string[];
    TJ: string[];
    TK: string[];
    TL: string[];
    TM: string[];
    TN: string[];
    TO: string[];
    TR: string[];
    TT: string[];
    TV: string[];
    TW: never[];
    TZ: string[];
    UA: string[];
    UG: string[];
    UM: string[];
    US: string[];
    UY: string[];
    UZ: string[];
    VA: string[];
    VC: string[];
    VE: string[];
    VG: string[];
    VI: string[];
    VN: string[];
    VU: string[];
    WF: string[];
    WS: string[];
    XK: string[];
    YE: string[];
    YT: string[];
    ZA: string[];
    ZM: string[];
    ZW: string[];
};
declare const currencyCodes: string[];
declare const currencies: Currency[];

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
