package main

import (
  "database/sql"
  "log"
  "net/http"
)

type Env struct {
  db *sql.DB
}

func main() {
  config := getConfig()
  env := &Env{
    db: connectDB(config.db),
  }

  http.Handle("/", http.FileServer(http.Dir(config.server.staticFolder)))
  http.HandleFunc("/vote", env.registerVote)
  http.HandleFunc("/vote-count", env.getVoteCount)
  http.HandleFunc("/post-message", env.postMessage)
  http.HandleFunc("/messages", env.getMessages)

  log.Println("Starting server on port " + config.server.port)
  err := http.ListenAndServe(":" + config.server.port, nil)
  checkErr(err)
}
