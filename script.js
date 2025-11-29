// dictionnaire corrigé (doublons enlevés / fautes corrigées)
const dictionary = {
  "ana": "I",
  "hadi": "this",
  "hiya": "she",
  "ana lli": "i am who",
  "nta": "you",
  "7na": "us",
  "homa": "they",
  "rah": "it is",
  "lli": "that",
  "hna": "here",
  "5asni": "i need",
  "wayli": "no way",
  "kayn": "it's",
  "ah": "yes",
  "la": "no",
  "darori": "of course",
  "kanbghi": "i love",
  "khasni": "i need",
  "kif dayr": "how are you",
  "kif dayra": "how are you",
  "smah li": "sorry",
  "labas 3lik": "are you okay",
  "ana bghit": "i want",
  "salam": "hello",
  "labas": "i'm fine",
  "bslama": "goodbye / bye",
  "nti": "you",
  "bghit": "i want",
  "lma": "water",
  "shukran": "thank you",
  "fin": "where",
  "safi": "that's it",
  "wa5a": "ok",
  "wakha": "ok",
  "mzyan": "good",
  "wach": "do",
  "bghiti": "you want",
  "bghitini": "you want me",
  "bghitih": "you want it",
  "wach bghiti": "do you want",
  "yallah": "let's go",
  "yallah sir": "alright go",
  "fiya": "i am",
  "jo3": "hungry",
  "l3tch": "thirsty",
  "chnou": "what",
  "chnou bghiti": "what do you want",

  // verbes (infinitif)
  "nchrb": "to drink",
  "nakol": "to eat",
  "nl3b": "to play",
  "nchof":"to see",
  "n3rf": "to know",
  "n9ra": "to read",
  "ndir": "to do",
  "nkon": "to be",
  "na5od": "to take",
  "nakhod": "to take",
  "nfkr": "to think",
  "nmchi": "to go",
  "njrb": "to try",
  "nswl": "to ask",
  "n3yt": "to call",
  "nwlli": "to become",
  "n7t": "to put",
  "n9dr": "can",
  "nji": "to come",
  "n5dm": "to work",
  "nkhdm": "to work",
  "ntsnna": "to wait",

  // verbes conjugués (présent progressif / habituel)
  "kantsnna": "I am waiting",
  "kanchrb": "I am drinking",
  "kanakol": "I am eating",
  "kanl3b": "I am playing",
  "kanchof": "I am seeing",
  "kan3rf": "I know",
  "kan9ra":"I am reading",
  "kandir": "I am doing",
  "kankon": "I am being",
  "kana5od": "I am taking",
  "kanfkr": "I am thinking",
  "kanmchi": "I am going",
  "kanjrb": "I am trying",
  "kanswl": "I am asking",
  "kan3yt": "I am calling",
  "kanwlli": "I am becoming",
  "kan7t": "I am putting",
  "kan9dr": "I can",
  "kanji": "I am coming",
  "kan5dm": "I am working",
  "kankhdm": "I am working",

      //
      "ana kanchrb": "I am drinking",
      "ana kanakol": "I am eating",
      "ana kanl3b": "I am playing",
      "ana kanchof": "I am seeing",
      "ana kan3rf": "I know",
      "ana kan9ra":"I am reading",
      "ana kandir": "I am doing",
      "ana kankon": "I am being",
      "ana kana5od": "I am taking",
      "ana kanfkr": "I am thinking",
      "ana kanmchi": "I am going",
      "ana kanjrb": "I am trying",
      "ana kanswl": "I am asking",
      "ana kan3yt": "I am calling",
      "ana kanwlli": "I am becoming",
      "ana kan7t": "I am putting",
      "ana kan9dr": "I can",
      "ana kanji": "I am coming",
      "ana kan5dm": "I am working",
      "ana kankhdm": "I am working",
      "ana kantsnna": "I am waiting",

  // passé simple
  "chrbt": "I drank",
  "klit": "I ate",
  "l3bt": "I played",
  "chft": "I saw",
  "3rft": "I knew",
  "9rit": "I read",
  "drt": "I did",
  "knt": "I was",
  "5dit": "I took",
  "fkrt": "I thought",
  "mchit": "I went",
  "jrbt": "I tried",
  "swlt": "I asked",
  "3yt": "I called",
  "wllit": "I became",
  "7tit": "I put",
  "9drt": "I could",
  "drt": "I did",
  "tsnnit": "I waited",

  // passé composé / imparfait composé
  "knt kanchrb": "I was drinking",
  "knt kanakol": "I was eating",
  "knt kanl3b": "I was playing",
  "knt kanchof": "I was seeing",
  "knt kan3rf": "I knew",
  "knt kan9ra":"I was reading",
  "knt kandir": "I was doing",
  "knt kankon": "I was being",
  "knt kana5od": "I was taking",
  "knt kanfkr": "I was thinking",
  "knt kanmchi": "I was going",
  "knt kanjrb": "I was trying",
  "knt kanswl": "I was asking",
  "knt kan3yt": "I was calling",
  "knt kanwlli": "I was becoming",
  "knt kan7t": "I was putting",
  "knt kan9dr": "I was able to",
  "knt kantsnna": "I was waiting",
  
  // 
  "ana knt kanchrb": "I was drinking",
  "ana knt kanakol": "I was eating",
  "ana knt kanl3b": "I was playing",
  "ana knt kanchof": "I was seeing",
  "ana knt kan3rf": "I knew",
  "ana knt kan9ra":"I was reading",
  "ana knt kandir": "I was doing",
  "ana knt kankon": "I was being",
  "ana knt kana5od": "I was taking",
  "ana knt kanfkr": "I was thinking",
  "ana knt kanmchi": "I was going",
  "ana knt kanjrb": "I was trying",
  "ana knt kanswl": "I was asking",
  "ana knt kan3yt": "I was calling",
  "ana knt kanwlli": "I was becoming",
  "ana knt kan7t": "I was putting",
  "ana knt kan9dr": "I was able to",
  "ana knt kantsnna": "I was waiting",

  // futur (verbe)
  "ghanchrb": "I will drink",
  "ghanakol": "I will  eat",
  "ghanl3b": "I will  play",
  "ghanchof":"I will  see",
  "ghan3rf": "I will  know",
  "ghan9ra": "I will  read",
  "ghandir": "I will  do",
  "ghankon": "I will  be",
  "ghana5od": "I will  take",
  "ghanakhod": "I will  take",
  "ghanfkr": "I will  think",
  "ghanmchi": "tI will o go",
  "ghanjrb": "I will  try",
  "ghanswl": "I will  ask",
  "ghan3yt": "I will  call",
  "ghanwlli": "I will  become",
  "ghan7t": "I will  put",
  "ghan9dr": "I will be able",
  "ghanji": "I will  come",
  "ghan5dm": "I will  work",
  "ghankhdm": "I will  work",
  "ghantsnna": "I will  wait",

  // impératif
  "chrb": "drink",
  "chrbo": "drink it",
  "tchrb": "drink",
  "tchrbo": "drink it",
  "kol": "eat",
  "l3b": "play",
  "chof": "see",
  "3rf": "know",
  "9ra": "read",
  "dir": "do",
  "kon": "be",
  "5od": "take",
  "fkr": "think",
  "tfkr": "think",
  "fkr fiha": "think about it",
  "tfkr fiha": "think about it",
  "fkr fih": "think about it",
  "tfkr fih": "think about it",
  "sir": "go",
  "jrb": "try",
  "swl": "ask",
  "3yt": "call",
  "wlli": "become",
  "7t": "put",
  "9dr": "be able",
  "tsnna": "wait",
  "5assk": "you should",
  "5ssk": "you should",
  "5assek": "you should",
  "5ssek": "you should",
  "khssk": "you should",
  "khassek": "you should",
  "khssek": "you should",
  "khassk": "you should",

  "5assk tchrbo": "you should drink it",
  "5ssk tchrbo": "you should drink it",
  "5assek tchrbo": "you should drink it",
  "5ssek tchrbo": "you should drink it",
  "khssk tchrbo": "you should drink it",
  "khassek tchrbo": "you should drink it",
  "khssek tchrbo": "you should drink it",
  "khassk tchrbo": "you should drink it",


  // expressions courantes
  "inshallah": "if God wills",
  "hamdollah": "thank God",
  "lhamdollah": "thank God",
  "bzaf": "a lot",
  "bzzaf": "a lot",
  "chwiya": "a little",
  "daba": "now",
  "ghda": "tomorrow",
  "lbar7": "yesterday",
  "dima": "always",
  "3ad": "still",
  "sara7a": "honestly",
  "wach bssa7": "really",
  "michi mochkil": "no problem",
  "allah y3tik sa7a": "bless you",
  "allah i7fdk": "God protect you",
  "allah y7fdk": "God protect you",
  "allahy7fdk": "God protect you",
  "3adi": "it's normal",
  "kon hani": "don't worry",
  "koni hanya": "don't worry",
  "khti": "sister",
  "khoya": "brother",
  "5ti": "my sister",
  "5oya": "my brother",
  "rahowa": "there he",
  "rahiya": "there she is",
  "chno": "what",

  // nourriture / vie
  "khobz": "bread",
  "7lib": "milk",
  "atay": "tea",
  "9ahwa": "coffee",
  "makla": "food",
  "zan9a": "street",
  "khadma": "work",
  "mdrassa": "school",
  "so9": "market",
  "souk": "market",
  "tomobil": "car",

  // adverbs of frequency
  "3mrni": "i never",
  "3mrk": "you never",
  "3mrkom": "you never",
  "chi mrrat": "sometimes",
  "mrra mrra": "sometimes",
  "9lil": "rarely",

  // futur "going to" pas "will"
  "ghadi nchrb": "I'm going to drink",
  "ghadi nakol": "I'm going to eat",
  "ghadi nl3b": "I'm going to play",
  "ghadi nchof":"I'm going to see",
  "ghadi n3rf": "I'm going to know",
  "ghadi n9ra": "I'm going to read",
  "ghadi ndir": "I'm going to do",
  "ghadi nkon": "I'm going to be",
  "ghadi na5od": "I'm going to take",
  "ghadi nakhod": "I'm going to take",
  "ghadi nfkr": "I'm going to think",
  "ghadi nmchi": "I'm going to go",
  "ghadi njrb": "I'm going to try",
  "ghadi nswl": "I'm going to ask",
  "ghadi n3yt": "I'm going to call",
  "ghadi nwlli": "I'm going to become",
  "ghadi n7t": "I'm going to put",
  "ghadi n9dr": "I'm going can",
  "ghadi nji": "I'm going to come",

      // féminin
      "ana ghada nchrb": "I'm going to drink",
      "ana ghada nakol": "I'm going to eat",
      "ana ghada nl3b": "I'm going to play",
      "ana ghada nchof":"I'm going to see",
      "ana ghada n3rf": "I'm going to know",
      "ana ghada n9ra": "I'm going to read",
      "ana ghada ndir": "I'm going to do",
      "ana ghada nkon": "I'm going to be",
      "ana ghada na5od": "I'm going to take",
      "ana ghada nakhod": "I'm going to take",
      "ana ghada nfkr": "I'm going to think",
      "ana ghada nmchi": "I'm going to go",
      "ana ghada njrb": "I'm going to try",
      "ana ghada nswl": "I'm going to ask",
      "ana ghada n3yt": "I'm going to call",
      "ana ghada nwlli": "I'm going to become",
      "ana ghada n7t": "I'm going to put",
      "ana ghada n9dr": "I'm going can",
      "ana ghada nji": "I'm going to come",
      "ana ghada n5dm": "I'm going to work",

  ////
  "ana ghadi nchrb": "I'm going to drink",
  "ana ghadi nakol": "I'm going to eat",
  "ana ghadi nakl": "I'm going to eat",
  "ana ghadi nl3b": "I'm going to play",
  "ana ghadi nchof":"I'm going to see",
  "ana ghadi n3rf": "I'm going to know",
  "ana ghadi n9ra": "I'm going to read",
  "ana ghadi ndir": "I'm going to do",
  "ana ghadi nkon": "I'm going to be",
  "ana ghadi na5od": "I'm going to take",
  "ana ghadi nakhod": "I'm going to take",
  "ana ghadi nfkr": "I'm going to think",
  "ana ghadi nmchi": "I'm going to go",
  "ana ghadi njrb": "I'm going to try",
  "ana ghadi nswl": "I'm going to ask",
  "ana ghadi n3yt": "I'm going to call",
  "ana ghadi nwlli": "I'm going to become",
  "ana ghadi n7t": "I'm going to put",
  "ana ghadi n9dr": "I'm going can",
  "ana ghadi nji": "I'm going to come",
  "ana ghadi n5dm": "I'm going to work",

  ///
  "ana ghadi": "I'm going",
  "ana ghada": "I'm going",
  "ghadi": "going",
  "ghada": "going",

  // prépositions
  "m3a": "with",
  "bla": "without",
  "3la": "on",
  "7da": "nex to",
  "ta7t": "under",
  "t7t": "under",
  "mn": "from",

  // connecteurs logiques
  "w": "and",
  "o": "and",
  "walakin": "but",
  "7it": "because",
  "7itach": "because",
  "bach": "so that",
  "idan": "so",
  "ila": "if",
  "ida": "if",

  // adj (de base)
  "kbir": "big",
  "sghir": "small (young)",
  "zwin": "beautiful",
  "khayb": "ugly",
  "5ayb": "ugly",
  "s3ib": "hard",
  "sahl": "easy",
  "sahel": "easy",
  "jdid": "new",
  "9dim": "old",
  "qdim": "old",
  "sri3": "fast",
  "sari3": "fast",
  "bati2": "slow",

  // emotions
  "fr7an": "happy",
  "m9l9": "sad",
  "mqlq": "sad",
  "m3ssb": "angry",
  "3yan": "tired",
  "mstresse": "stressed",
  "khayf": "scared",
  "mrta7": "relaxed",

  // ===== POLITESSE =====
  "3afak": "please",
  "sm7 lia": "excuse me",
  "sm7 li": "excuse me",
  "smh lia": "excuse me",
  "smh li": "excuse me",
  "mr7ba": "welcome",
  "mar7ba": "welcome",
  "tfddl": "go ahead",

  // ===== QUESTIONS =====
  "fin sakn": "where do you live",
  "bch7al hadchi": "how much is this",
  "fin ghadi": "where are you going",
  "3lach": "why",
  "m3a mn": "with who",
  "wach fhemti": "did you understand",

  
  // ===== TEMPS =====
  "lyom": "today",
  "lyoma": "today",
  "daba daba": "right now",
  "3awtani": "again",
  "daba": "now",
  "db": "now",
  "simana jaya": "next week",
  "ghda": "tomorrow",
  "lbar7": "yesterday",
  "lbare7": "yesterday",
  "sifr": "zero",
  "zero": "zero",
  "wa7d": "one",
  "joj": "two",
  "tlata": "three",
  "rb3a": "four",
  "5msa": "five",
  "sta": "six",
  "sb3a": "seven",
  "tmnya": "eight",
  "ts3od": "nine",
  "3chra": "ten",

  // autres
  "imta": "when",
  "9bl": "before",
  "chkon": "who is",
  "mnb3d": "after",
  "hada": "that",
  "hadchi": "this",
  "mnba3d": "after",
  "lfo9": "upstairs",
  "bllil": "at night",
  "sba7": "morning"
};

