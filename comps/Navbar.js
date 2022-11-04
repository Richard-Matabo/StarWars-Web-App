import Link from 'next/link'

const Navbar = () => {      
    return ( 
      <><nav>
         <div className='void'>STAR WARS</div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/StarWar"><a>Star Wars</a></Link>
        <Link href="/batmanTv"><a>Batman TV Shows</a></Link>      
      </nav>

      </>
        
     );
}
 
export default Navbar;