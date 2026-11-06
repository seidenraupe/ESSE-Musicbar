export const venue = {
  name: "ESSE Musicbar",
  place: "Zeughaus 1, Zeughausstrasse 52, 8400 Winterthur",
  phone: "+41 52 202 57 46",
  phoneHref: "tel:+41522025746",
  email: "info@esse.bar",
  liveSite: "https://www.esse-musicbar.ch/",
  seats: 50,
  capacity: 70,
} as const;

export const hours = [
  { day: "Montag", text: "Geschlossen, ausser bei einer Veranstaltung ab 17:00" },
  { day: "Dienstag", text: "Geschlossen, ausser bei einer Veranstaltung ab 17:00" },
  { day: "Mittwoch", text: "Mittagstisch 12:00–14:00, Reservation nötig. Abends nur bei einer Veranstaltung ab 17:00" },
  { day: "Donnerstag", text: "Café-Bar ab 17:00, Konzert 20:15" },
  { day: "Freitag", text: "Café-Bar ab 17:00, Konzert 20:15" },
  { day: "Samstag", text: "Bei öffentlichen Veranstaltungen ab 17:00" },
  { day: "Sonntag", text: "Café-Bar ab 17:00, Konzert 19:30" },
] as const;

export type Genre = "Jazz" | "Blues" | "Soul" | "Folk & More" | "Special";

export const genres: Genre[] = ["Jazz", "Blues", "Soul", "Folk & More", "Special"];

export type Concert = {
  slug: string;
  title: string;
  date: string;
  time: string;
  genre: Genre;
  summary: string;
  sourceUrl: string;
};

export const concerts: Concert[] = [
  {
    slug: "lines-in-space",
    title: "Lines in Space – The Music Of Lennie Tristano",
    date: "2026-11-06",
    time: "20:15",
    genre: "Jazz",
    summary:
      "Ein Abend über den blinden Pianisten und Lehrer Lennie Tristano, der Cool Jazz, freie Improvisation und eine ganze Schülergeneration geprägt hat.",
    sourceUrl:
      "https://www.esse-musicbar.ch/index.php/veranstaltungen/live-veranstaltiungen/2729-lines-in-space-the-music-of-lennie-tristano/2026-11-06-20-15",
  },
  {
    slug: "cash-only",
    title: "Cash Only – Heinz Flückiger spielt Johnny Cash",
    date: "2026-11-08",
    time: "19:30",
    genre: "Folk & More",
    summary:
      "Heinz Flückiger mit Jim Bows und Vik Stadelmann, im Trio und ohne Showprogramm. Teil der Reihe Folk & More.",
    sourceUrl:
      "https://www.esse-musicbar.ch/index.php/veranstaltungen/live-veranstaltiungen/2696-cash-only-heinz-flueckiger-spielt-johnny-cash/2026-11-08-19-30",
  },
  {
    slug: "hans-theessink",
    title: "Hans Theessink – Roots & Blues",
    date: "2026-11-11",
    time: "20:15",
    genre: "Blues",
    summary:
      "Soloabend mit dem niederländischen Roots- und Blues-Erzähler: Gitarre als One-Man-Band, Mundharmonika und Lieder von der Strasse.",
    sourceUrl:
      "https://www.esse-musicbar.ch/index.php/veranstaltungen/live-veranstaltiungen/2622-hans-theessink-roots-blues/2026-11-11-20-15",
  },
  {
    slug: "jochen-baldes-basho",
    title: "Jochen Baldes Bashô – The Sound of Haiku",
    date: "2026-11-12",
    time: "20:15",
    genre: "Jazz",
    summary:
      "Der Zürcher Saxophonist übersetzt Haiku in ein Quartett mit Tenorsaxophon, Bassklarinette, Bass und Schlagzeug. Das Album erscheint bei Unit Records.",
    sourceUrl:
      "https://www.esse-musicbar.ch/index.php/veranstaltungen/live-veranstaltiungen/2697-jochen-baldes-basho-the-sound-of-haiku/2026-11-12-20-15",
  },
  {
    slug: "luumu",
    title: "Luumu – Nordischer Folk-Jazz",
    date: "2026-11-13",
    time: "20:15",
    genre: "Folk & More",
    summary:
      "Adina Friis mit Simon Iten, Andreas Schelker und Geiger Gabriel Miranda Martínez. Lieder aus Lappland, einmal im Jahr in der ESSE.",
    sourceUrl:
      "https://www.esse-musicbar.ch/index.php/veranstaltungen/live-veranstaltiungen/2747-luumu-5/2026-11-13-20-15",
  },
  {
    slug: "pink-pedrazzi",
    title: "Pink Pedrazzi & The Big Easy",
    date: "2026-11-15",
    time: "19:30",
    genre: "Folk & More",
    summary:
      "Der Basler Musiker kehrt jährlich mit Americana, Blues und Country nach Winterthur zurück.",
    sourceUrl:
      "https://www.esse-musicbar.ch/index.php/veranstaltungen/live-veranstaltiungen/2738-pink-pedrazzi-the-big-easy-7/2026-11-15-19-30",
  },
  {
    slug: "patrick-bianco-cannonsoul",
    title: "Patrick Bianco’s Cannonsoul",
    date: "2026-11-18",
    time: "20:15",
    genre: "Soul",
    summary:
      "Hard-Bop und Soul-Jazz nach Cannonball Adderley, mit dem Zürcher Altsaxophonisten und einer internationalen Besetzung.",
    sourceUrl:
      "https://www.esse-musicbar.ch/index.php/veranstaltungen/live-veranstaltiungen/2674-patrick-bianco-cannonsoul/2026-11-18-20-15",
  },
  {
    slug: "bernolds-five",
    title: "Bernold’s Five feat. Bettina Tuor – As Time Goes By",
    date: "2026-11-20",
    time: "20:15",
    genre: "Jazz",
    summary:
      "Eine Reise durch das Great American Songbook. Klassiker des 20. Jahrhunderts, neu gesetzt.",
    sourceUrl:
      "https://www.esse-musicbar.ch/index.php/veranstaltungen/live-veranstaltiungen/2735-bernolds-five-feat-bettina-tuor-as-time-goes-by/2026-11-20-20-15",
  },
  {
    slug: "handsome-hank",
    title: "Handsome Hank & The Moskitos of Love",
    date: "2026-11-22",
    time: "19:30",
    genre: "Folk & More",
    summary:
      "Western Swing, Honky Tonk und Balladen. Dazu Cover, mit denen Hank seit 1996 unterwegs ist.",
    sourceUrl:
      "https://www.esse-musicbar.ch/index.php/veranstaltungen/live-veranstaltiungen/2702-handsome-hank-the-moskitos-of-love/2026-11-22-19-30",
  },
  {
    slug: "coaljazz-indigo-shift",
    title: "Doppel-Konzert: CoalJazz feat. Judith Zürcher & Indigo Shift",
    date: "2026-11-28",
    time: "20:15",
    genre: "Jazz",
    summary:
      "Zwei Bands, ein Schlagzeuger: Walter Vitale. CoalJazz spielt von Swing und Bossa bis Funk, Judith Zürcher singt.",
    sourceUrl:
      "https://www.esse-musicbar.ch/index.php/veranstaltungen/live-veranstaltiungen/2704-coaljazz-indigo-shift/2026-11-28-20-15",
  },
  {
    slug: "lucas-pubquiz",
    title: "Luca’s Pubquiz",
    date: "2026-12-02",
    time: "19:30",
    genre: "Special",
    summary:
      "Musik, Filme, Kurioses, im Team und ohne Handy. Das Gewinnerteam erhält einen Gutschein für einen Pitcher Appenzeller.",
    sourceUrl: "https://www.esse-musicbar.ch/index.php/veranstaltungen/pub-quiz",
  },
];

