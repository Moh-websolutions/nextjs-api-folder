import Image from "next/image"

export default function NewsItem({news}){
    return (
       <>
         <ul>
            <li>
                {news.title}
                
                <Image 
                src={news.image ? news.image : "/vercel.svg"} 
                width={100} 
                height={100} 
                />
                <a href={`/news/${news.slug}`}>Read more</a>
                <hr/>
            </li>
        </ul>
       </>
   )
}