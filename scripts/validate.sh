#!/bin/bash
# @autor: Sergio Ramirez Moron
# @comment: ~
# @description: Script que valida si tenemos instalados git, node, npm, curl

# Crear un script que utilizando el comando command -s verifique si tengo instalado o no los paquetes git, node, npm, curl.
# Si alguno de dichos paquetes no esta en el sistema mostraremos mensaje de error.

#clear
echo "Verificando los requisitos previos"
echo "------------------------"
if command -v node > /dev/null 2>&1; then
NODE_VERSION=$(node --version)
	echo "Instalado Node. Versión: $NODE_VERSION"
else 
	echo "ERROR: Node"
	exit 1
fi

echo "------------------------"
if command -v git > /dev/null 2>&1; then
GIT_VERSION=$(git --version)
        echo "Instalado Git. Versión: $GIT_VERSION"
else
        echo "ERROR: Git"
	exit 1
fi

echo "------------------------"
if command -v npm > /dev/null 2>&1; then
NPM_VERSION=$(npm --version)
        echo "Instalado Node. Versión: $NPM_VERSION"
else
        echo "ERROR: Npm"
	exit 1
fi

echo "------------------------"
if command -v curl > /dev/null 2>&1; then
        echo "Instalado Curl. Versión:"
else
        echo "ERROR: Curl"
        exit 1
fi

echo "------------------------"
echo "------------------------"
echo "INSTALADO CORRECTAMENTE"
echo "------------------------"
echo "------------------------"
