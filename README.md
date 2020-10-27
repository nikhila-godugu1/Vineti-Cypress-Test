# CypressTest
Automation using Cypress. Please follow the below steps to run the test.

# Prerequisites
1. Node.js (https://nodejs.org/en/download/)
2. git (https://git-scm.com/downloads)

# Steps to follow
In order to get the code and install dependencies.
1. Open terminal.
2. Enter `git clone https://github.com/nikhila-godugu1/Vineti-Cypress-Test.git`
3. Navigate to the downloaded CypressTest directory.
4. And then use command `npm install` to install packages.

In order to run the script.
1. Use command `npm run cypress:open`
2. Wait for the Cypress Test Runner to launch.
3. Click on the test.spec.js under Integration Tests/Click on Run All specs.

# Validations
A browser will get kicked off and perform following validations.
1. Navigate to https://www.phptravels.net/.
2. Search for hotel in Chicago (Nov 1st - Nov 5th ) 3 Adults and 1 Child and click Search. Verify `No Results Found` text is displayed. 
3. Click on `Airport Transport`, `Guest House` and `High to Low` checkboxes and click search, verify those boxes are still checked after clicking search.
4. Click on My Account button and click Login. Login with incorrect credentials and verify the error message. Login with correct credentials and verify the user name.

# Bugs
`Airport Transport`, `Guest House` and `High to Low` checkboxes are getting uncheck after clicking search.

# Run
https://dashboard.cypress.io/projects/qfjtpu/runs/4/specs
