Score : $400$ points

## Problem Statement

For a positive integer $X$, let $f(X)$ be the number of positive divisors of $X$.

Given a positive integer $N$, find $\sum_{K=1}^N K\times f(K)$.

## Constraints

- $1 \leq N \leq 10^7$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the value $\sum_{K=1}^N K\times f(K)$.

```input1
4
```

```output1
23
```

We have $f(1)=1$, $f(2)=2$, $f(3)=2$, and $f(4)=3$, so the answer is $1\times 1 + 2\times 2 + 3\times 2 + 4\times 3 =23$.

```input2
100
```

```output2
26879
```

```input3
10000000
```

```output3
838627288460105
```

Watch out for overflows.