
const formatedDataWithString = (date: number) => {
    const formattedDate = new Date(date);

    // Día de la semana en letras
    const dayOfWeek = formattedDate.toLocaleString('en-US', { weekday: 'short' });
    
    // Mes en letras
    const month = formattedDate.toLocaleString('en-US', { month: 'short' });
    
    // Año
    const year = formattedDate.getFullYear();
    
    // Día del mes
    const dayOfMonth = formattedDate.getDate();

    return {dayOfWeek, month, year, dayOfMonth }
}

export default formatedDataWithString