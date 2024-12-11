Score : $500$ points

## Problem Statement

For a set $S$ of pairs of non-negative integers, and a non-negative integer $x$, let $f_S(x)$ defined as $\displaystyle f_S(x)=\min_{(a, b) \in S} \left| \left| x-a \right| - b \right|$.

We have a set $T$ of pairs of non-negative integers. Initially, $T=\lbrace (A, B)\rbrace$.

Process $Q$ queries. The $i$-th query gives you three non-negative integers $t_i$, $a_i$, and $b_i$, and asks you to do the following.

- If $t_i=1$, add to $T$ the pair $(a_i, b_i)$ of non-negative integers.
- If $t_i=2$, print the minimum value of $f_{T}(x)$ for a non-negative integer $x$ such that $a_i \leq x \leq b_i$.

## Constraints

- $1 \leq Q \leq 2 \times 10^5$
- $0 \leq A,B \leq 10^{9}$
- $t_i$ is $1$ or $2$.
- $0 \leq a_i,b_i \leq 10^{9}$
- If $t_i=2$, then $a_i \leq b_i$.
- There is at least one query with $t_i=2$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $Q$ $A$ $B$
> 
> $t_1$ $a_1$ $b_1$
> 
> $t_2$ $a_2$ $b_2$
> 
> $\vdots$
> 
> $t_Q$ $a_Q$ $b_Q$

## Output

For each query with $t_i=2$ in the given order, print the answer in its own line.

```input1
4 0 5
1 3 11
2 7 8
1 8 2
2 8 9
```

```output1
2
1
```

In the second query, $T=\lbrace(0, 5), (3, 11) \rbrace$. For $x=7$, we have $f_T(7)=\min \lbrace \left| \left|7-0\right|-5\right|, \left| \left|7-3\right|-11\right| \rbrace=\min \lbrace 2, 7 \rbrace=2$. Similarly, $f_T(8)=3$. Thus, the answer is $\min \lbrace 2, 3 \rbrace =2$.

In the fourth query, $T=\lbrace(0, 5), (3, 11), (8, 2) \rbrace$. In $8 \leq x \leq 9$, $f_T(x)$ takes the minimum value $f_T(9)=1$ at $x=9$.

```input2
2 1 2
1 2 3
2 2 6
```

```output2
0
```

```input3
20 795629912 123625148
2 860243184 892786970
2 645778367 668513124
1 531411849 174630323
1 635062977 195695960
2 382061637 411843651
1 585964296 589553566
1 310118888 68936560
1 525351160 858166280
2 395304415 429823333
2 583145399 703645715
2 97768492 218377432
1 707220749 459967102
1 210842017 363390878
2 489541834 553583525
2 731279777 811513313
1 549864943 493384741
1 815378318 826084592
2 369622093 374205455
1 78240781 821999998
2 241667193 243982581
```

```output3
26468090
3491640
25280111
9543684
0
22804896
20649370
19245624
4849993
484865
```