import {TenorSearch} from "~/server/model/tenor";
import {info} from "autoprefixer";

export default defineEventHandler(async (event) => {
    const search: string = getQuery(event).search?.toString() || "404"
    let tenor = await fetch("https://tenor.googleapis.com/v2/search?q="
        + encodeURIComponent(search)
        + "&key=" + process.env.TENOR_API_KEY + "&limit=1")
    let infos: TenorSearch = await tenor.json()
    return infos.results[0].media_formats.gif.url.replace("https://media.tenor.com", "")
})
