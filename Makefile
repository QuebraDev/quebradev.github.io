start: stop
	docker-compose up --build -d
stop:
	docker-compose down -v
bash:
	docker exec -it quebradev-site bash
logs:
	docker logs quebradev-site -f
