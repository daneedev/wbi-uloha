const articleTitle = document.querySelector('.news-title');
const articleDate = document.querySelector('.news-date');
const articleAuthor = document.querySelector('.news-author');
const articleReadTime = document.querySelector('.news-readtime');
const articleTags = document.querySelector('.news-tags');
const articleText = document.querySelector('.news-text');

document.addEventListener('DOMContentLoaded', async function() {
    const articles = await fetch("./data/articles.json")
        .then(response => response.json())
        .catch(error => {
            console.error("Error fetching articles:", error);
            return [];
        });
    for (let article of articles) {
        const articleElement = document.createElement('a');
        articleElement.href = `./article.html?id=${article.id}`;
        articleElement.classList.add("news")
        articleElement.innerHTML = `
                <img src="./assets/img/news.jpg" alt="News Image" class="news-image">
                <section class="news-content">
                    <section class="news-tags">
        `;
        let tagsHTML = '';
        for (let i = 0; i < article.tags.length; i++) {
            tagsHTML += `<div class="news-tag">${article.tags[i]}</div>`;
        }
        articleElement.innerHTML = `
            <img src="./assets/img/news.jpg" alt="News Image" class="news-image">
            <section class="news-content">
            <section class="news-tags">
                ${tagsHTML}
            </section>
            <p class="news-title">${article.title}</p>
            <p class="news-text">${article.shorttext}</p>
            <section class="news-footer">
                <p class="news-author">${article.author}</p>
                <div class="news-details">
                <p class="news-date">${article.date}</p>
                &#9679;
                <p class="news-readtime">${article.readtime}</p>
                </div>
            </section>
            </section>
        `;
        document.querySelector('#grid-content').appendChild(articleElement);
    }
});