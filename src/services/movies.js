import.meta.env.MODE;

const API_URL = "https://api.themoviedb.org/3/movie";
const TOKEN = import.meta.env.TOKEN;

export async function getAllMovies() {
  try {
    const response = await fetch(`${API_URL}/popular`, {
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
    const response = await fetch(`${API_URL}/${id}`, {
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
