import Navbar from "./Components/NavBar/NavBar"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children }) {

  return (
    <html lang="en">
      <body>
        {
          children
        }
      </body>
    </html>
  )
}; 
