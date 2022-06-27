# Microservices Product Ecossistem
Two services, the first is responsible for the crud of products and the second for the creation of orders.

## Technologies
- Typescript with Express.
- Prisma with ORM.
- Test of integration with Jest and supertest.

## Starting
To run the project, you will need to install the following programs

- [Docker](https://docs.docker.com/get-docker/)

## Development

Clone the repository for your machine.

```shell
git clone https://github.com/gabrielmussolini984/microservices-example.git
```

### Construct

To run the project with the docker-compose:

First you need to give permission for the entrypoints.sh files

Ordered Service
```shell
sudo chmod +x ordered/.docker/entrypoint.sh
```
```shell
sudo chmod +x ordered/.docker/wait-for-it.sh
```
Registration Product Service
```shell
sudo chmod +x registration-product/.docker/entrypoint.sh
```
```shell
sudo chmod +x registration-product/.docker/wait-for-it.sh
```
```shell
docker-compose up
```

The command initialize all services and database necessary for use.

### Using the services
- Ordered Service
[Documentation] http://localhost:8080/docs
- Registration Product Service
[Documentation] http://localhost:8080/docs

### Run integration tests
- Ordered Service
- Run `cd ordered && npm test`
- Registration Product Service
- Run `cd registration-product && npm test`

#### Thanks!