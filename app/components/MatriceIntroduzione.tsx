import React from 'react';

const MatriceIntroduzione = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-4">
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-2">
        <h2 className="text-xl font-bold text-green-800">1. Matrice Strategica di Opportunità</h2>
        <p className="text-green-700 mt-1">Posizionamento dei servizi in base a impatto sull'agricoltura e sul business di Meteo365</p>
        
        <div className="mt-3 p-3 bg-white rounded-lg border border-green-100">
          <p className="text-gray-700 mb-2">
            In questa sezione analizziamo il portafoglio di servizi offerto da Meteo Expert, valutando ciascun servizio secondo due dimensioni chiave:
          </p>
          
          <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
            <li><strong>Impatto sull'Agricoltura</strong> - Il potenziale di applicazione e l'utilità del servizio per il settore agricolo</li>
            <li><strong>Impatto sul Business di Meteo365</strong> - La rilevanza e il potenziale valore aggiunto per il business di Meteo365</li>
          </ul>
          
          <p className="text-gray-700">
            La matrice evidenzia in particolare il servizio "Analisi Piene Invasi (PreGI)", che rappresenta l'opportunità più rilevante per la partnership, 
            essendo l'unico servizio con applicazione diretta al settore agricolo e con elevato impatto potenziale sia per l'agricoltura che per il business di Meteo365.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatriceIntroduzione;