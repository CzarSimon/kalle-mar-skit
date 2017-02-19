FROM golang:1.8-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# Create app directory
RUN mkdir -p /usr/src/application
WORKDIR /usr/src/application
COPY . /usr/src/application

RUN go get github.com/lib/pq
RUN export GOPATH=$GOPATH:$PWD
RUN rm kalle-mar-skit
RUN go build

EXPOSE 1337
CMD ["./application"]
