

const formattedHour = (date: number) => {

    const formattedDate = new Date(date);

    const hours = formattedDate.getHours(); // Obtiene la hora
    const minutes = formattedDate.getMinutes(); // Obtiene los minutos
    const seconds = formattedDate.getSeconds(); // Obtiene los segundos

    return {hours, minutes, seconds} 
}

export default formattedHour