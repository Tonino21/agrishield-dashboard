import React from 'react';
import { BarChart } from "lucide-react";

const IntroduzioneMetricheSuccesso = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-4">
      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg mb-2">
        <h2 className="text-xl font-bold text-indigo-800 flex items-center">
          <BarChart className="h-5 w-5 mr-2" />
          5. Metriche di Successo
        </h2>
        <p className="text-indigo-600 mt-1">KPI e obiettivi per misurare l'efficacia del progetto</p>
        
        <div className="mt-3 p-3 bg-white rounded-lg border border-indigo-100">
          <p className="text-gray-700 mb-2">
            Il successo del progetto AgriShield richiede un sistema di misurazione chiaro e multidimensionale. 
            In questa sezione definiamo le metriche chiave che utilizzeremo per monitorare i progressi e valutare 
            l'impatto effettivo della nostra soluzione.
          </p>
          
          <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
            <li><strong>Metriche di Business</strong> - Misurano il successo commerciale del servizio e la sua penetrazione nel mercato agricolo lucano</li>
            <li><strong>Metriche di Impatto</strong> - Quantificano i benefici tangibili per gli agricoltori e l'ambiente in termini di risparmio di risorse</li>
            <li><strong>Metriche Tecniche</strong> - Valutano la performance e l'affidabilità della piattaforma dal punto di vista tecnologico</li>
          </ul>
          
          <p className="text-gray-700">
            Per ciascuna categoria, abbiamo identificato KPI specifici con target ambiziosi ma realistici, basati su studi di settore e 
            benchmark di mercato. Queste metriche non solo guideranno lo sviluppo del progetto, ma serviranno anche come strumento di 
            comunicazione con stakeholder e potenziali investitori, dimostrando il valore concreto della nostra proposta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroduzioneMetricheSuccesso;