export default function appendToEachArrayValue(array, appendString) {
  const news = [];
  for (const value of array) {
    news.push(appendString + value);
  }
  return news;
}
