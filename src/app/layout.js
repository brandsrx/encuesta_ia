import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Encuesta",
  description: "Sitio web donde se podra ver los datos de la encuesta realizada sobre la inteligencia artificial",
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      
      <body>
      <Header/>
      {children}
      <Footer/>
        </body>
    </html>
  );
}
