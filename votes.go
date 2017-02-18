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



func (env *Env) getVoteCount(res http.ResponseWriter, req *http.Request) {
  voteCount, err := retriveVoteCount(env.db)
  if err != nil {
    http.Error(res, err.Error(), http.StatusInternalServerError)
    return
  }
  js, err := json.Marshal(voteCount)
  if err != nil {
    http.Error(res, err.Error(), http.StatusInternalServerError)
    return
  }
  jsonRes(res, js)
}


type VoteCount struct {
  Vote string
  Count int64
}

func retriveVoteCount(db *sql.DB) ([]VoteCount, error) {
  rows, err := db.Query("SELECT vote, COUNT(*) FROM votes WHERE vote='YES' or vote='NO' GROUP BY vote")
  defer rows.Close()
  if err != nil {
    return nil, err
  }
  results := make([]VoteCount, 0)
  var vote string
  var count int64
  for rows.Next() {
    err = rows.Scan(&vote, &count)
    if err != nil {
      return nil, err
    }
    results = append(results, VoteCount{vote, count})
  }
  return results, nil
}
