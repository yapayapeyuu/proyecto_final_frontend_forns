
export const formatTime = (date) => {
    return date.getHours() + ":" + date.getMinutes().toString().padStart(2, '0');
};


export const getBotResponse = (userName, userText) => {
    const respuestas = [
        `¡Wow ${userName}! ¿Cómo hiciste "${userText}" esto?`,
        `Me aburro, ${userName}... ¿vamos al techo?`,
        "No le digas a Karen que rompí otra planta.",
        "¿Cuando vuelve Karen?",
        `¡Hola, ${userName}! ¿Cómo empezó tu michidía?`,
        `¡Dale, ${userName}! Mañana hablamos.`
    ];
    return respuestas[Math.floor(Math.random() * respuestas.length)];
};