export const ticketCategories = [
  {
    id: "standard",
    title: "Konzert-Ticket Standard",
    detail: "Fester Sitzplatz und garantierter Einlass.",
  },
  {
    id: "genuss",
    title: "Genuss-Ticket",
    detail: "Konzert plus Welcome-Drink.",
  },
  {
    id: "tavolata",
    title: "Konzert & Tavolata",
    detail: "Sitzplatz im Gastrobereich, Menü inklusive.",
  },
] as const;

export const board = [
  {
    name: "Danielle Adams",
    role: "Co-Präsidium, Mitgliederverwaltung und Repräsentation",
    email: "danielle.adams@esse.bar",
    image: "/media/team/danielle-adams.jpg",
  },
  {
    name: "Thomas Schmid",
    role: "Co-Präsidium, Booking und Gastronomie",
    email: "info@thomas-schmid.net",
    image: "/media/team/thomas-schmid.jpg",
  },
  {
    name: "Stefan Blum",
    role: "Vorstand, Finanzen",
    email: "stefan.blum@esse-musicbar.ch",
    image: "/media/team/stefan-blum.jpg",
  },
  {
    name: "André Haelg",
    role: "Delegierter des Fördervereins",
    email: "andre.haelg@esse.bar",
    image: "/media/team/andre-haelg.jpg",
  },
  {
    name: "Dominik Garbauer",
    role: "Vorstand, Projekte",
    email: "dominik.garbauer@esse.bar",
    image: "/media/team/dominik-garbauer.jpg",
  },
  {
    name: "Thomas Wicki",
    role: "Vorstand, Gastronomie bis Ende 2026",
    email: "thomas.wicki@esse.bar",
    image: "/media/team/thomas-wicki.jpg",
  },
  {
    name: "Dorothea Keiser",
    role: "Ehrenmitglied",
    email: "",
    image: "/media/team/dorothea-keiser.jpg",
  },
] as const;

export const navigation = [
  { href: "/programm", label: "Programm" },
  { href: "/bar", label: "Bar & Küche" },
  { href: "/location", label: "Location" },
  { href: "/vereine", label: "Vereine" },
  { href: "/info", label: "Info" },
] as const;
