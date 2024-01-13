You can then build and run the Docker image:

$ docker build -t my-golang-app .
$ docker run -it --rm --name my-running-app my-golang-app

Rebuild container in compose service:
$ docker compose up -d --force-recreate --no-deps --build service_name