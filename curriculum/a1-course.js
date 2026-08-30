(function () {
  const unit = (id, title, subtitle, minutes, goal, vocabulary, dialogue, grammar, quiz, speaking, writing) => ({
    id, title, subtitle, minutes, goal, vocabulary, dialogue, grammar, quiz, speaking, writing,
    audio: `audio/a1-${id}.mp3?v=3`
  });

  window.A1_COURSE = {
    level: "A1",
    title: "Τα πρώτα σου νορβηγικά",
    description: "Ένα ολοκληρωμένο πρόγραμμα 30 ενοτήτων για να καταλαβαίνεις και να χρησιμοποιείς απλά νορβηγικά στην καθημερινότητα.",
    outcomes: [
      "Παρουσιάζεις τον εαυτό σου και κάνεις απλές ερωτήσεις",
      "Καταλαβαίνεις αργή και καθαρή καθημερινή ομιλία",
      "Διαχειρίζεσαι βασικές συναλλαγές, μετακινήσεις και ραντεβού",
      "Γράφεις σύντομα μηνύματα και απλές προσωπικές πληροφορίες"
    ],
    units: [
      unit("01", "Hei! Jeg heter…", "Χαιρετισμοί και γνωριμία", 35,
        "Να χαιρετάς, να συστήνεσαι και να ρωτάς το όνομα και την καταγωγή κάποιου.",
        [
          ["hei", "γεια", "Hei! Hvordan går det?"], ["å hete", "ονομάζομαι", "Jeg heter Eleni."],
          ["hyggelig", "ευχάριστα / χάρηκα", "Hyggelig å møte deg."], ["hvor", "πού", "Hvor kommer du fra?"],
          ["å komme fra", "κατάγομαι από", "Jeg kommer fra Hellas."], ["å bo", "μένω / κατοικώ", "Jeg bor i Oslo."],
          ["også", "επίσης", "Jeg lærer også norsk."], ["ha det", "αντίο", "Ha det bra!"]
        ],
        [
          ["Nora", "Hei! Jeg heter Nora. Hva heter du?", "Γεια! Με λένε Νόρα. Πώς σε λένε;"],
          ["Alex", "Jeg heter Alex. Hyggelig å møte deg.", "Με λένε Άλεξ. Χάρηκα για τη γνωριμία."],
          ["Nora", "Hyggelig! Hvor kommer du fra?", "Χάρηκα! Από πού κατάγεσαι;"],
          ["Alex", "Jeg kommer fra Hellas, men jeg bor i Bergen.", "Κατάγομαι από την Ελλάδα, αλλά μένω στο Μπέργκεν."]
        ],
        { title: "Προσωπικές αντωνυμίες και være", explanation: "Το ρήμα være (είμαι) είναι er για όλα τα πρόσωπα στον ενεστώτα.", examples: ["Jeg er gresk.", "Du er student.", "Hun er norsk."] },
        [
          ["Πώς λες «Με λένε Μαρία»;", ["Jeg er Maria.", "Jeg heter Maria.", "Jeg bor Maria."], 1],
          ["Τι σημαίνει «Hvor kommer du fra?»;", ["Πού μένεις;", "Πώς είσαι;", "Από πού κατάγεσαι;"], 2],
          ["Συμπλήρωσε: Jeg ___ fra Hellas.", ["kommer", "heter", "har"], 0]
        ],
        ["Πες το όνομα και τη χώρα σου.", "Ρώτησε κάποιον πώς τον λένε.", "Πες σε ποια πόλη μένεις."],
        "Γράψε τέσσερις προτάσεις για το όνομα, τη χώρα, την πόλη και τη γλώσσα σου."
      ),
      unit("02", "Tall, tid og dato", "Αριθμοί, ώρα και ημερομηνίες", 40,
        "Να λες αριθμούς, την ώρα, την ηλικία σου και μια απλή ημερομηνία.",
        [
          ["et tall", "αριθμός", "Tallet er ti."], ["klokka", "η ώρα", "Klokka er åtte."],
          ["i dag", "σήμερα", "I dag er det mandag."], ["i morgen", "αύριο", "Vi møtes i morgen."],
          ["en uke", "εβδομάδα", "En uke har sju dager."], ["en måned", "μήνας", "Mai er en fin måned."],
          ["gammel", "ηλικίας / παλιός", "Jeg er tretti år gammel."], ["når", "πότε", "Når begynner kurset?"]
        ],
        [
          ["Sara", "Når begynner norskkurset?", "Πότε αρχίζει το μάθημα νορβηγικών;"],
          ["Lars", "Det begynner klokka halv seks.", "Αρχίζει στις πέντε και μισή."],
          ["Sara", "Er det i dag?", "Είναι σήμερα;"],
          ["Lars", "Nei, det er tirsdag 12. september.", "Όχι, είναι την Τρίτη 12 Σεπτεμβρίου."]
        ],
        { title: "Η ώρα στα νορβηγικά", explanation: "halv seks σημαίνει μισή ώρα πριν από τις έξι, δηλαδή 17:30. Χρησιμοποίησε klokka er για να πεις την ώρα.", examples: ["Klokka er fem.", "Klokka er halv seks.", "Kurset begynner klokka sju."] },
        [
          ["Τι ώρα είναι «halv ni»;", ["8:30", "9:30", "9:00"], 0],
          ["Πώς ρωτάς «Πότε αρχίζει;»;", ["Hvor begynner det?", "Når begynner det?", "Hva begynner det?"], 1],
          ["Πόσες ημέρες έχει μία uke;", ["fem", "sju", "ti"], 1]
        ],
        ["Πες την ώρα τώρα.", "Πες την ημερομηνία των γενεθλίων σου.", "Πες την ηλικία σου."],
        "Γράψε μια σύντομη πρόσκληση με ημέρα, ημερομηνία και ώρα."
      ),
      unit("03", "Familien min", "Οικογένεια και άνθρωποι", 40,
        "Να περιγράφεις την οικογένειά σου και να δίνεις απλές πληροφορίες για ανθρώπους.",
        [
          ["en familie", "οικογένεια", "Jeg har en stor familie."], ["en mor", "μητέρα", "Moren min heter Anna."],
          ["en far", "πατέρας", "Faren min bor i Athen."], ["et barn", "παιδί", "De har ett barn."],
          ["en søster", "αδελφή", "Jeg har en søster."], ["en bror", "αδελφός", "Broren min er lærer."],
          ["gift", "παντρεμένος", "Hun er gift."], ["å jobbe", "εργάζομαι", "Han jobber på sykehus."]
        ],
        [
          ["Mina", "Har du søsken?", "Έχεις αδέλφια;"],
          ["Jon", "Ja, jeg har en søster og to brødre.", "Ναι, έχω μία αδελφή και δύο αδελφούς."],
          ["Mina", "Hvor bor familien din?", "Πού μένει η οικογένειά σου;"],
          ["Jon", "Foreldrene mine bor i Trondheim.", "Οι γονείς μου μένουν στο Τρόντχαϊμ."]
        ],
        { title: "Κτητικές λέξεις", explanation: "Με ένα ουσιαστικό μπορούμε να βάλουμε την κτητική λέξη μετά: familien min, broren din. Το ουσιαστικό παίρνει οριστική μορφή.", examples: ["moren min", "faren din", "vennene våre"] },
        [
          ["Τι σημαίνει «søsknene mine»;", ["οι φίλοι μου", "τα αδέλφια μου", "οι γονείς μου"], 1],
          ["Συμπλήρωσε: Jeg ___ to brødre.", ["er", "har", "bor"], 1],
          ["Ποια είναι η οριστική μορφή του en bror;", ["broren", "brorene", "brorer"], 0]
        ],
        ["Περιέγραψε δύο άτομα της οικογένειάς σου.", "Πες πού μένουν οι γονείς σου.", "Ρώτησε κάποιον αν έχει αδέλφια."],
        "Γράψε πέντε απλές προτάσεις για την οικογένειά σου ή για μια φανταστική οικογένεια."
      ),
      unit("04", "En vanlig dag", "Η καθημερινή μου ρουτίνα", 45,
        "Να περιγράφεις την ημέρα σου χρησιμοποιώντας συχνά ρήματα και χρονικές εκφράσεις.",
        [
          ["å stå opp", "σηκώνομαι", "Jeg står opp klokka sju."], ["å spise", "τρώω", "Vi spiser frokost."],
          ["å dra", "φεύγω / πηγαίνω", "Hun drar på jobb."], ["å begynne", "αρχίζω", "Jobben begynner klokka ni."],
          ["å slutte", "τελειώνω", "Jeg slutter klokka fire."], ["alltid", "πάντα", "Han er alltid tidlig."],
          ["ofte", "συχνά", "Vi trener ofte."], ["aldri", "ποτέ", "Jeg drikker aldri kaffe."]
        ],
        [
          ["Eva", "Når står du opp?", "Πότε σηκώνεσαι;"],
          ["Omar", "Jeg står opp klokka halv sju og spiser frokost.", "Σηκώνομαι στις έξι και μισή και τρώω πρωινό."],
          ["Eva", "Hva gjør du etter jobb?", "Τι κάνεις μετά τη δουλειά;"],
          ["Omar", "Jeg lager middag og går ofte en tur.", "Μαγειρεύω βραδινό και συχνά πηγαίνω μια βόλτα."]
        ],
        { title: "Ενεστώτας ρημάτων", explanation: "Τα περισσότερα ρήματα σχηματίζουν ενεστώτα με -r. Η μορφή είναι ίδια για όλα τα πρόσωπα.", examples: ["å jobbe → jobber", "å spise → spiser", "å gå → går"] },
        [
          ["Συμπλήρωσε: Hun ___ frokost.", ["spise", "spiser", "spist"], 1],
          ["Τι σημαίνει «aldri»;", ["πάντα", "μερικές φορές", "ποτέ"], 2],
          ["Ποια πρόταση είναι σωστή;", ["Jeg jobber i Oslo.", "Jeg jobbe i Oslo.", "Jeg jobb i Oslo."], 0]
        ],
        ["Περιέγραψε το πρωινό σου σε τρεις προτάσεις.", "Πες τι κάνεις μετά τη δουλειά.", "Χρησιμοποίησε ofte και aldri."],
        "Γράψε έξι προτάσεις για μια συνηθισμένη καθημερινή ημέρα."
      ),
      unit("05", "På kafé", "Φαγητό, ποτό και παραγγελία", 40,
        "Να παραγγέλνεις ευγενικά και να καταλαβαίνεις βασικές ερωτήσεις σε καφέ.",
        [
          ["en kaffe", "καφές", "Jeg vil ha en kaffe."], ["et glass", "ποτήρι", "Et glass vann, takk."],
          ["sulten", "πεινασμένος", "Jeg er sulten."], ["tørst", "διψασμένος", "Hun er tørst."],
          ["å bestille", "παραγγέλνω", "Vi vil bestille."], ["å betale", "πληρώνω", "Kan jeg betale?"],
          ["regningen", "ο λογαριασμός", "Kan vi få regningen?"], ["gjerne", "ευχαρίστως / θα ήθελα", "Jeg vil gjerne ha te."]
        ],
        [
          ["Servitør", "Hei! Hva vil du ha?", "Γεια! Τι θα ήθελες;"],
          ["Kunde", "Jeg vil gjerne ha en kaffe og et ostesmørbrød.", "Θα ήθελα έναν καφέ και ένα τοστ με τυρί."],
          ["Servitør", "Vil du ha melk i kaffen?", "Θέλεις γάλα στον καφέ;"],
          ["Kunde", "Ja, takk. Kan jeg betale med kort?", "Ναι, ευχαριστώ. Μπορώ να πληρώσω με κάρτα;"]
        ],
        { title: "Ευγενικά αιτήματα", explanation: "Το vil gjerne ha είναι ένας φυσικός τρόπος παραγγελίας. Το kan jeg… χρησιμοποιείται για ευγενική ερώτηση.", examples: ["Jeg vil gjerne ha kaffe.", "Kan jeg få menyen?", "Kan vi betale?"] },
        [
          ["Ποια είναι η πιο φυσική παραγγελία;", ["Kaffe!", "Jeg vil gjerne ha en kaffe.", "Du gir kaffe."], 1],
          ["Τι ζητάς με «regningen»;", ["το μενού", "τον λογαριασμό", "την απόδειξη κράτησης"], 1],
          ["Συμπλήρωσε: Kan jeg betale ___ kort?", ["på", "med", "til"], 1]
        ],
        ["Παράγγειλε έναν καφέ και κάτι να φας.", "Ρώτησε αν μπορείς να πληρώσεις με κάρτα.", "Ζήτησε τον λογαριασμό."],
        "Γράψε έναν σύντομο διάλογο τεσσάρων ατάκων ανάμεσα σε πελάτη και σερβιτόρο."
      ),
      unit("06", "Hvor er stasjonen?", "Τοποθεσίες και οδηγίες", 45,
        "Να ρωτάς πού βρίσκεται κάτι και να ακολουθείς απλές οδηγίες διαδρομής.",
        [
          ["til høyre", "δεξιά", "Ta til høyre."], ["til venstre", "αριστερά", "Sving til venstre."],
          ["rett fram", "ευθεία", "Gå rett fram."], ["ved siden av", "δίπλα σε", "Kafeen er ved siden av banken."],
          ["mellom", "ανάμεσα", "Butikken ligger mellom to hus."], ["en stasjon", "σταθμός", "Stasjonen er nær."],
          ["langt", "μακριά", "Er det langt?"], ["å finne", "βρίσκω", "Jeg finner ikke hotellet."]
        ],
        [
          ["Turist", "Unnskyld, hvor er togstasjonen?", "Συγγνώμη, πού είναι ο σιδηροδρομικός σταθμός;"],
          ["Lokal", "Gå rett fram og ta til venstre ved banken.", "Πήγαινε ευθεία και στρίψε αριστερά στην τράπεζα."],
          ["Turist", "Er det langt herfra?", "Είναι μακριά από εδώ;"],
          ["Lokal", "Nei, det tar omtrent fem minutter.", "Όχι, χρειάζονται περίπου πέντε λεπτά."]
        ],
        { title: "Προθέσεις τοποθεσίας", explanation: "Χρησιμοποίησε i για μέσα σε πόλη/χώρα, på για αρκετούς δημόσιους χώρους και ved για κοντά σε κάτι.", examples: ["i Oslo", "på stasjonen", "ved banken"] },
        [
          ["Τι σημαίνει «rett fram»;", ["δεξιά", "ευθεία", "πίσω"], 1],
          ["Συμπλήρωσε: Kafeen er ___ siden av banken.", ["ved", "på", "til"], 0],
          ["Πώς ρωτάς αν είναι μακριά;", ["Er det langt?", "Er det høyre?", "Er det mellom?"], 0]
        ],
        ["Ρώτησε πού είναι ο σταθμός.", "Δώσε οδηγίες χρησιμοποιώντας høyre και venstre.", "Πες πόσο χρόνο χρειάζεται."],
        "Γράψε απλές οδηγίες από το σπίτι σου προς ένα κοντινό κατάστημα."
      ),
      unit("07", "I butikken", "Αγορές, τιμές και ποσότητες", 40,
        "Να ρωτάς τιμές, να ζητάς προϊόντα και να καταλαβαίνεις απλές ποσότητες.",
        [
          ["å koste", "κοστίζω", "Hva koster den?"], ["dyr", "ακριβός", "Jakken er for dyr."],
          ["billig", "φθηνός", "Brødet er billig."], ["en størrelse", "μέγεθος", "Har dere en annen størrelse?"],
          ["en kilo", "κιλό", "Jeg trenger en kilo epler."], ["litt", "λίγο", "Jeg vil ha litt ost."],
          ["mye", "πολύ", "Det er mye sukker."], ["å kjøpe", "αγοράζω", "Hun kjøper en genser."]
        ],
        [
          ["Kunde", "Unnskyld, hva koster denne genseren?", "Συγγνώμη, πόσο κοστίζει αυτό το πουλόβερ;"],
          ["Ansatt", "Den koster fire hundre kroner.", "Κοστίζει τετρακόσιες κορώνες."],
          ["Kunde", "Har dere den i en større størrelse?", "Την έχετε σε μεγαλύτερο μέγεθος;"],
          ["Ansatt", "Ja, jeg skal finne en til deg.", "Ναι, θα βρω μία για εσένα."]
        ],
        { title: "Denne, dette και disse", explanation: "Χρησιμοποίησε denne με en-λέξεις, dette με et-λέξεις και disse στον πληθυντικό.", examples: ["denne genseren", "dette eplet", "disse skoene"] },
        [
          ["Ποιο ταιριάζει με et brød;", ["denne", "dette", "disse"], 1],
          ["Τι σημαίνει «Hva koster den?»;", ["Τι μέγεθος είναι;", "Πόσο κοστίζει;", "Πού είναι;"], 1],
          ["Το αντίθετο του dyr είναι…", ["billig", "stor", "mye"], 0]
        ],
        ["Ρώτησε την τιμή ενός προϊόντος.", "Ζήτησε διαφορετικό μέγεθος.", "Αγόρασε ένα κιλό μήλα."],
        "Γράψε μια λίστα αγορών και τέσσερις φράσεις που θα χρησιμοποιήσεις στο κατάστημα."
      ),
      unit("08", "Hjemmet mitt", "Σπίτι και καθημερινές ανάγκες", 45,
        "Να περιγράφεις ένα σπίτι και να μιλάς για απλές οικιακές ανάγκες.",
        [
          ["et rom", "δωμάτιο", "Leiligheten har tre rom."], ["et kjøkken", "κουζίνα", "Kjøkkenet er lite."],
          ["et bad", "μπάνιο", "Badet er nytt."], ["en leilighet", "διαμέρισμα", "Vi leier en leilighet."],
          ["å leie", "νοικιάζω", "Jeg vil leie et rom."], ["ledig", "διαθέσιμος", "Er rommet ledig?"],
          ["varm", "ζεστός", "Det er varmt inne."], ["kald", "κρύος", "Soverommet er kaldt."]
        ],
        [
          ["Leietaker", "Hei, jeg ringer om rommet. Er det fortsatt ledig?", "Γεια, τηλεφωνώ για το δωμάτιο. Είναι ακόμη διαθέσιμο;"],
          ["Utleier", "Ja. Det er et stort rom i en rolig leilighet.", "Ναι. Είναι ένα μεγάλο δωμάτιο σε ήσυχο διαμέρισμα."],
          ["Leietaker", "Hvor mye er husleien?", "Πόσο είναι το ενοίκιο;"],
          ["Utleier", "Den er seks tusen kroner i måneden.", "Είναι έξι χιλιάδες κορώνες τον μήνα."]
        ],
        { title: "Οριστική μορφή ουσιαστικών", explanation: "Η κατάληξη δείχνει «το συγκεκριμένο»: en stol → stolen, et rom → rommet.", examples: ["leiligheten", "kjøkkenet", "rommet"] },
        [
          ["Ποια είναι η οριστική μορφή του et bad;", ["baden", "badet", "bader"], 1],
          ["Τι σημαίνει «ledig»;", ["επιπλωμένος", "διαθέσιμος", "ακριβός"], 1],
          ["Συμπλήρωσε: seks tusen kroner ___ måneden.", ["i", "på", "om"], 0]
        ],
        ["Περιέγραψε τα δωμάτια του σπιτιού σου.", "Ρώτησε αν ένα δωμάτιο είναι διαθέσιμο.", "Πες πόσο είναι το ενοίκιο."],
        "Γράψε μια μικρή αγγελία για ένα δωμάτιο προς ενοικίαση."
      ),
      unit("09", "Vær og klær", "Καιρός και ρούχα", 40,
        "Να καταλαβαίνεις μια απλή πρόγνωση και να περιγράφεις τι φοράς.",
        [
          ["vær", "καιρός", "Hvordan er været?"], ["sol", "ήλιος", "Sola skinner."],
          ["regn", "βροχή", "Det kommer regn."], ["snø", "χιόνι", "Det er mye snø."],
          ["en jakke", "μπουφάν", "Ta på deg en jakke."], ["sko", "παπούτσια", "Jeg trenger varme sko."],
          ["å fryse", "κρυώνω", "Jeg fryser."], ["å ha på seg", "φοράω", "Hun har på seg en blå genser."]
        ],
        [
          ["Ida", "Hvordan er været i dag?", "Τι καιρό κάνει σήμερα;"],
          ["Per", "Det er kaldt og det skal regne senere.", "Κάνει κρύο και θα βρέξει αργότερα."],
          ["Ida", "Da tar jeg på meg regnjakke og støvler.", "Τότε θα φορέσω αδιάβροχο και μπότες."],
          ["Per", "God idé. Det blåser også mye.", "Καλή ιδέα. Έχει επίσης πολύ αέρα."]
        ],
        { title: "Απρόσωπο det για τον καιρό", explanation: "Οι εκφράσεις καιρού αρχίζουν συνήθως με det: det regner, det snør, det er kaldt.", examples: ["Det regner.", "Det er varmt.", "Det blåser."] },
        [
          ["Πώς λες «βρέχει»;", ["Det regner.", "Det regn.", "Det er regne."], 0],
          ["Τι φοράς όταν βρέχει;", ["regnjakke", "solbriller", "shorts"], 0],
          ["Τι σημαίνει «Jeg fryser»;", ["Ζεσταίνομαι.", "Κρυώνω.", "Βρέχομαι."], 1]
        ],
        ["Περιέγραψε τον σημερινό καιρό.", "Πες τι φοράς όταν κάνει κρύο.", "Δώσε μία απλή συμβουλή για βροχή."],
        "Γράψε μια πρόγνωση καιρού τριών προτάσεων και τι ρούχα προτείνεις."
      ),
      unit("10", "Fritid og planer", "Ελεύθερος χρόνος και σχέδια", 45,
        "Να μιλάς για ενδιαφέροντα, να προτείνεις μια δραστηριότητα και να κανονίζεις συνάντηση.",
        [
          ["fritid", "ελεύθερος χρόνος", "Hva gjør du i fritiden?"], ["å like", "μου αρέσει", "Jeg liker å lese."],
          ["å trene", "γυμνάζομαι", "Hun trener to ganger i uka."], ["å møtes", "συναντιόμαστε", "Skal vi møtes?"],
          ["kanskje", "ίσως", "Kanskje på lørdag?"], ["sammen", "μαζί", "Vi kan lage mat sammen."],
          ["en helg", "Σαββατοκύριακο", "Hva gjør du i helgen?"], ["å passe", "βολεύει / ταιριάζει", "Passer det klokka seks?"]
        ],
        [
          ["Lina", "Hva skal du gjøre i helgen?", "Τι θα κάνεις το Σαββατοκύριακο;"],
          ["Mats", "Jeg skal gå på tur på lørdag. Vil du bli med?", "Θα πάω πεζοπορία το Σάββατο. Θέλεις να έρθεις;"],
          ["Lina", "Ja, gjerne! Når skal vi møtes?", "Ναι, ευχαρίστως! Πότε θα συναντηθούμε;"],
          ["Mats", "Passer det klokka ti?", "Σε βολεύει στις δέκα;"]
        ],
        { title: "Μέλλον με skal", explanation: "Χρησιμοποίησε skal + απαρέμφατο χωρίς å για προγραμματισμένες ενέργειες.", examples: ["Jeg skal jobbe.", "Vi skal møtes.", "Skal du bli med?"] },
        [
          ["Συμπλήρωσε: Vi skal ___ på tur.", ["å gå", "går", "gå"], 2],
          ["Τι σημαίνει «Vil du bli med?»;", ["Θέλεις να έρθεις μαζί;", "Πού θα πας;", "Πότε θα φύγεις;"], 0],
          ["Πώς ρωτάς αν βολεύει στις έξι;", ["Er klokka seks?", "Passer det klokka seks?", "Har du seks?"], 1]
        ],
        ["Πες τι σου αρέσει να κάνεις στον ελεύθερο χρόνο.", "Πρότεινε μια δραστηριότητα για το Σάββατο.", "Κανόνισε ώρα και τόπο συνάντησης."],
        "Γράψε ένα μήνυμα σε φίλο: πρότεινε μια δραστηριότητα και κανόνισε ημέρα και ώρα."
      )
    ]
  };
})();
