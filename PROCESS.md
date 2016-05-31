#Dag 1 - 30 mei
Overwegen van andere libraries gebruiken om bewerkingen op datastructuren te kunnen gebruiken. Het is de vraag of een hele library importeren wel efficient is om slechts een paar functies te kunnen gebruiken, dus het zal beter zijn om kleine dingen zelf te implementeren en voor grotere functies libraries te gebruiken.  
De floorplans zullen best crowded worden met veel data, zoals de stipjes die de werknemers weergeven en de zones van de ruimtes. Soortgelijke visualisaties maken ook gebruik van een soort heatmap, waarbij ruimtes ingekleurd worden adhv een waarde in die ruimte. Het is de vraag of dat toepasbaar is in dit project (bijvoorbeeld bij Hazium concentraties) of dat dat te veel afleidt met zoveel data.

* Begonnen aan project proposal
* Maken van een ruwe schets van het product
* Andere libraries zoals jQuery and Underscore zijn misschien handig
* Leidt een heatmap adhv Hazium concentraties de gebruiker af?

#Dag 2 - 31 mei
Schets die laat zien wat er tevoorschijn komt als er met UI elements geinteract wordt en laat ook zien welke functionaliteit in welk bestand geschreven wordt.  
Het is belangrijk om te kijken hoe de data geformat is en of dit consistent gedaan is over alle files. Dan hoeft er geen onderscheid gemaakt te worden tussen verschillende files.  
Het verwerken van de data kan veel tijd kosten omdat er veel timestamps zijn met grote objecten. Het is een idee om de data online op te slaan in een database en dan met queries bepaalde data op te vragen, zodat onnodige data niet geladen wordt. Dat scheeldt bandwidth en laadtijd.

* Gedetailleerde schetsen, misschien met nieuwe ideeen
* Splits de code op in meerdere bestanden of modules
* UI los van data management los van algoritmes
* Bekijk de format van de data
* Manier van opslaan van data
* Manier van het verwerken van data
