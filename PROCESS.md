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

# Dag 5 - 3 juni
Hoe kunnen we de data efficient storen in een database zodat we bijvoorbeeld per verdieping informatie kunnen opvragen, wat sneller is dan alle informatie voor alle verdiepingen tegelijk opvragen.  
Het is misschien wenselijk om de tabel in te delen op verdieping en dan op zones, dan krijgt de tabel hierarchie en kunnen waarden snel worden opgezocht.  
In de sqlShell (psql) kun je bij de lokale database met de volgende gegevens -  
Server: localhost  
Database: haztech  
Port: 5432  
Username: postgres  
De data die is aangeleverd door de VACommunity is vaak inconsistent in de JSON bestanden: soms staat er een dubbele punt tussen de floor/zone en de sensornaam, maar andere keren niet. Dat is een aandachtspunt bij het verwerken van de data. Ook is belangrijk dat niet alle zones een sensor hebben. Daar is bij het lezen van de data opgelet.

* Localhost PostgreSQL proberen te accessen
* Syntax probleempjes in PostgreSQL
* Bedenken van het efficient storen van de data in een database
* Presentatie
* Inconsistente JSON data
* Niet alle zones hebben een sensor en niet alle sensoren hangen in alle zones

# Dag 6 - 6 juni
Voor elke floor komt een aparte pagina met een lijngrafiek. Er komt ook nog een grafiek voor hoeveel mensen er zijn gescand per half uur en dat wordt gevisualiseerd voor het hele gebouw, per verdieping en per zone. Het aantal gescande mensen per half uur geeft over een dag een indicatie van hoeveel mensen er die dag in het gebouw waren maar omdat er geen specifieke scan is voor wanneer iemand het gebouw verlaat kan daar niet makkelijk een linegraph van gemaakt worden. Er komt ook een heatmap per verdieping (3). Er zijn dan drie kaarten omdat de HVAC- en proxzones net iets anders zijn. De eerste is gewoon een floorplan met elke ruimte en de andere twee zijn heatmaps over de verschillende soorten zones en zones zelf. Er is besloten om voorlopig niet te werken met een database om eerst een goed overzicht te krijgen van de data en dus eerst lokaal in te laden (dat werkt nu nog best snel). Verdieping 1 werkt in zijn geheel, met een dropdown om de sensordata te kiezen en met checkboxes om zones aan- of uit te zetten. De sourcecode hiervoor kan ook gebruikt worden voor verdiepingen 2 en 3.

* Elke floor data op een andere pagina
* Linegraph voor hoeveel mensen er gescand zijn
* Heatmaps
* Uiteindelijk een zoom slider maken voor de data
* Checkboxes voor de zones op een floor
* Voorlopig lokaal inladen
* Wildcard string functie gevonden op: http://stackoverflow.com/questions/26246601/wildcard-string-comparison-in-javascript
* Checken of een variabele een array of object literal is: http://stackoverflow.com/questions/8511281/check-if-a-variable-is-an-object-in-javascript

# Dag 7 - 7 juni
Vandaag gaan we werken aan de linegraphs van floor 2 en 3. De data is bijna hetzelfde als op floor 1, maar de HVAC zones zijn weer anders dus moet gekeken worden naar welke data niet beschikbaar is voor welke zone op de floors. Floor 3 kan iets moeilijker zijn omdat sommige data die per zone is voor sommige zones er wel zijn en voor zommige niet, dus moet dat per soort data gekeken worden welke checkboxes uitgezet moeten worden.  
De data voor floor 2 en floor 3 zijn anders opgebouwd dan voor floor 1. De data van floor 1 was een array van objecten, met elk object de property "message", wat weer een object was met de timestamp en de sensor readings en de property "offset", wat het aantal seconden vanaf het begin van de metingen was. De data van floor 2 en 3 zijn ook arrays met objecten, maar deze objecten zijn meteen al de sensor readings, en is dus niet opgebouwd uit "message" and "offset" properties.  
Floor 2 is vandaag gefixt. De kleuren die gebruikt zijn komen van http://www.mikesclark.com/web_management/html_colors.html, omdat colorbrewer geen paletten van 19 kleuren toestaat.  
Landingspagina index.html toegevoegd. De oude inhoud van index.html is verplaatst naar general.html, om aan te geven dat het hier om general data gaat over het gehele gebouw. Dat creeert ruimte voor achtergrondinformatie en uitleg op index.html  
De data van floor 3 is weer inconsistent. De sensor voor VAV REHEAT Damper Position is voor alle zones waar die beschikbaar is gegeven als F_3_Z_[nummer] VAV REHEAT Damper Position, BEHALVE voor zone 9. Dan is het F_3_Z_9 VAV Damper Position. Dus dat even veranderd in de data.  
Functionaliteit voor floor 3 is toegevoegd, en als er voor een zone geen sensor data is, fade deze uit en wordt de checkbox niet beschikbaar gemaakt.  
Comments in de javascript files proppen

