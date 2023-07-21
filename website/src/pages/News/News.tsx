import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAppInstance } from "../../utils/firebase/Firebase";

// Fonction utilitaire pour récupérer les nouvelles depuis Firestore
async function getNewsList(db) {
  const newsCol = collection(db, "news");
  const newsSnapshot = await getDocs(newsCol);
  const newsList = newsSnapshot.docs.map((doc) => doc.data());
  return newsList;
}

const News: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const [news, setNews] = useState<any | null>(null);

  useEffect(() => {
    // Créer une fonction asynchrone pour initialiser Firestore
    async function initializeFirestore() {
      const app = await getAppInstance();
      const db = getFirestore(app);
      return db;
    }

    // Récupérer les nouvelles depuis Firestore et mettre à jour l'état
    async function fetchNews() {
      const db = await initializeFirestore();
      const newsList = await getNewsList(db);
      const selectedNews = newsList.find((newsItem) => newsItem.id === id);
      setNews(selectedNews);
    }

    fetchNews();
  }, [id]);

  if (!news) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <>
      <div>
        <img src={news.imageUrl} alt={news.title} />
        <div>{news.title}</div>
        <div>{news.content}</div>
      </div>
    </>
  );
};

export default News;
