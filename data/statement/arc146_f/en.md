Score : $1200$ points

## Problem Statement

The following process is carried out on a permutation $P$ of $(1,2,\dots,N)$.

We have $N$ cards, numbered $1$ to $N$. Card $i$ has the integer $P_i$ written on it.

There are an integer $X=1$ and a boy called PCT, who initially has nothing. PCT does the following procedure for each $i=1,2,\dots,N$ in this order.

- Get Card $i$. Then, repeat the following action as long as he has a card with $X$ written on it:
- -   - eat the card with $X$ written on it, and then add $1$ to $X$.

- If PCT currently has $M$ or more cards, throw away all cards he has and terminate the process, without performing any more procedures.

Here, let us define the score of the permutation $P$ as follows:

- if the process is terminated by throwing away cards, the score of $P$ is $0$;
- if the process is carried out through the end without throwing away cards, the score of $P$ is $\prod_{i=1}^{N-1}$ $($ the number of cards PCT has at the end of the $i$-th procedure $)$.

There are $N!$ permutations $P$ of $(1,2,\dots,N)$. Find the sum of the scores of all those permutations, modulo $998244353$.

## Constraints

- $2 \le N \le 2 \times 10^5$
- $2 \le M \le N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
3 2
```

```output1
1
```

For $P=(3,1,2)$, the process goes as follows.

- The first procedure:-   - PCT gets Card $1$.
-   - PCT currently has $1$ card, so he goes on.
- The second procedure:-   - PCT gets Card $2$.
-   - PCT eats Card $2$ and make $X = 2$.
-   - PCT currently has $1$ card, so he goes on.
- The third procedure:-   - PCT gets Card $3$.
-   - PCT eats Cards $1,3$ and make $X = 4$.
-   - PCT currently has $0$ cards, so he goes on.

The process is carried out through the end, so the score of $(3,1,2)$ is $1 \times 1 = 1$.

Other than $(3,1,2)$, there is no permutation with a score of $1$ or greater, so the answer is $1$.

```input2
3 3
```

```output2
5
```

```input3
146146 146
```

```output3
103537573
```