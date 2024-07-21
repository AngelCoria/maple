
var matrizImagen = new Array();
            matrizImagen[0] = "./img/maple1.jpg";
            matrizImagen[1] = "./img/maple2.jpg";
            matrizImagen[2] = "./img/maple3.jpg";
           

            var indice = 0;

            function mas(){
                indice += 1;
                if (indice > 2){
                    indice = 0;
                }
                document.images["numero"].src=matrizImagen[indice];
            }

            function menos(){
                indice -= 1;
                if (indice <= 0){
                    indice = 2;
                }
                document.images["numero"].src=matrizImagen[indice];
            }
