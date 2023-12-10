import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", firstname: "Michael", surname: "Muster", departement: "Planning", quality: 10, knowledge: 20, communication: 10, team: 50, learning: 30, total: 24 },
    { id: "2", firstname: "Mike", surname: "Patrick", departement: "Planning", quality: 20, knowledge: 20, communication: 10, team: 50, learning: 40, total: 28 },
    { id: "3", firstname: "Tomas", surname: "Meier", departement: "Strategie", quality: 30, knowledge: 20, communication: 10, team: 50, learning: 20, total: 26 },
];

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        employeeAdded(state, action) {
            state.push(action.payload);
        },
        employeeDeleted(state, action) {
            const { id } = action.payload;
            const employee = current(state)
            const currentEmployee = employee.filter((employee) => employee.id !== id);
            return currentEmployee;
        },
        employeeEdit(state, action) {
            const { id, firstname, surname, departement, quality, knowledge, communication, team, learning, total } = action.payload;
            const employee = current(state);
            //console.log('employeeEdit', employee)

            let updateData = {
                id: id, firstname: firstname, surname: surname, departement: departement, quality: quality, knowledge:knowledge, communication: communication, team: team, learning: learning, total: total
            }

            updateData = employee.map((item => {
                if (item.id === updateData.id) {
                    return Object.assign({}, item, { id: id, firstname: firstname, surname: surname, departement: departement, quality: quality, knowledge: knowledge, communication: communication, team: team, learning: learning, total: total })
                }

                return item
            }))

            return updateData
        }
    },
});

export const { employeeAdded, employeeEdit, employeeDeleted } = employeesSlice.actions;

export default employeesSlice.reducer;