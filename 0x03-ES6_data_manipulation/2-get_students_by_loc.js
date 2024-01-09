export default function getStudentsByLocation(listStudents, locationCity) {
  return listStudents.filter(({ location }) => location === locationCity);
}
