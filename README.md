# Simple Countdown

A simple countdown timer that displays the number of days remaining until a specified date. (can be used in a widget or embed)

## URL Parameters

Customize the timer by adding these parameters to the URL:

- `date`: **Required**  
  The target date in `YYYYMMDD` format (e.g., `20260606` for June 6, 2026)

- `theme`: *Optional*  
  - `dark`: Dark theme with light text  
  - (Any other value or omitted): Light theme with dark text

- `border`: *Optional*  
  - `on`: Shows a border around the timer  
  - (Any other value or omitted): No border

## Examples

### Basic countdown
https://abssdghi.github.io/SimpleCountdown/?date=20260606

### Dark theme withou border
https://abssdghi.github.io/SimpleCountdown/?date=20260606&theme=dark

### Dark theme with border
https://abssdghi.github.io/SimpleCountdown/?date=20260606&theme=dark&border=on

### Light theme with border
https://abssdghi.github.io/SimpleCountdown/?date=20260606&border=on

### Error Case (invalid date)
https://abssdghi.github.io/SimpleCountdown/?date=invalid

## Error Handling

- Displays "❌" if:  
  - No date is provided  
  - Date format is invalid (not 8 digits)  
  - Target date is in the past
