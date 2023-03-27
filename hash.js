// 1. 같은 장르끼리 묶어야한다.
// 2. 묶인 노래들을 재생 순으로 정렬을 해야한다.
// 3. 노래를 2개까지 자르는 작업을 해야한다.

// 핵심 키워드는 "묶는 것", "정렬"

function solution(genres, palys) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, palys[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}

// {
//   classic: {
//     total: 3000;
//     songs: [
//       { play: 30, index: 1 },
//       { play: 40, index: 2 },
//     ];
//   }
// }
