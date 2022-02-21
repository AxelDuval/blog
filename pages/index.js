import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 pt-5">
      <h1>Bienvenue sur le blog</h1>
      <span>Un blog créé dans le cadre de l'apprentissage de Next.js</span>
      <div className="row mt-5">
        <div className="col-12 col-sm-6">
          <div className="card w-100 h-100" style={{minHeight: "200px"}}>
            <div className="card-body">
              <h5 className="card-title">Lisez les articles</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Enrichissez votre culture web
              </h6>
              <p className="card-text">
                Chaque auteur tente de vous apporter le plus de valeur possible
                par cet article
              </p>
              <Link href="/blog">
                <a>Visitez le blog</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="card w-100 h-100" style={{minHeight: "200px"}}>
            <div className="card-body">
              <h5 className="card-title">Liste de membres</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Rencontrez des devs
              </h6>
              <p className="card-text">
                Ajoutez, invitez et discutez avec différents membres
              </p>
              <Link href="/users">
                <a>Voir la liste de membres</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
