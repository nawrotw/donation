#Todo
- !!!add GitHub action for running tests
- ask about fonts, find: 'font-family:'
- review colors
- typography inconsistencies

#Open questions
DateInput:
    - Allow only future months - what about current month? with only 1 donation

Is first donation done immediate on submit?
     - now: 2024-05, monthUntil: 2024-05, donation: 1 => totalDonation === 1 - is this valid?
     - now: 2024-05, monthUntil: 2024-06, donation: 1 => totalDonation === 2?
                
[CornerCase] when month changed e.g. user changed untilMonth at 2024-04-30T23:59:59.900Z 
What is more important to the user:
1. Total donated amount - donation last month might change
2. Donation last month - totalAmount might change
