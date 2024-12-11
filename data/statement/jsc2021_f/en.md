Score : $600$ points

## Problem Statement

We have a sequence $a$ of length $N$ and a sequence $b$ of length $M$. Initially, every element in $a$ and $b$ is $0$.<br>
You are asked to process $Q$ queries. In the $i$-th query, given three integers $T_i$, $X_i$, and $Y_i$, do the following:

- if $T_i = 1$: replace $a_{X_i}$ with $Y_i$;
- if $T_i = 2$: replace $b_{X_i}$ with $Y_i$.

Then, after processing each query, print the value $\displaystyle \sum_{i = 1}^N \sum_{j = 1}^M \max(a_i, b_j)$.

## Constraints

- $1 \le N \le 2 \times 10^5$
- $1 \le M \le 2 \times 10^5$
- $1 \le Q \le 2 \times 10^5$
- $T_i$ is $1$ or $2$.
- If $T_i = 1$, $1 \le X_i \le N$.
- If $T_i = 2$, $1 \le X_i \le M$.
- $1 \le Y_i \le 10^8$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $Q$
> 
> $T_1$ $X_1$ $Y_1$
> 
> $T_2$ $X_2$ $Y_2$
> 
> $T_3$ $X_3$ $Y_3$
> 
> $\hspace{21pt} \vdots$
> 
> $T_Q$ $X_Q$ $Y_Q$

## Output

Print $Q$ integers as instructed in Problem Statement, with newline as separator.

```input1
2 2 4
1 1 10
2 1 20
2 2 5
1 1 30
```

```output1
20
50
55
85
```

If we write $\max(a_i, b_j)$ at the $i$-th row and $j$-th column in a grid, the four queries will change it as follows:
![](https://img.atcoder.jp/ghi/9a4098e2aa50b21c51ce3664d278ba87.png)  

```input2
3 3 5
1 3 10
2 1 7
1 3 5
2 2 10
2 1 1
```

```output2
30
44
31
56
42
```

```input3
200000 200000 4
2 112219 100000000
1 73821 100000000
2 26402 100000000
1 73821 100000000
```

```output3
20000000000000
39999900000000
59999800000000
59999800000000
```

The integers to be printed may not fit into a $32$-bit integer type.