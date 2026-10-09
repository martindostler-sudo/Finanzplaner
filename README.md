# Finanz- & Altersvorsorge-Planer Pro (V15)

Persönliches Planungstool für die eigene Vermögens- und Ruhestandsplanung: Vermögensaufbau, Entnahmeplanung im Ruhestand, Steuer- und Rentenberechnungen (Deutschland), Monte-Carlo-Stresstests, Sequenzrisiko-Analyse und verschiedene Entnahmestrategien (inkl. Liquiditätspuffer-/"Bucket"-Strategie).

## ⚠️ Wichtiger Hinweis

Dieses Tool ist ein **privates Planungs- und Lernprojekt** und **keine Steuer-, Finanz- oder Anlageberatung**. Alle Berechnungen basieren auf vereinfachten Annahmen (u. a. deutsches Steuerrecht, Stand 2026) und können Fehler, Lücken oder Vereinfachungen enthalten, die nicht auf jeden Einzelfall zutreffen. Die Nutzung erfolgt auf eigene Verantwortung – für verbindliche Entscheidungen bitte einen Steuerberater oder eine unabhängige Finanzberatung hinzuziehen.

## Wie es funktioniert

- Eine einzelne HTML-Datei (`index.html`), läuft komplett im Browser – kein Server, kein Backend.
- Alle eingegebenen Daten werden ausschließlich **lokal im Browser** gespeichert (`localStorage`). Es werden keine Daten an einen Server übertragen oder irgendwo außerhalb des eigenen Geräts/Browsers gespeichert.
- Öffnen reicht: lokal als Datei doppelklicken, oder über GitHub Pages aufrufen.
- Eine "Produktiv"- und "Test"-Umgebung lassen sich oben rechts umschalten, um mit Testdaten zu experimentieren, ohne die echten Daten zu überschreiben.

## Umfang

- Vermögensaufbau- und Entnahmeprojektion bis Alter 100 (getrennte Ansicht für Anspar- und Entnahmephase)
- Steuerliche Berechnung: Abgeltungsteuer, Teilfreistellung, Sparerpauschbetrag, Vorabpauschale, gesetzliche Rente, betriebliche Altersvorsorge (bAV), Grundfreibetrag, KV/PV-Beiträge
- Monte-Carlo-Stresstest, Sequenzrisiko-Test, feste Stresspfade (Crash, niedrige Rendite, hohe Inflation, kombiniert)
- Verschiedene Entnahmereihenfolgen: Depot zuerst, Liquidität zuerst, proportional, steueroptimiert, Liquiditätspuffer-("Bucket"-)Strategie
- Szenario-Vergleiche mit Monte-Carlo-Stresstest (Pflegekosten, Einzelausgaben, Entnahmereihenfolge, Puffergröße)

## Wichtige Annahmen (Stand 2026)

- Sparerpauschbetrag: 1.000 € (Einzelveranlagung) / 2.000 € (Zusammenveranlagung)
- Einkommensteuertarif nach §32a EStG, 2026er-Werte
- Besteuerungsanteil der gesetzlichen Rente: 84 % (Rentenbeginn 2026), steigt in den Folgejahren
- Diese Werte ändern sich jährlich durch den Gesetzgeber – bei Nutzung in späteren Jahren sollten die entsprechenden Konstanten im Code aktualisiert werden (im Code jeweils mit Kommentar gekennzeichnet).

## Technik

- Reines HTML/CSS/JavaScript, kein Build-Prozess.
- [TailwindCSS](https://tailwindcss.com/) (CDN) für das Styling, [Plotly.js](https://plotly.com/javascript/) (CDN) für die Diagramme.
- Benötigt eine Internetverbindung zum Laden dieser beiden CDN-Ressourcen; die eigentliche Berechnung läuft vollständig lokal im Browser.

## Lizenz

Siehe [LICENSE](./LICENSE) (MIT) – Code frei nutzbar, aber ohne jede Gewähr (siehe Hinweis oben).
