# textgraph
A text based graphing calculator.[See it live here.](https://augustgrantham.github.io/textgraph/)


## Key Features

- Graph different functions in a text based format
- Choose from a variety of color layouts

## Implementation

### Tech Used
- **Javascript** User input, calculations and output
- **HTML & CSS** Front end, styling

Written almost completely in Javascript, textGraph creates a grid of cells and uses conditional logic to determine if it's a point on the function, a point on the axis, or just a blank space. Using switch statements it can switch between numerious different function types.

## Optimizations

### Reformatting
Early on the project suffered from unneccesarily bundled code. By seperating the string generation and graph printing code into two functions, I was able to improve performance, make the code more modular, and enhance future development.

## Lessons Learned:

**Know Your Syntax** I spent hours at the beginning of this project failing to understand why my quadratic function would not graph correctly. The issue turned out to be my use of the "^" operator when trying to raise x to the second power. This is NOT a power operator in Javascript, but a binary expression operator for XOR. Once I replaced the carrot top symbol with the correct operator "**" it worked perfectly.
## Getting Started
To run this web application locally you can either 

1. Download the zipped project 
or 
2. Clone the repository from github.

Then simply open the index.html file in your web browser of choosing, and open the project folder in any code editor to modify it how you like.

Connect with me on [LinkedIn!](https://www.linkedin.com/in/august-grantham-364a3b2b3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmOSoKcrrTw6070%2B6LXdcMQ%3D%3D)

