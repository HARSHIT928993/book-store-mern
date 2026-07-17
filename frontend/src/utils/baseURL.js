const getBaseUrl = () => {
    return "https://book-store-mern-a8yp.onrender.com";
}

export default getBaseUrl;

function getImgUrl(name) {
    return new URL(`../assets/books/${name}`, import.meta.url);
}

export { getImgUrl };