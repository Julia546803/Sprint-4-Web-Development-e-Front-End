import "../styles/output.css";

import { AuthProvider } from "./contexts/AuthContext";
import { ContactsProvider } from "./contexts/ContactsContext";

export const metadata = {
  title: "JOVI V70",
  description: "Aplicação JOVI V70 desenvolvida em React e Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen items-center justify-center bg-black font-sans">
        <AuthProvider>
          <ContactsProvider>
            {children}
          </ContactsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}