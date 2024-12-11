Score : $100$ points

## Problem Statement

Snuke is going to open a contest named "AtCoder $s$ Contest".
Here, $s$ is a string of length $1$ or greater, where the first character is an uppercase English letter, and the second and subsequent characters are lowercase English letters.

Snuke has decided to abbreviate the name of the contest as "A$x$C".
Here, $x$ is the uppercase English letter at the beginning of $s$.

Given the name of the contest, print the abbreviation of the name.

## Constraints

- The length of $s$ is between $1$ and $100$, inclusive.
- The first character in $s$ is an uppercase English letter.
- The second and subsequent characters in $s$ are lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> AtCoder $s$ Contest

## Output

Print the abbreviation of the name of the contest.

```input1
AtCoder Beginner Contest
```

```output1
ABC
```

The contest in which you are participating now.

```input2
AtCoder Snuke Contest
```

```output2
ASC
```

This contest does not actually exist.

```input3
AtCoder X Contest
```

```output3
AXC
```