* Werken aan floor 2 en 3 vandaag
* Floor 2 en 3 data ziet er net iets anders uit dan floor 2 data
* Kleuren van floor 2: http://www.mikesclark.com/web_management/html_colors.html
* index.html > general.html (en index.css > general.css)
* Nieuwe index.html als landingspagina
* F_3_Z_9 VAV Damper Position > F_3_Z_9 VAV REHEAT Damper Position
* Floor 3 werkt nu
* Comments in de js files stoppen

# Dag 8 - 8 juni
Vandaag gaan we kijken naar een brush slider om in te zoomen op een specifiek gedeelte van de linegraph (Bron: http://bl.ocks.org/natemiller/7dec148bb6aab897e561).  
Het is misschien ook leuk om het design van onze visualisatie wat op te leuken.  
Lijnen springen nu naar de voorgrond als je over de lijn hovert.  
De brush voor general.html is gelukt  
De brush voor floor1.html is ook gelukt met minimale verandering van de brush in general.html  
Floors 2 en 3 zijn ook gelukt, heeft wel iets meer tijd gekost en het duurde ook wel even voordat er een nasty bug uit was die ervoor zorgde dat de grafiek links van de y-as kon verschijnen.

* Brush/slider voor zoom: http://bl.ocks.org/natemiller/7dec148bb6aab897e561
* Opmaak visualisatie regelen misschien
* moveToFront prototype toegevoegd aan d3 selection voor een popout effect
* Brush voor general.html is gelukt
* Brush voor floor1.html is gelukt
* Floors 2 en 3 zijn ook gelukt, bugs zijn er (voorlopig) ook uit

# Dag 9 - 9 juni
Vandaag gaan we even de comments opschonen in de HVAC linegraph code en kijken of we deze in modules kunnen splitsen voor als alle visualisaties op een pagina komen.  
De tekst op de x as van de linegraphs staat niet meer scheef, dat was nog een rest stuk van toen de tekst met een hoek van 45 graden stond, maar dat is nu niet meer van toepassing.  
Er is nu een extra pagina voor alleen de resultaten die uit de visualisaties komen, zoals patronen van een dagelijkse werkdag, gekke dingen en relaties tussen prox card data en ruimtes van het gebouw.  
Even snel de resultaten beschrijven.  
Snel de opvallendste resultaten kort samengevat in findings.html

* Comments opschonen
* Voorbereidend werk op als alles bij elkaar komt
* De tekst op de x assen staat nu horizontaal ipv diagonaal
* Nieuwe pagina: findings.html
* Kort de bevindingen beschrijven als klad op findings.html
* Voor alle linegraphs even kort de bevindingen samengevat in findings.html onder kopje "klad"

# Dag 10 - 10 juni
Vandaag presenteren we de alpha versie van ons product, wat in dit geval de alpha versies zijn van ons afzonderlijke werk. Er zijn al wat kleine resultaten uit de linegraphs gekomen maar dat moeten we nog linken aan de proxreaders en de Hazium concentraties.  
Bij het hoveren over een lijn, haal hem dan niet naar voren met parentNode.appendChild, maar doe dan de opacities van de andere lijnen lager en houd de huidige opacity op 1.

* Presentaties van alpha versies
* Er is nog niet makkelijk een relatie te vinden omdat de visualisaties nog op aparte pagina's staan
* Opacities van de andere lijnen lager zetten bij hover over een lijn
