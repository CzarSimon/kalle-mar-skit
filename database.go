package main

import (
    "database/sql"
    "fmt"
    "log"
    _ "github.com/lib/pq"
)

func connectDB(conf DBConfig) *sql.DB {
    connStr := fmt.Sprintf("host=%s user=%s password=%s dbname=%s sslmode=disable", conf.host, conf.user, conf.pwd, conf.db)
    db, err := sql.Open("postgres", connStr)
    if err != nil {
        log.Fatal(err)
    }
    err = db.Ping()
    if err != nil {
        log.Fatal(err)
    }
    return db
}
