SELECT class.ID as Class_ID, class.name as Class,COUNT(student.ID) as Number_of_Students 
FROM student,class 
WHERE class.ID = student.class_id group by class.name 
