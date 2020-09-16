# Git & Github

## Kom igång med Github
Denna handledning innehåller en kort introduktion till Git och GitHub samt en förklaring till varför vi vill att du använder det. Du kommer också i denna handledning få en introduktion till hur du börjar arbeta med Git. Denna guide är inte en komplett handledning till Git utan kan ses som en startpunkt för att komma igång. Vi rekommenderar även den kostnadsfria boken Pro Git <https://git-scm.com/book/en/v2> som är fullmatad med nyttig information kring Git för djupare förståelse.

För att hänga med i guiden utgår vi från att du har en grundläggande datorkunskap.

## Vad är Git & Github?
Git är ett versionhanteringssytem som är utarbetat främst för mjukvaruutvecklare och hantering av kod, speciellt i större projekt med flera utvecklare som jobbar mot samma kodbas. Med ett versionshanteringssystem menas att systemet hjälper användarna att hantera filer och spara dem i olika versioner så att man kan spåra förändringar och t.ex. gå tillbaka i historiken. Det ger också möjligheter för flera utvecklare att dela och kunna samarbeta kring gemensamma filer utan att riskera att man skriver över någon annans arbete. 

Git skapades av Linus Torvalds, ett namn som säkert många känner som skaparen till operativsystemet Linux. Git uppkom helt enkelt för att Linus inte tyckte att det fanns ett bra och fritt versionhanteringssystem som kunde hantera all kod som Linux består av och underlätta för alla de olika utvecklare som är inblandade i utvecklingen av operativsystemet.

GitHub är en tjänst som ger oss utvecklare möjlighet att, via webben, skapa, hantera och lagra projekt och dess data via Git. GitHub ger oss också möjlighet att dela kod med andra, studera andras kod och använda andras kod för att bygga vidare på. GitHub är alltså en tjänst för "social coding". Man kan också använda GitHub för att dela utvecklingsfiler i privata grupper eller som ensam utvecklare hantera sina filer på ett smidigt sätt. Vi skulle kunna kalla det ett slags Facebook, fast för kod. På senare tid har dock allt fler upptäckt möjligheterna med Git och GitHub och nu för tiden hittar man inte bara mjukvaruprojekt på GitHub utan även författare, lärare och en mängd andra branscher.

## Varför vill vi att du använder Git och GitHub?

* Först och främst kommer Git och GitHub vara något du med säkerhet kommer stöta på i ditt kommande arbetsliv.

* Ditt GitHub-konto kommer fungera som ett CV där du samlar dina projekt och där eventuella arbetsgivare kan se vad du kan och har producerat tidigare. Detta är något vi märker fler och fler arbetsgivare tycker är viktigt så att redan från början bygga upp sitt GitHubkonto bör vara en viktig punkt i din utveckling.

* Du kommer enklare kunna hantera dina filer. Inga datorkrasher kommer få dina filer att försvinna (om du är noga med att synka dina filer med GitHub). Du kan också komma åt dina filer från flera olika datorer och enheter.

* Du kan enkelt dela dina filer med dina lärare. Vid examinering av t.ex. koduppgifter vill läraren titta på din kod och kan då via GitHub enkelt komma åt denna. Vid t.ex. frågor kring eller problem med din kod kan läraren enkelt komma åt den senaste versionen.

* I vissa kurser kommer ni att arbeta i grupper och GitHub ger en bra möjlighet att sammarbeta i mjukvaruprojekt.

* GitHub är ett kraftfullt verktyg för att studera och lära sig av andras kod.

* Läraren kan följa dina versioner och se hur du ligger till i kursen.

* GitHub har också ett system för att skriva kommentarer, ToDo-listor m.m som underlättar vid arbetsgången.

## Terminologi
När man börjar jobba med Git och GitHub kommer man stöta på vissa begrepp som är viktiga att känna till. Vanliga ord som vi kommer använda är:

* **Repositorie/Repository** - Kallas ofta förkortat för "repo" och är oftast ett projekt. Vi kan likna ett repositorie med en mapp/katalog innehållandes filer och undermappar som kan versionshanteras. Du skapar oftast ett repositorie per kurs eller ett repositorie per applikation.

