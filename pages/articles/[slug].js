import Layout from 'components/Layout';
import Head from 'next/head';
import { getFileBySlug, getList } from 'lib/markdownParser';

export async function getStaticPaths() {
  const articles = getList('_articles');
  console.log(articles);
  return {
    paths: articles.map((article) => ({ params: { slug: article.slug } })),
    fallback: false
  };
}

export const getStaticProps = async (req) => {
  const { slug } = req.params;
  const article = await getFileBySlug('_articles', slug);
  return {
    props: { article }
  };
};

export default function Article({ article }) {
  return (
    <Layout>
      <Head>{article.title}</Head>
      <link href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css" rel="stylesheet" />
      <div>
        <h1 className="text-center text-3xl mb-10">{article.title}</h1>
        <div
          className="max-w-3xl mx-auto articleBody"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </Layout>
  );
}
