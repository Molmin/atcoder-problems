Score : $600$ points

## Problem Statement

There are $N$ blocks arranged in a row, numbered $1$ to $N$ from left to right.
Each block has a weight, and the weight of Block $i$ is $A_i$.
Snuke will perform the following operation on these blocks $N$ times:

- Choose one block that is still not removed, and remove it.
The cost of this operation is the sum of the weights of the blocks that are connected to the block being removed (including itself).
Here, two blocks $x$ and $y$ ( $x \leq y$ ) are *connected* when, for all $z$ ( $x \leq z \leq y$ ), Block $z$ is still not removed.

There are $N!$ possible orders in which Snuke removes the blocks.
For all of those $N!$ orders, find the total cost of the $N$ operations, and calculate the sum of those $N!$ total costs.
As the answer can be extremely large, compute the sum modulo $10^9+7$.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

For all of the $N!$ orders, find the total cost of the $N$ operations, and print the sum of those $N!$ total costs, modulo $10^9+7$.

```input1
2
1 2
```

```output1
9
```

First, we will consider the order "Block $1$ -&gt; Block $2$".
In the first operation, the cost of the operation is $1+2=3$, as Block $1$ and $2$ are connected.
In the second operation, the cost of the operation is $2$, as only Block $2$ remains.
Thus, the total cost of the two operations for this order is $3+2=5$.

Then, we will consider the order "Block $2$ -&gt; Block $1$".
In the first operation, the cost of the operation is $1+2=3$, as Block $1$ and $2$ are connected.
In the second operation, the cost of the operation is $1$, as only Block $1$ remains.
Thus, the total cost of the two operations for this order is $3+1=4$.

Therefore, the answer is $5+4=9$.

```input2
4
1 1 1 1
```

```output2
212
```

```input3
10
1 2 4 8 16 32 64 128 256 512
```

```output3
880971923
```