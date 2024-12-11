Score : $500$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `X` and `Y`.
You will choose $K$ characters at distinct positions in $S$ and change each of them: `X` becomes `Y` and `Y` becomes `X`.
Find the maximum possible number of pairs of consecutive `Y`s in the resulting string.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq K \leq N$
- $S$ is a string of length $N$ consisting of `X` and `Y`.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the maximum possible number of pairs of consecutive `Y`s in the resulting string.

```input1
5 1
XYXYX
```

```output1
2
```

You will choose one character.

- If you choose the $1$-st character, the resulting string is `YYXYX`, with one pair of consecutive `Y`s at positions $1, 2$.
- If you choose the $2$-nd character, the resulting string is `XXXYX`, with no pair of consecutive `Y`s.
- If you choose the $3$-rd character, the resulting string is `XYYYX`, with two pairs of consecutive `Y`s at positions $2, 3$ and $3, 4$.
- If you choose the $4$-th character, the resulting string is `XYXXX`, with no pair of consecutive `Y`s.
- If you choose the $5$-th character, the resulting string is `XYXYY`, with one pair of consecutive `Y`s at positions $4, 5$.

Thus, the sought maximum number is $2$.

```input2
5 4
XYXYX
```

```output2
2
```

It is optimal to choose the $1$-st, $2$-nd, $3$-rd, and $5$-th characters to get `YXYYY`, or choose the $1$-st, $3$-rd, $4$-th, and $5$-th characters to get `YYYXY`.
Note that you may not choose a character at the same position multiple times.