export async function fetchData(key: string, url: string): Promise<object[]> {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const data = await response.json();
    // sessionStorage.setItem(key, JSON.stringify(data));
    return data;
  }
}
