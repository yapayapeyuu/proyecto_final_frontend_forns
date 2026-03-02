import { formatTime } from "../utils/constants";

const now = new Date();

export const initialMessages = (userName) => ({

    '+54 1131542489': [
        {
            id: 1,
            text: `¡Hola ${userName}! ¿Viste el documental Last Dance?`,
            author: "Rufo",
            time: "10:00"
        },
        {
            id: 2,
            text: "Sí, Mike; es increíble la mentalidad que tenías.",
            author: userName,
            time: "10:05"
        },
        {
            id: 3,
            text: "¡Gracias! El camino al éxito es solitario, pero vale la pena. ¿Estas listo para triunfar?",
            author: "Rufo",
            time: "10:06"
        }
    ],

    '+54 1131542480': [
        {
            id: 1,
            text: `¡Hola ${userName}! Todo bien por Miami. ¿Sale ese asado el fin de semana?`,
            author: "Coco",
            time: "11:30"
        },
        {
            id: 2,
            text: "¡Hola Leo! Obvio, yo llevo los cortes. ¿A qué hora nos vemos?",
            author: userName,
            time: "11:32"
        },
        {
            id: 3,
            text: "Dale, traé lo que quieras que acá prendemos el fuego temprano. Traete a la familia también.",
            author: "Coco",
            time: "11:35"
        },
        {
            id: 4,
            text: "¡Buenísimo! Ahí estaremos. ¿Hace falta que lleve algo para tomar?",
            author: userName,
            time: "11:36"
        }
    ],

    '1-178-578-4458': [
        {
            id: 1,
            text: `¡El trabajo duro siempre vence al talento, ${userName}! ¿Ya entrenaste hoy?`,
            author: "Cristiano Ronaldo",
            time: "08:00"
        },
        {
            id: 2,
            text: "Todavía no Cris, ¡me acabas de motivar!",
            author: userName,
            time: "08:05"
        },
        {
            id: 3,
            text: "¡Muy bien! Sin excusas. Recordá: la disciplina es la clave del éxito. SIUUUM.",
            author: "Cristiano Ronaldo",
            time: "08:07"
        },
        {
            id: 4,
            text: "¡Mañana te cuento cómo me fue en el gimnasio!",
            author: userName,
            time: "08:10"
        }
    ],

    '1-548-568-1249': [
        {
            id: 1,
            text: `¡Hola ${userName}! ¿Viste el pase que metí ayer? ¡Casi como en los viejos tiempos en San Antonio!`,
            author: "Manu Ginóbili",
            time: "14:20"
        },
        {
            id: 2,
            text: "¡Hola Manu! Sí, lo vi. ¡Sos un genio, la vigencia que tenés es increíble!",
            author: userName,
            time: "14:22"
        },
        {
            id: 3,
            text: "Jaja, gracias. Se hace lo que se puede. Hay que seguir enseñándole a los pibes cómo se juega en equipo. ¿Vos cómo venís con el entrenamiento?",
            author: "Manu Ginóbili",
            time: "14:25"
        },
        {
            id: 4,
            text: "Tratando de imitar tu Eurostep, pero casi me doblo un tobillo jaja. ¡Abrazo, ídolo!",
            author: userName,
            time: "14:27"
        }
    ],

    '1-321-471-3281': [
        {
            id: 1,
            text: `¡Ey ${userName}! "King stuff only". Estamos concentrados al 100% para los Playoffs. ¿Viste el partido de anoche?`,
            author: "LeBron James",
            time: "21:00"
        },
        {
            id: 2,
            text: "¡Hola King! Sí, lo vi. Esa volcada que hiciste no tiene sentido para alguien de tu edad. ¡Sos de otro planeta!",
            author: userName,
            time: "21:05"
        },
        {
            id: 3,
            text: "Jaja, trato de cuidar mi cuerpo cada día, esa es la clave. La disciplina no descansa. ¡A por el quinto anillo!",
            author: "LeBron James",
            time: "21:08"
        },
        {
            id: 4,
            text: "¡Sin dudas! Si seguís así, algun día serás como Manu. ¡Suerte en las finales!",
            author: userName,
            time: "21:10"
        }
    ],

    '1-987-306-1234': [
        {
            id: 1,
            text: `¡Hola ${userName}! Es increíble lo alto que se ve todo desde aquí arriba jaja. ¿Cómo va todo por allá abajo?`,
            author: "Victor Wembanyama",
            time: "16:00"
        },
        {
            id: 2,
            text: "¡Hola Wemby! ¡Qué locura debe ser medir 2,24! Acá todo bien, disfrutando de verte jugar, ¡sos un unicornio!",
            author: userName,
            time: "16:02"
        },
        {
            id: 3,
            text: "Jaja, ¡gracias! Intento aprender algo nuevo cada día. La NBA es un desafío gigante, pero estoy listo. ¿Crees que ganaremos el próximo partido?",
            author: "Victor Wembanyama",
            time: "16:05"
        },
        {
            id: 4,
            text: "Si jugás como el otro día, no tengo dudas. ¡Seguí metiendo esos triples imposibles! Suerte, crack.",
            author: userName,
            time: "16:07"
        }
    ],

    '1-876-147-4501': [
        {
            id: 1,
            text: `¡Ey ${userName}! ¿Una carrerita rápida? Te doy 50 metros de ventaja y te gano igual jaja.`,
            author: "Usain Bolt",
            time: "13:00"
        },
        {
            id: 2,
            text: "¡Hola Usain! Ni con 100 metros te gano, sos un rayo. ¿Cómo va esa vida después del retiro?",
            author: userName,
            time: "13:02"
        },
        {
            id: 3,
            text: "Todo bien, disfrutando mucho, pero sigo entrenando un poco para no perder la costumbre. ¡La velocidad está en la sangre! ⚡",
            author: "Usain Bolt",
            time: "13:05"
        },
        {
            id: 4,
            text: "¡Qué grande! Seguís siendo el hombre más rápido de la tierra para todos nosotros. ¡Un abrazo!",
            author: userName,
            time: "13:07"
        }
    ],

    '1-999-126-1422': [
        {
            id: 1,
            text: `Hola ${userName}. El coche se siente increíble hoy en la pista, ¿vienes al box a ver los datos de telemetría?`,
            author: "Lewis Hamilton",
            time: "08:30"
        },
        {
            id: 2,
            text: "¡Hola Lewis! Dejá el Ferrari un rato... te invito a dar una vuelta en mi Fiat 600, ¡eso sí que es adrenalina!",
            author: userName,
            time: "08:35"
        },
        {
            id: 3,
            text: "¡¿Un Fiat 600?! Jajajaja 😂😂😂. ¡Me han contado historias de ese pequeño demonio en Argentina! Es un clásico, pero creo que mis ingenieros tendrían un ataque de pánico si me ven ahí.",
            author: "Lewis Hamilton",
            time: "08:38"
        },
        {
            id: 4,
            text: "Jaja, ¡el 'Fitito' no te va a dejar a pie! Pero bueno, te entiendo, no estás preparado para tanta potencia sin dirección hidráulica.",
            author: userName,
            time: "08:40"
        }
    ],
});

export default initialMessages;