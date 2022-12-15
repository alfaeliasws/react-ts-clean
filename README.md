# Footage


https://user-images.githubusercontent.com/105652124/207789492-35f9de04-1c90-41b2-8647-faf5bc930ead.mov



# What to be noticed

## tsconfig.json
* on Testing: compilerOptions.jsx set to "react-jsx"
* on "npm start": compilerOptions.jsx set to "preserve"

## Make env file just like env.example
* It is because I use babel-jest dependency out of react-script and react-script want to run their own babel-jest dependency

## The test
* the test is testing all component in a sequence, so it is tested per possible action
* I face many bug encounter with setting up jest in react and it is my first time using the test library, sometimes there will be 1 failed test (sometimes the waitFor() is not waiting for the expected result to come), but just rerun it, it will bring all passed test in the end

## Styling (CSS Class)
* I am using ant design but using vanilla css too that is derived from tailwindCSS that is more robust for each of my jsx element styling

## GetNewsAPI
* I don't only use the short content from GetNewsAPI, but using a real web scrapping and calling each url to show the full content, even though it is not beautifully formatted, because I use the content as is
* To bypass the no-cors from the target url, I use scraperAPI that's why it may take quite long for the full content to show
* Wait around for 20 seconds to see the full article

## View/Endpoint
* I use Single Page Application approach with dependency of state in every view
* The home page is having state value 99 (in number type)
* While the each page view, the value state is according to the index of the respective posts

## Clean Architecture
* It is my first time to use clean architecture, and after explorations, many implementations are in backend framework/language (mostly golang)
* But it is great to use it, because my react component forced to not to be to long
* For the adaptation of the architecture I just tried to follow the guide article of what each folder does

## UI and UX
* I don't do many thing in this UI, to make it all simple so the other party focus on the programming that I create
* UX wise, I do my best to make the experience felt by the end user, by using interactive functionality (interaction observer and hover transition)
