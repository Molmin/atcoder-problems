Score : $600$ points

## Problem Statement

Takahashi has a sequence of length $N$: $A=(A _ 1,A _ 2,\ldots,A _ N)$.
$A$ is a permutation of $(1,2,\ldots,N)$.

He is going to perform $Q$ operations to create $1+Q$ sequences.
**He lets $A$ be the sequence numbered $0$**, and then begins the series of operations.
The $i$-th operation $(1\leq i\leq Q)$ is represented by a triple of integers $(t _ i,s _ i,x _ i)$ and corresponds to the following operation (see also the explanations in Sample Input/Output).

- When $t _ i=1$, he removes the elements following the $x _ i$-th element from the sequence numbered $s _ i$ $(0\leq s _ i\lt i)$, and creates a new sequence numbered $i$ with the removed elements, keeping their order.
- When $t _ i=2$, he removes the elements greater than $x _ i$ from the sequence numbered $s _ i$ $(0\leq s _ i\lt i)$, and creates a new sequence numbered $i$ with the removed elements, keeping their order.

For a sequence $X$ of length $L$, every element of $X$ is among "the elements following the $0$-th element."
Also, for any $l$ such that $L\leq l$, no element of $X$ is among "the elements following the $l$-th element."

For $i=1,2,\ldots,Q$, find the length of the sequence numbered $i$ **immediately after** the $i$-th operation.

## Constraints

- $1\leq N\leq2\times10^5$
- $1\leq A _ i\leq N\ (1\leq i\leq N)$
- $A _ i\neq A _ j\ (1\leq i\lt j\leq N)$
- $1\leq Q\leq2\times10^5$
- $t _ i=1,2\ (1\leq i\leq Q)$
- $0\leq s _ i\lt i\ (1\leq i\leq Q)$
- $0\leq x _ i\leq N\ (1\leq i\leq Q)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A _ 1$ $A _ 2$ $\ldots$ $A _ N$
> 
> $Q$
> 
> $t _ 1$ $s _ 1$ $x _ 1$
> 
> $t _ 2$ $s _ 2$ $x _ 2$
> 
> $\vdots$
> 
> $t _ Q$ $s _ Q$ $x _ Q$

## Output

Print $Q$ lines.
The $i$-th line $(1\leq i\leq Q)$ should contain the length of the sequence numbered $i$ immediately after the $i$-th operation.

```input1
10
1 8 7 4 5 6 3 2 9 10
5
2 0 4
1 1 2
2 0 2
2 2 5
1 0 1
```

```output1
6
4
2
3
1
```

Initially, Takahashi has a sequence $A=(1,8,7,4,5,6,3,2,9,10)$ of length $10$.
He lets $A=(1,8,7,4,5,6,3,2,9,10)$ be the sequence numbered $0$, and then begins the series of operations.

In the first operation, he removes elements greater than $4$ from the sequence numbered $0$, namely $8,7,5,6,9,10$, and creates a new sequence numbered $1$ with these elements. After this operation, the sequences numbered $0$ and $1$ are $(1,4,3,2)$ and $(8,7,5,6,9,10)$, respectively.

In the second operation, he removes the elements following the $2$-nd element from the sequence numbered $1$, namely $5,6,9,10$, and creates a new sequence numbered $2$ with these elements. After this operation, the sequences numbered $0$, $1$, and $2$ are $(1,4,3,2)$, $(8,7)$, and $(5,6,9,10)$, respectively.

For the third and subsequent operations, the sequences numbered $0,1,2,\ldots,i$ after the $i$-th operation are as follows:

- $(1,2),(8,7),(5,6,9,10),(4,3)$
- $(1,2),(8,7),(5),(4,3),(6,9,10)$
- $(1),(8,7),(5),(4,3),(6,9,10),(2)$

The length of the sequence numbered $i$ after the $i$-th operation for $i=1,2,\ldots,5$ is $6,4,2,3,1$. Print each of these in its own line.

```input2
8
6 7 8 4 5 1 3 2
5
2 0 0
1 1 0
2 2 0
1 3 8
2 2 3
```

```output2
8
8
8
0
0
```

The operations may create empty sequences.

```input3
30
20 6 13 11 29 30 9 10 16 5 8 25 1 19 12 18 7 2 4 27 3 22 23 24 28 21 14 26 15 17
10
1 0 22
1 0 21
2 0 15
1 0 9
1 3 6
2 3 18
1 6 2
1 0 1
2 5 20
2 7 26
```

```output3
8
1
8
4
2
5
3
8
1
1
```