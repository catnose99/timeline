export function getHostFromURL(str: string) {
  const url = new URL(str);
  return url.hostname;
}
