Score: $100$ points

## Problem Statement

You are given a sequence $S$ of length $N$, consisting of integers $1$, $2$, and $3$. Determine the number of sequences $A$ consisting of integers $1$ and $2$ such that the sequence $T$ obtained after performing the following procedure matches $S$. Output the answer modulo $998244353$. It can be proven that the number of such sequences $A$ is finite.

Start with an empty sequence $T$. Given a sequence $A$ consisting of integers $1$ and $2$, perform the following process to obtain the sequence $T$:

1. Set a variable $C = 0$.
2. If $A$ contains at least one $1$, remove the first occurrence of $1$ from $A$ and add $1$ to $C$.
3. If $A$ is not empty, remove the first element $x$ of $A$ and add $x$ to $C$.
4. Append $C$ to the end of $T$.
5. If $A$ is empty, terminate the process. Otherwise, return to step 1.

## Constraints

- All input values are integers.
- $1 \le N \le 10^6$
- $1 \le S_i \le 3$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$ $S_2$ $\dots$ $S_N$

## Output

Output the number of sequences $A$ that satisfy the conditions, modulo $998244353$.

```input1
2
3 2
```

```output1
5
```

There are $5$ possible sequences $A$ that result in $T = (3, 2)$: $A = (1, 2, 2), (2, 1, 2), (2, 2, 1), (2, 1, 1, 1), (1, 2, 1, 1)$.

For example, for $A = (2, 1, 1, 1)$, the process proceeds as follows:

- Remove the first occurrence of $1$ in $A$, which is $A_2 = 1$. Now $A = (2, 1, 1)$ and $C = 1$.
- Remove the first element of $A$, which is $A_1 = 2$. Now $A = (1, 1)$ and $C = 3$.
- Append $C$ to the end of $T$. Now $T = (3)$.
- Remove the first occurrence of $1$ in $A$, which is $A_1 = 1$. Now $A = (1)$ and $C = 1$.
- Remove the first element of $A$, which is $A_1 = 1$. Now $A = ()$ and $C = 2$.
- Append $C$ to the end of $T$. Now $T = (3, 2)$.

```input2
6
3 2 2 3 2 1
```

```output2
4
```

```input3
5
3 2 1 3 2
```

```output3
0
```

Note that there may be cases where no sequence $A$ produces $S$, in which case the answer is $0$.