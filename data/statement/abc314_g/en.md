Score : $575$ points

## Problem Statement

There are $N$ monsters in a cave: monster $1$, monster $2$, $\ldots$, monster $N$. Each monster has a positive integer **attack power** and a **type** represented by an integer between $1$ and $M$, inclusive.
Specifically, for $i = 1, 2, \ldots, N$, the attack power and type of monster $i$ are $A_i$ and $B_i$, respectively.

Takahashi will go on an adventure in this cave with a **health** of $H$ and some of the $M$ amulets: amulet $1$, amulet $2$, $\ldots$, amulet $M$.

In the adventure, Takahashi performs the following steps for $i = 1, 2, \ldots, N$ in this order (as long as his health does not drop to $0$ or below).

- If Takahashi has not brought amulet $B_i$ with him, monster $i$ will attack him and decrease his health by $A_i$.
- Then,-   - if his health is greater than $0$, he defeats monster $i$;
-   - otherwise, he dies without defeating monster $i$ and ends his adventure.

Solve the following problem for each $K = 0, 1, \ldots, M$ independently.

Find the maximum number of monsters that Takahashi can defeat when choosing $K$ of the $M$ amulets to bring on the adventure.

The constraints guarantee that there is at least one monster of type $i$ for each $i = 1, 2, \ldots, M$.

## Constraints

- $1 \leq M \leq N \leq 3 \times 10^5$
- $1 \leq H \leq 10^9$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq M$
- For each $1 \leq i \leq M$, there is $1 \leq j \leq N$ such that $B_j = i$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $H$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

For each $i = 0, 1, 2, \ldots, M$, let $X_i$ be the maximum number of monsters that Takahashi can defeat when $K = i$.
Print $X_0, X_1, \ldots, X_M$ separated by spaces in the following format:

> $X_0$ $X_1$ $\ldots$ $X_M$

```input1
7 3 7
3 2
1 1
4 2
1 2
5 1
9 3
2 3
```

```output1
2 5 7 7
```

Consider the case $K = 1$. Here, Takahashi can bring amulet $2$ to defeat the maximum possible number of monsters, which is $5$.
The adventure proceeds as follows.

- For $i = 1$, he avoids the attack of monster $1$ since he has amulet $2$. Then, he defeats monster $1$.
- For $i = 2$, he takes the attack of monster $2$ and his health becomes $6$ since he does not have amulet $1$. Then, he defeats monster $2$.
- For $i = 3$, he avoids the attack of monster $3$ since he has amulet $2$. Then, he defeats monster $3$.
- For $i = 4$, he avoids the attack of monster $4$ since he has amulet $2$. Then, he defeats monster $4$.
- For $i = 5$, he takes the attack of monster $5$ and his health becomes $1$ since he does not have amulet $1$. Then, he defeats monster $5$.
- For $i = 6$, he takes the attack of monster $6$ and his health becomes $-8$ since he does not have amulet $3$. Then, he dies without defeating monster $6$ and ends his adventure.

Similarly, when $K=0$, he can defeat $2$ monsters; when $K=2$, he can defeat all $7$ monsters by bringing amulets $2$ and $3$; when $K=3$, he can defeat all $7$ monsters by bringing amulets $1$, $2$, and $3$.

```input2
15 5 400
29 5
27 4
79 1
27 2
30 3
4 1
89 2
88 3
75 5
3 1
39 4
12 1
62 4
38 2
49 1
```

```output2
8 12 15 15 15 15
```