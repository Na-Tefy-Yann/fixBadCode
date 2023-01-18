import React, { useEffect, useState } from "react";
import Card from "../components/Card.js";
import { getPostsService } from "../service/service.Post.js";

export default function Page() {
    const [cards, setCards] = useState([]);

    async function fetchData(){
        var newData =await getPostsService();
        setCards(newData);
    }
  
    useEffect(() => {
      (async () => {
        fetchData();
        return () => {};
      })();
    }, []);
  
    function analyticsTrackClick(url) {
      // sending clicked link url to analytics
      console.log(url);
    }
  
    return (
      <div>
        {cards.map(function (item) {
          return (
            <Card
              title={item.title.en}
              linkTitle={item.link_title}
              href={item.link}
              text={item.text}
              linkClassName={item.id === 1 ? "card__link--red" : ""}
              target={item.id === 1 ? "_blank" : ""}
              onClick={analyticsTrackClick(item.link)}
            />
          );
        })}
      </div>
    );
  }
  