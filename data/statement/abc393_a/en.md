Score : $100$ points

## Problem Statement

There are four types of oysters, labeled $1$, $2$, $3$, and $4$. Exactly one of these types causes stomach trouble if eaten. The other types do not cause stomach trouble when eaten.

Takahashi ate oysters $1$ and $2$, and Aoki ate oysters $1$ and $3$. The information on whether each person got sick is given as two strings $S_1$ and $S_2$. Specifically, $S_1 =$ `sick` means Takahashi got sick, and $S_1 =$ `fine` means Takahashi did not get sick. Likewise, $S_2 =$ `sick` means Aoki got sick, and $S_2 =$ `fine` means Aoki did not get sick.

Based on the given information, find which type of oyster causes stomach trouble.

## Constraints

- Each of $S_1$ and $S_2$ is `sick` or `fine`.

## Input

The input is given from Standard Input in the following format:

> $S_1$ $S_2$

## Output

Print the label of the oyster that causes stomach trouble if eaten.

```input1
sick fine
```

```output1
2
```

Takahashi (who ate oysters $1$ and $2$) got sick, and Aoki (who ate oysters $1$ and $3$) did not get sick, so it can be concluded that oyster $2$ causes stomach trouble.

```input2
fine fine
```

```output2
4
```

Neither Takahashi (who ate oysters $1$ and $2$) nor Aoki (who ate oysters $1$ and $3$) got sick, so it can be concluded that oyster $4$ causes stomach trouble.