/**
 * CLÍNICA CREART BY GABRIELA ARELLANO — DEMO APPLICATION & CONCIERGE LOGIC
 * Includes interactive treatments filter, booking wizard, and Valeria AI concierge.
 */

// Treatments Data
const TREATMENTS_DATA = [
  {
    "id": "depilacion-mujer-depilaci-n-de-zona-peri",
    "category": "depilacion",
    "name": "Mujer - Depilación de zona perianal con cera",
    "duration": "15 min",
    "price": "15€",
    "price_num": 15.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "Existen diferentes estilos de depilación de la zona de la ingle, pero la depilación Hollywood es la más usada. Diseñada para retirar absolutamente todo el vello de la parte trasera y delantera de la zona de la ingle, la depilación Hollywood brinda un resultado suave y prolijo que dura alrededor de un mes."
  },
  {
    "id": "depilacion-mujer-depilaci-n-de-ingles-no",
    "category": "depilacion",
    "name": "Mujer - Depilación de ingles normales con cera",
    "duration": "15 min",
    "price": "20€",
    "price_num": 20.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "¿Quieres lucir tus ingles libres de vello? Si decides llevar rasurada esta zona íntima, la depilación con cera es lo que estabas buscando. Y si es la primera vez que vas a depilarte las ingles y tienes dudas, ¡que no cunda el pánico! Estos profesionales te las resolverán encantados. Siéntate, ponte cómoda y déjate hacer."
  },
  {
    "id": "depilacion-mujer-depilaci-n-de-ingles-co",
    "category": "depilacion",
    "name": "Mujer - Depilación de ingles completas con cera",
    "duration": "25 min",
    "price": "25€",
    "price_num": 25.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "¿Quieres lucir tus ingles libres de vello? Si decides llevar rasurada esta zona íntima, la depilación con cera es lo que estabas buscando. Y si es la primera vez que vas a depilarte las ingles y tienes dudas, ¡que no cunda el pánico! Estos profesionales te las resolverán encantados. ¡Ponle remedio ahora!"
  },
  {
    "id": "depilacion-mujer-depilaci-n-de-piernas-c",
    "category": "depilacion",
    "name": "Mujer - Depilación de piernas con cera",
    "duration": "25-45 min",
    "price": "15€",
    "price_num": 15.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "Si está cansada de afeitarse las piernas regularmente y lucha contra el vello incipiente, la depilación con cera es una magnífica alternativa para unas piernas suaves y sedosas. Esta técnica ampliamente probada, que arranca el pelo de raíz directamente, es ideal para olvidarse de las piernas con vello para aquellas mujeres que no están dispuestas a tomar medidas más drásticas."
  },
  {
    "id": "depilacion-mujer-depilaci-n-de-muslos-co",
    "category": "depilacion",
    "name": "Mujer - Depilación de muslos con cera",
    "duration": "25 min",
    "price": "22€",
    "price_num": 22.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "¿Quieres despedirte de esos pelillos que tanto te molestan? Si quieres que la parte superior de las piernas luzca también suave y sin vello, opta por esta depilación de muslos con cera. ¡Luce tus piernas!"
  },
  {
    "id": "depilacion-mujer-depilaci-n-de-axilas-co",
    "category": "depilacion",
    "name": "Mujer - Depilación de axilas con cera",
    "duration": "15 min",
    "price": "10€",
    "price_num": 10.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "¿Quieres sacar partido a todo tu armario sin preocuparte por el vello? Las axilas suelen ser una de las zonas de nuestro cuerpo con más vello: si eso te molesta, no dudes en hacerte esta depilación con cera. ¡Ponle remedio ya!"
  },
  {
    "id": "depilacion-mujer-depilaci-n-de-brazos-co",
    "category": "depilacion",
    "name": "Mujer - Depilación de brazos con cera",
    "duration": "25 min",
    "price": "15€",
    "price_num": 15.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "¿Te has olvidado de tus brazos? De vez en cuando necesitan también su turno de depilación. Con este servicio, un equipo profesional se encargará de que te olvides del vello por un tiempo con una depilación con cera."
  },
  {
    "id": "depilacion-mujer-depilaci-n-facial-con-c",
    "category": "depilacion",
    "name": "Mujer - Depilación facial con cera",
    "duration": "10 min",
    "price": "8€",
    "price_num": 8.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "Si quieres lucir un rostro impecable y suave, decídete por esta depilación facial con cera."
  },
  {
    "id": "mirada-mujer-depilaci-n-facial-con-hilo",
    "category": "mirada",
    "name": "Mujer - Depilación facial con hilo",
    "duration": "30 min",
    "price": "35€",
    "price_num": 35.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "Libérate de esos molestos vellos en el rostro con una depilación facial con hilo, una técnica especialmente recomendada para las pieles más sensibles."
  },
  {
    "id": "mirada-mujer-dise-o-de-cejas",
    "category": "mirada",
    "name": "Mujer - Diseño de cejas",
    "duration": "20 min",
    "price": "20€",
    "price_num": 20.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "A veces, un simple retoque en nuestro rostro se convierte en un gran cambio. Y es que las cejas también forman parte del ''look'' de nuestro rostro. Porque sí, el diseño de cejas existe. Y es muy importante a la hora de transmitir una sensación a través de nuestra mirada. ¡Ponte en manos de estos especialistas y mira al mundo con otros ojos!"
  },
  {
    "id": "mirada-mujer-laminado-y-dise-o-de-cejas",
    "category": "mirada",
    "name": "Mujer -Laminado y diseño de cejas",
    "duration": "60 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "El ''pack'' completo para resaltar tu mirada. Le darás intensidad a estás dos partes de tu rostro y ahorrarás tiempo a diario, ya que no tendrás que maquillar cejas y pestañas durante una temporada. '''Paso a paso: ''' * Preparación y limpieza. * Aplicación del tinte. Se deja actuar durante unos minutos. * Retirada del producto."
  },
  {
    "id": "mirada-mujer-lifting-de-pesta-as-coreano",
    "category": "mirada",
    "name": "Mujer - Lifting de pestañas  Coreano + Tinte",
    "duration": "75 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "Con el lifting conseguirás alargar y elevar tus pestañas. Si tus pestañas caen rectas, con este tratamiento podrás elevarlas y darles una curvatura natural. '''Paso a paso: ''' * Preparación de las pestañas. * Aplicación del producto. Se deja actuar durante unos minutos. * Retirada de la solución y limpieza."
  },
  {
    "id": "mirada-mujer-permanente-de-pesta-as-tint",
    "category": "mirada",
    "name": "Mujer - Permanente de pestañas + Tinte",
    "duration": "75 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "Si te gustan las pestañas largas y rizadas como las de las muñecas, este secreto de belleza te va a encantar. Puede que te parezca raro, pero en vez de dejarte como una trasnochada estrella ochentera, el rizado de pestañas te proporcionará unas pestañas rizadas durante semanas sin tener que recurrir al rímel ni tampoco a las engorrosas pestañas postizas."
  },
  {
    "id": "facial-limpieza-facial-con-punta-de-diam",
    "category": "facial",
    "name": "Limpieza facial con punta de diamante",
    "duration": "75 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Higiene Clínica",
    "desc": "Desde la exposición solar hasta la contaminación, su rostro está expuesto todos los días a elementos que pueden dañar su piel a largo plazo. Así pues, los tratamientos faciales son la mejor respuesta para restaurar la elasticidad, combatir el acné, las impurezas o incluso la rosácea, manteniendo su piel limpia, luminosa y saludable durante mucho tiempo."
  },
  {
    "id": "facial-higiene-facial-con-tratamiento",
    "category": "facial",
    "name": "Higiene facial con tratamiento",
    "duration": "75 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Higiene Clínica",
    "desc": "Desde la exposición solar hasta la contaminación, su rostro está expuesto todos los días a elementos que pueden dañar su piel a largo plazo. Así pues, los tratamientos faciales son la mejor respuesta para restaurar la elasticidad, combatir el acné, las impurezas o incluso la rosácea, manteniendo su piel limpia, luminosa y saludable durante mucho tiempo."
  },
  {
    "id": "facial-tratamiento-power-hyaluronic-skey",
    "category": "facial",
    "name": "Tratamiento Power Hyaluronic Skeyndor",
    "duration": "60 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Skeyndor Oficial",
    "desc": "Desde la exposición solar hasta la contaminación, su rostro está expuesto todos los días a elementos que pueden dañar su piel a largo plazo. Así pues, los tratamientos faciales son la mejor respuesta para restaurar la elasticidad, combatir el acné, las impurezas o incluso la rosácea, manteniendo su piel limpia, luminosa y saludable durante mucho tiempo."
  },
  {
    "id": "facial-tratamiento-power-oxygen-skeyndor",
    "category": "facial",
    "name": "Tratamiento Power Oxygen Skeyndor",
    "duration": "60 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Skeyndor Oficial",
    "desc": "Desde la exposición solar hasta la contaminación, su rostro está expuesto todos los días a elementos que pueden dañar su piel a largo plazo. Así pues, los tratamientos faciales son la mejor respuesta para restaurar la elasticidad, combatir el acné, las impurezas o incluso la rosácea, manteniendo su piel limpia, luminosa y saludable durante mucho tiempo."
  },
  {
    "id": "facial-tratamiento-power-c-skeyndor",
    "category": "facial",
    "name": "Tratamiento Power C+ Skeyndor",
    "duration": "60 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Skeyndor Oficial",
    "desc": "Desde la exposición solar hasta la contaminación, su rostro está expuesto todos los días a elementos que pueden dañar su piel a largo plazo. Así pues, los tratamientos faciales son la mejor respuesta para restaurar la elasticidad, combatir el acné, las impurezas o incluso la rosácea, manteniendo su piel limpia, luminosa y saludable durante mucho tiempo."
  },
  {
    "id": "facial-tratamiento-facial-timeless-prodi",
    "category": "facial",
    "name": "Tratamiento facial  Timeless Prodigy ( Rosa Damascena )",
    "duration": "75 min",
    "price": "85€",
    "price_num": 85.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Facial",
    "desc": "Para mimar tu piel y hacer que luzca más joven y firme, elige este tratamiento antiedad. Que tu rostro refleje la energía y vitalidad que te caracterizan. '''Beneficios: '''prevención del envejecimiento cutáneo, favorecimiento de la renovación celular y efecto reafirmante."
  },
  {
    "id": "facial-tratamiento-facial-eternal-celula",
    "category": "facial",
    "name": "Tratamiento facial Eternal celulas Madre vegetales",
    "duration": "75 min",
    "price": "85€",
    "price_num": 85.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Facial",
    "desc": "Para mimar tu piel y hacer que luzca más joven y firme, elige este tratamiento antiedad. Que tu rostro refleje la energía y vitalidad que te caracterizan. '''Beneficios: '''prevención del envejecimiento cutáneo, favorecimiento de la renovación celular y efecto reafirmante."
  },
  {
    "id": "facial-tratamiento-de-global-lift",
    "category": "facial",
    "name": "Tratamiento De Global Lift",
    "duration": "75 min",
    "price": "85€",
    "price_num": 85.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Facial",
    "desc": "Sea cual sea tu tipo de piel, una hidratación es siempre saludable. Si además tienes tendencia a la piel seca, hará que tu piel vuelva a estar suave y nutrida. '''Paso a paso: ''' * Desmaquillado del rostro. * Aplicación de tónico. * Exfoliación. * Aplicación de vapor. * Extracción de impurezas. * Sérum. * Aplicación de mascarilla. * Masaje facial con crema."
  },
  {
    "id": "facial-tratamiento-corrective",
    "category": "facial",
    "name": "Tratamiento Corrective",
    "duration": "75 min",
    "price": "85€",
    "price_num": 85.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Facial",
    "desc": "Sea cual sea tu tipo de piel, una hidratación es siempre saludable. Si además tienes tendencia a la piel seca, hará que tu piel vuelva a estar suave y nutrida. '''Paso a paso: ''' * Desmaquillado del rostro. * Aplicación de tónico. * Exfoliación. * Aplicación de vapor. * Extracción de impurezas. * Sérum. * Aplicación de mascarilla. * Masaje facial con crema."
  },
  {
    "id": "masajes-drenaje-linf-tico-facial",
    "category": "masajes",
    "name": "Drenaje linfático facial",
    "duration": "60 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/masajes.jpg",
    "tag": "Masajes",
    "desc": "En el rostro se reflejan todas nuestras emociones, ¡cuídalo con este drenaje linfático facial! Descubre esta técnica de masajes con movimientos muy suaves y lentos de bombeo. Las pequeñas presiones se dirigen en dirección a la linfa para eliminar las toxinas por vía natural. Tiene efectos rejuvenecedores, adelgazantes, favorece a la circulación sanguínea y fortalece los músculos. ¡Dile adiós al estrés! '''Paso a paso:''' * Desmaquillado del rostro. * Aplicación de tónico. * Exfoliación. * Aplicación de vapor. * Extracción de impurezas. * Sérum. * Aplicación de mascarilla. * Masaje facial con crema."
  },
  {
    "id": "masajes-masaje-relajante",
    "category": "masajes",
    "name": "Masaje relajante",
    "duration": "50 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/masajes.jpg",
    "tag": "Masajes",
    "desc": "Tu día a día puede resultar estresante, nada mejor que desconectar unos minutos y disfrutar de un masaje relajante como este."
  },
  {
    "id": "masajes-masaje-completo",
    "category": "masajes",
    "name": "Masaje completo",
    "duration": "50 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/masajes.jpg",
    "tag": "Masajes",
    "desc": "Los traumatismos, la malas posturas y el estrés afectan a nuestro cuerpo causando molestias. Si es tu caso y necesitas un alivio, prueba con un masaje terapéutico."
  },
  {
    "id": "masajes-masaje-circulatorio",
    "category": "masajes",
    "name": "Masaje circulatorio",
    "duration": "50 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/masajes.jpg",
    "tag": "Masajes",
    "desc": "Uno de los masajes más relajantes y a la vez una forma óptima para favorecer la circulación. Este masaje moviliza los tejidos de la piel dejándola tersa y firme, reduciendo la retención de líquidos y las hinchazones."
  },
  {
    "id": "masajes-masaje-descontracturante",
    "category": "masajes",
    "name": "Masaje descontracturante",
    "duration": "50 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/masajes.jpg",
    "tag": "Masajes",
    "desc": "¡Si tiene tensiones y dolores que el masaje sueco clásico no puede resolver, quizás esta técnica sea la opción ideal! El masaje de los tejidos profundos utiliza mayor presión y se concentra sobre la zona afectada, pudiendo provocar algo de molestia. ¡Pero vale la pena, ya que alivia el dolor a largo plazo!"
  },
  {
    "id": "masajes-masaje-localizado",
    "category": "masajes",
    "name": "Masaje localizado",
    "duration": "20 min",
    "price": "30€",
    "price_num": 30.0,
    "plate": "assets/plates/masajes.jpg",
    "tag": "Masajes",
    "desc": "Si está estresado o presenta tensión y dolor crónico, un masaje terapéutico le ayudará a aliviar el dolor. Así sea un masaje abdominal o de espalda, mejorará su estado físico y permitirá que se relaje."
  },
  {
    "id": "masajes-drenaje-linf-tico",
    "category": "masajes",
    "name": "Drenaje linfático",
    "duration": "50 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/masajes.jpg",
    "tag": "Masajes",
    "desc": "Si quieres librarte de la retención de líquidos y de las toxinas acumuladas en tu cuerpo, esto es lo que estabas buscando. Este minucioso masaje manual reactivará tu sistema linfático, mejorando así la circulación y eliminando la celulitis."
  },
  {
    "id": "masajes-presoterapia",
    "category": "masajes",
    "name": "Presoterapia",
    "duration": "30-60 min",
    "price": "20€",
    "price_num": 20.0,
    "plate": "assets/plates/masajes.jpg",
    "tag": "Presoterapia",
    "desc": "El tratamiento estrella para combatir la celulitis y la retención de líquidos. Gracias a la presión sobre determinados puntos se favorece el drenaje linfático, la reactivación de la circulación y la eliminación de residuos."
  },
  {
    "id": "masajes-presoterapia-para-embarazadas",
    "category": "masajes",
    "name": "Presoterapia para embarazadas",
    "duration": "30-60 min",
    "price": "20€",
    "price_num": 20.0,
    "plate": "assets/plates/masajes.jpg",
    "tag": "Presoterapia",
    "desc": "¿Buscas algún tratamiento específico para los meses de embarazo? Para actuar específicamente contra la retención de líquidos y mejorar la circulación durante el proceso, este es el tratamiento más indicado. Si estás en ese período en que ya te empiezas a notar las piernas hinchadas... ¡No esperes más! '''Ten en cuenta que:''' durante el embarazo solo se puede realizar la presoterapia en zonas localizadas como las piernas o los brazos."
  },
  {
    "id": "masajes-electroestimulaci-n",
    "category": "masajes",
    "name": "Electroestimulación",
    "duration": "30-60 min",
    "price": "30€",
    "price_num": 30.0,
    "plate": "assets/plates/masajes.jpg",
    "tag": "Masajes",
    "desc": "La electroestimulación es una técnica que trabaja mediante impulsos eléctricos que provocan contracciones musculares, creando un efecto similar al que se conseguiría mediante el ejercicio físico."
  },
  {
    "id": "corporal-cavitaci-n-corporal-y-presotera",
    "category": "corporal",
    "name": "Cavitación corporal y presoterapia",
    "duration": "60 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/corporal.jpg",
    "tag": "Presoterapia",
    "desc": "Puede que asocies el ultrasonido con las pruebas para determinar el sexo de un bebé, pero estas versátiles ondas ofrecen una amplia gama de beneficios médicos para ayudar a eliminar dolores y molestias. Si padeces dolores o molestias, la terapia con ultrasonidos podría ser la solución perfecta."
  },
  {
    "id": "corporal-tratamiento-anticelul-tico",
    "category": "corporal",
    "name": "Tratamiento anticelulítico",
    "duration": "60 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/corporal.jpg",
    "tag": "Corporal",
    "desc": "La celulitis es un verdadero quebradero de cabeza. Puedes pasarte horas sudando en el gimnasio pero los bultitos persistentes no se mueven. No te preocupes, no estás solo; nueve de cada diez mujeres sufren de celulitis. Por suerte, hay muchas opciones para ayudar y atacar este problema de raíz."
  },
  {
    "id": "corporal-tratamiento-reafirmante",
    "category": "corporal",
    "name": "Tratamiento reafirmante",
    "duration": "60 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/corporal.jpg",
    "tag": "Corporal",
    "desc": "¿Necesitas una solución para la flacidez de la piel? Este tratamiento reafirmante es ideal después de realizar cualquier tratamiento reductor o dieta, ya que contribuye a hacer que la piel del cuerpo recupere la elasticidad y aumente su firmeza. ¡Consigue una figura más definida!"
  },
  {
    "id": "corporal-tratamiento-corporal-piernas-li",
    "category": "corporal",
    "name": "Tratamiento corporal piernas ligeras",
    "duration": "60 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/corporal.jpg",
    "tag": "Corporal",
    "desc": "Tratamiento corporal con efecto detox y drenante."
  },
  {
    "id": "masajes-drenaje-linfatico-vendas-anti-ed",
    "category": "masajes",
    "name": "Drenaje linfatico + Vendas anti edema + Presoterapia",
    "duration": "75 min",
    "price": "90€",
    "price_num": 90.0,
    "plate": "assets/plates/masajes.jpg",
    "tag": "Presoterapia",
    "desc": "Las vendas frías aprovechan nuestro propio metabolismo para reafirmar, hidratar la piel y quemar grasas y además lo combinamos con un masaje manual reductor previo para obtener mejores resultados."
  },
  {
    "id": "corporal-radiofrecuencia-corporal-megan-",
    "category": "corporal",
    "name": "RADIOFRECUENCIA CORPORAL MEGAN BY SKEYNDOR Reafirmante",
    "duration": "70 min",
    "price": "85€",
    "price_num": 85.0,
    "plate": "assets/plates/corporal.jpg",
    "tag": "Skeyndor MEGAN",
    "desc": "Tratamiento profesional en cabina realizado por especialistas de Clínica CreArT con cosmética y aparatología de alta gama."
  },
  {
    "id": "corporal-radiofrecuencia-corporal-megan-",
    "category": "corporal",
    "name": "RADIOFRECUENCIA CORPORAL MEGAN BY SKEYNDOR Remodelante",
    "duration": "70 min",
    "price": "85€",
    "price_num": 85.0,
    "plate": "assets/plates/corporal.jpg",
    "tag": "Skeyndor MEGAN",
    "desc": "Radiofrecuencia monopolar con 3 tecnologías. -HI-FREQ: estimula, regenera y remodela. -DERMABOOST: mejora la permeabilidad celular. -LED RGB: permite una mejora absorción de los diferentes concentrados con tecnología Dron."
  },
  {
    "id": "masajes-maderoterapia",
    "category": "masajes",
    "name": "Maderoterapia",
    "duration": "30-60 min",
    "price": "40€",
    "price_num": 40.0,
    "plate": "assets/plates/masajes.jpg",
    "tag": "Maderoterapia",
    "desc": "La maderoterapia es una técnica de masaje en la que se emplean diferentes objetos de madera específicamente diseñados para ello. ¿Su finalidad? Reafirmar, tonificar y combatir la celulitis. Aprovecha todas las propiedades beneficiosas del masaje con madera y remodela tu silueta. '''Paso a paso:''' * Limpieza de la piel. * Hidratación. * Masaje."
  },
  {
    "id": "depilacion-mujer-depilaci-n-l-ser",
    "category": "depilacion",
    "name": "Mujer - Depilación láser",
    "duration": "5-55 min",
    "price": "6€",
    "price_num": 6.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Láser Diodo",
    "desc": "¡Haz que tu vello se esfume!. La depilación láser es una forma eliminar el vello mediante una luz pulsada intensa para desactivar el folículo. Es la más famosa de las técnicas de eliminación de pelo, los arranca raíz y ayuda a evitar esos desagradables pelitos pequeños."
  },
  {
    "id": "depilacion-menton",
    "category": "depilacion",
    "name": "Menton",
    "duration": "5 min",
    "price": "6€",
    "price_num": 6.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "Rápida y eficaz. Para cualquiera que quiera librarse de las cuchillas y la cera para siempre, la depilación láser es la mejor solución. Da ya el paso y despídete de tu vello corporal."
  },
  {
    "id": "depilacion-patillas",
    "category": "depilacion",
    "name": "Patillas",
    "duration": "15 min",
    "price": "6€",
    "price_num": 6.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "Rápida y eficaz. Para cualquiera que quiera librarse de las cuchillas y la cera para siempre, la depilación láser es la mejor solución. Da ya el paso y despídete de tu vello corporal."
  },
  {
    "id": "facial-dermapen-facial-polivitaminas",
    "category": "facial",
    "name": "Dermapen facial + Polivitaminas",
    "duration": "55 min",
    "price": "50€",
    "price_num": 50.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Dermapen Médico",
    "desc": "¿Alguna vez ha soñado retroceder en el tiempo?, ¡estás de suerte! ahora puedes recurrir al microneedling, el nuevo tratamiento preferido de las famosas que, gracias a una serie de pequeñas perforaciones en la piel, ofrece un aspecto más fresco y más joven. ¡En serio, no es tan doloroso como parece y los beneficios son extraordinarios! ¡Prepárate para decirle adiós a las arrugas y las cicatrices!"
  },
  {
    "id": "facial-dermapen-facial-vitaminas-kojico-",
    "category": "facial",
    "name": "Dermapen facial + Vitaminas Kojico y Retinol DESPIGMENTANTE",
    "duration": "55 min",
    "price": "50€",
    "price_num": 50.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Dermapen Médico",
    "desc": "¿Alguna vez ha soñado retroceder en el tiempo?, ¡estás de suerte! ahora puedes recurrir al microneedling, el nuevo tratamiento preferido de las famosas que, gracias a una serie de pequeñas perforaciones en la piel, ofrece un aspecto más fresco y más joven. ¡En serio, no es tan doloroso como parece y los beneficios son extraordinarios! ¡Prepárate para decirle adiós a las arrugas y las cicatrices!"
  },
  {
    "id": "facial-radiofrecuencia-facial-megan-by-s",
    "category": "facial",
    "name": "RADIOFRECUENCIA FACIAL MEGAN BY SKEYNDOR Alisador y Liftante.",
    "duration": "70 min",
    "price": "85€",
    "price_num": 85.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Skeyndor MEGAN",
    "desc": "Radiofrecuencia monopolar con 3 tecnologías. -HI-FREQ: estimula, regenera y remodela. -DERMABOOST: mejora la permeabilidad celular. -LED RGB: permite una mejora absorción de los diferentes concentrados con tecnología Dron."
  },
  {
    "id": "facial-radiofrecuencia-facial-megan-by-s",
    "category": "facial",
    "name": "RADIOFRECUENCIA FACIAL MEGAN BY SKEYNDOR Rellenador / contorno de ojos.",
    "duration": "70 min",
    "price": "85€",
    "price_num": 85.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Skeyndor MEGAN",
    "desc": "Radiofrecuencia monopolar con 3 tecnologías. -HI-FREQ: estimula, regenera y remodela. -DERMABOOST: mejora la permeabilidad celular. -LED RGB: permite una mejora absorción de los diferentes concentrados con tecnología Dron."
  },
  {
    "id": "facial-radiofrecuencia-facial-megan-by-s",
    "category": "facial",
    "name": "RADIOFRECUENCIA FACIAL MEGAN BY SKEYNDOR Pieles con manchas",
    "duration": "70 min",
    "price": "85€",
    "price_num": 85.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Skeyndor MEGAN",
    "desc": "Radiofrecuencia monopolar con 3 tecnologías. -HI-FREQ: estimula, regenera y remodela. -DERMABOOST: mejora la permeabilidad celular. -LED RGB: permite una mejora absorción de los diferentes concentrados con tecnología Dron."
  },
  {
    "id": "facial-radiofrecuencia-facial-megan-by-s",
    "category": "facial",
    "name": "RADIOFRECUENCIA FACIAL MEGAN BY SKEYNDOR Iluminador",
    "duration": "70 min",
    "price": "85€",
    "price_num": 85.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Skeyndor MEGAN",
    "desc": "Radiofrecuencia monopolar con 3 tecnologías. -HI-FREQ: estimula, regenera y remodela. -DERMABOOST: mejora la permeabilidad celular. -LED RGB: permite una mejora absorción de los diferentes concentrados con tecnología Dron."
  },
  {
    "id": "facial-radiofrecuencia-facial-megan-by-s",
    "category": "facial",
    "name": "RADIOFRECUENCIA FACIAL MEGAN BY SKEYNDOR Refinador de poros",
    "duration": "70 min",
    "price": "85€",
    "price_num": 85.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Skeyndor MEGAN",
    "desc": "Radiofrecuencia monopolar con 3 tecnologías. -HI-FREQ: estimula, regenera y remodela. -DERMABOOST: mejora la permeabilidad celular. -LED RGB: permite una mejora absorción de los diferentes concentrados con tecnología Dron."
  },
  {
    "id": "mirada-mujer-depilaci-n-de-cejas-con-hil",
    "category": "mirada",
    "name": "Mujer - Depilación de cejas con hilo",
    "duration": "20 min",
    "price": "25€",
    "price_num": 25.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "Una técnica natural y nada agresiva de dar forma a tus cejas. Si tienes la piel sensible pero quieres unas cejas cuidadas y definidas este es el método ideal para ti."
  },
  {
    "id": "mirada-mujer-depilaci-n-de-labio-superio",
    "category": "mirada",
    "name": "Mujer - Depilación de labio superior con hilo",
    "duration": "5 min",
    "price": "10€",
    "price_num": 10.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "Libérate del vello del labio superior con está depilación con hilo. Una técnica procedente de la India, especialmente recomendada para las pieles más sensibles."
  },
  {
    "id": "mirada-mujer-depilaci-n-de-cejas-y-labio",
    "category": "mirada",
    "name": "Mujer - Depilación de cejas y labio superior con hilo",
    "duration": "30 min",
    "price": "35€",
    "price_num": 35.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "Una técnica natural y nada agresiva de dar forma a tus cejas y conseguir un labio superior libre de vello. Además, si tienes la piel sensible este es el método ideal para ti."
  },
  {
    "id": "mirada-mujer-depilaci-n-facial-con-hilo",
    "category": "mirada",
    "name": "Mujer - Depilación facial con hilo",
    "duration": "5-10 min",
    "price": "15€",
    "price_num": 15.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "Libérate de esos molestos vellos en el rostro con una depilación facial con hilo, una técnica especialmente recomendada para las pieles más sensibles."
  },
  {
    "id": "mirada-hombre-depilaci-n-de-cejas-con-hi",
    "category": "mirada",
    "name": "Hombre - Depilación de cejas con hilo",
    "duration": "20 min",
    "price": "25€",
    "price_num": 25.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "¿Sabías que con unas cejas limpias y bien diseñadas puedes mejorar la expresión de tu rostro? La depilación con hilo es una técnica natural y nada agresiva para dar forma a tus cejas. Es el método perfecto para ti si tienes la piel sensible pero quieres unas cejas cuidadas. ¡Luce tu rostro!"
  },
  {
    "id": "mirada-mujer-depilaci-n-facial-con-hilo",
    "category": "mirada",
    "name": "Mujer - Depilación facial con hilo",
    "duration": "10-30 min",
    "price": "10€",
    "price_num": 10.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "Libérate de esos molestos vellos en el rostro con una depilación facial con hilo, una técnica especialmente recomendada para las pieles más sensibles."
  },
  {
    "id": "mirada-mujer-colorido-de-cejas",
    "category": "mirada",
    "name": "Mujer - Colorido de cejas.",
    "duration": "10 min",
    "price": "10€",
    "price_num": 10.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "El ''pack'' completo para resaltar tu mirada. Le darás intensidad a estás dos partes de tu rostro y ahorrarás tiempo a diario, ya que no tendrás que maquillar cejas y pestañas durante una temporada. '''Paso a paso: ''' * Preparación y limpieza. * Aplicación del tinte. Se deja actuar durante unos minutos. * Retirada del producto."
  },
  {
    "id": "corporal-peeling-corporal",
    "category": "corporal",
    "name": "Peeling corporal",
    "duration": "60 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/corporal.jpg",
    "tag": "Corporal",
    "desc": "Exfolia e hidrata tu piel despues de las vacaciones. Limpieza profunda de la piel. Favorece el drenaje. Mejor bronceado. Previene el envejecimiento prematuro de la piel porque activa la circulación sanguínea. Produce un buen funcionamiento del sistema linfático. Elimina los vellos enquistados y molestos."
  },
  {
    "id": "corporal-peeling-de-piernas",
    "category": "corporal",
    "name": "Peeling de piernas",
    "duration": "35 min",
    "price": "35€",
    "price_num": 35.0,
    "plate": "assets/plates/corporal.jpg",
    "tag": "Corporal",
    "desc": "¿Quieres una limpieza profunda para la piel de las piernas? Con este peeling eliminarás la capa más superficial, que es la que acumula más impurezas, consiguiendo una piel suave y renovada. ¡Perfecto en cualquier momento!"
  },
  {
    "id": "facial-limpieza-facial-con-punta-de-diam",
    "category": "facial",
    "name": "Limpieza facial con punta de diamante + Dermapen con vitaminas",
    "duration": "85 min",
    "price": "110€",
    "price_num": 110.0,
    "plate": "assets/plates/facial.jpg",
    "tag": "Dermapen Médico",
    "desc": "Desde la exposición solar hasta la contaminación, su rostro está expuesto todos los días a elementos que pueden dañar su piel a largo plazo. Así pues, los tratamientos faciales son la mejor respuesta para restaurar la elasticidad, combatir el acné, las impurezas o incluso la rosácea, manteniendo su piel limpia, luminosa y saludable durante mucho tiempo."
  },
  {
    "id": "depilacion-hombre-depilaci-n-corporal-to",
    "category": "depilacion",
    "name": "Hombre - Depilación corporal torax",
    "duration": "30 min",
    "price": "40€",
    "price_num": 40.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "Para eliminar el vello corporal, ya sea por estética o porque practicas algún deporte, esta depilación con cera es seguramente tu mejor opción."
  },
  {
    "id": "depilacion-hombre-depilaci-n-corporal-br",
    "category": "depilacion",
    "name": "Hombre - Depilación corporal Brazos",
    "duration": "25 min",
    "price": "30€",
    "price_num": 30.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "Para eliminar el vello corporal, ya sea por estética o porque practicas algún deporte, esta depilación con cera es seguramente tu mejor opción."
  },
  {
    "id": "depilacion-hombre-depilaci-n-corporal-pi",
    "category": "depilacion",
    "name": "Hombre - Depilación corporal piernas completas",
    "duration": "50 min",
    "price": "50€",
    "price_num": 50.0,
    "plate": "assets/plates/depilacion.jpg",
    "tag": "Depilación",
    "desc": "Para eliminar el vello corporal, ya sea por estética o porque practicas algún deporte, esta depilación con cera es seguramente tu mejor opción."
  },
  {
    "id": "mirada-mujer-laminado-dise-o-y-tinte-de-",
    "category": "mirada",
    "name": "Mujer - Laminado, diseño  y tinte de cejas",
    "duration": "60 min",
    "price": "60€",
    "price_num": 60.0,
    "plate": "assets/plates/mirada.jpg",
    "tag": "Mirada & Cejas",
    "desc": "El tratamiento más completo que le puedes dar a tus cejas. Obtendrás un diseño favorecedor a tus facciones y unas cejas perfectamente perfiladas, que resaltarán aún más gracias al tinte. Si leído suena bien, ¡imagínate cuando vayas! '''Paso a paso: ''' * Preparación de las cejas. * Depilación. * Aplicación del tinte. Se deja actuar durante unos minutos. * Retirada del producto y limpieza."
  }
];

