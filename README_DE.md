# Aufgaben zur Überprüfung für React

## Aufgabe 1

Props von der Elternkomponente an die Kindkomponenten übergeben

1. Erstelle in `App.jsx` ein Objekt mit grundlegenden Benutzerinformationen wie `name`, `email`, etc.
2. Erstelle eine separate Komponente in einer neuen Datei `DisplayUser.jsx`
3. Verwende diese neue Komponente in `App.jsx` und übergebe das Benutzerdaten-Objekt als Prop
4. In `DisplayUser`, rendere die empfangenen Props

## Aufgabe 2

Formulardaten verwalten

1. Erstelle eine neue Komponente `ContactForm.jsx` und verwende sie in `App`
2. Das Formular sollte drei Felder für Name, E-Mail und Textarea sowie einen Absende-Button haben
3. Verwalte den Zustand innerhalb der Komponente selbst
4. Wenn alle Felder ausgefüllt sind, zeige eine Erfolgsmeldung nach dem Absenden an
5. Logge die Daten in der Konsole und leere die Formularfelder

## Aufgabe 3

Routing für die in den vorherigen Aufgaben erstellten Komponenten hinzufügen

1. `DisplayUser` soll direkt auf der Startseite angezeigt werden
2. `ContactForm` sollte eine eigene neue Route unter `/contact/` haben
3. Nicht existierende Routen sollten eine Fehlermeldung mit einer neuen Komponente und Datei `NotFound.jsx` anzeigen
4. Erstelle eine Layout-Seite mit einer Navigation, die auf allen Seiten geteilt wird

## Aufgabe 4

Einen Kontext für die Benutzerinformationen erstellen

1. Erstelle einen neuen Kontext für die Speicherung der Benutzerinformationen
2. Erstelle einen Provider, um diese Informationen von `App.jsx` weiterzugeben
3. Konsumiere den Zustand in der `DisplayUser`-Komponente
4. Füge eine Funktionalität hinzu, damit das `ContactForm` das Ändern des Benutzernamens ermöglicht

## Aufgabe 5

Daten von einer API abrufen

1. Erstelle eine neue Seite `friends` und erstelle und verwende die Komponenten `FriendsList.jsx`
2. `FriendsList` sollte eine eigene neue Route unter `/friends/` haben
3. Mache in `FriendsList` eine Fetch-Anfrage an `https://jsonplaceholder.typicode.com/users`
4. Speichere die Daten in einem Zustand, der innerhalb der Komponente selbst verwaltet wird
5. Die Anfrage wird beim Laden der Seite gemacht. Verwende dafür `useEffect`
6. Verwende `Array.prototype.map`, um durch die Daten zu iterieren und die Freundesliste anzuzeigen
