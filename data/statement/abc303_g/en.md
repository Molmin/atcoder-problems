Score : $550$ points

## Problem Statement

$N$ bags are arranged in a row.  The $i$-th bag contains $x_i$ yen (the currency in Japan).  

Takahashi and Aoki, who have sufficient money, take alternating turns to perform the following action:

- choose one of the following three actions and perform it.-   - choose the leftmost or rightmost bag and take it.
-   - pay $A$ yen to Snuke.  Then, repeat the following action $\min(B,n)$ times (where $n$ is the number of the remaining bags): choose the leftmost or rightmost bag and take it.
-   - pay $C$ yen to Snuke.  Then, repeat the following action $\min(D,n)$ times (where $n$ is the number of the remaining bags): choose the leftmost or rightmost bag and take it.

When all the bags are taken, Takahashi's benefit is defined by "(total amount of money in the bags that Takahashi took) - (total amount of money that Takahashi paid to snuke)"; let this amount be $X$ yen.  We similarly define Aoki's benefit, denoting the amount by $Y$ yen.

Find $X-Y$ if Takahashi and Aoki make optimal moves to respectively maximize and minimize $X-Y$.

## Constraints

- $1 \leq N \leq 3000$
- $1 \leq x_i \leq 10^9$
- $1 \leq A,C \leq 10^9$
- $1 \leq B,D \leq N$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $A$ $B$ $C$ $D$
> 
> $x_1$ $x_2$ $\ldots$ $x_N$

## Output

Print the answer.

```input1
5 10 2 1000000000 1
1 100 1 1 1
```

```output1
90
```

If Takahashi and Aoki make optimal moves, it ends up being $X=92$ and $Y=2$.

```input2
10 45 3 55 4
5 10 15 20 25 30 35 40 45 50
```

```output2
85
```

```input3
15 796265 10 165794055 1
18804175 185937909 1934689 18341 68370722 1653 1 2514380 31381214 905 754483 11 5877098 232 31600
```

```output3
302361955
```