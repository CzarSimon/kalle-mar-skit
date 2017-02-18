package main

import (
  "database/sql"
  "encoding/json"
  "net/http"
  "io"
  "time"
)

type Vote struct {
  Vote string
}

func (env *Env) registerVote(res http.ResponseWriter, req *http.Request) {
  decoder := json.NewDecoder(req.Body)
  var vote Vote
  if err := decoder.Decode(&vote); err != io.EOF {
    checkErr(err)
  }
  err := storeVote(vote.Vote, env.db)
  if err != nil {
    jsonStringRes(res, "Failed to store vote")
  }
  jsonStringRes(res, "Vote registerd")
}

func storeVote(vote string, db *sql.DB) error {
  date := time.Now()
  stmt, err := db.Prepare("INSERT INTO votes (vote, timestamp) VALUES ($1, $2)")
  if err != nil {
    return err
  }
  _, err = stmt.Exec(vote, date)
  if err != nil {
    return err
  }
  return nil
}
