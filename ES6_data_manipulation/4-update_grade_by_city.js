export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => {
    if (student.location === city) {
      return true;
    }
    return false;
  });

  const studentsWithGrades = studentsInCity.map((student) => {
    let gradeObj;
    for (let i = 0; i < newGrades.length; i++) {
      if (newGrades[i].studentId === student.id) {
        gradeObj = newGrades[i];
        break;
      }
    }

    if (gradeObj) {
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: gradeObj.grade,
      };
    } else {
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: 'N/A',
      };
    }
  });

  return studentsWithGrades;
}