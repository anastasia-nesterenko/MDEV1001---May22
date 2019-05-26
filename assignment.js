const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(function(){
    db.run("CREATE TABLE Classroom (ID NUMBER, Building TEXT, Room_number NUMBER, Capacity NUMBER)");
    db.run("INSERT INTO Classroom VALUES(10101, 'Packard', 101, 500)");
    db.run("INSERT INTO Classroom VALUES(10102, 'Painter', 514, 10)");
    db.run("INSERT INTO Classroom VALUES(10103, 'Taylor', 3128, 70)");
    db.run("INSERT INTO Classroom VALUES(10104, 'Watson', 100, 30)");
    db.run("INSERT INTO Classroom VALUES(10105, 'Watson', 120, 50)");

    db.run("CREATE TABLE Department (ID NUMBER, Dept_name TEXT, Building TEXT, Budget NUMBER)");
    db.run("INSERT INTO Department VALUES(10001, 'Biology', 'Watson', 90000)");
    db.run("INSERT INTO Department VALUES(10001, 'Comp. Sci.', 'Taylor', 100000)");
    db.run("INSERT INTO Department VALUES(10001, 'Elec. Eng.', 'Taylor', 85000)");
    db.run("INSERT INTO Department VALUES(10001, 'Finance', 'Painter', 120000)");
    db.run("INSERT INTO Department VALUES(10001, 'History', 'Painter', 50000)");
    db.run("INSERT INTO Department VALUES(10001, 'Music', 'Packard', 80000)");
    db.run("INSERT INTO Department VALUES(10001, 'Physics', 'Watson', 90000)");

    db.each("SELECT * FROM Classroom", function(err, row){
        if (err)
            console.log(err);
        console.log(row);
    });

    db.each("SELECT * FROM Department", function(err, row){
        if (err)
            console.log(err);
        console.log(row);
    });


})