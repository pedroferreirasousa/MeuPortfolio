import "./globals.css";
import Header from '../components/Header/Header'
import style from "../styles/reset.scss";
import Head from "next/head";
import Footer from "../components/Footer/Footer";



export const metadata = {
  title: "Pedro Ferreira Sousa",
  description: "Portfólio de Pedro Ferreira Sousa, desenvolvedor Front End focado em criar soluções inovadoras com React, Next.js, Javascript e Typescript.",
  themeColor: "#000325",
  appleWebApp: {
    statusBarStyle: "black-translucent",
    capable: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Pedro Ferreira Sousa",
    description: "Portfólio de Pedro Ferreira Sousa, desenvolvedor Front End focado em criar soluções inovadoras com React, Next.js, Javascript e Typescript.",
    url: "https://pedroferreirasousa.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://pedroferreirasousa.vercel.app/media/share-image.png",
        width: 1200,
        height: 720,
        alt: "Imagem de compartilhamento do portfolio",
      },
    ],
    locale: "pt-br",
    site_name: "Pedro Ferreira Sousa",
  },
  robots: {
    index: true,
    follow: true,
  },
  
};

const baseURL = "https://pedroferreirasousa.vercel.app";
const shareImageUrl = `${baseURL}/media/share-image.png`

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <meta name="theme-color" content={metadata.themeColor} />
        <meta name="apple-mobile-web-app-status-bar-style" content={metadata.appleWebApp?.statusBarStyle} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
