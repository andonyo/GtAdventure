import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.page.html',
  styleUrls: ['./lugar.page.scss'],
})
export class LugarPage implements OnInit {

  nombre: string = localStorage.getItem("namePlace");
  descripcion: string = localStorage.getItem("descripPlace");
  estrellas: string = localStorage.getItem("starsPlace");
  imagen: string = localStorage.getItem("imgPlace");
  imagenes: string = localStorage.getItem("imgsPlace");
  lugar: string = localStorage.getItem("lugarPlace");
  puntos: string = localStorage.getItem("puntosPlace");
  link: string = localStorage.getItem("linkG");

  name: string = localStorage.getItem("name");
  imagenU: string = localStorage.getItem("imagen");
  coment: string = "";
  datos:any;

  moreInfo: string = "";
  titulo1: string = "";
  titulo2: string = "";
  titulo3: string = "";
  data1: string = "";
  data2: string = "";
  data3: string = "";

  hotelimg1: string="";
  hotelimg2: string="";
  hotelname1: string="";
  hotelname2: string="";
  hotellink1: string="";
  hotellink2: string="";

  mostrar: number = 0;
  constructor(public router: Router, public db: DatabaseService) { }

  back(){
    this.router.navigateByUrl('/tabs');
  }

  DatExtra() {
    console.log("estoy en el switch")
    switch (this.imagenes) {
      case "0":
          this.moreInfo = "La Rinconada, es un Parque Ecológico, ubicado a dos kilómetros del parque central de Antigua Guatemala, que hasta hoy no es muy conocido, pero sin embargo cuenta con una gran cantidad de actividades, y un ambiente natural muy bonido, para ofrecer a sus visitantes."
          this.titulo1 = "¿Cuales son las actividades a realizar?"
          this.data1 = "Dentro de las actividades que más se destacan en el Parque Ecológico La Rinconada, se puede mencionar el famoso Gotcha o Paintball, que se realiza en un ambiente natural y en diversos escenarios para aumentar la dificultada de los participantes.  En este lugar también se puede practicar Montain Bike o Ciclismo de Montaña y RC Pits, el cual consiste en un circuito especial, para carros de control remoto, pudiendo llevar su propio vehículo, o bien rentar uno ahí mismo."
          this.titulo2 = "Actividades para niños"
          this.data2 = "Este parque cuenta conjuegos infantiles, manualidades, una granja interactiva con animales domésticos y un bello mirador con vista a los volcanes de Agua, Fuego y Acatenango."
          this.titulo3 = "¿Cómo llegar?"
          this.data3 = "La Rinconada se encuentra en la aldea Santa Ana, número 103, y para llegar se debe de tomar el camino hacia Antigua Guatemala, y dirigirse rumbo a El Calvario  Al pasar el puente Pensativo, dos cuadras después cruzar a la Izquierda, y seguir recto hasta llegar al Parque Ecológico Club La Rinconada."
        
          this.hotelimg1 = "https://lh5.googleusercontent.com/proxy/6A82kcdCShnxSGlKs3h_U9QS6Lg_gbej2coRHiGqh28hBR3i4SuVktwdo252MzOKhO0EJijK1Pyv3hxTZm6p2xQphrtEiJSuZ1tqtMrSqMwiEMTaA_S1JUE1d02Kr4acHhrxY3AgvF509SA_H_EjM0JY0tFGWfI=w437-h240-k-no"
          this.hotellink1 = "https://goo.gl/maps/coRVtJ4PgVi4NfnA8"
          this.hotelname1 = "Hostal Casa Del Artista & Galeria"
          this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipPtasL38y1ZlWEA89W5-w8MoSH-NSXNyEMO2wfV=w426-h240-k-no"
          this.hotellink2 = "https://goo.gl/maps/p5Y178CdoW2W41sT9"
          this.hotelname2 = "Hotel Soleil La Antigua"
        
        break;
      case "1":
          this.moreInfo = "El Volcán de Pacaya se encuentra en el municipio de San Vicente Pacaya, en el departamento de Escuintla, en la parte sur de la República de Guatemala. Este volcán está catalogado como parque nacional.  Su altura ha cambiado por las constantes erupciones, se han registrado los 2,500 metros sobre el nivel del mar. Hizo erupción por primera vez hace aproximadamente 25,000 años y en 1996 se reactivó, después de casi un siglo de inactividad."
          this.titulo1 = "¿Cómo es el Volcán Pacaya?"
          this.data1 = "El volcán de Pacaya es un complejo o macizo volcánicocomplicado, en donde existen otros picos del sistema y no solamente el activo.  Cuenta con varios picos escalables y llevan los siguientes nombres: Cerro Hoja de Queso, Cerro de Agua, Cerro Chiquito y Cerro Chino."
          this.titulo2 = "¿En cuánto tiempo se sube?"
          this.data2 = "Para una persona con que hace entre poco y nada de ejercicio el tiempo de ascenso es de 1 hora con 45 minutos. Mientras que el descenso se hace en aproximadamente 1 hora."
          this.titulo3 = "¿Cómo llegar?"
          this.data3 = "Desde la Ciudad de Guatemala se toma la carretera CA-9hacia la costa sur y al llegar al km 37 se cruza a la izquierda en dirección al municipio de San Vicente Pacaya (1 hora); este recorrido es por vía asfaltada.  Al llegar a la bifurcación entre el pueblo de San Vicente Pacaya y San Francisco de Sales, en el costado derecho de la carretera se ubica la oficina de información y cobro del parque. En las faldas del volcán es necesario solicitar un guía oficial para que acompañe durante el recorrido."
        
          this.hotelimg1 = "https://lh5.googleusercontent.com/proxy/2IqcEA_4Vb-v9fSrK5HczIb8cz4aKgsgKa7iGSfjTj6e5_C8Mvue0F8NKIjKQssWfWLePNek4LzcQzrahO77CgVbJwns2g9r6sQmBKAo4qynSHBEq1CbCvGDkdigeLCe26nr6AvDGVA0DXYDzEcwGgwcmSLPdg=w437-h240-k-no"
          this.hotellink1 = "https://goo.gl/maps/KYVXJZ5TNArsN8Tb9"
          this.hotelname1 = "Hotel Manhatan"
          this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipNWgGWvYhLwE5N1Um4WiPjeJ5xHi1eTecry78d_=w426-h240-k-no"
          this.hotellink2 = "https://goo.gl/maps/FeVZX9uRZHfyb8eD6"
          this.hotelname2 = "San Gregorio Hotel & Spa"
        break;
      case "2":
          this.moreInfo = "Es una colina que se encuentra al Norte de la ciudad de Amatitlán y es el límite natural entre Villa Nueva y Amatitlán, Guatemala; colinda al Norte de la cabecera departamental. Se encuentra a una altitud de 1,420 metros sobre el nivel del mar."
          this.titulo1 = "¿Que podemos encontrar?"
          this.data1 = "La cordillera montañosa predomina especies forestales por ejemplo: pino, eucalipto y ciprés. Sus senderos son apropiados para realizar vigorizantes caminatas y otros deportes. La colina cuenta con un mirador que ofrece un panorama espectacular hacia la ciudad de amatitlán. Se encuentra el Parque Nacional “Naciones Unidas”, tomando en cuenta la Plaza Guatemala cuyas instalaciones cuentan con churrasqueras y área de camping, granja infantil, zonas múltiples de descanso, parque temático, canchas deportivas, presentaciones de sitios arqueológicos de Guatemala."
          this.titulo2 = "¿Cual es el clima?"
          this.data2 = "Presenta un clima templado (invierno seco, verano cálido), con una biozona de bosque subtropical húmedo."
          this.titulo3 = ""
          this.data3 = ""

          this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipPMvAwjBgUMHvqtUPvXLdTMp6kmjX0ILx_MhqP6=w408-h273-k-no"
          this.hotellink1 = "https://goo.gl/maps/VSh9awnEtyN6pYZYA"
          this.hotelname1 = "Kawilal Hotel"
          this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipNWogCOd6CpTC8RJ5oxLswsFT1TzPUbvHzNCz9H=w426-h240-k-no"
          this.hotellink2 = "https://goo.gl/maps/VzWTxAvUYi9HdCPP9"
          this.hotelname2 = "El Rocarena Hotel"
        break;
      case "3":
          this.moreInfo = "Ubicado en las faldas de San Juan la Laguna su particular forma de una cara acostada con la boca viendo hacia arriba, recibe la salida del sol dando un espectáculo único en el lago de Atitlàn. Esta montaña se puede apreciar desde distintos puntos del lago en especial San Pedro la Laguna, San Juan la Laguna, Santa Clara la Laguna y pueblos aledaños."
          this.titulo1 = "Trayecto"
          this.data1 = "Subirlo es toda una aventura pero su recompensa no se puede describir fácilmente ya que es una experiencia sumamente gratificante. Inicia pernoctando en uno de los pueblos aledaños ya que se debe de empezar a ascender a las tres de la mañana para poder ver el amanecer desde el mirador ubicado en la cima de la montaña. El tiempo para ascender es aproximadamente dos horas y media (según sea el paso de cada persona)."
          this.titulo2 = "¿Qué es?"
          this.data2 = "Es una reserva de San Juan Atitlàn en la cual se pueden apreciar distintas especies de animales y plantas endémicas de Guatemala. Está ubicado en dos propiedades distintas, lo ideal es ir con un guía local ya que ellos conocen el lugar. Existen senderos para ascenderlo, lo cual no es de gran dificultad. Al iniciar a ascender de madrugada se ahorra el desgaste por el calor de la luz solar, lo que ayuda a que uno llegue a la cima más rápido.  En la cima se encuentra un mirador con bancas de madera y una estructura que permite subir a un segundo nivel que tiene techo de lámina. Es el punto ideal para tener una vista de 360º del lago de Atitlàn, sin tener montañas detrás. Es solo la persona enfrentándose al aire frío dándole la bienvenida al sol que nace entre montañas desde el lago de Atitlàn hacia el cielo. Permitiendo observar un espectáculo mágico, el resplandor del sol sobre el lago."
          this.titulo3 = "¿Cómo llegar?"
          this.data3 = "Se debe tomar la carretera interamericana CA-1 en  el cruce de la intersección del kilómetro 148 en la carretera que conduce al municipio de Santa María Visitación, posteriormente se encuentran una serie de pueblos antes de llegar a San Juan La Laguna.  Los pueblos van desde Santa María Visitación, Santa Clara La Laguna, San Pablo La Laguna y finalmente en San Juan La Laguna Sololá. Esta carretera va en descenso y tiene varias curvas por lo cual se debe de tener precaución, está en buenas condiciones y asfaltada."

          this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipPwkbNzoN4vOHcuc9NzlgbvtcS8ci0sIxl5-MYj=w408-h305-k-no"
          this.hotellink1 = "https://goo.gl/maps/ftt2CMVEH5tNuhB68"
          this.hotelname1 = "La Casa del Mundo"
          this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipMzuQBG4LEvTY9BKq3klht7qqmew1eygn9NtPyo=w426-h240-k-no"
          this.hotellink2 = "https://goo.gl/maps/jz53ftGWkajuXTXm9"
          this.hotelname2 = "Lush Atitlan"
        break;
      case "4":
          this.moreInfo = "El Cerro Mirandilla o también conocido como Tres Picachos (debido a las formaciones que tiene en la cima) es un lugar místico ubicado en el camino que dirige de Ciudad Vieja a Palín, Escuintla.  De acuerdo con las historias que cuentan los residentes del lugar, el Cerro Mirandilla es una fuente de riqueza. Por esta razón, se cree que un ser sobrenatural con la forma de animal rodea el cerro para protegerlo."
          this.titulo1 = "Historia"
          this.data1 = "De acuerdo con el documento denominado Título de Alotenango, éste lugar era llamado como El 'Sacrificadero' por los ancestros del lugar, alrededor del año 1566. Este cerro era utilizado para realizar rituales con sacrificios de animales, en forma de agradecimiento hacia la madre tierra.  Luego de unos años, ese tipo de prácticas dejaron de realizarse y se comenzaron a ver apariciones extrañas, a raíz de eso, fueron creadas distintas creencias y leyendas."
          this.titulo2 = "Leyendas"
          this.data2 = "La leyenda más recurrente en el Cerro Mirandilla relata la aparición de una niña con una belleza incomparable, pero con cuerpo de serpiente como consecuencia de un trato entre su padre y el diablo."
          this.titulo3 = "Principal atractivo"
          this.data3 = "El principal atractivo del Cerro Mirandilla es sin duda la curiosa forma que tiene en la cima. Algunas versiones acerca de esto lo asemejan a la forma de un gorila sentado o del rostro de una mujer mulata.  De acuerdo con una investigación realizada en el año 2005, en el Cerro Mirandilla fueron encontradas evidencias que prueban que no es una elevación natural, sino una construcción prehispánica, debido a que en ella fueron localizadas pinturas rupestres, posiblemente de la civilización olmeca."

          this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipPF1n40BwhbyKLjNrSfo731JRQBe7KvSZ2lZgPN=w426-h240-k-no"
          this.hotellink1 = "https://goo.gl/maps/VJahDxXSMDXZ6tdR8"
          this.hotelname1 = "Hacienda El Colorado"
          this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipPq9BPAindJz0vR3dD9zWel7CQghDcWfCSNr-Oo=w408-h306-k-no"
          this.hotellink2 = "https://goo.gl/maps/BJxDFKTpU5aYPEcP9"
          this.hotelname2 = "Cañadas de Guatelinda"
        break;
      case "5":
          this.moreInfo = "El volcán de Fuego es a lo que se le conoce como un estratovolcán situado entre los departamentos de Sacatepéquez, Escuintla y chimaltenango, al centro-sur de Guatemala."
          this.titulo1 = "Historia"
          this.data1 = "El volcán de Fuego es uno de los más impresionantes de Centroamérica. Sus erupciones son violentas, y probablemente es el volcán más activo desde la Conquista, a tal extremo que se afirma que el conquistador Pedro de Alvarado pudo verlo en erupción en el año de 1524, según el mismo lo reportó en epístolas. Su nombre indígena es Chi'gag, que se traduciría del idioma cakchiquel al español como donde está el fuego."
          this.titulo2 = "Particularidades"
          this.data2 = "El volcán de Fuego tiene una altura de 3763 msnm. Prácticamente se encuentra descubierto de vegetación más arriba de los 1300 metros, donde básicamente solo puede encontrarse lava. El volcán de Fuego tiene la forma de un cono que se alarga considerablemente hacia el sur, formando el pie de monte hacia la costa sur. Debajo de él se constituye una meseta oro-gráfica de múltiples características geológicas. Forma una triada de colosos con los volcanes de Agua y Acatenango, próximos a su base; de hecho, comparte el mismo bloque volcánico con el volcán Acatenango, y originalmente ambos eran referidos por los colonos españoles como «los volcanes de Fuego».Del volcán nacen varias fuentes hídricas, que se convierten en ríos descendientes hacia la costa sur, en un área de riqueza mineral, óptima para la agricultura."
          this.titulo3 = ""
          this.data3 = ""

          this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipPtasL38y1ZlWEA89W5-w8MoSH-NSXNyEMO2wfV=w426-h240-k-no"
          this.hotellink1 = "https://goo.gl/maps/ueRdkUUfXDB6FDeY7"
          this.hotelname1 = "Hotel Soleil La Antigua"
          this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipPgM5hfUJGPpgvNJ15EzjF-adny1B31wNLLm6mv=w408-h306-k-no"
          this.hotellink2 = "https://goo.gl/maps/iiJa3iFUC6jLKZzs7"
          this.hotelname2 = "Volcano Eco Hostel"
        break;
      case "6":
          this.moreInfo = "El volcán Acatenango forma parte de la cadena volcánica que existe en la República de Guatemala. Este volcán se encuentra extinto, es decir, que ya no presenta actividad que involucre erupciones de lava. Cuenta con una alturade 3976 metros sobre el nivel del mar.  La vista hacia el volcán de Fuego es espectacular, ya que es el mejor escenario."
          this.titulo1 = "¿Cómo es el Volcán Acatenango?"
          this.data1 = "Principalmente, este coloso tiene dos picos o cumbres y es el hermano gemelo del volcán de Fuego. La cima principal —que queda al sur— es llamado Pico Mayor o Central a 3976 msnm. Mientras que el pico norte tiene el nombre de Yepocapa, Tres Hermanas o Tres Marías y se encuentra a 3800 msnm."
          this.titulo2 = "¿Dónde queda el volcán?"
          this.data2 = "El Volcán Acatenango se encuentra ubicado entre los departamentos de Chimaltenango y Sacatepéquez.  Muy cerca de los municipios de Acatenango, Antigua Guatemala y San Miguel Dueñas."
          this.titulo3 = "¿Qué debo llevar?"
          this.data3 = "Para realizar el viaje a este volcán es recomendable abrigarse bien, ya que en la cima por lo general hay un intenso frío y viento que sopla fuerte. Si la visita durará una noche se recomienda llevar un impermeable ligero para hacer cambio de mudada."

          this.hotelimg1 = "https://lh6.googleusercontent.com/proxy/GYBPsaxNbjX_HDKqIfPoFkj-JeYsxIc3FqmgQ6552RQ6fd0ufBaVlYW3zRlo8vjY_xOYjb21YAlj_GmrPwbOFKuk_LPWvL09wu25zKFaasd9LMf8mk-ahFH7BIRSg1q5zpXedPsyHLD5-02t8wOMRtn4GoUwcpI=w537-h240-k-no"
          this.hotellink1 = "https://goo.gl/maps/VzfcBW57779hYVoQ8"
          this.hotelname1 = "Casa Aprode"
          this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipPgM5hfUJGPpgvNJ15EzjF-adny1B31wNLLm6mv=w408-h306-k-no"
          this.hotellink2 = "https://goo.gl/maps/iiJa3iFUC6jLKZzs7"
          this.hotelname2 = "Volcano Eco Hostel"
        break;
      case "7":
          this.moreInfo = "El Parque Natural Ixpanpajul, es una reserva natural con una extensión de 9 kilómetros cuadrados que equivalen a 450 hectáreas, con más de 200 especies de árboles, más de 150 especies de aves y alrededor de 40 especies de mamíferos."
          this.titulo1 = "¿Donde se encuentra?"
          this.data1 = "Este parque se encuentra a 468 kilómetros Vía Río Dulce a Flores, Petén, Guatemala a 10 kilómetros del Aeropuerto, y es un esplendoroso bosque, refugio natural de una amplia variedad de animales, plantas y árboles que han decidido quedarse en este lugar, cuna de la Cultura Maya.  Esta Reserva Natural tiene once años de operación y es considerada como el mejor destino turístico, exclusivo para los amantes de la naturaleza que desean realizar diferentes actividades de aventura llenas de aire puro, adrenalina y diversión, todo esto en conjunto en el propio corazón del Mundo Maya Petén."
          this.titulo2 = "Principal atracción"
          this.data2 = "La principal atracción en el Parque Natural Ixpanpajul es una serie de seis puentes colgantes y serpenteantes senderos repletos de exuberante vegetación, que le da una vista aérea de toucan's de la selva.  Durante el recorrido, se tiene oportunidad de conocer los diferentes estratos del bosque tropical, y al llegar a la cima se puede observar el Lago Petén Itzá.  El parque cuenta también con un Tarzán Canopy donde podrá volar entre los árboles, a través de plataformas y cables, iluminación puntual (la noche de la vida silvestra viendo), paseos a caballo, ciclismo de montaña, paseos en tractor y alquiler de vehículos todo terreno."
          this.titulo3 = "¿Por que elegirlo?"
          this.data3 = "El Parque Natural Ixpanpajul tiene una extensión de 9 Km2 o sea 10 caballerías que equivale a 640 manzanas igual a 450 hectáreas, que por su belleza, sus actividades y por lo próximo al área central de Flores Petén, 5 minutos del aeropuerto, lo hace un lugar especial, siendo una nueva opción para el turismo ecológico y de aventura. "

          this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipP6uWKqMBJI0NUw1D_RLKVnjj1yCBjZn2AaeouC=w408-h306-k-no"
          this.hotellink1 = "https://goo.gl/maps/YdB2bLcA4kmx6TGV7"
          this.hotelname1 = "Hotel y Restaurante Casa Amelia"
          this.hotelimg2 = "https://lh4.googleusercontent.com/proxy/_zaRZVDP9GdpyQbpsznkJ5LpK9r3PUea_LyxaUIJs0MnzhULQPD8wJtkNNgw_5_0hTkbPOTiXU94-4FKVPtFXc8lp-Truv36iL5MabbxdDtg0taTBZU7iM1We5ZgE9wk8lQNwVmsVCayYRO_IC6AaDTAuo2H2Jg=w408-h306-k-no"
          this.hotellink2 = "https://goo.gl/maps/NKjjqqqLj89pJNL96"
          this.hotelname2 = "Hotel Casona de la Isla"
        break;
      case "8":
          this.moreInfo = "Tal vez este sitio turístico no es muy conocido, pero las cuevas de Bombil Pek y Jul Iq en Alta Verapaz son una atracción muy hermosa en Guatemala.  Las cuevas de Bombil Pek y Jul Iq se encuentran ubicadas a 2 kilómetros aproximadamente de la cabecera municipal de Chisec, Alta Verapaz. Son un hermoso destino natural que necesitas conocer."
          this.titulo1 = "Historia de las cuevas"
          this.data1 = "El sitio fue descubierto en 1972 por el francés Daniel Draws. Pero fue hasta el 2002 cuando las cuevas fueron abiertas al público."
          this.titulo2 = "Origen del nombre"
          this.data2 = "Se cree que la palabra Bombil significa en q’eqchí’ Cueva pintada y Julik, Cueva de aire."
          this.titulo3 = "Descripción"
          this.data3 = "Para llegar, es necesario realizar una caminata de 40 minutos aproximadamente por un sendero verde. De hecho, el recorrido en el interior de cada una de las cuevas dura un aproximado de media hora.  En las cuevas Jul Iq existen pintadas imágenes de un jaguar y dos monos. Dichas pinturas pertenecen a la época clásica maya —que data del 200 al 800 a.C.—. El interior está ventilado por aire frío, además de caracterizarse por su ambiente húmedo."

          this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipP830LQEr8Bj-bJFu8RkulfnWjZJrd6KOWM30aP=w426-h240-k-no"
          this.hotellink1 = "https://goo.gl/maps/WtjEGXZ4P5maSrjSA"
          this.hotelname1 = "Hotel Estancia De La Virgen"
          this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipPafTKMHOjp40PcuSOeq9VwF33V-vZqGh-7SbEx=w426-h240-k-no"
          this.hotellink2 = "https://goo.gl/maps/iRx1vYUQtwSSBZYf7"
          this.hotelname2 = "Hotel y Restaurante Casa Vieja"
        break;
      case "9":
          this.moreInfo = "Caxlampon es un lugar ubicado en el departamento de Izabal al final de el río El Sauce, cerca de El Boquerón, específicamente en el municipio de El Estor, localidad que atraer a las personas aventureras por lo increíble que se torna el desenvolverse en medio de las cuevas que tienen un tamaño aproximado de entre dos y tres metros de altura, variables en todo el recorrido, así como una anchura promedio de 9 metros y no olvidemos mencionar que son 4 kilometros de ruta los que componen la cueva."
          this.titulo1 = "Que se encuentra en el trayecto"
          this.data1 = "Dentro de esta cueva se comienza un trayecto explorador a pie, pero hay partes de la misma en las que se tiene que recurrir al nado ya que únicamente se pueden pasar por el agua, incluso un pequeño lugar en el transcurso del recorrido, en donde hay una cascada de aproximadamente 6 metros de altura y se puede hacer rapel para descender.  En medio del recorrido después de superar el espacio de agua en donde hay aproximadamente 21 metros de río arriba que se tienen que recorrer por la orilla y con las precauciones debidas, se llega a un lugar que es conocido como “El Bar”, al cual se llega descendiendo por una grieta que hay en el camino y es una pequeña caverna completamente obscura a la que no se puede ingresar ya que no se puede salir de regreso por las dimensiones de la misma."
          this.titulo2 = "¿Donde finaliza?"
          this.data2 = "Lo interesante del recorrido que se puede hacer por esta cueva es que aunque requiere de un largo trayecto en las profundidades de la Cueva Caxlampon, el final del mismo es Finca El Paraíso, claro tras una buena distancia de ascenso."
          this.titulo3 = "Tomar en cuenta que:"
          this.data3 = "Para que se realice este recorrido por las rutas de la Cueva Caxlampon es necesario contar con guías que conozcan el lugar y además se recomienda un mínimo de dos personas para aventurarse en esta exploración de las profundidades, sin olvidar claro la importancia del equipo necesario como lo son cuerdas, arnés, linternas (por si se decide tomar esta ruta por las noches), entre otros accesorios necesarios."

          this.hotelimg1 = "https://lh5.googleusercontent.com/p/AF1QipMnuFwWBlerbhPTqcFAMPcZdQaxqbREaV0V3h_g=w408-h306-k-no"
          this.hotellink1 = "https://goo.gl/maps/3GscAjgex1u31wcp6"
          this.hotelname1 = "Hotel Restaurante Café-Bar Calle Real"
          this.hotelimg2 = "https://lh5.googleusercontent.com/p/AF1QipMjj03f6AvynaBhlvsUGWNvUdEVG6zhYwUA6o2f=w426-h240-k-no"
          this.hotellink2 = "https://goo.gl/maps/m4FRJrQ2ZonvzenU8"
          this.hotelname2 = "Hotel Yair El Estor"
        break;
      default:
          this.moreInfo = "No existen datos para este destino."
        break;
    }
  }

