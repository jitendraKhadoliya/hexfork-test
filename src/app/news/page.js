import React from "react";
import axios from "axios";
import Link from "next/link"
import "./page.css"

async function getArticles() {
  const res = await axios.get('https://strapi-demo-p4qt.onrender.com/api/articles?populate=*');

  return res.data.data;
}

export default async function Home() {
  const articles = await getArticles();
  
  return (
    <div className="grid container__grid m-auto md:grid-cols-2 w-full">
      {articles.slice(0).reverse().map((item) => (
        <Link key={item.id} href={`news/article/${item.id}`}>
          <div className="w-full grid__item">
            <div className="item">
              <div className="item__image">
                <img src={`${item.attributes.cover.data[0].attributes.url}`} width="600" height="337"/>
                <div className="image__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </div>
              </div>
              <div className="item__content">
                <div className="tag">NEWS</div>
                <h1 className="text-3xl">{item.attributes.title}</h1>
                <p>{item.attributes.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}



