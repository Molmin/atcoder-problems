Score : $600$ points

## Problem Statement

There are $N$ people called Person $1$, Person $2$, $\dots$, Person $N$, lined up in a row in the order of $(1,2,\dots,N)$ from the front.  Person $i$ is wearing Color $c_i$.<br>
Takahashi repeated the following operation $K$ times: choose two People $i$ and $j$ arbitrarily and swap the positions of Person $i$ and Person $j$.<br>
After the $K$ operations have ended, the color that the $i$-th person from the front is wearing coincided with $c_i$, for every integer $i$ such that $1 \leq i \leq N$.<br>
How many possible permutations of people after the $K$ operations are there?  Find the count modulo $998244353$.

## Constraints

- $2 \leq N \leq 200000$
- $1 \leq K \leq 10^9$
- $1 \leq c_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $c_1$ $c_2$ $\dots$ $c_N$

## Output

Print the answer.

```input1
4 1
1 1 2 1
```

```output1
3
```

Here is a comprehensive list of possible Takahashi's operations and permutations of people after each operation.

- Swap the positions of Person $1$ and Person $2$, resulting in a permutation $(2, 1, 3, 4)$.
- Swap the positions of Person $1$ and Person $4$, resulting in a permutation $(4, 2, 3, 1)$.
- Swap the positions of Person $2$ and Person $4$, resulting in a permutation $(1, 4, 3, 2)$.

```input2
3 3
1 1 2
```

```output2
1
```

Here is an example of a possible sequence of Takahashi's operations.

- In the $1$-st operation, he swaps the positions of Person $1$ and Person $3$, resulting in a permutation $(3, 2, 1)$.<br>
    In the $2$-nd operation, he swaps the positions of Person $2$ and Person $3$, resulting in a permutation $(2, 3, 1)$.<br>
    In the $3$-rd operation, he swaps the positions of Person $1$ and Person $3$, resulting in a permutation $(2, 1, 3)$.

Note that, during the sequence of operations, the color that the $i$-th person from the front is wearing does not necessarily coincide with $c_i$.  

```input3
10 4
2 7 1 8 2 8 1 8 2 8
```

```output3
132
```