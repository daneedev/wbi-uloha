const articleTitle = document.querySelector('.article-title');
const articleDate = document.querySelector('.article-date');
const articleAuthor = document.querySelector('.article-author');
const articleReadTime = document.querySelector('.article-reading-time');
const articleTags = document.querySelector('.article-tags');
const articleText = document.querySelector('.article-text');

document.addEventListener('DOMContentLoaded', async function() {
    const articles = await fetch("./data/articles.json")
        .then(response => response.json())
        .catch(error => {
            console.error("Error fetching articles:", error);
            return [];
        });

    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get("id")
    const article = articles.find(a => a.id === articleId);
    console.log(article.readtime)

    articleTitle.textContent = article.title;
    articleDate.innerHTML = `<i class="fa-solid fa-calendar"></i> ${article.date}`;
    articleAuthor.innerHTML = `<i class="fa-solid fa-user"></i> ${article.author}`;
    articleReadTime.innerHTML = `<i class="fa-solid fa-clock"></i> ${article.readtime}`;
    articleTags.innerHTML = `<i class="fa-solid fa-tags"></i> ${article.tags.join(', ')}`;
    articleText.innerHTML = article.content;

});