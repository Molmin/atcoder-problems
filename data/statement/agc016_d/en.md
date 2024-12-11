Score : $1000$ points

## Problem Statement

There is a sequence of length $N$: $a = (a_1, a_2, ..., a_N)$.
Here, each $a_i$ is a non-negative integer.

Snuke can repeatedly perform the following operation:

- Let the XOR of all the elements in $a$ be $x$. Select an integer $i$ ($1 \leq i \leq N$) and replace $a_i$ with $x$.

Snuke's objective is to match $a$ with another sequence $b = (b_1, b_2, ..., b_N)$.
Here, each $b_i$ is a non-negative integer.

Determine whether the objective is achievable, and find the minimum necessary number of operations if the answer is positive.

## Constraints

- $2 \leq N \leq 10^5$
- $a_i$ and $b_i$ are integers.
- $0 \leq a_i, b_i &lt; 2^{30}$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$
> 
> $b_1$ $b_2$ $...$ $b_N$

## Output

If the objective is achievable, print the minimum necessary number of operations.
Otherwise, print `-1` instead.

```input1
3
0 1 2
3 1 0
```

```output1
2
```

At first, the XOR of all the elements of $a$ is $3$.
If we replace $a_1$ with $3$, $a$ becomes $(3, 1, 2)$.

Now, the XOR of all the elements of $a$ is $0$.
If we replace $a_3$ with $0$, $a$ becomes $(3, 1, 0)$, which matches $b$.

```input2
3
0 1 2
0 1 2
```

```output2
0
```

```input3
2
1 1
0 0
```

```output3
-1
```

```input4
4
0 1 2 3
1 0 3 2
```

```output4
5
```