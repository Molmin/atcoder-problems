Score : $625$ points  

## Problem Statement

You are given three length-$N$ sequences of positive integers: $A=(A_1,A_2,\ldots,A_N)$, $B=(B_1,B_2,\ldots,B_N)$, and $C=(C_1,C_2,\ldots,C_N)$.  

Find the number of pairs of positive integers $(x, y)$ that satisfy the following condition:  

- $A_i \times x + B_i \times y &lt; C_i$ for all $1 \leq i \leq N$.

It can be proved that the number of such pairs of positive integers satisfying the condition is finite.  

You are given $T$ test cases, each of which should be solved.  

## Constraints

- $1 \leq T \leq 2 \times 10^5$
- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i, B_i, C_i \leq 10^9$
- The sum of $N$ over all test cases is at most $2 \times 10^5$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format. Here, $\mathrm{case}_i$ refers to the $i$-th test case.

> $T$  
> 
> $\mathrm{case}_1$  
> 
> $\mathrm{case}_2$  
> 
> $\vdots$  
> 
> $\mathrm{case}_T$

Each test case is given in the following format:

> $N$  
> 
> $A_1$ $B_1$ $C_1$  
> 
> $A_2$ $B_2$ $C_2$  
> 
> $\vdots$  
> 
> $A_N$ $B_N$ $C_N$

## Output

Print $T$ lines. The $i$-th line $(1 \leq i \leq T)$ should contain the answer for $\mathrm{case}_i$.  

```input1
2
2
1 1 4
1 2 5
1
1 1 2
```

```output1
2
0
```

In the first test case, there are two valid pairs of integers: $(x, y) = (1, 1), (2,1)$. Thus, the first line should contain $2$.  

In the second test case, there are no valid pairs of integers. Thus, the second line should contain $0$.  

```input2
3
7
138 16011 918976
5478 7748 499926
5234 17727 748589
1157 10511 643136
31200 3005 721285
28839 14469 798851
1933 5378 864127
9
17775 1665 386430
37001 863 922418
9756 4182 746671
12379 9106 807578
3984 4049 640539
25333 9869 780810
20372 7000 688738
16107 11974 827227
10779 10531 770510
5
4916 14132 460944
11856 45422 610561
56014 18216 825793
10363 6220 945356
37418 33866 851593
```

```output2
660
995
140
```