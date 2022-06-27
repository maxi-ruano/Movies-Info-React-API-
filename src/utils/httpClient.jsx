
const API = "https://api.themoviedb.org/3"


export function get(path) {
 return   fetch(API + path ,{
        headers:{
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q4ZGI3ZDc2NzBmZTU1M2UyZDkzOTIyZDdkMGJjZSIsInN1YiI6IjYyYTc3OTE4NTU0MWZhMDA1MGNhOGM2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cqY-AGi-MLy7lyf-nWZnZY3E3zyb8UiAGzDqKr2WyzE",
           "Content-Type" : "application/json;charset=utf-8",
             
        },
        })
        .then((result) => result.json())
}