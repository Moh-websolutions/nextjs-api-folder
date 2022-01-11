import NewsItem from "../../components/NewsItem";

export default function news({news}){
     return (
        <>
        <h1>News</h1>
        <ul>
            {news.length === 0 && <h3>No News</h3>}

            {
                news.map((item) => (
                <NewsItem key={item.id} news={item} />
            ))}
            
        </ul>
        </>
    )
}


export async function getStaticProps(){
    const res = await fetch('http://localhost:3000/api/news');
    const news = await res.json();
    return {
        props: {news: news.slice(0, 4) },
        revalidate: 1
    }
}