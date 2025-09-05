# Kata JS Torneo - Boolkaichi 🥋🔥

## Fasi del Torneo

### Fase 1 - 🔥 Scelta dell'Arma
Ogni combattente sceglierà casualmente un'arma dalla lista disponibile.  
⚠️ Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.

---

### Fase 2 - 💪 Allenamento
Ogni combattente si sottoporrà a un allenamento che incrementerà (o forse no) la sua potenza.  
La potenza verrà moltiplicata per un numero casuale tra **1 e 100**.

---

### Fase 3 - 🎯 Qualificazione
Escludiamo dal torneo chi, dopo l'allenamento, non ha raggiunto una potenza di almeno **2000**.

---

### Fase 4 - ⚔️ Combattimento
I combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco.  
Regole principali:  
- Ogni combattente combatte una sola volta.  
- Vince chi ha la potenza più alta.  
- In caso di parità, vince chi "gioca in casa" (ossia chi viene prima nell'elenco).  
- ⚠️ Se il numero di combattenti è dispari, aggiungi un combattente "Robot" con potenza **4000** per garantire gli scontri.

---

### Fase 5 - 🏆 Premiazione
Tra tutti i vincitori degli scontri, saliranno sul podio i **3 combattenti con la potenza più alta**, in ordine decrescente.

---

## Bonus 🚀

### Bonus 1 - Pannello statistiche
- Crea una pagina HTML con le statistiche del torneo.  
- Mostra livelli di potenza, coppie di combattenti o il podio finale.  
- Adotta lo stile grafico che preferisci.

### Bonus 2 - Controlli interattivi
- Implementa pulsanti di **start** e **reset torneo** nell’interfaccia.

### AI Bonus ✨ - Extra stile
- Usa l’AI per integrare animazioni in CSS:  
  - Effetti **pulse** o **glow** sulle card dei combattenti.  
  - Animazioni per il podio finale.