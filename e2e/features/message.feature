Feature: Message
  The user want to send and read his messages

  Scenario: List the messages
    Given The init app
    When The user select a conversation
    Then The user can read the messages

  Scenario: Send a message
    Given An open conversation
    When The user type a message
    And Click on send button
    Then The user can see the message on the conversation side
