# MXLU_Documentation
Median XL: Ultimative Documentation

===================================

Add to-do stuff here.

TO-DO (those with no names are added by Quirinus):
- update: docs --> Characters --> Item-Only Skills page. Use a script to collect oskills from the oskills list in the Items section. Make the script format them nicely, like they are now. I'll also probably have to ask marco for the cotw oskills. Then we just need to add in descriptions manually.
- add a note to shields that the class bonus isn't counted in, but all others are. link to the defense and block page or base items page.
- Fix: Quest Reference: all dragon recipes use TP scroll instead of some using ID and some TP
- Add: skill tree names to char pages
- Change: Prefix/suffix list: Make calculators not reset the filter dropdowns/inputs.
- Change: Rename some of the areas that have changed names (uberquest pages, challenges, quest reference list and anywhere else that it might appear). Change their parent level names too if they're different.
- Change: Make RW page in two columns; put name/level above properties, put rune description below that, and after that are the properties. Or something like that.
- Change: Make filters on all pages always float in vision (absolute pos)?
- Change: TU page: make the amulets/rings/jewels/quivers be in columns of 2 if the filter is set on any tier, except "All".
- Fix: Quest Reference list: difficulty headers not dissapearing when the contents are empty.
- Add: Speed Calculator to the Characters (?) section, with explanations. http://www.medianxl.com/t5893-speed-mechanics-explained-updated-speedcalc
- All other changes from the XV and XVc changelog.
- (claygame) : do we really need 'armor looks' page?
- Add/Update: Quest Reference page with various stuff...
- Athulua, Strategy / Abilities section needs updating.
- Add: (CG)- a title for the last 2 check boxes in the quest ref page. which ones exactly? kor: the names for boxes are left at left of each check boxes. so 'Miscellaneous' and 'Only one instance'. Maybe moved the names to right side to be more clear
- (quiri) : remove anchors/links from menu when adding filter to the page http://goo.gl/fJc28a
- are there any changes in TU/SU/SSU/SSSU items? kinda hard to tell without files, but if you noticed something or it's in the changelog, fix it.
- affix and stat related things on items, and some items still not updated from patch XV & XVc, but it's kinda hard to do it without files
- update str/dex dmg bonus on: Cranebeak, Greil's Urvan, Forge Fire, Viperfork, Steel Pillar, Sky Scorcher, Divine Mandible, Tonbogiri, Polar Vortex, Wrath of Nature, Mistress of Pain, Glowing Vertigo & Tormentor. (not from legacy items obv) (you can probably find the right values if you search the XV bugs/feedback thread for my posts, but it's still good to check them)
- use new pics for changed ubers (a few pages back) that didn't get a pic in the contest ; dunno which ones to choose when people disagree XD
- on sets page, make the image valign: center (should be centered relative to the stats text)
- change "Socketed: x" to Socketed (x) everywhere - to match the ingame text. open all files and use replace all in all documents. use Regular Expression search mode for searching/replacing (click at the top of the file, have to start search from the beginning):
   find: Socketed: ([1-6])
   replace with: Socketed \(\1\)
   (the \1 in the replace line is replaced with the number found in the search line ([1-6]) )
