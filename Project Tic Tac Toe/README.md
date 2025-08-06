Tic-Tac-Toe Game
Overview

A browser-based Tic-Tac-Toe game built with JavaScript using module and factory patterns to minimize global code. The game supports two players who can enter their names, take turns placing marks (X and O), and displays win or tie messages. The UI updates dynamically with animations and sound effects for better user experience.
Features

    Gameboard stored as an array inside a Gameboard module

    Player objects created via factory functions, holding names and marks

    GameController module manages game flow, turn switching, and win/tie detection

    DisplayController module handles DOM rendering, click events, and UI updates

    Input fields for player names with a start button

    Restart button to reset the game and play again

    Simple animations when placing marks

    Sound effects on clicks and wins

How to use

    Enter names for Player 1 and Player 2 (or use default names)

    Click Start to begin the game

    Click empty cells to place your mark, alternating turns

    Game ends with a win or tie message displayed

    Click Restart to reset the game and enter new names

Technologies used

    JavaScript (ES6 modules and factory functions)

    HTML & CSS Grid for layout and styling

    DOM manipulation and event handling

    CSS animations and HTML audio for interaction feedback

Challenges and learning points

    Managing game state across multiple modules

    Handling this and function contexts in JavaScript

    Cleanly separating game logic and UI rendering

    Using module patterns to avoid polluting the global namespace