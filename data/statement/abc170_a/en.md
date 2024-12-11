Score : $100$ points

## Problem Statement

We have five variables $x_1, x_2, x_3, x_4,$ and $x_5$.

The variable $x_i$ was initially assigned a value of $i$.

Snuke chose one of these variables and assigned it $0$.

You are given the values of the five variables after this assignment.

Find out which variable Snuke assigned $0$.

## Constraints

- The values of $x_1, x_2, x_3, x_4,$ and $x_5$ given as input are a possible outcome of the assignment by Snuke.

## Input

Input is given from Standard Input in the following format:

> $x_1$ $x_2$ $x_3$ $x_4$ $x_5$

## Output

If the variable Snuke assigned $0$ was $x_i$, print the integer $i$.

```input1
0 2 3 4 5
```

```output1
1
```

In this case, Snuke assigned $0$ to $x_1$, so we should print $1$.

```input2
1 2 0 4 5
```

```output2
3
```