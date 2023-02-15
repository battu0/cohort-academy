const printAllEnrollment = require('../printAllEnrollment');

test('print group enrollments', () => {
    const group = {
        name: 'Cekirgeler',
        members: [{
            name: 'Hande'
        }],
        enrollments: [{
            group: {name: 'Cekirgeler'},
            course: {name: 'Discrete Mathematics'},
            enrollmentDate: '25 February, 2022'
        }]
    }

    const consoleSpy = jest.spyOn(console, 'log')
    
    printAllEnrollment(group)

    expect(consoleSpy).toHaveBeenCalledWith('Cekirgeler has enrolled the course Discrete Mathematics on 25 February, 2022.')
    
    consoleSpy.mockRestore()
})

test('print that a group has no enrollments', () => {
    const group = {
        name: 'Akrepler',
        members: [{
            name: 'Michael'
        }],
        enrollments: []
    }

    const consoleSpy = jest.spyOn(console, 'log')

    printAllEnrollment(group)

    expect(consoleSpy).toHaveBeenCalledWith('Akrepler has no enrollments yet.')

    consoleSpy.mockRestore()
})