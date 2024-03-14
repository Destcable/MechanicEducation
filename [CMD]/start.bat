@echo off

start /B cmd /c "docker-compose up --build"
start /B cmd /c "cd ./server & npm run dev"
start /B cmd /c "cd ./admin & npm run dev"
start /B cmd /c "cd ./client & npm run dev"