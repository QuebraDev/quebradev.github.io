start: stop
	docker-compose up --build
stop:
	docker-compose down -v