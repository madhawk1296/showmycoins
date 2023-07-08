export default function getUri(symbolLogo: any): string | null{
    return symbolLogo ? symbolLogo[0].URI : null
}