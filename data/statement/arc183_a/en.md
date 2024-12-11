Score : $400$ points

## Problem Statement

You are given positive integers $N$ and $K$.

An integer sequence of length $NK$ where each integer from $1$ to $N$ appears exactly $K$ times is called a **good** integer sequence.

Let $S$ be the number of good integer sequences.
Find the $\operatorname{floor}((S+1)/2)$-th good integer sequence in lexicographical order.
Here, $\operatorname{floor}(x)$ represents the largest integer not exceeding $x$.

 What is lexicographical order for sequences?

A sequence $S = (S_1,S_2,\ldots,S_{|S|})$ is **lexicographically smaller** than a sequence $T = (T_1,T_2,\ldots,T_{|T|})$ if either 1. or 2. below holds.
Here, $|S|$ and $|T|$ represent the lengths of $S$ and $T$, respectively.

1. $|S| \lt |T|$ and $(S_1,S_2,\ldots,S_{|S|}) = (T_1,T_2,\ldots,T_{|S|})$.
2. There exists an integer $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ such that both of the following hold:
1.    - $(S_1,S_2,\ldots,S_{i-1}) = (T_1,T_2,\ldots,T_{i-1})$
2.    - $S_i$ is (numerically) smaller than $T_i$.

## Constraints

- $1 \leq N \leq 500$
- $1 \leq K \leq 500$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the desired integer sequence, with elements separated by spaces.

```input1
2 2
```

```output1
1 2 2 1
```

There are six good integer sequences:

- $(1,1,2,2)$
- $(1,2,1,2)$
- $(1,2,2,1)$
- $(2,1,1,2)$
- $(2,1,2,1)$
- $(2,2,1,1)$

Therefore, the answer is the 3rd sequence in lexicographical order, $(1,2,2,1)$.

```input2
1 5
```

```output2
1 1 1 1 1
```

```input3
6 1
```

```output3
3 6 5 4 2 1
```

```input4
3 3
```

```output4
2 2 2 1 3 3 3 1 1
```