# Dag 1 - 30 mei  
Overwegen van andere libraries gebruiken om bewerkingen op datastructuren te kunnen gebruiken. Het is de vraag of een hele library importeren wel efficient is om slechts een paar functies te kunnen gebruiken, dus het zal beter zijn om kleine dingen zelf te implementeren en voor grotere functies libraries te gebruiken.  
De floorplans zullen best crowded worden met veel data, zoals de stipjes die de werknemers weergeven en de zones van de ruimtes. Soortgelijke visualisaties maken ook gebruik van een soort heatmap, waarbij ruimtes ingekleurd worden adhv een waarde in die ruimte. Het is de vraag of dat toepasbaar is in dit project (bijvoorbeeld bij Hazium concentraties) of dat dat te veel afleidt met zoveel data.

* Begonnen aan project proposal
* Maken van een ruwe schets van het product
* Andere libraries zoals jQuery and Underscore zijn misschien handig
* Leidt een heatmap adhv Hazium concentraties de gebruiker af?

# Dag 2 - 31 mei  
Schets die laat zien wat er tevoorschijn komt als er met UI elements geinteract wordt en laat ook zien welke functionaliteit in welk bestand geschreven wordt.  
Het is belangrijk om te kijken hoe de data geformat is en of dit consistent gedaan is over alle files. Dan hoeft er geen onderscheid gemaakt te worden tussen verschillende files.  
Het verwerken van de data kan veel tijd kosten omdat er veel timestamps zijn met grote objecten. Het is een idee om de data online op te slaan in een database en dan met queries bepaalde data op te vragen, zodat onnodige data niet geladen wordt. Dat scheeldt bandwidth en laadtijd.

* Gedetailleerde schetsen, misschien met nieuwe ideeen
* Splits de code op in meerdere bestanden of modules
* UI los van data management los van algoritmes
* Bekijk de format van de data
* Manier van opslaan van data
* Manier van het verwerken van data

# Dag 3 - 1 juni  
Het prototype brengt de schetsen tot leven met interactieve elementen. Er kan van verdiepingen geswitcht worden met de drie knoppen boven het canvas. De dag kan veranderd worden met een dropdown. Een specifieke werknemer van het bedrijf kan ook geselecteerd worden met een dropdown. De tijd van de dag kan gekozen worden met een slider, die de gehele dag kan afspelen met een "play"-knop. Dan bewegen de zichtbare stipjes op het canvas om te laten zien waar de werknemer de dag zijn gelopen.  
Het prototype heeft nu nog een probleem dat als het document geladen wordt, dat de eerste floorplan niet op het canvas getekend wordt. De kleur van de knop verandert wel. Het probleem zit hem misschien in dat de afbeelding nog niet helemaal geladen is als de klik gesimuleerd wordt. Een oplossing voor dit probleem is wel te vinden, maar dat is wel een omweg. Er moet eerst een nieuwe instance van een Image geinitialiseerd worden en dan kan daar een onload callback aan verbonden worden. Zo is het mogelijk om zowel de knop rood te maken als de eerste floorplan op het canvas te tekenen.  
Voor dit prototype staat nog alle code in UI.js, maar de bedoeling is dat uiteindelijk de functionaliteit gesplitst wordt in meerdere files om het overzichtelijk te houden.  
Beginnen bij bijvoorbeeld stoffen in zones als linegraph over de twee weken en dan als je gekkigheden ziet, dat je dan kan inzoomen op die gekkigheid en dan pas kunt kijken wie er in die zones is geweest, wat er is gebeurt. Je kunt de data aggregeren misschien over een half uur in plaats van de timestamps in de data van 5 minuten omdat dat best wel veel data is. Je kunt dan wel inzoomen op dat half uur voor de timestamps zelf.

* Prototype maken
* Interactieve elementen implementeren
* Libraries: jQuery, d3, d3.slider
* Probleem: het simuleren van een klik op een knop on load
* Oplossing: Omweg
* Alles staat nu nog in UI.js
* Omdraaien van uitgangspunt

# Dag 4 - 2 juni
Dit is een voorbeeld van een slider die wij willen gebruiken in ons eindproduct: https://plot.ly/javascript/range-slider/  
De data die is aangeleverd is ongelofelijk veel dus we moeten een slimme manier bedenken om het efficient op te slaan zodat het snel doorzocht kan worden. Er kan PostgreSQL gebruikt worden op een localhost server (port 5432) maar het is dan nog niet zeker of anderen er ook bij kunnen.  
De server room is zijn eigen zone en wordt niet genoteerd als getal. Dat kan een probleem zijn bij het queryen van de SQL database dus geven we de server room zijn eigen getal 99.

* Range slider met zoom voorbeelden opzoeken
* PostgreSQL gebruiken voor het opslaan van de data (localhost)
* Meerdere tabellen in de haztech database
* De zone in de proxout csv file is niet altijd een integer, maar is soms ook de server room
