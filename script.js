// async function getsopng() {
//   let a = await fetch("http://127.0.0.1:3000/song/")
//   let response = await a.text()
//   let div = document.createElement("div")
//   div.innerHTML = response;
//   let as = div.getElementsByTagName("a")
//   let song = []
//   for (let index = 0; index < as.length; index++) {
//     const element = as[index];
//     if (element.href.endsWith("mp3")) {
//       song.push(element.href.split("/song/")[1])
//     }
//   }
//   return song
// }

// const playMusic = (track) => {
//   let audio = new Audio(`http://127.0.0.1:3000/song/${track}`)
//   audio.play()
// }

// async function main() {
//   try {
//     let songs = await getsopng()
//     console.log(songs)
//     if (songs.length === 0) {
//       console.log("No songs found.")
//       return
//     }
//     let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0]
//     songul.innerHTML = "" // clear the innerHTML before adding new content
//     for (const song of songs) {
//       songul.innerHTML += `
//         <li>
//           <img class="invert" src="music.svg" alt="">
//           <div class="info">
//             <div class="sname"> ${song.replaceAll("%20", " ")} </div>
//             <div class="artistname">Mahir</div>
//           </div>
//           <svg class="playplay" width="24" height="24">
//             <!-- Green circle -->
//             <circle cx="12" cy="12" r="10" fill="#34C759" />
            
//             <!-- Black play button (increased size) -->
//             <!-- Adjusted path coordinates for larger play button -->
//             <path d="M10.5 8 L17.5 12 L10.5 16 Z" fill="#000" />
//           </svg>
//         </li>
//       `;
//     }
//     let lis = songul.getElementsByTagName("li")
//     Array.from(lis).forEach(e => {
//       e.addEventListener("click", element => {
//         console.log(e.querySelector(".info").firstChild.innerHTML)
//         playMusic(e.querySelector(".info").firstChild.innerHTML.trim())
//       })
//     })
//   } catch (error) {
//     console.error("Error playing song:", error)
//   }
// }

// main()














// async function getsopng() {
//     let a = await fetch("http://127.0.0.1:3000/song/")
//     let response = await a.text()
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a")
//     let song = []
//     for (let index = 0; index < as.length; index++) {
//       const element = as[index];
//       if (element.href.endsWith("mp3")) {
//         song.push(element.href.split("/song/")[1])
//       }
//     }
//     return song
//   }
  
//   const playMusic = (track) => {
//     let audio = new Audio(`http://127.0.0.1:3000/song/${track}`)
//     audio.play()
//   }
  
//   async function main() {
//     try {
//       let songs = await getsopng()
//       console.log(songs)
//       if (songs.length === 0) {
//         console.log("No songs found.")
//         return
//       }
//       let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0]
//       songul.innerHTML = "" // clear the innerHTML before adding new content
//       for (const song of songs) {
//         songul.innerHTML += `
//           <li>
//             <img class="invert" src="music.svg" alt="">
//             <div class="info">
//               <div class="sname"> ${song.replaceAll("%20", " ")} </div>
//               <div class="artistname">Mahir</div>
//             </div>
//             <svg class="playplay" width="24" height="24">
//               <!-- Green circle -->
//               <circle cx="12" cy="12" r="10" fill="#34C759" />
              
//               <!-- Black play button (increased size) -->
//               <!-- Adjusted path coordinates for larger play button -->
//               <path d="M10.5 8 L17.5 12 L10.5 16 Z" fill="#000" />
//             </svg>
//           </li>
//         `;
//       }
//       let lis = songul.getElementsByTagName("li")
//       Array.from(lis).forEach(e => {
//         e.addEventListener("click", element => {
//           console.log(e.querySelector(".info").firstChild.innerHTML)
//           playMusic(e.querySelector(".info").firstChild.innerHTML)
//         })
//       })
//     } catch (error) {
//       console.error("Error playing song:", error)
//     }
//   }
  
//   main()












// async function getSong() {
//     try {
//       let response = await fetch("http://127.0.0.1:3000/song/");
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       let html = await response.text();
//       let parser = new DOMParser();
//       let doc = parser.parseFromString(html, 'text/html');
//       let as = doc.getElementsByTagName("a");
//       let songs = [];
//       for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith("mp3")) {
//           songs.push(element.href.split("/song/")[1]);
//         }
//       }
//       return songs;
//     } catch (error) {
//       console.error("Error fetching songs:", error);
//       return [];
//     }
//   }
  
//   const playMusic = (track) => {
//     let audio = new Audio(`http://127.0.0.1:3000/song/${track}`);
//     audio.play().catch(error => {
//       console.error("Error playing audio:", error);
//     });
//   };
  
//   async function main() {
//     try {
//       let songs = await getSong();
//       console.log(songs);
      
//       let songul = document.querySelector(".songlist > ul");
//       songul.innerHTML = ""; // Clear the existing list content
      
//       for (const song of songs) {
//         let li = document.createElement('li');
//         li.innerHTML = `
//           <img class="invert" src="music.svg" alt="">
//           <div class="info">
//             <div class="sname">${song.replaceAll("%20", " ")}</div>
//             <div class="artistname">Mahir</div>
//           </div>
//           <svg class="playplay" width="24" height="24">
//             <!-- Green circle -->
//             <circle cx="12" cy="12" r="10" fill="#34C759" />
//             <!-- Black play button (increased size) -->
//             <!-- Adjusted path coordinates for larger play button -->
//             <path d="M10.5 8 L17.5 12 L10.5 16 Z" fill="#000" />
//           </svg>
//         `;
        
