Score : $300$ points

## Problem Statement

You are playing a game.

There are $N$ enemies lined up in a row, and the $i$-th enemy from the front has a health of $H_i$.

You will repeat the following action until the healths of all enemies become $0$ or less, using a variable $T$ initialized to $0$.

- Increase $T$ by $1$. Then, attack the frontmost enemy with health $1$ or more. If $T$ is a multiple of $3$, the enemy's health decreases by $3$; otherwise, it decreases by $1$.

Find the value of $T$ when the healths of all enemies become $0$ or less.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq H_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $H_1$ $H_2$ $\ldots$ $H_N$

## Output

Print the answer.

```input1
3
6 2 2
```

```output1
8
```

The actions are performed as follows:

- $T$ becomes $1$. Attack the 1st enemy, and its health becomes $6-1=5$.
- $T$ becomes $2$. Attack the 1st enemy, and its health becomes $5-1=4$.
- $T$ becomes $3$. Attack the 1st enemy, and its health becomes $4-3=1$.
- $T$ becomes $4$. Attack the 1st enemy, and its health becomes $1-1=0$.
- $T$ becomes $5$. Attack the 2nd enemy, and its health becomes $2-1=1$.
- $T$ becomes $6$. Attack the 2nd enemy, and its health becomes $1-3=-2$.
- $T$ becomes $7$. Attack the 3rd enemy, and its health becomes $2-1=1$.
- $T$ becomes $8$. Attack the 3rd enemy, and its health becomes $1-1=0$.

```input2
9
1 12 123 1234 12345 123456 1234567 12345678 123456789
```

```output2
82304529
```

```input3
5
1000000000 1000000000 1000000000 1000000000 1000000000
```

```output3
3000000000
```

Beware of integer overflow.