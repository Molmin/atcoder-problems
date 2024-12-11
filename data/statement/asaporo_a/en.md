Score : $1200$ points

## Problem Statement

Takahashi is a magician. He can cast a spell on an integer sequence $(a_1,a_2,...,a_M)$ with $M$ terms, to turn it into another sequence $(s_1,s_2,...,s_M)$, where $s_i$ is the sum of the first $i$ terms in the original sequence.

One day, he received $N$ integer sequences, each with $M$ terms, and named those sequences $A_1,A_2,...,A_N$. He will try to cast the spell on those sequences so that $A_1 &lt; A_2 &lt; ... &lt; A_N$ will hold, where sequences are compared lexicographically.
Let the action of casting the spell on a selected sequence be one cast of the spell. Find the minimum number of casts of the spell he needs to perform in order to achieve his objective.

Here, for two sequences $a = (a_1,a_2,...,a_M), b = (b_1,b_2,...,b_M)$ with $M$ terms each, $a &lt; b$ holds lexicographically if and only if there exists $i (1 \leq i \leq M)$ such that $a_j = b_j (1 \leq j &lt; i)$ and $a_i &lt; b_i$.

## Constraints

- $1 \leq N \leq 10^3$
- $1 \leq M \leq 10^3$
- Let the $j$-th term in $A_i$ be $A_{(i,j)}$, then $1 \leq A_{(i,j)} \leq 10^9$.

## Partial Scores

- In the test set worth $200$ points, Takahashi can achieve his objective by at most $10^4$ casts of the spell, while keeping the values of all terms at most $10^9$.
- In the test set worth another $800$ points, $A_{(i,j)} \leq 80$.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_{(1,1)}$ $A_{(1,2)}$ … $A_{(1,M)}$
> 
> $A_{(2,1)}$ $A_{(2,2)}$ … $A_{(2,M)}$
> 
> :
> 
> $A_{(N,1)}$ $A_{(N,2)}$ … $A_{(N,M)}$

## Output

Print the minimum number of casts of the spell Takahashi needs to perform. If he cannot achieve his objective, print `-1` instead.

```input1
3 3
2 3 1
2 1 2
2 6 3
```

```output1
1
```

Takahashi can achieve his objective by casting the spell on $A_2$ once to turn it into $(2 , 3 , 5)$.

```input2
3 3
3 2 10
10 5 4
9 1 9
```

```output2
-1
```

In this case, Takahashi cannot achieve his objective by casting the spell any number of times.

```input3
5 5
2 6 5 6 9
2 6 4 9 10
2 6 8 6 7
2 1 7 3 8
2 1 4 8 3
```

```output3
11
```