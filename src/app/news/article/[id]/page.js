import React from "react";
import axios from "axios";

import './index.css'

const Article = async ({ params }) => {
  // const { id } = useParams()
  const { props } = await getArticle(params.id)

  return (
    <div className="main__content">
        <div className="content__header">
          <div className="header-bg"></div>
          <div className="tag">NEWS</div>
          <h1>{props.article.title}</h1>
        </div>
        <div className="content__image">
          <img src={`${props.article.large}`} width="1440" height="810"/>
        </div>
        <div className="content__body">
          <p>{props.article.content}</p>
        </div>
    </div>
  )
};

export default Article;

async function getArticle(id) {
    const res = await axios.get(`https://strapi-demo-p4qt.onrender.com/api/articles/${id}?populate=*`);
    const content = res.data.data.attributes;

    return {
      props: {
        article: {
          title: content.title,
          content: content.content,
          large: content.cover.data[0].attributes.url
        }
      }
    }
}