  hideShow(valor){

    switch (valor) {
      case 1:
        this.mostrar = valor;
        break;
      case 2:
          this.mostrar = valor;
        break;
      case 3:
          this.mostrar = valor;
        break;
    
      default:
        break;
    }
    this.DatExtra();
    const moda = document.getElementById('modalL')
    const blu = document.getElementById('blurL')
    const co = document.getElementById('cerrar-cc')
    moda.classList.toggle('mostrar');
    blu.classList.toggle('blur');
    co.classList.toggle('most-cc');
  }

  mostrarComentario(){
    this.Getcoment()
    const m = document.getElementById('comentar')
    const bl = document.getElementById('blurL')
    const con = document.getElementById('cerrar-c')
    m.classList.toggle('mostrar');
    bl.classList.toggle('blur');
    con.classList.toggle('most-cc');
  }

  Getcoment(){
    this.db.GetComent(this.imagenes).then((data: any) => {
      console.log(data);
      this.datos = data;
    }, (error) => {
      console.log(error);
    })
  }

  comentar(){
    if (this.coment != "") {
      let comen = this.db.CreateComent(this.name, this.coment, this.imagenU, this.imagenes)
      this.Getcoment()
      this.coment = "";
    }
  }

  ionViewWillEnter(){
    console.log("estoy en el enter")
    this.Getcoment()
    this.DatExtra();
  }

  ngOnInit() {
  }

}
