# prepskc-bot
What a bot, this bot autovoted for high school game of the week teams, and got 50k+ votes for schools

## What is it?

Pretty much it's some javascript that I dropped in tampermonkey, and let it run all day just to see what would happen, and well it voted a lot of times

## How to run?

Drop all of the javascript files in tampermonkey and enjoy

## What do the files do?

### refresh.js
 When voting, the prepskc will send no data to me after a certain period of time of voting. This file will refresh the page every 10 seconds to make sure we are still voting, and not sitting there doing nothing 
 
### redo.js
 redo.js just runs a line of code to send it back to the original page to vote after the form posts data. So after the "Thank You" message pops up, it redirects it to the voting page
 
### autovote.js
 autovote.js is the main file that votes. It clicks all the buttons automatically and makes a random email to put into the email portion of the bot
 
 Also a fun portion of the bot, this bot still works after the voting "ends". When they "end" the voting, they actually don't remove any of the form code, or make sure the server doesn't allow any extra votes. They actually just set the display attribute to hidden, so you can actually post data
