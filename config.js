
var config = {
   "style": "mapbox://styles/kalakar/cka3agsn708391jmupd97hum8",
   "accessToken": "pk.eyJ1Ijoia2FsYWthciIsImEiOiJjaW4yNHBvMDMwYjZrdXBra29qYmxnOGM5In0.4Lh20IMXH60mscRm5EKuNw",
   "showMarkers": false,
   "theme": "light",
   "alignment": "right",
   "title": "Humbert Humbert's Trail in Vladimir Nabokov's novel, 'Lolita'",
   "subtitle": "\nTo get started, start scrolling.",
   "image": "",
   "byline": "\nWhen you're scrolling, be sure to wait for the map to land on a location. \n\nThis map traces locations and relevant plot points. \n\n Although many locations in 'Lolita' are completely fabricated, I approximate latitude and longitude coordinates from descriptive clues and from National Landmarks from Humbert's tour guide. \n\nThanks so much! \n \n- Mickey Friedman",
   "chapters": [
      {
         "id": "chapter_0",
         "title": "THE BEGINNINGS",
         "alignment": "center",
         "description": "Humbert's pedophilic, controlling, and disturbing understanding of love is likely the consequence of unresolved childhood trauma, so we start thousands of miles away in Europe.",
         "location": {
            "center": {
               "lon": 2.3522,
               "lat": 48.8566
            },
            "zoom": 2.66,
            "speed": 1.5,
            "pitch": 0,
            "bearing": 0
         }
      },
      {
         "id": "chapter_1",
         "title": "Humbert is born.",
         "image": "",
         "description": "1910: Humbert Humbert is born in Paris, France.",
         "location": {
            "center": {
               "lon": 2.3522,
               "lat": 48.8566
            },
            "zoom": 12.51,
            "speed": 1.5,
            "pitch": 60.00,
            "bearing": 0
         },
         "onChapterEnter": [
            {
               "layer": "delhi",
               "opacity": 1
            }
         ],
         "onChapterExit": []
      },
      {
         "id": "chapter_2",
         "title": "Mother's Death",
         "image": "",
         "alignment": "center",
         "description": "1913: Humbert's mother is struck by lightning near Moulinet, Alpes-Maritimes, and dies instantly. He is three years old.",
         "location": {
            "center": {
               "lon": 7.4127,
               "lat": 43.9405
            },
           "zoom": 11.51,
            "speed": 1.5,
            "pitch": 60.00,
            "bearing": 0
         },
         "onChapterEnter": [
            {
               "layer": "delhi",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "delhi",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_3",
         "title": "Humbert Meets Annabel",
         "image": "",
         "description": "Summer, 1923: Humbert falls in love with Annabel Leigh along the French Riviera, but the relationship ends due to her parents' disapproval.",
         "location": {
            "center": {
               "lon": 6.6379, 
               "lat": 43.2548
            },
            "zoom": 11.64,
            "speed": 1.5,
            "pitch": 38.00,
            "bearing": 23.20
         },
         "onChapterEnter": [
            {
               "layer": "herat",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "herat",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_4",
         "title": "Annabel Dies",
         "image": "",
         "description": "1926: Annabel becomes sick with typhoid fever on the Greek island of Corfu and dies. Humbert will never forget it.",
         "location": {
            "center": {
               "lon": 19.9217,
               "lat": 39.6243
            },
            "zoom": 11.51,
            "speed": 1.5,
            "pitch": 57.50,
            "bearing":  23.20
         },
         "onChapterEnter": [
            {
               "layer": "kandahar",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "kandahar",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_5",
         "title": "University Studies",
         "image": "",
         "description": "1926-1935: Humbert studies at universities in Paris and London before, marrying Valeria and abusing her.",
         "location": {
            "center": {
               "lon": 2.3522,
               "lat": 48.8566
            },
            "zoom": 11.29,
            "speed": 1.5,
            "pitch": 60.00,
            "bearing":  23.20
         },
         "onChapterEnter": [
            {
               "layer": "lahore",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "lahore",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_6",
         "title": "New York City",
         "image": "",
         "description": "1940-1943: Valeria leaves him for another man and Humbert travels to New York City. He spends more than year in a psychiatric ward before returning to his work. Never finding stability, he returns to the hospital.",
         "location": {
            "center": {
                "lon": -73.935242,
               "lat": 40.7128
            },
            "zoom": 11.29,
            "speed": 1.5,
            "pitch": 60.00,
            "bearing":  23.20
         },
         "onChapterEnter": [
            {
               "layer": "lahore",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "lahore",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_7",
         "title": "Arctic Canada?",
         "image": "",
         "description": "1944-1946: Humbert claims to take part in an obscure expedition to arctic Canada with a research team, but who knows.",
         "location": {
            "center": {
               "lon": -100.1140,
               "lat": 76.2506
            },
            "zoom": 11.33,
            "speed": 1.5,
            "pitch": 0,
            "bearing": 0
         },
         "onChapterEnter": [
            {
               "layer": "ship",
               "opacity": 1
            },
            {
               "layer": "path-of-the-diamond",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "ship",
               "opacity": 0
            },
            {
               "layer": "path-of-the-diamond",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_9",
         "title": "Another Bout with Insanity",
         "image": "",
         "description": "After this voyage, Humbert Humbert checks himself into the Sanitarium, presumably the same one as the last in New York. This would bring him back to the East Coast.",
         "location": {
            "center": {
               "lon": -73.935242,
               "lat": 40.7128
            },
            "zoom": 9.45,
            "speed": 1.5,
            "pitch": 60.00,
            "bearing": 23.20
         },
         "onChapterEnter": [
            {
               "layer": "portsmouth",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "portsmouth",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_10",
         "title": "Ramsdale, New England",
         "image": "",
         "description": "1947: Although not a real place, but Humbert moves to Ramsdale, into the home of the widow, Charlotte Haze and her daughter, Dolores, whom he is infatuated with because of her likeness to Annabel. He marries Charlotte who sends Dolores to camp before reading his diary. Upon discovering that he hates her and that he is a pedophile, she threatens to expose Humbert, before she is conveniently hit by a car. ",
         "location": {
            "center": {
               "lon":  -71.5724,
               "lat": 43.1939
            },
            "zoom": 13.31,
            "speed": 1.5,
            "pitch": 54.00,
            "bearing": -13.64
         },
         "onChapterEnter": [
            {
               "layer": "hyde-park",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "hyde-park",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_11",
         "title": "Camp Q/ Enchanted Hunters",
         "image": "",
         "description": "Humbert picks Dolores up at Camp Q. While we do not know where Camp Q is, we do know that they settle in the Enchanted Hunter's motel in 'Bryceland Connecticute' (another made up place) which is 100 miles off. There, he rapes Dolores for the first time before revealing that her mother has died.",
         "location": {
            "center": {
               "lon":  -73.0877,
               "lat": 41.6032
            },
            "zoom": 16.33,
            "speed": 1.5,
            "pitch": 54.00,
            "bearing": -28.80
         },
         "onChapterEnter": [
            {
               "layer": "tower-of-london",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "tower-of-london",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_12",
         "title": "One Year Road Trip",
         "image": "",
         "description": "",
         "location": {
            "center": {
               "lon":  -73.0877,
               "lat": 41.6032
            },
            "zoom": 2.33,
            "speed": 2.0,
            "pitch": 54.00,
            "bearing": -28.80
         },
         "onChapterEnter": [
            {
               "layer": "tower-of-london",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "tower-of-london",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_13",
         "title": "Magnolia Gardens, SC",
         "image": "",
         "description": "'Thumbing through that battered tour book, I dimly evoke that Magnolia Garden in a southern state which cost me four bucks and which, according to the ad in the book, you must visit for three reasons: because John Galsworth (a stone-dead writer of sorts) aclaimed it as the world's fairest garden; because in 1900 Baedeker's guide had marked it with a star; and finally because...O,Reader, My Reader, guess!...because children (and by Jingo was not my Lolita a child!) will 'walk starry-eyed and reverently through this foretaste of heaven, drinking in beauty that can , influence a life.' 'Not mine,' said grim Lo.'",
         "location": {
            "center": {
               "lon":  -80.0883,
               "lat": 32.8785
            },
            "zoom": 12.33,
            "speed": 1.0,
            "pitch": 54.00,
            "bearing": -28.80
         },
         "onChapterEnter": [
            {
               "layer": "tower-of-london",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "tower-of-london",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_14",
         "title": "Joyce Kilmer Memorial Forest",
         "image": "",
         "description": "'A boulder, with a plaque, in memory of the author of the 'Trees' (by now we are in Poplar Cove, NC, reached out by what my kind tolerant, usually so restrained tour book calls a 'very narrow road, poorly maintained' to which, though no Kilmerite, I subscribe.",
         "location": {
            "center": {
               "lon":  -83.9291,
               "lat": 35.3590
            },
            "zoom": 12.33,
            "speed": 1.0,
            "pitch": 54.00,
            "bearing": -28.80
         },
         "onChapterEnter": [
            {
               "layer": "tower-of-london",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "tower-of-london",
               "opacity": 0
            }
         ]
      }, 
      {
         "id": "chapter_14",
         "title": "Iceberg Lake, Colorado",
         "image": "",
         "description": "'More over, we inspected: Little Iceberg Lake, somewhere in Colorado, and the snow banks, and the cushionets of tiny alpine flowers, and more snow.'",
         "location": {
            "center": {
               "lon":  -113.7480,
               "lat": 48.8120
            },
            "zoom": 12.33,
            "speed": 1.0,
            "pitch": 54.00,
            "bearing": -28.80
         },
         "onChapterEnter": [
            {
               "layer": "tower-of-london",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "tower-of-london",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_15",
         "title": "Mexican Border",
         "image": "",
         "description": "'Actually I was toying with the idea of gently trickling across the Mexican border -- I was braver now than last year -- and there deciding what to do with my little concubine who was now sixty inches tall and weighted ninety pounds. We dug out our tour books and maps. She had traced our route with immense zest.'",
         "location": {
            "center": {
               "lon":  -109.49143,
               "lat": 31.30050
            },
            "zoom": 12.33,
            "speed": 1.0,
            "pitch": 54.00,
            "bearing": -28.80
         },
         "onChapterEnter": [
            {
               "layer": "tower-of-london",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "tower-of-london",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_16",
         "title": "'Elphinstone'",
         "image": "",
         "description": "It does not seem to exist, but we know that they were going to the city 'Elphinstone', which is allegedly in Red Rocks Park, Colorado.",
         "location": {
            "center": {
               "lon":  -105.2052,
               "lat": 39.6655
            },
            "zoom": 12.33,
            "speed": 1.0,
            "pitch": 54.00,
            "bearing": -28.80
         },
         "onChapterEnter": [
            {
               "layer": "tower-of-london",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "tower-of-london",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_17",
         "title": "Lolita Disappears",
         "image": "",
         "description": "Lolita disappears from the hospital; Humbert begins his mad search for her abductor. Humbert arrives in Beardsley and stays a few days. Humbert is admitted to a psychiatric clinic again because he feels he is 'losing contact with reality'",
         "location": {
            "center": {
               "lon":  -105.2052,
               "lat": 39.6655
            },
            "zoom": 3.33,
            "speed": 1.0,
            "pitch": 54.00,
            "bearing": -28.80
         },
         "onChapterEnter": [
            {
               "layer": "tower-of-london",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "tower-of-london",
               "opacity": 0
            }
         ]
      },
       {
         "id": "chapter_18",
         "title": "Montreal - New York ",
         "image": "",
         "description": "May, 1950: Humbert meets Rita somewhere between New York and Montreal; they travel together and live together, before he hears from Dolly.",
         "location": {
            "center": {
                "lon": -73.935242,
               "lat": 40.7128
            },
            "zoom": 12.33,
            "speed": 1.0,
            "pitch": 54.00,
            "bearing": -28.80
         },
         "onChapterEnter": [
            {
               "layer": "tower-of-london",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "tower-of-london",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_19",
         "title": "Coalmont - perhaps Tennessee",
         "image": "",
         "description": "September 22, 1952: Humbert receives a letter from Dolly asking for cash; she is married and pregnant, but Humbert immediately drives to Coalmont to see her. He meets with Dolly, now Mrs. Richard F. Schiller and realizes he is still in love with her despite the fact that she is no longer a nymphette.",
         "location": {
            "center": {
                "lon": -85.7041,
               "lat": 35.3376
            },
            "zoom": 12.33,
            "speed": 1.0,
            "pitch": 54.00,
            "bearing": -28.80
         },
         "onChapterEnter": [
            {
               "layer": "tower-of-london",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "tower-of-london",
               "opacity": 0
            }
         ]
      },
      {
         "id": "chapter_20",
         "title": "Ending",
         "image": "",
         "description": "Humbert leaves Dolly, then kills her abductor, Clare Quilty at Pavor Manor. Unravelling, he is arrested for driving on the wrong side of the road. Facing his trial, Humbert writes his confession, 'Lolita', first in a psychiatric ward, then in jail. Humbert dies of coronary thrombosis, 'a few days before his trial was scheduled to start.' Dolly dies in childbirth on Christmas Day.",
         "location": {
            "center": {
                "lon": -85.7041,
               "lat": 35.3376
            },
            "zoom": 2.33,
            "speed": 1.0,
            "pitch": 54.00,
            "bearing": -28.80
         },
         "onChapterEnter": [
            {
               "layer": "tower-of-london",
               "opacity": 1
            }
         ],
         "onChapterExit": [
            {
               "layer": "tower-of-london",
               "opacity": 0
            }
         ]
      },
      
      
     

   ]
};
