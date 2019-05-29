const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(function(){
    db.run("CREATE TABLE Instructor (ID NUMBER, Name TEXT, Dept_name TEXT, Salary NUMBER)");

    db.run("INSERT INTO Instructor VALUES(10101, 'Dmitriev', 'Mathematics', 100000)");
    db.run("INSERT INTO Instructor VALUES(10102, 'Korablev', 'Mathematics', 110000)");
    db.run("INSERT INTO Instructor VALUES(10103, 'Demetyev', 'Mathematics', 190000)");
    db.run("INSERT INTO Instructor VALUES(10104, 'Plehanova', 'Mathematics', 160000)");

    db.run("INSERT INTO Instructor VALUES(10105, 'Petrov', 'Physics', 100000)");
    db.run("INSERT INTO Instructor VALUES(10106, 'Ivanov', 'Physics', 100000)");
    db.run("INSERT INTO Instructor VALUES(10107, 'Kuznezova', 'Physics', 90000)");
    db.run("INSERT INTO Instructor VALUES(10108, 'Niche', 'Physics', 110000)");

    db.run("INSERT INTO Instructor VALUES(10109, 'Potapov', 'Computer Science', 100000)");
    db.run("INSERT INTO Instructor VALUES(10110, 'Voronzov', 'Computer Science', 100000)");
    db.run("INSERT INTO Instructor VALUES(10111, 'Makarov', 'Computer Science', 90000)");
    db.run("INSERT INTO Instructor VALUES(10112, 'Skripov', 'Computer Science', 110000)");

    db.run("CREATE TABLE Subject (Instructor_id NUMBER, Course_id TEXT, Sec_id TEXT, Semester TEXT, Year NUMBER)");
    db.run("INSERT INTO Subject VALUES(10101, 'M-101', 1,  'Fall', 2009)");
    db.run("INSERT INTO Subject VALUES(10102, 'M-315', 1,  'Spring', 2010)");
    db.run("INSERT INTO Subject VALUES(10103, 'M-347', 1,  'Fall', 2019)");
    db.run("INSERT INTO Subject VALUES(10102, 'M-201', 1,  'Spring', 2009)");
    db.run("INSERT INTO Subject VALUES(10101, 'M-115', 1,  'Spring', 2009)");
    db.run("INSERT INTO Subject VALUES(10104, 'M-101', 1,  'Winter', 2017)");

    db.run("INSERT INTO Subject VALUES(10105, 'PH-101', 1,  'Fall', 2009)");
    db.run("INSERT INTO Subject VALUES(10106, 'PH-315', 1,  'Spring', 2010)");
    db.run("INSERT INTO Subject VALUES(10105, 'PH-347', 1,  'Fall', 2019)");
    db.run("INSERT INTO Subject VALUES(10106, 'PH-201', 1,  'Spring', 2009)");
    db.run("INSERT INTO Subject VALUES(10107, 'PH-115', 1,  'Spring', 2009)");
    db.run("INSERT INTO Subject VALUES(10108, 'PH-101', 1,  'Winter', 2017)");

    db.run("INSERT INTO Subject VALUES(10109, 'CS-101', 1,  'Fall', 2009)");
    db.run("INSERT INTO Subject VALUES(10110, 'CS-315', 1,  'Spring', 2010)");
    db.run("INSERT INTO Subject VALUES(10109, 'CS-347', 1,  'Fall', 2019)");
    db.run("INSERT INTO Subject VALUES(10111, 'CS-201', 1,  'Spring', 2009)");
    db.run("INSERT INTO Subject VALUES(10112, 'CS-115', 1,  'Spring', 2009)");
    db.run("INSERT INTO Subject VALUES(10111, 'CS-101', 1,  'Winter', 2017)");

    db.each("SELECT * FROM Instructor", function(err, row){
        if (err)
            console.log(err);
        console.log(row);
    });
})