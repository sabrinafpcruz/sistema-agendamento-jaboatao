import { AppointmentSchedule } from "./components/appointment-schedule";
import { AppointmentCalendar } from "./components/calender";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="max-w-[1270px] mx-auto py-6 px-12 flex-col justify-start">
      <Header/>
      <div>
        <AppointmentSchedule/>
      </div>
      <AppointmentCalendar/>
    </div>
  )
}