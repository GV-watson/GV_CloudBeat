import { defineStore } from "pinia";

import db from "../firebase.ts";

import {
  collection,
  getDocs,
  addDoc,
  //setDoc,
  //doc,
  //QuerySnapshot,
  //QueryDocumentSnapshot,
  onSnapshot,
  query,
  where,
  Unsubscribe,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import type { User } from "firebase/auth";

export interface musicVideo {
  id: string;
  name: string;
  author: string;
  url: string;
}

export interface Playlist {
  id: string;
  userId: string;
  name: string;
  isPublic: boolean;
  createdAt: any;
}

export interface PlaylistSong {
  id: string;
  playlistId: string;
  songId: string;
  addedAt: any;
}

export const userList = defineStore("userList", {
  state: () => ({
    
    music: [] as musicVideo[],
    currentmusic: null as musicVideo | null,

    user: null as User | null,
    snapshotUnsubscribe: null as Unsubscribe | null,

    playlists: [] as Playlist[],
    currentPlaylistId: null as string | null,
    playlistSongs: [] as PlaylistSong[],

    persist: true

  }),



  actions: {
    async init() {
      const musicCollection = collection(db, "music");
      this.snapshotUnsubscribe = onSnapshot(musicCollection, (snapshot) => {
        const videos: musicVideo[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          videos.push({
            id: data.id,
            name: data.name,
            author: data.author,
            url: data.url,
          });
        });
        this.music = videos;
        if (!this.currentmusic && videos.length > 0) {
          this.currentmusic = videos[0];
        }
      });
    },


    // set current video
    setCurrentVideo(video: musicVideo) {
      this.currentmusic = video;
    },

    // set user after login
    async setUser(user: User | null) {
      this.user = user;

      if (user) {
        // load users playlists when they sign in
        await this.loadUserPlaylists(user.uid);
      } else {
        // reset when logged out
        this.playlists = [];
        this.currentPlaylistId = null;
        this.playlistSongs = [];
      }
    },

    // loading all of a users playlists
    async loadUserPlaylists(userId: string) {
      const q = query(
        collection(db, "playlists"),
        where("userId", "==", userId),
        orderBy("createdAt", "asc")
      );

      const snapshot = await getDocs(q);

      this.playlists = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Playlist, "id">),
      }));

      // if user has playlists, auto-select the first
      if (this.playlists.length > 0 && !this.currentPlaylistId) {
        this.currentPlaylistId = this.playlists[0].id;
        await this.loadSongsForPlaylist(this.currentPlaylistId);
      }
    },

    // create new playlist
    async createPlaylist(name: string) {
      if (!this.user) return;

      const newPlaylist = {
        userId: this.user.uid,
        name,
        isPublic: false,
        createdAt: Timestamp.now(),
      };

      const docRef = await addDoc(collection(db, "playlists"), newPlaylist);

      // update local state
      this.playlists.push({
        id: docRef.id,
        ...newPlaylist,
      });

      // auto-select new playlist
      this.currentPlaylistId = docRef.id;
      this.playlistSongs = [];
    },
    
    // load songs inside playlist
    async loadSongsForPlaylist(playlistId: string) {
      const q = query(
        collection(db, "playlistSongs"),
        where("playlistId", "==", playlistId),
        orderBy("addedAt", "asc")
      );

      const snapshot = await getDocs(q);

      this.playlistSongs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<PlaylistSong, "id">),
      }));
    },

    // add songs to a playlist
    async addSongToPlaylist(playlistId: string, song: musicVideo) {
      const entry = {
        playlistId,
        songId: song.id,
        addedAt: Timestamp.now(),
      };

      await addDoc(collection(db, "playlistSongs"), entry);

      // reload the updated playlist
      await this.loadSongsForPlaylist(playlistId);
    },


  }
});
