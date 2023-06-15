// var button = document.querySelector('.navButton')
// var button2 = document.querySelector('.navButton2')
// var navItems = document.querySelector('.navItems')
// button.addEventListener("click", () => {
//   navItems.style.height = "260px"
//   button.classList.toggle("hidden")
//   button2.classList.toggle("hidden")
// })
// button2.addEventListener("click", () => {
//   navItems.style.height = "0px"
//   button.classList.toggle("hidden")
//   button2.classList.toggle("hidden")
// })

btn = document.querySelector('button.menu-button');
btn_close = document.querySelector('button.menu-close');
items = document.querySelector('.menu-items');

btn.addEventListener("click",function(){
    items.classList.toggle("hidden");
    this.classList.toggle("hidden");
    btn_close.classList.toggle("hidden");
});
btn_close.addEventListener("click",function(){
    items.classList.toggle("hidden");
    this.classList.toggle("hidden");
    btn.classList.toggle("hidden");
});

const servicesList = [
    'Typing a new job offer letter',
    'Pre- Approval for work permit payment fees',
    'New Electronic work permit',
    'Submit New Electronic work Permit & Mission Electronic Work Application',
    'Renew Electronic Work Permit',
    'Submit Renew Labor card / work permit application',
    'Electronic Work permit/Pre Approval for work permit fines.',
    'Updates Establishment information.',
    'Company Fines',
    'Typing Temporary Pre Approval for Work Permit Application',
    'Receiving Transaction for withdraw abscond',
    'Add Electronic Pro.',
    'New E-Sign Card for Owners.',
    'New E-Sign Card for PRO.',
    'Activate new eSign card for Owner/PRO.',
    'Replace Old eSign Card with New.',
    'Print request for new eSign Card.',
    'Guide and Raise Awareness to Employers and Employees.',
    'Provide Labor Certificates Issuance Services.',
    'Distribute & Deliver Awareness Leaflets to Employees & Employers.'
]

const pricedServices = [
    {
        name: 'Typing a new job offer letter',
        price: 103,
        requirements: [
            ' Passport copy of applicant',
            ' E-signature card',
            'Name of applicant in Arabic and English'
        ]
    },
    {
        name: 'Renew Electronic Work Permit (Typing of Labor contract)',
        price: 103,
        requirements: [
            'Old visa of the Applicant',
            'Photo of the Applicant',
            ' E-signature Card'
        ]
    },
    {
        name: 'New Electronic work permit & Mission Electronic Work Permit application',
        price: 103,
        requirements: [
            'Passport Copy',
            'Labor Card Number',
            'Employement visa stamped with entry date or changed status with approval date',
            'Photo of applicant',
            'E-Signature card'
        ]
    },
    {
        name: 'Submit New Electronic work Permit & Mission Electronic Work Application',
        price: 203,
        requirements: [
            'Attend the Lecture',
            'The final labor contract signed/finger stamped',
            'Employment Visa'
        ]
    },
    {
        name: 'Replace Old eSign Card with New.',
        price: 123,
        requirements: [
            'Old E-signature Card',
            'Original Emirates ID',
        ]
    },
    //aohouihauh
    {
        name: 'Electronic Work permit/Pre Approval for work permit fines.',
        price: 43,
        requirements: [

        ]
    },
    {
        name: 'New Smart E-Signature Card',
        price: 353,
        requirements: [
            'Original Emirates ID of Owner',
            'Person Number'
        ]
    },
    {
        name: 'Printing of Smart E-signature Card',
        price: 0,
        requirements: [
            'Transaction Number (MB)',
        ]
    },
    {
        name: 'Typing Temporary Pre Approval for Work Permit Application',
        price: 83,
        requirements: [
            ' E-signature Card',
            'Passport copy',
            'Visa copy',
            'Personal photo',
            'Transaction Number0 (MB)'
        ]
    },
    {
        name: 'Receiving Transaction for withdraw abscond',
        price: 83,
        requirements: [
            'Lab Card number',
            'Visa Copy (Residency)'
        ]
    },
    {
        name: 'Submit Temporary/Probational Pre Approval for Work Permit',
        price: 83,
        requirements: [
            'E-signature Card',
            'Passport copy',
            'Visa copy',
            'Personal photo',
            'Transaction Number0 (MB)'
        ]
    },
    {
        name: 'Labour Case Cancellation',
        price: 83,
        requirements: [
            'Company code',
            'Lab Card number',
            'Passport copy',
            'Visa copy'
        ]
    },
    {
        name: 'Receiving legal compliant from both sides',
        price: '',
        requirements: [
            'Emirates ID',
            'Passport copy',
            'Visa Copy (Residency)',
            'Labour contrac'
        ]
    },
    {
        name: 'E-signature / PRO card activation',
        price: 0,
        requirements: [
            'Original Emirates ID of the Owner or PRO',
            'Printed smart E-signature card',
            'Presence of the Owner for the fingerprints',
            'Presence of the PRO for the fingerprints'
        ]
    },
    {
        name: 'Submit renew labor card application',
        price: '',
        requirements: [
            ' The final labour contract signed or stamped * Price varies according to company category and degree Low skilled Worker	Skilled worker',


            ' A- 1063 - 753 AED',

            'B- 1413 - 1253 AED',

            'C- 1813 - 1753 AED',

            'D- 2363 - 2253 AED'
        ]
    },
    {
        name: 'Withdraw Abscond Application',
        price: 83,
        requirements: [
            'Lab Card Number',
            'Visa Copy (Residency)'
        ]
    },

]