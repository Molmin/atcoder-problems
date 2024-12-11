Score : $300$ points

## Problem Statement

Tak has $N$ cards. On the $i$-th $(1 \leq i \leq N)$ card is written an integer $x_i$.
He is selecting one or more cards from these $N$ cards, so that the average of the integers written on the selected cards is exactly $A$.
In how many ways can he make his selection?

## Constraints

- $1 \leq N \leq 50$
- $1 \leq A \leq 50$
- $1 \leq x_i \leq 50$
- $N,\,A,\,x_i$ are integers.

## Partial Score

- $200$ points will be awarded for passing the test set satisfying $1 \leq N \leq 16$.

## Input

The input is given from Standard Input in the following format:

> $N$ $A$
> 
> $x_1$ $x_2$ $...$ $x_N$

## Output

Print the number of ways to select cards such that the average of the written integers is exactly $A$.

```input1
4 8
7 9 8 9
```

```output1
5
```

- The following are the $5$ ways to select cards such that the average is $8$:-   - Select the $3$-rd card.
-   - Select the $1$-st and $2$-nd cards.
-   - Select the $1$-st and $4$-th cards.
-   - Select the $1$-st, $2$-nd and $3$-rd cards.
-   - Select the $1$-st, $3$-rd and $4$-th cards.

```input2
3 8
6 6 9
```

```output2
0
```

```input3
8 5
3 6 2 8 7 6 5 9
```

```output3
19
```

```input4
33 3
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
```

```output4
8589934591
```

- The answer may not fit into a $32$-bit integer.