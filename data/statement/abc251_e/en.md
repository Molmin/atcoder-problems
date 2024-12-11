Score : $500$ points

## Problem Statement

Takahashi is with $N$ animals.
The $N$ animals are called Animal $1$, Animal $2$, $\ldots$, Animal $N$.

Takahashi will perform the following $N$ kinds of action.  Each action can be performed any number of (possibly zero) times.

- Pay $A_1$ yen (the currency in Japan) to feed Animals $1$ and $2$.
- Pay $A_2$ yen to feed Animals $2$ and $3$.
- Pay $A_3$ yen to feed Animals $3$ and $4$.
- $\cdots$
- Pay $A_i$ yen to feed Animals $i$ and $(i+1)$.
- $\cdots$
- Pay $A_{N-2}$ yen to feed Animals $(N-2)$ and $(N-1)$.
- Pay $A_{N-1}$ yen to feed Animals $(N-1)$ and $N$.
- Pay $A_N$ yen to feed Animals $N$ and $1$.

Note that the $N$-th action above feeds "Animals $N$ and $1$."

Print the minimum possible total cost to feed every animal at least once.

## Constraints

- $2 \leq N \leq 3 \times 10^5$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the minimum possible total cost to feed every animal at least once.

```input1
5
2 5 3 2 5
```

```output1
7
```

If Takahashi performs the $1$-st, $3$-rd, and $4$-th actions once each, Animals $1$, $2$, $3$, $4$, and $5$ are fed once, once, once, twice, once, respectively, so every animal is fed at least once.
The total cost to do so is $A_1 + A_3 + A_4 = 2 + 3 + 2 = 7$ yen, which is the minimum possible.

```input2
20
29 27 79 27 30 4 93 89 44 88 70 75 96 3 78 39 97 12 53 62
```

```output2
426
```