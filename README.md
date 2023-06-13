# Kubernetes and Docker

## A multi-tier architecture on Kubernetes which involves one microservices and a database.

## URLs

#### Docker Hub URL
```bash
https://hub.docker.com/repository/docker/loveleshagrawal/k8s-node-app/general
```

#### WEB API Reference
Add user
```bash
Method Type - POST
URL - http://104.155.203.246/dummy
Request Body: {
    "name": "Lovelesh Kumar"
}
Response: 200 OK
```

Get Users
```bash
Method Type - GET
URL - http://104.155.203.246/dummy
Response: [{
  "_id": "64881c7242ad4792e526ee65",
  "name": "Lovelesh Kumar"
}, {
  "_id": "64882c638cb23978125130b3",
  "name": "Komal Gupta"
}]
```