import Link from 'next/link'
import Image from 'next/image';
import fetch from 'isomorphic-unfetch'


const Index = (props) => (
    <><h1>Batman TV Shows</h1><ul>
    {props.shows.map(({ show }) => (
      <li key={show.id}>
        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
          <a>{show.name}</a>
        </Link>
      </li>
    ))}
  </ul></>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}


export default function Home() {
  return (
        <>
      <main>
            <div class="contain">
                  <Image src="/communication-study4.1.png" width={1400}  height={450} />
                <div class="block">
                  <h1>The Satar Wars</h1>
                    <p class="text">The official site for Star Wars, featuring the latest news on Star Wars movies, series, <br />video games, books, and more</p>
                    <h2>STAR WARS MOVIES | STARWARS.COM</h2>
                    <p>It is a long investment that we offer for a long term service.</p>
                </div>
            </div>
            <div className="bar">
              <Link href="/StarWar">
                <span><a>The Star War API</a></span>
              </Link>   
              <Link href="batmanTv">
                <span><a>Batman TV Shows</a></span>
              </Link>
            </div>
            <div class="branche1"> 
                <h4>Let us get you there</h4>
            </div>

      </main></>

        );
        }


  
