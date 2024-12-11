Score : $800$ points

## Problem Statement

$N$ people called Person $1, 2, \ldots, N$ are standing in a circle.

For each $1 \leq i \leq N-1$, Person $i$'s neighbor to the right is Person $i+1$, and Person $N$'s neighbor to the right is Person $1$.

Person $i$ initially has $a_i$ balls.

They will do the following procedure just once.

- Each person chooses some (possibly zero) of the balls they have.
- Then, each person **simultaneously** hands the chosen balls to the neighbor to the right.
- Now, make a sequence of length $N$, where the $i$-th term is the number of balls Person $i$ has at the moment.

Let $S$ be the set of all sequences that can result from the procedure. For example, when $a=(1,1,1)$, we have $S= \{(0,1,2),(0,2,1),(1,0,2),(1,1,1),(1,2,0),(2,0,1),(2,1,0) \}$.

Compute $\sum_{x \in S} \prod_{i=1}^{N} x_i$, modulo $998244353$.

## Constraints

- All values in input are integers.
- $3 \leq N \leq 10^5$
- $0 \leq a_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_{1}$ $a_{2}$ $\cdots$ $a_{N}$

## Output

Print $\sum_{x \in S} \prod_{i=1}^{N} x_i$, modulo $998244353$.

```input1
3
1 1 1
```

```output1
1
```

- We have $S= \{(0,1,2),(0,2,1),(1,0,2),(1,1,1),(1,2,0),(2,0,1),(2,1,0) \}$.
- $\sum_{x \in S} \prod_{i=1}^{N} x_i$ is $1$.

```input2
3
2 1 1
```

```output2
6
```

```input3
20
5644 493 8410 8455 7843 9140 3812 2801 3725 6361 2307 1522 1177 844 654 6489 3875 3920 7832 5768
```

```output3
864609205
```

- Be sure to compute it modulo $998244353$.