import Router from "next/router"
export default function Singlenews({news}){

    return (
        <>
        <h1>News</h1>
        <ul>
            <li>
                {news.title}
            </li>
        </ul>
        </>
    )
}

export async function getServerSideProps({ query: { slug } }){
    const res = await fetch(`http://localhost:3000/api/news/${slug}`);
    const singlenews = await res.json();
    return {
        props: {news: singlenews[0]},
       
    }
}