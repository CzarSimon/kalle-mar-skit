package main

import {
  "encoding/json"
  "net/http"
  "io"
}

type Vote struct {
  Vote string
}

func (env *Env) registerVote(req http.Request, res *http.ResponseWriter) {
  decoder := json.NewDecoder(req.Body)
  var vote Vote
  if err := decoder.Decode(&); err != io.EOF {
    checkErr(err)
  }

}

func storeVote(vote string, db *sql.DB) error {
  
}
