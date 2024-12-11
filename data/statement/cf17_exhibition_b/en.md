Score : $1500$ points

## Problem Statement

We have a sequence $A$ of length $N$.

On this sequence, we can perform the following two kinds of operations:

- <p>Swap two adjacent elements.</p>
- <p>Select one element, and increment it by $1$.</p>

We will repeatedly perform these operations so that $A$ will be a non-decreasing sequence. Find the minimum required number of operations.

## Constraints

- $1 \leq N \leq 200000$
- $1 \leq A_i \leq 10^9$
- $A_i$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$
> 
> $A_2$
> 
> $:$
> 
> $A_N$

## Output

Print the minimum number of operations required to turn $A$ into a non-decreasing sequence.

```input1
5
4
1
8
8
7
```

```output1
2
```

We can turn $A$ into a non-decreasing sequence in two operations:

- Initially, $A = \{4, 1, 8, 8, 7\}$.
- Swap the first two elements. Now, $A = \{1, 4, 8, 8, 7\}$.
- Increment the last element by $1$. Now, $A = \{1, 4, 8, 8, 8\}$.

```input2
20
8
2
9
7
4
6
7
9
7
4
7
4
4
3
6
2
3
4
4
9
```

```output2
62
```