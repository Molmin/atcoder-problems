## Problem Statement

Snuke loves colorful balls. He has a total of $N \times K$ balls, $K$ in each of his favorite $N$ colors. The colors are numbered $1$ through $N$.

He will arrange all of the balls in a row from left to right, in arbitrary order. Then, for each of the $N$ colors, he will paint the leftmost ball of that color into color $0$, a color different from any of the $N$ original colors.

After painting, how many sequences of the colors of the balls are possible? Find this number modulo $10^9+7$.

## Constraints

- $1 \leq N,K \leq 2,000$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the number of the possible sequences of the colors of the balls after painting, modulo $10^9+7$.

```input1
2 2
```

```output1
4
```

The following $4$ sequences are possible:

- $(0,1,0,2)$
- $(0,0,1,2)$
- $(0,2,0,1)$
- $(0,0,2,1)$

```input2
3 1
```

```output2
1
```

The following $1$ sequence is possible:

- $(0,0,0)$

```input3
2 3
```

```output3
14
```

```input4
2000 2000
```

```output4
546381702
```