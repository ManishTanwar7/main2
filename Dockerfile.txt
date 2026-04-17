FROM ubuntu:22.04

RUN apt-get update && apt-get install -y g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN g++ project.cpp -o project -std=c++17 -pthread

EXPOSE 10000

CMD ["./project"]
