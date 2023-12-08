export const deleteSpanTags = (str: string) => {
  let arr: string[] = str.split(/<span\b[^>]*>(.*?)<\/span>/g);
  return (str = arr.join(''));
};
