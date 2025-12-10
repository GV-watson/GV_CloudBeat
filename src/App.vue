<template>
  <div id="app">

    <!--Top of page header-->
    <header class="top_of_page_header">
      <div class="logo">CloudBeat</div>
      <div class="user_signin">
        
      
      <span v-if="userListStore.user" class="user-label">
        Signed in as {{ userListStore.user.displayName }}</span>
        <span v-else class="hint">Please sign in to see your playlist. </span>
        <button @click="withGoogle">{{ sign_in_out }}</button>
      </div>
    </header>

    <!-- Main content area -->
    <main class="main">
      <!-- LEFT side of page -->
      <section class="left_side">


      <!-- top left song embed window -->
       <!-- <div class="song_window"> -->
        <div class="song_window">
       <div id="youtube-player"></div>
        
        <div class="player_controls">
          <button @click="playPrevious" :disabled="!userListStore.currentPlaylistId">⏮️</button>
          <button @click="togglePlayPause">{{ isPlaying ? '⏸️' : '▶️' }}</button>
          <button @click="toggleShuffle" :disabled="!userListStore.currentPlaylistId">
            {{ userListStore.isShuffled ? '🔀' : '📋' }}
          </button>
          <button @click="playNext" :disabled="!userListStore.currentPlaylistId">⏭️</button>
        </div>
        </div>

      <!-- bottom leftuser playlist -->
        <div class="user_playlist_window">

          <div class="user_playlist_header">
            {{ userListStore.user ? userListStore.user.displayName : "Your" }} Playlists
          </div>

          <div class="user_playlist_video_list">

            <!-- Not signed in -->
            <div v-if="!userListStore.user" style="padding: 10px; color: white;">
              Please sign in to see your playlists.
            </div>

            <!-- Signed in -->
            <div v-else>

              <!-- Playlist Selector -->
              <select
                v-model="userListStore.currentPlaylistId"
                @change="onPlaylistChange"
                style="width: 100%; padding: 5px; margin-bottom: 10px;"
              >
                <option
                  v-for="pl in userListStore.playlists"
                  :key="pl.id"
                  :value="pl.id"
                >
                  {{ pl.name }}
                </option>
              </select>

              <!-- Create Playlist Button -->
              <button
                @click="createNewPlaylist"
                style="width: 100%; margin-bottom: 10px;"
              >
                + Create Playlist
              </button>

              <!-- Playlist Songs -->
              <div v-if="playlistSongsWithDetails.length > 0">
                <div
                  class="video_item"
                  v-for="song in playlistSongsWithDetails"
                  :key="song.id"
                  @click="playVideo(song)"
                  style="cursor: pointer;"
                >
                  {{ song.name }} — {{ song.author }}
                </div>
              </div>

              <!-- Empty state -->
              <div v-else style="color: white; margin-top: 10px;">
                This playlist is empty.
              </div>

            </div>
          </div>
        </div>

      </section>

      <!-- RIGHT side of page -->
      <!-- global songs list  -->
      <section class="global_playlist">  
       <div class="global_header">Global Music</div>
       <div class="video_list">
        <div class="video-item"
          v-for="video in userListStore.music"
          :key="video.id">

          <!-- Clicking title plays video -->
          <p @click="playVideo(video)" style="cursor: pointer;">
            {{ video.name }} - {{ video.author }}
          </p>

          <!-- Add to playlist button -->
          <button
            v-if="userListStore.user && userListStore.currentPlaylistId"
            @click="addToCurrentPlaylist(video)"
            style="margin-top: 5px;"
          >
        + Add to Playlist
      </button>
    </div>


        </div>

      </section>
    </main>

    <!-- footer -->
    <footer class="footer">
      © 2025 Soundbeat | Can you hear the music?
    </footer>
  </div>
</template>





<script setup lang="ts">
/* TS _______________________________________________________________________________ */ 
import { ref, computed } from "vue";


const url_for_current_video = ref<string>("https://www.youtube.com/embed/vYYW9hPj2TM");
const isPlaying = ref<boolean>(false);
let youtubePlayer: any = null;


import { onMounted, 
//onBeforeUnmount 

} from "vue";
import { userList } from "./stores/musicStore";

const userListStore = userList();
const sign_in_out = ref("Sign In with Google");

const message = ref("");

const showMessage = (txt: string) => {
  message.value = txt;
  setTimeout(() => {
    message.value = "";
  }, 5000);
};


onMounted(() => {
  userListStore.init();
  loadYouTubeAPI();
});


import { 
  getAuth,
  signInWithPopup,
  //createUserWithEmailAndPassword,
  //signInWithEmailAndPassword,
  GoogleAuthProvider, 
  signOut,
  setPersistence,
  browserLocalPersistence
 } from "firebase/auth";

 const auth = getAuth();
 setPersistence(auth, browserLocalPersistence);

 import { onAuthStateChanged } from "firebase/auth";

  onAuthStateChanged(auth, (user) => {
    if (user) {
      userListStore.setUser(user);
    }
  });


const playVideo = (video: any) => {
  url_for_current_video.value = video.url;
  userListStore.currentmusic = video;
  userListStore.setCurrentSongIndex(video);
  
  if (youtubePlayer) {
    const videoId = extractVideoId(video.url);
    if (videoId) {
      youtubePlayer.loadVideoById(videoId);
    }
  }
};

const playNext = () => {
  const nextSong = userListStore.playNext();
  if (nextSong) {
    url_for_current_video.value = nextSong.url;
    if (youtubePlayer) {
      const videoId = extractVideoId(nextSong.url);
      if (videoId) {
        youtubePlayer.loadVideoById(videoId);
      }
    }
  }
};

