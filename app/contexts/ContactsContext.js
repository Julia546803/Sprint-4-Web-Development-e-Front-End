"use client";

import {createContext, useContext, useState, useEffect, useCallback,} from "react";

import contactsApi from "../services/contactsApi";

// CRIAR O CONTEXTO
const ContactsContext = createContext(null);

// PROVIDER DOS CONTATOS
export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // BUSCAR CONTATOS NA API
  const fetchContacts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await contactsApi.get("/users");

      setContacts(response.data);
    } catch (err) {
      setError("Falha ao carregar contatos.");
      setContacts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // CARREGAR CONTATOS AO INICIAR
  useEffect(() => {
    Promise.resolve().then(() => {
      fetchContacts();
    });
  }, [fetchContacts]);

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        loading,
        error,
        fetchContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

// HOOK PERSONALIZADO
export function useContacts() {
  const context = useContext(ContactsContext);

  if (!context) {
    throw new Error(
      "useContacts deve ser usado dentro de ContactsProvider"
    );
  }
  return context;
}