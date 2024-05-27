# Todo
- Money format only for UsDollars [$] in en-US locale
- ask about fonts, find: 'font-family:'
- review colors
- typography inconsistencies

# Open questions
- DateInput:
  - Allow only future months - what about current month? with only 1 donation
- Is first donation done immediate on submit?
  - now: 2024-05, monthUntil: 2024-05, donation: 1 => totalDonation === 1 - is this valid?
  - now: 2024-05, monthUntil: 2024-06, donation: 1 => totalDonation === 2?
- MobileView:
  - action button at the bottom of the screen? (show resizing)

                
[CornerCase] when month changed e.g. user changed untilMonth at 2024-04-30T23:59:59.900Z 
What is more important to the user:
1. Total donated amount - donation last month might change
2. Donation last month - totalAmount might change
              
# Suggestions
- use named typography in Figma designs e.g. body1, body2 and then use them by name in code
  - much simpler in implementation and less space for a human error
  - reduced total number of different topographies in UI
- use only named colors - it is partially done, but not always
  - define colors palette and use only defined colors - it will help reducing number of colors in UI
  - for darker/lighter colors use some strategy like lighten/darken functions (:hover, :active)

Having finite number of colors and topographies makes UI feel better :-)
