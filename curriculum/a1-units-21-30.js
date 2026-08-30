(function () {
  const makeUnit = (id, title, subtitle, minutes, goal, vocabulary, dialogue, grammar, quiz, speaking, writing) => ({
    id, title, subtitle, minutes, goal, vocabulary, dialogue, grammar, quiz, speaking, writing,
    audio: `audio/a1-${id}.mp3?v=3`
  });

  window.A1_COURSE.units.push(
    makeUnit("21", "Hva gjorde du?", "Χθες και το Σαββατοκύριακο", 50,
      "Να αφηγείσαι πολύ απλά τι έκανες στο πρόσφατο παρελθόν.",
      [["i går","χθες","I går var jeg hjemme."],["forrige helg","το προηγούμενο Σαββατοκύριακο","Forrige helg besøkte vi venner."],["å besøke","επισκέπτομαι","Jeg besøkte familien."],["å se","βλέπω","Vi så en film."],["å spise","τρώω","Hun spiste pizza."],["å være","είμαι","Det var hyggelig."],["å gjøre","κάνω","Hva gjorde du?"],["etterpå","μετά","Etterpå gikk vi hjem."]],
      [["Lea","Hva gjorde du i helgen?","Τι έκανες το Σαββατοκύριακο;"],["Tom","På lørdag besøkte jeg en venn, og vi så en film.","Το Σάββατο επισκέφθηκα έναν φίλο και είδαμε ταινία."],["Lea","Hva gjorde du på søndag?","Τι έκανες την Κυριακή;"],["Tom","Jeg var hjemme og laget middag.","Ήμουν σπίτι και μαγείρεψα βραδινό."]],
      {title:"Απλός παρελθοντικός",explanation:"Πολλά ρήματα παίρνουν -et ή -te, ενώ συχνά ρήματα έχουν ανώμαλες μορφές.",examples:["besøke → besøkte","lage → laget","være → var"]},
      [["Ποιος είναι ο παρελθοντικός του være;",["er","var","vært"],1],["Τι έκανε ο Tom το Σάββατο;",["εργάστηκε","επισκέφθηκε φίλο","ταξίδεψε"],1],["Τι σημαίνει etterpå;",["πριν","τώρα","μετά"],2]],
      ["Πες τι έκανες χθες.","Περιέγραψε το προηγούμενο Σαββατοκύριακο.","Χρησιμοποίησε var, så και spiste."],
      "Γράψε πέντε απλές προτάσεις για όσα έκανες το προηγούμενο Σαββατοκύριακο."
    ),
    makeUnit("22", "Planer framover", "Μελλοντικά σχέδια", 45,
      "Να μιλάς για σχέδια της επόμενης εβδομάδας και απλές επιθυμίες.",
      [["neste uke","την επόμενη εβδομάδα","Neste uke skal jeg reise."],["å planlegge","σχεδιάζω","Vi planlegger ferien."],["å lære","μαθαίνω","Jeg vil lære norsk."],["å begynne","αρχίζω","Hun skal begynne på kurs."],["å håpe","ελπίζω","Jeg håper det blir fint."],["snart","σύντομα","Vi sees snart."],["framtid","μέλλον","Hva vil du gjøre i framtiden?"],["en drøm","όνειρο","Det er en stor drøm."]],
      [["Iris","Hva skal du gjøre neste uke?","Τι θα κάνεις την επόμενη εβδομάδα;"],["Noah","Jeg skal begynne på et nytt norskkurs.","Θα αρχίσω ένα νέο μάθημα νορβηγικών."],["Iris","Så fint! Hva vil du lære?","Τέλεια! Τι θέλεις να μάθεις;"],["Noah","Jeg vil snakke bedre og forstå kollegene mine.","Θέλω να μιλάω καλύτερα και να καταλαβαίνω τους συναδέλφους μου."]],
      {title:"Skal και vil",explanation:"Το skal δηλώνει συγκεκριμένο σχέδιο. Το vil δηλώνει επιθυμία ή πρόθεση.",examples:["Jeg skal reise på fredag.","Jeg vil lære mer.","Vi skal møtes snart."]},
      [["Ποιο δηλώνει συγκεκριμένο σχέδιο;",["skal","vil","har"],0],["Τι θέλει να βελτιώσει ο Noah;",["το γράψιμο μόνο","ομιλία και κατανόηση","τα μαθηματικά"],1],["Τι σημαίνει snart;",["αργά","σύντομα","χθες"],1]],
      ["Πες τι θα κάνεις την επόμενη εβδομάδα.","Πες τι θέλεις να μάθεις.","Μίλησε για ένα απλό όνειρό σου."],
      "Γράψε πέντε προτάσεις με skal και vil για τα σχέδια και τις επιθυμίες σου."
    ),
    makeUnit("23", "Hva liker du?", "Προτιμήσεις και συγκρίσεις", 45,
      "Να εκφράζεις τι σου αρέσει και να κάνεις πολύ απλές συγκρίσεις.",
      [["å like","μου αρέσει","Jeg liker kaffe."],["å elske","λατρεύω","Hun elsker musikk."],["å foretrekke","προτιμώ","Jeg foretrekker te."],["best","καλύτερα / περισσότερο","Jeg liker sommeren best."],["bedre","καλύτερος","Denne boka er bedre."],["større","μεγαλύτερος","Oslo er større enn Bergen."],["mindre","μικρότερος / λιγότερο","Jeg vil ha en mindre kopp."],["enn","από, σε σύγκριση","Te er billigere enn kaffe."]],
      [["Ada","Liker du best kaffe eller te?","Σου αρέσει περισσότερο ο καφές ή το τσάι;"],["Leo","Jeg foretrekker kaffe, men jeg drikker også te.","Προτιμώ τον καφέ, αλλά πίνω και τσάι."],["Ada","Jeg synes te er bedre om kvelden.","Νομίζω ότι το τσάι είναι καλύτερο το βράδυ."],["Leo","Ja, og kaffe er bedre om morgenen.","Ναι, και ο καφές είναι καλύτερος το πρωί."]],
      {title:"Απλές συγκρίσεις",explanation:"Χρησιμοποίησε bedre, større ή mindre και πρόσθεσε enn όταν συγκρίνεις δύο πράγματα.",examples:["bedre enn","større enn","mindre enn"]},
      [["Τι σημαίνει foretrekke;",["ξεχνώ","προτιμώ","συγκρίνω"],1],["Συμπλήρωσε: Oslo er større ___ Bergen.",["som","enn","med"],1],["Τι προτιμά ο Leo;",["καφέ","τσάι","νερό"],0]],
      ["Πες ποιο ρόφημα προτιμάς.","Σύγκρινε δύο πόλεις.","Πες ποια εποχή σου αρέσει περισσότερο."],
      "Γράψε δύο πράγματα που προτιμάς και κάνε τρεις απλές συγκρίσεις."
    ),
    makeUnit("24", "Et lite problem", "Προβλήματα και βοήθεια", 50,
      "Να εξηγείς ένα απλό πρόβλημα και να ζητάς συγκεκριμένη βοήθεια.",
      [["et problem","πρόβλημα","Jeg har et problem."],["ødelagt","χαλασμένος","Telefonen er ødelagt."],["å virke","λειτουργώ","Kortet virker ikke."],["å miste","χάνω","Jeg har mistet nøklene."],["å glemme","ξεχνώ","Hun glemte vesken."],["hjelp","βοήθεια","Jeg trenger hjelp."],["å reparere","επισκευάζω","Kan dere reparere den?"],["heldigvis","ευτυχώς","Heldigvis fant vi den."]],
      [["Kunde","Hei, telefonen min virker ikke.","Γεια, το τηλέφωνό μου δεν λειτουργεί."],["Ansatt","Hva er problemet?","Ποιο είναι το πρόβλημα;"],["Kunde","Skjermen er svart, og jeg kan ikke starte den.","Η οθόνη είναι μαύρη και δεν μπορώ να το ενεργοποιήσω."],["Ansatt","Vi kan se på den. Har du kvitteringen?","Μπορούμε να το εξετάσουμε. Έχεις την απόδειξη;"]],
      {title:"Άρνηση με ikke",explanation:"Το ikke μπαίνει συνήθως μετά το κλιτό ρήμα σε μια απλή κύρια πρόταση.",examples:["Den virker ikke.","Jeg kan ikke starte den.","Hun finner ikke nøklene."]},
      [["Πού μπαίνει το ikke στην απλή πρόταση;",["πριν από το υποκείμενο","μετά το κλιτό ρήμα","πάντα στο τέλος"],1],["Τι πρόβλημα έχει το τηλέφωνο;",["δεν έχει ήχο","η οθόνη είναι μαύρη","λείπει η κάμερα"],1],["Τι σημαίνει reparere;",["αντικαθιστώ","πουλάω","επισκευάζω"],2]],
      ["Πες ότι η κάρτα σου δεν λειτουργεί.","Πες ότι έχασες τα κλειδιά σου.","Ζήτησε να επισκευάσουν κάτι."],
      "Γράψε μήνυμα σε ιδιοκτήτη σπιτιού για ένα απλό πρόβλημα που χρειάζεται επισκευή."
    ),
    makeUnit("25", "Norge rundt", "Νορβηγία, γεωγραφία και πολιτισμός", 50,
      "Να δίνεις απλές πληροφορίες για τη Νορβηγία, μέρη, εποχές και δραστηριότητες.",
      [["et land","χώρα","Norge er et langt land."],["en by","πόλη","Bergen er en by."],["et fjell","βουνό","Fjellet er høyt."],["en fjord","φιόρδ","Norge har mange fjorder."],["nord","βορράς","Tromsø ligger i nord."],["sør","νότος","Kristiansand ligger i sør."],["en årstid","εποχή","Vinteren er en kald årstid."],["nasjonaldag","εθνική εορτή","17. mai er Norges nasjonaldag."]],
      [["Lærer","Hva vet dere om Norge?","Τι γνωρίζετε για τη Νορβηγία;"],["Elev","Norge ligger i Nord-Europa og har mange fjorder.","Η Νορβηγία βρίσκεται στη Βόρεια Ευρώπη και έχει πολλά φιόρδ."],["Lærer","Bra. Hva heter hovedstaden?","Ωραία. Πώς λέγεται η πρωτεύουσα;"],["Elev","Hovedstaden heter Oslo.","Η πρωτεύουσα λέγεται Όσλο."]],
      {title:"Ουσιαστικά στον πληθυντικό",explanation:"Πολλά en-ουσιαστικά παίρνουν -er στον αόριστο πληθυντικό. Ορισμένες σύντομες λέξεις δεν αλλάζουν.",examples:["en fjord → fjorder","en by → byer","et fjell → fjell"]},
      [["Ποια είναι η πρωτεύουσα;",["Bergen","Oslo","Tromsø"],1],["Ποιος είναι ο πληθυντικός του fjord;",["fjorder","fjordene","fjords"],0],["Πού βρίσκεται το Tromsø;",["στον νότο","στον βορρά","στη δύση"],1]],
      ["Πες τρία στοιχεία για τη Νορβηγία.","Περιέγραψε μία νορβηγική εποχή.","Πες πού βρίσκεται μια πόλη."],
      "Γράψε έξι απλές προτάσεις για τη Νορβηγία ή για τη χώρα σου."
    ),
    makeUnit("26", "Når noe skjer", "Ασφάλεια και επείγουσες ανάγκες", 50,
      "Να ζητάς άμεση βοήθεια και να δίνεις βασικές πληροφορίες σε μια επείγουσα κατάσταση.",
      [["akutt","επείγον","Det er akutt."],["en ulykke","ατύχημα","Det har skjedd en ulykke."],["politi","αστυνομία","Ring politiet."],["ambulanse","ασθενοφόρο","Vi trenger ambulanse."],["brann","φωτιά","Det er brann i huset."],["en adresse","διεύθυνση","Hva er adressen?"],["farlig","επικίνδυνος","Det er farlig her."],["rolig","ήρεμος","Prøv å være rolig."]],
      [["Operatør","Nødtelefonen. Hva har skjedd?","Γραμμή έκτακτης ανάγκης. Τι συνέβη;"],["Innringeren","Det har skjedd en sykkelulykke. En person er skadet.","Έγινε ατύχημα με ποδήλατο. Ένα άτομο τραυματίστηκε."],["Operatør","Hva er adressen?","Ποια είναι η διεύθυνση;"],["Innringeren","Vi er i Parkveien 12, ved bussholdeplassen.","Είμαστε στην Parkveien 12, δίπλα στη στάση."]],
      {title:"Perfektum με har",explanation:"Το har + μετοχή περιγράφει κάτι που συνέβη και είναι σημαντικό τώρα.",examples:["Det har skjedd en ulykke.","Jeg har mistet telefonen.","Hun har falt."]},
      [["Ποια πληροφορία ζητά ο χειριστής;",["ηλικία","διεύθυνση","επάγγελμα"],1],["Τι συνέβη;",["φωτιά","ατύχημα με ποδήλατο","κλοπή"],1],["Συμπλήρωσε: Det har ___ en ulykke.",["skjer","skjedde","skjedd"],2]],
      ["Πες ότι χρειάζεσαι ασθενοφόρο.","Δώσε καθαρά μια διεύθυνση.","Πες τι συνέβη με μία απλή πρόταση."],
      "Γράψε τις βασικές πληροφορίες που πρέπει να δώσεις σε μια κλήση έκτακτης ανάγκης."
    ),
    makeUnit("27", "Digital hverdag", "Διαδίκτυο και ψηφιακή ζωή", 45,
      "Να μιλάς για βασικές ψηφιακές ενέργειες και να καταλαβαίνεις απλές οδηγίες σύνδεσης.",
      [["et passord","κωδικός πρόσβασης","Jeg har glemt passordet."],["å logge inn","συνδέομαι","Jeg kan ikke logge inn."],["en nettside","ιστοσελίδα","Åpne nettsiden."],["å laste ned","κατεβάζω","Last ned appen."],["å trykke","πατάω","Trykk på knappen."],["en lenke","σύνδεσμος","Jeg sender en lenke."],["internett","διαδίκτυο","Internett virker ikke."],["trygg","ασφαλής","Er denne siden trygg?"]],
      [["Bruker","Hei, jeg kan ikke logge inn på nettsiden.","Γεια, δεν μπορώ να συνδεθώ στην ιστοσελίδα."],["Support","Har du prøvd å lage et nytt passord?","Δοκίμασες να δημιουργήσεις νέο κωδικό;"],["Bruker","Nei. Hvor gjør jeg det?","Όχι. Πού το κάνω;"],["Support","Trykk på lenken som heter Glemt passord.","Πάτησε τον σύνδεσμο που λέγεται Ξεχασμένος κωδικός."]],
      {title:"Har du prøvd å…",explanation:"Η δομή ρωτά αν κάποιος έχει ήδη δοκιμάσει μια πιθανή λύση.",examples:["Har du prøvd å logge inn?","Har du prøvd å starte på nytt?","Jeg har prøvd."]},
      [["Τι έχει ξεχάσει ο χρήστης;",["τον σύνδεσμο","τον κωδικό","τη διεύθυνση"],1],["Τι σημαίνει trykke;",["πατάω","κατεβάζω","κλείνω"],0],["Ποιο είναι σωστό;",["Har du prøvd logge inn?","Har du prøvd å logge inn?","Har prøver du å logge inn?"],1]],
      ["Πες ότι δεν μπορείς να συνδεθείς.","Δώσε δύο απλές ψηφιακές οδηγίες.","Ρώτησε αν μια ιστοσελίδα είναι ασφαλής."],
      "Γράψε τέσσερα απλά βήματα για αλλαγή κωδικού πρόσβασης."
    ),
    makeUnit("28", "I nabolaget", "Γείτονες και κοινότητα", 45,
      "Να επικοινωνείς ευγενικά με γείτονες και να μιλάς για κοινόχρηστα θέματα.",
      [["en nabo","γείτονας","Naboen min er hyggelig."],["et nabolag","γειτονιά","Vi bor i et rolig nabolag."],["støy","θόρυβος","Det er mye støy."],["søppel","σκουπίδια","Hvor kaster vi søppel?"],["en oppgang","είσοδος πολυκατοικίας","Oppgangen må være ren."],["felles","κοινός","Vi har en felles hage."],["å låne","δανείζομαι","Kan jeg låne en stol?"],["å forstyrre","ενοχλώ","Beklager at jeg forstyrrer."]],
      [["Nabo","Hei, beklager at jeg forstyrrer.","Γεια, συγγνώμη που ενοχλώ."],["Beboer","Det går bra. Hva gjelder det?","Δεν πειράζει. Τι συμβαίνει;"],["Nabo","Vi skal ha besøk på lørdag. Det kan bli litt musikk.","Θα έχουμε επισκέπτες το Σάββατο. Μπορεί να έχει λίγη μουσική."],["Beboer","Takk for at du sier fra.","Ευχαριστώ που ενημερώνεις."]],
      {title:"Beklager at…",explanation:"Η έκφραση χρησιμοποιείται για ευγενική συγγνώμη πριν εξηγήσουμε κάτι.",examples:["Beklager at jeg forstyrrer.","Beklager at jeg er sen.","Beklager at det er støy."]},
      [["Γιατί μιλά ο γείτονας;",["θα κάνει επίσκεψη με μουσική","θέλει να μετακομίσει","έχασε τα κλειδιά"],0],["Τι σημαίνει låne;",["δανείζομαι","αγοράζω","πετάω"],0],["Πώς ζητάς συγγνώμη για καθυστέρηση;",["Beklager at jeg er sen.","Takk for at jeg er sen.","Jeg liker å være sen."],0]],
      ["Συστήσου σε έναν νέο γείτονα.","Ενημέρωσε ευγενικά για πιθανό θόρυβο.","Ρώτησε πού πετούν τα σκουπίδια."],
      "Γράψε ένα ευγενικό σημείωμα προς τους γείτονες για μια μικρή συγκέντρωση."
    ),
    makeUnit("29", "En dag i Norge", "Ολοκληρωμένο καθημερινό σενάριο", 55,
      "Να συνδυάζεις τις δεξιότητες A1 σε μια ολόκληρη καθημερινή διαδρομή.",
      [["først","πρώτα","Først spiser jeg frokost."],["så","έπειτα","Så tar jeg bussen."],["etter","μετά από","Etter jobb handler jeg."],["til slutt","στο τέλος","Til slutt går jeg hjem."],["travelt","πολυάσχολος","Det er en travel dag."],["å rekke","προλαβαίνω","Jeg rekker bussen."],["å hente","παραλαμβάνω","Jeg henter en pakke."],["hjemme","στο σπίτι","Jeg er hjemme klokka seks."]],
      [["Maja","I dag har jeg mye å gjøre.","Σήμερα έχω πολλά να κάνω."],["Ola","Hva skal du gjøre?","Τι θα κάνεις;"],["Maja","Først skal jeg på jobb. Etterpå skal jeg hente en pakke og kjøpe mat.","Πρώτα θα πάω στη δουλειά. Μετά θα παραλάβω δέμα και θα αγοράσω φαγητό."],["Ola","Det blir en travel dag. Lykke til!","Θα είναι πολυάσχολη ημέρα. Καλή επιτυχία!"]],
      {title:"Σύνδεση προτάσεων",explanation:"Οι λέξεις først, så, etterpå και til slutt βάζουν τις ενέργειες σε καθαρή σειρά.",examples:["Først står jeg opp.","Så spiser jeg.","Til slutt går jeg hjem."]},
      [["Τι θα κάνει πρώτα η Maja;",["θα αγοράσει φαγητό","θα πάει στη δουλειά","θα πάρει δέμα"],1],["Ποια λέξη σημαίνει «στο τέλος»;",["først","etter","til slutt"],2],["Τι σημαίνει travel dag;",["ήρεμη ημέρα","πολυάσχολη ημέρα","ελεύθερη ημέρα"],1]],
      ["Περιέγραψε μια ημέρα με τέσσερα βήματα.","Πες ποιες μετακινήσεις και αγορές κάνεις.","Χρησιμοποίησε først, så και til slutt."],
      "Γράψε οκτώ προτάσεις για μία ολόκληρη ημέρα σου στη Νορβηγία."
    ),
    makeUnit("30", "A1-målet", "Τελική επανάληψη και αξιολόγηση", 60,
      "Να αποδεικνύεις ότι μπορείς να χειριστείς βασικές προσωπικές και καθημερινές καταστάσεις στο επίπεδο A1.",
      [["å presentere","παρουσιάζω","Jeg kan presentere meg."],["å beskrive","περιγράφω","Jeg beskriver familien min."],["å spørre","ρωτώ","Jeg kan spørre om hjelp."],["å forstå","καταλαβαίνω","Jeg forstår enkle beskjeder."],["å fortelle","αφηγούμαι / λέω","Jeg forteller om dagen min."],["å klare","καταφέρνω","Jeg klarer meg på norsk."],["å huske","θυμάμαι","Jeg husker ordene."],["stolt","περήφανος","Jeg er stolt av framgangen min."]],
      [["Lærer","Kan du fortelle litt om deg selv?","Μπορείς να πεις λίγα πράγματα για τον εαυτό σου;"],["Elev","Jeg heter Maria, kommer fra Hellas og bor i Stavanger.","Με λένε Μαρία, κατάγομαι από την Ελλάδα και μένω στο Στάβανγκερ."],["Lærer","Hva gjør du i hverdagen?","Τι κάνεις στην καθημερινότητά σου;"],["Elev","Jeg jobber på hotell, lærer norsk og går ofte tur med venner.","Εργάζομαι σε ξενοδοχείο, μαθαίνω νορβηγικά και συχνά πηγαίνω βόλτα με φίλους."]],
      {title:"Επανάληψη δομής πρότασης",explanation:"Σε μια απλή κύρια πρόταση το κλιτό ρήμα βρίσκεται στη δεύτερη θέση, ακόμη και όταν αρχίζουμε με χρονική λέξη.",examples:["Jeg jobber i dag.","I dag jobber jeg.","Etter jobb handler jeg."]},
      [["Ποια πρόταση έχει σωστή σειρά;",["I dag jeg jobber.","I dag jobber jeg.","I dag jobbe jeg."],1],["Τι σημαίνει klare;",["καταφέρνω","ξεχνώ","ρωτώ"],0],["Ποια δεξιότητα δείχνει ο μαθητής;",["παρουσιάζει τον εαυτό του και την καθημερινότητά του","συζητά περίπλοκη πολιτική","γράφει ακαδημαϊκό κείμενο"],0]],
      ["Κάνε παρουσίαση ενός λεπτού για τον εαυτό σου.","Περιέγραψε μια εικόνα ή ένα καθημερινό μέρος.","Ζήτησε πληροφορίες και απάντησε σε τρεις απλές ερωτήσεις."],
      "Γράψε ένα κείμενο 60–80 λέξεων: ποιος είσαι, πού μένεις, τι κάνεις και τι σχεδιάζεις."
    )
  );
})();