- include speedcalc. make a page for it in the items or char subsection, with marco's explanations, but a shorter version. provide a link to marcos explanations/dl.
- maybe add http://www.medianxl.com/t86-how-spell-damage-works as a new page in concepts, but rewritten a bit?
- make the docs not collapse section when clicking on an open page_book (page_book_open). (in ___dtree.js, probably do something to line 128?)
- Mammen Axe (2): now has 2 sockets. Hexblade (2): now has 2 sockets. update in baseitems. check if TU2 versions have 2 sockets or still 1.
- add note: can't lucky or mo void rings (check how to add a note on, for example: Linarian's Legacy)
- Marchosias' Deception chance to block add note that it can't go lower than 0%, but it will reduce class bonuses; same Wheel of the Seasons SSU
- fix all & in docs change to &amp; , change all non-tag < and > to &lt; and &gt;
- add SU:SSU:SSSU ratio = 10:4:1 to the SU page, and maybe abbreviation page.
- on gs abbrev. - add note that gs number is automatically shown when you enter the game.
- bremmtown upg - add flavor text from the bottom+color: http://www.medianxl.com/t6281p500-new-screenshot-items-2014-2015#180887
- cc brc/ennead pages and wherever (char page?), fix color, stat order and remove 'challenge' word (check the color/text/order of empty cc): http://www.medianxl.com/t6281p500-new-screenshot-items-2014-2015#180887
- cc brc completition note text, make it part of the recipe and put it as a stat, in the middle and not inline?
- faq: What are Challenges?, lc0 req exactly lvl 5, not at most; What are Uberquests? maybe add heroics. maybe change color from blue to something normal?
- remove deva king from quest ref (at all act/difficulty dragon eggs, so 6 places to change in total)
- fix/update uber locations and parent levels in quest reference list
- rename anchors and links to renamed bosses terul/zorun tzin (don't do this if you don't check for links EVERYWHERE, otherwise I'll do it)
- check if there's still 2 Linarian's Legacy enabled: one with +2 Life on Striking (the real one) and the other with 1% Reanimate as: Inarius (the legacy one enabled by mistake)... kinda hard to disapprove it without files.
- compare MO/UMO ingame and in the docs (mainly for missing/extra + and - signs and a few letter changes), I think I updated all, but it doesn't hurt to check. I tihnk you can use legacy umo from ss. (also, obv, stun attack with length is fine)
- check procs "on Attack". was "on Attack" --> "on melee Attack" removed to get more space, or did marco add it in some of the lastest patches. if it's not too long (ie. it makes the page too wide because of some long ass procs), add "melee" back
- (kor) add colored items to doc (set finished)
- (kor) extract monster animations
- (CG): remove Durability from Indestructible and throw weapons items in docs in sets/tu/su/ssu/sssu/RW pages.
- fix hit causes monsters to flee % on all pages. check in the files.


Suggestions:
- (Claygame) Add a pic below every reciepe showing what the ingredient look like, for example: minigame recepie have pic of cc and the rune below or beside the recepie text.
- (Claygame) Instead of having "see THIS PAGE for details" below descriptions, make the key part of text as a direct link to the intended page.
- (Claygame) Add pictures of Veteran monster of each act on the monster token page.
- Maybe somehow merge SU/SSU/SSSU and TU6 stuff so it can be more easily compared?
- Maybe add a link to the maps for the ubers that have it? Or add a note at the top of each uber page that the maps are available on Quest Reference page?
- Base items: maybe use regex to remove 0 from req str/dex/lvl?
- Add silver td border to RWs, base items and char orb, like in the rest of the pages?
- Add links to some old/legacy docs to the doc, probably a new page under information. (http://www.medianxl.com/t4038-legacy-docs and the ones on the FTP location of the current docs)
- Add a list of monsters that drop each GR in Yshari. I guess I gotta ask Marco if I can do it.
- (claygame) Add pic of the armor/weapon type at the top of each section of RW page to let people know exactly what works for these RW?
- (claygame) Add the top row showing titles of each coloum for each time a separate section starts for Items->Base
- Change: Rune/RWs: Level --> Required Level?
- Base Items page: Maybe add a note that broken ethereal items cannot gain durability even if they have the 'repair xx durability in yy seconds' mod.
- (claygame) : maybe add link to forum somehow in the About page that opens when docs r opened for the first time to make people come more often on forum?
- Add: skill tree names to skillpoint planner?

DONE:
- Pester Marco to explain in more detail about the new Amazon faster cast rate with staves and 2h weapons. Then update the note on the Amazon page if necessary.
-  Add: GS abbreviation
- Fix: - Docs > FAQs > LFAQ (Less FAQ) > *Area Guides (Spoilers)* > maps for Triune and Vizjun are not loading. I get 404 not found, probably just some links missing. (Metalistas) /// Also added extra maps to page
- Fix: Area Effect Attack on mount arreat set should be orange.
- Change: Maybe make the "Uniques" node in the menu not open the TU page on click (make it just a normal book that opens the sub-sections).
- Change: Make clicking on a page_book tree open the tree and page, instead of just the page.
- Fix: Check all files for outdated links to Laz's site: http://modsbylaz.hugelaser.com/ --> http://modsbylaz.vn.cz/
- Fix (Claygame & Quirinus): Any proc rolls over after lvl 63. lvl 66 = 2. Looks like (o)skills cap at lvl 62 (so +65 = +62). Check for all instaces of it and fix on all pages.(CG: checked and corrected TU,SU,Sets,RW,Item Oskills page):
 All is One full set bonus gives "100% Chance to cast level 66 Death of a God when you Die" idk if it casts a lvl 2 or lvl 66 ctc, check and correct it if needed. SSSU Short bow have +65 to OHMAN --> 62, looks like it caps instead of rolls over. SSSU spirit edge proc lvl 66 --> 2. Fixed on their own pages, and on proc/oskill list pages.
- Check out manafire's rewrites for some of the uberquest tests (they're in a topic in the docs subforum) /// Also updated TA trophied Sleep stats
- Remove: Diablo Clone. (from the page and from the menu) /// Commented him out in summoningubers and index.
- Updated Book of summonning recipe, now cubes with Belial charm rather than Astrogha. Also updated Kabraxis' Soul charm. Trinity proc is now on base charm rather than upgrade.
- Item fixes: eternity runeword gives Enhanced Defence instead of Damage; steel punisher no longer gives Deathlord morph; blackened no longer gives Duriel reanimate; reaper's hand no longer gives queen of blades oskill; periapt of life umo now gives + 100 replenish life; ape set changed from +3 skills to +18 Deathstrike [few other changes to set not documented, request SS]
- Remove: Proc/oskill page: Remove procs from Tier 1-5 (so only TU(6) should remain), to reduce the number of useless lines. /// Commented them out instead, as it is a lot of information in case we change our mind.
- Check/Fix: Block chance formula (Concepts > Block & Defense): (Block% * (Dexterity - 16))/(Character_Level * 2) Check if it's 15 or 16 and if the max block table is correct (by trying ingame). Table 8% = 2266 or 2265? /// Correct constant in formula is 15 (no biggie tho). Adjusted table accordingly.
- Add: WUW abbreviation: what you want (for it), explain that it's used when trading, look at N NN O R abbr.
- Add: Abbreviation/Uberquests: Mendeln to indicate void boss. Change: Abbreviations/Uberquests - separate RS, Rathma - each in its own line. Rathma can mean Rathma from the void or rathma from Rathma Square. RS means Rathma Square uber.
- Fix: FAQ: features -> uber and challenge links are broken.
- (Claygame) Add a desc to tell that cc says "all trials completed" when all trials r done and hearts have not been cubed yet, idk coding so i cant do it.
- Check/Fix: Is the AoE on Mount Arreat set orange or gold or what color is it? /// Text should be in correct colour now
- Update: all character pages with new skills and images
- Add: Maybe include the socketed rune bonus in the RW stats (or make it toggleable). /// it's already included by default
- Fix: Make ([Class] Only) either white or red for all items/classes. Currently only Barbarian items have it as white, the rest have red.(rish: if every other char have it as red.. make barb red too, will be easier and will look sexier. I did it for SU/TU/Sets page. If its fine then u can strike this Fix off this list)
- (cg) fixed str req on coat of darkness as per this report by chaomen http://goo.gl/OWGVER
- (cg) fixed ctc name on tu morion as reported by marco here http://goo.gl/sbQLd3
- (cg) corrected t6 Ravenbeak str bonus reported by stealthmaster here http://goo.gl/8dQ8NQ
- (cg) corrected damage type bonus on Spectre rw reported by sergey9908 here http://goo.gl/vZIswN
- (ItalianPower) Add: a note somewhere (TU/SU/RW/Set... etc.) pages that if you already have a skill that the item gives (from the character), it will only give at max 3 to it.
- (kor) Add: Sin set weapon/shield have special graphic. Check the ss (ask quirinus or someone for it) and find the image on google/wikis or extract from mpq. Then put it in the right folder and apply it to the sets.html page.
- (kor) Check/Fix: Druid Trap Rat Set: Rainbow Warrior ratfink reanim color gold or magic? /// gold
- (kor) Add: Quest Reference list: CoV and maybe DP have a proc on being struck - lazorz beam in the opposite(?) direction? Check and add if so. http://www.medianxl.com/t5684p860-short-questions-thread#154303 /// Death Projector had on-hit proc while Crystal had chance to teleport when you are close
- (kor) Add: Quest Reference list: K3K necros cast miasma now (add a tooltip that explains what miasma skill is and what it does, like the other skills) /// also added nightmare skill
- (cg) fix: updated ctc on tu assault helmet as reported by sWAP here http://goo.gl/uuByM6
- (cg) fix: updated color of Area affect modifier on su hexblade and ssu flambnerge as reported by stealthmaster here http://goo.gl/rMIsBl
- (kor) Check/Fix: Is the Yshari Set Sword item type Mystic Sword? If not, correct it. I also hope all the other Yshari set item names are correct.
- (kor) Add/fix: check and add the range of barb skill on sssu balanced axe Lacerator as reported by seelenstein here http://goo.gl/L0uOok
- (kor) Add: New elemental stone pictures /// I placed the transparent pictures on separate folder
- Fixed Trag&#8217;Oul name references.
- Add: Signet of gold upgrade recipe to the cube page. 3x gold sig (non-starting one) --> greater gold sig
- Add: oskills from new sets and set items to the oskills list page
- Add: procs from new sets and set items to the procs list page
- Update: any proc/oskill change on any item on the oskills/procs list page
- Add: Shield chance to block on all item pages (base+stat, for class-only add class base chance too).
- (kor) Fix:New dunc map has wrong location of sigils
- Check/update: Are Yshari set items drillable for sockets? // Checked with maximum number of sockets possible on all pieces, jewels are consumed as per recipe but no sockets added on any of the items
- Update: Skillpoint planner
- Add/fix (cg) : check and update flee % on stormhowl bow, reported by mrtawsiti here http://goo.gl/lhCTw5 - kor: kambala said its 0.125% but we dont have txt file so quiri will have to check this)
- check (CG) : check if holy avenger (sssu broad sword) have pala skills or not, if it do then add the range, reported by gcggcg here http://goo.gl/2ddBbO
- for cube recipes: Upgrade to Non-magical Item, Upgrade to Magical/Rare Item - add they're only for armor/weapons
- add a note to double mo bonus that the orbs added before don't get double stats (doesn't work retrogradely)
- Check/Add: Can Ring of Pride be cubed with MOs? What about (More) Luck or Lottery? Can Sigil of the 7 Deadly Sins be cubed for (More) Luck or Lottery recipes? // no and no and no no no
- add note: can't lucky or mo void rings (check how to add a note on, for example: Linarian's Legacy)
