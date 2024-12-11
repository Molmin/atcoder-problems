Score: $300$ points

## Problem Statement

There are $N$ giants, named $1$ to $N$. When giant $i$ stands on the ground, their shoulder height is $A_i$, and their head height is $B_i$.

You can choose a permutation $(P_1, P_2, \ldots, P_N)$ of $(1, 2, \ldots, N)$ and stack the $N$ giants according to the following rules:

- <p>First, place giant $P_1$ on the ground. The giant $P_1$'s shoulder will be at a height of $A_{P_1}$ from the ground, and their head will be at a height of $B_{P_1}$ from the ground.</p>
- <p>For $i = 1, 2, \ldots, N - 1$ in order, place giant $P_{i + 1}$ on the shoulders of giant $P_i$. If giant $P_i$'s shoulders are at a height of $t$ from the ground, then giant $P_{i + 1}$'s shoulders will be at a height of $t + A_{P_{i + 1}}$ from the ground, and their head will be at a height of $t + B_{P_{i + 1}}$ from the ground.</p>

Find the maximum possible height of the head of the topmost giant $P_N$ from the ground.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq B_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print the answer.

```input1
3
4 10
5 8
2 9
```

```output1
18
```

If $(P_1, P_2, P_3) = (2, 1, 3)$, then measuring from the ground, giant $2$ has a shoulder height of $5$ and a head height of $8$, giant $1$ has a shoulder height of $9$ and a head height of $15$, and giant $3$ has a shoulder height of $11$ and a head height of $18$.

The head height of the topmost giant from the ground cannot be greater than $18$, so print $18$.

```input2
5
1 1
1 1
1 1
1 1
1 1
```

```output2
5
```

```input3
10
690830957 868532399
741145463 930111470
612846445 948344128
540375785 925723427
723092548 925021315
928915367 973970164
563314352 832796216
562681294 868338948
923012648 954764623
691107436 891127278
```

```output3
7362669937
```