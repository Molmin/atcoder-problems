Score : $800$ points

## Problem Statement

A *fantastic IS* is an integer sequence of length $N$ whose every element is between $1$ and $M$ (inclusive) that satisfies the following condition.

- For every integer $i$ such that $1 \le i \le K$, one of the following holds.-   - $A_{P_i} &amp;lt; X_i$ and $A_{Q_i} &amp;lt; Y_i$;
-   - $A_{P_i} = X_i$ and $A_{Q_i} = Y_i$;
-   - $A_{P_i} &amp;gt; X_i$ and $A_{Q_i} &amp;gt; Y_i$.

Determine whether a fantastic IS exists. If it does, find the minimum possible sum of the elements in a fantastic IS.

## Constraints

- $1 \le N,M,K \le 2 \times 10^5$
- $1 \le P_i,Q_i \le N$
- $1 \le X_i,Y_i \le M$
- $P_i \neq Q_i$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $P_1$ $X_1$ $Q_1$ $Y_1$
> 
> $P_2$ $X_2$ $Q_2$ $Y_2$
> 
> $\vdots$
> 
> $P_K$ $X_K$ $Q_K$ $Y_K$

## Output

If a fantastic IS exists, print the minimum possible sum of the elements in a fantastic IS; otherwise, print $-1$.

```input1
3 4 3
3 1 1 2
1 1 2 2
3 4 1 4
```

```output1
6
```

$A=(2,3,1)$ fully satisfies the condition and thus is a fantastic IS, whose sum of the elements is $6$.

There is no fantastic IS whose sum of the elements is less than $6$, so the answer is $6$.

```input2
2 2 2
1 1 2 2
2 1 1 2
```

```output2
-1
```

There is no fantastic IS, so $-1$ should be printed.

```input3
5 10 10
4 1 2 7
5 1 3 2
2 9 4 4
5 4 2 9
2 9 1 9
4 8 3 10
5 7 1 5
3 5 1 2
3 8 2 10
2 9 4 8
```

```output3
12
```