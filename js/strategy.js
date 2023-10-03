/**
 * El patrón Strategy se puede entender mejor mediante una analogía de la vida real: la elección de transporte para viajar.

Imagina que eres una persona que necesita desplazarse de un lugar a otro, y tienes varias opciones de transporte, como caminar, andar en bicicleta o tomar un automóvil. Cada opción de transporte es una estrategia diferente para llegar a tu destino, y cada una tiene sus propias ventajas y desventajas.

Caminar: Es una estrategia de transporte. Es bueno para distancias cortas, es ecológico, pero puede ser lento si el destino está lejos.

Bicicleta: Otra estrategia. Es más rápido que caminar y aún es amigable con el medio ambiente. Es ideal para distancias intermedias, pero podría no ser tan eficiente para distancias largas.

Automóvil: Una tercera estrategia. Es rápido y conveniente para distancias largas, pero puede ser costoso y menos ecológico.

Aquí, tú eres el "Contexto" que necesita elegir una estrategia de transporte (caminar, bicicleta o automóvil) según la situación. Si necesitas ir a la tienda de la esquina, puedes optar por caminar (usar la estrategia de caminar). Si tienes una reunión en otra ciudad, probablemente elijas el automóvil (usar la estrategia del automóvil). La clave es que puedes cambiar de estrategia (de transporte) según lo necesites, sin tener que modificar tu propio comportamiento.

En este escenario, el patrón Strategy se aplica en la vida real de la misma manera que en la programación: te permite elegir diferentes estrategias (en este caso, modos de transporte) según las circunstancias, sin tener que cambiar radicalmente tu enfoque o comportamiento general.
 */

// Definimos las estrategias (modos de transporte)

/**
 * @class WalkingStrategy
 * @description Caminar
 */
class WalkingStrategy {
  travel() {
   return "Caminando a tu destino";
  }
}

/**
 * @class BicycleStrategy
 * @description Bicicleta
 */
class BicycleStrategy {
  travel() {
    return "Andando en bicicleta a tu destino";
  }
}

/**
 * @class CarStrategy
 * @description Automovil
 */
class CarStrategy {
  travel() {
    return "Viajando en automovil a tu destino"
  }
}

// Definimos el context que elige la estrategia de transporte
/**
 * @class Context Traveler
 * @description Contexto
 */
class Traveler {

  constructor(strategy) {
    this.strategy = strategy;
  }

  // Cambia la estrategia de transporte
  choseTransportationStrategy(strategy) {
    this.strategy = strategy;
  }

  // Viaja a tu destino
  goToDestination() {
    return this.strategy.travel();
  }

}

// Uso
const persona = new Traveler(new WalkingStrategy());

console.log(persona.goToDestination()); // Caminando a tu destino

persona.choseTransportationStrategy(new CarStrategy());
console.log(persona.goToDestination()); // Viajando en automovil a tu destino

