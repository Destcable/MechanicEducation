@echo off

start /B cmd /c "docker-compose up --build"
@REM start /B cmd /c "cd ../server & npm run dbpush"
@REM start /B cmd /c "cd ../server & npm run dev"
start /B cmd /c "cd ../admin & npm run dev"
start /B cmd /c "cd ../client & npm run dev"
start /B cmd /c "cd ../services/auth-service & npm run dev"