Score : $500$ points

## Problem Statement

Takahashi has $2N$ teeth: $N$ upper teeth and $N$ lower teeth.

The length of the $i$-th upper tooth from the left ($1 \leq i \leq N$) is $U _ i$, and the length of the $i$-th lower tooth from the left ($1 \leq i \leq N$) is $D _ i$.

His teeth are said to “fit together well” if both of the following conditions are satisfied:

- There exists an integer $H$ such that $U _ i + D _ i = H$ for every integer $i$ with $1 \leq i \leq N$.
- $\lvert U _ i - U _ {i+1} \rvert \leq X$ for every integer $i$ with $1 \leq i &lt; N$.

He can perform the following operation any number of times:

- Pay $1$ yen to use a tooth-grinding machine, choose exactly one tooth whose length is positive, and reduce its length by $1$.

No other method may be used to change the lengths of the teeth.

Find the minimum total amount of money he needs to pay to make his teeth fit together well.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq U _ i \leq 10^9 \ (1 \leq i \leq N)$
- $1 \leq D _ i \leq 10^9 \ (1 \leq i \leq N)$
- $1 \leq X \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$
> 
> $U _ 1$ $D _ 1$
> 
> $U _ 2$ $D _ 2$
> 
> $\vdots$
> 
> $U _ N$ $D _ N$

## Output

Print the answer.

```input1
4 3
3 1
4 1
5 9
2 6
```

```output1
15
```

Initially, Takahashi’s teeth have the following lengths:

![](https://img.atcoder.jp/abc395/37264cf2f8fbc7d9e0f698b6181c804e.png)

For example, you can make them fit together well in the following way:

![](https://img.atcoder.jp/abc395/eeb6b57fa9d9b6577f264baba37644c5.png)

It costs $15$ yen to achieve these lengths.

It is impossible to make them fit together well with $14$ yen or less, so print `15`.

```input2
4 1000000000
3 3
3 3
3 3
3 3
```

```output2
0
```

It is possible that the teeth already fit together well without any changes.

```input3
4 1
1000000000 1000000000
1000000000 1000000000
1000000000 1000000000
1 1
```

```output3
5999999994
```

Note that the answer may exceed the $32$-bit integer range.

```input4
15 128
748 169
586 329
972 529
432 519
408 587
138 249
656 114
632 299
984 755
404 772
155 506
832 854
353 465
387 374
567 385
```

```output4
9460
```