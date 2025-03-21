import React from 'react';
import { Clock } from "lucide-react";

const RoadmapIntroduzione = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-4">
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-2">
        <h2 className="text-xl font-bold text-amber-800 flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          3. Roadmap Progetto AgriShield
        </h2>
        <p className="text-amber-700 mt-1">Piano di implementazione in 3 fasi sequenziali</p>
        
        <div className="mt-3 p-3 bg-white rounded-lg border border-amber-100">
          <p className="text-gray-700 mb-2">
            Questa sezione presenta il piano operativo per lo sviluppo e il lancio del progetto AgriShield, 
            strutturato in tre fasi sequenziali che coprono un periodo complessivo di 18 mesi:
          </p>
          
          <ol className="list-decimal pl-5 text-gray-700 space-y-1 mb-3">
            <li><strong>Proof of Concept (3-4 mesi)</strong> - Fase di validazione tecnica e integrazione iniziale dei sistemi</li>
            <li><strong>Progetto Pilota (5-8 mesi)</strong> - Test sul campo con aziende agricole selezionate nella regione Basilicata</li>
            <li><strong>Go-to-Market (9-12 mesi)</strong> - Lancio commerciale del prodotto completo con tutte le funzionalità</li>
          </ol>
          
          <p className="text-gray-700">
            Per ciascuna fase, dettagliamo le attività chiave, i deliverable attesi e gli stakeholder coinvolti.
            La roadmap evidenzia anche come i due componenti principali - i modelli idrici di Meteo Expert (PreGI) e 
            i sistemi di monitoraggio fitopatie di Meteo365 - verranno integrati per creare un'unica soluzione completa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapIntroduzione;
