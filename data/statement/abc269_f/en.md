Score : $500$ points

## Problem Statement

We have a grid with $N$ rows and $M$ columns. The square $(i,j)$ at the $i$-th row from the top and $j$-th column from the left has an integer $(i-1) \times M + j$ written on it.<br>
Let us perform the following operation on this grid.

- For every square $(i,j)$ such that $i+j$ is odd, replace the integer on that square with $0$.

Answer $Q$ questions on the grid after the operation.<br>
The $i$-th question is as follows:

- Find the sum of the integers written on all squares $(p,q)$ that satisfy all of the following conditions, modulo $998244353$.-   - $A_i \le p \le B_i$.
-   - $C_i \le q \le D_i$.

## Constraints

- All values in the input are integers.
- $1 \le N,M \le 10^9$
- $1 \le Q \le 2 \times 10^5$
- $1 \le A_i \le B_i \le N$
- $1 \le C_i \le D_i \le M$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $Q$
> 
> $A_1$ $B_1$ $C_1$ $D_1$
> 
> $A_2$ $B_2$ $C_2$ $D_2$
> 
> $\vdots$
> 
> $A_Q$ $B_Q$ $C_Q$ $D_Q$

## Output

Print $Q$ lines.<br>
The $i$-th line should contain the answer to the $i$-th question as an integer.

```input1
5 4
6
1 3 2 4
1 5 1 1
5 5 1 4
4 4 2 2
5 5 4 4
1 5 1 4
```

```output1
28
27
36
14
0
104
```

The grid in this input is shown below.<br>
![](https://img.atcoder.jp/abc269/81d92debe7aa949266f3a00cff13b513.png)

This input contains six questions.

- The answer to the first question is $0+3+0+6+0+8+0+11+0=28$.
- The answer to the second question is $1+0+9+0+17=27$.
- The answer to the third question is $17+0+19+0=36$.
- The answer to the fourth question is $14$.
- The answer to the fifth question is $0$.
- The answer to the sixth question is $104$.

```input2
1000000000 1000000000
3
1000000000 1000000000 1000000000 1000000000
165997482 306594988 719483261 992306147
1 1000000000 1 1000000000
```

```output2
716070898
240994972
536839100
```

For the first question, note that although the integer written on the square $(10^9,10^9)$ is $10^{18}$, you are to find it modulo $998244353$.

```input3
999999999 999999999
3
999999999 999999999 999999999 999999999
216499784 840031647 84657913 415448790
1 999999999 1 999999999
```

```output3
712559605
648737448
540261130
```