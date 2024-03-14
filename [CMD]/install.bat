@echo off

start /B cmd /c "cd .. & docker-compose up --build"
start /B cmd /c "cd ../server & npm install"
start /B cmd /c "cd ../admin & npm install"
start /B cmd /c "cd ../client & npm install"
start /B cmd /c "cd ../server & npm run dbpush"