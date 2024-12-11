Score : $600$ points

## Problem Statement

We have $N$ cards numbered $1$ to $N$.<br>
Card $i$ has an integer $A_i$ written on the front and an integer $B_i$ written on the back. Here, $\sum_{i=1}^N (A_i + B_i) = M$.<br>
For each $k=0,1,2,...,M$, solve the following problem.

The $N$ cards are arranged so that their front sides are visible. You may choose between $0$ and $N$ cards (inclusive) and flip them.<br>
To make the sum of the visible numbers equal to $k$, at least how many cards must be flipped? Print this number of cards.<br>
If there is no way to flip cards to make the sum of the visible numbers equal to $k$, print $-1$ instead.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq M \leq 2 \times 10^5$
- $0 \leq A_i, B_i \leq M$
- $\sum_{i=1}^N (A_i + B_i) = M$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$ 
> 
> $A_N$ $B_N$

## Output

Print $M+1$ lines. The $i$-th line should contain the answer for $k=i-1$.

```input1
3 6
0 2
1 0
0 3
```

```output1
1
0
2
1
1
3
2
```

For $k=0$, for instance, flipping just card $2$ makes the sum of the visible numbers $0+0+0=0$. This choice is optimal.<br>
For $k=5$, flipping all cards makes the sum of the visible numbers $2+0+3=5$. This choice is optimal.

```input2
2 3
1 1
0 1
```

```output2
-1
0
1
-1
```

```input3
5 12
0 1
0 3
1 0
0 5
0 2
```

```output3
1
0
1
1
1
2
1
2
2
2
3
3
4
```