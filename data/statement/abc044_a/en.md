Score : $100$ points

## Problem Statement

There is a hotel with the following accommodation fee:

- $X$ yen (the currency of Japan) per night, for the first $K$ nights
- $Y$ yen per night, for the $(K+1)$-th and subsequent nights

Tak is staying at this hotel for $N$ consecutive nights.
Find his total accommodation fee.

## Constraints

- $1 \leq N, K \leq 10000$
- $1 \leq Y &lt; X \leq 10000$
- $N,\,K,\,X,\,Y$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $K$
> 
> $X$
> 
> $Y$

## Output

Print Tak's total accommodation fee.

```input1
5
3
10000
9000
```

```output1
48000
```

The accommodation fee is as follows:

- $10000$ yen for the $1$-st night
- $10000$ yen for the $2$-nd night
- $10000$ yen for the $3$-rd night
- $9000$ yen for the $4$-th night
- $9000$ yen for the $5$-th night

Thus, the total is $48000$ yen.

```input2
2
3
10000
9000
```

```output2
20000
```