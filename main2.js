// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
 
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
 
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
 


function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1)
    track_index +=1;
  else track_index = 0;
 
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}







// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;
 
// Create the audio element for the player
let curr_track = document.createElement('audio');
 
// Define the list of tracks that have to be played
let track_list = [


{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },

 












{
    name: "Money's too tight (to mention)",
    artist: "Simply Red ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Simply Red - Money's too tight (to mention).mp3",
  },


{
    name: " Money's too tight",
    artist: "Simply Red  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },








{
    name: " Bounce skate roll",
    artist: "Vaughan  Mason & Crew",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Vaughan  Mason & Crew - Bounce skate roll.mp3",
  },


{
    name: "Bounce skate roll",
    artist: "Vaughan  Mason & Crew",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },


 {
    name: "Radiation Level",
    artist: "The Sun ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "The Sun - Radiation Level.mp3",
  


},








{
    name: "Hasta Los Dientes",
    artist: "Hamila Cabello, Maria Becerra ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Hamila Cabello, Maria Becerra - Hasta Los Dientes.mp3",
  },





{
    name: "Goosebumps",
    artist: "MO",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "MO - Goosebumps.mp3",
  },



{
    name: "Sacrifice",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bebe Rexha - Sacrifice.mp3",
  },


{
    name: "Fade to Grey",
    artist: "Visage",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Visage - Fade to Grey.mp3",
  },











{
    name: "White  Lines",
    artist: "Grandmaster Flash & the furious five",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet3.mp3",
  },


{
  
    name: "Autonomy",
    artist: "Bob Harsher",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bob Harsher - Autonomy.mp3",
  },




{
    name: "Good Ones",
    artist: "Charli XCX ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Charli XCX - Good Ones.mp3",
  },


{
    name: "Taste of you",
    artist: "Rezz ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Rezz - Taste of you.mp3",
  },

{
    name: "Fire for You",
    artist: "Cannons ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Cannons - Fire for You.mp3",
  },


{
    name: "Hurricane",
    artist: "Cannons",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Cannons - Hurricane.mp3",
  },









{
    name: "Follow Me",
    artist: "Pabllo Vittar",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Pabllo Vittar - Follow Me.mp3",
  },


{
    name: "How do we do it",
    artist: "Sean Paul & Pia Mia",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sean Paul & Pia Mia - How do we do it.mp3",
  },





{
    name: "White  Lines",
    artist: "Grandmaster Flash & the furious five",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },


{
  
    name: "Side effect",
    artist: "Alok",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Alok - Side effect.mp3",
  },

  

{
    name: "Devils Gun",
    artist: "CJ & Co  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "CJ & Co - Devils Gun.mp3",
  },
  
 
{
    name: "Devils Gun",
    artist: "CJ & Co ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet4.mp3",
  },


{
    name: "Devils Gun",
    artist: "CJ & Co  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },







{
    name: " Cold Heart",
    artist: "Elton John & Dua Lipa",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Elton & Dua - Cold Heart.mp3",
  },





{
    name: "How Long",
    artist: "Tove Lo",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Tove Lo - How Long.mp3",
  },

{
    name: "Sunny radio jingle",
    artist: "Sunny radio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


 
{
    name: "High Times",
    artist: "Jamiroquaii ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Jamiroquaii - High Times.mp3",
  },


{
    name: "now playing Magic",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3",
  },


{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  },


{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "reklame.mp3",
  


},




{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },






{
    name: "Your Addiction",
    artist: "Nightclub ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Nightclub - Your Addiction.mp3",
  },




{
    name: " New Moon",
    artist: "Mo",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Mo - New Moon.mp3",
  },







{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },


{
    name: "Welcome!",
    artist: "Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },



{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "start the party.mp3",
  


},




{
    name: "Just get ready",
    artist: "Sos Band",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sos Band - Just get ready (Ben lIebrand remix).mp3",
  },

  


 





{
    name: "Let's go round again",
    artist: "Average White Band  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },


{
    name: "I need you",
    artist: "Dua Lipa  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Dua Lipa - I need you.mp3",
  },







{
     name: "Tell Me What We're Gonna Do Now",
    artist: "Joss Stone",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Tell Me What We're Gonna Do Now.mp3",
  },









{
    name: "Little L",
    artist: "Jamiroquaii",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Jamiroquaii - Little L.mp3",
  


}, 




{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },





{
    name: "Ffun",
    artist: "Con Funk Shun",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Con Funk Shun- Ffun.mp3",
  },

{
    name: "Allright",
    artist: "Jamiroquaii",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Jamiroquaii - Allright.mp3",
  },

{
    name: "Allright",
    artist: "Jamiroquaii",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },


{
    name: "Allright",
    artist: "Jamiroquaii ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },














{
    name: "Groovin' You",
    artist: "Harvey Mason",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet4.mp3",
  },




{
  


  name: "Keep the fire Burning ",
    artist: "Gwen McCrae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3"
  },







{
    name: "Sweet Lucy",
    artist: "Raoul de Souza",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Raoul de Souza - Sweet Lucy.mp3",
  


},


{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },



{
    name: "Givin' up givin 'in",
    artist: "Three Degrees",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },




{
    name: "You should be dancin'",
    artist: "Beegees",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Beegees - You should be dancin' (single).mp3",
  


},


{
    name: "Seven Days in sunny June",
    artist: "Jamiroquaii",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Jamiroquaii - Seven Days in sunny  Junet.mp3",
  


},

{
    name: "I wanna be your lover",
    artist: "Prince",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Prince - I wanna be your lover.mp3",
  


},


{
    name: "Dancer",
    artist: "Gino Soccio ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Gino Soccio - Dancer.mp3",
  


}, 



 


{
    name: "Love on my mind",
    artist: "Freemasons",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Freemasons - Love on my mind.mp3",
  },






{
    name: "I wanna be your lover",
    artist: "Prince",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },

{
    name: "Do watcha wanna do",
    artist: "Neil Rodgers",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Neil Rodgers - Do watcha wanna do.mp3",
  


},





{
    name: "Spacer",
    artist: "Sheila B Devotion",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet3.mp3",
  },







{
    name: "Shine On",
    artist: "George Duke",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "George Duke - Shine On.mp3",
  },
 
{
    name: "20 dollars",
    artist: "Angie Stone",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Angie Stone  20 dollars.mp3",
  },



{
  


  name: "Keep the fire Burning ",
    artist: "Gwen McCrae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3"
  },








{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 

{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "reklame.mp3",
  


},



 {
     name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },

 



 {
    name: "Game of life",
    artist: "Sugar rainbow",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sugar rainbow - Game of life.mp3",
  },







{
    name: "Call my name",
    artist: "Dua Lipa  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Dua Lipa - Call my name.mp3",
  },


{
    name: "You're makin' me high",
    artist: "Toni Braxton   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Toni Braxton - You're makin' me high.mp3",
  },
  


{
    name: "Just an Illusion",
    artist: "Imagination",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Imagination - Just an Illusion 1982.mp3",
  },





  

{
    name: "White  Lines",
    artist: "Grandmaster Flash & the furious five ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "White  Lines - Grandmaster Flash & the furious five.mp3",
  },






 
{
     name: "Summer Madness",
    artist: "Kool and the gang",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },


 
{
     name: "Summer Madness",
    artist: "Kool and the gang",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },

{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "start the party.mp3",
  


}, 



{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
    name: "Welcome!",
    artist: "Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },

{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },



{
    name: "I like it (Blowout dub)",
    artist: "Landlord",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Landlord - I like it (Blowout dub).mp3",
  


},


{
    name: "Acraze",
    artist: "Do it to it",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Acraze - Do it to it.mp3",
  },





{
    name: "Cold Heart",
    artist: "Do it to it",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet3.mp3",
  },




{
    name: "Super Duper Love",
    artist: "Joss Stone",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Joss Stone - Super Duper Love.mp3",
  },



{
    name: "Super Duper Love",
    artist: "Joss Stone",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },



{
    name: "Miracles",
    artist: "Change",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Change - Miracles.mp3",
  },
  
 {
    name: "Blood on the dancefloor",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Michael Jackson- Blood on the dancefloor.mp3",
  },


 {
    name: "Let me show you (Ruud Remix)",
    artist: "Jacksons",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Jacksons - Let me show you (Ruud Remix).mp3",
  },






{
    name: "A walk in the park 7inch",
    artist: "Nick Straker Band",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Nick Straker Band - A walk in the park 7inch.mp3",
  }, 
 
{
    name: "Nights over Egypt",
    artist: "The Jones Girls",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },

 {
    name: "Straight ahead",
    artist: "Nick Straker Band",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Nick Straker Band - Straight ahead.mp3",
  },





{
    name: "Nights over Egypt",
    artist: "The Jones Girls",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet3.mp3",
  },

, 

{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },
{
    name: "The Boss",
    artist: "Diana Ross",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Diana Ross - The Boss.mp3",
  


},

{
    name: "Welcome!",
    artist: "Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },



{
    name: "Do your dance",
    artist: "Rose Royce",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet3.mp3",
  },






{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


},

{
    name: "Seven Stars",
    artist: "Quazar",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet4.mp3",
  


},


{
    name: "Let's go together",
    artist: "Change",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Change - Let's go together.mp3",
  


},


{
    name: "now playing Pacific State",
    artist: "808 state",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Calvin Harris - This it what you came for2.mp3",
  },




{
    name: "now playing Believe",
    artist: "Cher",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Cher - Believe.mp3",
  },

{
    name: "Sunny radio jingle",
    artist: "Sunny radio",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


 
{
    name: "now playing Bang Bang",
    artist: "The Knocks ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "The Knocks - Bang Bang.mp3",
  },



{
    name: "now playing Gonna get over you",
    artist: "Beverlei Brown ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Gonna get over you - Beverlei Brown.mp3",
  },




{
    name: "now playing Miss a thing",
    artist: "Kylie Minogue   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kylie Minogue - Miss a thing.mp3",
  },








{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },




{
    name: " My head my heart",
    artist: "Ava Max ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Ava Max - My head my heart.mp3",
  },





{
    name: " Magic",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kylie Minogue - Magic.mp3",
  },


{
    name: "Magic",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3",
  },


{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  },


{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "reklame.mp3",
  


},





{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },







{
    name: " the Motto",
    artist: "Tiesto & Ava Max",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Tiesto & Ava Max - the Motto.mp3",
  },



{
    name: " Chain my heart",
    artist: "Topic & Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Topic & Bebe Rexha - Chain my heart.mp3",
  },








{
    name: "I like it (Blowout dub)",
    artist: "Landlord",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Landlord - I like it (Blowout dub).mp3",
  


},



 {
    name: "Love Foolosophy",
    artist: "Jamiroquaii",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Jamiroquaii - Love Foolosophy.mp3",
  


}, 

 
{
    name: "Love Foolosophy",
    artist: "Jamiroquaii",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet3.mp3",
  },



{
    name: "Lucky Number",
    artist: "Lene Lovich",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Lene Lovich - Lucky Number.mp3",
  


}, 


{
    name: "Lucky Number",
    artist: "Lene Lovich  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },






{
    name: " Waterfall",
    artist: "Atlantic Ocean  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Atlantic Ocean - Waterfall.mp3",
  },





{
    name: "now playing Who is she 2 U",
    artist: "Brandy",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Brandy - Who is she 2 U.mp3",
  


}, 

{
    name: "Loving You",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Loving You - Michael Jackson.mp3",
  


},

{
    name: "now playing Another",
    artist: "Muni Long",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Muni Long - Another.mp3",
  


},


{
    name: "Mind up tonight",
    artist: "Melba Moore  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Melba Moore - Mind up tonight.mp3",
  },



{
    name: "Groovin' You",
    artist: "Harvey Mason",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Harvey Mason - Groovin' You.mp3",
  


},



{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
    name: "The way you make me feel",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Michael Jackson - The way you make me feel.mp3",
  


},


{
    name: "Unfinished Sympathy",
    artist: "Massive Attack",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Massive Attack - Unfinished Sympathy.mp3",
  },



{
    name: "No Diggity ft. Dr. Dre, Queen Pen",
    artist: "Blackstreet", 
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },


{
    name: " Summer",
    artist: "Calvin Harris  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Calvin Harris - Summer.mp3",
  },

{
    name: "stranger in moscow",
    artist: "Michael Jackson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },



{
    name: "stranger in moscow",
    artist: "Play Sunny hotradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },
 


{  
    name: "For an Angel",
    artist: "Paul van Dyk",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "For an Ange l- Paul van Dyk.mp3",
  },
 {
     name: "For an Angel",
    artist: "Paul van Dyk",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },




{
    name: "Risin to the Top",
    artist: "Kenny Burke",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kenny Burke - Risin to the Top.mp3",
  


},

{
    name: "You give me something",
    artist: "Jamiroquai",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Jamiroquai - You give me something.mp3",
  


}, 



{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 




{
    name: "Satisfaction",
    artist: "Benny Benassi",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Benny Benassi - Satisfaction.mp3",
  },



{
    name: "Acraze",
    artist: "Do it to it",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Acraze - Do it to it.mp3",
  },



  {
  name: "Blood on the dancefloor",
    artist: "Michael Jackson",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet4.mp3",
  },



{
    name: "Cold Heart",
    artist: "Do it to it",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet3.mp3",
  },








{
    name: "The Message",
    artist: "Grandmaster Flash",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },



{
    name: "The Message",
    artist: "Grandmaster Flash",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Grandmaster Flash & The Furious Five - The Message.mp3",
  },



{
    name: "The Message",
    artist: "Grandmaster Flash",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },


{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "start the party.mp3",
  


}, 

{
    name: "now playing Bottoms up 2.0",
    artist: "Keke Palmer",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Keke Palmer - Bottoms up 2.0.mp3",
  


},


{
    name: " Freaky Deaky",
    artist: "Tyga & Doja Cat  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Tyga & Doja Cat - Freaky Deaky.mp3",
  },



















{
    name: " Feed Them",
    artist: "Kelis",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kelis - Feed Them.mp3",
  },










{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },



{
    name: " Good Form",
    artist: "Nicki Minaj ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Nicki Minaj - Good Form.mp3",
  


},





{
    name: "Sun is here",
    artist: "The Sun ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "The Sun - Radiation Level.mp3",
  


},




{
    name: "now playing Te Felicito",
    artist: "Shakira & Rauw Alejandro",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Shakira & Rauw Alejandro - Te Felicito.mp3",
  


},



{
    name: "now playing Bussin",
    artist: "Nicki Minaj",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Nicki Minaj - Bussin.mp3",
  


},









{
    name: "now playing Daddy Cool",
    artist: "Boney M ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Boney M - Daddy Cool.mp3",
  },












  {
  name: "Blood on the dancefloor",
    artist: "Michael Jackson",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },

 





{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 



{
  


  name: "Keep the fire Burning ",
    artist: "Gwen McCrae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3"
  },

{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
    name: "Mesmerized",
    artist: "Freemasons",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },

{
    name: "Black sun",
    artist: "The far out monster orchestra",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "The far out monster orchestra - Black sun.mp3",
  


}, 

  {
  name: "Blood on the dancefloor",
    artist: "Michael Jackson",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },


 

{
    name: "Nothing but you",
    artist: "Paul van Dyk  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },







{
    name: " About them time",
    artist: "Lizzo ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Lizzo - About them time.mp3",
  },





{
    name: " Shy guy",
    artist: "Diana King  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Diana King - Shy guy.mp3",
  },



{
    name: " Bailamos",
    artist: "Enrique Iglesias  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Enrique Iglesias - Bailamos.mp3",
  },


{
    name: "Rain on me",
    artist: "Gaga & Ariana  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Gaga & Ariana - Rain on me.mp3",
  },



{
    name: "What you waiting for",
    artist: "Gwen Stefani ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Gwen Stefani - What you waiting for.mp3",
  },




{
    name: "Hypnotize",
    artist: "The Notorious B.I.G  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Hypnotize--The Notorious B.I.G..mp3",
  },


{
    name: "Keep the fire Burning",
    artist: "Gwen McCrae  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },



 {
    name: "Music is my way of life",
    artist: "Full flava",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Music is my way of life - Full flava.mp3",
  },


 {
    name: "Music is my way of life",
    artist: "Full flava  ",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },

{
    name: "Music is my way of life",
    artist: "Full flava",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },





{
    name: "Move on up",
    artist: "Destination  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },







{
    name: "Hurts to be in Love",
    artist: "Gino Vanelli",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },



 
{
    name: "Switch",
    artist: "Iggy Azalea ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Iggy Azalea - Switch.mp3",
  },


{
    name: "Only You",
    artist: "Alesso & Sentinel ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Alesso & Sentinel - Only You.mp3",
  },



{
    name: "Psychofreak",
    artist: "Camila Cabello ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Camila Cabello - Psychofreak.mp3",
  },


{
    name: "Love you yes",
    artist: "Beverlei Brown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Love you yes- Beverlei Brown.mp3",
  


}, 


{
    name: "Right here",
    artist: "Jesse Glyne",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Jesse Glyne - right here.mp3",
  


}, 



{
    name: "Game of life",
    artist: "Sugar rainbow",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },



{
    name: "Round Round",
    artist: "Sugababes",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sugababes - Round Round.mp3",
  },

 





{
    name: "Show it to me",
    artist: "Nightclub ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Nightclub - Show it to me.mp3",
  },




{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },



{
    name: " No stoppin' us",
    artist: "Charlie Wilson ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Charlie Wilson - No stoppin' us.mp3",
  },



{
    name: "Hours and Hours",
    artist: "Muni Long ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Muni Long - Hours and Hours.mp3",
  },






{
    name: " Betcha would'nt hurt me",
    artist: "Full Flava  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Full Flava - Betcha would'nt hurt me.mp3",
  },



{
    name: " Closer",
    artist: "Saweetie ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Saweetie - Closer.mp3",
  },




{
    name: "Nights over Egypt (Disco Purrfection)",
    artist: "The Jones Girls ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "The Jones Girls - Nights over Egypt (Disco Purrfection)2.mp3",
  },


{
    name: "Vibe",
    artist: "J Brown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "J Brown - Vibe.mp3",
  },


 {
    name: "Sun is shining",
    artist: "Funkstar deluxe",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sun is shining - Funkstar deluxe.mp3",
  },




{
    name: " Fast",
    artist: "Saweetie",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Saweetie - Fast.mp3",
  


}, 



{
    name: " All night long",
    artist: "Splendor",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Splendor - All night long.mp3",
  


},




 





{
    name: "Game of life",
    artist: "Sugar rainbow",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },









{
    name: " Summer",
    artist: "Calvin Harris  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Des'ree - You gotta be.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },




{
    name: "Do it anyway you wanna boosted",
    artist: "Peoples choice",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Peoples choice Do it anyway you wanna boosted.mp3",
  


},


{
    name: "Touch Me",
    artist: "Rui da Silva",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Rui da Silva - Touch Me.mp3",
  


},







{
    name: "Todays news",
    artist: "nos journaal",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 

{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },

{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },


 {
    name: "Welcome!",
    artist: "Play Sunny danceradio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
    name: "Welcome!",
    artist: "Sunny radio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },





{
    name: " Don't stop till you get enough",
    artist: "Michael Jackson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Michael Jackson - Don't stop till you get enough (Disco Purrfection).mp3",
  },

{
    name: "Win or lose",
    artist: "E W F",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "E W F - Win or lose.mp3",
  },



{
    name: "Win or lose",
    artist: "E W F  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },




{
    name: "Wild Girls",
    artist: "Klymaxx",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Wild Girls - Klymaxx.mp3",
  },

  

{
  


  name: "Keep the fire Burning ",
    artist: "Gwen McCrae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3"
  },


{
    name: "Gypsy woman",
    artist: "Crystal Waters ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Crystal Waters - Gypsy woman.mp3",
  },



{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },


{
    name: "Let's dance",
    artist: "David Bowie",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "David Bowie - Let's dance.mp3",
  


}, 



{
    name: "Groove Is In The Heart",
    artist: "Deee-Lite   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Deee-Lite - Groove Is In The Heart.mp3",
  },



{
    name: "Calabria",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bebe Rexha - Calabria.mp3",
  },




{
    name: "Fall",
    artist: "Full Flava",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Full Flava - Fall.mp3",
  


},

{
    name: "Was that all that was",
    artist: "Carleen Anderson",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Carleen Anderson - Was that all that was.mp3",
  


},



{
    name: " Sunrise",
    artist: "Simply Red   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Dee Johnson - Too much too late.mp3",
  },


{
    name: " Sunrise",
    artist: "Simply Red   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Donna Gardier - Betcha would 'nt hurt me.mp3",
  },


{
    name: " Love holds no limit",
    artist: "Full Flava  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Full Flava - Love holds no limit.mp3",
  },



{
    name: " Too much too late",
    artist: "Full Flava  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Full Flava - You are the universe.mp3",
  },



{
    name: " The Age of Love",
    artist: "Jam & Spoon  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Jam & Spoon - The Age of Love.mp3",
  },


{
    name: " The Age of Love",
    artist: "Jam & Spoon  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Full Flava - Gonna get over you.mp3",
  },








{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },





{
    name: "Spacer",
    artist: "Sheila B Devotion ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sheila B Devotion - Spacer.mp3",
  



  


},




{
    name: "Bond theme 77",
    artist: "James Bond",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "James Bond - Bond theme 77.mp3",
  },
 
  
{
    name: "Bond theme 77",
    artist: "James Bond ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },

{
    name: "Feel it still",
    artist: "Portugal the man",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Portugal the man - Feel it still.mp3",
  },


{
    name: "Ship wrek",
    artist: "MLA",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "MLA - Ship wrek.mp3",
  },






{
    name: "Sunny (Ruud Remix)",
    artist: "Boney M  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Boney M - Sunny.mp3",
  },


{
    name: "Sweet Baby",
    artist: "Macy Gray  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Macy Gray Sweet Baby.mp3",
  },

{
  

  name: " Freak of Nature",
    artist: "Amir ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Amir - Freak of Nature.mp3",
  }, 



{
    name: "Freak of Nature",
    artist: "Amir",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },



 


 

{
    name: "You are not alone",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },


{
    name: "Best motown",
    artist: "classic songs 60's",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Best motown classic songs 60's 70's 10.mp3",
  },











{
    name: "Mesmerized",
    artist: "Freemasons",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Freemasons  - Mesmerized.mp3",
  },



  
 {
    name: "Mesmerized",
    artist: "Freemasons ",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },


  
{
    name: "now playing Magic",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3",
  },




{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },


{
    name: "Todays news",
    artist: "nos journaal",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 

{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },

{
    name: "Mesmerized",
    artist: "Freemasons",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet4.mp3",
  },


{
    name: "Move on up",
    artist: "Destination",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Destination - Move on up.mp3",
  


}, 




{
    name: "Get together",
    artist: "Bebe Rexha ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bebe Rexha - Get together.mp3",
  },







{
    name: "Todays news",
    artist: "nos journaal",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 


{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },

{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },


{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },



{
    name: "Across 110th street",
    artist: "Bobby Womack",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bobby Womack - Across 110th street.mp3",
  },


 {
     name: "Across 110th street",
    artist: "Bobby Womack",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },

{
    name: "A Pain That I'm Used To",
    artist: "Depeche Mode ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "A Pain That I'm Used To (Jacques Lu Cont Remix).mp3",
  },







{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 
{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },
{
    name: "Lady Bug",
    artist: "Bumblebee Unlimited",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bumblebee Unlimited - Lady Bug.mp3",
  


},





{
  


  name: "Keep the fire Burning ",
    artist: "Gwen McCrae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3"
  },




{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 



 
 {
    name: "Summer Madness",
    artist: "Kool and the gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kool and the gang - Summer Madness.mp3",
  },




{
    name: "Beautiful",
    artist: "Snoop Dogg",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Snoop Dogg - Beautiful (Official Music Video) ft. Pharrell Williams.mp3",
  },
 





{
    name: "Sweet",
    artist: "Sound of Legend",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sound of Legend - Sweet.mp3",
  


},






{
    name: "Spinning Around",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kylie Minogue - Spinning Around.mp3",
  },



{
  
    name: "Just got paid",
    artist: "Sigala",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sigala - Just got paid.mp3",
  },


 {
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },



{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },










{
  
    name: "You for me",
    artist: "Sigala, Rita Ora",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sigala, Rita Ora - You for me.mp3",
  },



{
    name: "Break the Rules",
    artist: "Charli XCX",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Charli XCX - Break the Rules.mp3",
  


},



{
  
    name: "Don't be shy",
    artist: "Dj Tiesto 7 Karol G",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Dj Tiesto 7 Karol G - Don't be shy.mp3",
  },



{
  
    name: "A second to midnight",
    artist: "Kylie Minogue &Years & Years",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kylie Minogue &Years & Years  -A second to midnight.mp3",
  },






{
  
    name: "Love again",
    artist: "Alok",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Alok - Love again.mp3",
  },

 
{
    name: "This is it",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },


 

 {
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },



{
    name: "Cold Heart",
    artist: "Elton John & Dua Lipa",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Elton & Dua - Cold Heart.mp3",
  },








 


{
    name: "Beautiful",
    artist: "Snoop Dogg",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },



{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },





{
    name: "Do your Dance",
    artist: "Rose Royce ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Rose Royce - Do your dance.mp3",
  


}, 

 
 




{
    name: "Reunited",
    artist: "Peaches & Herb",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Peaches & Herb - Reunited.mp3",
  },



{
    name: "Takes a little time",
    artist: "Total Contrast",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Total Contrast - Takes a little time.mp3",
  


}, 



{
  


  name: "Techno Trance Yaaah ",
    artist: "D-Shake",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "D-Shake - Techno Trance Yaaah.mp3"
  },


{
    name: " All for you",
    artist: "Janet Jackson  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Janet Jackson - All for you.mp3",
  },










{
    name: "Goldeneye",
    artist: "Tina Turner",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Tina Turner - Goldeneye.mp3",
  


},


{
    name: "This is it",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Michael Jackson - This is it.mp3",
  


},

{
    name: "it's allright",
    artist: "NV",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "NV- it's allright.mp3",
  


}, 


{
    name: "Melting pot",
    artist: "Booker T. and the mg's",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },

{
    name: "The sound of music",
    artist: "Dayton",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Dayton - Thw sound of music.mp3",
  


},



{
    name: "Booker T. and the mg's",
    artist: "Booker T. and the mg's",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Booker T. and the mg's - Melting pot.mp3",
  


},

{
    name: "Machine gun",
    artist: "Commodores",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Commodores - Machine gun.mp3",
  


},

{
    name: "This is it",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },








{
    name: "Rhythm divine",
    artist: "Yello",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Yello - Rhythm divine.mp3",
  


},

{
    name: "Better than ever",
    artist: "Nona  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },




{
    name: "Psychofreak",
    artist: "Camila Cabello  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },





{
    name: "Welcome!",
    artist: "Play Sunny danceradio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
    name: "Welcome!",
    artist: "Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },


{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },




{
  
    name: " in the Dark",
    artist: "Purple disco machine ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Purple disco machine - in the Dark.mp3",
  },


{
    name: " Poker face",
    artist: "Lady Gaga  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Lady Gaga - Poker face.mp3",
  },


{
    name: "Miss a thing",
    artist: "Kylie Minogue   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kylie Minogue - Miss a thing.mp3",
  },










{
    name: "Ain't got no dished remix",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Purple Disco Machine - Ain't got no dished remix.mp3",
  


},




{
    name: "Try",
    artist: "Dua Lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Dua Lipa - Try.mp3",
  },



{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },

{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
    name: "Satisfaction",
    artist: "Benny Benassi",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Benny Benassi - Satisfaction.mp3",
  },




{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "start the party.mp3",
    },








{
    name: "Doing It",
    artist: "Rita Ora",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Rita Ora - Doing It.mp3",
  


},


  
{
  name: "Maniac",
    artist: "Sound of Legend",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sound of Legend - Maniac.mp3",
  


},



{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },





{
    name: "Sweet",
    artist: "Sound of Legend",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sound of Legend - Sweet.mp3",
  


},




{
    name: " Joys",
    artist: "Roberto Surace  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Roberto Surace - Joys.mp3",
  },



{
  


  name: "Keep the fire Burning ",
    artist: "Gwen McCrae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3"
  },



{
  
    name: "Don't be shy",
    artist: "Dj Tiesto 7 Karol G",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Dj Tiesto 7 Karol G - Don't be shy.mp3",
  },







{
  
    name: "Family",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bebe Rexha - Family.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },






{
    name: "If you don't wanna see me",
    artist: "Dua Lipa",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet4.mp3",
  },










{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3",
  


},





{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


},



{
    name: "If you don't wanna see me",
    artist: "Dua Lipa",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },










{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },









{
    name: "1999",
    artist: "Troye Sivan",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },



{
    name: "1999",
    artist: "Troye Sivan",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },



{
    name: "You Cant Hide",
    artist: "David Joseph",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "David Joseph - You Cant Hide (Your Love From Me).mp3",
  


},




{
    name: "Dancin'",
    artist: "Crown Heights Affair  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Crown Heights Afffair - Dancin'.mp3",
  },




{
  name: "Maniac",
    artist: "Sound of Legend",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sound of Legend - Maniac.mp3",
  


},


{
    name: "Game of life",
    artist: "Sugar rainbow",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sugar rainbow - Game of life.mp3",
  },




{
    name: "Get Lucky",
    artist: "Daft Punk ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Daft Punk - Get Lucky.mp3",
  },






{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },

{
    name: "Let's go round again",
    artist: "Average White Band ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Average White Bans - Let's go round again.mp3",
  },



{
    name: "The Boss",
    artist: "Diana Ross",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet4.mp3",
  },



{
    name: "Razzmatazz",
    artist: "Quincy Jones& Patti Austin",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Quincy Jones& Patti Austin -  Razzmatazz.mp3",
  


}, 

 {
    name: "Baby",
    artist: "Charli XCX",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Charli XCX - Baby.mp3",
  


},





{
    name: "Seven Stars",
    artist: "Quazar",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet3.mp3",
  


},


{
    name: "No Diggity",
    artist: "Blackstreet ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Blackstreet - No Diggity ft. Dr. Dre, Queen Pen.mp3",
  


},








{
    name: "Just get ready",
    artist: "Sos Band",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sos Band - Just get ready (Ben lIebrand remix).mp3",
  },


{
    name: "Just get ready",
    artist: "Welcome!",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet4.mp3",
  },

{
    name: "Welcome!",
    artist: "Sos Band  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },





{
    name: "Can you handle it",
    artist: "Sharon Redd ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sharon Redd Can you handle it.mp3",
  },







{
    name: "One Kiss",
    artist: "Dua lipa ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Dua lipa - One Kiss.mp3",
  },


 {
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },



{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },









{
    name: "Brotha",
    artist: "Angie Stone",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Angie Stone - Brotha.mp3",
  },



{
    name: "Real Groove",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kylie Minogue -Real Groove.mp3",
  


},


{
    name: "All Around the World",
    artist: "Lisa Stansfield ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Lisa Stansfield - All Around the World.mp3",
  },



{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },




{
    name: "Nights over Egypt",
    artist: "The Jones Girls",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet4.mp3",
  },


{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3",
  


},





{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


},




{
    name: "Get together",
    artist: "Bebe Rexha ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bebe Rexha - Get together.mp3",
  },



{
    name: "Love tonight",
    artist: "Shouse",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Shouse - Love tonight.mp3",
  },




{
    name: "I wish",
    artist: "Joel Corry",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Joel Corry - I wish.mp3",
  },





  {
  name: "Blood on the dancefloor",
    artist: "Michael Jackson",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },











{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


},







{
    name: "Todays news",
    artist: "nos journaal",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 


{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
    name: "Nona",
    artist: " Mondays",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Nona - Mondays.mp3",
  


},



{
    name: "Dolce Vita",
    artist: "Ryan Paris",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Ryan Paris - Dolce Vita.mp3",
  
},

{
    name: "Alice",
    artist: "Lady Gaga   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Lady Gaga - Alice.mp3",
  },



{
    name: " Midnight Sky",
    artist: "Miley Cyrus  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Miley Cyrus - Midnight Sky.mp3",
  },



{
    name: " Playbox",
    artist: "Purple disco machine  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Purple disco machine - Playbox.mp3",
  },







{
    name: "Welcome!",
    artist: "Ryan Paris ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",


},

{
    name: "Everything She Wants ",
    artist: "WHAM!",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "WHAM! - Everything She Wants [The Reflex LP Version Revision].mp3",
  


},



{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "start the party.mp3",
  


}, 





{
    name: "Welcome!",
    artist: "Play Sunny danceradio  ",
  image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
    name: "Welcome!",
    artist: "Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },



{
  


  name: "Keep the fire Burning ",
    artist: "Gwen McCrae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3"
  },





{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 

{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },


{
    name: "Marss",
    artist: "Pump up the volume",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Marss Pump up the volume.mp3",
  


},







{
    name: "Wish I Didn't Miss You",
    artist: "Angie Stone",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Angie Stone - Wish I Didn't Miss You.mp3",
  },



{
    name: "Wish I Didn't Miss You",
    artist: "Angie Stone",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },





{
    name: "Low",
    artist: "Lenny Kravitz ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Lenny Kravitz - Low.mp3",
  


},
{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3",
  


},


{
    name: "Robin S Crystal Waters & CC Peniston",
    artist: "Divers",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Robin S Crystal Waters & CC Peniston.mp3",
  },




{
    name: "Keep on moving",
    artist: "Kastuvas",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "kastuvas - Keep on moving.mp3",
  },


{  
    name: "Give it to me baby",
    artist: "Rick James",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Rick James - Give it to me baby.mp3",
  }, 


{
    name: "Melting pot",
    artist: "Booker T. and the mg's",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },








{
    name: "Discoteka",
    artist: "Minelli x Inna ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Minelli x Inna - Discoteka.mp3",
  },




 {
    name: "Game of life",
    artist: "Sugar rainbow",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet4.mp3",
  },
 

{
    name: " On how life is",
    artist: "Macy Gray  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Macy Gray - On how life is.mp3",
  },











{
    name: " Hip hop Lollipop ",
    artist: "Bootsy Collins, Fantaazma",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bootsy Collins, Fantaazma - Hip Hop Lollipop.mp3",
  },








{
    name: "Push the Button",
    artist: "Sugababes",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sugababes - Push the Button.mp3",
  },











{
    name: " Words",
    artist: "Alesso",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Alesso - Words.mp3",
  


},




{
  
    name: "Apologize",
    artist: "Timbaland",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Timbaland - Apologize.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },

{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },











{
    name: " Diamonds",
    artist: "Herb  Alpert  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Herb  Alpert - Diamonds.mp3",
  },






{
      name: " Dance 1978",
    artist: "Sylvester",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sylvester- Dance 1978.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
      name: " Born to be alive",
    artist: "Patrick Hernandez",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Patrick Hernandez Born to be alive.mp3",
  },







{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 
{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },

{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },








{
    name: "Looking now",
    artist: "Bebe Rexha   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bebe Rexha - Looking now.mp3",
  },






{
    name: " You see the trouble with me ",
    artist: "Black Legend ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "You see the trouble with me - Black Legend.mp3",
  },


















{
    name: "Yeke Yeke (Hardfloor Remix)",
    artist: "Mory Kante",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Mory Kante - Yeke Yeke (Hardfloor Remix).mp3",
  


},

{
     name: " Use me Loose me",
    artist: "Paul Simpson connection",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Paul Simpson connection - Use me Loose.mp3",
  },



{
     name: " Die in the Disco",
    artist: "Nightclub",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Nightclub - Die in the Disco.mp3",
  },

{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },



{
     name: " Used to know me",
    artist: "Charli XCX ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Charli XCX - Used to know me.mp3",
  },



{
    name: "Just get ready",
    artist: "Sos Band",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sos Band - Just get ready (Ben lIebrand remix).mp3",
  },


{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "start the party.mp3",
  


}, 



 



{
    name: "You should be dancin",
    artist: "Beegees  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },

{
    name: "No stress",
    artist: "Laurent Wolf",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Laurent Wolf - No stress.mp3",
  },

{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },


{
    name: "In the mix",
    artist: "Mix masters feat. Mc Action",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Mix masters feat. Mc Action - In the mix.mp3",
  },




{
    name: "Stranger in Moscow",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Michael Jackson - stranger in moscow.mp3",
  },
 



{
    name: "Too hot",
    artist: "Kool and the gang",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kool and the gang - Too hot.mp3",
  },





{
    name: "Seven nation army",
    artist: "Gaulin & Julian Perreta",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Gaulin & Julian Perreta - Seven nation army.mp3",
  },





{
    name: "Make me feel good",
    artist: "Belters only feat. Jazzy",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Belters only feat. Jazzy - make me feel good.mp3",
  },



{
    name: "Kings & Queens",
    artist: "Ava Max  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Ava Max - Kings & Queens.mp3",
  },




 {
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
    name: "Gimme gimme gimme",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bebe Rexha - Gimme gimme gimme.mp3",
  },

{
    name: "Hideaway",
    artist: "Kiesza  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kiesza - Hideaway.mp3",
  },





{
    name: "classic songs 60's",
    artist: "Best motown classic",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Best motown classic songs 60's 70's 13.mp3",
  },

{
    name: "classic songs 60's",
    artist: "Best motown classic",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },


{
    name: "classic songs 60's",
    artist: "Best motown classic",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet4.mp3",
  },

{
    name: "Promised Land",
    artist: "Joe Smooth",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Joe Smooth - Promised Land.mp3",
  },
 

{
  
    name: "Drive",
    artist: "Clean Bandit",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Clean Bandit - Drive.mp3",
  },



 {
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },



{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },




{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },

{
    name: " Magic",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3",
  },


{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  },



{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
    name: "Q & A",
    artist: "Nona  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Nona - Q & A.mp3",
  },




{
    name: " Best Friend ",
    artist: "Saweetie ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Saweetie - Best Friend.mp3",
  },


{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


},


 {
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3",
  


},



{
    name: " Good Luck",
    artist: "Mabel, Jack Jones , Galantis",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Mabel, Jack Jones , Galantis - Good Luck.mp3",
  },

{
    name: "  Is This the Future",
    artist: "Fatback  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Fatback - Is This the Future.mp3",
  },




{
    name: " Tire Up you",
    artist: "Calvin Harris ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Calvin Harris - Tire Up you ....mp3",
  },


{
    name: "I just can't stop",
    artist: "Kylie Minogue",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kylie Minogue -I just can't stop.mp3",
  },


{
    name: "On the Beat",
    artist: "BB Q Band  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "BB Q Band - On the Beat.mp3",
  },




 {
    name: "Welcome!",
    artist: "Play Sunny danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },



{
    name: "Welcome!",
    artist: "Play Sunny danceradio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },






{
    name: "The moon shines up",
    artist: "Calvin Harris",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Calvin Harris - The moon shines up.mp3",
  },






{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 

{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "reklame.mp3",
  


},




{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },



{
    name: " Funky president",
    artist: "James Brown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },


{
    name: " Seven nation army",
    artist: "Gaulin & Julian Perreta",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Gaulin & Julian Perreta - Seven nation army.mp3",
  },





{
    name: " Make me feel good",
    artist: "Belters only feat. Jazzy",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Belters only feat. Jazzy - make me feel good.mp3",
  },




{
    name: "Keep on moving",
    artist: "Kastuvas",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "kastuvas - Keep on moving.mp3",
  },


{
    name: " Won't forget you",
    artist: "Shouse",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Shouse - won't forget you.mp3",
  },



{
  


  name: " Keep the fire Burning ",
    artist: "Gwen McCrae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3"
  },


{
    name: "now playing Game of life",
    artist: "Sugar rainbow",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sugar rainbow - Game of life2.mp3",
  },

{
    name: "now playing No one dies from love",
    artist: "Tove Lo",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Tove Lo - No one dies from love.mp3",
  


},
 




{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 


{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "reklame.mp3",
  


},



{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },

{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },





{
    name: " Let's go round again",
    artist: "Average White Band  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Average White Bans - Let's go round again.mp3",
  },
  




{
  
    name: "Love again",
    artist: "Alok",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Alok - Love again.mp3",
  },









{
    name: "Right in the socket",
    artist: "Shalamar",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Shalamar - Right in the socket.mp3",
  },




{
    name: "People are people",
    artist: "Depeche Mode",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Depeche mode- People are people.mp3",
  },


{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },







{
    name: "Won't forget you",
    artist: "Shouse",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "kastuvas - Keep on moving.mp3",
  },









{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },

{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },



{
    name: "Love tonight",
    artist: "Shouse",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Shouse - Love tonight.mp3",
  },




{
    name: "I wish",
    artist: "Joel Corry",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Joel Corry - I wish.mp3",
  },






{
    name: "Give it to me baby",
    artist: "Rick James  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },
{
    name: "Give it to me baby",
    artist: "Rick James",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },


{
    name: "Funky president",
    artist: "James Brown",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },



{  
    name: "Passion",
    artist: "Gat Decor",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Gat Decor - Passion.mp3",
  }, 


{
    name: " Sunrise",
    artist: "Simply Red   ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Simply Red - Sunrise (Extended).mp3",
  },


{
    name: " This it what you came for",
    artist: "Calvin Harris    ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Calvin Harris - This it what you came for.mp3",
  },

{
    name: "Passion",
    artist: "Gat Decor  ",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },

{
    name: "Passion",
    artist: "Gat Decor",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet3.mp3",
  },
  

{
    name: "The love boat theme",
    artist: "Rock Hudson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "The love boat theme.mp3",
  },













{
    name: "Cry for You",
    artist: "September",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "September - Cry for You.mp3",
  


},


{
  
    name: "Blue",
    artist: "Miley Cyrus & Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Miley Cyrus & Bebe Rexha- Blue.mp3",
  },



{
  
    name: "When I'm gone",
    artist: "Alesso & Kathy Perry",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Alesso & Kathy Perry - When I'm gone.mp3",
  },


{
    name: "Run",
    artist: "Becky Hill  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Becky Hill - Run.mp3",
  },

{
    name: "Play hard",
    artist: "David Guetta  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "David Guetta - Play hard.mp3",
  },



{
  
    name: "Free love",
    artist: "Bebe Rexha",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bebe Rexha - Free love.mp3",
  },



{
    name: "Un-break my heart",
    artist: "Toni Braxton   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Toni Braxton - Un-break my heart.mp3",
  },


{
    name: "1999",
    artist: "Troye Sivan",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Troye Sivan - 1999.mp3",
  },



{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


},


{
    name: "Seven Stars",
    artist: "Quazar",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  


},





{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },

{
    name: "The Love We Had",
    artist: "Joss Stone ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Joss Stone - The Love We Had.mp3",
  


},

{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },



{
    name: "Stories",
    artist: "Carleen Anderson ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Carleen Anderson - Stories.mp3",
  


},




{
    name: "La Vie En Rose",
    artist: "Grace Jones ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Grace Jones - La Vie En Rose.mp3",
  


},

{
    name: "I'll be There",
    artist: "Jackson 5",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Best motown classic songs 60's 70's 1.mp3",
  


},


{
    name: "Seven Stars",
    artist: "Quazar",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Quazar - Seven Stars  (Dragon Figthers).mp3",
  


},

{
    name: "Keep the fire Burning",
    artist: "Gwen McCrae  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Gwen McCrae - Keep the fire Burning.mp3",
  },


{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "start the party.mp3",
  


}, 



{
    name: " Boogie2nite",
    artist: "Booty luv",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Booty luv - Boogie2nite.mp3",
  },



{
    name: " Preaching to the choir",
    artist: "Nona",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Nona - Preaching to the choir.mp3",
  


},


{
  


  name: " I didn't mean to turn you on",
    artist: "Cherelle ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Cherelle - I didn't mean to turn you on.mp3"
  },





{
  


  name: " Pacific State",
    artist: "808 state ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "808 state - Pacific State.mp3"
  },


{
    name: " Nature Boy",
    artist: "Hazel Fernandes  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Hazel Fernandes - Nature Boy.mp3",
  },














{
    name: " Chinese Whispers",
    artist: "Full Flava  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Full Flava - Chinese Whispers.mp3",
  },





{
    name: " Groove Is In The Heart",
    artist: "Deee-Lite   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },



{
    name: "Groove Is In The Heart",
    artist: "Deee-Lite   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },





{
    name: " Groove Is In The Heart",
    artist: "Deee-Lite   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },


{
    name: " Groove Is In The Heart",
    artist: "Deee-Lite   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3",
  },



{
    name: " Round and round",
    artist: "Deee-Lite   ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Full Flava - Round and round.mp3",
  },








{
    name: "If you don't wanna see me",
    artist: "Dua Lipa",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet.mp3",
  },





{
  


  name: "Keep the fire Burning ",
    artist: "Gwen McCrae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3"
  },






{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 



{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{  
    name: "Love never felt so good",
    artist: "Michael Jackson Justin Timberblake ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Michael Jackson Justin Timberblake - Love never felt so good.mp3",
  },

{
    name: "Love never felt so good",
    artist: "Michael Jackson Justin Timberblake  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },

{
    name: "Shy",
    artist: "Kid Guente",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Kid Guente - Shy.mp3",
  },



{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },







{
  


  name: "Keep the fire Burning ",
    artist: "Gwen McCrae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3"
  },


 

 




{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },


{
    name: "Never can say goodbye 12inch",
    artist: "Communards",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Communards - Never can say goodbye 12inch.mp3",
  },

{
    name: "Enjoy The Silence",
    artist: "Depeche Mode ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Depeche Mode - Enjoy The Silence.mp3",
  },





{
    name: "New Gold dream ",
    artist: "Simple Minds",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "New Gold dream - Simple Minds.mp3",
  },


{
    name: "Personal Jesus",
    artist: "Depeche Mode",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Depeche Mode - Personal Jesus.mp3",
  },



{
    name: "Dancin'",
    artist: "Crown Heights Affair  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Crown Heights Afffair - Dancin'.mp3",
  },



{
    name: "Nothing but you",
    artist: "Paul van Dyk",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Paul van Dyk - Nothing but you.mp3",
  },


{
  


  name: "Keep the fire Burning ",
    artist: "Gwen McCrae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3"
  },





{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 


{
    name: "My Love",
    artist: "Route 94 ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Route 94 - My Love.mp3",
  },





{
    name: "Welcome!",
    artist: "Play Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },

{
    name: "Feel it still",
    artist: "Portugal the man  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },

  {
    name: "Soul Cha Cha",
    artist: "Van McCoy  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Van McCoy - Soul Cha Cha.mp3",
  },

  {
    name: "Right on",
    artist: "The pasadenas  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "The pasadenas - Right on.mp3",
  },

{
    name: "Right on",
    artist: "The pasadenas  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
    name: "Risin to the Top",
    artist: "Kenny Burke",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },


{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "start the party.mp3",
  


}, 







{  
    name: "You rock my world",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Michael Jackson - You rock my world.mp3",
  },
 






{
    name: "Golden",
    artist: "Jill Scott  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Jill Scott  Golden.mp3",
  },





{
  


  name: "Energy  52 ",
    artist: "Cafe del Mar ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Cafe del Mar - Energy  52.mp3"
  },



{
  


  name: "Saltwater",
    artist: "Chicane  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Chicane - Saltwater.mp3"
  },









{
    name: "classic songs 60's",
    artist: "Best motown classic",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Best motown classic songs 60's 70's 8.mp3",
  },








{
    name: "classic songs 60's",
    artist: "Best motown classic",
     image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet4.mp3",
  },






{
    name: "Street player",
    artist: "Chicago",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Milllie jackson - Keep the home fires burnin (single).mp3",
  


}, 





{
    
    name: "Best motown classic",
    artist: "Shop around",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Best motown classic shop around.mp3",
  },




{
    name: "Prince",
    artist: "I would die for you  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Prince I would die for you.mp3",
  },



{
    name: "Paradise Mix",
    artist: "Sueno Latino",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sueno Latino - Paradise Mix.mp3",
  


},


{
    name: "Seven Stars",
    artist: "Quazar",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  


},



{
    name: "I cant wait",
    artist: "New Shooz",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "New Shooz I cant wait.mp3",
  


},



{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },


{  
    name: "Love come down",
    artist: "Evelyn King",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Evelyn King - Love come down.mp3",
  },



{  
    name: "You are not alone",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Michael Jackson- You are not alone.mp3",
  },
 {
     name: "You are not alone",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet3.mp3",
  },

{
    name: "You are not alone",
    artist: "Michael Jackson",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },

 
 {
    name: "Funky president",
    artist: "James Brown ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "James Brown - Funky president.mp3",
  },

{
    name: " Can you feel it",
    artist: "Mr Fingers",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Mr Fingers - Can you feel it.mp3",
  


},



{
    name: "It Makes You Feel Like Dancin",
    artist: "Rose Royce",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Rose Royce - It Makes You Feel Like Dancin' [Special Limited Edition].mp3",
  


},


{
    name: "Just get ready",
    artist: "Sos Band",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sos Band - Just get ready (Ben lIebrand remix).mp3",
  },



{
    name: "Lady Bug",
    artist: "Bumblebee Unlimited  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle1.mp3",
  },


 


{
    name: "The Boss",
    artist: "Diana Ross",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },






{
    name: "A Long Walk",
    artist: "Jill Scott  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Jill Scott A Long Walk.mp3",
  },


{
    name: "Liberian Girl",
    artist: "Michael jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Michael jackson -Liberian Girl.mp3",
  


}, 










{
    name: "Rainforest",
    artist: "Paul Hardcastle",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Paul Hardcastle - Rainforest.mp3",
  },



 
{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },



 

{
    name: "Welcome!",
    artist: "Play Sunny Danceradio  ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },


{
    name: "Welcome!",
    artist: "Sunny radio  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },








{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 

{
    name: "Game of life",
    artist: "Sugar rainbow",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sugar rainbow - Game of life.mp3",
  },


 


{
    name: "Pipeline",
    artist: "Bruce Johnston",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Bruce Johnston- Pipeline.mp3",
  },
{
    name: "Glide",
    artist: "Pleasure",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Pleasure - Glide.mp3",
  },



{
  


  name: "Keep the fire Burning ",
    artist: "Gwen McCrae ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "reklame.mp3"
  },

















{
    name: "Todays news",
    artist: "nos journaal",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "nos journaal 11.mp3",
  


}, 

{
    name: "Fast Love",
    artist: "George Michael ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Fast Love - George Michael.mp3",
  },

{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "start the party.mp3",
  


},

{
    name: "Lowdown",
    artist: "Boz Scaggs ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Boz Scaggs3 - Lowdown.mp3",
  },


{
    name: "Billy Jean (US remix)",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Michael Jackson - Billy Jean (US remix).mp3",
  },

   {
     name: "Billy Jean (US remix)",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },

{
    name: "Return of the mack",
    artist: "Mark Morrison",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Mark Morrison - Return of the mack.mp3",
  },





{
    name: "Return of the mack",
    artist: "Mark Morrison  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle.mp3",
  },

{
    name: "Return of the mack",
    artist: "Mark Morrison ",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle4.mp3",
  },


 {
     name: "Return of the mack",
    artist: "Mark Morrison",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio snippet5.mp3",
  },



{
    name: "Classic",
    artist: "Time",
   image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "time classic.mp3",
  },




{
    name: "Sunny radio",
    artist: "Go back",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "let's go back.mp3",
  },


{
    name: "One day in your life",
    artist: "Michael Jackson",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Michael Jackson - One day in your life.mp3",
  },
 



{
    name: "Best of my Love",
    artist: "T-Connection",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "T-Connection - Best of my Love.mp3",
  },
 

{
    name: "Best of my Love",
    artist: "T-Connectiono  ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "Sunny radio jingle3.mp3",
  },







{
    name: "Welcome!",
    artist: "Purple Disco Machine",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "start the party.mp3",
  


}, 

{
    name: "This Is Not America",
    artist: "David Bowie ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "David Bowie - This Is Not America.mp3",
  


},



 








];




function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();
 
  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();
 
  // Update details of the track
  track_art.style.backgroundImage =
     "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
     "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);
 
  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);
 
  // Apply a random background color
  random_bg_color();
}
 
function random_bg_color() {
  // Get a random number between 64 to 256
  // (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
 
  // Construct a color withe the given values
  let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 
  // Set the background to the new color
  document.body.style.background = bgColor;
}
 
// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}



function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack() ;
}
 
function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;
 
  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<img class= "media"  src="pause button.png">';
}
 
function pauseTrack() {
  // Pause the loaded track
  curr_track.pause();
  isPlaying = false;
 
  // Replace icon with the play icon
  playpause_btn.innerHTML = '<img class= "media"  src="play.png">';
}
 

 
function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
   
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}



function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  seekto = curr_track.duration * (seek_slider.value / 100);
 
  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
}
 
function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = volume_slider.value / 100;
}
 
function seekUpdate() {
  let seekPosition = 0;
 
  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;
 
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
 
    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
 
    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}




// Load the first track in the tracklist
loadTrack(track_index);

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("fast");
    $("#div3").fadeIn(0);
  });
});


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction1() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




var list = document.getElementById( "list");





var calvin = document.getElementById("calvin");



var janet = document.getElementById("janet");
list.removeChild(janet);

var gaga = document.getElementById("gaga");
list.removeChild(gaga);

var kylie = document.getElementById("kylie");
list.removeChild(kylie);
  

var purple = document.getElementById("purple");
list.removeChild(purple);


var dua = document.getElementById("dua");
list.removeChild(dua);


var benny = document.getElementById("benny");
list.removeChild(benny);

var charli = document.getElementById("charli");
list.removeChild(charli);

var rita = document.getElementById("rita");
list.removeChild(rita);








var legend = document.getElementById("legend");







var sugar = document.getElementById("sugar");
list.removeChild(sugar);
var XCX = document.getElementById("XCX");



var sweet = document.getElementById("sweet");

var September = document.getElementById("September");

var rule = document.getElementById("rule");

var fall = document.getElementById("fall");

var was = document.getElementById("was");

var good = document.getElementById("good");

var troye = document.getElementById("troye");

var shake = document.getElementById("shake");

var energy = document.getElementById("energy");

var salt = document.getElementById("salt");


var hazel = document.getElementById("hazel");


var toni = document.getElementById("toni");

var brax = document.getElementById("brax");


var chinese = document.getElementById("chinese");

var round = document.getElementById("round");


var smooth = document.getElementById("smooth");

var magic = document.getElementById("magic");

var motto = document.getElementById("motto");

var spin = document.getElementById("spin");


var paid = document.getElementById("paid");


var chain = document.getElementById("chain");


var miss = document.getElementById("miss");


var cold = document.getElementById("cold");

var years = document.getElementById("years");

var love = document.getElementById("love");


var snoop = document.getElementById("snoop");
list.removeChild(snoop);
var rose = document.getElementById("rose");
list.removeChild(rose);

var herb = document.getElementById("herb");

var contrast = document.getElementById("contrast");


var it = document.getElementById("it");


var nv = document.getElementById("nv");



var booker = document.getElementById("booker");

var gun = document.getElementById("gun");

var yello = document.getElementById("yello");


var mond = document.getElementById("mond");


$.fn.volumizer=function(o){ // assumes the user has no controls!
		return this.each(function(){
			var lastSeconds=-1,
				media=this
			$(this).on('timeupdate',function(){
				var seconds=Math.floor(this.currentTime)
				if (seconds>lastSeconds && o[seconds]){
					var rule=o[seconds],
						aniSeconds=rule[0],
						volume=this.volume,
						finalVolume=rule[1]*volume,
						stepVolume=(finalVolume-volume)/aniSeconds
			//		console.log(rule,volume,finalVolume,stepVolume)
					for(var second=0;second<aniSeconds+1;second++)
						(function(tVolume){
							setTimeout(function(){
								media.volume=tVolume
			//					console.log(tVolume)
							},second*1000)
						})(volume+(stepVolume*second))
				}
				lastSeconds=seconds
			})
		})
	}

$('audio').volumizer({15:[25,.0001]})
