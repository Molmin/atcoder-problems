Score: $425$ points

## Problem Statement

This is an **interactive problem** (a type of problem where your program interacts with the judge program through Standard Input and Output).

There are $N$ bottles of juice, numbered $1$ to $N$. It has been discovered that exactly one of these bottles has gone bad. Even a small sip of the spoiled juice will cause stomach upset the next day.

Takahashi must identify the spoiled juice by the next day. To do this, he decides to call the **minimum necessary number** of friends and serve them some of the $N$ bottles of juice. He can give any number of bottles to each friend, and each bottle of juice can be given to any number of friends.

Print the number of friends to call and how to distribute the juice, then receive information on whether each friend has an upset stomach the next day, and print the spoiled bottle's number.

## Constraints

- $N$ is an integer.
- $2 \leq N \leq 100$

## Input/Output

This is an interactive problem (a type of problem where your program interacts with the judge program through Standard Input and Output).

Before the interaction, the judge secretly selects an integer $X$ between $1$ and $N$ as the spoiled bottle's number. The value of $X$ is not given to you. Also, **the value of $X$ may change during the interaction as long as it is consistent with the constraints and previous outputs.**

First, the judge will give you $N$ as input.

```plain
$N$
```

You should print the number of friends to call, $M$, followed by a newline.

```plain
$M$
```

Next, you should perform the following procedure to print $M$ outputs.
For $i = 1, 2, \ldots, M$, the $i$-th output should contain the number $K_i$ of bottles of juice you will serve to the $i$-th friend, and the $K_i$ bottles' numbers in **ascending order**, $A_{i, 1}, A_{i, 2}, \ldots, A_{i, K_i}$, separated by spaces, followed by a newline.

```plain
$K_i$ $A_{i, 1}$ $A_{i, 2}$ $\ldots$ $A_{i, K_i}$
```

Then, the judge will inform you whether each friend has a stomach upset the next day by giving you a string $S$ of length $M$ consisting of `0` and `1`.

```plain
$S$
```

For $i = 1, 2, \ldots, M$, the $i$-th friend has a stomach upset if and only if the $i$-th character of $S$ is `1`.

You should respond by printing the number of the spoiled juice bottle $X'$, followed by a newline.

```plain
$X'$
```

Then, terminate the program immediately.

If the $M$ you printed is the **minimum necessary** number of friends to identify the spoiled juice out of the $N$ bottles, and the $X'$ you printed matches the spoiled bottle's number $X$, then your program is considered correct.

## Notes

- <span style="color:red">**Each output should end with a newline and flushing Standard Output. Otherwise, you may receive a TLE verdict.**</span>
- **The verdict is indeterminate if your program prints an invalid output during the interaction or terminates prematurely.** In particular, note that if a runtime error occurs during the execution of the program, the verdict may be WA or TLE instead of RE.
- Terminate the program immediately after printing $X'$. Otherwise, the verdict is indeterminate.
- <span style="color:red">**The judge for this problem is adaptive, meaning that the value of $X$ may change as long as it is consistent with the constraints and previous outputs.**</span>

## Sample Input/Output

Below is an interaction with $N = 3$.

Input
Output
Description

`3`

The number of bottles, $N$, is given.

`2`
Print the number of friends to call, $M$.

`2 1 2`
Serve juice $1$ and juice $2$ to the first friend.

`1 2`
Serve juice $2$ to the second friend.

`10`

The string $S$ is given, indicating whether each friend has a stomach upset the next day.

`1`
Print the spoiled bottle's number.