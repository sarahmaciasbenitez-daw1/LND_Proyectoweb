const feeds = [
    "https://feeds.bbci.co.uk/news/technology/rss.xml",
    "https://www.theverge.com/rss/index.xml",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCBJycsmduvYEL83R_U4JriQ",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCY1kMZp36IQSyNx_9h4mpCg"  
];

const container = document.getElementById("rss-feed");
container.innerHTML = "<p>Cargando noticias...</p>";

Promise.all(
    feeds.map(feed =>
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`)
            .then(res => res.json())
    )
)
.then(results => {
    container.innerHTML = "";

    let allItems = [];

    results.forEach(data => {
        if (data.items) {
            allItems = allItems.concat(data.items);
        }
    });


    allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    allItems.slice(0, 8).forEach(item => {
        const article = document.createElement("article");
        article.classList.add("rss-card");

        article.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.pubDate ? item.pubDate.substring(0,10) : ""}</p>
            <a href="${item.link}" target="_blank">
                Ver publicación
            </a>
        `;

        container.appendChild(article);
    });
})
.catch(error => {
    container.innerHTML = "<p>Error cargando noticias.</p>";
});


