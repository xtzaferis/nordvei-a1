(function () {
  const makeUnit = (id, title, subtitle, minutes, goal, vocabulary, dialogue, grammar, quiz, speaking, writing) => ({
    id, title, subtitle, minutes, goal, vocabulary, dialogue, grammar, quiz, speaking, writing,
    audio: `audio/a1-${id}.mp3`
  });

  window.A1_COURSE.units.push(
    makeUnit("11", "På bussen", "Δημόσιες συγκοινωνίες", 45,
      "Να αγοράζεις εισιτήριο, να ρωτάς για στάσεις και να καταλαβαίνεις απλές πληροφορίες μετακίνησης.",
      [["en billett","εισιτήριο","Jeg trenger en billett."],["en holdeplass","στάση","Bussen stopper på neste holdeplass."],["å gå av","κατεβαίνω","Jeg går av i sentrum."],["å gå på","ανεβαίνω","Vi går på bussen."],["neste","επόμενος","Neste stopp er Majorstuen."],["sentrum","κέντρο πόλης","Jeg skal til sentrum."],["å bytte","αλλάζω","Du må bytte buss."],["forsinket","καθυστερημένος","Toget er ti minutter forsinket."]],
      [["Reisende","Unnskyld, går denne bussen til sentrum?","Συγγνώμη, πηγαίνει αυτό το λεωφορείο στο κέντρο;"],["Sjåfør","Ja, men du må bytte ved rådhuset.","Ναι, αλλά πρέπει να αλλάξεις στο δημαρχείο."],["Reisende","Hvor kjøper jeg billett?","Πού αγοράζω εισιτήριο;"],["Sjåfør","Du kan kjøpe den i appen eller på automaten.","Μπορείς να το αγοράσεις στην εφαρμογή ή στο μηχάνημα."]],
      {title:"Modalverb må",explanation:"Το må δηλώνει ανάγκη ή υποχρέωση και ακολουθείται από απαρέμφατο χωρίς å.",examples:["Du må bytte buss.","Jeg må gå av her.","Vi må kjøpe billett."]},
      [["Τι σημαίνει «gå av»;",["ανεβαίνω","κατεβαίνω","περιμένω"],1],["Συμπλήρωσε: Du må ___ buss.",["å bytte","bytter","bytte"],2],["Πού μπορεί να αγοραστεί το εισιτήριο;",["Μόνο από τον οδηγό","Στην εφαρμογή ή στο μηχάνημα","Μόνο στον σταθμό"],1]],
      ["Ρώτησε αν το λεωφορείο πηγαίνει στο κέντρο.","Ρώτησε πού πρέπει να κατέβεις.","Πες ότι το τρένο έχει καθυστέρηση."],
      "Γράψε οδηγίες τριών βημάτων για μια διαδρομή με λεωφορείο."
    ),
    makeUnit("12", "På jobb", "Εργασία και συνάδελφοι", 45,
      "Να περιγράφεις την εργασία σου, το ωράριο και απλές καθημερινές αρμοδιότητες.",
      [["en jobb","εργασία","Jeg har en ny jobb."],["en kollega","συνάδελφος","Kollegaen min heter Ida."],["en sjef","προϊστάμενος","Sjefen er på møte."],["en pause","διάλειμμα","Vi tar pause klokka tolv."],["å hjelpe","βοηθώ","Kan du hjelpe meg?"],["å sende","στέλνω","Jeg sender en e-post."],["et møte","συνάντηση","Vi har et møte i dag."],["ferdig","έτοιμος / τελειωμένος","Jeg er ferdig klokka fire."]],
      [["Mia","Hei, jeg er ny her. Hvor kan jeg sitte?","Γεια, είμαι καινούρια εδώ. Πού μπορώ να καθίσω;"],["Erik","Velkommen! Du kan sitte ved siden av meg.","Καλώς ήρθες! Μπορείς να καθίσεις δίπλα μου."],["Mia","Når tar vi lunsjpause?","Πότε κάνουμε διάλειμμα για μεσημεριανό;"],["Erik","Vanligvis klokka halv tolv.","Συνήθως στις έντεκα και μισή."]],
      {title:"Modalverb kan",explanation:"Το kan εκφράζει δυνατότητα ή ικανότητα. Το επόμενο ρήμα μπαίνει χωρίς å.",examples:["Jeg kan hjelpe.","Kan du sende e-posten?","Vi kan ta pause nå."]},
      [["Ποιος είναι ο kollega;",["ο πελάτης","ο συνάδελφος","ο διευθυντής"],1],["Συμπλήρωσε: Kan du ___ meg?",["hjelpe","hjelper","å hjelpe"],0],["Πότε κάνουν συνήθως διάλειμμα;",["11:30","12:30","13:00"],0]],
      ["Πες πού εργάζεσαι.","Ρώτησε πότε είναι το διάλειμμα.","Ζήτησε βοήθεια από έναν συνάδελφο."],
      "Γράψε ένα σύντομο μήνυμα σε νέο συνάδελφο με το ωράριο και το διάλειμμα."
    ),
    makeUnit("13", "På norskkurs", "Μάθημα και σχολείο", 45,
      "Να συμμετέχεις σε ένα απλό μάθημα και να ζητάς επανάληψη ή εξήγηση.",
      [["en lærer","δάσκαλος","Læreren snakker norsk."],["en elev","μαθητής","Elevene jobber sammen."],["en oppgave","άσκηση","Oppgaven er vanskelig."],["et spørsmål","ερώτηση","Jeg har et spørsmål."],["å svare","απαντώ","Kan du svare?"],["å gjenta","επαναλαμβάνω","Kan du gjenta?"],["å forklare","εξηγώ","Læreren forklarer ordet."],["å øve","εξασκούμαι","Vi øver hver dag."]],
      [["Elev","Unnskyld, kan du gjenta spørsmålet?","Συγγνώμη, μπορείς να επαναλάβεις την ερώτηση;"],["Lærer","Selvfølgelig. Hva gjør du i fritiden?","Βεβαίως. Τι κάνεις στον ελεύθερο χρόνο σου;"],["Elev","Hva betyr fritid?","Τι σημαίνει fritid;"],["Lærer","Det er tiden når du ikke jobber eller går på skole.","Είναι ο χρόνος όταν δεν εργάζεσαι ή δεν πηγαίνεις σχολείο."]],
      {title:"Ερωτηματικές λέξεις",explanation:"Οι ερωτήσεις πληροφοριών αρχίζουν συχνά με hva, hvor, når, hvem ή hvorfor.",examples:["Hva betyr det?","Hvor bor du?","Når begynner timen?"]},
      [["Πώς ζητάς επανάληψη;",["Kan du gjenta?","Kan du begynne?","Kan du skrive?"],0],["Τι σημαίνει oppgave;",["διάλειμμα","άσκηση","απάντηση"],1],["Ποια λέξη σημαίνει «ποιος»;",["hvem","hvor","hva"],0]],
      ["Ζήτησε από τον δάσκαλο να επαναλάβει.","Ρώτησε τι σημαίνει μια λέξη.","Πες ότι μια άσκηση είναι δύσκολη."],
      "Γράψε τρεις ερωτήσεις που θα μπορούσες να κάνεις σε ένα μάθημα νορβηγικών."
    ),
    makeUnit("14", "En avtale", "Ραντεβού και ημερολόγιο", 40,
      "Να κλείνεις, να επιβεβαιώνεις και να αλλάζεις ένα απλό ραντεβού.",
      [["en avtale","ραντεβού / συμφωνία","Jeg har en avtale."],["ledig","διαθέσιμος","Er du ledig på fredag?"],["opptatt","απασχολημένος","Jeg er opptatt i morgen."],["å passe","βολεύει","Passer tirsdag?"],["å flytte","μεταφέρω / αλλάζω","Kan vi flytte avtalen?"],["å avlyse","ακυρώνω","Jeg må avlyse."],["tidlig","νωρίς","Det er for tidlig."],["senere","αργότερα","Kan vi møtes senere?"]],
      [["Kari","Hei, jeg har en avtale på torsdag klokka ni.","Γεια, έχω ραντεβού την Πέμπτη στις εννέα."],["Resepsjon","Ja, med doktor Nilsen.","Ναι, με τον γιατρό Νίλσεν."],["Kari","Kan jeg flytte den til fredag?","Μπορώ να το μεταφέρω για την Παρασκευή;"],["Resepsjon","Vi har en ledig time klokka elleve. Passer det?","Έχουμε διαθέσιμη ώρα στις έντεκα. Σε βολεύει;"]],
      {title:"Χρονικές προθέσεις",explanation:"Χρησιμοποίησε på με ημέρες, i με μήνες και klokka με συγκεκριμένη ώρα.",examples:["på torsdag","i september","klokka elleve"]},
      [["Τι σημαίνει avlyse;",["επιβεβαιώνω","ακυρώνω","καθυστερώ"],1],["Συμπλήρωσε: ___ fredag.",["På","I","Klokka"],0],["Ποια ώρα είναι διαθέσιμη;",["09:00","10:00","11:00"],2]],
      ["Κλείσε ραντεβού για την Παρασκευή.","Ζήτησε να αλλάξεις την ώρα.","Πες ότι είσαι απασχολημένος αύριο."],
      "Γράψε μήνυμα για να μεταφέρεις ένα ραντεβού σε άλλη ημέρα και ώρα."
    ),
    makeUnit("15", "Hos legen", "Υγεία και φαρμακείο", 50,
      "Να περιγράφεις βασικά συμπτώματα και να καταλαβαίνεις απλές συμβουλές υγείας.",
      [["syk","άρρωστος","Jeg er syk."],["vondt","πόνος","Jeg har vondt i hodet."],["feber","πυρετός","Hun har feber."],["hoste","βήχας","Jeg har sterk hoste."],["medisin","φάρμακο","Ta denne medisinen."],["å hvile","ξεκουράζομαι","Du må hvile."],["bedre","καλύτερα","Jeg føler meg bedre."],["et apotek","φαρμακείο","Apoteket ligger ved sykehuset."]],
      [["Lege","Hva kan jeg hjelpe deg med?","Πώς μπορώ να σε βοηθήσω;"],["Pasient","Jeg har vondt i halsen og litt feber.","Πονάει ο λαιμός μου και έχω λίγο πυρετό."],["Lege","Hvor lenge har du vært syk?","Πόσο καιρό είσαι άρρωστος;"],["Pasient","I tre dager. Jeg hoster også om natten.","Για τρεις ημέρες. Βήχω επίσης τη νύχτα."]],
      {title:"Jeg har vondt i…",explanation:"Για πόνο λέμε jeg har vondt i και προσθέτουμε το μέρος του σώματος.",examples:["vondt i hodet","vondt i ryggen","vondt i halsen"]},
      [["Πώς λες «πονάει το κεφάλι μου»;",["Jeg er hodet.","Jeg har vondt i hodet.","Jeg føler hodet."],1],["Τι πρέπει να κάνεις με το hvile;",["να ξεκουραστείς","να φας","να εργαστείς"],0],["Πόσες ημέρες είναι άρρωστος ο ασθενής;",["δύο","τρεις","τέσσερις"],1]],
      ["Πες δύο απλά συμπτώματα.","Ρώτησε πού βρίσκεται το φαρμακείο.","Δώσε τη συμβουλή «πρέπει να ξεκουραστείς»."],
      "Γράψε σύντομο μήνυμα στον εργοδότη σου ότι είσαι άρρωστος και δεν μπορείς να εργαστείς."
    ),
    makeUnit("16", "Mat og matlaging", "Τρόφιμα και μαγείρεμα", 45,
      "Να μιλάς για γεύματα, υλικά και απλές οδηγίες μαγειρικής.",
      [["frokost","πρωινό","Jeg spiser frokost."],["middag","βραδινό / κύριο γεύμα","Vi lager middag."],["en oppskrift","συνταγή","Oppskriften er enkel."],["å kutte","κόβω","Kutt grønnsakene."],["å koke","βράζω","Kok potetene."],["å steke","τηγανίζω / ψήνω","Stek fisken."],["salt","αλάτι","Vi trenger litt salt."],["deilig","νόστιμο","Maten er deilig."]],
      [["Anna","Hva skal vi lage til middag?","Τι θα μαγειρέψουμε για βραδινό;"],["Bo","Kanskje laks med poteter og grønnsaker?","Ίσως σολομό με πατάτες και λαχανικά;"],["Anna","God idé. Jeg kan kutte grønnsakene.","Καλή ιδέα. Μπορώ να κόψω τα λαχανικά."],["Bo","Da koker jeg potetene og steker laksen.","Τότε εγώ θα βράσω τις πατάτες και θα ψήσω τον σολομό."]],
      {title:"Προστακτική",explanation:"Η απλή προστακτική σχηματίζεται συνήθως αφαιρώντας το τελικό -e από το απαρέμφατο.",examples:["å kutte → Kutt!","å koke → Kok!","å steke → Stek!"]},
      [["Ποια λέξη σημαίνει συνταγή;",["middag","oppskrift","frokost"],1],["Ποια είναι η προστακτική του å koke;",["Koker!","Kok!","Koke!"],1],["Τι θα μαγειρέψουν;",["κοτόπουλο","σολομό","σούπα"],1]],
      ["Πες τι τρως για πρωινό.","Περιέγραψε ένα απλό γεύμα.","Δώσε τρεις οδηγίες μαγειρικής."],
      "Γράψε μια πολύ απλή συνταγή με τέσσερα υλικά και τέσσερα βήματα."
    ),
    makeUnit("17", "På besøk", "Προσκλήσεις και επισκέψεις", 45,
      "Να προσκαλείς κάποιον, να αποδέχεσαι ή να αρνείσαι ευγενικά και να είσαι επισκέπτης.",
      [["å invitere","προσκαλώ","Jeg vil invitere deg."],["et besøk","επίσκεψη","Vi får besøk."],["velkommen","καλώς ήρθες","Velkommen hjem til oss!"],["dessverre","δυστυχώς","Dessverre kan jeg ikke."],["å ta med","φέρνω μαζί","Skal jeg ta med noe?"],["en gave","δώρο","Dette er en liten gave."],["koselig","ζεστό / ευχάριστο","Det var veldig koselig."],["takk for sist","χάρηκα για την προηγούμενη φορά","Takk for sist!"]],
      [["Emil","Har du lyst til å komme på middag på lørdag?","Θέλεις να έρθεις για φαγητό το Σάββατο;"],["Sofia","Ja, gjerne! Når skal jeg komme?","Ναι, ευχαρίστως! Τι ώρα να έρθω;"],["Emil","Kom gjerne rundt klokka sju.","Έλα γύρω στις επτά."],["Sofia","Fint. Skal jeg ta med noe?","Ωραία. Να φέρω κάτι;"]],
      {title:"Har du lyst til å…",explanation:"Η έκφραση χρησιμοποιείται για φιλική πρόσκληση ή πρόταση.",examples:["Har du lyst til å komme?","Har du lyst til å spise ute?","Har du lyst til å bli med?"]},
      [["Τι σημαίνει dessverre;",["ευχαρίστως","δυστυχώς","συνήθως"],1],["Πώς κάνεις φιλική πρόσκληση;",["Du kommer.","Har du lyst til å komme?","Kommer du alltid?"],1],["Τι ρωτά η Sofia στο τέλος;",["τι να φορέσει","αν πρέπει να φέρει κάτι","πού μένει ο Emil"],1]],
      ["Προσκάλεσε έναν φίλο για φαγητό.","Αποδέξου ευγενικά μια πρόσκληση.","Αρνήσου και δώσε έναν απλό λόγο."],
      "Γράψε πρόσκληση για μια μικρή συγκέντρωση με ημέρα, ώρα και διεύθυνση."
    ),
    makeUnit("18", "På telefonen", "Τηλέφωνο και μηνύματα", 40,
      "Να ξεκινάς μια απλή τηλεφωνική συνομιλία και να αφήνεις ή να καταλαβαίνεις σύντομα μηνύματα.",
      [["å ringe","τηλεφωνώ","Jeg ringer deg senere."],["å svare","απαντώ","Han svarer ikke."],["en melding","μήνυμα","Kan du sende en melding?"],["et nummer","αριθμός","Hva er nummeret ditt?"],["å vente","περιμένω","Vent litt, takk."],["opptatt","κατειλημμένο / απασχολημένος","Linjen er opptatt."],["å høre","ακούω","Jeg hører deg ikke."],["tilbake","πίσω","Jeg ringer tilbake."]],
      [["Nina","Hei, det er Nina. Kan jeg snakke med Ali?","Γεια, η Νίνα είμαι. Μπορώ να μιλήσω με τον Αλί;"],["Resepsjon","Han er opptatt akkurat nå.","Είναι απασχολημένος αυτή τη στιγμή."],["Nina","Kan du be ham ringe meg tilbake?","Μπορείς να του πεις να με καλέσει πίσω;"],["Resepsjon","Ja. Hva er telefonnummeret ditt?","Ναι. Ποιος είναι ο αριθμός τηλεφώνου σου;"]],
      {title:"Det er… στο τηλέφωνο",explanation:"Στο τηλέφωνο συστηνόμαστε φυσικά με det er + όνομα.",examples:["Hei, det er Maria.","Det er Per fra jobben.","Kan jeg snakke med Anne?"]},
      [["Πώς συστήνεσαι στο τηλέφωνο;",["Jeg heter på telefon.","Det er Nina.","Her bor Nina."],1],["Τι σημαίνει ringe tilbake;",["καλώ πίσω","στέλνω μήνυμα","περιμένω"],0],["Γιατί δεν μιλά η Nina με τον Ali;",["λείπει ο αριθμός","είναι απασχολημένος","δεν εργάζεται εκεί"],1]],
      ["Συστήσου στο τηλέφωνο.","Ζήτησε να μιλήσεις με κάποιον.","Ζήτησε να σε καλέσουν πίσω."],
      "Γράψε ένα σύντομο τηλεφωνικό μήνυμα με όνομα, λόγο κλήσης και αριθμό."
    ),
    makeUnit("19", "På posten og i banken", "Καθημερινές υπηρεσίες", 45,
      "Να ζητάς βασική βοήθεια σε ταχυδρομείο ή τράπεζα και να συμπληρώνεις απλές πληροφορίες.",
      [["en pakke","δέμα","Jeg skal hente en pakke."],["å sende","στέλνω","Jeg vil sende et brev."],["et brev","γράμμα","Brevet er til Hellas."],["legitimasjon","ταυτότητα","Har du legitimasjon?"],["en konto","λογαριασμός","Jeg vil åpne en konto."],["et kort","κάρτα","Kortet mitt virker ikke."],["å signere","υπογράφω","Signer her, takk."],["et skjema","έντυπο","Fyll ut dette skjemaet."]],
      [["Kunde","Hei, jeg skal hente en pakke.","Γεια, ήρθα να παραλάβω ένα δέμα."],["Ansatt","Har du hentekoden og legitimasjon?","Έχεις τον κωδικό παραλαβής και ταυτότητα;"],["Kunde","Ja, her er koden på telefonen min.","Ναι, εδώ είναι ο κωδικός στο τηλέφωνό μου."],["Ansatt","Takk. Kan du signere her?","Ευχαριστώ. Μπορείς να υπογράψεις εδώ;"]],
      {title:"Κτητικά με mitt και min",explanation:"Χρησιμοποίησε min με en-λέξεις και mitt με et-λέξεις.",examples:["pakken min","kortet mitt","telefonen min"]},
      [["Τι χρειάζεται για το δέμα;",["κωδικός και ταυτότητα","μόνο χρήματα","τραπεζική κάρτα"],0],["Ποιο ταιριάζει με et kort;",["min","mitt","mine"],1],["Τι σημαίνει signere;",["συμπληρώνω","υπογράφω","στέλνω"],1]],
      ["Πες ότι θέλεις να παραλάβεις δέμα.","Ρώτησε τι έγγραφα χρειάζονται.","Πες ότι η κάρτα σου δεν λειτουργεί."],
      "Γράψε τις προσωπικές πληροφορίες που συνήθως ζητά ένα απλό έντυπο."
    ),
    makeUnit("20", "På reise", "Ξενοδοχείο και ταξίδι", 50,
      "Να κάνεις check-in, να ρωτάς για παροχές και να αντιμετωπίζεις μια απλή ταξιδιωτική ανάγκη.",
      [["en reservasjon","κράτηση","Jeg har en reservasjon."],["et hotell","ξενοδοχείο","Hotellet ligger i sentrum."],["et rom","δωμάτιο","Rommet er i tredje etasje."],["en nøkkel","κλειδί","Her er nøkkelen."],["frokost","πρωινό","Frokost er inkludert."],["en heis","ασανσέρ","Heisen er til høyre."],["bagasje","αποσκευές","Hvor kan jeg sette bagasjen?"],["å sjekke inn","κάνω check-in","Vi vil sjekke inn."]],
      [["Gjest","Hei, jeg har en reservasjon i navnet Papas.","Γεια, έχω κράτηση στο όνομα Πάπας."],["Resepsjonist","Ja, et dobbeltrom for to netter.","Ναι, ένα δίκλινο για δύο νύχτες."],["Gjest","Er frokost inkludert?","Περιλαμβάνεται το πρωινό;"],["Resepsjonist","Ja, den serveres fra sju til ti.","Ναι, σερβίρεται από τις επτά έως τις δέκα."]],
      {title:"Αριθμοί σειράς",explanation:"Οι όροφοι και η σειρά χρησιμοποιούν αριθμούς όπως første, andre και tredje.",examples:["første etasje","andre etasje","tredje etasje"]},
      [["Πόσες νύχτες είναι η κράτηση;",["μία","δύο","τρεις"],1],["Πότε σερβίρεται το πρωινό;",["06:00–09:00","07:00–10:00","08:00–11:00"],1],["Τι σημαίνει reservasjon;",["κράτηση","απόδειξη","κλειδί"],0]],
      ["Πες ότι έχεις κράτηση.","Ρώτησε αν περιλαμβάνεται το πρωινό.","Ρώτησε πού βρίσκεται το ασανσέρ."],
      "Γράψε ένα σύντομο αίτημα προς ξενοδοχείο για δωμάτιο δύο νυχτών."
    )
  );
})();
