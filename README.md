# MockServer and MockClient

## Install MockServer

Install MockServer using brew

```sh
brew install mockserver
```

Execute MockServer

```sh
mockserver -logLevel DEBUG -serverPort 1080 -proxyPort 1090
```

Open the UI MockServer
[MockServer URL](http://localhost:1080/mockserver/dashboard)

## Install MockClient

Install dependencies
```sh
npm install
```

Execute MockClient
```sh
node index.js
```

> Notes

In case that you require modify the request, you could open the index.js file and add the content that you need.
