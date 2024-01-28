export type TenorSearch = {
    results: TenorGIF[]
    next: string
}

export type TenorGIF = {
    id: number,
    title: string,
    media_formats: TenorMediaFormats,
    created: TenorCreated,
    content_description: string,
    itemurl: string,
    url: string,
    tags: string[],
    flags: string[],
    hasaudio: boolean
}

export type TenorMediaFormats = {
    mp4: TenorMediaFormat,
    gifpreview: TenorMediaFormat,
    tinymp4: TenorMediaFormat,
    loopedmp4: TenorMediaFormat,
    nanowebm: TenorMediaFormat,
    tinywebm: TenorMediaFormat,
    tinygif: TenorMediaFormat,
    webm: TenorMediaFormat,
    nanogifpreview: TenorMediaFormat,
    tinygifpreview: TenorMediaFormat,
    nanomp4: TenorMediaFormat,
    nanogif: TenorMediaFormat,
    mediumgif: TenorMediaFormat,
    gif: TenorMediaFormat,
}

export type TenorCreated = {
    value: string
    type: string
}

export type TenorMediaFormat={
    url: string,
    duration: number,
    preview: string,
    dims: number[],
    size: number
}
