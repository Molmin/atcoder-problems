Score : $100$ points

## Problem Statement

There are $12$ strings $S_1, S_2, \ldots, S_{12}$ consisting of lowercase English letters.

Find how many integers $i$ $(1 \leq i \leq 12)$ satisfy that the length of $S_i$ is $i$.

## Constraints

- Each $S_i$ is a string of length between $1$ and $100$, inclusive, consisting of lowercase English letters. $(1 \leq i \leq 12)$

## Input

The input is given from Standard Input in the following format:

> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_{12}$

## Output

Print the number of integers $i$ $(1 \leq i \leq 12)$ such that the length of $S_i$ is $i$.

```input1
january
february
march
april
may
june
july
august
september
october
november
december
```

```output1
1
```

There is only one integer $i$ such that the length of $S_i$ is $i$: $9$. Thus, print `1`.

```input2
ve
inrtfa
npccxva
djiq
lmbkktngaovl
mlfiv
fmbvcmuxuwggfq
qgmtwxmb
jii
ts
bfxrvs
eqvy
```

```output2
2
```

There are two integers $i$ such that the length of $S_i$ is $i$: $4$ and $8$. Thus, print `2`.