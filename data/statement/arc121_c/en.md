Score : $500$ points

## Problem Statement

Given is a sequence $p$ which is a permutation of $(1,2, \ldots, N)$.
Initially, the $n$-th term of $p$ is $p_{n}$.

Your objective is to sort $p$ in ascending order in at most $N^2$ *operations*.
In one operation, you make the following change on $p$:

- In the $1$-st, $3$-rd, and subsequent **odd-numbered** operations, you choose an **odd number** $n$ between $1$ and $N-1$ (inclusive) to swap $p_n$ and $p_{n+1}$.
- In the $2$-nd, $4$-th, and subsequent **even-numbered** operations, you choose an **even number** $n$ between $2$ and $N-1$ (inclusive) to swap $p_n$ and $p_{n+1}$.

We can prove that the objective is always achievable under the Constraints of this problem.
Find one sequence of operations that achieves the objective.

You will be given $T$ test cases and asked to solve each of them.

## Constraints

- All values in input are integers.
- $1 \leq T \leq 250$
- $2 \leq N \leq 500$
- $1 \leq p_i \leq N$
- $p$ is a permutation of $(1,2,\ldots,N)$.
- In one input file, the sum of $N$ does not exceed $500$.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_{1}$
> 
> $\vdots$
> 
> $\mathrm{case}_{T}$

Each case is in the following format:

> $N$
> 
> $p_1$ $\cdots$ $p_N$

## Output

For each of the $T$ test cases, in the order they are given, print your answer in the following format:

> $M$
> 
> $a_1$ $\cdots$ $a_M$

Here, $M$ represents the length of your sequence of operations, and $a_i$ represents the integer you choose in the $i$-th operation.

Your output will be considered correct if, for every test case, your sequence of operations achieves the objective.

```input1
2
5
2 1 3 5 4
2
1 2
```

```output1
2
1 4
0
```

- Here is the description for the $1$-st test case.-   - Choosing $1$ in the $1$-st operation makes $p = (1,2,3,5,4)$.
-   - Choosing $4$ in the $2$-nd operation makes $p = (1,2,3,4,5)$.
-   - Note that although $(1,4)$ is a valid sequence of operations, $(4, 1)$ is not.
- Also note that it is allowed to perform no operation, and it is not required to minimize the number of operations.