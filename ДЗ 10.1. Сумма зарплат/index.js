function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((sum, user) => sum + user.salary, 0);
    }
    else {
        let sum = 0;
        for (let subdep in department) {
            sum += sumSalaries(department[subdep]);
        }
        return sum;
    }
}