#!/bin/bash

echo "Iniciando AcervoTech..."

echo "Iniciando back-end..."
cd api
mvn spring-boot:run &

cd ../cliente

echo "Instalando dependencias do front-end..."
npm install

echo "Iniciando front-end..."
npm run dev