import React from 'react';
import { PiggyBank } from "lucide-react";

const BusinessIntroduzione = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-4">
      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg mb-2">
        <h2 className="text-xl font-bold text-purple-800 flex items-center">
          <PiggyBank className="h-5 w-5 mr-2" />
          4. Modello di Business
        </h2>
        <p className="text-purple-600 mt-1">Struttura di monetizzazione e ripartizione dei ricavi tra i partner</p>
        
        <div className="mt-3 p-3 bg-white rounded-lg border border-purple-100">
          <p className="text-gray-700 mb-2">
            In questa sezione definiamo la strategia di monetizzazione del progetto AgriShield, con un focus su:
          </p>
          
          <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
            <li><strong>Struttura degli Abbonamenti</strong> - Tre livelli di offerta (Base, Premium, Enterprise) con funzionalità e prezzi differenziati in base alla dimensione dell'azienda agricola</li>
            <li><strong>Ripartizione dei Ricavi</strong> - Modello di ripartizione equa tra Meteo Expert (40%), Meteo365 (40%) e un fondo comune per sviluppo e marketing (20%)</li>
            <li><strong>Potenziali Finanziamenti</strong> - Opportunità di accesso a fondi PSR Basilicata, PNRR e partnership con consorzi locali</li>
          </ul>
          
          <p className="text-gray-700">
            Il modello proposto è stato progettato per garantire sostenibilità economica al progetto e per massimizzare il valore offerto agli agricoltori, 
            con un chiaro ritorno dell'investimento stimato tra 2 e 3 volte il costo del servizio grazie ai risparmi idrici ed energetici generati.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntroduzione;