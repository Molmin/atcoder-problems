Score: $250$ points

## Problem Statement

There are $N$ types of beans, one bean of each type. The $i$-th type of bean has a deliciousness of $A_i$ and a color of $C_i$. The beans are mixed and can only be distinguished by color.

You will choose one color of beans and eat one bean of that color. By selecting the optimal color, maximize the minimum possible deliciousness of the bean you eat.

## Constraints

- $1 \leq N \leq 2 \times 10^{5}$
- $1 \leq A_i \leq 10^{9}$
- $1 \leq C_i \leq 10^{9}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $C_1$
> 
> $A_2$ $C_2$
> 
> $\vdots$
> 
> $A_N$ $C_N$

## Output

Print as an integer the maximum value of the minimum possible deliciousness of the bean you eat.

```input1
4
100 1
20 5
30 5
40 1
```

```output1
40
```

Note that beans of the same color cannot be distinguished from each other.

You can choose color $1$ or color $5$.

- There are two types of beans of color $1$, with deliciousness of $100$ and $40$. Thus, the minimum deliciousness when choosing color $1$ is $40$.
- There are two types of beans of color $5$, with deliciousness of $20$ and $30$. Thus, the minimum deliciousness when choosing color $5$ is $20$.

To maximize the minimum deliciousness, you should choose color $1$, so print the minimum deliciousness in that case: $40$.

```input2
10
68 3
17 2
99 2
92 4
82 4
10 3
100 2
78 1
3 1
35 4
```

```output2
35
```