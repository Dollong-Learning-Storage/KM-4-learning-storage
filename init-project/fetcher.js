const baseAPI = "https://643e4ae1c72fda4a0bf23b34.mockapi.io";

// reference: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export async function getAPI(input) {
  try {
    const response = await fetch(`${baseAPI}/${input}`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error, "error");
  }
}

export async function postAPI(input) {
  try {
    const response = await fetch(`${baseAPI}/${input}`, {
      method: "POST",
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error, "error");
  }
}
