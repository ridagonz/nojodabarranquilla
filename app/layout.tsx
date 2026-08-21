import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"No Joda Barranquilla Noticias",description:"Noticias, actualidad y las vueltas de Barranquilla y el Atlántico. Pa' que no te cojan fuera de base.",openGraph:{title:"No Joda Barranquilla Noticias",description:"Lo que pasa en Barranquilla y el Atlántico, sin tanta vuelta.",type:"website"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es"><body>{children}</body></html>}
