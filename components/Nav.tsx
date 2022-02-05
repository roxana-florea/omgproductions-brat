import Link from "next/link";
import Image from "next/image";


export default function Nav() {

    return <nav>
        <Image src='/logo' width='100' height='100' alt='logo'/>
            <Link href="/">Home</Link>
            <Link href="/photography">Photography</Link>
            <Link href="/film">Film</Link>
            <Link href="/contact">Contact</Link>
        <button>burger btn</button>
    </nav>
}