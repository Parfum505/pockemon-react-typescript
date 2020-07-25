const getUrlParams = (url: string) => {
  const newUrl = new URL(url);
  const params = new URLSearchParams(newUrl.search);
  const limitParam = params.get("limit");
  const offsetParam = params.get("offset");
  const limit = limitParam ? parseInt(limitParam) : 0;
  const offset = offsetParam ? parseInt(offsetParam) : 0;

  return { limit, offset };
};
export const getCurrentPage = (url: string): number => {
    const { limit, offset } = getUrlParams(url);
    return (offset/limit) + 1;
}
export const getLastPage = (url: string, count: number): number => {
    const { limit } = getUrlParams(url);
    return Math.ceil(count/limit);
}
