Score : $900$ points

## Problem Statement

There are an integer $N$ and $M$ pairs of integers: $(a_1, b_1), (a_2, b_2), \dots, (a_M, b_M)$. Each pair $(a_i, b_i)$ satisfies $1 \leq a_i \lt b_i \leq N$.

Initally, you have all $N!$ permutations of $(1,2,\dots,N)$.<br>
You will perform $M$ operations. The $i$-th operation is as follows.

- Do the following for each of your $N!$ permutations.-   - Compare the $a_i$-th and $b_i$-th elements. If the former is greater, swap the two elements.

For each $1 \leq i \leq M$, let $S_i$ be the number of permutations of yours that are already sorted in ascending order at the end of the $i$-th operation.<br>
Print $S_1, S_2, \dots, S_M$.

Here, the input gives you pairs of integers $(x_i, y_i)$ instead of $(a_i, b_i)$. <br>
The values of $(a_i, b_i)$ can be obtained using $x_i$, $y_i$, and $S_{i-1}$ as follows. (Let $S_0 = 1$ for convenience.)

- Let $c_i = ((x_i + S_{i-1}) \bmod N) + 1$.
- Let $d_i = ((y_i + S_{i-1} \times 2) \bmod N) + 1$. (Here, it is guaranteed that $c_i \neq d_i$.)
- Let $a_i = \min(c_i, d_i)$.
- Let $b_i = \max(c_i, d_i)$.

## Constraints

- $2 \leq N \leq 15$
- $1 \leq M \leq 5 \times 10^5$
- $1 \leq a_i \lt b_i \leq N$
- $0 \leq x_i, y_i \leq N - 1$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_M$ $y_M$

## Output

Print $M$ lines. The $i$-th line should contain $S_i$.

```input1
2 1
1 1
```

```output1
2
```

You start with the permutations $(1, 2)$ and $(2, 1)$.<br>
We have $(a_1, b_1) = (1, 2)$. At the end of the first operation, you have two copies of $(1, 2)$, so you should print $2$.

```input2
3 4
0 1
2 1
1 1
0 1
```

```output2
2
4
4
6
```

$(a_i, b_i)$ in order are $(1, 2), (2, 3), (1, 3), (1, 2)$.

```input3
5 5
4 4
0 4
1 1
2 4
1 2
```

```output3
2
4
4
8
16
```

$(a_i, b_i)$ in order are $(1, 2), (3, 4), (1, 5), (2, 3), (4, 5)$.