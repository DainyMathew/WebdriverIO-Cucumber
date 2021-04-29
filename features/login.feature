Feature: Sugar Sign Up Page

  Scenario Outline: As a user, I can Sign up 

    Given I am on the login page
    When I  click on Sign Up button
    And I enter the <Email> and <Username>
    And I enter the <Password> and <Confirm_Password>
    And I select the checkbox
    And I Click on Register button
    Then I should see Activate account page

    Examples:
      | Email             | Username  | Password  | Confirm_Password|
      | dainypm@gmail.com | Dainy48    | Dainy@123 | Dainy@123       |
     
