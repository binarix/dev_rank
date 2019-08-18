# August Challenge: Find the 10x Developer

## Background

Jessie, Evan, John, Sarah and Matt are all engineers in the same delivery team (note: any resemblance to actual TWers, living or dead, is purely coincidental)... and each of them has a different level of coding skill to the other. This means it possible to order them from best to... "least best". Importantly, the best of them is the mythical 10x Developer!!!

But which one is it?!?

## Here's what we know:

Jessie is not the best developer
Evan is not the worst developer
John is not the best developer or the worst developer
Sarah is a better developer than Evan
Matt is not directly below or above John as a developer
John is not directly below or above Evan as a developer

## Challenge

You need to write a solution to compute these answers:
Who is the 10x developer on the team?
What is the correct ordering of the members of the team according to their coding skills?

## Criteria for Awesomeness

Solving the problem as outlined in "Challenge"
Clean Code. Note: the right choice of language and/or library could make your solution much more elegant.
Evidence of TDD
A go script and README (for people submitting solutions to be run locally)
(Bonus) Parse the English-facts of the problem as appearing in the section "Here's what we know". If you choose not to do this bonus requirement, you can express the facts in whatever form make it easiest for your program to handle.

## Prerequisites

nodejs
yarn

## Usage

`./go.sh`

```
$ ./go.sh
yarn run v1.17.3
$ node index.js
[ 'Sarah', 'John', 'Jessie', 'Evan', 'Matt' ]
✨  Done in 0.23s.
```
