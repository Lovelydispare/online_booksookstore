import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books',  {
   state: () => {
      const books = {
          0:{
              id: 1,  
              image: "/fall-on-your-knees.jpg",
              name: "Fall On Your Knees",
              price: "3000",
              author: "Ann-Marie MacDonald",
              description: "Fall on Your Knees is a gothic family saga set in early 20th‑century Canada and New York, tracing the Piper family’s secrets, love, and betrayal across generations.",
              long_description: "“Fall on Your Knees” (1996) by Ann-Marie MacDonald is a sweeping, dark family saga set in early 20th‑century Canada and New York, exploring themes of love, obsession, secrets, and survival through the troubled Piper family. It is widely acclaimed for its gothic intensity and was later chosen for Oprah’s Book Club.",
              genre: " historical literary fiction",
              ratings: "4"
          },
          1:{
              id: 2,
              image: "/percy-last-olympian.jpg",
              name: "Percy Jackson and Last Olympian",
              price: "2000",
              author: "Rick Riordan",
              description: "Percy Jackson and the Last Olympian is the epic finale of the series, where Percy and his friends must defend Mount Olympus against Kronos’s army in a battle that will decide the fate of gods and mortals alike.",
              long_description: "In the epic finale of the Percy Jackson series, Percy and his friends must defend New York City as Kronos and his army launch their final assault on Olympus. With prophecies unfolding and the fate of the gods hanging in the balance, Percy faces his most dangerous battle yet — one that will decide the future of both mortals and immortals.",
              genre: "Young Adult Fantasy",
              ratings: "4.5"
          },
          2:{
              id: 3,
              image: "/the-sixth-man.jpg",
              name: "The Sixth Man",
              price: "2500",
              author: "David Baldacci",
              description: "The Sixth Man is a gripping King and Maxwell thriller where ex‑Secret Service agents Sean King and Michelle Maxwell uncover a deadly government conspiracy while defending Edgar Roy, a brilliant analyst accused of murder.",
              long_description: "David Baldacci’s The Sixth Man is a fast‑paced thriller where King and Maxwell investigate the case of Edgar Roy, an alleged serial killer, only to uncover a deadly conspiracy tied to national security.",
              genre: "Crime Fiction",
              ratings: "4.2"
          },
          3:{
              id: 4,
              image: "/angels-in-hell.jpg",
              name: "Angels in Hell",
              price: "1500",
              author: "Janet Morris",
              description: "Altos, Hell’s only Unfallen Angel, tours the underworld where figures like Genghis Khan, Marilyn Monroe, Stalin, and Napoleon clash in bizarre, ironic adventures.",
              long_description: "Angels in Hell (1987) by Janet Morris is part of the Heroes in Hell shared‑world fantasy series, a Bangsian saga where all the dead—heroes, villains, and icons alike—find themselves in Hell, continuing their ambitions and rivalries beyond death. The novel follows Altos, Hell’s only Unfallen Angel, who guides readers through surreal and satirical encounters with historical and cultural figures: Genghis Khan teaches a military historian a brutal lesson, Marilyn Monroe kisses the Devil, Stalin rewrites the Bible, and Napoleon’s lover contemplates Heaven. Blending dark satire, gothic fantasy, and philosophical reflection, the book paints Hell as a stage for eternal human folly rather than simple punishment, offering a quirky, ironic exploration of ambition and desire that persists even in the afterlife.",
              genre: "Fantasy",
              ratings: "3.8"
          },
          4:{
              id: 5,
              image: "/7heaven.jpg",
              name: "The Seventh Heaven",
              price: "2500",
              author: "James Patterson",
              description: "7th Heaven follows Detective Lindsay Boxer and the Women’s Murder Club as they race to stop a pair of arsonists burning wealthy couples alive in their homes, while simultaneously unraveling the mystery behind the disappearance of Michael Campion, the son of a former governor.",
              long_description: "In 7th Heaven, Detective Lindsay Boxer faces two harrowing cases. A series of fires devastates California’s wealthy neighborhoods, leaving couples dead in their mansions. The perpetrators, thrill‑seekers Hawk and Pidge, escalate their attacks until they target the home of a former governor. Meanwhile, the disappearance of Michael Campion, a beloved public figure with a fragile heart condition, leads to shocking revelations when a prostitute named Junie Moon confesses to his death—only to later recant. As Lindsay and her partner Rich Conklin pursue leads, the Women’s Murder Club confronts deception, courtroom drama, and personal dilemmas. The novel blends crime investigation, suspense, and emotional tension, with Lindsay torn between her professional duties and her personal life.",
              genre: "Mystery & Thriller",
              ratings: "4"
              },
          5:{
              id: 6,
              image: "/aftermath.jpg",
              name: "Tom Clancy's Splinter Cell:Blacklist Aftermath",
              price: "2500",
              author: "Peter Telep",
              description: "Blacklist Aftermath is a high‑stakes spy thriller where Sam Fisher must secure asylum for Igor Kasperov, a Russian tech mogul coerced into creating a devastating virus, while rival operatives hunt him down to ensure America’s destruction.",
              long_description: "Set after the events of Splinter Cell: Blacklist, this novel expands the universe with an all‑new mission. Sam Fisher, now commander of Fourth Echelon, answers directly to the U.S. President. His team is tasked with shutting down rogue elements of Third Echelon and preventing a series of escalating terrorist attacks known as the Blacklist countdown.The plot intensifies when Igor Kasperov, billionaire owner of a powerful antivirus software company, is ordered by the Kremlin to unleash a cyberweapon capable of crippling the U.S. economy. Refusing to comply, Kasperov flees, pursued by assassins and intelligence operatives. Fisher and his team must track him down, offer political asylum, and stop the virus before it is deployed. Along the way, they face betrayals, deadly confrontations, and a race against time that tests their loyalty and resolve.",
              genre: "Military Thriller",
              ratings: "4"
              },
          6:{
              id: 7,
              image: "/atlantis.jpg",
              name: "Atlantis Awakening",
              price: "2500",
              author: "Alyssa Day",
              description: "Atlantis Awakening is a paranormal romance where Atlantean warrior Prince Ven and vengeful witch Erin must recover a powerful ruby to stop rising evil, all while struggling against forbidden desire that could either save or doom them.",
              long_description: "In Atlantis Awakening, Alyssa Day expands her Warriors of Poseidon universe with a tale of vengeance, magic, and passion. Prince Ven, known as the King’s Vengeance, is tasked with retrieving the Nereid’s Heart, a legendary ruby of immense power, to prevent a rising evil from threatening both Atlantis and the human world. Ven is a battle‑hardened warrior who trusts his sword more than diplomacy, but fate pairs him with Erin, a witch whose family was slaughtered by vampires. Driven by revenge, Erin distrusts alliances—especially with a proud Atlantean warrior.",
              genre: "Paranormal Romance",
              ratings: "4.1"
              },
          7:{
              id: 8,
              image: "/bait.jpg",
              name: "Bait",
              price: "2500",
              author: "Karen Robards",
              description: "Bait is a romantic suspense thriller where Maddie Fitzgerald, mistaken for someone else, is hunted by a killer and forced to partner with FBI agent Sam McCabe—who insists on using her as bait to catch the predator.",
              long_description: "On a business trip to New Orleans, advertising agency owner Maddie Fitzgerald narrowly escapes when a man breaks into her hotel room and tries to kill her. Shaken but alive, she soon meets FBI agent Sam McCabe, who reveals that she has been targeted by a dangerous killer he has been tracking. Initially, Maddie and McCabe believe her attack was a case of mistaken identity, but when she is assaulted again, it becomes clear she is the killer’s true target.McCabe, both drawn to Maddie and suspicious of her secrets, insists the only way to stop the murderer is to use her as bait. As Maddie struggles with fear and attraction, she is pulled into a deadly cat‑and‑mouse game where one wrong move could cost her life. The novel combines page‑turning suspense, romantic tension, and psychological intrigue, making it a gripping blend of thriller and romance.",
              genre: "Romantic Suspense",
              ratings: "3.9"
              },
          8:{
              id: 9,
              image: "/betrayed.jpg",
              name: "Betrayed",
              price: "2000",
              author: "Kristin Cast",
              description: "Betrayed continues Zoey Redbird’s journey at the House of Night, where she balances new responsibilities, forbidden romances, and growing powers—until a series of murders threatens both her human and vampyre worlds, forcing her to confront betrayal and danger.",
              long_description: "In Betrayed, Zoey has settled into her role as a fledgling vampyre and the new Leader of the Dark Daughters, gaining respect from her peers and High Priestess Neferet. She feels she finally belongs, with loyal friends and even romantic interests. But her fragile sense of stability shatters when human teenagers begin turning up dead, and all evidence points to the House of Night.As tensions rise between humans and vampyres in Tulsa, Zoey struggles with her growing powers, her complicated love life, and her loyalty to her friends. She is drawn into a forbidden flirtation that distracts her from the crisis, only to discover that betrayal lurks closer than she imagined. When tragedy strikes within the House of Night itself, Zoey realizes that the very gifts that make her unique may also endanger those she loves. The novel blends romance, supernatural intrigue, and suspense, setting the stage for deeper conflicts in the series.",
              genre: "Young Adult Fantasy",
              ratings: "3.9"
              },
          9:{
              id: 10,
              image: "/castle.jpg",
              name: "I Capture The Castle",
              price: "1500",
              author: "Dodie Smith",
              description: "I Capture the Castle tells the story of Cassandra Mortmain, who journals her family’s struggles with poverty in a decaying castle, their encounters with wealthy American landlords, and her own bittersweet first experiences of love.",
              long_description: "Written during World War II and published in 1948, I Capture the Castle is Dodie Smith’s debut novel. The narrative unfolds through Cassandra’s witty and heartfelt journals, chronicling six months of life in Godsend Castle with her bohemian family: her blocked‑novelist father James, glamorous stepmother Topaz, ambitious sister Rose, and loyal servant Stephen.The Mortmains’ genteel poverty forces them into eccentric schemes, while Rose dreams of marrying into wealth. Their lives change when the Cotton brothers—wealthy heirs from America—arrive at nearby Scoatney Hall. Romantic entanglements ensue: Rose pursues Simon Cotton, while Cassandra finds herself torn between loyalty to her sister and her own growing feelings. Alongside these relationships, Cassandra matures as a writer, capturing the castle and her family’s eccentricities with humor and poignancy.",
              genre: "Historical Romance",
              ratings: "3.9"
              },
          10:{
              id: 11,
              image: "/dragon.jpg",
              name: "The Girl With The Dragon Tattoo",
              price: "3000",
              author: "Stieg Larsson",
              description: "The Girl with the Dragon Tattoo is a gripping Scandinavian noir where journalist Mikael Blomkvist and hacker Lisbeth Salander join forces to solve a 40‑year‑old disappearance, exposing brutal crimes and corruption within the powerful Vanger family.",
              long_description: "The novel opens with Mikael Blomkvist, a Swedish investigative journalist recently disgraced after losing a libel case against a wealthy industrialist. He is hired by Henrik Vanger, patriarch of the influential Vanger family, to secretly investigate the disappearance of his grandniece Harriet, who vanished in 1966. Henrik believes she was murdered by someone within his own family.Blomkvist moves to the Vanger estate and begins unraveling decades of secrets, eventually enlisting the help of Lisbeth Salander, a brilliant but socially withdrawn hacker with a traumatic past. Together, they uncover disturbing evidence linking Harriet’s disappearance to a series of ritualistic murders of young women across Sweden.The investigation exposes the Vanger family’s dark history of abuse, Nazism, and corruption, while Lisbeth’s personal struggles with her abusive guardian add another layer of tension. As Blomkvist and Salander close in on the truth, they confront shocking revelations about Harriet’s fate and the family’s hidden crimes.",
              genre: "Crime Thriller",
              ratings: "4.1"
              },
          11:{
              id: 12,
              image: "/lost-things.jpg",
              name: "The Book of Lost Things",
              price: "2500",
              author: "John Connolly",
              description: "The Book of Lost Things is a haunting fairy‑tale fantasy where young David enters a magical realm of dark stories and dangerous creatures, discovering that courage and imagination are his greatest weapons against grief and fear.",
              long_description: "Set in World War II England, the story begins with David, a boy mourning his mother’s death and struggling with his father’s remarriage. Retreating into books, he discovers The Book of Lost Things, which opens a portal to a fantastical world. This realm is filled with distorted versions of familiar fairy tales—wolves that hunt children, a crooked man who tempts souls, and kingdoms ruled by fear.Guided by courage and haunted by grief, David embarks on a perilous journey through forests, castles, and nightmares. Along the way, he meets allies and enemies who test his resolve, forcing him to confront themes of loss, innocence, morality, and the power of storytelling. Connolly’s prose blends gothic atmosphere with fairy‑tale wonder, creating a narrative that is both enchanting and unsettling.",
              genre: "Dark Fantasy",
              ratings: "4.1"
              },
          12:{
              id: 13,
              image: "/no-one.jpg",
              name: "No One Left to Tell",
              price: "2000",
              author: "Karen Rose",
              description: "No One Left to Tell is a gripping romantic suspense where PI Paige Holden and attorney Grayson Smith investigate a wrongful conviction, only to uncover a string of murders and a ruthless killer determined to silence them.",
              long_description: "The story begins when Paige Holden, a rookie private investigator, witnesses a car crash outside her home. A dying woman—one of her pro bono clients—hands her a blood‑smeared flash drive and whispers cryptic words before succumbing to her injuries. The evidence points to a case from five years earlier, when State’s Attorney Grayson Smith prosecuted Ramon Muñoz for murder.As Paige and Grayson review the flash drive, they discover inconsistencies that cast doubt on Muñoz’s conviction. Their investigation leads them into a web of blackmail, corruption, and a decades‑long string of murders tied to powerful figures. Each step closer to the truth puts them in greater danger, as the killer relentlessly hunts them to ensure no one is left alive to expose the conspiracy.",
              genre: "Romantic Suspense",
              ratings: "4.2"
              },
          13:{
              id: 14,
              image: "/rise-nine.jpg",
              name: "The Rise of Nine",
              price: "2000",
              author: "Pittacus Lore",
              description: "The Rise of Nine continues the battle between the Loric Garde and the Mogadorians, as Four and Nine join forces with Six, Seven, and Ella to locate the remaining members and prepare for the ultimate fight to save Earth.",
              long_description: "After the events of The Power of Six, John Smith (Number Four) rescues the powerful but reckless Number Nine from a Mogadorian base. Together, they form an uneasy alliance, combining their Legacies (superpowers) to survive. Meanwhile, Number Six and Number Seven (Marina) are in Spain, where they discover Ella, a mysterious tenth Garde member who escaped Lorien alive.The Garde must regroup and strengthen their powers while facing relentless Mogadorian attacks. Along the way, John’s best friend Sam Goode is captured, raising the stakes and forcing difficult choices. The novel alternates perspectives between Four, Six, and Marina, highlighting their struggles with leadership, trust, and sacrifice.",
              genre: "Young Adult Fantasy",
              ratings: "4.1"
              },
          14:{
              id: 15,
              image: "/truth.jpg",
              name: "The Whole Truth ",
              price: "2000",
              author: "David Baldacci",
              description: "The Whole Truth is a fast‑paced international thriller where arms magnate Nicolas Creel manipulates global tensions to spark a new cold war, while intelligence agent Shaw and journalist Katie James race to expose the truth before catastrophe strikes.",
              long_description: "In The Whole Truth, Baldacci crafts a chillingly topical story of perception management and global manipulation. Nicolas Creel, head of the world’s largest defense contractor, hires strategist Dick Pender to engineer conflicts that will boost his company’s profits. Creel’s plan escalates into a scheme to ignite a new cold war, destabilizing nations and driving them toward war.Opposing him is Shaw, a mysterious operative with no first name, working reluctantly for a multinational intelligence agency. Shaw’s mission is to prevent Creel’s plans from plunging the world into chaos. Alongside him is Katie James, a disgraced journalist desperate to rebuild her career, who stumbles into the conspiracy after interviewing a massacre survivor.",
              genre: "Political Thriller",
              ratings: "4"
              },
          15:{
              id: 16,
              image: "/wind.jpg",
              name: "When the Wind Blows ",
              price: "2000",
              author: "James Patterson",
              description: "When the Wind Blows is a suspenseful thriller where a grieving veterinarian and an FBI agent discover a hidden laboratory conducting genetic experiments, leading them to a mysterious young girl with wings.",
              long_description: "Set in rural Colorado, the story begins with Frannie O’Neill, a veterinarian mourning her husband’s murder. Her quiet life is disrupted when she meets Kit Harrison, an FBI agent investigating a covert genetic project. Their paths cross with Max, a young girl who has escaped from a secret laboratory where scientists have been experimenting on children, giving them wings and other abilities.As Frannie and Kit protect Max, they uncover the horrifying truth behind the experiments: a government‑funded program manipulating DNA to create human hybrids. The novel blends romantic tension, medical intrigue, and fast‑paced suspense, while exploring themes of ethics, grief, and the dangers of unchecked science.",
              genre: "Romantic Suspense",
              ratings: "3.9"
              }
      }
       const selectedBook = ref(null)

       return{
           books,
           selectedBook
       }
   },
   actions:{
       updateSelectedBook (payload) {
           this.selectedBook = payload
       },
   },
   persist: true,
})