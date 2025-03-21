import React from 'react';

const ServiziIntroduzione = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-4">
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-2">
        <h2 className="text-xl font-bold text-blue-800">2. Servizi Meteo Expert</h2>
        <p className="text-blue-600 mt-1">Analisi dei servizi di Meteo Expert e della loro rilevanza per il settore agricolo</p>
        
        <div className="mt-3 p-3 bg-white rounded-lg border border-blue-100">
          <p className="text-gray-700 mb-2">
            Questa sezione fornisce un'analisi dettagliata del portafoglio di servizi di Meteo Expert, suddivisi in quattro categorie principali:
          </p>
          
          <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
            <li><strong>Produzione Televisiva e Media</strong> - Servizi di previsione meteo per Mediaset e network radiofonici</li>
            <li><strong>Soluzioni Industriali</strong> - Servizi per settori energetici, trasporti, nautica e utility</li>
            <li><strong>Ricerca e Sviluppo</strong> - Progetti innovativi incluso il sistema PreGI per l'analisi delle piene degli invasi</li>
            <li><strong>Educazione e Divulgazione</strong> - Iniziative educative come MeteoHeroes e progetti scolastici</li>
          </ul>
          
          <p className="text-gray-700">
            Tramite una valutazione sistematica, identifichiamo il grado di rilevanza di ciascun servizio per l'agricoltura (da "Molto bassa" a "Molto alta") 
            e il tipo di rilevanza ("Diretta" o "Indiretta"). Questa analisi permette di identificare con precisione le aree di maggiore sinergia 
            tra Meteo Expert e Meteo365 per il progetto AgriShield.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiziIntroduzione;