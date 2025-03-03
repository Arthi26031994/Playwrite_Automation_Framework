Feature: Add to cart functionality validation

@ValidateSearch
Scenario Outline: Validate whether search can be performed with specific price range of mobile and validate the search result
Given Login into application 
When I Search for the product "<Product_Name>"
And I add first product to the cart
Then I Navigate to "Cart" page
And I verify "<Product_Name>" is properly added to the cart

Examples:
| Product_Name | 
| Blue Top     |