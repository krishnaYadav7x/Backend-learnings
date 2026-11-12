export async function readStream() {
  try {
    const response = await fetch(`http://localhost:1000/`);
    const decoder = new TextDecoder();
    for await (const chunk of response.body) {
      return decoder.decode(chunk);
    }
  } catch (err) {
    console.log(err);
  }
}
