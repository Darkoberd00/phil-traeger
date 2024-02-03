import { TenorSearch } from '~/types/tenor'
const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const search: string = getQuery(event).search?.toString() || '404'
  const tenor = await fetch(
    'https://tenor.googleapis.com/v2/search?q=' +
      encodeURIComponent(search) +
      '&key=' +
      runtimeConfig.private.TENOR_API_KEY +
      '&limit=1'
  )
  const infos: TenorSearch = await tenor.json()
  return infos.results[0].media_formats.gif.url.replace('https://media.tenor.com', '')
})
