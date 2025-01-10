// Normal function with default values to avoid undefined behavior
function add(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log("Normal Function:", add(10, 20)); // Output: 30

// Arrow function with numbers
const addArrow = (n1, n2) => (n1 + n2);
console.log("Arrow function:", addArrow(23, 45)); // Output: 68

// Arrow function to return full name correctly
const fullname = (firstname, lastname) => `${firstname} ${lastname}`;
console.log("Full name is:", fullname("Sanjivani", "Shende")); // Output: "Sanjivani Shende"

// Arrow function to check voting eligibility
const voter = (age) => {
    const result = (age >= 18) ? "Voter" : "Not Voter";
    return result;
};
console.log("Voter eligibility:", voter(20)); // Output: "Voter"
