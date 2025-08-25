export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});
}