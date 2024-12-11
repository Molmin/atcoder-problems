Score : $500$ points

## Problem Statement

In the world where Takahashi lives, a week has $N$ days.  

Takahashi, the king of the Kingdom of AtCoder, assigns "weekday" or "holiday" to each day of week.  The assignments should be the same for all weeks.  At least one day of week should be assigned "holiday".

Under such conditions, the productivity of the $i$-th day of week is defined by a sequence $A$ of length $N$ as follows:

- if the $i$-th day of week is "holiday", its productivity is $0$;
- if the $i$-th day of week is "weekday", its productivity is $A_{\min(x,y)}$, if the last holiday is $x$ days before and the next one is $y$ days after.-   - Note that the last/next holiday may belong to a different week due to the periodic assignments.  For details, see the Samples.

Find the maximum productivity per week when the assignments are chosen optimally.<br>
Here, the productivity per week refers to the sum of the productivities of the $1$-st, $2$-nd, $\dots$, and $N$-th day of week.

## Constraints

- All values in the input are integers.
- $1 \le N \le 5000$
- $1 \le A_i \le 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer as an integer.

```input1
7
10 10 1 1 1 1 1
```

```output1
50
```

For example, we can assign "holiday" to the $2$-nd and $4$-th day of week and "weekday" to the rest to achieve a productivity of $50$ per week:

- the $1$-st day of week ... $x=4$ and $y=1$, so its productivity is $A_1 = 10$.
- the $2$-nd day of week ... it is holiday, so its productivity is $0$.
- the $3$-st day of week ... $x=1$ and $y=1$, so its productivity is $A_1 = 10$.
- the $4$-th day of week ... it is holiday, so its productivity is $0$.
- the $5$-th day of week ... $x=1$ and $y=4$, so its productivity is $A_1 = 10$.
- the $6$-th day of week ... $x=2$ and $y=3$, so its productivity is $A_2 = 10$.
- the $7$-th day of week ... $x=3$ and $y=2$, so its productivity is $A_2 = 10$.

It is impossible to make the productivity per week $51$ or greater.

```input2
10
200000000 500000000 1000000000 800000000 100000000 80000000 600000 900000000 1 20
```

```output2
5100000000
```

```input3
20
38 7719 21238 2437 8855 11797 8365 32285 10450 30612 5853 28100 1142 281 20537 15921 8945 26285 2997 14680
```

```output3
236980
```