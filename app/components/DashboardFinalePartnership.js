"use client";

import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  ArrowRight, 
  Users, 
  Gauge, 
  Zap, 
  BarChart, 
  PiggyBank, 
  Target, 
  PieChart, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react";


const DashboardFinale = () => {
  const [expandedSection, setExpandedSection] = useState('matrix');
  
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  // Servizi Meteo Expert con rilevanza per agricoltura
  const services = [
    {
      category: "Produzione Televisiva e Media",
      services: [
        { name: "Previsioni meteo per Mediaset", audience: "20+ milioni di telespettatori", relevanceToAgriculture: 2, relevanceType: "Indiretta" },
        { name: "Servizi per network radiofonici", audience: "14+ milioni di radioascoltatori", relevanceToAgriculture: 2, relevanceType: "Indiretta" }
      ],
      relevanceToAgriculture: 2,
      relevanceType: "Indiretta",
      color: "#3b82f6"
    },
    {
      category: "Soluzioni Industriali",
      services: [
        { name: "Energia (fotovoltaico, eolico)", audience: "Produttori energia rinnovabile", relevanceToAgriculture: 3, relevanceType: "Indiretta" },
        { name: "Trasporti e Mobilità", audience: "Ferrovie Nord, Autostrade per l'Italia", relevanceToAgriculture: 1, relevanceType: "Indiretta" },
        { name: "Nautica", audience: "Navigazione commerciale e sportiva", relevanceToAgriculture: 1, relevanceType: "Indiretta" },
        { name: "Utility", audience: "Terna, ENI, ENEL, Edison, SNAM, A2A", relevanceToAgriculture: 2, relevanceType: "Indiretta" }
      ],
      relevanceToAgriculture: 3,
      relevanceType: "Indiretta",
      color: "#10b981"
    },
    {
      category: "Ricerca e Sviluppo",
      services: [
        { name: "SIMULATOR-ADS (Gestione Rischi)", audience: "Enti pubblici e aziende", relevanceToAgriculture: 4, relevanceType: "Indiretta" },
        { name: "Analisi Piene Invasi (PreGI)", audience: "Gestori risorse idriche e agricoltori", relevanceToAgriculture: 5, relevanceType: "Diretta" },
        { name: "Meteo e Rinnovabili", audience: "Settore energetico", relevanceToAgriculture: 3, relevanceType: "Indiretta" }
      ],
      relevanceToAgriculture: 4,
      relevanceType: "Mista",
      color: "#f59e0b"
    },
    {
      category: "Educazione e Divulgazione",
      services: [
        { name: "MeteoHeroes", audience: "Bambini e famiglie", relevanceToAgriculture: 2, relevanceType: "Indiretta" },
        { name: "Progetto Scuole", audience: "Studenti", relevanceToAgriculture: 2, relevanceType: "Indiretta" },
        { name: "Villaggio del Clima", audience: "Pubblico generale", relevanceToAgriculture: 3, relevanceType: "Indiretta" },
        { name: "Lezioni Fisica per Vela", audience: "Navigatori sportivi", relevanceToAgriculture: 1, relevanceType: "Indiretta" }
      ],
      relevanceToAgriculture: 2,
      relevanceType: "Indiretta",
      color: "#8b5cf6"
    }
  ];
  
  // Componente Grafico a Bolle
  const BubbleChart = () => {
    // Dimensioni del grafico
    const width = 800;
    const height = 600;
    const margin = { top: 80, right: 40, bottom: 120, left: 80 };
    
    // Area del grafico
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    
    // Dati dei servizi Meteo Expert
    const data = [
      // Produzione TV e Media
      { name: 'Previsioni meteo Mediaset', agricoltura: 30, business: 70, categoria: 'Media', relevance: 'Indiretta', value: 2, color: '#3b82f6' },
      { name: 'Servizi network radio', agricoltura: 35, business: 60, categoria: 'Media', relevance: 'Indiretta', value: 2, color: '#3b82f6' },
      
      // Soluzioni Industriali
      { name: 'Energia (fotovoltaico)', agricoltura: 60, business: 75, categoria: 'Industriali', relevance: 'Indiretta', value: 3, color: '#10b981' },
      { name: 'Utility', agricoltura: 55, business: 65, categoria: 'Industriali', relevance: 'Indiretta', value: 2, color: '#10b981' },
      { name: 'Trasporti', agricoltura: 45, business: 55, categoria: 'Industriali', relevance: 'Indiretta', value: 1, color: '#10b981' },
      { name: 'Nautica', agricoltura: 40, business: 50, categoria: 'Industriali', relevance: 'Indiretta', value: 1, color: '#10b981' },
      
      // Educazione e Divulgazione
      { name: 'MeteoHeroes', agricoltura: 35, business: 30, categoria: 'Educazione', relevance: 'Indiretta', value: 2, color: '#8b5cf6' },
      { name: 'Progetto Scuole', agricoltura: 30, business: 40, categoria: 'Educazione', relevance: 'Indiretta', value: 2, color: '#8b5cf6' },
      { name: 'Villaggio del Clima', agricoltura: 40, business: 35, categoria: 'Educazione', relevance: 'Indiretta', value: 3, color: '#8b5cf6' },
      { name: 'Lezioni Fisica Vela', agricoltura: 25, business: 25, categoria: 'Educazione', relevance: 'Indiretta', value: 1, color: '#8b5cf6' },
      
      // Ricerca e Sviluppo
      { name: 'SIMULATOR-ADS', agricoltura: 70, business: 70, categoria: 'R&S', relevance: 'Indiretta', value: 4, color: '#f59e0b' },
      { name: 'Meteo e Rinnovabili', agricoltura: 65, business: 35, categoria: 'R&S', relevance: 'Indiretta', value: 3, color: '#f59e0b' },
      { name: 'Analisi Piene Invasi (PreGI)', agricoltura: 85, business: 85, categoria: 'R&S', relevance: 'Diretta', value: 5, color: '#059669' },
    ];
    
    // Scala per gli assi
    const minX = 0;
    const maxX = 100;
    const minY = 0;
    const maxY = 100;
    
    // Funzione per mappare i valori alle coordinate
    const scaleX = (value) => {
      return ((value - minX) / (maxX - minX)) * chartWidth;
    };
    
    const scaleY = (value) => {
      return chartHeight - ((value - minY) / (maxY - minY)) * chartHeight;
    };
    
    // Scala per la dimensione delle bolle
    const minSize = 10;
    const maxSize = 30;
    const scaleSize = (value) => {
      return minSize + (value / 5) * (maxSize - minSize);
    };
    
    // Creare linee della griglia
    const gridStep = 20;
    const gridLinesX = [];
    for (let i = minX; i <= maxX; i += gridStep) {
      gridLinesX.push(
        <line 
          key={`gridX-${i}`}
          x1={scaleX(i)} 
          y1={0} 
          x2={scaleX(i)} 
          y2={chartHeight} 
          stroke="#e0e0e0" 
          strokeDasharray="3,3"
        />
      );
    }
    
    const gridLinesY = [];
    for (let i = minY; i <= maxY; i += gridStep) {
      gridLinesY.push(
        <line 
          key={`gridY-${i}`}
          x1={0} 
          y1={scaleY(i)} 
          x2={chartWidth} 
          y2={scaleY(i)} 
          stroke="#e0e0e0" 
          strokeDasharray="3,3"
        />
      );
    }
    
    // Creare etichette per gli assi
    const xLabels = [];
    for (let i = minX; i <= maxX; i += gridStep) {
      xLabels.push(
        <text 
          key={`labelX-${i}`}
          x={scaleX(i)} 
          y={chartHeight + 20} 
          textAnchor="middle"
          fontSize="12"
        >
          {i}
        </text>
      );
    }
    
    const yLabels = [];
    for (let i = minY; i <= maxY; i += gridStep) {
      yLabels.push(
        <text 
          key={`labelY-${i}`}
          x={-10} 
          y={scaleY(i)} 
          textAnchor="end"
          dominantBaseline="middle"
          fontSize="12"
        >
          {i}
        </text>
      );
    }
    
    // Linee per dividere i quadranti
    const quadrantLines = [
      <line key="midX" x1={scaleX(50)} y1={0} x2={scaleX(50)} y2={chartHeight} stroke="#999" strokeDasharray="5,5" />,
      <line key="midY" x1={0} y1={scaleY(50)} x2={chartWidth} y2={scaleY(50)} stroke="#999" strokeDasharray="5,5" />
    ];
    
    // Renderizza le bolle
    const bubbles = data.map((d, i) => {
      // Determina se è PreGI per styling speciale
      const isPregi = d.name.includes('PreGI');
      const strokeWidth = isPregi ? 3 : 1;
      const strokeColor = isPregi ? '#047857' : '#333';
      
      return (
        <g key={`bubble-${i}`}>
          <circle
            cx={scaleX(d.agricoltura)}
            cy={scaleY(d.business)}
            r={scaleSize(d.value)}
            fill={d.color}
            fillOpacity="0.7"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
          <text
            x={scaleX(d.agricoltura)}
            y={scaleY(d.business) - scaleSize(d.value) - 5}
            textAnchor="middle"
            fontSize="12"
            fontWeight={isPregi ? "bold" : "normal"}
            fill={isPregi ? "#047857" : "#333"}
          >
            {isPregi ? d.name : d.name.split(' ')[0]}
          </text>
        </g>
      );
    });
    
    // Creare la legenda per categorie
    const categories = [
      { name: 'Produzione TV e Media', color: '#3b82f6' },
      { name: 'Soluzioni Industriali', color: '#10b981' },
      { name: 'Educazione e Divulgazione', color: '#8b5cf6' },
      { name: 'Ricerca e Sviluppo', color: '#f59e0b' },
      { name: 'Opportunità Diretta', color: '#059669' }
    ];
    
    return (
      <div className="w-full mx-auto max-w-4xl overflow-auto pb-6">
        <svg width={width} height={height} className="mx-auto">
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {/* Griglia */}
            {gridLinesX}
            {gridLinesY}
            
            {/* Divisione quadranti */}
            {quadrantLines}
            
            {/* Assi */}
            <line x1={0} y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="#333" strokeWidth="2" />
            <line x1={0} y1={0} x2={0} y2={chartHeight} stroke="#333" strokeWidth="2" />
            
            {/* Etichette assi */}
            {xLabels}
            {yLabels}
            
            {/* Titoli assi */}
            <text 
              x={chartWidth / 2} 
              y={chartHeight + 50} 
              textAnchor="middle" 
              fontSize="16"
              fontWeight="bold"
            >
              Impatto sull'Agricoltura
            </text>
            
            <text 
              x={-50} 
              y={chartHeight / 2} 
              textAnchor="middle" 
              fontSize="16"
              fontWeight="bold"
              transform={`rotate(-90, -50, ${chartHeight / 2})`}
            >
              Impatto sul Business di Meteo365
            </text>
            
            {/* Bolle */}
            {bubbles}
          </g>
        </svg>
        
        <div className="text-center text-sm text-gray-600 mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <p><strong>Nota:</strong> Solo "Analisi Piene Invasi (PreGI)" ha una rilevanza diretta per l'agricoltura.</p>
          <p>Dimensione delle bolle = livello di rilevanza per l'agricoltura (da 1 a 5)</p>
          
          <div className="flex flex-wrap justify-center items-center mt-4 gap-x-6 gap-y-2">
            {categories.map((category, i) => (
              <div key={i} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: category.color, border: "1px solid #333" }}></div>
                <span className="text-sm">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // Roadmap per AgriWater
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
  
  // Modello di business
  const businessModel = {
    subscriptions: [
      { 
        name: "Base", 
        price: "10-15€/ha/anno", 
        features: [
          "Previsioni idriche stagionali", 
          "Monitoraggio base fitopatie",
          "Raccomandazioni base per irrigazione", 
          "Interfaccia mobile semplificata", 
          "Alert via SMS per eventi critici"
        ],
        target: "Piccole aziende agricole (<50 ha)"
      },
      { 
        name: "Premium", 
        price: "25-30€/ha/anno", 
        features: [
          "Tutto il pacchetto Base",
          "Raccomandazioni personalizzate per coltura",
          "Sistema avanzato previsione fitopatie",
          "Dashboard analytics avanzata", 
          "Supporto tecnico prioritario", 
          "Report mensili di performance"
        ],
        target: "Aziende agricole medie (50-200 ha)"
      },
      { 
        name: "Enterprise", 
        price: "Personalizzato", 
        features: [
          "Tutto il pacchetto Premium",
          "Integrazione API con sistemi aziendali", 
          "Previsione fitopatie personalizzata",
          "Consulenza agronomica dedicata", 
          "Personalizzazione completa del sistema",
          "Formazione on-site del personale"
        ],
        target: "Consorzi agricoli e grandi aziende (>200 ha)"
      }
    ],
    revenueShare: [
      { name: "Meteo Expert", percentage: 40, description: "Fornisce IP dei modelli idrici e previsionali" },
      { name: "Meteo365", percentage: 40, description: "Fornisce modelli fitopatie, localizzazione e supporto" },
      { name: "Fondo comune", percentage: 20, description: "Destinato a sviluppo continuo e marketing" }
    ],
    funding: [
      { 
        name: "PSR Basilicata 2021-2027", 
        type: "Pubblico regionale",
        relevance: "Alta",
        description: "Misura 1.2 per trasferimento conoscenze e innovazione in agricoltura" 
      },
      { 
        name: "PNRR", 
        type: "Pubblico nazionale",
        relevance: "Alta",
        description: "Missione 2, Componente 4 - Tutela territorio e risorsa idrica (13M€)" 
      },
      { 
        name: "Partnership consorzi", 
        type: "Privato",
        relevance: "Media",
        description: "Collaborazione con consorzi di bonifica e irrigazione regionali" 
      }
    ],
    metrics: [
      { name: "ROI per agricoltori", target: "2-3x", description: "Risparmi idrici ed energetici vs costo abbonamento" },
      { name: "Tasso di conversione da prova", target: "20%", description: "% di conversione da prova gratuita ad abbonamento" },
      { name: "Customer Lifetime Value", target: "3+ anni", description: "Durata media del rapporto con cliente" },
      { name: "Penetrazione mercato", target: "15-30%", description: "% aziende agricole lucane che adottano il servizio" },
      { name: "Riduzione uso acqua", target: "20-30%", description: "Riduzione consumo idrico regionale" },
      { name: "Accuratezza previsioni", target: ">85%", description: "Precisione delle previsioni rispetto ai dati reali" },
      { name: "NPS (Net Promoter Score)", target: ">50", description: "Propensione dei clienti a raccomandare il servizio" }
    ]
  };
  
  const getRelevanceLabel = (value) => {
    const labels = {
      1: "Molto bassa",
      2: "Bassa",
      3: "Media",
      4: "Alta",
      5: "Molto alta"
    };
    return labels[value] || "";
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 pb-8">
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4 text-center">
        <h1 className="text-2xl font-bold text-blue-900">Partnership Meteo365-Meteo Expert: Progetto AgriShield Basilicata</h1>
        <p className="text-blue-700 mt-1">Integrazione di sistemi di gestione idrica e monitoraggio fitopatie per l'agricoltura 4.0</p>
      </div>

      {/* Sezione 1: Matrice di Opportunità */}
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="p-4 bg-gray-50 border-b flex justify-between items-center cursor-pointer" onClick={() => toggleSection('matrix')}>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <BarChart className="h-5 w-5 text-green-600" />
            </div>
            <h2 className="text-xl font-bold">1. Matrice Strategica di Opportunità</h2>
          </div>
          {expandedSection === 'matrix' ? <ChevronUp /> : <ChevronDown />}
        </div>
        
        {expandedSection === 'matrix' && (
          <div className="p-4">
            <BubbleChart />
          </div>
        )}
      </div>
      
      {/* Sezione 2: Servizi Meteo Expert */}
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="p-4 bg-gray-50 border-b flex justify-between items-center cursor-pointer" onClick={() => toggleSection('services')}>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <Target className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold">2. Servizi Meteo Expert</h2>
          </div>
          {expandedSection === 'services' ? <ChevronUp /> : <ChevronDown />}
        </div>
        
        {expandedSection === 'services' && (
          <div className="p-4">
            <Tabs defaultValue="table" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="table">Tabella Servizi</TabsTrigger>
                <TabsTrigger value="chart">Rilevanza per Agricoltura</TabsTrigger>
              </TabsList>
              
              <TabsContent value="table" className="mt-6">
                <div className="grid grid-cols-1 gap-6">
                  {services.map((category, idx) => (
                    <Card key={idx} className="overflow-hidden border">
                      <CardHeader className="p-4" style={{ backgroundColor: category.color, color: 'white' }}>
                        <CardTitle>{category.category}</CardTitle>
                        <CardDescription className="text-white opacity-90">
                          Rilevanza per agricoltura: {getRelevanceLabel(category.relevanceToAgriculture)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <table className="w-full">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-3 text-left">Servizio</th>
                              <th className="p-3 text-left">Target</th>
                              <th className="p-3 text-center">Rilevanza</th>
                              <th className="p-3 text-center">Tipo</th>
                            </tr>
                          </thead>
                          <tbody>
                            {category.services.map((service, i) => (
                              <tr key={i} className="border-t">
                                <td className="p-3">{service.name}</td>
                                <td className="p-3">{service.audience}</td>
                                <td className="p-3 text-center">
                                  <div className="flex justify-center items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                      <div 
                                        key={i} 
                                        className={`w-3 h-3 rounded-full ${i < service.relevanceToAgriculture ? 'bg-green-500' : 'bg-gray-200'}`}
                                      />
                                    ))}
                                  </div>
                                </td>
                                <td className="p-3 text-center">
                                  <span className={`px-2 py-1 rounded text-xs font-medium ${service.relevanceType === 'Diretta' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                    {service.relevanceType}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="chart" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Rilevanza dei Servizi di Meteo Expert per l'Agricoltura</CardTitle>
                    <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-md text-sm">
                      <strong>Nota:</strong> Solo "Analisi Piene Invasi (PreGI)" ha una rilevanza diretta per l'agricoltura.
                    </div>
                    <CardDescription>
                      Valutazione della possibile applicabilità di ciascuna categoria di servizi al settore agricolo
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-4">
                        {services.map((category, index) => (
                          <div key={index} className="border rounded-lg overflow-hidden">
                            <div className="flex items-center p-3 bg-gray-50 border-b">
                              <div 
                                className="w-6 h-6 rounded-full mr-3 flex-shrink-0"
                                style={{ backgroundColor: category.color }}
                              />
                              <h3 className="font-bold text-lg">{category.category}</h3>
                              <div className="ml-auto flex items-center">
                                <span className="text-sm mr-2">Rilevanza:</span>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <div 
                                      key={i} 
                                      className={`w-3 h-3 mx-0.5 rounded-full ${i < category.relevanceToAgriculture ? 'bg-green-500' : 'bg-gray-200'}`}
                                    />
                                  ))}
                                </div>
                                <span className={`ml-3 px-2 py-1 rounded text-xs font-medium ${category.relevanceType === 'Diretta' ? 'bg-green-100 text-green-800' : category.relevanceType === 'Mista' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                                  {category.relevanceType}
                                </span>
                              </div>
                            </div>
                            
                            <div className="p-3">
                              <div className="grid grid-cols-1 gap-2">
                                {category.services.map((service, i) => (
                                  <div key={i} className={`p-3 rounded-lg border flex justify-between items-center transition-all ${service.relevanceType === 'Diretta' ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}>
                                    <div className="flex-grow">
                                      <div className="font-medium">{service.name}</div>
                                      <div className="text-sm text-gray-500">{service.audience}</div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                      <div className="flex mb-1">
                                        {[...Array(5)].map((_, i) => (
                                          <div 
                                            key={i} 
                                            className={`w-2 h-2 mx-0.5 rounded-full ${i < service.relevanceToAgriculture ? 'bg-green-500' : 'bg-gray-200'}`}
                                          />
                                        ))}
                                      </div>
                                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${service.relevanceType === 'Diretta' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {service.relevanceType}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 text-sm text-gray-500">
                      <p className="font-medium">Legenda di rilevanza:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>Molto alta (5): Direttamente applicabile all'agricoltura e già orientato al settore</li>
                        <li>Alta (4): Facilmente adattabile con poche modifiche</li>
                        <li>Media (3): Potenzialmente utile con adattamenti significativi</li>
                        <li>Bassa (2): Applicabilità limitata, richiede sviluppi sostanziali</li>
                        <li>Molto bassa (1): Difficilmente applicabile al settore agricolo</li>
                      </ul>
                      
                      <p className="font-medium mt-4">Tipi di rilevanza:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li><span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">Diretta</span>: Servizio specificamente progettato per essere utilizzato in ambito agricolo</li>
                        <li><span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">Indiretta</span>: Servizio con potenziale applicazione agricola ma non sviluppato specificamente per questo settore</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
      
      {/* Sezione 3: Roadmap AgriShield */}
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="p-4 bg-gray-50 border-b flex justify-between items-center cursor-pointer" onClick={() => toggleSection('roadmap')}>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
            <h2 className="text-xl font-bold">3. Roadmap Progetto AgriShield</h2>
          </div>
          {expandedSection === 'roadmap' ? <ChevronUp /> : <ChevronDown />}
        </div>
        
        {expandedSection === 'roadmap' && (
          <div className="p-4">
            <div className="flex flex-col md:flex-row">
              {phases.map((phase, index) => (
                <div key={phase.id} className={`flex-1 p-4 relative ${index < phases.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''}`}>
                  <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
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
                    <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1">
                      <ArrowRight className="h-6 w-6 text-blue-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-bold text-amber-800 mb-2">Integrazione dei servizi Meteo365 e Meteo Expert</h4>
              <p className="text-sm mb-3">La roadmap prevede l'integrazione di due componenti principali:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-3 bg-white">
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
                <div className="border rounded-lg p-3 bg-white">
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
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 4: Modello di Business */}
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="p-4 bg-gray-50 border-b flex justify-between items-center cursor-pointer" onClick={() => toggleSection('business')}>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <PiggyBank className="h-5 w-5 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold">4. Modello di Business</h2>
          </div>
          {expandedSection === 'business' ? <ChevronUp /> : <ChevronDown />}
        </div>
        
        {expandedSection === 'business' && (
          <div className="p-4">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-800">Struttura Abbonamenti</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {businessModel.subscriptions.map((sub, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                      <h4 className="font-bold text-lg mb-1">{sub.name}</h4>
                      <div className="text-xl font-medium text-green-700 mb-3">{sub.price}</div>
                      <p className="text-sm text-gray-500 mb-4">Target: {sub.target}</p>
                      <h5 className="text-sm font-semibold uppercase text-gray-500 mb-2">Caratteristiche</h5>
                      <ul className="space-y-2">
                        {sub.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-800">Ripartizione Ricavi</h3>
                  <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                    <div className="h-20 flex">
                      {businessModel.revenueShare.map((share, index) => (
                        <div 
                          key={index} 
                          className={`flex items-center justify-center text-white font-bold text-sm flex-grow transition-all duration-500 ease-in-out
                            ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-amber-500'}`}
                          style={{width: `${share.percentage}%`}}
                        >
                          {share.percentage}%
                        </div>
                      ))}
                    </div>
                    <div className="p-4 space-y-3">
                      {businessModel.revenueShare.map((share, index) => (
                        <div key={index} className="flex items-start">
                          <div 
                            className={`w-4 h-4 rounded-full mr-2 mt-1 flex-shrink-0 
                              ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-amber-500'}`}
                          />
                          <div>
                            <span className="font-medium">{share.name} ({share.percentage}%)</span>
                            <p className="text-sm text-gray-600">{share.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-amber-800">Potenziali Finanziamenti</h3>
                  <div className="space-y-3">
                    {businessModel.funding.map((fund, index) => (
                      <div key={index} className="p-3 border rounded-lg bg-white shadow-sm">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold">{fund.name}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full font-medium 
                            ${fund.relevance === 'Alta' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            Rilevanza {fund.relevance}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{fund.type}</div>
                        <p className="text-sm mt-2">{fund.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-indigo-800">Riepilogo</h3>
                <div className="p-4 border rounded-lg bg-indigo-50">
                  <p className="text-sm">
                    Il modello di business si basa su una struttura di abbonamenti scalabile adatta a diverse dimensioni aziendali, 
                    una equa ripartizione dei ricavi tra i partner e una strategia di finanziamento che combina fondi pubblici e privati.
                    Per i dettagli sulle metriche di successo del progetto, vedere la sezione 5.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 5: Metriche di Successo */}
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="p-4 bg-gray-50 border-b flex justify-between items-center cursor-pointer" onClick={() => toggleSection('metrics')}>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
              <BarChart className="h-5 w-5 text-indigo-600" />
            </div>
            <h2 className="text-xl font-bold">5. Metriche di Successo</h2>
          </div>
          {expandedSection === 'metrics' ? <ChevronUp /> : <ChevronDown />}
        </div>
        
        {expandedSection === 'metrics' && (
          <div className="p-6">
            {/* Metriche di Business */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800 pb-2 border-b border-indigo-100">
                Metriche di Business
                <span className="text-sm font-normal text-gray-500 ml-2">Misurano il successo commerciale del progetto</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border rounded-lg p-4 bg-white shadow-sm">
                  <h4 className="font-bold text-lg text-center mb-2">Tasso di conversione</h4>
                  <div className="text-2xl font-bold text-indigo-600 text-center">20%</div>
                  <p className="text-sm text-gray-600 text-center mt-2">% di conversione da prova gratuita ad abbonamento</p>
                </div>
                <div className="border rounded-lg p-4 bg-white shadow-sm">
                  <h4 className="font-bold text-lg text-center mb-2">Customer Lifetime</h4>
                  <div className="text-2xl font-bold text-indigo-600 text-center">3+ anni</div>
                  <p className="text-sm text-gray-600 text-center mt-2">Durata media del rapporto con cliente</p>
                </div>
                <div className="border rounded-lg p-4 bg-white shadow-sm">
                  <h4 className="font-bold text-lg text-center mb-2">Penetrazione mercato</h4>
                  <div className="text-2xl font-bold text-indigo-600 text-center">15-30%</div>
                  <p className="text-sm text-gray-600 text-center mt-2">% aziende agricole lucane che adottano il servizio</p>
                </div>
                <div className="border rounded-lg p-4 bg-white shadow-sm">
                  <h4 className="font-bold text-lg text-center mb-2">NPS</h4>
                  <div className="text-2xl font-bold text-indigo-600 text-center">›50</div>
                  <p className="text-sm text-gray-600 text-center mt-2">Propensione dei clienti a raccomandare il servizio</p>
                </div>
              </div>
            </div>
            
            {/* Metriche di Impatto */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-green-800 pb-2 border-b border-green-100">
                Metriche di Impatto
                <span className="text-sm font-normal text-gray-500 ml-2">Misurano i benefici concreti per gli agricoltori e l'ambiente</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 bg-white shadow-sm">
                  <h4 className="font-bold text-lg text-center mb-2">ROI per agricoltori</h4>
                  <div className="text-2xl font-bold text-green-600 text-center">2-3x</div>
                  <p className="text-sm text-gray-600 text-center mt-2">Risparmi idrici ed energetici vs costo abbonamento</p>
                </div>
                <div className="border rounded-lg p-4 bg-white shadow-sm">
                  <h4 className="font-bold text-lg text-center mb-2">Riduzione uso acqua</h4>
                  <div className="text-2xl font-bold text-green-600 text-center">20-30%</div>
                  <p className="text-sm text-gray-600 text-center mt-2">Riduzione consumo idrico regionale</p>
                </div>
                <div className="border rounded-lg p-4 bg-white shadow-sm">
                  <h4 className="font-bold text-lg text-center mb-2">Riduzione trattamenti</h4>
                  <div className="text-2xl font-bold text-green-600 text-center">15-25%</div>
                  <p className="text-sm text-gray-600 text-center mt-2">Riduzione dei trattamenti fitosanitari necessari</p>
                </div>
              </div>
            </div>
            
            {/* Metriche di Performance */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-800 pb-2 border-b border-amber-100">
                Metriche Tecniche
                <span className="text-sm font-normal text-gray-500 ml-2">Misurano la qualità e l'efficacia della soluzione tecnologica</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 bg-white shadow-sm">
                  <h4 className="font-bold text-lg text-center mb-2">Accuratezza previsioni</h4>
                  <div className="text-2xl font-bold text-amber-600 text-center">›85%</div>
                  <p className="text-sm text-gray-600 text-center mt-2">Precisione delle previsioni rispetto ai dati reali</p>
                </div>
                <div className="border rounded-lg p-4 bg-white shadow-sm">
                  <h4 className="font-bold text-lg text-center mb-2">Anticipo allerte fitopatie</h4>
                  <div className="text-2xl font-bold text-amber-600 text-center">›48h</div>
                  <p className="text-sm text-gray-600 text-center mt-2">Tempo di preavviso per interventi fitosanitari</p>
                </div>
                <div className="border rounded-lg p-4 bg-white shadow-sm">
                  <h4 className="font-bold text-lg text-center mb-2">Falsi positivi</h4>
                  <div className="text-2xl font-bold text-amber-600 text-center">‹15%</div>
                  <p className="text-sm text-gray-600 text-center mt-2">Percentuale di allerte non necessarie</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">Metodologia di misurazione</h4>
              <p className="text-sm mb-3">Le metriche saranno misurate attraverso:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Feedback strutturato dagli agricoltori</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Analisi dei dati di utilizzo della piattaforma</span>
                  </li>
                </ul>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Monitoraggio diretto dei consumi idrici</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sondaggi NPS trimestrali</span>
                  </li>
                </ul>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Comparazione con dati storici reali</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dashboard di monitoraggio KPI in tempo reale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center mt-8">
        <h2 className="text-xl font-bold text-green-800">Conclusione</h2>
        <p className="text-green-700 mt-1">Il progetto AgriShield Basilicata rappresenta un'opportunità strategica di partnership che integra i modelli idrici di Meteo Expert (PreGI) con i sistemi di monitoraggio fitopatie di Meteo365, creando una soluzione completa per la protezione e il benessere delle colture in Basilicata.</p>
      </div>
    </div>
  );
};

const DashboardFinalePartnership = DashboardFinale;
export default DashboardFinalePartnership;
