#!  /usr/bin/env node
import Table from 'cli-table';
const table = new Table({
    head: ['Name', 'Age', 'Gender', 'Country', "Roll Number", ' subject'],
    colWidths: [12, 12, 12, 12, 12, 12]
});
table.push(['zakia', "30", 'female', 'Pakistan', '00141704', 'python'], ['alia', "25", 'Female', 'USA', '0012345', 'typescript'], ['ayesha', "40", 'female', 'Canada', '189745', 'css']);
console.log(table.toString());