* **Commit** - Att "commit:a" sina ändringar talar om att man nu har uppdaterat sina filer och sparar dessa i en ny version, en commit. Detta görs i lokalt på din dator.

* **Push** - Att "push:a" innebär att man tar de "commit:ade" filerna och skickar/pushar upp på en central server. I Vårt fall kommer detta oftast vara GitHubs server.

* **Forking** - Detta innebär att man hittar ett intressant projekt som någon annan lagt ut på GitHub och som man själv vill bygga vidare på. "Forkar" man då projektet får man en kopia av alla filer som man kan fortsätta jobba vidare med på egen hand och kanske i slutändan föreslå dessa förändringar för orginalskaparen.

* **Pull request** - Detta innebär att du har forkat ett projekt/repositorie och gjort förändringar i detta som du vill dela med dig av till orginalprojketet. Du kan då föreslå detta för repositorie-ägaren genom att göra en "pull request" som ägaren får godkänna.

* **Merge** - Om ägaren av repositoriet tycker att dina ändringar är bra kan hon/han välja att baka in dessa i orginalkoden d.v.s. göra en "merge", en sammanslagning.

* **Branch/Branching** - Du kommer att använda "branching" eller förgreningar i ditt repro för att undvika att ändra i projektets huvudgren. Detta är extra viktigt då man är flera personer som samarbetar i samma repro då man enklare kan jobba utan att skriva över varandras filer.

## Kort video serie som beskriver hur man jobbar med Visual Studio Code och Github (Rekommenderas starkt!).
<https://www.youtube.com/playlist?list=PLpPVLI0A0OkLBWbcctmGxxF6VHWSQw1hi><br>

Lägg till två extensions till Visual Studio Code:<br>

**Git History** och **Git Easy**

## Kom igång med GitHub
Det första Du bör göra är att skapa dig ett konto på GitHub. Här är det viktigt att du registrar dig med din studentmejl från ABB Industrigymnasium.