// éléments DOM (assure-toi d'avoir <textarea id="input"> et <div id="output">)
const input = document.getElementById("input");
const output = document.getElementById("output");

// utilitaire : capitaliser première lettre
function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// utilitaire : échappe une clé pour RegExp
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// fonction qui traduit un seul "mot" (ici un token)
function translateWord(word) {
  let original = word;
  word = word.toLowerCase();

  let isNegative = false;
  let isFuture = false;
  let pronoun = "";

  // 1) négation ma...ch
  if (word.startsWith("ma") && word.endsWith("ch") && word.length > 4) {
    isNegative = true;
    word = word.slice(2, -2).trim();
  }

  // 2) futur ghadi
  if (word.startsWith("ghadi")) {
    isFuture = true;
    word = word.replace("ghadi", "").trim();
  }

  // 3) suffixes pronoms (hom, ha, o)
  if (word.endsWith("hom")) {
    pronoun = " them";
    word = word.slice(0, -3);
  } else if (word.endsWith("ha")) {
    pronoun = " it";
    word = word.slice(0, -2);
  } else if (word.endsWith("o")) {
    pronoun = " it";
    word = word.slice(0, -1);
  }

  // 4) traduction de base
  if (dictionary[word]) {
    let base = dictionary[word];

    // si base est un infinitif "to ..."
    

    // 5) négation anglaise (plus correcte)
    if (isNegative) {
      if (base.startsWith("will ")) {
        base = base.replace("will ", "will not ");
      } else if (/^i\s+/i.test(base)) {
        // "i want" -> "i do not want"
        base = base.replace(/^i\s+/i, "i do not ");
      } else {
        // verbe simple -> "do not <verb>"
        base = "do not " + base;
      }
    }

    return base + pronoun;
  }

  // mot inconnu : retourne l'original (préserve casse)
  return original;
}

// fonction de traduction du texte complet
function translateText(text) {
  let original = text;
  let sentence = text.toLowerCase();

  // remplacer d'abord les expressions multi-mots (on échappe la clé pour RegExp)
  const keys = Object.keys(dictionary).sort((a,b) => b.length - a.length);
  for (let key of keys) {
    if (key.includes(" ")) {
      const re = new RegExp("\\b" + escapeRegExp(key) + "\\b", "gi");
      sentence = sentence.replace(re, dictionary[key]);
    }
  }

  // split simple par espaces (tokens)
  let words = sentence.match(/\b[\w3]+|\S/g) || [];
  let result = words.map(word => translateWord(word));

  let translated = result.join(" ");

  // majuscule initiale si texte original commençait par majuscule
  if (original.charAt(0) === original.charAt(0).toUpperCase()) {
    translated = capitalizeFirstLetter(translated);
  }

  return translated;
}

// traduction live
input.addEventListener("input", () => {
  output.textContent = translateText(input.value);
});
