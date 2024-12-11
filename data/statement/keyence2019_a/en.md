Score : $100$ points

## Problem Statement

You are given four digits $N_1, N_2, N_3$ and $N_4$. Determine if these can be arranged into the sequence of digits "$1974$".

## Constraints

- $0 \leq N_1, N_2, N_3, N_4 \leq 9$
- $N_1, N_2, N_3$ and $N_4$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N_1$ $N_2$ $N_3$ $N_4$

## Output

If $N_1, N_2, N_3$ and $N_4$ can be arranged into the sequence of digits "$1974$", print `YES`; if they cannot, print `NO`.

```input1
1 7 9 4
```

```output1
YES
```

We can get $1974$ by swapping $N_2$ and $N_3$.

```input2
1 9 7 4
```

```output2
YES
```

We already have $1974$ before doing anything.

```input3
1 2 9 1
```

```output3
NO
```

```input4
4 9 0 8
```

```output4
NO
```