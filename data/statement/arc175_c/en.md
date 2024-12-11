Score: $600$ points

## Problem Statement

You are given $N$ pairs of integers $(L_1, R_1), (L_2, R_2), \dots, (L_N, R_N)$. Here, $L_i \leq R_i$ for all $1 \leq i \leq N$.

A sequence of $N$ integers $A = (A_1, A_2, \ldots, A_N)$ is called a **good integer sequence** if it satisfies the following condition:

- $L_i \leq A_i \leq R_i$ for all $1 \leq i \leq N$.

Find the lexicographically smallest **good integer sequence** $A$ that minimizes $\displaystyle \sum_{i = 1}^{N-1} |A_{i+1} - A_{i}|$.

 What is lexicographical order for sequences?

A sequence $S = (S_1,S_2,\ldots,S_{|S|})$ is said to be **lexicographically smaller** than a sequence $T = (T_1,T_2,\ldots,T_{|T|})$ if 1. or 2. below holds.
Here, $|S|, |T|$ denote the lengths of $S$ and $T$, respectively.

1. $|S| \lt |T|$ and $(S_1,S_2,\ldots,S_{|S|}) = (T_1,T_2,\ldots,T_{|S|})$.
2. There is an integer $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ such that both of the following hold:
1.    - $(S_1,S_2,\ldots,S_{i-1}) = (T_1,T_2,\ldots,T_{i-1})$.
2.    - $S_i$ is smaller than $T_i$ (as a number).

## Constraints

- All input values are integers.
- $2 \leq N \leq 5 \times 10^5$
- $0 \leq L_i \leq R_i \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_N$ $R_N$

## Output

Print the answer in a single line in the following format:

> $A_1$ $A_2$ $\ldots$ $A_N$

```input1
4
1 10
8 13
3 4
5 20
```

```output1
8 8 4 5
```

$(A_1, A_2, A_3, A_4) = (8, 8, 4, 5)$ is a good integer sequence. In this case, $\sum_{i = 1}^{N-1} |A_{i+1} - A_{i}| = |8 - 8| + |4 - 8| + |5 - 4| = 5$, which is the minimum value of $\sum_{i = 1}^{N-1} |A_{i+1} - A_{i}|$.

```input2
3
20 24
3 24
1 75
```

```output2
20 20 20
```

Note that when multiple good integer sequences $A$ minimize $\sum_{i = 1}^{N-1} |A_{i+1} - A_{i}|$, you should print the lexicographically smallest of them.

```input3
15
335279264 849598327
446755913 822889311
526239859 548830120
181424399 715477619
342858071 625711486
448565595 480845266
467825612 647639160
160714711 449656269
336869678 545923679
61020590 573085537
626006012 816372580
135599877 389312924
511429216 547865075
561330066 605997004
539239436 921749002
```

```output3
526239859 526239859 526239859 467825612 467825612 467825612 467825612 449656269 449656269 449656269 626006012 389312924 511429216 561330066 561330066
```