/*
THE WEB IS A COOL PLACE. STORAGE IS AWESOME. LOCAL STORAGE IS BRILLIANT!
HERE YOU CAN FIND AN ABSTRACTION TO THE BROWSER'S localStorage YOU CAN USE
IN A VueJS APP WITH Pinia STORE TO EASILY AND CLEARLY INTERACE WITH THE
BROWSER'S localStorage.
*/

import { defineStore } from 'pinia'

export const useLocalStorageStore = defineStore('localStorage', () => {
  // DEFINE A FUNCTION TO HANDLE SETTING AND RETRIEVING DATA FROM LOCALSTORAGE
  function getLocalStorage(key) {
    const data = localStorage.getItem(key)
    try {
      return JSON.parse(data) // ATTEMPT TO PARSE JSON DATA
    } catch (error) {
      return data // RETURN RAW DATA IF PARSING FAILS
    }
  }

  function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value)) // STRINGIFY DATA BEFORE STORING
  }

  return {
    // GETTERS
    getItem(key) {
      const value = getLocalStorage(key)
      return ![undefined].includes(value) ? value : null // RETURN NULL IF KEY NOT FOUND
    },

    // ACTIONS
    setItem(key, value) {
      setLocalStorage(key, value)
    },

    removeItem(key) {
      localStorage.removeItem(key)
    },
    
    clear() {
      localStorage.clear()
    },
  }
})
