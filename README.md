# Simple Countdown

A simple countdown timer that displays the number of days remaining until a specified date. (can be used in a widget or embed)

## URL Parameters

Customize the timer by adding these parameters to the URL:

- `date`: **Required**  
  The target date in `YYYYMMDD` format (e.g., `20231225` for December 25, 2023)

- `theme`: *Optional*  
  - `dark`: Dark theme with light text  
  - (Any other value or omitted): Light theme with dark text

- `border`: *Optional*  
  - `on`: Shows a border around the timer  
  - (Any other value or omitted): No border

## Examples

- Basic countdown:  
  `?date=20231225`

- Dark theme with border:  
  `?date=20231225&theme=dark&border=on`

- Light theme without border:  
  `?date=20231225&theme=light`  
  (or just `?date=20231225`)

## Error Handling

- Displays "❌" if:  
  - No date is provided  
  - Date format is invalid (not 8 digits)  
  - Target date is in the past
