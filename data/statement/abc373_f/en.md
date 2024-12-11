Score : $550$ points

## Problem Statement

There are $N$ types of items. The $i$-th type of item has a weight of $w_i$ and a value of $v_i$. Each type has $10^{10}$ items available.

Takahashi is going to choose some items and put them into a bag with capacity $W$. He wants to maximize the value of the selected items while avoiding choosing too many items of the same type. Hence, he defines the **happiness** of choosing $k_i$ items of type $i$ as $k_i v_i - k_i^2$. He wants to choose items to maximize the total happiness over all types while keeping the total weight at most $W$. Calculate the maximum total happiness he can achieve.

## Constraints

- $1 \leq N \leq 3000$
- $1 \leq W \leq 3000$
- $1 \leq w_i \leq W$
- $1 \leq v_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $W$
> 
> $w_1$ $v_1$
> 
> $w_2$ $v_2$
> 
> $\vdots$
> 
> $w_N$ $v_N$

## Output

Print the answer.

```input1
2 10
3 4
3 2
```

```output1
5
```

By choosing $2$ items of type $1$ and $1$ item of type $2$, the total happiness can be $5$, which is optimal.

Here, the happiness for type&nbsp;$1$ is $2 \times 4 - 2^2 = 4$, and the happiness for type&nbsp;$2$ is $1 \times 2 - 1^2 = 1$.

The total weight is $9$, which is within the capacity $10$.

```input2
3 6
1 4
2 3
2 7
```

```output2
14
```

```input3
1 10
1 7
```

```output3
12
```