// Set the _url cookie to the current URL
document.cookie = "_url=" + window.location.href;

// Check if the _url cookie matches any of the restricted URLs
var restrictedUrls = [
    "https://breakout-x.github.io/web-breakout/dev-stuff/",
    "https://breakout-x.github.io/web-breakout/403-test/",
    "https://breakout-x.github.io/web-breakout/dev-projects/"
];
if (restrictedUrls.includes(document.cookie.replace("_url=", ""))) {
    // If it does, redirect to the restricted-access page
    window.location.href = "https://breakout-x.github.io/web-breakout/restricted-access/";
}
