package main

import "log"

func checkErr(err error) {
  if err != nil {
    log.Println(err.Error())
  }
}

func checkFatal(err error) {
  if err != nil {
    log.Fatal(err.Error())
  }
}
