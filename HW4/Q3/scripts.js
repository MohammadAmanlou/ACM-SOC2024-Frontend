class Student {
    constructor(name, mathScore, physicsScore, chemistryScore) {
        this.name = name;
        this.mathScore = parseFloat(mathScore);
        this.physicsScore = parseFloat(physicsScore);
        this.chemistryScore = parseFloat(chemistryScore);
        this.average = this.calculateAverage();
    }

    calculateAverage() {
        const weights = { math: 3, physics: 2, chemistry: 1 };
        const totalWeight = weights.math + weights.physics + weights.chemistry;
        const weightedSum = (this.mathScore * weights.math) + 
                            (this.physicsScore * weights.physics) + 
                            (this.chemistryScore * weights.chemistry);
        return (weightedSum / totalWeight).toFixed(2);
    }
}

const students = [];

document.getElementById('add-btn').addEventListener('click', () => {
    const name = document.getElementById('student-name').value;
    const mathScore = document.getElementById('math-score').value;
    const physicsScore = document.getElementById('physics-score').value;
    const chemistryScore = document.getElementById('chemistry-score').value;

    if (name && mathScore && physicsScore && chemistryScore) {
        const student = new Student(name, mathScore, physicsScore, chemistryScore);
        students.push(student);
        displayStudents();
        resetForm();
    }
});

document.getElementById('finish-btn').addEventListener('click', () => {
    students.sort((a, b) => b.average - a.average);
    displayStudents();
});

document.getElementById('reset-btn').addEventListener('click', () => {
    students.length = 0;
    displayStudents();
});

function displayStudents() {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '';

    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name} - معدل: ${student.average}`;
        studentList.appendChild(li);
    });
}

function resetForm() {
    document.getElementById('student-name').value = '';
    document.getElementById('math-score').value = '';
    document.getElementById('physics-score').value = '';
    document.getElementById('chemistry-score').value = '';
}
