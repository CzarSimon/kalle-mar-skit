package main

import (
    "database/sql"
    "fmt"
    _ "github.com/lib/pq"
)

func connectDB(conf DBConfig) *sql.DB {
    connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", conf.host, conf.port, conf.user, conf.pwd, conf.db)
    db, err := sql.Open("postgres", connStr)
    checkFatal(err)
    err = db.Ping()
    checkFatal(err)
    return db
}
