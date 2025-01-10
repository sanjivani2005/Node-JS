class Employee {
    fname;
    lname;
    age;
    city;
    
    /*constructor(fname, lname, age, city) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.city = city;
    }*/
    setEmployee(fname, lname, age, city) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.city = city;
    }

    display() {
        console.log("I am " + this.fname + " " + this.lname + " and my age is " + this.age + ". From " + this.city);
    }
}

const objEmployee = new Employee("Sanjivani", "Shende", 20, "Nagpur");
objEmployee.setEmployee("Rushikesh","Shende",20,"Nagpur")
objEmployee.display();
