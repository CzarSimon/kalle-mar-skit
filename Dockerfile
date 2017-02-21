FROM golang:1.8-alpine

# Install dependencies
RUN apk update && apk upgrade && apk add --no-cache git nodejs

# Create app directory
RUN mkdir -p /usr/src/application
COPY . /usr/src/application
WORKDIR /usr/src/application/app
RUN npm install
RUN npm run build

WORKDIR /usr/src/application

# Install go dependecies
RUN go get github.com/lib/pq

# Set update gopath
RUN export GOPATH=$GOPATH:$PWD

# Build server
RUN go build

EXPOSE 1337
CMD ["./application"]
