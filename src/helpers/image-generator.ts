export async function generateImage() {
  const response = await fetch(`https://random.imagecdn.app/v1/image`);
  return response.url;
}