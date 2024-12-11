Score : $800$ points

## Problem Statement

Given is a sequence of $A+B$ integers $(X_1,X_2,\cdots,X_{A+B})$, which contains exactly $A$ ones and exactly $B$ twos.

Snuke has a set $s$, which is initially empty.
He is going to do $A+B$ operations.
The $i$-th operation is as follows.

- <p>If $X_i=1$: Choose an integer $v$ such that $1 \leq v \leq A$ and add it to $s$.
Here, $v$ must not be an integer that was chosen in a previous operation.</p>
- <p>If $X_i=2$: Delete from $s$ the element with the largest value.
The input guarantees that $s$ is not empty just before this operation.</p>

How many sets are there that can be the final state of $s$?
Find the count modulo $998244353$.

## Constraints

- $1 \leq A \leq 5000$
- $0 \leq B \leq A-1$
- $1 \leq X_i \leq 2$
- $X_i=1$ for exactly $A$ indices $i$.
- $X_i=2$ for exactly $B$ indices $i$.
- $s$ will not be empty just before an operation with $X_i=2$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$
> 
> $X_1$ $X_2$ $\cdots$ $X_{A+B}$

## Output

Print the answer modulo $998244353$.

```input1
3 1
1 1 2 1
```

```output1
2
```

There are two possible final states of $s$: $s=\{1,2\},\{1,3\}$.

For example, the following sequence of operations results in $s=\{1,3\}$.

- $i=1$: Add $2$ to $s$.
- $i=2$: Add $1$ to $s$.
- $i=3$: Delete $2$ from $s$.
- $i=4$: Add $3$ to $s$.

```input2
20 6
1 1 1 1 1 2 1 1 1 2 1 2 1 2 1 2 1 1 1 1 2 1 1 1 1 1
```

```output2
5507
```