//         li.addEventListener("click", () => {
//           playMusic(song);
//         });
        
//         songul.appendChild(li);
//       }
//     } catch (error) {
//       console.error("Error in main:", error);
//     }
//   }
  
//   main();
  















// let currentAudio; // declare a global variable to store the current Audio object

// async function getSong() {
//   try {
//     let response = await fetch("http://127.0.0.1:3000/song/");
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     let html = await response.text();
//     let parser = new DOMParser();
//     let doc = parser.parseFromString(html, 'text/html');
//     let as = doc.getElementsByTagName("a");
//     let songs = [];
//     for (let index = 0; index < as.length; index++) {
//       const element = as[index];
//       if (element.href.endsWith("mp3")) {
//         songs.push(element.href.split("/song/")[1]);
//       }
//     }
//     return songs;
//   } catch (error) {
//     console.error("Error fetching songs:", error);
//     return [];
//   }
// }

// const playMusic = (track) => {
//   if (currentAudio) {
//     currentAudio.pause(); // pause the current song
//     currentAudio.currentTime = 0; // reset the current time to 0
//   }
//   currentAudio = new Audio(`http://127.0.0.1:3000/song/${track}`);
//   currentAudio.play().catch(error => {
//     console.error("Error playing audio:", error);
//   });
// };

// async function main() {
//   try {
//     let songs = await getSong();
//     console.log(songs);
    
//     let songul = document.querySelector(".songlist > ul");
//     songul.innerHTML = ""; // Clear the existing list content
    
//     for (const song of songs) {
//       let li = document.createElement('li');
//       li.innerHTML = `
//         <img class="invert" src="music.svg" alt="">
//         <div class="info">
//           <div class="sname">${song.replaceAll("%20", " ")}</div>
//           <div class="artistname">Mahir</div>
//         </div>
//         <svg class="playplay" width="24" height="24">
//           <!-- Green circle -->
//           <circle cx="12" cy="12" r="10" fill="#34C759" />
//           <!-- Black play button (increased size) -->
//           <!-- Adjusted path coordinates for larger play button -->
//           <path d="M10.5 8 L17.5 12 L10.5 16 Z" fill="#000" />
//         </svg>
//       `;
      
//       li.addEventListener("click", () => {
//         playMusic(song);
//       });
      
//       songul.appendChild(li);
//     }
//   } catch (error) {
//     console.error("Error in main:", error);
//   }

//   play.addEventListener("click",()=>{
//     if (currentAudio.pause){
//       currentAudio.play();
//       playb.src="pause.svg"
//     }
//     else{
//       currentAudio.pause();
//       playb.src="play.svg"
//     }
//   })





// }

// main();
  











let currentAudio; // declare a global variable to store the current Audio object
let playButton; // declare a global variable to store the play button element

async function getSong() {
  try {
    let response = await fetch("http://127.0.0.1:3000/song/");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let html = await response.text();
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, 'text/html');
    let as = doc.getElementsByTagName("a");
    // console.log(as)  
    let songs = [];
    for (let index = 0; index < as.length; index++) {
      const element = as[index];
      if (element.href.endsWith("mp3")) {
       
        songs.push(element.href.split("/song/")[1]);
      }
    }
    return songs;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}

const playMusic = (track) => {
  if (currentAudio) {
    currentAudio.pause(); // pause the current song
    currentAudio.currentTime = 0; // reset the current time to 0
  }
  currentAudio = new Audio(`http://127.0.0.1:3000/song/${track}`);
  currentAudio.play().catch(error => {
    console.error("Error playing audio:", error);
  });
  playButton.src = "pause.svg"; // update the play button to pause state
};

const pauseMusic = () => {
  if (currentAudio) {
    currentAudio.pause();
    playButton.src = "play.svg"; // update the play button to play state
  }
};

async function main() {
  try {
    let songs = await getSong();
    console.log(songs);
    
    let songul = document.querySelector(".songlist > ul");
    songul.innerHTML = ""; // Clear the existing list content
    
    for (const song of songs) {
      let li = document.createElement('li');
      li.innerHTML = `
        <img class="invert" src="music.svg" alt="">
        <div class="info">
          <div class="sname">${song.replaceAll("%20", " ")}  ${song.replaceAll(".mp3", "")}</div>
         
          <div class="artistname">Mahir</div>
        </div>
        <svg class="playplay" width="24" height="24">
          <!-- Green circle -->
          <circle cx="12" cy="12" r="10" fill="#34C759" />
          <!-- Black play button (increased size) -->
          <!-- Adjusted path coordinates for larger play button -->
          <path d="M10.5 8 L17.5 12 L10.5 16 Z" fill="#000" />
        </svg>
      `;
      
      li.addEventListener("click", () => {
        playMusic(song);
      });
      
      songul.appendChild(li);
    }
    
    playButton = document.querySelector(".play-button"); // get the play button element
    playButton.addEventListener("click", () => {
      if (currentAudio && currentAudio.paused) {
        playMusic(currentAudio.src.split("/song/")[1]); // resume playing
      } else {
        pauseMusic(); // pause playing
      }
    });
  } catch (error) {
    console.error("Error in main:", error);
  }
}

main();