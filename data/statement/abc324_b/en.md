Score : $200$ points

## Problem Statement

You are given a positive integer $N$.
If there are integers $x$ and $y$ such that $N=2^x3^y$, print `Yes`; otherwise, print `No`.

## Constraints

- $1\leq N\leq10^{18}$
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print a single line containing `Yes` if there are integers $x$ and $y$ that satisfy the condition, and `No` otherwise.

```input1
324
```

```output1
Yes
```

For $x=2,y=4$, we have $2^x3^y=2^23^4=4\times81=324$, so the condition is satisfied.
Thus, you should print `Yes`.

```input2
5
```

```output2
No
```

There are no integers $x$ and $y$ such that $2^x3^y=5$.
Thus, you should print `No`.

```input3
32
```

```output3
Yes
```

For $x=5,y=0$, we have $2^x3^y=32\times1=32$, so you should print `Yes`.

```input4
37748736
```

```output4
Yes
```