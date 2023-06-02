#Napisz skrypt testowy w stylu Gherkin, który opisuje 
#proces wyszukiwania i zakupu produktu 
#w ulubionym sklepie internetowym 
#oraz waliduje zakup.
Feature: Shoping on HM 

The purchase and validation process on the HM web store

In  HM we can found products add products to cart and bay products

Background: prepare to choose product
Given I m logged in to shop as "
And I navigate to "<main menu>" 

Scenario: Look for Men products by main menu 

When I get in to "<Men>" bar in "<main menu>"
Then I choose "<socks>" in the "<Men>" bar

When I m on "<MENS SOCKS>" tabel
And I choose  "DryMove™ Sports socks"

When I get in to details of product on "DryMove™ Sports socks" cart
And I choose collor  "black"
And  I select size "6,5-8"
Then I click "<Add>" button
When "Shopping bag" include 1 product
Then I go to "Shopping bag" cart

When I am on "Shopping bag" cart
And I have one product in 
And the name of product is "DryMove™ Sports socks"
And the collor is "black"
And the size is  "6,5-8"
Then I check price "value"

When price "value" is correct
Then I chose the method of pay
