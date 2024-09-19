import { useState } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";
import { Calendar, DateData } from 'react-native-calendars';
import lighTeme from "../../../lightTheme";
import StyledText from "../../common/StyledText";
import DiaryAppBar from "./DiaryAppBar";
import { EntryListProps } from "../../../types";

interface Event {
  date: string;
  description: string;

}

const CalendarItem = ({navigation, route}: EntryListProps) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [eventDescription, setEventDescription] = useState<string>('');
  const [events, setEvents] = useState<{ [key: string]: Event[] }>({});

  const handleDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);

    console.log(selectedDate)
  };
  

  const handleAddEvent = () => {
    if (selectedDate && eventDescription) {
      const newEvent: Event = {
        date: selectedDate,
        description: eventDescription,
      };

      setEvents((prevEvents) => {
        const updatedEvents = { ...prevEvents };
        if (!updatedEvents[selectedDate]) {
          updatedEvents[selectedDate] = [];
        }
        updatedEvents[selectedDate].push(newEvent);
        return updatedEvents;
      });

      setEventDescription(''); // Limpiar el campo de entrada
    }
  };

  // Formateo de la fecha con mes en letras y año
  const formattedDate = selectedDate
    
    ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',  // 'long' para mostrar el mes en letras
      year: 'numeric',
    })
    : null;

    const dateInMilliseconds = new Date(`${selectedDate}T00:00:00`).getTime();

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        style={styles.theme}
        theme={{
          backgroundColor: lighTeme.colors.grey,
          calendarBackground: lighTeme.colors.grey,
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: lighTeme.colors.secundary,
          dayTextColor: '#b6c1cd',
          textDisabledColor: '#2d4150',
          monthTextColor: '#00adf5',
        }}
        markedDates={{
          ...(selectedDate && { [selectedDate]: { selected: true, marked: true } }),
        }}
      />
      {selectedDate && (
        <View style={styles.eventForm}>
          <StyledText style={styles.label}>{formattedDate}</StyledText>
          {/*<Button title="Agregar evento" onPress={handleAddEvent} />*/}
        </View>
      )}
      {selectedDate && events[selectedDate] && (
        <View style={styles.eventsList}>
          <Text style={styles.label}>Eventos para {formattedDate}:</Text>
          {events[selectedDate].map((event, index) => (
            <Text key={index} style={styles.eventItem}>
              {event.description}
            </Text>
          ))}
        </View>
      )}
      <DiaryAppBar navigation={navigation} route={route} date = {dateInMilliseconds}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: lighTeme.colors.primary },
  eventForm: { marginTop: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10, borderRadius: 4 },
  eventsList: { marginTop: 20 },
  eventItem: { fontSize: 14, marginVertical: 5, color: '#555' },
  theme: {
    backgroundColor: lighTeme.colors.grey,
    borderRadius: 20,
  },
});

export default CalendarItem;
