Score : $1200$ points

## Problem Statement

There are $N$ arrays.
The length of each array is $M$ and initially each array contains integers $(1,2,...,M)$ in this order.

Mr. Takahashi has decided to perform $Q$ operations on those $N$ arrays.
For the $i$-th ($1 \leq i \leq Q$) time, he performs the following operation.

- Choose an arbitrary array from the $N$ arrays and move the integer $a_i$ ($1 \leq a_i \leq M$) to the front of that array. For example, after performing the operation on $a_i=2$ and the array $(5,4,3,2,1)$, this array becomes $(2,5,4,3,1)$.

Mr. Takahashi wants to make $N$ arrays exactly the same after performing the $Q$ operations.
Determine if it is possible or not.

## Constraints

- $2 \leq N \leq 10^5$
- $2 \leq M \leq 10^5$
- $1 \leq Q \leq 10^5$
- $1 \leq a_i \leq M$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $Q$
> 
> $a_1$ $a_2$ $...$ $a_Q$

## Output

Print `Yes` if it is possible to make $N$ arrays exactly the same after performing the $Q$ operations.
Otherwise, print `No`.

```input1
2 2
3
2 1 2
```

```output1
Yes
```

You can perform the operations as follows.

![](https://atcoder.jp/img/other/code_festival_2016_quala/gbanjthabot/E_0.png)

```input2
3 2
3
2 1 2
```

```output2
No
```

```input3
2 3
3
3 2 1
```

```output3
Yes
```

You can perform the operations as follows.

![](https://atcoder.jp/img/other/code_festival_2016_quala/gbanjthabot/E_2.png)

```input4
3 3
6
1 2 2 3 3 3
```

```output4
No
```