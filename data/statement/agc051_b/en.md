Score : $800$ points

## Problem Statement

There are some number of bowling pins on a plane.
Four people are observing the pins from different angles.
Is it possible that one of the observers sees much more pins than the others?

Let's model the pins as a set of points on an $xy$-plane.
The image below shows the positions of the four observers.
Formally,

- For observer **A**, two pins overlap if their $y$-coordinates are the same.
- For observer **B**, two pins overlap if their values of ($x$-coordinate minus $y$-coordinate) are the same.
- For observer **C**, two pins overlap if their $x$-coordinates are the same.
- For observer **D**, two pins overlap if their values of ($x$-coordinate plus $y$-coordinate) are the same.

![](https://img.atcoder.jp/agc051/4c43515cd2e0373bc339fc6096de4c76.png)

Let $a, b, c, d$ be the number of pins the observers **A**, **B**, **C**, **D** see, respectively.

Construct any arrangement of bowling pins that satisfies the following constraints:

- $d \geq 10 \cdot \max \{ a, b, c \}$
- The number of pins is between $1$ and $10^5$, inclusive.
- The coordinates are integers between $0$ and $10^9$, inclusive.
- No two pins are placed at exactly the same place.

## Input

There is no input.

## Output

Print the answer in the following format, where $N$ is the number of pins and $(x_i, y_i)$ are the coordinates of the $i$-th pin:

> $N$
> 
> $x_1$ $y_1$
> 
> $:$
> 
> $x_N$ $y_N$

It must satisfy the conditions in the statement.

```input1

```

```output1
9
1 1
1 5
2 7
4 4
5 3
6 8
7 5
8 2
8 7
```

**This sample output is provided for the sake of showing the output format and is not correct.**

It matches the picture in the statement.

Here, $d = 8$ and $a = b = c = 7$. Nice try, but not enough to get AC.