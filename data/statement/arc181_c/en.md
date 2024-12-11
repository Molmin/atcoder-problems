Score : $600$ points

## Problem Statement

You are given two permutations $P=(P_1,P_2,\dots,P_N)$ and $Q=(Q_1,Q_2,\dots,Q_N)$ of $(1,2,\dots,N)$.

Write one of the characters `0` and `1` in each cell of an $N$-by-$N$ grid so that all of the following conditions are satisfied:

- Let $S_i$ be the string obtained by concatenating the characters in the $i$-th row from the $1$-st to the $N$-th column. Then, $S_{P_1} &lt; S_{P_2} &lt; \dots &lt; S_{P_N}$ in lexicographical order.
- Let $T_i$ be the string obtained by concatenating the characters in the $i$-th column from the $1$-st to the $N$-th row. Then, $T_{Q_1} &lt; T_{Q_2} &lt; \dots &lt; T_{Q_N}$ in lexicographical order.

It can be proved that for any $P$ and $Q$, there is at least one way to write the characters that satisfies all the conditions.

 What does "$X < Y$ in lexicographical order" mean?

For strings $X=X_1X_2\dots X_{|X|}$ and $Y = Y_1Y_2\dots Y_{|Y|}$, "**$X &amp;lt; Y$ in lexicographical order**" means that 1. or 2. below holds.
Here, $|X|$ and $|Y|$ denote the lengths of $X$ and $Y$, respectively.

1. $|X| \lt |Y|$ and $X_1X_2\ldots X_{|X|} = Y_1Y_2\ldots Y_{|X|}$.
2. There exists an integer $1 \leq i \leq \min\lbrace |X|, |Y| \rbrace$ such that both of the following are true:
1.    - $X_1X_2\ldots X_{i-1} = Y_1Y_2\ldots Y_{i-1}$
2.    - $X_i$ is less than $Y_i$.

## Constraints

- $2 \leq N \leq 500$
- $P$ and $Q$ are permutations of $(1,2,\dots,N)$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\dots$ $P_N$
> 
> $Q_1$ $Q_2$ $\dots$ $Q_N$

## Output

Print a way to fill the grid that satisfies the conditions in the following format, where $A_{ij}$ is the character written at the $i$-th row and $j$-th column:

> $A_{11}A_{12}\dots A_{1N}$
> 
> $\vdots$
> 
> $A_{N1}A_{N2}\dots A_{NN}$

If there are multiple ways to satisfy the conditions, any of them will be accepted.

```input1
3
1 2 3
2 1 3
```

```output1
001
101
110
```

In this sample, $S_1=$`001`, $S_2=$`101`, $S_3=$`110`, and $T_1=$`011`, $T_2=$`001`, $T_3=$`110`. Therefore, $S_1 &lt; S_2 &lt; S_3$ and $T_2 &lt; T_1 &lt; T_3$ hold, satisfying the conditions.

```input2
15
8 15 10 2 4 3 1 13 5 12 9 6 14 11 7
4 1 5 14 3 12 13 7 11 8 6 2 9 15 10
```

```output2
010001111110101
001000000101001
010001001100010
010000011110010
010011101101101
100101110100000
111100011001000
000001001100000
100011011000101
000111101011110
101010101010101
011010101011110
010011000010011
100110010110101
000101101100100
```