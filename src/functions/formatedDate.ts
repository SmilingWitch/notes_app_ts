
export const formatedDate = (date: number) => {

    const formated_date = new Date(date); // Crear un objeto D
    const day = formated_date.getDate(); // Obtener el día del mes (1-31)
    const month = formated_date.getMonth() + 1;
    const year = formated_date.getFullYear()

    return {day, month, year}
}