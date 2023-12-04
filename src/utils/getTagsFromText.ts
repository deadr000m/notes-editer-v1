export function getTagsFromText(text: string) {
  return text.match(/#\w+/g)?.map((item) => item.slice(1));
}

console.log(getTagsFromText('I wanna go to #sport #school'));
