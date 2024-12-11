Score : $400$ points

## Problem Statement

You are given a sequence of non-negative integers $A=(a_1,a_2,\ldots,a_N)$.

Let $S$ be the set of non-negative integers that can be the sum of $K$ terms in $A$ (with distinct indices).

Find the greatest multiple of $D$ in $S$. If there is no multiple of $D$ in $S$, print `-1` instead.

## Constraints

- $1 \leq K \leq N \leq 100$
- $1 \leq D \leq 100$
- $0 \leq a_i \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$ $D$
> 
> $a_1$ $\ldots$ $a_N$

## Output

Print the answer.

```input1
4 2 2
1 2 3 4
```

```output1
6
```

Here are all the ways to choose two terms in $A$.

- Choose $a_1$ and $a_2$, whose sum is $1+2=3$.
- Choose $a_1$ and $a_3$, whose sum is $1+3=4$.
- Choose $a_1$ and $a_4$, whose sum is $1+4=5$.
- Choose $a_2$ and $a_3$, whose sum is $2+3=5$.
- Choose $a_2$ and $a_4$, whose sum is $2+4=6$.
- Choose $a_3$ and $a_4$, whose sum is $3+4=7$.

Thus, we have $S=\{3,4,5,6,7\}$. The greatest multiple of $2$ in $S$ is $6$, so you should print $6$.

```input2
3 1 2
1 3 5
```

```output2
-1
```

In this example, we have $S=\{1,3,5\}$. Nothing in $S$ is a multiple of $2$, so you should print `-1`.