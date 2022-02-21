import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid justify-content-center">
          <Link href="/">
            <a className="navbar-brand mx-4">Accueil</a>
          </Link>
          <Link href="/blog">
            <a className="navbar-brand mx-4">Blog</a>
          </Link>
          <Link href="/users">
            <a className="navbar-brand mx-4">Utilisateurs</a>
          </Link>
        </div>
      </nav>
      
    </>
  );
}
