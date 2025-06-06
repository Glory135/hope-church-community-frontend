export const shortenText = (text: string, by: number) => {
  if (text?.length > by) {
      return `${text.slice(0, by)}...`;
  }
  return text;
}
