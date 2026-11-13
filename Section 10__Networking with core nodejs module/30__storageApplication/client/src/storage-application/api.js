export async function apiData() {
  try {
    const response = await fetch("http://10.253.238.185:1000/");
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
