## Funcionamiento

Script que mezcla el orden de pares de archivos listos para la candymachine.

Por ejemplo, si en el directorio input estan estos archivos:
0.png, 0.json, 4.png, 4.json, 10.png, 10.json, 31.png, 31.json

Luego de ejecutar el script en el directorio output quedara:
0.png, 0.json, 1.png, 1.json, 2.png, 2.json, 3.png, 3.json

Notar que antes de renombrar de forma definitiva a los nfts finales, se mezclan todos sin 
tener en cuenta el orden. Es decir que el original 0.png puede terminar siendo el 2.png.

Si el directorio output no existe se crea.

## Uso

node shuffle_candies

