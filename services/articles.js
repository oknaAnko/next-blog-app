import {getFileBySlug, getList} from 'lib/markdownParser';

export const getListOfArticles = () => {
    const articles = getList('_articles');

    return articles.sort((a,b)=> a.createdAt - b.createdAt).reverse();
}

export const getArticle = async(slug) => {
    const article = await getFileBySlug('_articles', slug);

    return article;
}