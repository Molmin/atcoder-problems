Score : $1700$ points

## Problem Statement

You have two strings $A = A_1 A_2 ... A_n$ and $B = B_1 B_2 ... B_n$ of the same length consisting of $0$ and $1$.
The number of $1$'s in $A$ and $B$ is equal.

You've decided to transform $A$ using the following algorithm:

- Let $a_1$, $a_2$, ..., $a_k$ be the indices of $1$'s in $A$.
- Let $b_1$, $b_2$, ..., $b_k$ be the indices of $1$'s in $B$.
- Replace $a$ and $b$ with their random permutations, chosen independently and uniformly.
- For each $i$ from $1$ to $k$, in order, swap $A_{a_i}$ and $A_{b_i}$.

Let $P$ be the probability that strings $A$ and $B$ become equal after the procedure above.

Let $Z = P \times (k!)^2$. Clearly, $Z$ is an integer.

Find $Z$ modulo $998244353$.

## Constraints

- $1 \leq |A| = |B| \leq 10,000$
- $A$ and $B$ consist of $0$ and $1$.
- $A$ and $B$ contain the same number of $1$'s.
- $A$ and $B$ contain at least one $1$.

## Partial Score

- $1200$ points will be awarded for passing the testset satisfying $1 \leq |A| = |B| \leq 500$.

## Input

Input is given from Standard Input in the following format:

> $A$
> 
> $B$

## Output

Print the value of $Z$ modulo $998244353$.

```input1
1010
1100
```

```output1
3
```

After the first two steps, $a = [1, 3]$ and $b = [1, 2]$. There are $4$ possible scenarios after shuffling $a$ and $b$:

- $a = [1, 3]$, $b = [1, 2]$. Initially, $A = 1010$. After swap($A_1$, $A_1$), $A = 1010$. After swap($A_3$, $A_2$), $A = 1100$.
- $a = [1, 3]$, $b = [2, 1]$. Initially, $A = 1010$. After swap($A_1$, $A_2$), $A = 0110$. After swap($A_3$, $A_1$), $A = 1100$.
- $a = [3, 1]$, $b = [1, 2]$. Initially, $A = 1010$. After swap($A_3$, $A_1$), $A = 1010$. After swap($A_1$, $A_2$), $A = 0110$.
- $a = [3, 1]$, $b = [2, 1]$. Initially, $A = 1010$. After swap($A_3$, $A_2$), $A = 1100$. After swap($A_1$, $A_1$), $A = 1100$.

Out of $4$ scenarios, $3$ of them result in $A = B$. Therefore, $P = 3$ / $4$, and $Z = 3$.

```input2
01001
01001
```

```output2
4
```

No swap ever changes $A$, so we'll always have $A = B$.

```input3
101010
010101
```

```output3
36
```

Every possible sequence of three swaps puts the $1$'s in $A$ into the right places.

```input4
1101011011110
0111101011101
```

```output4
932171449
```