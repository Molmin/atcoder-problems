Score : $500$ points

## Problem Statement

You are given a sequence $A=(A_0,A_1,\ldots,A_{N-1})$ of length $N$.<br>
There is an initially empty dish.  Takahashi is going to repeat the following operation $K$ times.

- Let $X$ be the number of candies on the dish.  He puts $A_{(X\bmod N)}$ more candies on the dish.
Here, $X\bmod N$ denotes the remainder when $X$ is divided by $N$.

Find how many candies are on the dish after the $K$ operations.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $1 \leq K \leq 10^{12}$
- $1 \leq A_i\leq 10^6$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_0$ $A_1$ $\ldots$ $A_{N-1}$

## Output

Print the answer.

```input1
5 3
2 1 6 3 1
```

```output1
11
```

The number of candies on the dish transitions as follows.

- In the $1$-st operation, we have $X=0$, so $A_{(0\mod 5)}=A_0=2$ more candies will be put on the dish.
- In the $2$-nd operation, we have $X=2$, so $A_{(2\mod 5)}=A_2=6$ more candies will be put on the dish.
- In the $3$-rd operation, we have $X=8$, so $A_{(8\mod 5)}=A_3=3$ more candies will be put on the dish.

Thus, after the $3$ operations, there will be $11$ candies on the dish.  Note that you must **not** print the remainder divided by $N$.

```input2
10 1000000000000
260522 914575 436426 979445 648772 690081 933447 190629 703497 47202
```

```output2
826617499998784056
```

The answer may not fit into a $32$-bit integer type.