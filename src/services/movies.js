const API_URL = "https://api.themoviedb.org/3/movie";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjVmNTM5YzU3YWQwMmZlYzc3MmJlYjJhOTY3Mjg5MiIsIm5iZiI6MTc0MTkwNDQ2Ni42NTYsInN1YiI6IjY3ZDM1YTUyNjJlN2QyMzM2MzUzYTRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b4LlJs7fpBhMWdo_9gXutUxIuVoQoGYd1KtF3oXe_UE";

export async function getAllMovies() {
  try {
    const response = await fetch(`${API_URL}/popular`, {
      headers: {
        Authorization: `${TOKEN}`,
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
        Authorization: `${TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// export async function getLaunchByFlightNumber(flightNumber) {
//   try {
//     const response = await fetch(`${API_URL}/launches/${flightNumber}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }
