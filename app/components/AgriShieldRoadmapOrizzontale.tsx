import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Circle, Clock, ArrowRight, Users, Gauge, Zap } from "lucide-react";


const AgriShieldRoadmapOrizzontale = () => {
  const phases = [
    {
      id: 1,
      title: "Proof of Concept",
      duration: "3-4 mesi",
      description: "Fase di validazione tecnica e integrazione iniziale",
      activities: [
        "Integrazione tecnica dei sistemi Meteo Expert (PreGI) e Meteo365",
        "Calibrazione dei modelli per le specificità del territorio lucano",
        "Sviluppo prototipo dell'interfaccia utente per test",
        "Definizione KPI di misurazione dell'efficacia del sistema"
      ],
      deliverables: [
        "Prototipo funzionante",
        "Report di fattibilità tecnica",
        "Piano dettagliato per la fase pilota"
      ],
      stakeholders: ["Team tecnico Meteo Expert", "Team tecnico Meteo365"],
      icon: <Gauge size={24} />
    },
    {
      id: 2,
      title: "Progetto Pilota",
      duration: "5-8 mesi",
      description: "Fase di test sul campo con aziende agricole selezionate",
      activities: [
        "Test con 5-10 aziende agricole in diverse aree della regione",
        "Monitoraggio dell'accuratezza delle previsioni",
        "Raccolta feedback strutturato dagli agricoltori",
        "Ottimizzazione algoritmi e interfaccia utente"
      ],
      deliverables: [
        "Dashboard di monitoraggio performance",
        "Rapporto di validazione sul campo",
        "Specifiche prodotto finale",
        "Modello di business validato"
      ],
      stakeholders: ["Aziende agricole pilota", "Consorzi di bonifica", "Team di prodotto congiunto"],
      icon: <Users size={24} />
    },
    {
      id: 3,
      title: "Go-to-Market",
      duration: "9-12 mesi",
      description: "Lancio ufficiale e commercializzazione del prodotto",
      activities: [
        "Sviluppo prodotto completo con tutte le funzionalità",
        "Creazione di pacchetti di servizio differenziati",
        "Strategia di marketing congiunta",
        "Lancio ufficiale in coincidenza con inizio stagione irrigua"
      ],
      deliverables: [
        "Prodotto completo pronto per il mercato",
        "Materiali di marketing e vendita",
        "Documentazione tecnica e guide utente",
        "Piano di supporto post-vendita"
      ],
      stakeholders: ["Team vendite di entrambe le aziende", "Partner di distribuzione", "Cliente finale"],
      icon: <Zap size={24} />
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6 text-center">
        <h1 className="text-2xl font-bold text-blue-900">Partnership Meteo365-Meteo Expert</h1>
        <h2 className="text-xl font-bold text-blue-700 mt-2">Roadmap Progetto AgriShield Basilicata</h2>
        <p className="text-blue-600 mt-1">Piano di implementazione in 3 fasi sequenziali</p>
      </div>

      <div className="flex flex-row w-full mb-6">
        {phases.map((phase, index) => (
          <div 
            key={phase.id} 
            className="border rounded-lg shadow-sm p-4 relative flex-1 mx-2"
            style={{ width: '33%', flexBasis: '33%' }}
          >
            <div 
              className={`absolute ${phase.id === 1 ? 'top-4 right-2' : 'top-4 right-4'} bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium`}
              style={phase.id === 1 ? { right: '8px' } : {}}
            >
              {phase.duration}
            </div>

            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                {phase.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold">Fase {phase.id}: {phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-sm uppercase text-gray-500 mb-2">Attività chiave</h4>
              <ul className="space-y-2">
                {phase.activities.map((activity, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-sm uppercase text-gray-500 mb-2">Deliverable</h4>
              <ul className="space-y-2">
                {phase.deliverables.map((deliverable, i) => (
                  <li key={i} className="flex items-start">
                    <Circle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            {index < phases.length - 1 && (
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1">
                <ArrowRight className="h-6 w-6 text-blue-500" />
              </div>
            )}
          </div>
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader className="bg-yellow-50 border-b">
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-5 w-5" /> Integrazione dei servizi Meteo365 e Meteo Expert
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3 mt-3">La roadmap prevede l'integrazione di due componenti principali:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-3 bg-blue-50">
              <h5 className="font-semibold text-blue-700">Modelli idrici (Meteo Expert - PreGI)</h5>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Previsione dei contenuti idrici dei suoli</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Analisi dei fabbisogni irrigui</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Previsioni meteorologiche di lungo periodo</span>
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-3 bg-green-50">
              <h5 className="font-semibold text-green-700">Monitoraggio fitopatie (Meteo365)</h5>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Previsione e monitoraggio malattie delle colture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Alerting preventivo per trattamenti</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Modelli specifici per le colture lucane</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgriShieldRoadmapOrizzontale;
