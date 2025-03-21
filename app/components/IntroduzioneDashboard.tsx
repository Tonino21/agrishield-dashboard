import React from 'react';

const IntroduzioneDashboard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6 text-center">
        <h1 className="text-2xl font-bold text-blue-900">Partnership Meteo365-Meteo Expert: Progetto AgriShield Basilicata</h1>
        <p className="text-blue-700 mt-1">Integrazione di sistemi di gestione idrica e monitoraggio fitopatie per l'agricoltura 4.0</p>
      </div>
      
      <div className="p-5 bg-white border rounded-lg shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Introduzione al Progetto</h2>
        
        <p className="text-gray-700 mb-4">
          Il progetto AgriShield rappresenta un'opportunità strategica di partnership tra Meteo365 e Meteo Expert 
          per sviluppare una soluzione innovativa dedicata all'agricoltura della regione Basilicata. 
          La collaborazione mira a integrare i modelli idrici avanzati di Meteo Expert (sistema PreGI) con 
          le competenze in monitoraggio fitopatie di Meteo365, creando un sistema unificato per la gestione 
          efficiente delle risorse idriche e la protezione delle colture.
        </p>
        
        <div className="mb-6 mt-4">
          <h3 className="font-semibold text-gray-700 mb-2">Contesto regionale:</h3>
          <ul className="space-y-1 text-gray-600 pl-5 list-disc">
            <li>33.829 aziende agricole in Basilicata, con estensione media di 13,65 ettari</li>
            <li>Settore fortemente colpito da eventi climatici estremi (siccità 2022, gelate tardive, grandinate)</li>
            <li>Solo il 7,4% delle aziende agricole lucane utilizza tecnologie 4.0, contro il 15,8% della media nazionale</li>
            <li>Crescente richiesta di soluzioni agrometeorologiche avanzate (mercato stimato tra 10-20 milioni €/anno)</li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-amber-800 mb-2">Struttura della presentazione:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-green-800 font-medium">1</span>
              </div>
              <span><strong>Matrice Strategica di Opportunità</strong> — Analisi del posizionamento dei servizi di Meteo Expert per identificare le migliori opportunità di integrazione</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-blue-800 font-medium">2</span>
              </div>
              <span><strong>Servizi Meteo Expert</strong> — Dettaglio dei servizi e della loro rilevanza per l'agricoltura, con focus sul sistema PreGI per la gestione delle risorse idriche</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-amber-800 font-medium">3</span>
              </div>
              <span><strong>Roadmap Progetto</strong> — Piano di implementazione in tre fasi sequenziali lungo 18 mesi: Proof of Concept, Progetto Pilota, Go-to-Market</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-purple-800 font-medium">4</span>
              </div>
              <span><strong>Modello di Business</strong> — Struttura di abbonamenti differenziati per dimensione aziendale, ripartizione ricavi e strategie di finanziamento</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-indigo-800 font-medium">5</span>
              </div>
              <span><strong>Metriche di Successo</strong> — KPI e obiettivi per misurare l'efficacia commerciale, l'impatto ambientale e la performance tecnica del progetto</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-gray-700 font-medium">
            La proposta di partnership mira a creare valore in tre aree principali:
          </p>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="p-3 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 text-center mb-1">Sostenibilità</h4>
              <p className="text-sm text-center">Riduzione del 20-30% del consumo idrico</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 text-center mb-1">Efficienza</h4>
              <p className="text-sm text-center">ROI 2-3x per gli agricoltori</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800 text-center mb-1">Innovazione</h4>
              <p className="text-sm text-center">Accelerazione dell'adozione di tecnologie 4.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduzioneDashboard;
