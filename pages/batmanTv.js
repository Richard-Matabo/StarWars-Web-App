import Link from 'next/link'


const batmanTv = (props) => (
  <><h1>Batman TV Shows</h1>
    <p>Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, 
      and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.</p>
  
  <ul>
  {props.shows.map(({ show }) => (
    <li key={show.id}>
      <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
        <a>{show.name}</a>
      </Link>
    </li>
  ))}
</ul></>
)

batmanTv.getInitialProps = async function() {
const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
const data = await res.json()

console.log(`Show data fetched. Count: ${data.length}`)

return {
  shows: data
}
}


export default batmanTv;