document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
    var siteName = document.getElementById("siteName").value;
    var siteURL = document.getElementById("siteURL").value;

    if (!siteName || !siteURL) {
        alert("Please Fill");
        return false;
    }

    var bookmark = {
        name: siteName,
        url: siteURL
    };

    if (localStorage.getItem("bookmarks") === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    localStorage.setItem()
    e.preventDefault();
}

function deleteBookmark(url) {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();
}

function fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    var bookmarksResults = document.getElementById("bookmarksResults");
    bookmarksResults.innerHTML = "";
    for (let i = 0; i < bookmarks.length; i++) {
        let name = bookmarks[i].name;
        let url = bookmarks[i].url;
        bookmarksResults.innerHTML += `
            <div class="well">
                <h3> ${name} </h3>
                <a class="btn btn-default" target="_blank" href=${url}>Visit</a>
                <a class="btn btn-danger" onclick=deleteBookmark("${url}")>Delete</a>
            </div>
        `;
    }
}