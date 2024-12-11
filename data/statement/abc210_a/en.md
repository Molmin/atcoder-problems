Score : $100$ points

## Problem Statement

Takahashi is visiting a shop specializing in cabbage.

The shop sells cabbage for $X$ yen (Japanese currency) per head.<br>
However, if you buy more than $A$ heads of cabbage at once, the $(A+1)$-th and subsequent heads will be sold for $Y$ yen per head.<br>
(It is guaranteed that $Y \lt X$. See Sample Input/Output 1 for clarity.)

Print the amount of money needed to buy $N$ heads of cabbage.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A \leq 10^5$
- $1 \leq Y \lt X \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $X$ $Y$

## Output

Print the amount of money needed to buy $N$ heads of cabbage (as an integer).

```input1
5 3 20 15
```

```output1
90
```

You need to pay $20$ yen for each of the $1$-st through $3$-rd heads of cabbage, and $15$ yen for each of the $4$-th and $5$-th heads of cabbage.<br>
Thus, you need to pay a total of $20+20+20+15+15 = 90$ yen for the $5$ heads of cabbage.

```input2
10 10 100 1
```

```output2
1000
```