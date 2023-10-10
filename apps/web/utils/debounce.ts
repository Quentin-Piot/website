export default function debounce(limit: number, callback: any) {
  let timeoutId: NodeJS.Timeout
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(callback, limit, args)
  }
}