Fyll i formuläret som nedan fast med ditt eget användarnamn och e-post.
![Github Signup](https://github.com/abbjoafli/Programmering-1/blob/master/Git-Github/Github_SignUp.PNG)

### Skapa ett repositorie
Nu är det dags att skapa ditt första repositorie. Det gör du från din startsida på GitHub när du loggat in.

![Github Signup](https://github.com/abbjoafli/Programmering-1/blob/master/Git-Github/Github_LoggedIn.PNG)

Klicka på knappen "New" och fyll i dina uppgifter. Går du en kurs har du säkert fått information om vad du ska döpa detta repositorie till.

![Github New](https://github.com/abbjoafli/Programmering-1/blob/master/Git-Github/My_Website_Github.PNG)

Du kan här välja om du vill skapa ditt repositorie public (alla kan se din kod) eller private. Bara du och de du delar ditt repositorie med kan se dina filer.

### Övning - Github Pages
Ni ska få skapa ett repo där ni presenterar er själva eller egentligen vad ni vill så länge det är inom skolramen, och så kan ni också lista projekten som ni gör under utbildningens gång om ni vill.

Repot som man skapar med namnet *"username.github.io"* blir kontots hemsida kan man säga.

Här är en länk som beskriver det mer i detalj som ni kan följa:

<https://medium.com/@anilemrah/how-to-publish-your-html-with-github-pages-8f3f854e7d4>

# Fortsättning på Git & Github

## Git
Git är ett versionssystem medans GitHub är en tjänst som använder sig av git för att bygga en webbplats.

Vi ska nu börja titta på hur vi arbetar med Git. Denna guide har valt att koncentrera sig på hur man arbetar med Git via ett terminalfönster. Det finns grafiska klienter att använda men dessa får du själv upptäcka när du väl lärt dig grunderna i Git-kommandon. Terminalfönster är mycket kraftfullare arbetssätt medans grafiska klienter är enklare att arbeta med, som den som finns inbyggd i Visual Studio Code.

## Installera Git på din dator
Om du arbetar på en egen dator är det en bra start att börja med att installera Git. Att installera Git är inte svårare än att installera något annat program. Du laddar ner och installerar en körbar fil. [Mer information hittar du på Git:s officiella sida](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Välj sätt att installera på beroende på ditt operativsystem.

### Konfigurera Git
För att på ett enkelt sätt komma igång kan vi börja med att konfiguera Git genom att tala om vem vi är.

#### Windows
Har du installerat Git från installationsfilen bör du i din startmeny fått ett alternativ "Git". Du öppnar ett terminalfönster för Git i Windows genom att du går via startmeny --> "Git" --> "Git bash".

![Git](https://raw.github.com/LNU-CoursePress/info/master/manualer/images/git_bash.png)

#### De första inställningarna
Börja med att testa att din installation är korrekt genom att skriva:
<br><br>
`git --version`
<br><br>
Du bör då få upp en bild liknande denna
<br>
![Git](https://raw.github.com/LNU-CoursePress/info/master/manualer/images/git_version.png)
<br>
Forsätt genom att ange dina uppgifter i konfigurationen för Git. Använd såklart ditt namn och e-postadress (din studentaddress)
<br><br>
`git config --global user.name "John Doe"`
<br><br>
```git config --global user.email johndoe@example.com```
<br><br>
Kontrollera dina inställningar via:
<br><br>
`git config --list`
<br><br>
![Git](https://raw.github.com/LNU-CoursePress/info/master/manualer/images/git_config.png)
<br><br>

## Att skapa ett repositorie
Ett centralt begrepp inom Git är repositorie (repository) eller ofta förkortat som "repo". Detta kan förklaras som ett versionshanterat projekt. Du skapar oftast ett repositorie per kurs eller per applikation. Ett repositorie kan du skapa på olika sätt. Antingen via att skapa ett helt nytt repo på din lokala dator eller genom att ladda ner ett redan påbörjat repo från t.ex. GitHub.

### Skapa ett nytt lokalt repositorie
Börja med att använda kommandot cd i terminalen för att bege dig till någon lämplig katalog där du vill skapa ditt repositorie. Har du ingen erfarenhet av dessa typer av kommandon (UNIX-kommandon) kan vi rekommendera [Ubuntu-manualens korta introduktion till de vanligaste](https://www.guru99.com/must-know-linux-commands.html). Väl i hemkatalogen skapar du en ny mapp genom att skriva:
<br><br>
`mkdir my-application`
<br><br>
Detta skapar en katalog med namnet my-application. För att skapa ett repositorie i denna mapp navigerar du dig in i mappen och där skriver
<br><br>
`git init`
<br><br>
Du har nu skapat ett helt eget lokalt repositorie och har förmodligen fått en mapp som heter *".git"* (kan vara dold i filhanteraren). Den mappen innehåller all information om detta repositorie och de versionsförändringar vi kommer göra. Denna mapp ska du alltså inte bry dig om så mycket utan bara låta Git sköta om. Du kan nu testa statusen på ditt repo genom att skriva:
<br><br>
`git status`
<br><br>
Vi har ännu inte lagt till några filer i vår versionshanterade katalog (vårt repo). Så skapa en fil index.html och spara i katalogen du nyss skapade. Kontrollera nu statusen igen med `git status` och observera nu skillnaden.

Git har alltså upptäckt att vi lagt till en ny fil i mappen och talar om att denna inte är versionshanterad. Varje fil i en mapp som är Git-hanterad kan antingen vara *"tracked"* eller *"untracked"*. För att lägga till filen index.html vi nyss skapade skriver du:
<br><br>
`git add index.html`
<br><br>
Ovanstående kommando lägger till just filen index.html. Har man skapat flera filer samtidigt som vill lägga till använder man:
<br><br>
`git add .`
<br><br>
Vilket också är det vanligaste fallet. Kolla nu status på ditt repositorie igen med `git status`.
Filen är nu tillagd i vad man kallar "staging area" men den är fortfarande inte helt versionshanterad. Vi måste också göra en så kallad "commit" för att få till detta. En "commit" gör man när man suttit och jobbat ett tag med något, kanske skrivit en deluppgift, implementerat en funktion i sin applikation eller kanske bara tar en paus och vill spara undan det man gjort hittils. Man brukar säga att man ska "commit:a" sin kod ofta men inte så att det blir absurt. En "commit" ska också innehålla en bra kommentar som beskriver för andra vad du gjort sedan sist. Även om du kommer jobba ensam i vissa repositorier så var noga med att skriva bra och förklarande kommentarer till dina commit:s. För att göra en commit skriver du i terminalfönstret:
<br><br>
`git commit -m "I have created the file index.html, but it is still empty"`
<br><br>
Du bör såklart byta ut kommentaren innanför citattecknen mot en kommentar som passar i ditt fall. Det kan vara bra att skriva kommentarerna på engelska då man ibland stöter på problem med svenska tecken. Kontrollera nu ditt repositories status
<br><br>
`git status`
<br><br>
Testa nu att göra en ändring i filen index.html samt skapa en ny fil och lägg i mappen. Kolla status, lägg till den nya filen med
<br><br>
git add .
<br><br>
och gör en ny commit. Du bör nu ha ett lokalt repositorie med två versionshanterade filer och två stycken "commits".

### Skapa ett repositorie på GitHub och klona ner lokalt
Men om man har ett repositorie på GitHub och vill utveckla lokalt på sin dator och sedan skicka upp förändringarna. Hur gör man då?

Börja med att skapa ett repositorie på ditt konto på GitHub. På ditt nya repositories första sida, nere till höger, kommer du se något som heter "HTTPS clone URL". Kopiera den sökväg som finns där. Den ska vi nu använda via terminalfönstret och klona ner en kopia av repositoriet och få en koppling så vi kan skicka upp våra förändringar.

Gå till terminalfönstret och navigera dig till den mapp där du vill kopiera ner repositoriet och skriv:
<br><br>
`git clone https://github.com/xx222xx/myRepo.git`
<br><br>
där den sista delen är den address du kopierade. Du har nu sparat ner en exakt kopia av det som låg på GitHub. Alla filerna bör ha hamnat i en mapp som om man tittar på addressen ovan borde heta "myRepo". Du har nu ett lokalt skapat repositorie och kan jobba vidare med "add" och "commit" under arbetets gång. Observera dock att dessa förändringar bara sker lokalt än så länge.

## Skicka upp förändringar till GitHub
Vi har nu arbetat på ett tag men som sagt har vi bara gjort våra förändringar lokalt på den dator vi arbetar på för tillfället. Vi vill ju gärna spara dem centralt på GitHubs server så vi kan komma åt dem från vilken dator som helst eller kanske är vi flera som jobbar i samma projekt. Kanske ör det så att du nu suttit i skolan och jobbat och vill nu gå hem och arbeta vidare på din dator hemma. Naturligtvis måste vi skicka upp förändringarna till GitHub så vi kan komma åt dem från en annan dator. För att göra detta skriver du i terminalfönstret:
<br><br>
`git push`
<br><br>
Man kan nu kontrollera att förändringarna finns på GitHub och man kan nu klona ner dessa på liknande sätt till en annan dator man vill jobba vidare på.

## Övning
Nu ska du få testa lite själv. Din uppgift blir nu följande.

1. Logga in på ditt GitHubkonto och skapa ett nytt repositorie där. Skapa en readme-fil och en ignore-fil i repositoriet. [Läs mer om ignore-filer](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#Ignoring-Files).
2. Skapa en katalog med namnet "projects", via terminalfönstret, på lämplig plats i ditt filsystem.
3. Klona nu ut repositoriet till din lokala dator till den mapp du nyss skapade.
4. Skapa en ny fil, index.html, och lägg till den i repositoriet och skicka sedan upp till GitHub. Besök sidan för ditt GitHub-repositorie och kontrollera att filen finns där.
5. Gör en mindre förändring i index.html samt skapa en ny fil, contacts.html. Se nu till att den nya filen och den nya förändringen hamnar i en ny commit upp på GitHub.
6. Skapa en ny mapp, "projects_simulate" för att simulera att vi nu satt oss och jobba vid en ny dator. Klona nu ner repositoriet på nytt till denna mapp och kontrollera att det har alla de uppdaterade filerna med sig.
7. Gör en förändring i någon av filerna och gör en commit på detta. Skicka sedan upp det till GitHub igen. Kontrollera att förändringen kom med.
8. Gå nu tillbaka till den första mappen "projects". Kontrollera statusen. Du bör där se att den senaste förändringen som finns på GitHub inte finns där ännu. Vi måste på något sätt ladda ner den innan vi kan fortsätta jobba. Annars kommer vi hamna i osynk och det vill vi inte. Det är därför viktigt att via terminalfönstret ställer oss i mappen och kör kommandot: `git pull` Det bör ladda ner de förändringar som gjorts och vi får samma version som finns på GitHub. Vi kan nu fortsätta jobba med filerna.

Här hittar du en filmer där vi visar hur man kan lösa uppgiften ovan.
<http://orion.lnu.se/pub/information/coursepress/info/video/git/git_win.mp4>

## Branching
Ytterligare ett begrepp vi måste känna till är Branch eller Branching. Det är en finess som är oumbärlig när man börja jobba flera personer inom samma projekt. Med en branch menar man att man skapar en förgrening i aktuellt projekt. Det är vanligt förekommande att man t.ex. skapar en ny branch när man ska införa en ny funktion i en applikation. Man skapar då en branch där man jobbar med koden till denna funktion utan att påverka själva huvudspåret. Man kan alltså säga att en branch är en tillfällig kopia som används under tiden en ny funktion implementeras för att sedan slås ihop (genom en så kallad "merge") med själva huvudspåret (som alltid kallas master). För att få en tydligare bild av vad branchning är rekommenderas vidare läsning i git-boken.

OK, säg då att vi vill jobba med en branch. Kanske är det en funktion eller webbsida som vi ska skapa i ett gemmensamt projekt som vi vill se till att vi har i en egen branch under tiden vi jobbar med den. För att sedan slå ihop med själva huvudspåret när vi anser oss klara med funktionen.

Vi ser till att vi i vårt terminalfönster befinner oss i vår versionshanterade mapp och kör kommandot
<br><br>
git checkout -b my-new-branch
<br><br>
Där my-new-branch är det namn du ger din branch. Kör nu `git status` så ser du att du nu befinner dig i din skapade branch. Alla add och commit kommer nu endast att påverka denna nya branch. Så under tiden du jobbar med funktionen gör du dina förändringar bara till denna förgrening av koden. När vi sedan känner oss klara med funktionen vi utvecklat vill vi såklart slå ihop våra förändringar med huvudspåret (som egentligen är en branch som kallas "master"). Detta gör vi genom en så kallad megre. Detta gör man i två steg. Först måste vi förflytta oss tillbaka till vår master-branch och sedan tala om att vi vill göra en merge från vår egna branch. Kör följande kommandon:
<br><br>
`git checkout master git merge my-new-branch`
<br><br>
Sen bör man naturligtvis köra en `git push` för att skicka upp våra förändringar. Detta brukar vara ett vanligt arbetsflöde när man jobbar med git. Vi kan rekommendera att skriva ut följande bild för att ha som stöd när man jobbar med Git och Branches.
<br>
Detta ska förhoppningsvis gett lite information kring hur du kommer igång med Git och GitHub. Vi kan vidare rekommendera att du tittar upp följande länkar för ytterligare information:

* [Den interaktiva guiden som GitHub har](https://try.github.io/). Den tar upp fler saker än vad vi lärt oss hittils men det kan ändå vara ett bra läge att köra den nu

* Du bör också skaffa dig förståelse för [taggning](https://git-scm.com/book/en/v2/Git-Basics-Tagging) och hur man går [tillbaka i historiken](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things) av sina commits.

* [Ett så kallat Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/) som tar upp de vanligaste Git-kommandona samt även en enklare referens till dessa kommandon
