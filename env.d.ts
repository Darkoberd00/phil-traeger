/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_NONE_SHOW_REPOS: string[]
    readonly VITE_NAME: string
    readonly VITE_BIRTHDAY: string
    readonly VITE_GITHUB_USER: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}