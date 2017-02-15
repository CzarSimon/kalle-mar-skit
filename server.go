package main

import (
   "fmt"
   "log"
   "net/http"
)

func registerVote(req http.Request, res *http.ResponseWriter) {
  msg := "Vote register"
  res.Header().Set("Content-Type", "text/plain")
  res.Header().Set("Access-Control-Allow-Origin", "*")
  res.Write([]byte(fmt.Sprintf("%x", msg)))
}

func main() {
   http.Handle("/", http.FileServer(http.Dir("./app/build/")))
   http.HandleFunc("/vote", registerVote)
   log.Println("Starting server on port 1337")
   err := http.ListenAndServe(":1337", nil)
   if err != nil {
      log.Fatal(err.Error())
   }
}
