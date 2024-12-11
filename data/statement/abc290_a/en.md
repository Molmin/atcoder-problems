Score : $100$ points

## Problem Statement

There was a contest with $N$ problems.  The $i$-th $(1\leq i\leq N)$ problem was worth $A_i$ points.

Snuke took part in this contest and solved $M$ problems: the $B_1$-th, $B_2$-th, $\ldots$, and $B_M$-th ones.
Find his total score.

Here, the total score is defined as the sum of the points for the problems he solved.

## Constraints

- $1\leq M \leq N \leq 100$
- $1\leq A_i \leq 100$
- $1\leq B_1 &lt; B_2 &lt; \ldots &lt; B_M \leq N$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_M$

## Output

Print the answer as an integer.

```input1
3 2
10 20 30
1 3
```

```output1
40
```

Snuke solved the $1$-st and $3$-rd problems,
which are worth $10$ and $30$ points, respectively.  Thus, the total score is $10+30=40$ points.

```input2
4 1
1 1 1 100
4
```

```output2
100
```

```input3
8 4
22 75 26 45 72 81 47 29
4 6 7 8
```

```output3
202
```