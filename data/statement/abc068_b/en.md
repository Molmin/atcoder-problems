Score : $200$ points

## Problem Statement

Takahashi loves numbers divisible by $2$.

You are given a positive integer $N$. Among the integers between $1$ and $N$ (inclusive), find the one that can be divisible by $2$ for the most number of times. The solution is always unique.

Here, the number of times an integer can be divisible by $2$, is how many times the integer can be divided by $2$ without remainder.

For example,

- $6$ can be divided by $2$ once: $6$ -&gt; $3$.
- $8$ can be divided by $2$ three times: $8$ -&gt; $4$ -&gt; $2$ -&gt; $1$.
- $3$ can be divided by $2$ zero times.

## Constraints

- $1 \leq N \leq 100$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
7
```

```output1
4
```

$4$ can be divided by $2$ twice, which is the most number of times among $1$, $2$, ..., $7$.

```input2
32
```

```output2
32
```

```input3
1
```

```output3
1
```

```input4
100
```

```output4
64
```