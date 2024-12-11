Score : $500$ points

## Problem Statement

You are given a matrix $A$ whose elements are non-negative integers.
For a pair of integers $(i, j)$ such that $1 \leq i \leq H$ and $1 \leq j \leq W$,
let $A_{i, j}$ denote the element at the $i$-th row and $j$-th column of $A$.

Let us perform the following procedure on $A$.

- First, replace each element of $A$ that is $0$ with an arbitrary **positive integer** (if multiple elements are $0$, they may be replaced with different positive integers).
- <p>Then, repeat performing one of the two operations below, which may be chosen each time, as many times as desired (possibly zero).</p>
-   - Choose a pair of integers $(i, j)$ such that $1 \leq i \lt j \leq H$ and swap the $i$-th and $j$-th rows of $A$.
-   - Choose a pair of integers $(i, j)$ such that $1 \leq i \lt j \leq W$ and swap the $i$-th and $j$-th columns of $A$.

Determine whether $A$ can be made to satisfy the following condition.

- $A_{1, 1} \leq A_{1, 2} \leq \cdots \leq A_{1, W} \leq A_{2, 1} \leq A_{2, 2} \leq \cdots \leq A_{2, W} \leq A_{3, 1} \leq \cdots \leq A_{H, 1} \leq A_{H, 2} \leq \cdots \leq A_{H, W}$.
- <p>In other words, for every two pairs of integers $(i, j)$ and $(i', j')$ such that $1 \leq i, i' \leq H$ and $1 \leq j, j' \leq W$, both of the following conditions are satisfied.</p>
-   - If $i \lt i'$, then $A_{i, j} \leq A_{i', j'}$.
-   - If $i = i'$ and $j \lt j'$, then $A_{i, j} \leq A_{i', j'}$.

## Constraints

- $2 \leq H, W$
- $H \times W \leq 10^6$
- $0 \leq A_{i, j} \leq H \times W$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $A_{1, 1}$ $A_{1, 2}$ $\ldots$ $A_{1, W}$
> 
> $A_{2, 1}$ $A_{2, 2}$ $\ldots$ $A_{2, W}$
> 
> $\vdots$
> 
> $A_{H, 1}$ $A_{H, 2}$ $\ldots$ $A_{H, W}$

## Output

If $A$ can be made to satisfy the condition in the problem statement, print `Yes`; otherwise, print `No`.

```input1
3 3
9 6 0
0 4 0
3 0 3
```

```output1
Yes
```

One can perform the operations as follows to make $A$ satisfy the condition in the problem statement, so you should print `Yes`.

- First, replace the elements of $A$ that are $0$, as shown below:

```output1
9 6 8
5 4 4
3 1 3
```

- Swap the second and third columns. Then, $A$ becomes:

```output1
9 8 6
5 4 4
3 3 1
```

- Swap the first and third rows. Then, $A$ becomes:

```output1
3 3 1
5 4 4
9 8 6
```

- Swap the first and third columns. Then, $A$ becomes the following and satisfies the condition in the problem statement.

```output1
1 3 3
4 4 5
6 8 9
```

```input2
2 2
2 1
1 2
```

```output2
No
```

There is no way to perform the operations to make $A$ satisfy the condition in the problem statement, so you should print `No`.