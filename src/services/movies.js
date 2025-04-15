import.meta.env.MODE;

const API_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TOKEN;

export async function getAllMovies() {
  try {
    const response = await fetch(`${API_URL}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetailById(id) {
  try {
    const response = await fetch(`${API_URL}/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieBySearch(elect) {
  try {
    const response = await fetch(`${API_URL}/search/movie?query=${elect}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
