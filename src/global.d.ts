declare global {
    namespace NodeJS {
        interface ProcessEnv {
            npm_package_config_phonenumber_metadata_endpoint: string
            npm_package_config_cldr_supplement_filepath: string
            npm_package_config_cldr_main_path: string
            npm_package_config_data_path: string
        }
    }
}

export {}
