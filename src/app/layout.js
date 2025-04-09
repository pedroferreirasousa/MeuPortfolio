import "./globals.css";
import Header from '../components/Header/Header'
import style from "../styles/reset.scss";
import Head from "next/head";



export const metadata = {
  title: "Pedro Ferreira Sousa",
  description: "Portfólio de Pedro Ferreira Sousa, desenvolvedor Front End focado em criar soluções inovadoras com React, Next.js e Typescript.",
  themeColor: "#000325",
  appleMobileWebAppStatusBarStyle: "black-translucent",
};

const shareImageUrl = "../../public/media/share-image.png";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <meta name="theme-color" content={metadata.themeColor} />
        <meta name="apple-mobile-web-app-status-bar-style" content={metadata.appleMobileWebAppStatusBarStyle} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={shareImageUrl} />
        <meta property="og:url" content="https://pedroferreirasousa.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
