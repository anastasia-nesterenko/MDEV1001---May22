const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(function(){
    db.run("CREATE TABLE Classroom (ID NUMBER, Building TEXT, Room_number NUMBER, Capacity NUMBER)");
    db.run("INSERT INTO Classroom VALUES(10101, 'Packard', 101, 500)");
    db.run("INSERT INTO Classroom VALUES(10102, 'Painter', 514, 10)");
    db.run("INSERT INTO Classroom VALUES(10103, 'Taylor', 3128, 70)");
    db.run("INSERT INTO Classroom VALUES(10104, 'Watson', 100, 30)");
    db.run("INSERT INTO Classroom VALUES(10105, 'Watson', 120, 50)");

    db.each("SELECT * FROM Classroom", function(err, row){
        if (err)
            console.log(err);
        console.log(row);
    });
})