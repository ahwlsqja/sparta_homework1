const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
};
const searchInput = document.getElementById('search-input');

// 검색어 입력 시 이벤트 처리
searchInput.addEventListener('input', function () {
    // 입력된 검색어
    const searchTerm = searchInput.value.toLowerCase();

    // 각 영화 카드에 대한 루프
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.description-container p').textContent.toLowerCase();

        // 검색어와 영화 제목 또는 설명이 일치하는 경우 보여줌
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'grid';
        } else {
            card.style.display = 'none';
        }
    });
});
const movieContainer = document.getElementById('movie-container');

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
        // 데이터에서 영화 목록 가져오기
        const movies = data.results;

        // 각 영화에 대해 카드 생성 및 표시
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('movie-card');

            card.dataset.movieId = movie.id;

            const title = document.createElement('h3');
            title.textContent = movie.title;

            const image = document.createElement('img');
            image.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            image.alt = movie.title;
            
            const rating = document.createElement('p');
            rating.textContent = `Rating: ${movie.vote_average}`;

            const description = document.createElement('p');
            description.textContent = movie.overview;
            
             // 클릭 이벤트를 추가하여 영화 ID를 출력하는 함수 호출
            image.addEventListener('click', function () {
                showMovieDetails(card.dataset.movieId);
            });

            card.appendChild(title);
            card.appendChild(image);
            card.appendChild(rating);

            // 설명을 오른쪽에 추가
            const descriptionContainer = document.createElement('div');
            descriptionContainer.classList.add('description-container');
            descriptionContainer.appendChild(description);
            card.appendChild(descriptionContainer);

            movieContainer.appendChild(card);
        });
    });
    // 페이지 로드 후 초기 설정
    document.addEventListener('DOMContentLoaded', function () {
        hidePopularMovies();
    });

    function showPopularMovies() {
        // Popular Movies 영역을 보여주는 코드 추가
        var popularMoviesSection = document.querySelector('.popular');
        popularMoviesSection.style.display = 'block';
        // 섹션 숨기기
        var homeSection = document.querySelector('.home');
        homeSection.style.display = 'none';
    }

    function hidePopularMovies() {
        // Popular Movies 영역을 숨기기
        var popularMoviesSection = document.querySelector('.popular');
        popularMoviesSection.style.display = 'none';
    }

    function showPopulars() {
        // Populars 클릭 시 Popular Movies 영역을 보여주도록 설정
        showPopularMovies();
    }

    function showHome() {
        // Home 클릭 시 Home 섹션을 보여주도록 설정
        var homeSection = document.querySelector('.home');
        homeSection.style.display = 'block';

        // 다른 섹션 숨기기 등 추가 설정 가능
        // 예: 다른 섹션들은 숨기기
        var popularMoviesSection = document.querySelector('.popular');
        popularMoviesSection.style.display = 'none';
    }

function showMovieDetails(movieId) {
    // 클릭한 카드의 id를 콘솔에 출력합니다.
    console.log('Clicked Movie Id:', movieId);

    // 이 부분에 클릭한 영화 ID를 이용하여 원하는 동작을 추가할 수 있습니다.
    // 예: 클릭한 영화의 상세 정보를 가져와 표시하는 등의 동작을 수행할 수 있습니다.

    // 여기에 원하는 동작을 추가하세요.
    // 예를 들어, 특정 URL로 이동하거나 모달창을 띄우는 등의 동작이 가능합니다.
    alert('Clicked Movie ID: ' + movieId);
}
function showSaveButton(container) {
    const saveButton = container.querySelector('.save-btn');
    saveButton.style.display = 'block';
}

function hideSaveButton(container) {
    const saveButton = container.querySelector('.save-btn');
    saveButton.style.display = 'none';
}

function saveMovie(movieId) {
    // 원하는 동작을 수행하도록 추가 작업 수행
    console.log('Save Movie ID:', movieId);
}
// 검색어 입력란에서 엔터 키 입력 처리
function searchKeyPress(event) {
    if (event.key === 'Enter') {
        searchMovies();
    }
}

// 검색 버튼 클릭 또는 엔터 키 입력 시 호출되는 함수
function searchMovies() {
    const searchTerm = document.getElementById('search-input').value;

    // 검색어가 비어 있지 않은 경우에만 영화 검색 요청
    if (searchTerm.trim() !== '') {
        // TODO: 검색어를 이용하여 영화 검색 요청하는 코드 추가
        console.log('Search Term:', searchTerm);
        // 여기에 검색 기능을 추가할 수 있습니다.
        // 예: TMDB API 호출 및 검색 결과 표시 등
    }
}