const playPrevious = () => {
  const prevSong = userListStore.playPrevious();
  if (prevSong) {
    url_for_current_video.value = prevSong.url;
    if (youtubePlayer) {
      const videoId = extractVideoId(prevSong.url);
      if (videoId) {
        youtubePlayer.loadVideoById(videoId);
      }
    }
  }
};

const toggleShuffle = () => {
  userListStore.toggleShuffle();
};

const extractVideoId = (url: string) => {
  const match = url.match(/(?:embed\/|v=|\/v\/|youtu\.be\/|\/embed\/)([^&\n?#]+)/);
  return match ? match[1] : null;
};

const loadYouTubeAPI = () => {
  if ((window as any).YT) {
    initializePlayer();
    return;
  }
  
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  
  (window as any).onYouTubeIframeAPIReady = initializePlayer;
};

const initializePlayer = () => {
  const videoId = extractVideoId(url_for_current_video.value);
  youtubePlayer = new (window as any).YT.Player('youtube-player', {
    height: '315',
    width: '560',
    videoId: videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
};

const onPlayerReady = (event: any) => {
  console.log('Player ready');
};

const onPlayerStateChange = (event: any) => {
  const YT = (window as any).YT;
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying.value = true;
  } else if (event.data === YT.PlayerState.PAUSED) {
    isPlaying.value = false;
  } else if (event.data === YT.PlayerState.ENDED) {
    isPlaying.value = false;
    playNext();
  }
};

const togglePlayPause = () => {
  if (!youtubePlayer) return;
  
  if (isPlaying.value) {
    youtubePlayer.pauseVideo();
  } else {
    youtubePlayer.playVideo();
  }
};

const withGoogle = async () => {
  const auth = getAuth();
  
  //Sign in the user with Google,
 if (sign_in_out.value === "Sign Out") {
    await signOut(auth);
    userListStore.setUser(null);
    sign_in_out.value = "Sign In with Google";
    showMessage("Signed out successfully");
    return;
  }
   try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    userListStore.setUser(result.user);
    sign_in_out.value = "Sign Out";
    showMessage(`Signed in as ${result.user.displayName}`);

  } catch (error) {
    console.error(error);
    showMessage("Sign in failed");
  }
};

const playlistSongsWithDetails = computed(() => {
  return userListStore.playlistSongs
    .map((plSong) =>
      userListStore.music.find((song) => song.id === plSong.songId)
    )
    .filter(Boolean);
});

const onPlaylistChange = async () => {
  if (userListStore.currentPlaylistId) {
    await userListStore.loadSongsForPlaylist(userListStore.currentPlaylistId);
  }
};

const createNewPlaylist = async () => {
  const name = prompt("Enter playlist name:");
  if (!name) return;

  await userListStore.createPlaylist(name);
  await onPlaylistChange();
};

const addToCurrentPlaylist = async (video: any) => {
  if (!userListStore.currentPlaylistId) return;

  await userListStore.addSongToPlaylist(
    userListStore.currentPlaylistId,
    video
    
  );
  

  await onPlaylistChange();
  console.log("Adding:", video, "Playlist:", userListStore.currentPlaylistId);

};






</script>


<style lang="scss">
/// CSS _______________________________________________________________________________ */ 
*{
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
}

body, html {
  margin: 0px;
  padding: 0px;
  background: linear-gradient(to bottom, #003616 0%, #4e6b59 100%);
}

/// Overall page structure */
#app{
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/// Head */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #368652;
  padding: 1rem;
}

header .logo {
  font-size: 1.4rem;
  color: #ffffff;
}

header .signin {
  font-size: 1rem;
  color: #ffffff;
}

/// Body 
main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
}

// Left  
.left_side {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
}


/// Song embed window ////
.song_window {
  background-color: rgba(255,255,255,0.15);
  border: 1px solid #ffffff;
  border-radius: 5px;
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 32rem;
  height: 16rem;
  overflow: hidden; 
}

.song_window iframe {
  width: 24rem;
  height: 16rem;
  border: none;
  flex: 1 1 100%; 
}

/// User playlist *///////////////////////////////////////////////////////
.user_playlist_window {
  background-color: rgba(255,255,255,0.10);
  border: 1px solid #ffffff;
  border-radius: 5px;
  overflow-y: auto;
}
.user_playlist_header{
  width: 100%;
  background-color: #368652;
  color: white;
  padding: 10px 15px;
  font-size: 1.2rem;
  font-weight: bold;
}
.user_playlist_video_list{
  color: white;
  padding: 10px;
}

.video-item{
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  padding: 8px 0;
}

.video_item:hover {
  background-color:  #368652;
  transform: scale(0.9);
  cursor: pointer;
}

//////////////////////////////////////////////////////////////////////

/* Global playlist */
.global_playlist {
  background-color: rgba(255,255,255,0.25);
  border: 1px solid #ffffff;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  padding: 10px;
}

.global_header{
  width: 100%;
  background-color: #368652;
  color: white;
  padding: 10px 15px;
  font-size: 1.2rem;
  font-weight: bold;
}

.video_list{
  color: white;
  padding: 10px;
}

.video_item{
  border-top: 1px solid #ececec;
  padding: 8px 0;
  border-bottom: 1px solid #ececec;
}


// Footer ////////////////////////////////////////////////////////////// 
footer {
  background-color: #368652;
  text-align: center;
  padding: 0.75rem;
  color: #ffffff;
}
</style>
