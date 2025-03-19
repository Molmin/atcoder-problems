Score : $200$ points

## Problem Statement

You are given a sequence of $M$ integers $A = (A_1, A_2, \dots, A_M)$.<br>
Each element of $A$ is an integer between $1$ and $N$, inclusive, and all elements are distinct.

List all integers between $1$ and $N$ that do not appear in $A$ in ascending order.

## Constraints

- All input values are integers.
- $1 \le M \le N \le 1000$
- $1 \le A_i \le N$
- The elements of $A$ are distinct.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_M$

## Output

Let $(X_1, X_2, \dots, X_C)$ be the sequence of all integers between $1$ and $N$, inclusive, that do not appear in $A$, listed in ascending order.
The output should be in the following format:

> $C$
> 
> $X_1$ $X_2$ $\dots$ $X_C$

```input1
10 3
3 9 2
```

```output1
7
1 4 5 6 7 8 10
```

Here, $A=(3,9,2)$.<br>
The integers between $1$ and $10$ that do not appear in $A$, listed in ascending order, are $1,4,5,6,7,8,10$.

```input2
6 6
1 3 5 2 4 6
```

```output2
0
```

No integer between $1$ and $6$ is missing from $A$.<br>
In this case, print `0` on the first line and leave the second line empty.

```input3
9 1
9
```

```output3
8
1 2 3 4 5 6 7 8
```