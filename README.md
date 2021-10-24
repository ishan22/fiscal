## Inspiration
We have many relatives who have faced Dementia or Alzheimers. People who suffer from one of these impairments often still need to feel in power of themselves and don't want to be told they can no longer do certain things. It is a common occurrence for patients to make several unneeded online purchases in the spur of the moment. This becomes dangerous for a household because more often than not, they simply want to buy the thing and aren't paying attention to whether or not it arrives. Our team wanted a solution that did not strip their ability to freely search the web, but also allows caregivers to be comforted that no purchases can be made without their knowing/approval.

## What it does
Our team created a functional chrome extension called Fiscal. Fiscal allows users to search the web, put an item in their cart, put in payment information, press buy now, get confirmation. From their end, nothing seems to have changed. However, Fiscal has replaced the "buy now" button with our own. This button redirects to our order confirmation page and does not send the purchase request to the hosting servers. The caregiver at this point will receive an SMS notification that a purchase was attempted. The item will still be in the cart, so the purchase can be made by them or deleted, the choice is in their hands. 

## How we built it
We have four members, each with a designated task, and some overlap.
- Setting up the chrome extension. This included a manifest JSON file, creating icons, and connecting the other required files into one location. 
- Creating a mock order confirmation page and making our button populate the HTML with the new page (made in HTML with JavaScript)
- Searching for a "buy now"'/"purchase now" button on a webpage, duplicating it, replacing it with our own. This is done in a JavaScript file and will not allow the purchase request to go through to the host
- Setting up SMS messaging using Twilio. On a button press, caregivers instantly get notified on their mobile device

## Challenges we ran into
The biggest challenge was figuring out the best approach to solving this problem. Originally, the idea was an OS for people with Alzheimer's, such that it blocks purchases and scam links. We were able to reason about this and decided a much simpler solution would be a chrome extension that could virtually accomplish the same.

One of the major bugs we faced was getting the button to populate the HTML page with our new HTML order confirmation. We were trying to replace the inner HTML, but it turned out that chrome extensions block in-line JavaScript commands. We found a work-around and from there, the button worked as planned. 

## Accomplishments that we're proud of
We are proud that we were able to create a fully functioning chrome extension. The extension works exactly as anticipated on Amazon.com, the major online shopping platform. Users who have the extension running will not be able to successfully make a purchase.

## What we learned
No one on our team had ever created a chrome extension so we were in uncharted territory. We learned how to get an extension up and running and use an SMS notification system to go further than our MVP of blocking purchases.

## What's next for Fiscal
We intend to get the product working for all websites with an online purchasing process. This will help caregivers feel more comfortable giving free rein, and not just on Amazon. Beyond that, once we get the broader scope completed, we will want to publically publish the chrome extension so that it can start improving lives for people in a difficult situation.
