import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  constructor(public router: Router) { }

  pr(valor){

    switch (valor) {
      case 1:
        localStorage.setItem("namePlace", "Montaña el filon");
        localStorage.setItem("descripPlace", "El ambiente y el reto personal que te pone cada ruta es tan difícil como uno quiera; lo importante es que siempre puedes vencerte a ti mismo. El Peñón de Amatitlán cuenta con más de 50 rutas de diversos niveles. Podrás aprender desde cero en las rutas junior o campo escuela.");   
        localStorage.setItem("starsPlace", "4.1");
        localStorage.setItem("lugarPlace", "Amatitlan, Guatemala");
        localStorage.setItem("puntosPlace", "200");  
        localStorage.setItem("imgPlace", "filon"); 
        localStorage.setItem("imgsPlace", "2");
        localStorage.setItem("linkG", "https://goo.gl/maps/Z6C5MroauumKBGnaA"); 
        break;
      case 2:
        localStorage.setItem("namePlace", "Mirador rostro maya");
        localStorage.setItem("descripPlace", "Este hermoso mirador se encuentra en San Juan La Laguna y es uno de los más hermosos que existen en el país. Además del espectacular panorama que podrás observar desde este punto del lago de Atitlán, también se puede ver un rostro que parece una persona que estuviera acostada. Eso es algo muy interesante que llama la atención de cientos de turistas.");   
        localStorage.setItem("starsPlace", "4.5");
        localStorage.setItem("lugarPlace", "Panajachel, Solola");
        localStorage.setItem("puntosPlace", "300");  
        localStorage.setItem("imgPlace", "rostrom"); 
        localStorage.setItem("imgsPlace", "3"); 
        localStorage.setItem("linkG", "https://goo.gl/maps/acb7JBThM1jgKXFq5");
        break;
      case 3:
        localStorage.setItem("namePlace", "Cerro mirandilla");
        localStorage.setItem("descripPlace", "En la carretera o camino que dirige de Ciudad Vieja a Palín, Escuintla, se encuentra el cerro Mirandilla. Aunque los habitantes de los alrededores también lo llaman Tres Picachos debido a las formaciones que tiene en la cima.");   
        localStorage.setItem("starsPlace", "4.0");
        localStorage.setItem("lugarPlace", "Palin, Escuintla");
        localStorage.setItem("puntosPlace", "250");  
        localStorage.setItem("imgPlace", "mirandilla"); 
        localStorage.setItem("imgsPlace", "4"); 
        localStorage.setItem("linkG", "https://goo.gl/maps/U6VtsBKRESu6fobY7");
      break;
      case 4:
        localStorage.setItem("namePlace", "Volcan de fuego");
        localStorage.setItem("descripPlace", "El volcán de Fuego es a lo que se le conoce como un estratovolcán situado entre los departamentos de Sacatepéquez, Escuintla y Chimaltenango, al centro-sur de Guatemala. El volcán de Fuego es uno de los más impresionantes de Centroamérica.");   
        localStorage.setItem("starsPlace", "4.7");
        localStorage.setItem("lugarPlace", "Sacatepéquez, Escuintla y Chimaltenango");
        localStorage.setItem("puntosPlace", "351");  
        localStorage.setItem("imgPlace", "fuego"); 
        localStorage.setItem("imgsPlace", "5"); 
        localStorage.setItem("linkG", "https://goo.gl/maps/8noDiJvKnnd75fs18");
      break;
      case 5:
        localStorage.setItem("namePlace", "Volcan de acatenango");
        localStorage.setItem("descripPlace", "El Acatenango es un estratovolcan de Guatemala, en cercanías de la ciudad de Antigua en el municipio de Acatenango. El volcán tiene dos picos, el Pico Mayor y Yepocapa, que también es conocido como Tres Hermanas.");   
        localStorage.setItem("starsPlace", "4.7");
        localStorage.setItem("lugarPlace", "Acatenango, Chimaltenango");
        localStorage.setItem("puntosPlace", "416");  
        localStorage.setItem("imgPlace", "acate"); 
        localStorage.setItem("imgsPlace", "6"); 
        localStorage.setItem("linkG", "https://goo.gl/maps/tGc7ZFjHgANWwcJTA");
      break;
      case 6:
        localStorage.setItem("namePlace", "Volcan de pacaya");
        localStorage.setItem("descripPlace", "El Pacaya es un volcán activo ubicado en el municipio de San Vicente Pacaya en el departamento de Escuintla, Guatemala. Se desconoce hace cuántos miles de años hizo erupción por primera vez, pero se han registrado al menos 23 erupciones desde la época de colonización española de América en Guatemala.");   
        localStorage.setItem("starsPlace", "4.5");
        localStorage.setItem("lugarPlace", "San vicente, Escuintla");
        localStorage.setItem("puntosPlace", "256");  
        localStorage.setItem("imgPlace", "pacaya"); 
        localStorage.setItem("imgsPlace", "1"); 
        localStorage.setItem("linkG", "https://goo.gl/maps/jQHTJTGStCXNF4kX9");
      break;
      case 7:
        localStorage.setItem("namePlace", "Puente de Ixpanpajul");
        localStorage.setItem("descripPlace", "En el Parque Ecológico Ixpanpajul, ubicado en Petén, vas a encontrar una aventura ideal para los amantes de las alturas. Se trata de un puente colgante dentro de un esplendoroso bosque. Al atravesarlo se observa una vista única de este departamento de Guatemala. Ideal para salir de la rutina y tomar fotografías extremas.");   
        localStorage.setItem("starsPlace", "4.2");
        localStorage.setItem("lugarPlace", "Peten, Guatemala");
        localStorage.setItem("puntosPlace", "163");  
        localStorage.setItem("imgPlace", "puente"); 
        localStorage.setItem("imgsPlace", "7"); 
        localStorage.setItem("linkG", "https://goo.gl/maps/wLtoziHuBuXDanN18");
      break;
      case 8:
        localStorage.setItem("namePlace", "Cuevas de bombil pek");
        localStorage.setItem("descripPlace", "Las impresionantes Cuevas de Bombil Pek y Jul'iq son administradas por la comunidad de El Porvenir, quienes ponen a tu disposición todo el equipo para poder vivir esta aventura extrema. La Cueva de Jul'iq se puede recorrer caminando y observar increíbles formaciones geológicas, mientras que en la visita a Bombil Pek se debe realizar un descenso aproximado de 80 metros en rápel. El sitio fue descubierto en 1972 por el francés Daniel Draws. Pero fue hasta el 2002 cuando las cuevas fueron abiertas al público.");   
        localStorage.setItem("starsPlace", "4.6");
        localStorage.setItem("lugarPlace", "Senahu, Alta Verapaz");
        localStorage.setItem("puntosPlace", "260");  
        localStorage.setItem("imgPlace", "bombil"); 
        localStorage.setItem("imgsPlace", "8"); 
        localStorage.setItem("linkG", "https://goo.gl/maps/B1o8mFC7B3wmccpz9");
      break;
      case 9:
        localStorage.setItem("namePlace", "Cuevas de caxlampon");
        localStorage.setItem("descripPlace", "Cueva o Grutas de Caxlampon, se encuentran localizadas en el Boquerón, El Estor, Izabal al final del Río El Sauce, y para llegar hasta ellas se necesitan más de dos horas, las cuales se caminan entre vegetación y selva.");   
        localStorage.setItem("starsPlace", "4.5");
        localStorage.setItem("lugarPlace", "El boquerón, Izabal");
        localStorage.setItem("puntosPlace", "375");  
        localStorage.setItem("imgPlace", "caxlampon"); 
        localStorage.setItem("imgsPlace", "9"); 
        localStorage.setItem("linkG", "https://goo.gl/maps/p4kpaVLPK487mLTo8");
      break;
      case 0:
        localStorage.setItem("namePlace", "Catarata la rinconada");
        localStorage.setItem("descripPlace", "En el área de San Miguel Dueñas puedes encontrar una linda cascada que se llama la Rinconada, fue nombrada así por el lugar en donde se encuentra ubicada. Este es un lugar ideal para hacer rapel, ya que tiene una caída de agua de 40 metros de altura, en donde tienes que caminar aproximadamente 300 metros. A tan solo 45 minutos de la Ciudad de Guatemala.");   
        localStorage.setItem("starsPlace", "4.3");
        localStorage.setItem("lugarPlace", "San Miguel Dueñas, Sacatepéquez");
        localStorage.setItem("puntosPlace", "201");  
        localStorage.setItem("imgPlace", "rinconada"); 
        localStorage.setItem("imgsPlace", "0"); 
        localStorage.setItem("linkG", "https://goo.gl/maps/DiZASPzKxUtXjKHT6");
      break;
      default:
        break;
    }

    this.router.navigateByUrl('/lugar');

  }

  ngOnInit() {
  }

}
