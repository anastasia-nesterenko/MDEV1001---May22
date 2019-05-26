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

/*     db.each("SELECT * FROM Instructor", function(err, row){
        if (err)
            console.log(err);
        console.log(row);
    });

    db.each("SELECT Name FROM Instructor", function(err, row){
        if (err)
            console.log(err);
        console.log(row);
    });
 */
    /*db.each("SELECT DISTINCT Dept_name FROM Instructor", function(err, row){
        if (err)
            console.log(err);
        console.log(row.Dept_name);
    });
*/
 /*   db.each("SELECT Name FROM Instructor WHERE Salary>110000 AND Dept_name='Mathematics'", function(err, row){
        if (err)
            console.log(err);
        console.log(row);
    });*/
    //console.log(db.get("SELECT Name FROM Instructor WHERE Salary>110000")+"have a high salary")
    /* let results = new Array();
    db.each(
        "SELECT Name FROM Instructor WHERE Salary>110000",
        function(err, row){
            results.push(row.Name);
        },
        function(err,count){
            let resultString = ""
            for(let i=0; i!=results.length;i++)
            {
                resultString += ","+count;
            }
        console.log(resultString+" have a high salary");
        }
    ); */
/*         let depts = {};
    db.each("SELECT Dept_name, Salary FROM Instructor", function(err,row){

        //depts.push(row.Dept_name, row.Salary);
        if (depts[row.Dept_name] === undefined)
            depts[row.Dept_name] = 0;
        depts[row.Dept_name] += row.Salary;
    }, function(err,count){
        let keys = Object.keys(depts);
        //console.log(keys);
       for (var key in depts){
           //console.log("Department "+ key + " spends " + depts[key] + " every year")
       }
       // console.log(depts["Mathematics"]);
    }); */

    console.log("----");
    db.each("SELECT Dept_name, SUM(Salary) FROM Instructor GROUP BY Dept_name", function(err,row){
        console.log(row);
    });

})