// Available Time Slots
const TIME_SLOTS = [
  '11:00', '12:00', '13:00', '16:00', '17:00', '18:00', '19:00'
];

// App State
const state = {
  activeTab: 'todos',
  searchQuery: '',
  wizardFilterCat: 'todos',
  wizard: {
    step: 1,
    bookingType: 'valoracion', // 'valoracion' (0€) or 'tratamiento' (25€ señal)
    selectedTreatment: 'valoracion-gratis',
    treatmentName: 'Valoración Previa de Diagnóstico (20 min)',
    priceLabel: '100% Bonificada (Señal 25€ deducible)',
    paymentMethod: 'bizum', // 'bizum', 'tarjeta', 'clinica'
    date: '2026-10-20',
    time: '12:00',
    name: '',
    phone: '',
    email: '',
    notes: ''
  },
  chat: {
    isOpen: false,
    history: []
  }
};

// DOM Init
document.addEventListener('DOMContentLoaded', () => {
  renderTreatmentsGrid();
  setupTabFilters();
  setupWizardListeners();
  setupValeriaDrawer();
});

// Render Bento Treatments
function renderTreatmentsGrid() {
  const grid = document.getElementById('treatmentsGrid');
  if (!grid) return;

  let filtered = state.activeTab === 'todos' 
    ? TREATMENTS_DATA 
    : TREATMENTS_DATA.filter(t => t.category === state.activeTab);

  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(t => 
      t.name.toLowerCase().includes(q) ||
      t.desc.toLowerCase().includes(q) ||
      t.tag.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; background: var(--color-surface); border-radius: var(--radius-md); border: 1px dashed var(--color-border); margin: 20px 0;">
        <p style="font-size: 1.125rem; font-family: var(--font-serif); color: var(--color-ink); margin-bottom: 8px;">No encontramos tratamientos para "${state.searchQuery}".</p>
        <p style="font-size: 0.875rem; color: var(--color-muted);">Prueba con otro término o consúltanos directamente por WhatsApp.</p>
        <button class="btn btn-secondary" style="margin-top: 16px; padding: 8px 20px; font-size: 0.8125rem;" onclick="resetTreatmentSearch()">Ver los 64 tratamientos</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(t => `
    <article class="treatment-card" data-id="${t.id}">
      <div class="card-image-wrap">
        <img src="${t.plate}" alt="${t.name}" loading="lazy">
        <span class="card-category-tag">${t.tag}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-duration">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${t.duration}
          </span>
          <span class="card-price">${t.price}</span>
        </div>
        <h3 class="card-title">${t.name}</h3>
        <p class="card-desc">${t.desc}</p>
        <div class="card-action">
          <button class="btn-card" onclick="openBookingForTreatment('${t.id}')">
            Reservar con señal 25€
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function resetTreatmentSearch() {
  state.searchQuery = '';
  const input = document.getElementById('treatmentSearchInput');
  if (input) input.value = '';
  renderTreatmentsGrid();
}

// Setup Treatment Filter Tabs
function setupTabFilters() {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeTab = btn.getAttribute('data-tab');
      renderTreatmentsGrid();
    });
  });

  const searchInput = document.getElementById('treatmentSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderTreatmentsGrid();
    });
  }
}

// ==============================================================================
// BOOKING WIZARD LOGIC
// ==============================================================================

function openBookingModal(type = 'valoracion') {
  state.wizard.step = 1;
  state.wizard.bookingType = type;
  
  if (type === 'valoracion') {
    state.wizard.selectedTreatment = 'valoracion-gratis';
    state.wizard.treatmentName = 'Valoración de Diagnóstico Personalizado (20 min)';
    state.wizard.priceLabel = 'Gratuita (0€)';
  } else {
    state.wizard.selectedTreatment = 'power-hyaluronic';
    state.wizard.treatmentName = 'Tratamiento Power Hyaluronic Skeyndor (60 min)';
    state.wizard.priceLabel = '60€ (Señal de 25€ para confirmar)';
  }

  updateWizardUI();
  document.getElementById('bookingModalOverlay').classList.add('open');
}

function openBookingForTreatment(treatmentId) {
  const treatment = TREATMENTS_DATA.find(t => t.id === treatmentId);
  if (!treatment) {
    openBookingModal('tratamiento');
    return;
  }
  state.wizard.step = 2; // Jump directly to time/date if treatment pre-selected
  state.wizard.bookingType = 'tratamiento';
  state.wizard.selectedTreatment = treatment.id;
  state.wizard.treatmentName = treatment.name;
  state.wizard.priceLabel = `${treatment.price} (Señal de 25€ requerida)`;

  updateWizardUI();
  document.getElementById('bookingModalOverlay').classList.add('open');
}

function closeBookingModal() {
  document.getElementById('bookingModalOverlay').classList.remove('open');
}

function setupWizardListeners() {
  const overlay = document.getElementById('bookingModalOverlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeBookingModal();
    });
  }
}

function updateWizardUI() {
  const body = document.getElementById('wizardStepContent');
  const footer = document.getElementById('wizardFooter');
  const stepIndicators = document.querySelectorAll('.wizard-step');

  // Step Indicators
  stepIndicators.forEach((ind, i) => {
    const stepNum = i + 1;
    ind.classList.remove('active', 'completed');
    if (stepNum === state.wizard.step) {
      ind.classList.add('active');
    } else if (stepNum < state.wizard.step) {
      ind.classList.add('completed');
    }
  });

  // Step 1: Modalidad
  if (state.wizard.step === 1) {
    body.innerHTML = `
      <!-- 1-Click WhatsApp Fast Booking Recommended by The Founder -->
      <div class="whatsapp-fast-card" onclick="openWhatsAppBooking()">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div class="whatsapp-fast-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.035-.478-1.579-.655-2.586-2.28-2.665-2.385-.078-.105-.646-.86-.646-1.637 0-.776.406-1.157.55-1.314.144-.158.314-.197.419-.197.105 0 .21.002.302.007.098.006.229-.037.359.276.132.316.452 1.104.492 1.183.04.079.066.171.013.276-.052.105-.079.171-.157.263-.079.092-.165.205-.236.276-.079.079-.161.164-.069.322.092.158.409.674.877 1.091.603.536 1.111.702 1.269.781.158.079.25.066.342-.04.092-.105.394-.46.499-.618.105-.158.21-.132.355-.079.144.053.918.434 1.076.513.158.079.263.118.302.184.039.066.039.381-.105.786z"/></svg>
          </div>
          <div>
            <strong style="color: #137333; font-size: 0.9375rem; display: block;">¿Prefieres reservar en 30 segundos por WhatsApp?</strong>
            <span style="font-size: 0.8125rem; color: #2D5A27;">Habla directamente con Valeria y confirma tu cita al instante</span>
          </div>
        </div>
        <button class="whatsapp-fast-btn" type="button">Abrir chat →</button>
      </div>

      <p style="margin-bottom: 14px; font-size: 0.9375rem; color: var(--color-ink-soft);">
        O continúa con nuestro asistente web interactivo:
      </p>
      <div class="booking-option-card ${state.wizard.bookingType === 'valoracion' ? 'selected' : ''}" onclick="selectBookingType('valoracion')">
        <div>
          <div class="opt-title">1. Diagnóstico Clínico + Plan Personalizado (20 min)</div>
          <div class="opt-sub">Evaluación con Gabriela Arellano. Tu señal de 25€ se descuenta al 100% de tu primer tratamiento o cosmética Skeyndor.</div>
        </div>
        <div class="opt-price-tag">100% Bonificado</div>
      </div>
      <div class="booking-option-card ${state.wizard.bookingType === 'tratamiento' ? 'selected' : ''}" onclick="selectBookingType('tratamiento')">
        <div>
          <div class="opt-title">2. Reserva Directa de Tratamiento en Cabina</div>
          <div class="opt-sub">Si ya sabes qué tratamiento deseas (Facial Skeyndor, Corporal o Láser). La señal de 25€ se descuenta del total.</div>
        </div>
        <div class="opt-price-tag">Señal 25€</div>
      </div>
      <div style="background: var(--color-surface-subtle); border-left: 3px solid var(--color-olive); padding: 12px 14px; font-size: 0.8125rem; color: var(--color-ink-soft); margin-top: 14px; border-radius: 4px;">
        💎 <strong>Garantía de Cabina Exclusiva:</strong> Para asegurar puntualidad estricta y cabina médica esterilizada para ti, solicitamos una señal de compromiso de 25€ bonificada al 100%. Cambio sin coste con 24h de aviso previo.
      </div>
    `;
    footer.innerHTML = `
      <button class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.875rem;" onclick="closeBookingModal()">Cancelar</button>
      <button class="btn btn-primary" style="padding: 10px 24px; font-size: 0.875rem;" onclick="wizardNext()">Continuar →</button>
    `;
  }
  // Step 2: Tratamiento (si eligió tratamiento) o pasar a Fecha
  else if (state.wizard.step === 2) {
    if (state.wizard.bookingType === 'valoracion') {
      wizardNext();
      return;
    }
    const cat = state.wizardFilterCat || 'todos';
    const list = cat === 'todos' ? TREATMENTS_DATA : TREATMENTS_DATA.filter(t => t.category === cat);

    body.innerHTML = `
      <p style="margin-bottom: 10px; font-size: 0.9375rem; color: var(--color-ink-soft);">
        Selecciona tu tratamiento en cabina (64 opciones disponibles):
      </p>
      <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 12px;">
        <button class="chip-btn ${cat === 'todos' ? 'active' : ''}" onclick="filterWizardCat('todos')">Todos</button>
        <button class="chip-btn ${cat === 'facial' ? 'active' : ''}" onclick="filterWizardCat('facial')">Facial</button>
        <button class="chip-btn ${cat === 'corporal' ? 'active' : ''}" onclick="filterWizardCat('corporal')">Corporal</button>
        <button class="chip-btn ${cat === 'masajes' ? 'active' : ''}" onclick="filterWizardCat('masajes')">Masajes</button>
        <button class="chip-btn ${cat === 'depilacion' ? 'active' : ''}" onclick="filterWizardCat('depilacion')">Depilación</button>
        <button class="chip-btn ${cat === 'mirada' ? 'active' : ''}" onclick="filterWizardCat('mirada')">Mirada</button>
      </div>
      <div style="max-height: 320px; overflow-y: auto; padding-right: 4px; display: flex; flex-direction: column; gap: 8px;">
        ${list.map(t => {
          const safeName = t.name.replace(/'/g, "\\'");
          return `
            <div class="booking-option-card ${state.wizard.selectedTreatment === t.id ? 'selected' : ''}" onclick="selectTreatmentOption('${t.id}', '${safeName}', '${t.price}')">
              <div>
                <div class="opt-title">${t.name}</div>
                <div class="opt-sub">${t.duration} · ${t.tag}</div>
              </div>
              <div class="opt-price-tag">${t.price}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    footer.innerHTML = `
      <button class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.875rem;" onclick="wizardPrev()">← Atrás</button>
      <button class="btn btn-primary" style="padding: 10px 24px; font-size: 0.875rem;" onclick="wizardNext()">Elegir Horario →</button>
    `;
  }
  // Step 3: Fecha y Hora
  else if (state.wizard.step === 3) {
    body.innerHTML = `
      <p style="margin-bottom: 16px; font-size: 0.9375rem; color: var(--color-ink-soft);">
        Selecciona tu fecha y hora preferida en Calle de Alcalá 102 (Metro Goya):
      </p>
      <div class="form-group">
        <label class="form-label" for="bookingDate">Fecha deseada:</label>
        <input type="date" id="bookingDate" class="form-control" value="${state.wizard.date}" min="2026-10-16" onchange="state.wizard.date = this.value">
      </div>
      <div class="form-group">
        <label class="form-label">Horarios disponibles (estimación en tiempo real):</label>
        <div class="slots-grid">
          ${TIME_SLOTS.map(s => `
            <button class="slot-btn ${state.wizard.time === s ? 'selected' : ''}" type="button" onclick="selectSlot('${s}')">${s}</button>
          `).join('')}
        </div>
      </div>
      <div style="background: var(--color-sand); border-radius: var(--radius-sm); padding: 12px 16px; font-size: 0.8125rem; color: var(--color-muted); margin-top: 16px;">
        ℹ️ Horario de atención: Lunes a Viernes de 10:00 a 20:00 (L-M desde 11:00). Sábados de 10:00 a 14:00.
      </div>
    `;
    footer.innerHTML = `
      <button class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.875rem;" onclick="wizardPrev()">← Atrás</button>
      <button class="btn btn-primary" style="padding: 10px 24px; font-size: 0.875rem;" onclick="wizardNext()">Tus Datos & Pago →</button>
    `;
  }
  // Step 4: Datos de Contacto y Método de Fianza
  else if (state.wizard.step === 4) {
    body.innerHTML = `
      <p style="margin-bottom: 14px; font-size: 0.9375rem; color: var(--color-ink-soft);">
        Introduce tus datos para registrar y proteger tu cita médica:
      </p>
      <div class="form-group">
        <label class="form-label" for="clientName">Nombre y apellidos *</label>
        <input type="text" id="clientName" class="form-control" placeholder="Ej. Carmen García" value="${state.wizard.name}" oninput="state.wizard.name = this.value" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="clientPhone">Teléfono / WhatsApp *</label>
        <input type="tel" id="clientPhone" class="form-control" placeholder="Ej. 612 345 678" value="${state.wizard.phone}" oninput="state.wizard.phone = this.value" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="clientEmail">Correo electrónico (para recordatorio)</label>
        <input type="email" id="clientEmail" class="form-control" placeholder="carmen@ejemplo.es" value="${state.wizard.email}" oninput="state.wizard.email = this.value">
      </div>

      <!-- Payment Method Selection -->
      <div style="margin-top: 16px; border-top: 1px solid var(--color-border); padding-top: 14px;">
        <label class="form-label">Método preferido para la señal bonificada de 25€:</label>
        <div class="payment-grid">
          <div class="payment-card ${state.wizard.paymentMethod === 'bizum' ? 'selected' : ''}" onclick="selectPaymentMethod('bizum')">
            <span class="payment-badge">Recomendado</span>
            <span class="payment-name">Bizum</span>
            <span class="payment-sub">Móvil a móvil directo</span>
          </div>
          <div class="payment-card ${state.wizard.paymentMethod === 'tarjeta' ? 'selected' : ''}" onclick="selectPaymentMethod('tarjeta')">
            <span class="payment-badge" style="background: #E8F0FE; color: #1A73E8;">Seguro</span>
            <span class="payment-name">Tarjeta / Apple Pay</span>
            <span class="payment-sub">Pasarela segura 100%</span>
          </div>
          <div class="payment-card ${state.wizard.paymentMethod === 'clinica' ? 'selected' : ''}" onclick="selectPaymentMethod('clinica')">
            <span class="payment-badge" style="background: #F1F3F4; color: #5F6368;">En persona</span>
            <span class="payment-name">En Clínica</span>
            <span class="payment-sub">Abonar previa cita</span>
          </div>
        </div>
      </div>

      <div style="background: var(--color-sand); border-left: 3px solid var(--color-olive); padding: 12px 14px; font-size: 0.8125rem; color: var(--color-ink-soft); border-radius: 4px; margin-top: 12px;">
        💎 <strong>Compromiso 100% Bonificado:</strong> Los 25€ no son un coste adicional: se descuentan al 100% de tu tratamiento o productos Skeyndor en clínica. Tu cabina queda bloqueada y desinfectada en exclusiva para ti.
      </div>
    `;
    footer.innerHTML = `
      <button class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.875rem;" onclick="wizardPrev()">← Atrás</button>
      <button class="btn btn-primary" style="padding: 10px 24px; font-size: 0.875rem;" onclick="submitBooking()">Confirmar Solicitud de Cita ✓</button>
    `;
  }
  // Step 5: Confirmación
  else if (state.wizard.step === 5) {
    const code = 'CRT-' + Math.floor(1000 + Math.random() * 9000);
    const paymentLabel = state.wizard.paymentMethod === 'bizum' 
      ? 'Bizum (Recibirás número oficial por WhatsApp)' 
      : state.wizard.paymentMethod === 'tarjeta' 
        ? 'Tarjeta / Apple Pay (Enlace protegido)' 
        : 'Abono en Clínica Alcalá 102';

    body.innerHTML = `
      <div style="text-align: center; padding: 16px 0;">
        <div style="width: 58px; height: 58px; border-radius: 50%; background: #E6F4EA; color: #137333; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; font-size: 1.6rem;">
          ✓
        </div>
        <h4 style="font-family: var(--font-serif); font-size: 1.375rem; color: var(--color-ink); margin-bottom: 6px;">
          ¡Solicitud Registrada con Éxito!
        </h4>
        <p style="font-size: 0.875rem; color: var(--color-muted); max-width: 440px; margin: 0 auto 18px;">
          Hemos recibido tu solicitud para Clínica CreArT. Tu cabina exclusiva está pre-bloqueada a la espera de confirmación.
        </p>
        <div style="background: var(--color-sand); border-radius: var(--radius-md); padding: 18px; text-align: left; max-width: 460px; margin: 0 auto; border: 1px solid var(--color-border);">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border); padding-bottom: 8px; margin-bottom: 10px;">
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-muted); font-weight: 700;">Código de Solicitud</span>
            <span style="font-weight: 700; color: var(--color-olive);">${code}</span>
          </div>
          <p style="font-size: 0.875rem; margin-bottom: 5px;"><strong>Tratamiento:</strong> ${state.wizard.treatmentName}</p>
          <p style="font-size: 0.875rem; margin-bottom: 5px;"><strong>Fecha y hora:</strong> ${state.wizard.date} a las ${state.wizard.time}</p>
          <p style="font-size: 0.875rem; margin-bottom: 5px;"><strong>Paciente:</strong> ${state.wizard.name || 'Cliente CreArT'}</p>
          <p style="font-size: 0.875rem; margin-bottom: 5px;"><strong>Modalidad de pago señal:</strong> ${paymentLabel}</p>
          <p style="font-size: 0.875rem; color: var(--color-olive); font-weight: 600;"><strong>Condición:</strong> Señal de 25€ 100% bonificada en clínica.</p>
        </div>

        <div style="margin-top: 20px; max-width: 460px; margin-left: auto; margin-right: auto;">
          <a href="https://wa.me/34687439710?text=Hola%20Valeria,%20acabo%20de%20solicitar%20mi%20cita%20con%20c%C3%B3digo%20${code}%20para%20el%20d%C3%ADa%20${state.wizard.date}%20a%20las%20${state.wizard.time}." target="_blank" rel="noopener" class="btn btn-olive" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none; padding: 12px; font-size: 0.875rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.035-.478-1.579-.655-2.586-2.28-2.665-2.385-.078-.105-.646-.86-.646-1.637 0-.776.406-1.157.55-1.314.144-.158.314-.197.419-.197.105 0 .21.002.302.007.098.006.229-.037.359.276.132.316.452 1.104.492 1.183.04.079.066.171.013.276-.052.105-.079.171-.157.263-.079.092-.165.205-.236.276-.079.079-.161.164-.069.322.092.158.409.674.877 1.091.603.536 1.111.702 1.269.781.158.079.25.066.342-.04.092-.105.394-.46.499-.618.105-.158.21-.132.355-.079.144.053.918.434 1.076.513.158.079.263.118.302.184.039.066.039.381-.105.786z"/></svg>
            Confirmar por WhatsApp con Valeria
          </a>
        </div>
      </div>
    `;
    footer.innerHTML = `
      <button class="btn btn-secondary" style="margin: 0 auto; padding: 10px 28px; font-size: 0.875rem;" onclick="closeBookingModal()">Volver a la web</button>
    `;
  }
}

function openWhatsAppBooking() {
  const phone = '34687439710';
  const text = encodeURIComponent('¡Hola Valeria! Me gustaría reservar una cita en Clínica CreArT para diagnóstico o tratamiento en Calle de Alcalá 102.');
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

function selectPaymentMethod(method) {
  state.wizard.paymentMethod = method;
  updateWizardUI();
}

function selectBookingType(type) {
  state.wizard.bookingType = type;
  if (type === 'valoracion') {
    state.wizard.selectedTreatment = 'valoracion-gratis';
    state.wizard.treatmentName = 'Valoración de Diagnóstico (20 min)';
    state.wizard.priceLabel = 'Gratuita (0€)';
  } else {
    state.wizard.selectedTreatment = 'power-hyaluronic';
    state.wizard.treatmentName = 'Power Hyaluronic Skeyndor';
    state.wizard.priceLabel = '60€ (Señal de 25€ requerida)';
  }
  updateWizardUI();
}

function selectTreatmentOption(id, name, price) {
  state.wizard.selectedTreatment = id;
  state.wizard.treatmentName = name;
  state.wizard.priceLabel = `${price} (Señal 25€)`;
  updateWizardUI();
}

function selectSlot(time) {
  state.wizard.time = time;
  updateWizardUI();
}

function wizardNext() {
  state.wizard.step++;
  updateWizardUI();
}

function wizardPrev() {
  if (state.wizard.step > 1) {
    state.wizard.step--;
    // If going back from Step 3 when bookingType was valoracion, go straight to Step 1
    if (state.wizard.step === 2 && state.wizard.bookingType === 'valoracion') {
      state.wizard.step = 1;
    }
    updateWizardUI();
  }
}

function submitBooking() {
  const nameInput = document.getElementById('clientName');
  const phoneInput = document.getElementById('clientPhone');
  if (nameInput && !nameInput.value.trim()) {
    alert('Por favor, indica tu nombre.');
    nameInput.focus();
    return;
  }
  if (phoneInput && !phoneInput.value.trim()) {
    alert('Por favor, indica tu teléfono o WhatsApp.');
    phoneInput.focus();
    return;
  }

  state.wizard.step = 5;
  updateWizardUI();
}

// ==============================================================================
// VALERIA AI CONCIERGE LOGIC
// ==============================================================================

const VALERIA_KNOWLEDGE = {
  greetings: '¡Hola! Soy Valeria, la asistente digital de Clínica CreArT by Gabriela Arellano. ¿En qué puedo orientarte hoy? Puedes preguntarme por tratamientos, nuestro diagnóstico bonificado de 20 min, política de señal y cancelación, o cómo llegar a Alcalá 102.',
  valoracion: 'En CreArT el Diagnóstico Clínico de 20 minutos con Gabriela Arellano está 100% BONIFICADO. Al reservar solicitamos una señal de compromiso de 25€ que se descuenta íntegramente de tu primer tratamiento o producto en clínica. Si decides cuidarte, ¡la valoración es completamente gratis!',
  senal: 'Para asegurar tu turno y garantizar que la cabina esté esterilizada y lista exclusivamente para ti, solicitamos una señal de 25€. Esta señal se descuenta íntegramente del coste de tu sesión o producto el día de tu cita.',
  noshow: 'Nuestra política de asistencia protege la puntualidad del centro: puedes modificar o cambiar de fecha sin ningún coste con al menos 24 horas de antelación. En caso de incomparecencia sin aviso (no-show), la señal de 25€ no es reembolsable para compensar el bloqueo de sala y el tiempo de la especialista.',
  ubicacion: 'Estamos en pleno Barrio de Salamanca: Calle de Alcalá 102, 1º A, Madrid (28009). A solo 50 metros del Metro Goya (Líneas 2 y 4) y muy cerca del WiZink Center y El Corte Inglés de Goya.',
  horarios: 'Nuestros horarios de atención son:\n• Lunes y Martes: 11:00 a 19:00\n• Miércoles: 10:00 a 19:00\n• Jueves y Viernes: 10:00 a 20:00\n• Sábados: 10:00 a 14:00\n• Domingos: Cerrado.',
  faciales: 'Nuestros tratamientos faciales estrella utilizan cosmética médica Skeyndor:\n1. Power Hyaluronic (60€, 60 min): Hidratación profunda y atenuación de líneas.\n2. Power C+ Iluminador (65€, 60 min): Vitamina C antioxidante para pieles apagadas o con manchas.\n¿Te gustaría reservar tu diagnóstico para que analicemos tu piel?',
  laser: 'Nuestra depilación láser de diodo de alta potencia es apta para todo tipo de pieles y vello. Contamos con cabezal refrigerado para que la sesión sea cómoda e indolora. Los precios van desde 25€ por zona.',
  equipo: 'Nuestra clínica está dirigida por Gabriela Arellano, oficial de estética con más de 10 años de experiencia en Madrid, acompañada por Daniela y por mí en la atención a nuestros pacientes. Contamos con más de 1.470 opiniones con un 4.9/5 en Treatwell.'
};

function setupValeriaDrawer() {
  const trigger = document.getElementById('valeriaTrigger');
  const headerBtn = document.getElementById('valeriaHeaderBtn');
  const drawer = document.getElementById('valeriaDrawer');
  const overlay = document.getElementById('valeriaOverlay');
  const closeBtn = document.getElementById('valeriaClose');
  const sendBtn = document.getElementById('chatSendBtn');
  const input = document.getElementById('chatInput');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    if (state.chat.history.length === 0) {
      addBotMessage(VALERIA_KNOWLEDGE.greetings);
    }
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }

  if (trigger) trigger.addEventListener('click', openDrawer);
  if (headerBtn) headerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  if (sendBtn && input) {
    sendBtn.addEventListener('click', () => {
      handleUserChat(input.value);
      input.value = '';
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleUserChat(input.value);
        input.value = '';
      }
    });
  }
}

function handleUserChat(text) {
  if (!text || !text.trim()) return;
  const userText = text.trim();
  addUserMessage(userText);

  setTimeout(() => {
    const lower = userText.toLowerCase();
    let reply = '';

    if (lower.includes('valoracion') || lower.includes('gratis') || lower.includes('gratuita') || lower.includes('diagnostico')) {
      reply = VALERIA_KNOWLEDGE.valoracion + '<br><br><button class="btn btn-primary" style="padding: 6px 14px; font-size: 0.8125rem; margin-top: 6px;" onclick="openBookingModal(\'valoracion\')">Reservar diagnóstico bonificado (Señal 25€)</button>';
    } else if (lower.includes('no-show') || lower.includes('incomparecencia') || lower.includes('no vengo') || lower.includes('cancelar') || lower.includes('cancelacion') || lower.includes('anular')) {
      reply = VALERIA_KNOWLEDGE.noshow;
    } else if (lower.includes('señal') || lower.includes('acconto') || lower.includes('25') || lower.includes('deposito') || lower.includes('pago')) {
      reply = VALERIA_KNOWLEDGE.senal;
    } else if (lower.includes('donde') || lower.includes('ubicacion') || lower.includes('metro') || lower.includes('goya') || lower.includes('alcala') || lower.includes('direccion') || lower.includes('llegar') || lower.includes('mapa')) {
      reply = VALERIA_KNOWLEDGE.ubicacion;
    } else if (lower.includes('horario') || lower.includes('sabado') || lower.includes('abierto') || lower.includes('cuando')) {
      reply = VALERIA_KNOWLEDGE.horarios.replace(/\n/g, '<br>');
    } else if (lower.includes('facial') || lower.includes('skeyndor') || lower.includes('limpieza') || lower.includes('vitamina') || lower.includes('arruga')) {
      reply = VALERIA_KNOWLEDGE.faciales;
    } else if (lower.includes('laser') || lower.includes('depilacion') || lower.includes('diodo') || lower.includes('vello')) {
      reply = VALERIA_KNOWLEDGE.laser;
    } else if (lower.includes('gabriela') || lower.includes('equipo') || lower.includes('quienes') || lower.includes('daniela')) {
      reply = VALERIA_KNOWLEDGE.equipo;
    } else if (lower.includes('cita') || lower.includes('reservar') || lower.includes('pedir') || lower.includes('turno')) {
      reply = '¡Estupendo! Puedes reservar tu cita aquí mismo en la web con nuestro asistente paso a paso:<br><br><button class="btn btn-primary" style="padding: 6px 14px; font-size: 0.8125rem;" onclick="openBookingModal(\'valoracion\')">Abrir selector de citas</button>';
    } else {
      reply = 'Gracias por tu consulta. En CreArT cuidamos cada detalle. ¿Deseas saber más sobre nuestro diagnóstico bonificado de 20 min, nuestros tratamientos Skeyndor, o prefieres reservar tu cita para que Gabriela analice tu caso?';
    }

    addBotMessage(reply);
  }, 450);
}

function addUserMessage(msg) {
  const container = document.getElementById('chatMessages');
  if (!container) return;
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble user';
  bubble.textContent = msg;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function addBotMessage(html) {
  const container = document.getElementById('chatMessages');
  if (!container) return;
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble assistant';
  bubble.innerHTML = html;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function askValeria(topic) {
  if (topic === 'valoracion') {
    handleUserChat('¿Qué incluye la valoración gratuita?');
  } else if (topic === 'ubicacion') {
    handleUserChat('¿Dónde estáis y cómo llegar?');
  } else if (topic === 'senal') {
    handleUserChat('¿Cómo funciona la señal de 25€?');
  } else if (topic === 'facial') {
    handleUserChat('Recomiéndame un tratamiento facial');
  } else if (topic === 'cita') {
    handleUserChat('Quiero pedir una cita ahora');
  }
}

function filterWizardCat(category) {
  state.wizardFilterCat = category;
  updateWizardUI();
}
