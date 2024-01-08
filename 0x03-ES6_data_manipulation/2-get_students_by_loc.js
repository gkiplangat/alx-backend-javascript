export default function getStudentsByLocation(listStudents, location_city) {
  return listStudents.filter(({ location }) => location === location_city);
}
