Score : $300$ points

## Problem Statement

Takahashi is planning an $N$-day train trip.<br>
For each day, he can pay the regular fare or use a one-day pass.

Here, for $1\leq i\leq N$, the regular fare for the $i$-th day of the trip is $F_i$ yen.<br>
On the other hand, a batch of $D$ one-day passes is sold for $P$ yen. You can buy as many passes as you want, but only in units of $D$.<br>
Each purchased pass can be used on any day, and it is fine to have some leftovers at the end of the trip.

Find the minimum possible total cost for the $N$-day trip, that is, the cost of purchasing one-day passes plus the total regular fare for the days not covered by one-day passes.

## Constraints

- $1\leq N\leq 2\times 10^5$
- $1\leq D\leq 2\times 10^5$
- $1\leq P\leq 10^9$
- $1\leq F_i\leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $D$ $P$
> 
> $F_1$ $F_2$ $\ldots$ $F_N$

## Output

Print the minimum possible total cost for the $N$-day trip.

```input1
5 2 10
7 1 6 3 6
```

```output1
20
```

If he buys just one batch of one-day passes and uses them for the first and third days, the total cost will be $(10\times 1)+(0+1+0+3+6)=20$, which is the minimum cost needed.<br>
Thus, print $20$.

```input2
3 1 10
1 2 3
```

```output2
6
```

The minimum cost is achieved by paying the regular fare for all three days.

```input3
8 3 1000000000
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000
```

```output3
3000000000
```

The minimum cost is achieved by buying three batches of one-day passes and using them for all eight days.<br>
Note that the answer may not fit into a $32$-bit integer type.