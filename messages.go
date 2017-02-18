package main

import (
  "database/sql"
  "encoding/json"
  "net/http"
)

type Message struct {
  Message, Author, Timestamp string
}

func (env *Env) getMessages(res http.ResponseWriter, req *http.Request) {
  messages, err := retriveMessages(env.db)
  if err != nil {
    jsonStringRes(res, "Failed to retrive messages")
    return
  }
  js, err := json.Marshal(messages)
  if err != nil {
    http.Error(res, err.Error(), http.StatusInternalServerError)
    return
  }
  jsonRes(res, js)
}

func retriveMessages(db *sql.DB) ([]Message, error) {
  rows, err := db.Query("SELECT message, author, timestamp FROM messages ORDER BY id DESC")
  defer rows.Close()
  if err != nil {
    return nil, err
  }
  messages := make([]Message, 0)
  var message string
  var author string
  var timestamp string
  for rows.Next() {
    err = rows.Scan(&message, &author, &timestamp)
    if err != nil {
      return nil, err
    }
    messages = append(messages, Message{message, author, timestamp})
  }
  return messages, nil
}
