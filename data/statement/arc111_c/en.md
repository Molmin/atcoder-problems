Score : $600$ points

## Problem Statement

There are $N$ people numbered $1$ to $N$ and $N$ pieces of baggage numbered numbered $1$ to $N$.
Person $i$ has a weight of $a_i$, and Baggage $j$ has a weight of $b_j$.
Initially, Person $i$ has Baggage $p_i$. We want to do the operation below zero or more times so that each Person $i$ will have Baggage $i$.

- Choose $i,j (i \neq j)$, and swap the baggages of Person $i$ and Person $j$.

However, when a person has a piece of baggage with a weight **greater than or equal to** his/her own weight, the person gets tired and becomes unable to take part in a future operation (that is, we cannot choose him/her as Person $i$ or $j$).
Particularly, if $a_i \leq b_{p_i}$, Person $i$ cannot take part in any operation.

Determine whether there is a sequence of operations that achieves the objective, and if so, construct one such sequence **with the minimum possible number of operations**.

## Constraints

- $1 \leq N \leq 200000$
- $1 \leq a_i,b_i \leq 10^9$
- $p$ is a permutation of $1, \ldots, N$.
- All numbers in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $\ldots$ $a_N$
> 
> $b_1$ $b_2$ $\ldots$ $b_N$
> 
> $p_1$ $p_2$ $\ldots$ $p_N$

## Output

If no sequence of operations achieves the objective, print `-1`.
Otherwise, print a sequence of operations in the following format:

> $K$
> 
> $i_1$ $j_1$
> 
> $i_2$ $j_2$
> 
> $:$
> 
> $i_K$ $j_K$

Here, $K$ is the number of operations, and $i_t, j_t$ represent the people chosen in the $t$-th operation.

If there are multiple solutions, any of them will be accepted.

```input1
4
3 4 8 6
5 3 1 3
3 4 2 1
```

```output1
3
3 4
1 3
4 2
```

Initially, People $1, 2, 3, 4$ has pieces of baggage with weights $1, 3, 3, 5$, respectively, so no one is tired.

First, we do the operation choosing Person $3$ and $4$. Now, people $1, 2, 3, 4$ has pieces of baggage with weights $1, 3, 5, 3$, so no one is tired yet.

Second, we do the operation choosing Person $1$ and $3$. Now, people $1, 2, 3, 4$ has pieces of baggage with weights $5, 3, 1, 3$, so Person $1$ gets tired.

Lastly, we do the operation choosing Person $4$ and $2$. Now, people $1, 2, 3, 4$ has pieces of baggage with weights $5, 3, 1, 3$, so no one gets tired.

This sequence of operations has made everyone have the right piece of baggage, with the minimum possible number of operations, so it is valid.

```input2
4
1 2 3 4
4 3 2 1
4 3 2 1
```

```output2
-1
```

No sequence of operations achieves the objective.

```input3
1
58
998244353
1
```

```output3
0
```

The objective is already achieved in the initial state.