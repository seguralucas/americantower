
export const normalizeUrl = function (url): string {
    console.log(url)
    let newUrl: string = url.split("?")[0]
    if (newUrl.slice(-1) != "/")
        newUrl = newUrl + "/"
    return newUrl
}
